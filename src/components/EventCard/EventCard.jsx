import * as eventService from '../../services/eventService'
import styles from './EventCard.module.css'
import { Link } from 'react-router-dom'

const EventCard = (props) => {

  const date = new Date(props.event.date).toLocaleDateString()
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        <h3>{props.event.name}</h3>
        <h4>{date}</h4>
        <h4>{props.event.time}</h4>
        <h4>{props.event.location}</h4>
        <p>{props.event.description}</p>
        <div className={styles.buttons}>
        {props.event.owner === props.user.profile &&
          <>
            <Link to={`/events/${props.event._id}/edit`} state={props.event}>Edit</Link>
            <button onClick={() => props.handleDeleteEvent(props.event._id)}>Delete</button>
          </>
        }
        </div>
      </div>
    </div>
  )
}

export default EventCard