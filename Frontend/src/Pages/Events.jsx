// Imports
import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../Components/EventList/EventList.jsx';

// Function to load events
async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch events.' },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

// The loader function for deferred data
export function loader() {
    return defer({
        events: loadEvents(),
    });
}

// Component to render events with Suspense and Await
export default function EventsPage() {
    const { events } = useLoaderData();

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}
