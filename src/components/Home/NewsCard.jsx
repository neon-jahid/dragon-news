import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { title, rating, total_view, author, thumbnail_url, details } = news;

    const publishedDate = new Date(author.published_date).toISOString().split('T')[0];

    return (
        <div className='bg-white rounded-xl shadow p-5 mb-6 '>
            {/* Top User Info */}
            <div className='flex newss-center justify-between mb-4'>
                <div className='flex newss-center gap-3'>
                    <img
                        src={author.img}
                        alt={author.name}
                        className='w-12 h-12 rounded-full object-cover'
                    />

                    <div>
                        <h3 className='font-semibold'>{author.name}</h3>
                        <p className='text-sm text-gray-500'>{publishedDate}</p>
                    </div>
                </div>

                <div className='flex newss-center gap-4 text-gray-500 text-xl'>
                    <FaRegBookmark className='cursor-pointer' />
                    <FaShareAlt className='cursor-pointer' />
                </div>
            </div>

            {/* Title */}
            <h1 className='text-xl font-bold leading-snug mb-4'>{title}</h1>

            {/* Thumbnail Image */}
            <img
                src={thumbnail_url}
                alt='thumbnail'
                className='w-full h-64 object-cover rounded-xl mb-4'
            />

            {/* Description Text */}
            <p className='text-gray-600 text-sm leading-relaxed mb-2'>{details.slice(0, 200)}...</p>

            <button className='text-orange-600 font-semibold'>Read More</button>

            {/* Rating + Views */}
            <div className='border-t mt-4 pt-4 flex newss-center justify-between'>
                {/* Rating */}
                <div className='flex newss-center gap-1 text-orange-500 text-xl'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    {rating.number < 5 && <FaStar className='text-gray-300' />}
                    <span className='text-gray-700 text-base ml-2'>{rating.number}</span>
                </div>

                {/* Views */}
                <div className='flex newss-center gap-2 text-gray-600'>
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
