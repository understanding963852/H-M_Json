import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    //let url = `http://localhost:3004/products/${id}`;
    let url = `https://my-json-server.typicode.com/understanding963852/H-M_Json/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container">
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="title">{product?.title}</div>
          <div className="price">{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
