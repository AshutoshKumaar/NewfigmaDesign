import React from 'react'
import fotterLogo from './footerLogo.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import facebook from './facebook.png'

function Footer() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='bg-[#1a1a1a] h-80 pt-16 rounded-e-none md:rounded-b-[35px]'>
            <div className='w-full md:w-[700px] mx-auto'>
                <div className='w-[200px] mx-auto'>
                    <img src={fotterLogo} alt="footer-logo" />
                </div>
                <div className='w-[300px] mx-auto px-4 py-4' >
                    <ul className='flex flex-row justify-around items-center'>
                        <li className='text-[#fff]'>Help Center</li><span className='text-[#fff] font-[500]'>|</span>
                        <li className='text-[#fff]' >Privacy policy</li><span className='text-[#fff] font-[500]'>|</span>
                        <li className='text-[#fff]' >FAQ</li>
                    </ul>
                </div>
                <div className='w-[300px] mx-auto  px-8 py-4'>
                    <ul className='flex flex-row justify-around items-center cursor-pointer'>
                        <li><img src={twitter} alt="twitter_logo" /></li>
                        <li><img src={instagram} alt="instagram_logo" /></li>
                        <li><img src={facebook} alt="facebook_logo" /></li>
                    </ul>

                </div>

                <p className='w-[300px] mx-auto mt-5 text-center text-sm text-slate-400'>Copyright<span>&copy;</span>2023 <span>@</span>Suvatrip.com</p>

            </div>
        </div >
    )
}

export default Footer
