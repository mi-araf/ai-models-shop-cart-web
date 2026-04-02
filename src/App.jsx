import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Cart from './Components/Cart'
import modelsData from './assets/models.json'

function App() {
    const models = modelsData;
    const [activeTab, setActiveTab] = useState('Models');
    const [carts, setCarts] = useState([]);

    return (
        <>
            <Navbar />
            <Banner />

            <div className='tabs tabs-box justify-center bg-transparent'>
                <input type='radio' name='my_tabs_1' className='tab rounded-full w-34' aria-label='Models' defaultChecked onClick={() => setActiveTab('Models')} />
                <input type='radio' name='my_tabs_1' className='tab rounded-full w-34' aria-label={`Carts (${carts.length})`} onClick={() => setActiveTab('Cart')} />
            </div>

            {activeTab === 'Models' && <Models models={models} carts={carts} setCarts={setCarts} />}
            {activeTab === 'Cart' && <Cart carts={carts} setCarts={setCarts} />}

            <Footer />
        </>
    )
}

export default App
