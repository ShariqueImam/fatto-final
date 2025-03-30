import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import axios from "axios";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Error, setError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSent, setisSent] = useState(false);

  const tokenWithWriteAccess =
    "skxdXoR0UeTPDOQZwxUZnByvhxRCbdiekuODN7i1UC7RMLsiSYa3EL460DVr8JWARx3HqcuFfOnHajxvWyhCmsUj9Qkg9RUWeP4WrRxUvD9x5iSzdPa0Y5pHLJiz3pLQdMUMXrZH7BF1EqWaXEk67P3dsyn3U51yFVlhjwItqXHvcCy0QriX";
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    if (name != "" && email != "" && message != "") {
      setError(false);
    } else {
      setError(true);
    }
    const sendData = async () => {
      const { data } = await axios.post(
        `https://slogrcw8.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "contact",
                createdAt: new Date().toISOString(),
                name: name,
                email: email,
                message: message,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      // to represent the success message
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    const sendEmail = (e) => {
      let dataToBeSentToEmail = {
        createdAt: new Date().toISOString(),
        name,
        email,
        message,
      };
      emailjs
        .send(
          "service_ahudws1",
          "template_jxx33xz",
          dataToBeSentToEmail,
          "rE17r1uPFwxyNpOMg0Pky"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    };

    if (name != "" && email != "" && message != "") {
      // sendEmail();
      sendData();
      setName("");
      setEmail("");
      setMessage("");
      setisSent(true);
    }
  };
  return (
    <section className="my-8 md:my-16 border-2 flex flex-col md:flex-row items-center md:items-stret justify-between p-6 md:p-16 bg-white w-[90%] md:w-[65%] mx-auto rounded-md shadow-lg space-y-6 md:space-y-0 ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-yellowDark text-white p-6 rounded-md space-y-4 md:mr-4 h-full">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Information </h2>
        <p className="text-md">
          Experience the richness of pure shea butter. Contact us today for
          natural, nourishing skincare solutions tailored to your needs
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="bg-white text-blue-500 p-2 rounded-full">
              <FaLocationArrow className="text-yellow" />
            </span>
            <span>Call This Now: +00144444444</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-blue-500 p-2 rounded-full">
              <MdOutlineMessage className="text-yellow" />
            </span>
            <span>Your Message: eler@contact.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-blue-500 p-2 rounded-full">
              <BiSolidPhoneCall className="text-yellow" />
            </span>
            <span>Your Location: California,SA</span>
          </div>
        </div>
        <div className="flex space-x-4 items-center justify-center md:justify-start ">
          <a
            href="#"
            className="p-2 bg-yellow rounded-full hover:bg-yellowDark transition-colors my-3"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 bg-yellow rounded-full hover:bg-yellowDark transition-colors my-3"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 bg-yellow rounded-full hover:bg-yellowDark transition-colors my-3"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 mx-5">
        <p className="text-yellow font-medium tracking-wide text-md md:text-2xl font my-8 text-center md:text-left">
          « OUR CONTACT US »
        </p>
        <h2 className="text-lg font-bold mb-4 text-yellowDark text-xl md:text-4xl text-center md:text-left">
          Get free Business Customer Support
        </h2>
        <p className="text-sm mb-6">
          Experience the richness of pure shea butter. Contact us today for
          natural, nourishing skincare solutions tailored to your needs
        </p>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          {isSubmit && Error && (
            <p className="text-red-500"> * Please fill in all the fields</p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-yellow text-white py-2 px-4 rounded-md w-full hover:bg-yellowDark hover:text-white transition"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
