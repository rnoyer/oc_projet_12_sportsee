import "./Card.scss";
import NavIcon from "./NavIcon";

function Card({ value, unit, category, iconPath, bgColor }) {
  const formatedValue = Number(value).toLocaleString("en");
  return (
    <div className="card">
      <div className="card-icon">
        <NavIcon iconPath={iconPath} bgColor={bgColor} />
      </div>
      <h2 className="card-value">
        {formatedValue}
        {unit}
      </h2>
      <p className="card-category">{category}</p>
    </div>
  );
}

export default Card;
