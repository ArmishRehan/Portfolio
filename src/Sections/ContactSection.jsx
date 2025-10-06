import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Mail, User, MessageSquare, Tag, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zchkd1d",     // Your EmailJS service ID
        "template_xnir5or",    // Your EmailJS template ID
        form.current,
        "eCCS1gTTSHMRbl8Ip"    // Your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => setStatus("❌ Failed to send. Try again later.")
      );
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact <span className="text-primary">Me</span>
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
              name="title"   // Matches {{title}} in your EmailJS template
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

          {/* Submit Button */}
          <button
            type="submit"
            className="p-3 md:p-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary/80 transition w-full md:w-auto mx-auto"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-6 text-center text-base md:text-lg">{status}</p>
        )}
      </div>
    </section>
  );
}
