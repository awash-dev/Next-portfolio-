import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight, BsLaptop, BsGlobe, BsGeoAlt, BsServer } from "react-icons/bs";
import { motion } from "framer-motion";

// Simple fadeIn animation
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 60 : 0 },
  show: { opacity: 1, y: 0, transition: { delay } }
});

const Contact = () => {
  const formRef = useRef();
  const [extraInfo, setExtraInfo] = useState({
    device: "Unknown",
    browser: "Unknown",
    location: "Unknown",
    ip: "Unknown"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const detectDevice = () => {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) return "Android Mobile";
      if (/iPhone|iPad|iPod/i.test(ua)) return "iOS Device";
      if (/Windows/i.test(ua)) return "Windows PC";
      if (/Macintosh/i.test(ua)) return "Mac Computer";
      return "Unknown Device";
    };

    const detectBrowser = () => {
      const ua = navigator.userAgent;
      if (/Chrome/.test(ua) && !/Edge|OPR/.test(ua)) return "Chrome";
      if (/Firefox/.test(ua)) return "Firefox";
      if (/Safari/.test(ua) && !/Chrome/.test(ua)) return "Safari";
      if (/Edge/.test(ua)) return "Edge";
      if (/OPR/.test(ua)) return "Opera";
      return "Unknown Browser";
    };

    const fetchIP = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        return data.ip;
      } catch {
        return "Unknown";
      }
    };

    const fetchLocation = async (ip) => {
      if (ip === "Unknown") return "Unknown";
      try {
        const res = await fetch(`https://ipapi.co/${ip}/city/`);
        const city = await res.text();
        return city || "Unknown";
      } catch {
        return "Unknown";
      }
    };

    const initializeInfo = async () => {
      const device = detectDevice();
      const browser = detectBrowser();
      const ip = await fetchIP();
      const location = await fetchLocation(ip);

      setExtraInfo({ device, browser, ip, location });
    };

    initializeInfo();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_ojaryab",
        "template_0hdgu9i",
        formRef.current,
        "iPhAvv3nZIil05XEW"
      );
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.log("FAILED...", error.text);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="text-[30px] mb-8"
          >
            Contact Me
          </motion.h2>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              className="input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="message"
              placeholder="Type your message here..."
              className="textarea h-[120px] xl:h-[150px]"
              required
            />

            {/* Hidden fields for tracking info */}
            <input type="hidden" name="location" value={extraInfo.location} />
            <input type="hidden" name="device" value={extraInfo.device} />
            <input type="hidden" name="browser" value={extraInfo.browser} />
            <input type="hidden" name="ip" value={extraInfo.ip} />
            <input
              type="hidden"
              name="submission_date"
              value={new Date().toLocaleString()}
            />

            

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed mx-auto mt-4"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Send Message
                  </span>
                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
