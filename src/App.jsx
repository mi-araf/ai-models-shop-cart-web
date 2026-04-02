import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Cart from './Components/Cart'

const getModels = async () => {
    const res = await fetch('/src/assets/models.json');
    return res.json();
}

function App() {
    // since modelPromise called here, so use suspense; but caller outside App(), don't need to use suspense
    const modelPromoise = getModels();

    const [activeTab, setActiveTab] = useState('Models');

    return (
        <>
            <Navbar />
            <Banner />

            {/* tabs */}
            <div className='tabs tabs-box justify-center bg-transparent'>
                <input type="radio" name="my_tabs_1" className='tab rounded-full w-34' aria-label="Models" defaultChecked onClick={() => setActiveTab('Models')} />
                <input type="radio" name="my_tabs_1" className='tab rounded-full w-34' aria-label="Cart" onClick={() => setActiveTab('Cart')} />
            </div>

            <Suspense fallback={<div className='flex mx-auto justify-center items-center h-40 loading loading-dots loading-xl text-4xl'></div>}>
                {activeTab === 'Models' && <Models modelPromoise={modelPromoise} />}

                {activeTab === 'Cart' && <Cart />}
            </Suspense>


            <Footer />
        </>
    )
}

export default App
