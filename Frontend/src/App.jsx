import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./Pages/EditEvent";
import ErrorPage from "./Pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./Pages/EventDetail.jsx";
import EventsPage, { loader as eventsLoader } from "./Pages/Events";
import EventsRootLayout from "./Pages/EventsRoot";
import HomePage from "./Pages/Home";
import NewEventPage from "./Pages/NewEvent";
import RootLayout from "./Pages/Root";
import { action as manipulateEventAction } from "./Components/EventForm/EventForm.jsx";
import NewsletterPage, {
  action as newsletterAction,
} from "./Pages/NewsLetter.jsx";
import Authentication, {
  action as AuthenticationAction,
} from "./Pages/Authentication.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "auth",
          element: <Authentication />,
          action: AuthenticationAction,
        },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
