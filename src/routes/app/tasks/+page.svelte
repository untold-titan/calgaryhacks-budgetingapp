<script>
    import { createEventDispatcher } from 'svelte';
    import Calendar, { createDate } from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';
    import '@event-calendar/core/index.css';
    import '../../../styles/styles.css'

    let plugins = [DayGrid];
    let showModal = $state(false); // Controls the modal visibility

    let eventTitle = $state("");
    let eventDate = $state("");
    let options = $state({view: 'dayGridMonth',events:[]})

    function addEvent() {
        if (!eventTitle || !eventDate) {
            alert("Please enter both a title and a date.");
            return;
        }

        // Add new event to the array
        options.events.push({
            // id: String(Date.now()),
            allDay: true,
            title: eventTitle,
            start: createDate(eventDate), // Convert to correct format
            // end: createDate(eventDate) // Convert to correct format
        });

        // Reset form and close modal
        eventTitle = '';
        eventDate = '';
        showModal = false;

        console.log(options)
    }
</script>

<h1 class="title">Calendar</h1>

<!-- Button to open the modal -->
<button class="button" style="background-color:mediumseagreen !important;width: 20%!important;margin-left:10px" onclick={() => showModal = true}>Add Reminder</button>

<!-- Calendar -->
<Calendar {plugins} {options} />

<!-- Modal -->
{#if showModal}
    <div class="modal">
        <div class="modal-content">
            <h2>Add Reminder</h2>
            <label>Title:</label>
            <input type="text" bind:value={eventTitle} placeholder="Enter event title" /><br>
            
            <label>Date:</label>
            <input type="date" bind:value={eventDate} />
            
            <div class="modal-buttons">
                <button onclick={addEvent}>Add</button>
                <button onclick={() => showModal = false}>Cancel</button>
            </div>
        </div>
    </div>
{/if}





