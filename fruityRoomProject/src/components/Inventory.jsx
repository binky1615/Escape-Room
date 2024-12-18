import { useState } from "react";
import InventorySlot from "./InventorySlot";


const Inventory = () => {

    const [inventory, setInventory] = useState([{image: null, key: null}, {image: null, key: null}, {image: null, key: null}, {image: null, key: null}, {image: null, key: null}])


    return (
        <>
            <section className="w-fit rounded-tl-xl h-fit right-0 bottom-0 absolute bg-black opacity-50 p-2 flex items-center gap-4">
                {inventory.map((item) => (
                    <InventorySlot key={item.key} image={item.image} />
                ))}
            </section>
        </>
    );
}
export default Inventory;