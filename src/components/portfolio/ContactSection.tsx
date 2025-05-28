// @ts-ignore
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "../../hooks/use-toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email",
        variant: "destructive"
      });
      return;
    }

    emailjs.sendForm(
      "service_y5uejwo",      // Your service ID
      "template_006mnjm",      // Your template ID (must create one)
      form.current!,
      "Nma3nJqH13GnxzCBK"       // Your EmailJS public key
    )
    .then(() => {
      toast({
        title: "Success",
        description: "Your email has been sent!",
      });
      setEmail("");
    })
    .catch((error: unknown) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Email
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="mailto:kohlirishit18@gmail.com" className="text-gray-600 hover:text-blue-600">
              <Mail size={24} />
            </a>
            <a href="https://github.com/rish0018" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rishit-kohli-805383282/" className="text-gray-600 hover:text-blue-800">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
