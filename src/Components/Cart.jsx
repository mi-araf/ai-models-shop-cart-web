const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayement = () => {
        setCarts([]);
    }

    const handleDelete = (item) => {
        const filteredCarts = carts.filter((cart) => cart.id !== item.id);
        setCarts(filteredCarts);
    }

    return (
        <div className='py-8 mx-auto w-11/12 md:w-10/12 mb-20 space-y-5'>
            <h1 className="text-2xl font-bold">Your Carts</h1>
            {
                carts.length === 0 && <div className="p-8 md:p-18 border border-rose-300 rounded-xl flex justify-center mx-auto"><h2 className="text-3xl font-bold">Cart is Empty</h2></div>
            }
            {
                carts.map((item) => <div key={item.id} className="flex items-center justify-between rounded-xl border border-gray-300 px-2 md:px-6 py-3">
                    <div className="flex gap-2 mdgap-6 items-center">
                        <img className="h-10 w-10 md:h-15 md:w-15 object-contain" src={item.image} alt="" />
                        <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                    <div className="text-sm"><span className="font-bold text-lg md:text-3xl">${item.price}</span><span className="mr-2 text-xs md:text-base md:mr-7">/month</span>
                        <button onClick={() => handleDelete(item)} className="btn rounded-xl btn-error btn-sm md:btn-md">Delete</button>
                    </div>
                </div>)
            }
            <div className="flex justify-between bg-gray-800 text-white p-5 mt-5 rounded-xl text-3xl font-bold">
                <h2>Total: </h2>
                <h2>$ {totalPrice}</h2>
            </div>

            {
                carts.length > 0 && <button onClick={handlePayement} className="btn w-full text-xl rounded-xl btn-success">Proceed to Checkout</button>
            }
        </div>
    );
};

export default Cart;