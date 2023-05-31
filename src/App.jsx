import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline" />
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};

export default App;
