import { FaArrowRightLong } from "react-icons/fa6";

const Order = ({ finalOrder, captureScreenshot }) => {

    const handleOrder = () => {
        console.log('Order Details: ', finalOrder);
        captureScreenshot();
    }

    return (
        <div className="flex items-center justify-between border-t border-primary h-14 bg-background text-text font-semibold py-5 px-8">
            <div>Total: </div>
            <div > 
            <button onClick={handleOrder} className={`text-xs lg:text-sm font-semibold rounded-sm hover:shadow-xl bg-accent hover:bg-primary hover:text-white w-full py-2 px-6`}><div className="flex items-center">Add to Cart<div className="pl-2 pt-0.5"><FaArrowRightLong/></div></div></button>
            </div>
        </div>
    );
};

export default Order;
