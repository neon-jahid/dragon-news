import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

function CategoryNews() {
    const { id } = useParams();
    const data = useLoaderData();
    useEffect(() => {
        const filteredNews = data.filter((news) => news.category_id == id);

        console.log(filteredNews);
    }, [data, id]);

    return <div>CategoryNews -{id}</div>;
}

export default CategoryNews;
