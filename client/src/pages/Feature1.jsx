import React from "react";
import { useState, useEffect } from "react";
import { Plus, Quote } from "lucide-react";

const Feature1 = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userSession"))
  );

  // Sample data
  const [plans, setPlans] = useState([
    {
      id: 1,
      title: "Data Structure",
      weeks: 4,
      completed: 2,
      total: 6,
    },
    {
      id: 2,
      title: "Algorithms",
      weeks: 6,
      completed: 3,
      total: 10,
    },
    {
      id: 3,
      title: "System Design",
      weeks: 5,
      completed: 1,
      total: 8,
    },
  ]);

  const quotes = [
    {
      id: 1,
      text: "The most disastrous thing that you can ever learn is your first programming language.",
      author: "Alan Kay",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a6143a000885a20b12/files/67ccc03300364a80d802/view?project=6794f3920032a8c1fc91&mode=admin",
    },
    {
      id: 2,
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a6143a000885a20b12/files/67ccc03300364a80d802/view?project=6794f3920032a8c1fc91&mode=admin",
    },
    {
      id: 3,
      text: "Software is a great combination of artistry and engineering.",
      author: "Bill Gates",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a6143a000885a20b12/files/67ccc1a60007d27f628d/view?project=6794f3920032a8c1fc91&mode=admin",
    },
    {
      id: 4,
      text: "Everyone should learn how to code, it teaches you how to think.",
      author: "Steve Jobs",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a6143a000885a20b12/files/67ccc1a60007d27f628d/view?project=6794f3920032a8c1fc91&mode=admin",
    },
  ];

  const [dailyQuote, setDailyQuote] = useState(null);

  useEffect(() => {
    const getDailyQuote = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 86400000
      );
      const quoteIndex = dayOfYear % quotes.length;

      return quotes[quoteIndex];
    };

    setDailyQuote(getDailyQuote());

    const checkForNewDay = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const timeUntilMidnight = tomorrow - now;

      return setTimeout(() => {
        setDailyQuote(getDailyQuote());
        // Set up the next day's check
        const nextTimer = checkForNewDay();
        return () => clearTimeout(nextTimer);
      }, timeUntilMidnight);
    };

    const timerId = checkForNewDay();

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="border-b border-gray-100 flex items-center h-16 px-8">
        <h3 className="text-base text-gray-700">Hello, {user.name}</h3>
      </div>

      <div className="w-full flex flex-col gap-4 px-8 pt-8 pb-6">
        <h2 className="text-xl font-medium text-gray-800">My Plans</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* new plan card */}
          <div className="border border-gray-200 rounded-lg bg-white hover:bg-[#f8f8ec] transition-colors cursor-pointer flex items-center justify-center h-[180px]">
            <div className="flex flex-col items-center gap-2">
              <Plus size={20} className="text-gray-400" />
              <p className="text-sm text-gray-500">New plan</p>
            </div>
          </div>

          {/* Dynamic card data*/}
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col justify-between h-[180px] rounded-lg border border-gray-200/70 bg-[#f8f8ec] hover:scale-[102%] transition-all cursor-pointer p-4"
            >
              <div>
                <h3 className="text-base font-medium text-gray-800">
                  {plan.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{plan.weeks} weeks</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-gray-700">
                    {plan.completed}/{plan.total}
                  </span>
                </div>

                <div className="w-full bg-white rounded-full h-1.5">
                  <div
                    className="bg-[#c4e456] h-1.5 rounded-full"
                    style={{ width: `${(plan.completed / plan.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">
                  {Math.round((plan.completed / plan.total) * 100)}% complete
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Quote Section */}
      {dailyQuote && (
        <div className="w-full px-8 py-8">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#f8f8ec] to-[#f3f5e6] border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-8 relative flex items-start">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#c4e456] to-[#a9cb36]"></div>

              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 rounded-full bg-[#f0f3dc] flex items-center justify-center shadow-inner">
                  <Quote
                    size={20}
                    className="text-[#c4e456] transform -translate-y-1"
                  />
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3">
                    Today's Inspiration
                  </h3>
                  <p className="text-xl font-light text-gray-800 leading-relaxed italic">
                    "{dailyQuote.text}"
                  </p>
                </div>

                <div className="flex items-center pt-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#c4e456]/30 mr-3 shadow-sm">
                    <img
                      src={dailyQuote.image}
                      alt={dailyQuote.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">{dailyQuote.author}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature1;
