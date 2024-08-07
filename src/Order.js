import { useState, useEffect, useRef } from "react";

const Order = () => {

    return (
        <div className="flex items-center justify-between border-t border-primary h-14 bg-accent hover:bg-primary cursor-pointer text-text hover:text-white font-semibold hover:font-bold p-5">
            <div>Total: </div>
            <div>Add to Cart </div>
        </div>
    );
};

export default Order;
