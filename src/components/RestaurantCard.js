import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        areaName, 
        avgRating, 
        costForTwo
    } = resData?.info;
    

    return (
        <div
        className="res-card">
            <img 
            
            className="res-img"
            
            src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{areaName}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>

        </div>
    );
}

export default RestaurantCard;