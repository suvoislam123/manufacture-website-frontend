import React from 'react';

const Footer = () => {
    return (
        <div className='border border-blue-400 bg-cyan-900 p-6 text-white'>
            <h1 className='text-center text-3xl text-red-500'>Pay with</h1>
            <ul className='flex justify-center items-center' data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0">
                <li className="icon w-16" data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.1"><img
                    src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/Amex.png?q=low&amp;webp=1&amp;alpha=1"
                    data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.1.0" /></li>
                <li className="icon w-16" data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.2"><img
                    src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/mastercard.png?q=low&amp;webp=1&amp;alpha=1"
                    data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.2.0" /></li>
                <li className="icon w-16" data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.3"><img
                    src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/VIsa.png?q=low&amp;webp=1&amp;alpha=1"
                    data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.3.0" /></li>
                <li className="icon bkash" data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.4"><img
                    src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/bkash.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"
                    data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.4.0" /></li>
                <li className="icon cod" data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.5"><img
                    src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/COD.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"
                    data-reactid=".23nh5swcuxq.9.2.0.0.b.0.0.0.1.0.5.0" /></li>
            </ul>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-5 px-2 '>
                <div className='border border-blue-400'>
                    <h3>Customer Service</h3>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
                <div className='border border-blue-400'>
                    <h3>Customer Service</h3>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
                <div className='border border-blue-400'>
                    <h3>Customer Service</h3>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
                <div className='col-span-1 md:col-span-2'>
                    <div className='flex justify-end gap-4'>
                        <div><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/google_play_store.png?q=low&alpha=1" alt="" /></div>
                        <div><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/components/shared/NewFooter/images/app_store.png?q=low&alpha=1" alt="" /></div>
                    </div>
                    <div className='flex justify-end  '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg><span>01309099327</span>
                    </div>
                    <div className='flex justify-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg><span>suvoislam753@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <div><p className='text-center'>Developed By Shuvo Islam</p></div>
                <div><p className='text-center'>©Copyright:{new Date().getFullYear()}</p></div>
            </div>
        </div>
    );
};

export default Footer;