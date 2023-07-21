import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const {
    filteredItems,
    searchByTitle,
    setSearchByTitle,
    setSearchByCategory,
  } = useContext(ShoppingCartContext);

  const { category } = useParams();

  useEffect(() => {
    setSearchByCategory(category || "");
  }, [category]);

  return (
    <>
      <div className="flex justify-center items-center text-nord-6 font-semibold text-lg w-80 mb-4">
        <h1>Exclusive products</h1>
      </div>
      <div className="relative text-nord-4 text-body w-80 mb-8">
        <MagnifyingGlassIcon className="h-full w-6 absolute left-2 my-auto stroke-2" />
        <input
          type="text"
          placeholder="Search a product..."
          className="rounded-lg w-full py-2 pr-2 pl-10 bg-nord-1 text-nord-6 outline-none border-2 border-transparent focus:border-nord-3 placeholder:text-nord-4"
          value={searchByTitle}
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
};

export default Home;
