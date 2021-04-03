import React from 'react';
import Head from 'next/head';
import Header from "../component/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faLaptop,
  faMobileAlt,
  faTabletAlt,
  faMusic,
  faClock,
  faHome,
  faCodeBranch,
  faMoneyBillWave,
  faCircleNotch,
  faSimCard,
  faJournalWhills,
  faTag,
  faAngleDown,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import $ from 'jquery';

export default function Home() {

    const hadleChangeSlider = (swiper) => {
        // console.log(swiper);
        let index = swiper.activeIndex - 1;
        // console.log(index);
        let slide = $('.slider_menu > .swiper-wrapper').children();
        // console.log(slide[index]);
        $('.slider_menu > .swiper-wrapper').children().removeClass('active');
        $('.slider_menu > .swiper-wrapper').children(index).addClass('active');
    }
    return (
        <>
        <Head>
            <title>NextJS App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header />
        <div id="header-overlay" className="header-overlay"></div>
        <div id="box-menu__click" className="box-menu box-menu__click">
            <div className="shadow-sm box-menu__list-menu sp">
            <ul className="list-menu">
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Điện Thoại</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Laptop</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faTabletAlt}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Tablet</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Âm Thanh</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Đồng Hồ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Nhà Thông Minh</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Phụ Kiện</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Thu Cũ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Hàng Cũ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faSimCard}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Sim Thẻ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faJournalWhills}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Tin Công Nghệ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Khuyến Mại</div>
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div className="sp location_sp">
            <div id="navbar-box__local" className="navbar-box__local">
            <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
            >
                <p>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                Bạn đang xem giá, tồn kho tại:
                <strong> Hồ Chí Minh</strong>
                <FontAwesomeIcon
                    className="arrow"
                    icon={faAngleDown}
                ></FontAwesomeIcon>
                </p>
            </a>
            </div>
            <ul id="dropdown-menu" className="dropdown-menu">
            <li>
                <a>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                Hà Nội
                </a>
            </li>
            <li>
                <a>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                Hải Dương
                </a>
            </li>
            <li>
                <a>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                Hồ Chí Minh
                </a>
            </li>
            <li>
                <a>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                Bình Dương
                </a>
            </li>
            </ul>
        </div>
        <div className="container box-sliding">
            <div className="row">
            <div className="box-sliding__left pc">
                <ul className="box-list-menu">
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    <span>Điện thoại</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Apple</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>iPhone 12 Series</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>iPhone 11 Series</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>iPhone X | XR</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>iPhone SE 2020</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Samsung</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Xiaomi</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>OPPO</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Nokia</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Realme</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Vsmart</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>ASUS</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Huawei</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Vivo</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>OnePlus</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Điện thoại phổ thông</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Tin đồn - Mới ra</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Pocophone</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Hãng Khác</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>BKAV Bphone</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Sharp</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                    <span>Laptop</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Mac</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>MacBook Air</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>MacBook Pro</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Mac mini</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>HP</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Dell</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Lenovo</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Microsoft Surface</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Asus</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Acer</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>LG</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Huawei</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>MSI</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Phụ kiện</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Màn hình</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Máy in</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Linh kiện Laptop</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Laptop Avita</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Máy tính để bàn</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faTabletAlt}></FontAwesomeIcon>
                    <span>Tablet</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>iPad Pro</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>iPad 10.2</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>iPad Air</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>iPad mini</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Huawei</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Samsung</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                    <span>Âm Thanh</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Loa</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>Loa vi tính</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Loa Bluetooth</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Loa kéo</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Loa Tivi | Soundbar</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Tai nghe</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>Tai nghe không dây</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Tai nghe Bluetooth</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Tai nghe nhét tai</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Tai nghe chụp tai</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    <span>Đồng Hồ</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Apple Watch</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Samsung</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Garmin</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Xiaomi</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Amazfit</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Huawei</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>OPPO</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Hãng khác</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Vòng tay thông minh</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Đồng hồ định vị trẻ em</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    <span>Nhà thông minh</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Khoá thông minh</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Máy hút bụi</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Máy lọc không khí</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Đèn thông minh</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Ổ cắm điện</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>TV Box</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>OPPO</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Cân sức khoẻ</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Máy chiếu</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Hàng cũ</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Wifi Mesh</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Modem Router</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Camera An Ninh</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                    <span>Phụ kiện</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Phụ kiện Apple</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Dán điện thoại | Laptop</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Ốp lưng | Bao da | Ốp AirPods</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Dây đeo đồng hồ</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Balo | Túi xách</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Cáp sạc</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Pin dự phòng</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Thiết bị mạng</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a>
                        <span>Camera</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>Camera hành trình</span>
                            <span className="arrow-right">
                                <FontAwesomeIcon
                                icon={faAngleRight}
                                ></FontAwesomeIcon>
                            </span>
                            </a>
                            <ul className="box-list-menu box-menu__child">
                            <li className="menu-item">
                                <a>
                                <span>Gopro</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a>
                                <span>Vietmap</span>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Camera An Ninh</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Gimbal</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Chuột | Bàn Phím</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Phụ kiện tiện ích</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Gaming Gear</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                    <span>Thu cũ</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <p className="box-menu__child-title">
                        <strong>ĐỐI TÁC THU MUA:</strong>
                    </p>
                    <li className="menu-item">
                        <a>
                        <span>CellphoneS</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>SKTel</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Compasia</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
                    <span>Hàng cũ</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>iPhone</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>iPad</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Apple Watch</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Mac</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Samsung</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Huawei</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Xiaomi</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>OPPO</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Realme</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>ASUS</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Nokia</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Vsmart</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Laptop</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faSimCard}></FontAwesomeIcon>
                    <span>Sim thẻ</span>
                    <span className="arrow-right">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </span>
                    </a>
                    <ul className="box-list-menu box-menu__child">
                    <li className="menu-item">
                        <a>
                        <span>Thẻ cào</span>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <span>Dịch vụ sim</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faJournalWhills}></FontAwesomeIcon>
                    <span>Tin công Nghệ</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a>
                    <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                    <span>Khuyến mại</span>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </li>
                </ul>
            </div>
            <div className="box-sliding__center shadow-sm">
                {/* <div className="swiper-button-prev-custom">prev</div>
                <div className="swiper-button-next-custom">next</div> */}
                <Swiper
                className="pc"
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={hadleChangeSlider}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 3000,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={{
                    clickable: true,
                }}
                loop={true}
                >
                <SwiperSlide>
                    <a>
                    <img
                        className="pc"
                        src="./img/carousel/Sliding-690x300-ktx_-3.png"
                    />
                    <img
                        className="sp"
                        src="./img/carousel/ktx_-1-Sliding-640x278.png"
                    />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img className="pc" src="./img/carousel/690x300_8_-a52.png" />
                    <img className="sp" src="./img/carousel/640x278_5_-a52.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img
                        className="pc"
                        src="./img/carousel/Sliding-690x300-ip11.png"
                    />
                    <img
                        className="sp"
                        src="./img/carousel/Sliding-640x278-x60-pro.png"
                    />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img className="pc" src="./img/carousel/APPLE_WATCH_3.png" />
                    <img
                        className="sp"
                        src="./img/carousel/APPLE_WATCH_3_1_.png"
                    />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img
                        className="pc"
                        src="./img/carousel/4i-Sliding-690x300.png"
                    />
                    <img
                        className="sp"
                        src="./img/carousel/4i-Sliding-640x278.png"
                    />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img
                        className="pc"
                        src="./img/carousel/VIETMAP_690x300.png"
                    />
                    <img
                        className="sp"
                        src="./img/carousel/VIETMAP_640x278.png"
                    />
                    </a>
                </SwiperSlide>
                {/* <SwiperSlide className="sp">
                        <a>
                            <img src="./img/carousel/640x27821p.png" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="sp">
                        <a>
                            <img src="./img/carousel/iphone_12__690x300.png" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="sp">
                        <a>
                            <img src="./img/carousel/Sliding-690x300_1.png" />
                        </a>
                    </SwiperSlide> */}
                </Swiper>
                <Swiper
                className="slider_menu pc"
                spaceBetween={100}
                slidesPerView={5}
                // onSlideChange={(swiper) => console.log(swiper)}
                // onSwiper={(swiper) => console.log(swiper)}
                // autoplay={{
                //     delay: 3000
                // }}
                // pagination={{
                //     clickable: true,
                // }}
                // loop={true}
                >
                <SwiperSlide>
                    MỪNG KHAI TRƯƠNG
                    <br />
                    Giảm sốc đến 50%
                </SwiperSlide>
                <SwiperSlide>
                    GALAXY A52 | A72
                    <br />
                    Hotsale giá tốt
                </SwiperSlide>
                <SwiperSlide>
                    VIVO X60 PRO 5G
                    <br />
                    Đặt trước giá cực sốc
                </SwiperSlide>
                <SwiperSlide>
                    APPLE WATCH S3
                    <br />
                    Chỉ từ 5 triệu
                </SwiperSlide>
                <SwiperSlide>
                    HUAWEI FREEBUDS 4I
                    <br />
                    Mở bán nhiều ưu đãi
                </SwiperSlide>
                <SwiperSlide>
                    CAMERA VIETMAP
                    <br />
                    Mở bán giá tốt
                </SwiperSlide>
                </Swiper>
                <Swiper
                className="sp slider-sp"
                spaceBetween={100}
                slidesPerView={1}
                // onSlideChange={(swiper) => console.log(swiper)}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={{
                //     clickable: true
                // }}
                loop={true}
                >
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/ktx_-1-Sliding-640x278.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/640x278_5_-a52.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/Sliding-640x278-x60-pro.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/APPLE_WATCH_3_1_.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/4i-Sliding-640x278.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/VIETMAP_640x278.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a>
                    <img src="./img/carousel/640x27821p.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="sp">
                    <a>
                    <img src="./img/carousel/690x300_-_Rightbanner_iPhone12_2_.png" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="sp">
                    <a>
                    <img src="./img/carousel/Sliding-690x300_1.png" />
                    </a>
                </SwiperSlide>
                </Swiper>
            </div>
            <div className="box-sliding__right pc">
                <div className="right__box-img">
                <a>
                    <img src="./img/640x278_Right_banner-sss.png" />
                </a>
                </div>
                <div className="right__box-img">
                <a>
                    <img src="./img/640x278_-_Rightbanner_iPhone12_2_.png" />
                </a>
                </div>
                <div className="right__box-img">
                <a>
                    <img src="./img/Sliding-690x300.png" />
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="container banner">
            <a>
            <img className="pc" src="./img/MFF-1200x75_3_.png" />
            <img className="sp" src="./img/MFF-800x150_3_.png" />
            </a>
        </div>
        <div className="box-menu sp">
            <div className="shadow-sm box-menu__list-menu">
            <ul className="list-menu">
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Điện Thoại</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Laptop</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faTabletAlt}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Tablet</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Âm Thanh</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Đồng Hồ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Nhà Thông Minh</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Phụ Kiện</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Thu Cũ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Hàng Cũ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faSimCard}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Sim Thẻ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faJournalWhills}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Tin Công Nghệ</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Khuyến Mại</div>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </>
    );
}

function handleEventHome() {
    if (process.browser) {
        let flag = false;
        localStorage.setItem('flag', false);
        $('#navbar-box__local').on('click', () => {
            // console.log(flag);
            flag = !flag;
            localStorage.setItem('flag', flag);
            // let _flag = localStorage.getItem('flag');
            // debugger
            // console.log(_flag);
            
            // $('#dropdown-menu').slideToggle('fast');
            // console.log(display);
            // $('#header-overlay').slideToggle('fast');
            // console.log('sdfsd');
            // console.log('sdfsdf');
            // dispatch({
            //     type: 'HANDLE_FLAG'
            // })
            // debugger
            if (!flag) {
                $('#header-overlay').css('opacity', '0');
                $('#header-overlay').css('visibility', 'hidden');
                $('#dropdown-menu').css('opacity', '0');
                $('#dropdown-menu').css('visibility', 'hidden');
            } else {
                $('#header-overlay').css('opacity', '1');
                $('#header-overlay').css('visibility', 'unset');
                $('#dropdown-menu').css('opacity', '1');
                $('#dropdown-menu').css('visibility', 'unset');
            }
        })
    }
}
handleEventHome();