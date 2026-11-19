export const PizzaAdd = ({
  cheese,
  setCheese,
  mushroom,
  setMushroom,
  pepper,
  setPepper,
}) => {
  return (
    <div className="mb-6">
      <h2 className="font-bold text-lg mb-3 text-black"> Нэмэлт</h2>
      <div className="flex gap-3 ">
        <button
          onClick={() => setCheese(!cheese)}
          className={`border w-full rounded-xl p-3 text-black ${cheese ? "bg-green-600 text-white" : "bg-white"}  `}
        >
          🧀 Бяслаг
          <p> +3000₮</p>
        </button>
        <button
          onClick={() => setMushroom(!mushroom)}
          className={`border w-full rounded-xl p-3 text-black ${mushroom ? "bg-green-600 text-white" : "bg-white"}  `}
        >
          🍄 Мөөг
          <p> +2000₮</p>
        </button>
        <button
          onClick={() => setPepper(!pepper)}
          className={`border w-full rounded-xl p-3 text-black ${pepper ? "bg-green-600 text-white" : "bg-white"}  `}
        >
          🌶️ Чинжүү
          <p> +1000₮</p>
        </button>
      </div>
    </div>
  );
};
