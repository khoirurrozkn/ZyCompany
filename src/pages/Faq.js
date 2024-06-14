import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {
    question: "What makes Zy.Company unique in the film industry?",
    answer: "Zy.Company is unique because it focuses on combining exceptional visual quality with deep narratives to create unforgettable cinematic experiences."
  },
  {
    question: "How can I collaborate with Zy.Company?",
    answer: "For information regarding collaboration opportunities, please visit our Careers page or contact us directly through the contact form."
  },
  {
    question: "Does Zy.Company accept proposals for new film projects?",
    answer: "Yes, Zy.Company is open to hearing intriguing project proposals. We are very interested in collaborating with creative talents to develop new ideas."
  },
  {
    question: "How long is the production time for a film?",
    answer: "The production time for each film can vary depending on the scale of the project. However, we are committed to delivering quality results without compromising creativity."
  },
  {
    question: "How can I get the latest information about Zy.Company's new films?",
    answer: "You can follow us on social media or subscribe to our newsletter to get the latest updates on new films, trailers, and release dates."
  },
  {
    question: "Does Zy.Company have educational or training programs in filmmaking?",
    answer: "We have training and educational programs designed to support the development of young talents in the film industry. For more information, visit our Education page."
  },
  {
    question: "How can I provide feedback or suggestions about Zy.Company's films?",
    answer: "We highly value feedback from our audience and fans. Please contact us through our contact form or social media to share your thoughts."
  },
  {
    question: "Does Zy.Company present films at international film festivals?",
    answer: "Yes, Zy.Company actively presents our films at various international film festivals to gain wider appreciation and recognition from the industry."
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/80 py-[1.7rem] px-3 w-[70%]">
      <button 
        className="flex justify-between items-center w-full focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l5 7a1 1 0 01-.832 1.555H4.998a1 1 0 01-.832-1.555l5-7A1 1 0 0110 3z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`mt-2 transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="text-gray-600 text-start">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="mt-[13rem] bg-gradient-to-b from-white to-gray-300 bg-opacity-50">
        <Navbar/>

        <div className='container flex flex-wrap justify-center mx-auto text-center'>
          <p className='text-[2.5rem] font-bold w-[100%]'>Frequently Asked Questions <span className='underline font-bold underline-offset-4 decoration-indigo-500'>(FAQs)</span></p>
          <p className='text-[1.1rem] text-black/80 mb-[3rem]'>
            Guide to Understanding the Services and Information
            <br></br> 
            from Zy.Company
          </p>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <Marquee className='mt-[5rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Overview - ".repeat(15) }</p></Marquee>

        <Footer />
    </div>
  )
}

export default Faq