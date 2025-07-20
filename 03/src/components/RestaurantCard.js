import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { slaString } = sla;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-img"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{slaString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
