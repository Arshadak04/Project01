import ShimmerCard from "./ShimmerCard";

const ShimmerUi = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {[...Array(10)].map((_, index) => (
                <ShimmerCard key={index} />
            ))}
        </div>
    );
};

export default ShimmerUi;
