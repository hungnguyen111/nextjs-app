import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPhone,
    faShoppingBag,
    faSearch,
    faBars,
    faAngleDown,
    faMapMarkerAlt,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

export default function Header(props) {
    
    return (
        <header className="header">
            <div className="header-content container">
                <div className="navbar-header">
                    <a href="#">
                        <span className="pc"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
                        <FontAwesomeIcon id="nav-mobile" icon={faBars}></FontAwesomeIcon>
                        <FontAwesomeIcon id="nav-mobile-close" icon={faTimes}></FontAwesomeIcon>
                        
                        
                        
                        <img src="./logo.jpg" />
                        <FontAwesomeIcon className="sp" icon={faShoppingBag}></FontAwesomeIcon>
                    </a>
                </div>
                <div id="dropdown" className="box-main__box-local dropdown pc">
                    <div className="dropdown-flex">
                        <a id="dropdown-toggle" className="dropdown-toggle">
                            <div>
                                <p>Xem giá, tồn kho tại:</p>
                                <p>Hồ Chí Minh 
                                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                                </p>
                            </div>
                        </a>
                        <ul id="dropdown-menu-pc" className="dropdown-menu">
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
                    <div className="input-group" id="search">
                        <input type="text" id="search-input" className="form-control" placeholder="Bạn cần tìm gì?" maxLength="128" autoComplete="off"/>
                        <div className="input-group-btn">
                            <button id="search-button">
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

function handleEventClick () {
    if (process.browser) {
        let flag2 = false;
        localStorage.setItem('flag2', false);
        $("#search").on('click', () => {
            $('#header-overlay').css('opacity', '1');
            $('#header-overlay').css('visibility', 'unset');
            $('#dropdown-menu').css('opacity', '0');
            $('#dropdown-menu').css('visibility', 'hidden');
            $('.dropdown-menu').css('opacity', '0');
            $('.dropdown-menu').css('visibility', 'hidden');
        })
        $('.box-main__box-about, .header-overlay, .navbar-header, .box-sliding, .banner, .box-menu').on('click', () => {
            localStorage.setItem('flag', false)
            let _flag = localStorage.getItem('flag');
            
            $('#header-overlay').css('opacity', '0');
            $('#header-overlay').css('visibility', 'hidden');
            $('#search-input').css('background', '#fff');
            // $('.dropdown-menu').css('display', 'none');
            // $('#header-overlay').css('display', 'none');
            // $('#header-overlay').toggle();
            // console.log(props);

            
            if (_flag === 'false') {
                $('#header-overlay').css('opacity', '0');
                $('#header-overlay').css('visibility', 'hidden');
                $('#dropdown-menu').css('opacity', '0');
                $('#dropdown-menu').css('visibility', 'hidden');
                $('.dropdown-menu').css('opacity', '0');
                $('.dropdown-menu').css('visibility', 'hidden');
            }
        })
        $('#search-button').on('click', () => {
            console.log('fsdf');
            $('#search-input').css('background', '#faebe7');
        })
        $('#dropdown-toggle').on('click', () => {
            // $('.dropdown-menu').toggle();
            
            // $('#header-overlay').css('opacity', '1');
            // $('#header-overlay').css('visibility', 'unset');
            // $('#header-overlay').toggle();
        })

        //Button Navbar menu mobile
        $('#nav-mobile').on('click', () => {
            // $('#box-menu__click').toggle();
            $('#nav-mobile-close').css('display', 'block');
            $('#nav-mobile').css('display', 'none');
            $('#box-menu__click').toggleClass('active');

        })
        $('#nav-mobile-close').on('click', () => {
            // $('#box-menu__click').css('display', 'none');
            $('#nav-mobile').css('display', 'block');
            $('#nav-mobile-close').css('display', 'none');
            $('#box-menu__click').toggleClass('active');

        })

        //Button location pc
        $('#dropdown').on('click', () => {
            flag2 = !flag2;
            localStorage.setItem('flag2', flag2);
            // localStorage.setItem('flag', false);
            // let _flag = localStorage.getItem('flag');
            // $('#header-overlay').css('opacity', '1');
            // $('#header-overlay').css('visibility', 'unset');
            // $('.dropdown-menu').css('opacity', '1');
            // $('.dropdown-menu').css('visibility', 'unset');
            if (!flag2) {
                $('#header-overlay').css('opacity', '0');
                $('#header-overlay').css('visibility', 'hidden');
                $('.dropdown-menu').css('opacity', '0');
                $('.dropdown-menu').css('visibility', 'hidden');
            } else {
                $('#header-overlay').css('opacity', '1');
                $('#header-overlay').css('visibility', 'unset');
                $('.dropdown-menu').css('opacity', '1');
                $('.dropdown-menu').css('visibility', 'unset');
            }
        })
        

    }
}

handleEventClick();
