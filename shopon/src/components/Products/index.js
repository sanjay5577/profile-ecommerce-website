import React from "react";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

function Products({ products }) {
  const { enqueueSnackbar } = useSnackbar();
  const handleAddCart = (productDetail) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === productDetail.id);
    if (isProductExist) {
      console.log("jioo");
      enqueueSnackbar(
        "Item already in cart. Use the cart to update quantity or remove item.",
        { variant: "warning" }
      );
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...productDetail, quantity: 1 }])
      );
      enqueueSnackbar("Item added to cart", { variant: "success" });
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-2  cursor-pointer">
              <Link to={`/products/${item.id}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={item.title}
                    className="object-contain object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {item.category}
                  </h3>
                  <h2 className=" text-gray-900 title-font text-lg font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${item.price}</p>
                </div>
              </Link>
              <button
                className="bottom-2 inline-flex items-center justify-center w-full text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none
     hover:bg-indigo-700 rounded text-base mt-8 md:mt-0"
                onClick={() => handleAddCart(item)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
