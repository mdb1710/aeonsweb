'use client'

import React, { useState} from 'react'

/* 
<div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
                id="email"
                type="email"
                placeholder="Your Email"
            />
            </div>
            <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                Message
            </label>
            <textarea
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
                id="message"
                placeholder="Your Message"
            ></textarea>
            </div>

*/

const CheckerForm = () => {

    const [address, setAddress] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log('Data is ', formData)
        console.log('Button clicked')
    }

    const handleChangeAddress = async (event: any) => {
        setAddress(event.target.value)
        console.log(address)
    }

    return(
        <div className="w-full max-w-xs mx-auto">
        <form className="px-8 pt-6 pb-8 mb-4 bg-grey-700 bg-opacity-50 rounded">
            <div className="mb-4">
            <label className="block mb-2 text-lg text-center font-bold text-white" htmlFor="address">
                Enter Your Address
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
                id="address"
                type="text"
                placeholder="Your address"
            />
            </div>
            
            <div className="flex justify-center items-center justify-between">
            <button
                className="px-4 py-2 font-bold text-white bg-[#e6a40e] rounded focus:outline-none text-center"
                type="submit"
                onClick={handleSubmit}
            >
                Send
            </button>
            </div>
        </form>
    </div>
    )
}

export default CheckerForm

