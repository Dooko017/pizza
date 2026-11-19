export const PizzaCount = ({ quantity, setQuantity }) => {
  return (
    <div className="mb-6">
      <h2 className="font-bold text-lg mb-3 text-black">Тоо ширхэг</h2>
      <div className="flex items-center gap-5">
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
          className="bg-gray-800 text-white  rounded-full w-10 h-10 disabled:bg-gray-300"
        >
          -
        </button>
        <span className="text-xl text-black font-bold">{quantity} </span>

        <button
          disabled={quantity === 5}
          onClick={() => setQuantity(quantity + 1)}
          className="bg-gray-800 text-white rounded-full w-10 h-10 disabled:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
};
