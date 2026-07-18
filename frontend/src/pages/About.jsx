import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-teal-600 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] rounded-xl shadow-md"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome To Medixone, Your Trusted Partner In Managing Your
            HealthCare Needs Conveniently And Efficiently. At Medixone, We
            Understand The Challenges Individuals Face When It Comes To
            Scheduling Doctor Appointments And Managing Their Health Records.
          </p>
          <p>
            Medixone Is Commited To Excellence In Healthcare Technology. We
            Continously Strive To Enhance Our Platform, Integrating The Latest
            Advancements To Improve User Experience And Deliver Superior
            Service. Whether You're Booking Your First Appointment Or Managing
            Ongoing Care, Medixone Is Here To Support You Every Step Of The Way.
          </p>
          <b className="text-teal-700">Our Vision</b>
          <p>
            Our Vision At Medixone Is To Create A Seamless HealthCare Experience
            For Every User. We Aim To Bridge The Gap Between Patients And
            HealthCare Providers, Making It Easier For You To Access The Care
            You Need, When You Need It.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-teal-600 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 gap-4 md:gap-0">
        <div className="border border-gray-200 rounded-xl md:rounded-none md:first:rounded-l-xl md:last:rounded-r-xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined Appointment Scheduling That Fits Into Your Busy
            Lifestyle.
          </p>
        </div>
        <div className="border border-gray-200 md:border-l-0 rounded-xl md:rounded-none px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access To A Network Of Trusted HealthCare Professionals In Your
            Area.
          </p>
        </div>
        <div className="border border-gray-200 md:border-l-0 rounded-xl md:rounded-none md:first:rounded-l-xl md:last:rounded-r-xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored Recommenations And Remainders To Help You Stay On Top Of
            Your Health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;