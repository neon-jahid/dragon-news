import React from 'react';
import Button from '../../common/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const btn = 'outline outline-amber-200 border-none w-full flex justify-center items-center hover:bg-blue-100 cursor-pointer';

function SocialLogin() {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-5'>
                <Button className={btn}>
                    <FcGoogle
                        className='mx-2'
                        size={25}
                    />
                    Login with Google
                </Button>

                <Button className={btn}>
                    <FaGithub
                        className='mx-2'
                        size={25}
                    />
                    Login with Github
                </Button>
            </div>
        </div>
    );
}

export default SocialLogin;
