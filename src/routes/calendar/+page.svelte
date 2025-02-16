<script>
    import { createEventDispatcher } from 'svelte';
    import Calendar, { createDate } from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';
    import '@event-calendar/core/index.css';
    import '../../styles/styles.css'
    import Navigation from '../../components/Navigation.svelte';

    let plugins = [DayGrid];
    let showModal = false; // Controls the modal visibility

    let eventTitle = '';
    let eventDate = '';
    let events = [];

    let options = {
        view: 'dayGridMonth',
        events
    };

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }

    function addEvent() {
        if (!eventTitle || !eventDate) {
            alert("Please enter both a title and a date.");
            return;
        }

        // Add new event to the array
        events = [...events, {
            id: String(Date.now()),
            title: eventTitle,
            start: createDate(eventDate) // Convert to correct format
        }];

        // Reset form and close modal
        eventTitle = '';
        eventDate = '';
        showModal = false;
    }
</script>

<Navigation/>
<h1 class="title">Calendar</h1>

<!-- Button to open the modal -->
<button class="button" style="background-color:mediumseagreen !important;width: 20%!important;margin-left:10px" on:click={openModal}>Add Reminder</button>

<!-- Calendar -->
<div id="ec"></div>
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
                <button on:click={addEvent}>Add</button>
                <button on:click={closeModal}>Cancel</button>
            </div>
        </div>
    </div>
{/if}





