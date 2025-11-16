import React from 'react';
import { useParams } from 'react-router';

function CategoryNews() {
    const { id } = useParams();
    console.log(id);

    return <div>CategoryNews -{id}</div>;
}

export default CategoryNews;
