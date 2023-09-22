import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ContainerWarning = styled.div`
  font-size: 30px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((previous) => [
        [...previous].sort((a, b) => a.createdAt - b.createdAt),
      ]);
    } else if (sort === "asc") {
      setFilteredProducts((previous) => [
        [...previous].sort((a, b) => a.price - b.price),
      ]);
    } else {
      setFilteredProducts((previous) => [
        [...previous].sort((a, b) => b.price - a.price),
      ]);
    }
  }, [sort]);

  // console.log("products", products);
  // console.log("filteredProducts", filteredProducts);
  return (
    <Container>
      {category ? (
        filteredProducts.length === 0 ? (
          <ContainerWarning>
            There is not this product whit this color or size in stock
          </ContainerWarning>
        ) : (
          filteredProducts.map((item) => <Product key={item._id} item={item} />)
        )
      ) : (
        products
          .slice(0, 8)
          .map((item) => <Product key={item._id} item={item} />)
      )}
    </Container>
  );
};

export default Products;
