import { Link, useSubmit } from 'react-router-dom';
import  './EventItem.css';

export default function EventItem({ event }){
    const submit = useSubmit();
  
    function startDeleteHandler() {
      const proceed = window.confirm('Are you sure?');
  
      if (proceed) {
        submit(null, { method: 'delete' });
      }
    }
    return(
        <> <article className="event">
        <img src={event.image} alt={event.title} />
        <h1>{event.title}</h1>
        <time>{event.date}</time>
        <p>{event.description}</p>
        <menu className="actions">
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
      </>
    )
  }