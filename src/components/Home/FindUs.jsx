import React from 'react';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa6';
import { GrTwitter } from 'react-icons/gr';

function FindUs() {
    return (
        <div>
            <h2 className='my-5 font-bold'>Find Us On</h2>
            <div className='space-y-2'>
                <div className='border flex py-4 justify-start items-center gap-2 pl-4'>
                    <IoLogoFacebook color='#1877F2 ' /> <span>Facebook</span>
                </div>
                <div className='border flex py-4 justify-start items-center gap-2 pl-4'>
                    <GrTwitter color='#1DA1F2' />
                    <span>Twitter</span>
                </div>
                <div className='border flex py-4 justify-start items-center gap-2 pl-4'>
                    <FaInstagram /> <span>Instagram</span>
                </div>
            </div>
        </div>
    );
}

export default FindUs;
