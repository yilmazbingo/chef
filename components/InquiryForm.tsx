"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setStatus("loading");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="inquire"
      className="section bg-[#22231f] text-ivory grid md:grid-cols-2 gap-12"
    >
      <div className="reveal">
        <p className="eyebrow text-gold">04 / Your invitation</p>

        <h2 className="display heading mt-5">
          Let's create
          <br />
          <em>something extraordinary.</em>
        </h2>

        <p className="mt-6 text-ivory/70 max-w-md leading-relaxed">
          Tell us a little about your occasion. The most memorable experiences
          begin with a conversation.
        </p>
      </div>

      <form className="reveal grid gap-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <label>
            Name
            <input name="Name" required placeholder="Your name" />
          </label>

          <label>
            Email
            <input
              name="Email"
              type="email"
              required
              placeholder="Your email"
            />
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <label>
            Experience
            <select name="Experience">
              <option>Private dining</option>
              <option>Celebration or event</option>
              <option>Corporate experience</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Guest count
            <input
              name="Guests"
              type="number"
              min="1"
              placeholder="Number of guests"
            />
          </label>
        </div>

        <label>
          Preferred date
          <input name="Date" type="date" />
        </label>

        <label>
          Tell us about your occasion
          <textarea
            name="Details"
            rows={3}
            placeholder="Location, menu ideas, special requests…"
          />
        </label>

        <button
          className="gold-btn justify-between disabled:opacity-50"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending inquiry..." : "Send inquiry"}

          <span>↗</span>
        </button>

        {status === "success" && (
          <div role="status" className="border border-gold/50 p-4 text-sm">
            <p className="text-gold">Thank you for your inquiry.</p>

            <p className="mt-2 text-ivory/70">
              Your message has been submitted successfully. We look forward to
              discussing your occasion and creating something extraordinary
              together.
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="border border-red-400/50 p-4 text-sm text-red-300"
          >
            Unable to send your inquiry. Please try again.
          </div>
        )}
      </form>
    </section>
  );
}
