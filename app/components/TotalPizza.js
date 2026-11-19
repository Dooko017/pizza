export const TotalPizza = ({
  sizeName,
  cheese,
  mushroom,
  pepper,
  onePizzaPrice,
  totalPrice,
  finalPrice,
  discount,
  ordered,
  setOrdered,
}) => {
  return (
    <div className="bg-orange-50 rounded-2xl p-5 text-black">
      <h2 className="font-bold text-lg">
        {sizeName} пицца • {cheese && "🧀"} {mushroom && "🍄"} {pepper && "🌶️"}{" "}
        {!cheese && !mushroom && !pepper && "Нэмэлтгүй"}{" "}
      </h2>
      <p className="mt-3">
        Нэг пицца : {onePizzaPrice.toLocaleString("en-US")}₮
      </p>

      <div>
        {discount > 0 && (
          <p className="line-through text-gray-400 text-lg">
            {totalPrice.toLocaleString("en-US")}₮
          </p>
        )}
        <h1 className="text-3xl font-bold  mt-3">
          Нийт : {finalPrice.toLocaleString("en-US")}₮
        </h1>
      </div>
      <button
        onClick={() => setOrdered(true)}
        className="bg-orange-500 text-white w-full p-3 rounded-xl mt-5 font-bold"
      >
        Захиалах
      </button>
      {ordered && (
        <p className="text-green-600 font-bold mt-4">
          ✅ Захиалга баталгаажлаа!
        </p>
      )}
    </div>
  );
};
