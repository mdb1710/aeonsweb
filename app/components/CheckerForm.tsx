'use client'

import React, { useState, useEffect } from 'react'

// test data
import TestAddresses from '../data/testwl.json'
import WLResult from './WLResult';

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
    const [vipActive, setVipActive] = useState(false)
    const [firstActive, setFirstActive] = useState(false)


    const handleSubmit = async (event: any) => {
        event.preventDefault()
        // const formData = new FormData(event.target)
        // const data = await event.target.value
        // console.log('Data is ', data)
        console.log('Button clicked with', address)
       
        const vipStatus = await checkAddressForVip(address)
        const status = await checkAddress(address)
        setFCFSList(status)
        setVIPList(vipStatus)
        // if (vipStatus > 0){
        //     setFirstActive(false)
        // }
        console.log('status is', FCFSList)
        console.log('vip is', VIPlist)
    }

    const handleChangeAddress = async (event: any) => {
        event.preventDefault()
        setAddress(event.target.value)
        console.log("address is now", address)
    }

    const checkAddressForVip = async (address: string) => {
        let newVip = 0
        for (let i = 0; i < TestAddresses.length; i++){
            let check = TestAddresses[i].address
            let vip = TestAddresses[i].VIP

            
            if (address === check){
                
                newVip = vip
                setVIPList(vip)
                console.log('found address')
                console.log('vip is ',VIPlist)
                setVipActive(true)
                return 1
            } else {
                console.log(address, ' is not in VIP list')
                setVipActive(false)
                i++
                
            }
        }
        return 0
    }

    const checkAddress = async (address: string) => {
        // var i:number
         let newFc = 0


        // console.log(TestAddresses);
        for (let i = 0; i < TestAddresses.length; i++){
            let check = TestAddresses[i].address
            console.log(check)
            // let vip = TestAddresses[i].VIP
            let fsfc = TestAddresses[i].FCFS
            console.log ('pre-check', fsfc)

            
            if (address === check){
                // newVip = vip
                newFc = fsfc
                // console.log('fc list is', newFc)
                // setVIPList(!VIPlist)
                setFCFSList(newFc)
                console.log('fcfs found address')
                console.log('fcfs??', FCFSList);
                if (vipActive){
                    setFirstActive(false)
                } 
                console.log(firstActive, 'is this')
                return 1;  
            } else {
                console.log("address not found")
                setFirstActive(true)
                i++
            }
            
            
        }
        
        return 0
    }

    // WL Result Display

    // const VIPResult = (VIPlist: any) = 

    return(
        <div className='flex flex-col justify-center items-center'>
        <div className="w-full max-w-xs mx-auto">
        <form className="px-8 pt-6 pb-8 mb-4 bg-grey-700 bg-opacity-50 rounded">
            <div className="mb-4">
            <label className="block mb-2 text-4xl text-center font-bold text-white" htmlFor="address">
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
            
            <div className="flex justify-center items-center ">
            <button
                className="px-4 py-2 font-bold text-white text-3xl bg-[#e6a40e] rounded focus:outline-none text-center"
                type="submit"
                onClick={handleSubmit}
            >
                Send
            </button>
            </div>
        </form>
    </div>
    <span className={ VIPlist > 0 && vipActive ? `block mb-2 text-4xl text-center font-bold text-[#e6a40e] uppercase` : `hidden`}>Congratulations, your wallet qualifies for 1 VIP mint and 1 FCFS mint.</span>
    <span className={ FCFSList > VIPlist ? `block mb-2 text-4xl text-center font-bold text-[#ff6633] uppercase` : `hidden`}>Congratulations, your wallet qualifies for 1 FCFS mint</span>
    <span className={ FCFSList < 1 && firstActive ? `block mb-2 text-4xl text-center font-bold text-white uppercase` : `hidden`}>Your wallet does not qualify for the mint. It may take up to 72 hours for the team to update your wallet if you have won it through a giveaway. If you think there's a mistake, get in touch with us through a ticket on the discord.</span>
    
    </div>
    )
}

export default CheckerForm

