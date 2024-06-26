import React from 'react';
import heroMainDesktop from '../assets/image-web-3-desktop.jpg'
import heroMainMobile from '../assets/image-web-3-mobile.jpg'

function Hero() {
    return (
        <div className='flex flex-col gap-10 w-full px-[20px] py-[20px] md:px-[200px]  md:flex-row '>
            <div className='flex flex-col gap-10'>
                <div className='hidden md:flex'><img src={heroMainDesktop} alt="" /></div>
                <div className='flex md:hidden'><img src={heroMainMobile} alt="" /></div>

                <div className='flex flex-col md:flex-row gap-6'>
                    <div>
                        <h1 className='text-veryDarkBlue text-6xl md:text-7xl font-extrabold'>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className='flex flex-col w-full gap-6'>
                        <p className='text-lg text-darkGrayishBlue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>

                        <button className='px-4 py-2 text-lg text-white bg-red-500 w-1/2 hover:text-white hover:bg-veryDarkBlue'>
                            Read more
                        </button>
                    </div>
                </div>
            </div>


            <div className='px-[20px] py-[25px] md:w-[950px] flex flex-col bg-veryDarkBlue gap-6'>
                <div className='mb-[15px]'>
                    <h1 className='text-softOrange text-4xl font-bold'>New</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-white flex flex-col gap-4'>
                        <h3 className='text-xl text-white hover:text-softOrange'>Hydrogen VS Electric Cars</h3>
                        <p className='text-md text-darkGrayishBlue'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>

                    <div className='bg-white h-[1px] w-full'></div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-white flex flex-col gap-4'>
                        <h3 className='text-xl text-white hover:text-softOrange'>The Downsides of AI Artistry</h3>
                        <p className='text-md text-darkGrayishBlue'>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>

                    <div className='bg-white h-[1px] w-full'></div>
                </div>
                <div className='flex flex-col '>
                    <div className='text-white flex flex-col gap-4'>
                        <h3 className='text-xl text-white hover:text-softOrange'>Is VC Funding Drying Up?</h3>
                        <p className='text-md text-darkGrayishBlue'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;