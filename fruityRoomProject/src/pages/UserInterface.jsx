import { Outlet } from "react-router-dom";
import Inventory from "../components/Inventory";
import Timer from "../components/Timer";

const UserInterface = () => {
    return (
        <section className="">
            <Timer />
            {Outlet}
            <Inventory />
        </section>
    );
}

export default UserInterface;