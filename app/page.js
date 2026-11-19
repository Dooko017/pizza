"use client";

import { useState } from "react";

import { PizzaSize } from "./components/PizzaSize";
import { PizzaAdd } from "./components/PizzaAdd";
import { PizzaCount } from "./components/PizzaCount";
import { TotalPizza } from "./components/TotalPizza";

export default function Home() {
  const [size, setSize] = useState("M");

  const [cheese, setCheese] = useState(false);
  const [mushroom, setMushroom] = useState(false);
  const [pepper, setPepper] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const sizePrices = {
    S: 15000,
    M: 20000,
    L: 25000,
  };

  const sizeNames = {
    S: " Жижиг",
    M: "Дунд",
    L: "Том",
  };

  const onePizzaPrice =
    sizePrices[size] +
    (cheese ? 3000 : 0) +
    (mushroom ? 2000 : 0) +
    (pepper ? 1000 : 0);

  const totalPrice = onePizzaPrice * quantity;

  const [ordered, setOrdered] = useState(false);

  const discount = quantity >= 3 ? 0.1 : 0;

  const finalPrice = totalPrice * (1 - discount);

  return (
    <div className="min-h-screen bg-[#f5f2eb] flex justify-center p-5">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-7 text-black">🍕 Пицца угсрах</h1>
        <PizzaSize size={size} setSize={setSize} />
        <PizzaAdd
          cheese={cheese}
          setCheese={setCheese}
          mushroom={mushroom}
          setMushroom={setMushroom}
          pepper={pepper}
          setPepper={setPepper}
        />
        <PizzaCount quantity={quantity} setQuantity={setQuantity} />
        <TotalPizza
          sizeName={sizeNames[size]}
          cheese={cheese}
          mushroom={mushroom}
          pepper={pepper}
          onePizzaPrice={onePizzaPrice}
          totalPrice={totalPrice}
          finalPrice={finalPrice}
          discount={discount}
          ordered={ordered}
          setOrdered={setOrdered}
        />
      </div>
    </div>
  );
}
