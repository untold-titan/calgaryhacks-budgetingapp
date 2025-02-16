<script>
    let expenses = [{ name: "", amount: "" }]; // Store expenses in an array

    function addExpense() {
        expenses = [...expenses, { name: "", amount: "", date: ""}]; // Add a new empty expense object
    }
</script>

<div class="flex">
    <button on:click={addExpense} class="button" style="background-color: darkblue !important;">
        New Expense
    </button>
</div>
<br>
<div class="flex">
    <label style="width: 33.3%;">Expense Name</label>
    <label style="width: 33.3%">Expense Amount</label>
    <label style="width: 33.3%">Expense Date</label>
</div>

<div id="expenses">
    {#each expenses as expense, index}
        <div class="flex">
            <input class="expenseName" bind:value={expenses[index].name} placeholder="Expense Name">
            <input style="width: 33.3%" type="text" bind:value={expenses[index].amount} placeholder="Expense Amount">
            <input style="width: 33.3%" type="date" bind:value={expenses[index].date}>
        </div>
    {/each}
</div>
