import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const HandleSubmit = () => {
        navigate("/detail")
    };
      
    const inputTailwind = "appearance-none border-b border-white/40 py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
    return (
        <div className='bg-[#101013] pt-[3rem] lg:pt-[5rem]'>
            <div className='flex container mx-auto flex-wrap text-white justify-between items-center'>
                <div className='w-full lg:w-[50%] md:w-[40%]'>
                    <p className='text-[2.4rem] lg:text-[3.5rem] font-[500] tracking-tight leading-[130%]'>
                        Get in Touch
                        <br></br> <span className='underline font-[500] underline-offset-4 decoration-sky-500'>With Us</span>
                    </p>
                    <form onSubmit={HandleSubmit} className="flex flex-wrap items-center justify-between mt-[2rem]">
                        <input
                            className={`w-full lg:w-[46%] mb-[2rem] ${inputTailwind}`}
                            name="name"
                            type="text"
                            placeholder="Name (required)"
                            required
                        />
                        <input
                            className={`w-full lg:w-[46%] mb-[2rem] ${inputTailwind}`}
                            name="organization"
                            type="text"
                            placeholder="Organization"
                            required
                        />
                        <input
                            className={`w-full lg:w-[46%] mb-[2rem] ${inputTailwind}`}
                            name="email"
                            type="email"
                            placeholder="Email (required)"
                            required
                        />
                        <input
                            className={`w-full lg:w-[46%] ${inputTailwind}`}
                            name="phone"
                            type="text"
                            placeholder="Phone number"
                            required
                        />
                        <textarea
                            className={`w-full h-[80px] mt-[3rem] resize-none ${inputTailwind}`}
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                        />
                        <button
                            className='bg-sky-500 mx-auto mt-[3rem] text-white transition-all duration-200 transform hover:scale-110 py-3 px-8 rounded-[30px] font-[500] focus:outline-none focus:shadow-outline'
                            type="submit">
                            Send Message
                        </button>

                    </form>
                </div>     
                <iframe
                    title='maps'
                    className='w-full lg:w-[35%] md:w-[45%] aspect-square rounded-lg mt-[3rem]' 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1231.6259872697335!2d112.76249876387725!3d-7.317011672929943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1718268231348!5m2!1sen!2sid"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <div className='w-full order-4 lg:w-[28%]  md:w-[35%] mt-[4rem]'>
                    <Link to="/" className="flex justify-between transition-all transform hover:scale-110 border-b block p-2 border-white/40">
                        Home <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <Link to="/about" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        About <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                    <Link to="/films" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        Latest Films <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                    <Link to="/faqs" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        FAQs <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                </div>

                <div className='w-full lg:w-[35%] md:w-[35%] mt-[3rem] lg:mt-[0]'>
                    <div className='text-[19px]'>
                        Zy.Company Headquarters
                        <br></br>
                        Oame 12100 Hairoo,
                        <br></br>
                        Amegakure CVR no: 23168
                    </div>
                    <Link target='blank' to="https://www.instagram.com/khoirurrozkn" className='flex justify-between transition-all mt-[1.5rem] transform hover:scale-110 border-b block p-2 border-white/40'>
                        Instagram <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                    <Link target='blank' to="https://api.whatsapp.com/send?phone=6282139306484&text=Hallo%20Khoirurr..." className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1.5rem] p-2 border-white/40'>
                        WhatsApp <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                </div>

            </div>

            <div className='py-[1rem] mt-[4rem] border-t border-white/25'>
                <p className='text-center text-white/60'>2022 Zy.Company, Inc, Copyright and All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer