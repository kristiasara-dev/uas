import React, { useEffect, useState } from "react";

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = "AIzaSyCPfyrTS4_uemvSljLsyXv7S90xUumhm4M";
  const calendarId = "raydenreganta1804@gmail.com";

  useEffect(() => {
    const loadCalendarEvents = async () => {
      try {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          calendarId
        )}/events?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setEvents(data.items);
        } else {
          setError("Tidak ada acara yang ditemukan.");
        }
      } catch (err) {
        setError("Gagal memuat acara.");
      }
    };

    loadCalendarEvents();
  }, []);

  return (
    <div id="events">
      {error ? (
        <p>{error}</p>
      ) : (
        events.map((event, index) => (
          <div className="event" key={index}>
            <h3>{event.summary || "Tanpa Judul"}</h3>
            <p>
              Tanggal:{" "}
              {new Date(event.start?.dateTime || event.start?.date).toLocaleString(
                "id-ID",
                {
                  dateStyle: "long",
                  timeStyle: "short",
                }
              )}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default CalendarEvents;
