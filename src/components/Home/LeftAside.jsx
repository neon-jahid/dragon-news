import React, { Suspense } from 'react';
import Spinner from '../../common/Spinner';
import Categories from '../Categories';

function LeftAside() {
    return (
        <div>
            <Suspense fallback={<Spinner></Spinner>}>
                <Categories />
            </Suspense>
        </div>
    );
}

export default LeftAside;
