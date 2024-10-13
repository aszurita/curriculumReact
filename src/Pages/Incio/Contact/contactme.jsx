import React, { useState, useContext } from 'react';
import { ThemeContext } from "../Shared/ThemeContext";
import { Alert } from "@material-tailwind/react";

function ContactForm() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [option, setOption] = useState("Collaboration");
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [otherSubject, setOtherSubject] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const changeOption = (e) => {
    setOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setShowAlert(true);

    setFullName("");
    setEmail("");
    setMessage("");
    setOtherSubject("");
    setOption("Collaboration");

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col place-content-center place-items-center w-full" id="contactme">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-roboto-slab font-bold py-10 text-3xl sm:text-5xl select-none text-center">Contact Me</h2>
      </div>

      {showAlert && (
        <div className="w-2/5 min-w-[325px]">
          <Alert color="green" onDismiss={() => setShowAlert(false)}>
            Mensaje enviado correctamente.
          </Alert>
        </div>
      )}

      <div className="flex w-full place-content-center place-items-center flex-wrap gap-10">
        <div className="w-2/5 min-w-[325px]">
          <form className="flex flex-col gap-5 text-black" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full_name" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Full Name</label>
              <input
                type="text"
                id="full_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-calid focus:border-green-calid block w-full p-2.5"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-calid focus:border-green-calid block w-full p-2.5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Subject</label>
              <select
                id="subject"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-calid focus:border-green-calid block w-full p-2.5"
                value={option}
                onChange={changeOption}
              >
                <option value="Collaboration">Collaboration on Projects</option>
                <option value="Services">Inquiry about Services</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {option === "Other" && (
              <div>
                <label htmlFor="other_subject" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Other Subject</label>
                <input
                  type="text"
                  id="other_subject"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-calid focus:border-green-calid block w-full p-2.5"
                  placeholder="Please specify"
                  value={otherSubject}
                  onChange={(e) => setOtherSubject(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Message</label>
              <textarea
                id="message"
                rows="4"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-calid focus:border-green-calid block w-full p-2.5"
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-white bg-green-calid hover:bg-green-calid focus:ring-4 focus:outline-none focus:ring-green-calid font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-2/5 bg-gray-200 py-8 flex flex-col items-center">
          <div className="font-roboto-slab text-base text-center mb-6 min-w-[325px]">
            In case you'd like to meet in person, we can meet at ESPOL. Please contact me in advance with the subject "In-person Meeting". I am available Monday to Friday from <strong>9:00 AM to 3:00 PM.</strong>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.6313870475119!2d-79.9673863603391!3d-2.1456086255212727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7303caf3e5c7%3A0xe44102e70bc526da!2sTAWS%20ESPOL!5e0!3m2!1ses!2sec!4v1728787306330!5m2!1ses!2sec"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="min-w-[325px] w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
