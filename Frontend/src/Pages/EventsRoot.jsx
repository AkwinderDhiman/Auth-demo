import { Outlet } from 'react-router-dom';

import EventsNavigation from '../Components/EventNavigation/EventNavigation.jsx';


export default function EventsRoot(){
    return(
        <>
        <EventsNavigation />
        <Outlet />
        </>
    )
  }