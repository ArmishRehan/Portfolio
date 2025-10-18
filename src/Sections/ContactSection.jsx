import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Tag,
  Linkedin,
  Github,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zchkd1d",
        "template_xnir5or",
        form.current,
        "eCCS1gTTSHMRbl8Ip"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setStatusType("success");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send. Try again later.");
          setStatusType("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-12 text-center leading-relaxed">
          Have a question, collaboration idea, or just want to say hello?
          Fill out the form below and I’ll get back to you soon.
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/armish-rehan-171a492a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-white/5 backdrop-blur-md rounded-2xl text-sm md:text-base text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
          >
            <Linkedin size={18} className="text-primary" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href="https://github.com/ArmishRehan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-white/5 backdrop-blur-md rounded-2xl text-sm md:text-base text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
          >
            <Github size={18} className="text-primary" />
            <span>Check my GitHub</span>
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="grid gap-5">
          {/* Name */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3">
            <User className="w-5 h-5 text-primary" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent flex-1 outline-none text-sm md:text-base placeholder:text-muted-foreground"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3">
            <Tag className="w-5 h-5 text-primary" />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              className="bg-transparent flex-1 outline-none text-sm md:text-base placeholder:text-muted-foreground"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3">
            <Mail className="w-5 h-5 text-primary" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-transparent flex-1 outline-none text-sm md:text-base placeholder:text-muted-foreground"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3">
            <MessageSquare className="w-5 h-5 text-primary mt-1" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="bg-transparent flex-1 outline-none resize-none text-sm md:text-base placeholder:text-muted-foreground"
              required
            ></textarea>
          </div>

          {/* Responsive Submit Button */}
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="cosmic-button w-full sm:w-1/2 lg:w-1/3 mt-2"
            >
              Send
            </button>
          </div>


        </form>

        {/* Responsive Notification Toast */}
        {status && (
          <div
            className={`fixed bottom-4 left-1/2 sm:left-auto sm:right-6 transform -translate-x-1/2 sm:translate-x-0 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md text-sm md:text-base z-50 ${statusType === "success"
              ? "bg-green-500/10 text-green-400 border border-green-400/30"
              : "bg-red-500/10 text-red-400 border border-red-400/30"
              }`}
          >
            {statusType === "success" ? (
              <CheckCircle2 size={18} />
            ) : (
              <AlertCircle size={18} />
            )}
            <span>{status}</span>
            <button
              onClick={() => setStatus("")}
              className="ml-2 text-muted-foreground hover:text-white transition"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
