import { NavLink } from "react-router-dom";

import "./MainNavigation.css";
import NewsletterSignup from "../NewsLetterSignup/NewsLetterSignup";

export default function MainNavigation() {
  return (
  
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newsletter"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Newsletter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Authentication
              </NavLink>
            </li>
          </ul>
        </nav>
        <NewsletterSignup />
      </header>
  );
}
