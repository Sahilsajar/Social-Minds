import { useContext, useState } from "react";
import backImg from "../assets/Background/2.jpg";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import ThankYou from "../pages/ThankYou";
import { ThemeContext } from "../themeContext/ThemeContext";
import whitebg from "../../public/whitebg.jpg";

function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate=useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Send the email using EmailJS
      await emailjs.sendForm(
        'service_8oop2kj',  // Replace with your EmailJS service ID
        'template_eim3a8i', // Replace with your EmailJS template ID
        e.target,            // The form being submitted
        'vuTY47KiOsexBDWrl' // Replace with your EmailJS user ID
      );

      // If email is sent successfully, show success message and navigate
      setIsSuccess(true);
      setIsError(false);

      // Redirect to homepage after a small delay
      setTimeout(() => {
        
        navigate('/ThankYou');  // This will redirect to the homepage
      },);  // Wait for 2 seconds before redirecting (optional)
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setIsError(true);
      navigate('/Contact')
    }
   
  };

  return (
    <div
      style={{
        backgroundImage: `url(${theme==='dark'?backImg:whitebg})`,
        backgroundSize: "cover",
      }}
      className="flex flex-col md:flex-row mt-[56px] min-h-[calc(100vh-56px)] p-8 dark:text-white text-black"
    >
      {/* Left Section */}
      <div className="md:w-1/2 md:items-center text-center flex flex-col mt-4 mb-6 md:mb-0">
        <h1 className=" lg:text-12xl font-bold text-6xl">YOUR</h1>
        <h1 className=" lg:text-12xl font-bold text-6xl">SOCIAL</h1>
        <h1 className="lg:text-12xl font-bold text-6xl">MEDIA</h1>
        <h1 className=" lg:text-12xl font-bold text-6xl">DESERVES</h1>
        <h1 className="lg:text-12xl font-bold text-6xl">A BOOST</h1>
        <p className="text-2xl md:text-4xl lg:text-4xl">Our team is ready</p>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 justify-center p-8 rounded-lg  dark:shadow-md dark:shadow-neutral-600 shadow-md">
        <form
          className="space-y-2 md:space-y-4 justify-center items-center lg:space-y-4"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            required
            name="Name"
            placeholder="First Name"
            className="md:w-full outline-none p-2 border w-full dark:border-gray-300 rounded"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email Address"
            className="w-full border outline-none p-2 rounded border-gray-300"
          />
          <input
            name="company"
            required
            type="text"
            placeholder="Company Name"
            className="w-full border outline-none p-2 rounded border-gray-300"
          />
          <input
            name="phone"
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full outline-none border p-2 rounded border-gray-300"
          />
          <textarea
            name="message"
            required
            maxLength="800"
            className="w-full outline-none p-2 border border-gray-300 rounded"
            placeholder="How can we help?"
            
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            SCHEDULE CONSULTATION
          </button>
        </form>

        {/* Success/Error Message */}
        {isSuccess && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded-md">
          Email sent successfully!
        </div>
      )}
      {isError && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 border border-red-200 rounded-md">
          Something went wrong. Please try again.
        </div>
      )}
      </div>
    </div>
  );
}

export default Contact;
