import React from 'react';
import Button from '../common/Button';
import Marquee from 'react-fast-marquee';

function LatestNews() {
    return (
        <div className='flex border w-11/12 m-auto rounded-md'>
            <Button>Latest News</Button>
            <Marquee className='bg-gray-100'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sunt quae commodi voluptatibus, totam aliquid quos a expedita possimus excepturi sed quis repellat
                    numquam, sint animi voluptatem similique facilis?
                </p>
            </Marquee>
        </div>
    );
}

export default LatestNews;
