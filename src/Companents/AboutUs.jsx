import React from 'react'

function AboutUs() {
    return (
        <>
            <div className="bg-[url('/image/About.png')] bg-cover bg-center h-[599px] flex justify-center items-center text-center" >

                <h2 className='text-[49px] font-semibold text-white w-[710px]'>We Create Bunch Of Enthusiastic & Creative Minds</h2>

            </div>
            <div className='max-w-[1440px]  mx-auto mt-[70px] space-y-[70px]'>
                <div className='max-w-[1440px]  mx-auto mt-[70px]'>
                    <h2 className=' text-[37px] font-medium'>About Us</h2>
                    <p className='text-[18px] w-[831px]'>Tenzor Soft LLC is a leading software developer in Uzbekistan, operating in the IT services market since 2008.
                        For over 15 years, we have established ourselves as a reliable partner in digital technologies, offering innovative
                        solutions for business process automation, web application development, and corporate systems.</p>
                </div>

                <div className=' flex justify-between items-start'>
                    <div className='flex gap-[20px]'>
                        <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div>
                            <h2 className='w-[170px] text-[22px] font-medium'>Effective project management</h2>
                            <p className='w-[265px]'>Full support of projects using modern methodologies and</p>
                        </div>
                    </div>
                    <div  className='flex gap-[20px]'>
                        <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services4.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div>
                            <h2 className='w-[211px]  text-[22px] font-medium'>Cross-platform and responsive design</h2>
                            <p className='w-[211px]'>We create designs that look flawless on any</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px]'>
                        <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services2.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div>
                            <h2 className='w-[160px]  text-[22px]  font-medium'>Monitoring and time tracking</h2>
                            <p className='w-[245px]'>Accurate solutions for time tracking and productivity improvement</p>
                        </div>
                    </div>
                    <div  className='flex gap-[20px]'>
                        <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services3.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div className='w-[136px]'>
                            <h2 className='w-[240px] text-[22px]  font-medium'>Creating innovative mobile applications</h2>
                            <p className='w-[246px]'>We develop custom mobile solutions that stand out in the market.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs