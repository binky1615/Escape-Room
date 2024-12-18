const StartModal = ({ headerText, bodyText }) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[800px] h-[500px] bg-green-600 opacity-70">
                <div className="w-full h-[10%] flex items-center justify-center p-4">
                    <h1 className="text-2xl">{headerText}</h1>
                </div>
                <p className="">{bodyText}</p>
                <div>
                    <button>rooms</button>
                    <button>close</button>
                </div>
            </div>
        </div>
    );
}

export default StartModal;