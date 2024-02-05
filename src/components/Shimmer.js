const Shimmer = () => {
    return (
        <div className="flex flex-wrap p-2">
            {
                Array(50).fill("").map((_, index) => (
                    <div key={index} className="h-[200px] w-80 bg-gray-200 m-2"></div>
                ))
            }
        </div>
    );
};

export default Shimmer;