"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-8">
      <h1 className="text-primary text-3xl font-bold">Contact Us</h1>
      <p className="text-neutral-dark mt-4">
        Have questions? Reach out to us anytime!
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border border-neutral-dark rounded-md"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border border-neutral-dark rounded-md"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border border-neutral-dark rounded-md"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-neutral-light py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
