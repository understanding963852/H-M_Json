import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      //react에서는 우리가 읽어오고싶은값이 event에 들어있다.
      //입력한 검색어를 읽어와서(input안에 있는 값을 react에서 읽어오는 방법법)
      let keyword = event.target.value;
      //url를 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login_button" onClick={gotoLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>로그인</div>
        </div>
      </div>

      <div className="logo">
        <img src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="menu-form">
          <label for="search">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input type="text" id="search" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
