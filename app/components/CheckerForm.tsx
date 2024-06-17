'use client'

import React, { useState, useEffect } from 'react'

// test data
import TestAddresses from '../data/testwl.json'

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
    const [VIPlist, setVIPList] = useState(0)
    const [FCFSList, setFCFSList] = useState(0);

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        // const formData = new FormData(event.target)
        const data = await event.target.value
        console.log('Data is ', data)
        console.log('Button clicked with', address)
       
        const vipStatus = checkAddressForVip(address)
        const status = await checkAddress(address)
        console.log('status is', status)
        console.log('vip is', vipStatus)
    }

    const handleChangeAddress = async (event: any) => {
        event.preventDefault()
        setAddress(event.target.value)
        console.log("address is now", address)
    }

    const checkAddressForVip = (address: string) => {
        let newVip = 0
        for (let i = 0; i < TestAddresses.length; i++){
            let check = TestAddresses[i].address
            let vip = TestAddresses[i].VIP

            console.log(check)
            if (address === check){
                
                newVip = vip
                setVIPList(vip)
                console.log('found address')
                console.log(VIPlist)
                return VIPlist
            } else {
                console.log(address, ' is not in VIP list')
                return 0
                
            }
        }
       
    }

    const checkAddress = async (address: string) => {
        // var i:number
         let newVip = 0
         let newFc = 0


        // console.log(TestAddresses);
        for (let i = 0; i < TestAddresses.length; i++){
            let check = TestAddresses[i].address
            // let vip = TestAddresses[i].VIP
            let fsfc = TestAddresses[i].FCFS

            console.log(check)
            if (address === check){
                // newVip = vip
                newFc = fsfc
                // console.log('fc list is', newFc)
                // setVIPList(!VIPlist)
                fsfc = newFc
                setFCFSList(fsfc)
                console.log('found address')
                console.log(FCFSList);
                return FCFSList;  
            } else {
                console.log("address not found")
                return 0
            }
            
            
        }
        return true
        // console.log(address)
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
                onChange={handleChangeAddress}
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

