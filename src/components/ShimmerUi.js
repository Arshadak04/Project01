import ShimmerCard from "./ShimmerCard"

const ShimmerUi=()=>{
    return (
<div className="shimmer-container">


    <div className="shimmer-container">
      {[...Array(10)].map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
   

    </div>
    )
}

export default ShimmerUi;