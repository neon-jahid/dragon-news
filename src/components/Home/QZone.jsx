import React from 'react';
import { data } from '../../assets/asset';

function QZone() {
    return (
        <div className='mt-5 bg-gray-200'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5 pl-20'>
                <img
                    src={data.swimming}
                    alt=''
                />
                <img
                    src={data.classimg}
                    alt=''
                />
                <img
                    src={data.playground}
                    alt=''
                />
            </div>
        </div>
    );
}

export default QZone;
