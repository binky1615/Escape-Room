const ClickLocation = ({ styling, functionality }) => {
    return (
        <>
            <div onClick={functionality} className={styling}>

            </div>
        </>
    );
}

export default ClickLocation;