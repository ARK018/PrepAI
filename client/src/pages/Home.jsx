import React, { useState, useEffect } from "react";
import {
  Sparkles,
  BookOpen,
  Brain,
  BarChart3,
  Users,
  ChevronDown,
  ChevronRight,
  Star,
  ArrowRight,
  ArrowDown,
  Check,
  Menu,
  X,
  Calendar,
  LineChart,
  CheckSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import image from "../assets/image.png";
import { useAuth } from "../lib/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigateClick = () => {
    const selected = localStorage.getItem("selected");
    if (user) {
      if (selected === "feature2") {
        localStorage.setItem("selected", "feature1");
        navigate("/dashboard/feature1");
      } else {
        navigate("/dashboard/feature2");
      }
      console.log(selected);
    } else {
      navigate("signin");
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Computer Science Student",
      image: image,
      quote:
        "Demo transformed my study habits. The AI-powered scheduling helped me improve my grades by 20% in just one semester!",
    },
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      image: image,
      quote:
        "The adaptive quizzes are incredibly effective. Demo identified my weak areas and helped me focus my study time where it matters most.",
    },
    {
      name: "Michael Torres",
      role: "MBA Candidate",
      image: image,
      quote:
        "I love how Demo adjusts in real-time to my progress. It's like having a personal study coach that knows exactly what I need.",
    },
  ];

  return (
    <div className="bg-[#ffffff] text-black min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-24 md:pb-32 px-4 relative">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 40% 20%, rgba(196, 228, 86, 1) 0%, transparent 45%)",
          }}
        />

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-[#c4e456]/10 rounded-full blur-xl" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Study Smarter with{" "}
              <span className="text-[#c4e456] relative">
                AI-Powered
                <div className="absolute -right-2 -top-2">
                  <Sparkles
                    size={20}
                    className="text-[#1e2508] animate-pulse"
                  />
                </div>
              </span>{" "}
              Learning
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Personalized study plans that adapt in real-time to your learning
              style, progress, and goals.
            </p>
            <button
              className="bg-[#c4e456] text-black px-8 py-3 rounded-md font-medium hover:bg-[#d2ee7a] transition-all duration-300 shadow-lg shadow-[#c4e456]/20 group flex items-center space-x-2"
              onClick={handleNavigateClick}
            >
              <span>Get My Study Plan</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#f8f8ec]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-[#c4e456]">Demo</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered study planner adapts to your unique learning style,
              helping you achieve your academic goals with less stress and
              better results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="bg-[#c4e456]/50 p-6 rounded-lg border border-gray-200 hover:border-[#000000] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5"
              style={{
                transform: `translateY(${
                  scrollY > 300 ? (scrollY - 300) * -0.05 : 0
                }px)`,
              }}
            >
              <div className="bg-[#c4e456] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain size={24} className="text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptive AI Learning</h3>
              <p className="text-gray-600">
                Our AI constantly analyzes your performance patterns and adapts
                your study plan in real-time for maximum efficiency.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-[#c4e456]/50 p-6 rounded-lg border border-gray-200 hover:border-[#000000] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5"
              style={{
                transform: `translateY(${
                  scrollY > 300 ? (scrollY - 300) * -0.02 : 0
                }px)`,
              }}
            >
              <div className="bg-[#c4e456]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Smart Insights & Analytics
              </h3>
              <p className="text-gray-600">
                Get detailed analytics about your study habits, strengths, and
                areas that need improvement with actionable recommendations.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-[#c4e456]/50 p-6 rounded-lg border border-gray-200 hover:border-[#000000] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5"
              style={{
                transform: `translateY(${
                  scrollY > 300 ? (scrollY - 300) * -0.08 : 0
                }px)`,
              }}
            >
              <div className="bg-[#c4e456]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gamified Experience</h3>
              <p className="text-gray-600">
                Stay motivated with streaks, badges, and progress tracking that
                make studying feel less like work and more like play.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="bg-[#c4e456]/50 p-6 rounded-lg border border-gray-200 hover:border-[#000000] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5"
              style={{
                transform: `translateY(${
                  scrollY > 500 ? (scrollY - 500) * -0.05 : 0
                }px)`,
              }}
            >
              <div className="bg-[#c4e456]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Learning</h3>
              <p className="text-gray-600">
                Connect with AI-matched study partners who share your learning
                goals and complement your strengths and weaknesses.
              </p>
            </div>

            {/* Feature 5 */}
            <div
              className="bg-[#c4e456]/50 p-6 rounded-lg border border-gray-200 hover:border-[#000000] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5"
              style={{
                transform: `translateY(${
                  scrollY > 500 ? (scrollY - 500) * -0.02 : 0
                }px)`,
              }}
            >
              <div className="bg-[#c4e456]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Quizzes</h3>
              <p className="text-gray-600">
                Our AI generates personalized quizzes that focus on your weak
                areas, ensuring you master difficult concepts faster and retain
                information longer.
              </p>
            </div>

            {/* Feature 6 */}
            <div
              className="bg-[#c4e456]/50 p-6 rounded-lg border border-gray-200 hover:border-[#000000] transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5"
              style={{
                transform: `translateY(${
                  scrollY > 500 ? (scrollY - 500) * -0.08 : 0
                }px)`,
              }}
            >
              <div className="bg-[#c4e456]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ArrowDown size={24} className="text-[#000000]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Targeted Revisions</h3>
              <p className="text-gray-600">
                The system automatically schedules review sessions for topics
                you struggle with, using spaced repetition to optimize long-term
                memory retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-[#ffffff]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-[#c4e456]">Demo</span> Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered system adapts to your unique learning patterns to
              create the perfect study experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Line connector for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c4e456]/0 via-[#c4e456]/30 to-[#c4e456]/0"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[#f8f8ec] p-6 rounded-lg border border-gray-200 hover:border-[#c4e456]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ffffff] border-2 border-[#c4e456] text-[#c4e456] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-center">
                    Set Your Goals
                  </h3>
                  <p className="text-gray-600 text-center">
                    Tell us what you're studying, your deadlines, and your
                    learning preferences
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-[#f8f8ec] p-6 rounded-lg border border-gray-200 hover:border-[#c4e456]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ffffff] border-2 border-[#c4e456] text-[#c4e456] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-center">
                    AI Creates Your Plan
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our AI generates a personalized study plan optimized for
                    your specific needs
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-[#f8f8ec] p-6 rounded-lg border border-gray-200 hover:border-[#c4e456]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ffffff] border-2 border-[#c4e456] text-[#c4e456] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-center">
                    Track Your Progress
                  </h3>
                  <p className="text-gray-600 text-center">
                    Study with the plan and take AI-generated quizzes to track
                    your understanding
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-[#f8f8ec] p-6 rounded-lg border border-gray-200 hover:border-[#c4e456]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4e456]/5 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ffffff] border-2 border-[#c4e456] text-[#c4e456] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-center">
                    AI Adapts & Improves
                  </h3>
                  <p className="text-gray-600 text-center">
                    The system constantly optimizes your plan based on your
                    performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              className="bg-[#c4e456] text-black px-8 py-3 rounded-md font-medium hover:bg-[#d2ee7a] transition-all duration-300 shadow-lg shadow-[#c4e456]/20 group inline-flex items-center space-x-2"
              onClick={handleNavigateClick}
            >
              <span>Get Started Now</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-[#f8f8ec]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of students have transformed their academic performance
              with Demo
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-[#ffffff] p-8 rounded-lg border border-gray-200 relative">
              <div className="absolute -top-6 -left-6">
                <div className="text-6xl text-[#c4e456]">"</div>
              </div>

              <div className="mb-6">
                <p className="text-xl italic">
                  {testimonials[activeTestimonial].quote}
                </p>
              </div>

              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
                <div className="ml-auto flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#c4e456] fill-[#c4e456]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-[#c4e456]" : "bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:border-[#c4e456] transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronDown size={20} className="transform rotate-90" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:border-[#c4e456] transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronDown size={20} className="transform -rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(196, 228, 86, 0.4) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform <br />
            Your Study Habits?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            Join thousands of students who have already improved their grades
            and reduced study stress with Demo's AI-powered study planner.
          </p>

          <div className="bg-[#ffffff]/80 backdrop-blur-md max-w-lg mx-auto p-8 rounded-xl border border-[#c4e456]/20 shadow-xl shadow-[#c4e456]/5">
            <div className="space-y-6">
              <div
                className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                onClick={handleNavigateClick}
              >
                <button className="bg-[#c4e456] text-black px-6 py-3 rounded-md font-medium hover:bg-[#d2ee7a] transition-all duration-300 shadow-lg shadow-[#c4e456]/20 whitespace-nowrap">
                  Get Started Free
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check size={16} className="text-[#c4e456] mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-[#c4e456] mr-2" />
                  <span>Just Planify</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-[#c4e456] mr-2" />
                  <span>Compete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Demo</h2>
              <p className="mb-4">
                Empowering your workflow with intuitive solutions designed for
                modern teams.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#c4e456] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#c4e456] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#c4e456] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c4e456] transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              &copy; 2025 Demo. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#c4e456] transition-colors duration-300 mr-4"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#c4e456] transition-colors duration-300 mr-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#c4e456] transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
