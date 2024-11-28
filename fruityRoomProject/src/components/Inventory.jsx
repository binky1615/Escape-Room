import { useState } from "react";
import InventorySlot from "./InventorySlot";


const Inventory = () => {

    const [inventory, setInventory] = useState([null, null, null, null, null])


    return (
        <>
            <section>
                {inventory.map((item) => (
                    <InventorySlot key={item.key} image={item.image} />
                ))}
            </section>
        </>
    );
}
export default Inventory;