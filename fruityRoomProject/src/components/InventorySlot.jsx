const InventorySlot = ({image, key}) => {
    return (
        <>
        <div className="w-fit h-fit bg-black opacity-50 flex p-4 gap-4">
            <img className="w-4/5 h-4/5" key={key} src={image} alt="" />
        </div>
        </>
    );
}

export default InventorySlot;