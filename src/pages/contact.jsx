"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Facebook, MessageSquare } from "lucide-react";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Caraga State University, Ampayon, Butuan City 8600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "chci@carsu.edu.ph",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/csuchci",
    href: "https://www.facebook.com/csuchci",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const updateField = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setErrors((prev) => {
      if (!prev[fieldName]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[fieldName];
      return nextErrors;
    });

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  const getFieldClassName = (fieldName, isTextArea = false) =>
    [
      "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20",
      isTextArea ? "resize-none" : "",
      errors[fieldName] ? "border-destructive" : "border-input",
    ]
      .filter(Boolean)
      .join(" ");

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setSubmitStatus("idle");
    setSubmitMessage("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (responseData.errors) {
          setErrors(responseData.errors);
        }

        setSubmitStatus("error");
        setSubmitMessage(
          responseData.message || "We could not send your message right now. Please try again later.",
        );
        return;
      }

      setSubmitStatus("success");
      setSubmitMessage(
        responseData.message ||
          "Message sent successfully. We will get back to you as soon as possible.",
      );
      setErrors({});
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("We could not send your message right now. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-16 bg-linear-to-b from-white via-blue-50/40 to-white"
    >
      {/* 🔵 Background Design Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* left accent */}
        <div className="absolute top-20 -left-30 w-75 h-75 bg-[#3A7CC3]/10 rounded-full blur-3xl" />

        {/* right accent */}
        <div className="absolute bottom-10 -right-30 w-65 h-65 bg-[#0A3D91]/10 rounded-full blur-3xl" />

        {/* subtle tech grid overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#0A3D91_1px,transparent_1px),linear-gradient(90deg,#0A3D91_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>
      <div className="relative mx-auto max-w-8xl px-4 lg:px-8">
        {/* Header */}
        <div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
              <MessageSquare className="h-3.5 w-3.5" />
              Reach Out
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground leading-relaxed">
              Have questions about our research, services, or membership? We&apos;d love to hear
              from you.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              {/* Contact info cards */}
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-bold uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-foreground leading-relaxed">
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-words text-primary underline-offset-4 hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                  </div>
                </div>
              ))}

              {/* Decorative CTA card */}
              <div className="flex-1 rounded-xl bg-primary p-6 text-primary-foreground">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-lg font-bold">Let&apos;s Collaborate</h4>
                <p className="mt-2 text-base leading-relaxed text-primary-foreground/80">
                  Whether you&apos;re an academic institution, a government agency, or a private
                  organization, we welcome partnerships that drive innovation and community impact.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border h-full border-border bg-card p-6 shadow-lg md:p-8"
            >
              <h3 className="mb-6 font-heading text-xl font-bold text-foreground">
                Send Us a Message
              </h3>

              <div className="flex flex-col gap-5">
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-4 block text-base font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={getFieldClassName("fullName")}
                      placeholder="John Doe"
                      autoComplete="name"
                      required
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-xs text-destructive">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-4 block text-base font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={getFieldClassName("email")}
                      placeholder="john@example.com"
                      autoComplete="email"
                      required
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-4 block text-base font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={getFieldClassName("subject")}
                    placeholder="Inquiry about services"
                    autoComplete="off"
                    required
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-destructive">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-4 block text-base font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={getFieldClassName("message", true)}
                    placeholder="Tell us how we can help..."
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  aria-busy={submitStatus === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  {submitStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
                {submitMessage && (
                  <p
                    aria-live="polite"
                    className={`text-base ${
                      submitStatus === "success" ? "text-green-600" : "text-destructive"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
