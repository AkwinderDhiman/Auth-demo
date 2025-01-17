import { Link } from 'react-router-dom';
import  './EventList.css';

export default function EventList({events}){
    return(
        <><div className="events">
        <h1>All Events</h1>
        <ul className="list">
          {events.map((event) => (
            <li key={event.id} className="item">
              <Link to={`/events/${event.id}`}>
                <img src={event.image} alt={event.title} />
                <div className="content">
                  <h2>{event.title}</h2>
                  <time>{event.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div></>
    )
  }