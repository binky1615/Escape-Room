const InventorySlot = ({image, key}) => {
    return (
        <>
        <div className="w-16 h-16 flex justify-center items-center">
            <img className="w-4/5 h-4/5" key={key} src={image} alt="" />
        </div>
        </>
    );
}

export default InventorySlot;