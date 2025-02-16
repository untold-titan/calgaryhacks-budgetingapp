<script>
    let expenses = [{ name: "", amount: "" }]; // Store expenses in an array

    function addExpense() {
        expenses = [...expenses, { name: "", amount: "" }]; // Add a new empty expense object
    }
</script>

<div class="flex">
    <button on:click={addExpense} class="button" style="background-color: darkblue !important;">
        New Expense
    </button>
</div>

<div class="flex">
    <label style="width: 50%;">Expense Name</label>
    <label style="width: 50%">Expense Amount</label>
</div>

<div id="expenses">
    {#each expenses as expense, index}
        <div class="flex">
            <input class="expenseName" bind:value={expenses[index].name} placeholder="Expense Name">
            <input type="text" bind:value={expenses[index].amount} placeholder="Expense Amount">
        </div>
    {/each}
</div>
