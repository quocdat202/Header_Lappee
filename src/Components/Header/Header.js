import { Button } from "@mui/material";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-qc">
          <a className="tinqc" href="#">
            Tin quảng cáo: bla bla...........
          </a>
          <ul>
            <li>
              <a href="#">
                <img src="images/icons8_phone_48.png" alt="tuvanmuahang" />
                Tư vấn mua hàng: 0988888288
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons8_phone_48.png" alt="cskh" />
                CSKH: 0988888288
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/responsive_48px.png" alt="tincongnghe" />
                Tin công nghệ
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-top">
          <ul className="menu-left">
            <li>
              <a href="#">
                <img src="images/Logo (2).png" alt="" />
              </a>
            </li>
            <li className="search">
            <form className="example" action="/action_page.php">
              <input type="text" placeholder="Search.." />
              <button type="submit" ><img src="images/search_32px.png" /> </button>
            </form>

            </li>
          </ul>
          <ul className="menu-right">
            <li>
              <a href="#">
                <img src="images/home_24px.png" alt="" />
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/menu.png" alt="" />
                Sản Phẩm
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/notification_30px.png" alt="" />
                Thông Báo
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/shopping_24px.png" alt="" />
                Giỏ Hàng
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/user.png" alt="" />
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
