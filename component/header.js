import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPhone,
    faShoppingBag,
    faSearch,
    faBars,
    faAngleDown,
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="header">
            <div className="header-content container">
                <div className="navbar-header">
                    <a href="#">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        <img src="./logo.jpg" />
                        <FontAwesomeIcon className="sp" icon={faShoppingBag}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="box-main__box-local dropdown pc">
                    <div className="dropdown-flex">
                        <a className="dropdown-toggle">
                            <div>
                                <p>Xem giá, tồn kho tại:</p>
                                <p>Hồ Chí Minh 
                                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                                </p>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                        <li><a>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            Hà Nội
                        </a></li>
                        <li><a>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            Hải Dương
                        </a></li>
                        <li><a>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            Hồ Chí Minh
                        </a></li>
                        <li><a>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            Bình Dương
                        </a></li>
                    </ul>
                    </div>
                </div>
                <form id="search_mini_form" className="box-main__form-search">
                    <div className="input-group">
                        <input type="text" className="form-control" id="search" placeholder="Bạn cần tìm gì?" maxLength="128" autoComplete="off"/>
                        <div className="input-group-btn">
                            <button type="submit">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="box-main__box-about">
                    <a className="box-about">
                        <div className="about__box-icon pc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <div className="about__box-content pc">
                            <p className="title">Gọi mua hàng:</p>
                            <p><strong>1800.2097</strong></p>
                        </div>
                    </a>
                    <a className="box-about">
                        <div className="about__box-icon pc">
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                        </div>
                        <div className="about__box-content pc">
                            <p className="title">Tìm cửa hàng</p>
                        </div>
                    </a>
                    <a className="box-about">
                        <div className="about__box-icon pc">
                            <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                        </div>
                        <div className="about__box-content pc">
                            <p className="title">Giỏ hàng</p>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}
