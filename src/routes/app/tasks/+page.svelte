<script>
    import Calendar, { createDate } from "@event-calendar/core";
    import { fade } from "svelte/transition";
    import DayGrid from "@event-calendar/day-grid";
    import "@event-calendar/core/index.css";
    import "../../../styles/styles.css";

    let plugins = [DayGrid];
    let dialog = false;

    let eventTitle = "";
    let eventDate = "";

    let options = {
        view: "dayGridMonth",
        events: [], // Ensure events array exists
    };

    function addEvent() {
        if (!eventTitle || !eventDate) {
            alert("Please enter both a title and a date.");
            return;
        }
        console.log(eventDate);
        options = {
            ...options,
            events: [
                ...options.events,
                {
                    allDay: true,
                    title: eventTitle, 
                    start: new Date(`${eventDate}T00:00:00`), // Fix the timezone issue
                    end: new Date(`${eventDate}T00:00:00`)
                },
            ],
        };
        eventTitle = "";
        eventDate = "";
        dialog = false;
    }
</script>

<h1 class="title">Calendar</h1>

<!-- Button to open the modal -->
<button
    class="button"
    style="background-color:mediumseagreen !important;width: 20%!important;margin-left:10px"
    on:click={() => {
        dialog = true;
    }}
>
    Add Reminder
</button>

<!-- Calendar -->
<Calendar {plugins} {options} />

<!-- Modal -->
{#if dialog}
    <div class="dialog" in:fade out:fade>
        <h1>New Event</h1>
        <input bind:value={eventTitle} type="text" placeholder="Event Name" />
        <input bind:value={eventDate} type="date" />
        <button on:click={() => (dialog = false)}>Cancel</button>
        <button on:click={addEvent}>Create!</button>
    </div>
    <div
        class="acrylic"
        on:click={() => (dialog = false)}
        in:fade
        out:fade
    ></div>
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
        margin-bottom: 10px;
    }
    .acrylic {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
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
    }
</style>
