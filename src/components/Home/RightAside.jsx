import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

function RightAside() {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs />
            <QZone />
        </div>
    );
}

export default RightAside;
