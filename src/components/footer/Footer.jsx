import React from 'react'
import { SocialsComponent } from '../components'

const Footer = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-3 sm:px-[4rem] sm:h-[13rem] bg-[#ff69b4] text-white sm:content-center content-start">
                <div className="mx-auto p-5">
                    <p className="text-3xl font-bold">HAVEN BEAUTY:</p>
                    <p className="text-lg">Where Beauty Blossoms</p>
                </div>
                <div className="mx-auto p-5">
                    <div className="flex flex-row items-center">
                        <p className="text-xl font-semibold text-black mr-2">Contact</p>
                    </div>
                    <p className="text-lg">123 Beauty Lane</p>
                    <p className="text-lg">Glamour City, GC 12345</p>
                    <p className="text-lg">Phone: (123) 456-7890</p>
                    <p className="text-lg">Email: info@havenbeauty.com</p>
                </div>
                <div className="mx-auto p-5">
                    <SocialsComponent />
                    <p className="text-xl font-semibold text-black text-center my-3">Follow Us <i class="fa-solid fa-user-plus"></i></p>
                </div>
            </div>
        </div>
    )
}

export default Footer