import QualityIndication from "./QualityIndicator";

const ProductCard = () => {
  return (
    <div className="w-auto h-36 bg-gray-300 mx-3 mt-3">
      <div className="inline-block m-2">
        <h3 className="text-lg font-medium">Super fancy frame</h3>
        <h4 className="text-sm mb-2">Specialized</h4>
        <QualityIndication grade={4.3} reviews={3} />
        <h4 className="text-base">324 kr</h4>
      </div>
      <img
      src={`https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85`}
      className="float-right p-2 h-full max-h-full object-scale-down"
      />
    </div>
  );
};

export default ProductCard;
