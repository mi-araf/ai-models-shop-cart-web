import React from 'react';
import ModelCard from './ModelCard';

const Models = ({ models, carts, setCarts }) => {

    return (
        <div className='py-8 mx-auto w-11/12 md:w-10/12 mb-20'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p>One Subscription. Access to all frontier AI models in a single powerful platform</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-12'>
                {
                    models.map((model) => <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}  />)
                }
            </div>

        </div>
    );
};

export default Models;