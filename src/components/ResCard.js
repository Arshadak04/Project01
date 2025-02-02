import { CDN_LINK } from "../common/link";
const ResCard=(props)=>{


    const{
      name,
      cloudinaryImageId,
      cuisines,
      avgRating

    }=
    props.resList.info


    
return (
    <div className="card-body">
    <h4>{name}</h4>
     <div className="res-card-image">
    <img
  className="res-image"
  src={
    CDN_LINK +
    cloudinaryImageId
  }
  alt="Logo Of My Company" 
  />
    </div>
    <div className="res-cuisines">
        <p>{cuisines.join(", ")}</p>
        <div className="res-rating">
        <h5>{avgRating}</h5>
        </div>
        
    </div>

</div>
)
}

export default ResCard;