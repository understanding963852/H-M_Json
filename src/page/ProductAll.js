import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let searchQuery = query.get("q") || " "; //q로 시작되는 아이템을 가져온다
    console.log("쿼리" + searchQuery);
    //let url = `http://localhost:3004/products`;
    let url = `https://my-json-server.typicode.com/understanding963852/H-M_Json/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  //console.log({ productList });
  //useEffect(함수,배열)
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
