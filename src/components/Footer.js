import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [name, setName] = useState("")
    const [organization, setOrganization] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const HandleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setOrganization('')
        setEmail('')
        setPhone('')
        setMessage('')
    };
      
    const inputTailwind = "appearance-none border-b border-white/40 py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
    return (
        <div className='w-screen absolute pt-[4rem] text-white left-0 bg-[#101013]'>
            <div className='container mx-auto flex flex-wrap justify-between items-center'>
                <div className='w-[50%]'>
                    <p className='text-[3.5rem] font-[500] tracking-tight leading-[130%]'>
                        Get in Touch
                        <br></br> <span className='underline font-[500] underline-offset-4 decoration-sky-500'>With Us</span>
                    </p>
                    <form onSubmit={HandleSubmit} className="flex flex-wrap items-center justify-between mt-[2rem]">
                        <input
                            className={`w-[46%] mb-[2rem] ${inputTailwind}`}
                            name="name"
                            type="text"
                            placeholder="Name (required)"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className={`w-[46%] mb-[2rem] ${inputTailwind}`}
                            name="organization"
                            type="text"
                            placeholder="Organization"
                            required
                            value={organization}
                            onChange={e => setOrganization(e.target.value)}
                        />
                        <input
                            className={`w-[46%] ${inputTailwind}`}
                            name="email"
                            type="email"
                            placeholder="Email (required)"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className={`w-[46%] ${inputTailwind}`}
                            name="phone"
                            type="text"
                            placeholder="Phone number"
                            required
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <textarea
                            className={`w-full h-[80px] mt-[3rem] resize-none ${inputTailwind}`}
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
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
                    className='w-[35%] aspect-square rounded-lg' 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1231.6259872697335!2d112.76249876387725!3d-7.317011672929943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1718268231348!5m2!1sen!2sid">
                </iframe>

                <div className='w-[28%] mt-[4rem]'>
                    <Link to="/" className="flex justify-between transition-all transform hover:scale-110 border-b block p-2 border-white/40">
                        Home <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <Link to="/about" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        About <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                    <Link to="/news" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        News <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                    <Link to="/faqs" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        FAQs <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                    <Link to="/career" className='flex justify-between transition-all transform hover:scale-110 border-b block mt-[1rem] p-2 border-white/40'>
                        Career <FontAwesomeIcon icon={faArrowRight}/>
                    </Link>
                </div>

                <div className='w-[35%]'>
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