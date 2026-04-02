import React, { useState } from 'react';

const ModelCard = ({ model }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
        setIsSubscribed(true);
    };

    return (
        <div>
            <div className='group shadow-lg rounded-2xl border border-gray-400 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-101 hover:shadow-2xl hover:border-gray-500'>
                <div className='flex justify-center items-center h-45 bg-zinc-200 overflow-hidden'>
                    <img className='w-30 h-30 object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:scale-107' src={model.image} alt={model.title} />
                </div>

                <div className='p-4 space-y-5'>
                    <h2 className='text-2xl font-bold group-hover:text-fuchsia-800 transition-all duration-500 ease-out'>{model.title}</h2>
                    <p className='opacity-70 line-clamp-2 group-hover:opacity-100 transition-all duration-300 ease-out'>{model.description}</p>
                    <div className='text-base font-light'><span className='text-3xl font-extrabold'>${model.price}</span>/month</div>
                    {/* <button onClick={() => setIsSubscribed(true)} className="btn btn-primary w-full rounded-lg">{isSubscribed ? 'Subscribed' : 'Subscribe Now'}</button> */}
                    <div onClick={handleSubscription} className=''>
                        {
                            isSubscribed 
                            ? <button className="btn bg-linear-to-r from-purple-400 via-pink-400 to-fuchsia-500 w-full rounded-lg">Subscribed</button>
                            : <button className="btn bg-linear-to-r from-red-400 via-orange-400 to-amber-400 w-full rounded-lg">Subscribe Now</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;