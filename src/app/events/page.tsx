"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./events.module.css";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
}

const FindEventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      name: "Summer Music Festival",
      date: "2024-07-15",
      location: "Central Park",
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      date: "2024-09-20",
      location: "Convention Center",
    },
    {
      id: 3,
      name: "Food and Wine Expo",
      date: "2024-08-05",
      location: "City Hall",
    },
    { id: 4, name: "Marathon", date: "2024-10-10", location: "Downtown" },
  ]);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Events</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <ul className={styles.eventList}>
        {filteredEvents.map((event) => (
          <li key={event.id} className={styles.eventItem}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
      {filteredEvents.length === 0 && (
        <p className={styles.noResults}>
          No events found. Try a different search term.
        </p>
      )}
      <Link href="/" className={styles.backLink}>
        Back to Home
      </Link>
    </div>
  );
};

export default FindEventsPage;
