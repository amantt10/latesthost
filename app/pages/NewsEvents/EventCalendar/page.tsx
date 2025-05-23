"use client"
import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React, { useState } from 'react'
import { FaList, FaTh, FaRegFileAlt } from 'react-icons/fa' // Import icons

// Sample events data
const events = [
  { id: 1, title: "Event 1", description: "This is the first event", date: "2025-03-25", category: "Workshop" },
  { id: 2, title: "Event 2", description: "This is the second event", date: "2025-03-25", category: "Seminar" },
  { id: 3, title: "Event 3", description: "This is the third event", date: "2025-03-29", category: "Conference" },
  { id: 4, title: "Event 4", description: "This is the fourth event", date: "2025-03-27", category: "Webinar" },
];

// Utility function to parse date as local
const parseLocalDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
};

// Function to group events by date
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

const groupEventsByDate = (events: Event[]) => {
  return events.reduce((acc: Record<string, Event[]>, event) => {
    const eventDate = event.date;
    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }
    acc[eventDate].push(event);
    return acc;
  }, {});
};

const page = () => {
  const [viewOption, setViewOption] = useState("list"); // Default view is list
  const [filterOption, setFilterOption] = useState("all"); // Default filter is "All Current Events"
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to current month

  // Normalize today's date to remove the time
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight

  // Filter events based on the selected filter option
  const filteredEvents = events.filter((event) => {
    const eventDate = parseLocalDate(event.date);

    if (filterOption === "today") {
      return eventDate.getTime() === today.getTime(); // Only today's events
    } else if (filterOption === "thisWeek") {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)
      return eventDate >= startOfWeek && eventDate <= endOfWeek;
    } else if (filterOption === "byMonth") {
      return eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === today.getFullYear();
    } else {
      // Default: All current events (today or future)
      return eventDate >= today;
    }
  });

  // Group events by date
  const groupedEvents = groupEventsByDate(filteredEvents);

  // Sort dates in ascending order
  const sortedDates = Object.keys(groupedEvents).sort(
    (a, b) => parseLocalDate(a).getTime() - parseLocalDate(b).getTime()
  );

  // Get the name of the selected month
  const selectedMonthName = new Date(0, selectedMonth).toLocaleString("default", { month: "long" });

  return (
    <>
      <Mainnavbar />
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-10">Event Calendar</h1>

        {/* Filter Dropdown */}
        <div className="mb-6">
          <label htmlFor="filter" className="block text-lg font-medium mb-2">Filter Events:</label>
          <select
            id="filter"
            className="px-4 py-2 border rounded"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">All Current Events</option>
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="byMonth">By Month</option>
          </select>

          {/* Month Selector (only visible when "By Month" is selected) */}
          {filterOption === "byMonth" && (
            <div className="mt-4">
              <label htmlFor="month" className="block text-lg font-medium mb-2">Select Month:</label>
              <select
                id="month"
                className="px-4 py-2 border rounded"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {new Date(0, i).toLocaleString("default", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Display message if no events are found */}
        {filteredEvents.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            {filterOption === "today" && <p>No events today.</p>}
            {filterOption === "thisWeek" && <p>No events this week.</p>}
            {filterOption === "byMonth" && <p>No events in {selectedMonthName}.</p>}
            {filterOption === "all" && <p>No current events.</p>}
          </div>
        ) : (
          <>
            {/* View Options */}
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded flex items-center space-x-2 ${
                  viewOption === "list" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setViewOption("list")}
              >
                <FaList role='none'/> {/* List icon */}
              </button>
              <button
                className={`px-4 py-2 rounded flex items-center space-x-2 ${
                  viewOption === "grid" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setViewOption("grid")}
              >
                <FaTh role='none'/> {/* Grid icon */}
              </button>
              <button
                className={`px-4 py-2 rounded flex items-center space-x-2 ${
                  viewOption === "summary" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setViewOption("summary")}
              >
                <FaRegFileAlt role='none'/> {/* Summary icon */}
              </button>
            </div>

            {/* Display events grouped by date */}
            <div className="mt-8">
              {sortedDates.map((date) => (
                <div key={date} className="mb-8">
                  {/* Display the date */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {parseLocalDate(date).toLocaleDateString(undefined, {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </h2>

                  {/* Display events for the date */}
                  <div className="space-y-4">
                    {viewOption === "list" && (
                      <div>
                        {groupedEvents[date].map((event) => (
                          <div key={event.id} className="p-4 border rounded shadow">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p className="text-lg text-gray-600">{event.description}</p>
                            <p className="text-sm text-gray-500">Category: {event.category}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {viewOption === "grid" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedEvents[date].map((event) => (
                          <div key={event.id} className="p-4 border rounded shadow">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p className="text-sm text-gray-500">
                              Date: {parseLocalDate(event.date).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-500">Category: {event.category}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {viewOption === "summary" && (
                      <div>
                        {groupedEvents[date].map((event) => (
                          <div key={event.id} className="p-4 border-b border-gray-200">
                            <h3 className="text-lg font-bold">{event.title}</h3>
                            <p className="text-sm text-gray-500">
                              Date: {parseLocalDate(event.date).toLocaleDateString()} | Category: {event.category}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default page;