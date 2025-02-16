<script>
  import { onMount } from "svelte";
  import { user as userStore } from "$lib/stores";
  import Loading from "../../../components/Loading.svelte";
  import Gauge from "../../../components/Gauge.svelte";
  import Timeline from "../../../components/Timeline.svelte";
  import {
    collection,
    doc,
    getDoc,
    addDoc,
    getDocs,
    getFirestore,
    query,
    where,
    orderBy,
  } from "firebase/firestore";
  import { fade } from "svelte/transition";

  let loading = $state(false);
  let dialog = $state(false);
  let user = $state();
  let annual = $state(0);
  let alreadyPaid = $state(0);
  let totalMonth = $state(0);
  let expenses = $state([]);

  let expenseName = $state();
  let expenseAmnt = $state();
  let expenseDate = $state();

  userStore.subscribe((usr) => {
    user = usr;
  });

  const db = getFirestore();

  async function AddNewExpense() {
    loading = true;
    await addDoc(collection(db, "expenses"), {
      name: expenseName,
      amount: expenseAmnt,
      repeatDate: expenseDate,
      userId: user.uid,
    });
    await LoadDataFromDb();
    loading = false;
    dialog = false;
  }

  function ToDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  async function LoadDataFromDb() {
    const expenseRef = collection(db, "expenses");

    const q = query(expenseRef, where("userId", "==", user.uid), orderBy("repeatDate","asc"));

    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      let data = { ...doc.data() };
      let date = new Date();
      let dateData = data.repeatDate.split("-")
      date.setYear(Number(dateData[0]))
      date.setMonth(Number(dateData[1]) - 1)
      date.setDate(Number(dateData[2]))
      data.date = date;
      // data.date.setYear(new Date().getFullYear());

      let now = new Date();
      console.log(data.date);
      if (data.date < now) {
        alreadyPaid += Number(data.amount);
      }
      totalMonth += Number(data.amount);

      expenses.push(data);
    });

    const budgetDock = await getDoc(doc(db, "budgets", user.uid));

    if (budgetDock.exists()) {
      annual = budgetDock.data().income;
    }

    console.log(expenses);
  }

  onMount(async () => {
    loading = true;

    await LoadDataFromDb();

    loading = false;
  });
</script>

{#if dialog}
  <div class="dialog" in:fade out:fade>
    <h1>New Expense</h1>
    <input bind:value={expenseName} placeholder="Expense Name" />
    <input bind:value={expenseAmnt} placeholder="Amount" type="number" />
    <input bind:value={expenseDate} type="date" /><br />
    <button onclick={() => (dialog = false)}>Cancel</button>
    <button onclick={AddNewExpense}>Create!</button>
  </div>
  <div class="acrylic" onclick={() => (dialog = false)} in:fade out:fade></div>
{/if}
{#if loading}
  <div class="loading">
    <Loading />
  </div>
{:else}
  <div class="cont">
    <div class="gauges">
      <Gauge
        topText={"$" + annual}
        bottomText="Annual Income"
        percent={((new Date().getMonth() + 1) / 12) * 100}
        remaining={Math.ceil(new Date().getMonth() + 1) * (annual / 12) +
          " out of " +
          annual}
      />
      <Gauge
        topText={"$" + alreadyPaid}
        bottomText="Monthly Expenses"
        percent={(alreadyPaid / totalMonth) * 100}
        remaining={alreadyPaid + " out of " + totalMonth}
      />
    </div>
    <Timeline {expenses} />
    <div class="addexpensecont">
      <button class="fab" onclick={() => (dialog = true)}>+</button>
    </div>
  </div>
{/if}

<style>
  .dialog {
    position: absolute;
    width: 400px;
    height: 400px;
    background-color: #202124;
    z-index: 11;
    border-radius: 15px;
    top: 200px;
    transform: translateX(-50%);
    left: 50%;
    text-align: center;
    padding-top: 30px;
  }
  .dialog input {
    width: 300px;
  }
  .acrylic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }
  .fab {
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: #174ea6;
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
  }
  .addexpensecont {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
  .cont {
    display: flex;
  }
  .loading {
    margin-top: 200px;
  }
  .gauges {
    margin-top: 10%;
    display: flex;
    width: 70%;
  }
  .dialog button {
    margin-top: 20px;
    background-color: #174ea6; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 2.5px;
    margin-left: 5px;
    margin-left: 5px;
  }
</style>
