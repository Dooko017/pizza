export const PizzaSize = ({ size, setSize }) => {
  const sizes = [
    { name: "S", label: "Жижиг", price: "15000" },
    { name: "M", label: "Дунд", price: "20000" },
    { name: "L", label: "Том", price: "25000" },
  ];
  return (
    <div className="mb-6">
      <h2 className="font-bold text-lg mb-3 text-black"> Хэмжээ </h2>
      <div className="flex gap-3 text-black font-bold">
        {sizes.map((item) => (
          <button
            onClick={() => setSize(item.name)}
            className={`border w-full rounded-xl p-3 ${size === item.name ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            <p>{item.label} </p>
            <p className="font-normal">
              {item.price.toLocaleString("en-US")}₮{" "}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
