import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPhone,
    faMapMarkedAlt,
    faShoppingBag,
    faSearch,
    faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="header pc">
            <div className="header-content container">
                <div className="navbar-header">
                    <a>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="box-main__box-local dropdown"></div>
                {/* <form id="search_mini_form" className="box-main__form-search">
                    <div className="input-group">
                        <input type="text" id="search" placeholder="Bạn cần tìm gì?" value="" maxlength="128" autocomplete="off"/>
                        <div className="input-group-btn">
                            <button>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </form> */}
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
                            <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                        </div>
                        <div className="about__box-content pc">
                            <p className="title">Tìm cửa hàng</p>
                        </div>
                    </a>
                    <a className="box-about">
                        <div className="about__box-icon">
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
