import React from 'react';
import { data } from '../assets/asset';
// import { format } from 'date-fns';

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Header() {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img
                src={data.logo}
                alt=''
            />
            <p>Journalism Without Fear or Favour</p>
            {/* <p>{format(new Date(), 'EEEE')}</p> */}
            <p>{weekday[new Date().getDay()]}</p>
        </div>
    );
}

export default Header;
