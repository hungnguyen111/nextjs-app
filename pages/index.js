import React from 'react';
import Head from 'next/head';

//redux
import { useDispatch, useSelector } from 'react-redux';

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

//action
import * as actions from '../store/actions';

export default function Home() {
    const dispatch = useDispatch();
    const flag = useSelector(store => store.pageReducer.flag);
    

    const hadleChangeSlider = (swiper) => {
        let index = swiper.activeIndex;
        for (let i = 0; i <= 6; i ++) {
            $(`#${i}`).removeClass('swiper-slide-active')
        }
        $(`#${index}`).addClass('swiper-slide-active');
        if(index == 6) {
            $('.slider_menu > .swiper-wrapper').css('transform', 'translateX(-132px)')
        }
        if(index == 7) {
            $('#1').addClass('swiper-slide-active');
            $('.slider_menu > .swiper-wrapper').css('transform', 'translateX(0)')
        }
    }

    const handleClickLocation = () => {
        dispatch(actions.changeFlag());
        console.log(flag);
        if (process.browser) {
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
        }
    }

    const handleBackground = () => {
        dispatch(actions.setFlagFalse());
    }

    return (
        <>
            <Head>
                <title>NextJS App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />

            <div id="header-overlay" onClick={handleBackground} className="header-overlay"></div>

            <div id="box-menu__click" className="box-menu box-menu__click">
                <div className="shadow-sm box-menu__list-menu sp">
                <ul className="list-menu">
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">??i???n Tho???i</div>
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
                        <div className="box-name">??m Thanh</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">?????ng H???</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">Nh?? Th??ng Minh</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">Ph??? Ki???n</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">Thu C??</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">H??ng C??</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faSimCard}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">Sim Th???</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faJournalWhills}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">Tin C??ng Ngh???</div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div className="box-icon">
                        <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                        </div>
                        <div className="box-name">Khuy???n M???i</div>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            
            <div className="sp location_sp">
                <div id="navbar-box__local" onClick={handleClickLocation} className="navbar-box__local">
                <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                >
                    <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                    B???n ??ang xem gi??, t???n kho t???i:
                    <strong> H??? Ch?? Minh</strong>
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
                    H?? N???i
                    </a>
                </li>
                <li>
                    <a>
                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                    H???i D????ng
                    </a>
                </li>
                <li>
                    <a>
                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                    H??? Ch?? Minh
                    </a>
                </li>
                <li>
                    <a>
                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                    B??nh D????ng
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
                        <span>??i???n tho???i</span>
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
                            <span>??i???n tho???i ph??? th??ng</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Tin ?????n - M???i ra</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Pocophone</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>H??ng Kh??c</span>
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
                            <span>Ph??? ki???n</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>M??n h??nh</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>M??y in</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Linh ki???n Laptop</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Laptop Avita</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>M??y t??nh ????? b??n</span>
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
                        <span>??m Thanh</span>
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
                                <span>Loa vi t??nh</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a>
                                <span>Loa Bluetooth</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a>
                                <span>Loa k??o</span>
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
                                <span>Tai nghe kh??ng d??y</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a>
                                <span>Tai nghe Bluetooth</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a>
                                <span>Tai nghe nh??t tai</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a>
                                <span>Tai nghe ch???p tai</span>
                                </a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        <span>?????ng H???</span>
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
                            <span>H??ng kh??c</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>V??ng tay th??ng minh</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>?????ng h??? ?????nh v??? tr??? em</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        <span>Nh?? th??ng minh</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>Kho?? th??ng minh</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>M??y h??t b???i</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>M??y l???c kh??ng kh??</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>????n th??ng minh</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>??? c???m ??i???n</span>
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
                            <span>C??n s???c kho???</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>M??y chi???u</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>H??ng c??</span>
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
                        <span>Ph??? ki???n</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>Ph??? ki???n Apple</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>D??n ??i???n tho???i | Laptop</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>???p l??ng | Bao da | ???p AirPods</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>D??y ??eo ?????ng h???</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Balo | T??i x??ch</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>C??p s???c</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Pin d??? ph??ng</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Thi???t b??? m???ng</span>
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
                                <span>Camera h??nh tr??nh</span>
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
                            <span>Chu???t | B??n Ph??m</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>Ph??? ki???n ti???n ??ch</span>
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
                        <span>Thu c??</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <p className="box-menu__child-title">
                            <strong>?????I T??C THU MUA:</strong>
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
                        <span>H??ng c??</span>
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
                        <span>Sim th???</span>
                        <span className="arrow-right">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </span>
                        </a>
                        <ul className="box-list-menu box-menu__child">
                        <li className="menu-item">
                            <a>
                            <span>Th??? c??o</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <span>D???ch v??? sim</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>
                        <FontAwesomeIcon icon={faJournalWhills}></FontAwesomeIcon>
                        <span>Tin c??ng Ngh???</span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a>
                        <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                        <span>Khuy???n m???i</span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="box-sliding__center shadow-sm">
                    <Swiper
                    className="pc"
                    spaceBetween={100}
                    slidesPerView={1}
                    onSlideChange={hadleChangeSlider}
                    autoplay={{
                        delay: 3000,
                    }}
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
                    </Swiper>
                    <Swiper
                    className="slider_menu pc"
                    spaceBetween={100}
                    slidesPerView={5}
                    >
                    <SwiperSlide id="1">
                        M???NG KHAI TR????NG
                        <br />
                        Gi???m s???c ?????n 50%
                    </SwiperSlide>
                    <SwiperSlide id="2">
                        GALAXY A52 | A72
                        <br />
                        Hotsale gi?? t???t
                    </SwiperSlide>
                    <SwiperSlide id="3">
                        VIVO X60 PRO 5G
                        <br />
                        ?????t tr?????c gi?? c???c s???c
                    </SwiperSlide>
                    <SwiperSlide id="4">
                        APPLE WATCH S3
                        <br />
                        Ch??? t??? 5 tri???u
                    </SwiperSlide>
                    <SwiperSlide id="5">
                        HUAWEI FREEBUDS 4I
                        <br />
                        M??? b??n nhi???u ??u ????i
                    </SwiperSlide>
                    <SwiperSlide id="6">
                        CAMERA VIETMAP
                        <br />
                        M??? b??n gi?? t???t
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
                    <div className="box-name">??i???n Tho???i</div>
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
                    <div className="box-name">??m Thanh</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">?????ng H???</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Nh?? Th??ng Minh</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Ph??? Ki???n</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Thu C??</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">H??ng C??</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faSimCard}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Sim Th???</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faJournalWhills}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Tin C??ng Ngh???</div>
                </a>
                </li>
                <li>
                <a>
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                    </div>
                    <div className="box-name">Khuy???n M???i</div>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </>
    );
}
