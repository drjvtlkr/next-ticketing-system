"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {

  const router= useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "hardware problems",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/Tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create Ticket.");
      }
  
      router.refresh();
      router.push("/");
      console.log("Ticket created successfully:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}>
        <h3>Create your Ticket</h3>
        <div>
          <label>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="border-2 border-gray-500"
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            id="description"
            name="description"
            type="text"
            className="border-2 border-gray-500"
            onChange={handleChange}
            required={true}
            value={formData.description}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}>
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Other Problems">Other Problems</option>
          </select>
        </div>
        <div>
          <label>Priority</label>
          <div>
            <input
              id="priority-1"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>2</label>
            <input
              id="priority-3"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
            <input
              id="priority-4"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
            <input
              id="priority-5"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
        </div>
        <div>
          <label>Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min="0"
            max="100"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="not started">Not started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button type="submit" className="hover:no-underline bg-blue-500 hover:bg-blue-accent-hover tracking-wider w-full text-center text-nav font-bold cursor-pointer uppercase px-4 py-2 rounded-md transition-colors block" value="created ticket">submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
