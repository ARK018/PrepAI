import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";

// Sample data for study plans
const sampleEvents = [
  {
    id: "evt001",
    name: "Algorithms Study",
    topic: "Computer Science",
    subtopic: "Sorting Algorithms",
    date: new Date(2025, 2, 10),
    isCompleted: false,
    color: "#ffcccb",
  },
  {
    id: "evt002",
    name: "Machine Learning Basics",
    topic: "AI",
    subtopic: "Supervised Learning",
    date: new Date(2025, 2, 11),
    isCompleted: false,
    color: "#c6e6fb",
  },
  {
    id: "evt003",
    name: "French Vocabulary",
    topic: "Languages",
    subtopic: "Common Phrases",
    date: new Date(2025, 2, 12),
    isCompleted: false,
    color: "#d8f3dc",
  },
  {
    id: "evt004",
    name: "Economic Principles",
    topic: "Economics",
    subtopic: "Supply and Demand",
    date: new Date(2025, 2, 14),
    isCompleted: true,
    color: "#ffd6a5",
  },
  {
    id: "evt005",
    name: "Organic Chemistry",
    topic: "Chemistry",
    subtopic: "Carbon Compounds",
    date: new Date(2025, 2, 9),
    isCompleted: false,
    color: "#caffbf",
  },
  {
    id: "evt006",
    name: "History Review",
    topic: "History",
    subtopic: "World War II",
    date: new Date(2025, 2, 10),
    isCompleted: false,
    color: "#ffe8d6",
  },
];

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("monthly"); // 'monthly' or 'weekly'
  const [events, setEvents] = useState(sampleEvents);

  // // Format time from minutes to hours and minutes
  // const formatTime = (minutes) => {
  //   const hours = Math.floor(minutes / 60);
  //   const mins = minutes % 60;
  //   return `${hours > 0 ? `${hours}h ` : ""}${mins > 0 ? `${mins}m` : ""}`;
  // };

  // Calculate the first day of the month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const firstDayOfGrid = new Date(firstDayOfMonth);
  firstDayOfGrid.setDate(firstDayOfGrid.getDate() - firstDayOfGrid.getDay());

  // Handle event click
  const handleEventClick = (eventId) => {
    console.log(`Navigating to event: ${eventId}`);
    // In a real app, you would use router navigation here
    // navigate(`/study-plan/${eventId}`);
  };

  // Handle completion toggle
  const handleCompletionToggle = (eventId, isCompleted) => {
    setEvents(
      events.map((event) => {
        if (event.id === eventId) {
          const updatedEvent = { ...event, isCompleted: !isCompleted };

          if (!isCompleted) {
            console.log({
              id: updatedEvent.id,
              name: updatedEvent.name,
              topic: updatedEvent.topic,
              subtopic: updatedEvent.subtopic,
            });
          } else {
            console.log("unchecked");
          }

          return updatedEvent;
        }
        return event;
      })
    );
  };

  // Navigate to previous month/week
  const navigatePrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "monthly") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setDate(newDate.getDate() - 7);
    }
    setCurrentDate(newDate);
  };

  // Navigate to next month/week
  const navigateNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "monthly") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  // Get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Generate the grid for monthly view
  const generateMonthlyGrid = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const monthGridDays = [];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Add days from previous month to fill the first week
    const currentDay = new Date(firstDayOfGrid);

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = currentDay.getMonth() === currentDate.getMonth();
      const isToday =
        currentDay.getDate() === new Date().getDate() &&
        currentDay.getMonth() === new Date().getMonth() &&
        currentDay.getFullYear() === new Date().getFullYear();

      const dayEvents = getEventsForDate(currentDay);

      monthGridDays.push(
        <div
          key={`day-${i}`}
          className={`border border-gray-200 min-h-32 p-1 ${
            isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"
          } ${isToday ? "border-2 border-green-400" : ""}`}
        >
          <div className="text-right text-sm mb-1">{currentDay.getDate()}</div>
          <div className="space-y-1 max-h-28 overflow-y-auto">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`rounded p-1 text-xs cursor-pointer transition-all duration-300 hover:shadow-md ${
                  event.isCompleted
                    ? "bg-gray-200 line-through text-gray-500"
                    : `bg-opacity-90 hover:bg-opacity-100`
                }`}
                style={{
                  backgroundColor: event.isCompleted ? "#d1d5db" : event.color,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEventClick(event.id);
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">{event.name}</div>
                  <div
                    className="h-4 w-4 rounded border border-gray-400 flex items-center justify-center bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCompletionToggle(event.id, event.isCompleted);
                    }}
                  >
                    {event.isCompleted && (
                      <div className="h-2 w-2 bg-green-500 rounded-sm"></div>
                    )}
                  </div>
                </div>
                <div className="text-xs text-gray-700">
                  {event.topic} {event.subtopic && `• ${event.subtopic}`}
                </div>
                <div className="text-xs flex items-center text-gray-600"></div>
              </div>
            ))}
          </div>
        </div>
      );

      currentDay.setDate(currentDay.getDate() + 1);
    }

    return (
      <div className="grid grid-cols-7  bg-white rounded-md overflow-hidden shadow-sm">
        {weekDays.map((day) => (
          <div
            key={day}
            className="p-2 text-center text-sm font-medium bg-gray-50 border-b border-gray-200"
          >
            {day}
          </div>
        ))}
        {monthGridDays}
      </div>
    );
  };

  // Generate weekly view
  const generateWeeklyView = () => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());

    const weekDays = [];
    const weekDayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);

      const isToday =
        day.getDate() === new Date().getDate() &&
        day.getMonth() === new Date().getMonth() &&
        day.getFullYear() === new Date().getFullYear();

      const dayEvents = getEventsForDate(day);

      weekDays.push(
        <div key={`week-day-${i}`} className="flex flex-col">
          <div
            className={`text-center py-2 ${
              isToday ? "bg-green-100 font-medium" : "bg-gray-50"
            }`}
          >
            <div className="text-sm font-medium">{weekDayNames[i]}</div>
            <div className={`text-lg ${isToday ? "text-green-600" : ""}`}>
              {day.getDate()}
            </div>
          </div>
          <div className="flex-1 p-2 space-y-2 overflow-y-auto max-h-96">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`rounded p-2 text-sm cursor-pointer transition-all duration-300 hover:shadow-md ${
                  event.isCompleted
                    ? "bg-gray-200 line-through text-gray-500"
                    : `bg-opacity-90 hover:bg-opacity-100`
                }`}
                style={{
                  backgroundColor: event.isCompleted ? "#d1d5db" : event.color,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEventClick(event.id);
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">{event.name}</div>
                  <div
                    className="h-5 w-5 rounded border border-gray-400 flex items-center justify-center bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCompletionToggle(event.id, event.isCompleted);
                    }}
                  >
                    {event.isCompleted && (
                      <div className="h-3 w-3 bg-green-500 rounded-sm"></div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  {event.topic} {event.subtopic && `• ${event.subtopic}`}
                </div>
                <div className="text-xs flex items-center text-gray-600 mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1 bg-white rounded-md overflow-hidden shadow-sm h-96">
        {weekDays}
      </div>
    );
  };

  return (
    <div
      className="w-full mx-auto p-4 bg-beige text-gray-800 font-sans"
      style={{ backgroundColor: "#f8f8ec" }}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={navigatePrevious}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="text-xl font-medium">
              {viewMode === "monthly"
                ? `${new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    year: "numeric",
                  }).format(currentDate)}`
                : `Week of ${new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                  }).format(
                    new Date(
                      currentDate.setDate(
                        currentDate.getDate() - currentDate.getDay()
                      )
                    )
                  )}`}
            </div>

            <button
              onClick={navigateNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-3 py-1 text-sm rounded border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Today
            </button>

            <div className="flex rounded overflow-hidden border border-gray-300">
              <button
                onClick={() => setViewMode("monthly")}
                className={`px-3 py-1 text-sm transition-colors ${
                  viewMode === "monthly"
                    ? "bg-green-100 text-green-800"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setViewMode("weekly")}
                className={`px-3 py-1 text-sm transition-colors ${
                  viewMode === "weekly"
                    ? "bg-green-100 text-green-800"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                Week
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-4">
          {viewMode === "monthly"
            ? generateMonthlyGrid()
            : generateWeeklyView()}
        </div>
      </div>
    </div>
  );
};

export default Calender;
