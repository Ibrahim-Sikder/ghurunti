import React, { useContext, useState } from "react";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import style from "./Nav.module.css";
import Image from "next/image";
import { useEffect } from "react";
import {
  Flight,
  Hotel,
  BookOnline,
  TransferWithinAStation,
  BusAlert,
  DirectionsRailway,
  LocalPhone,
  AccountCircle,
} from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import ibrahim from "../../public/assets/chairman.jpeg";
import { useRouter } from "next/router";

const Nav = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
    navRef.current.classList.toggle("active");
  };
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const user = true;

  const router = useRouter();
  const handleHome = () => {
    router.push("/");
    localStorage.removeItem("l_p");
    localStorage.removeItem("h_p");
    sessionStorage.removeItem("t_c");
    sessionStorage.removeItem("b_o");
    sessionStorage.removeItem("b_t");
    sessionStorage.removeItem("b_p");
    sessionStorage.removeItem("b_f");
  };

  return (
    <section className={style.navBarMainWrap}>
      <div className={style.navbarMain}>
        <div className={style.navbarBanner}>
          <LocalPhone className={style.phoneIcon} />
          <h2>+88-01885-071-488</h2>
          <Link href="/contact">
            <p>Contact Us</p>
          </Link>
          <Link href="/aboutUs" className={style.aboutUs}>
            <p>About Us</p>
          </Link>
        </div>
        <div className={`${stickyMenu ? `${style.sticky}` : ` `}`}>
          <div className={style.navigationMain}>
            <div className={style.navigationContent}>
              <div className={style.navigationLeft}>
                <div className={style.logo}>
                  <div onClick={handleHome} className="cursor-pointer">
                    <Image
                      loading="lazy"
                      className={style.logoImg}
                      src={Logo}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>

              <div className={style.inputDiv}>
                <Typewriter
                  className={style.typeWiter}
                  options={{
                    strings: [
                      "Search Flight, Hotel, Visa, & Tours package !",
                      "Search Tours, Buses, Trains , Hajj & Umrah package !",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className={style.accountWrap}>
                {user ? (
                  <div className={style.buttonWrap}>
                    <div className={style.signUpBtn}>
                      <Link href="/signup">
                        <button>Sign Up</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className={style.iconWrap}>
                    <AccountCircle className={style.userIcon} />
                  </div>
                )}

                <div className={style.userInfo}>
                  <ul>
                    <li>
                      <div className="flex items-center">
                        <div className="w-[50px] h-[50px] mr-2">
                          <Image
                            src={ibrahim}
                            alt="user"
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div>
                          <h4>Ghuronti</h4>
                          <small>ghuronti@gmail.com</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <hr className="mb-2 mt-1 " />
                    </li>
                    <li>
                      <Link href="/profile/booking">My Booking</Link>
                    </li>
                    <li>
                      <Link href="/profile">Dashboard</Link>
                    </li>
                    <li>Log Out </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* mobile menu */}
        <div onClick={toggleMobileMenu} ref={navRef} className={style.bar}>
          <div>
            <span className={mobileMenu ? ` ` : `${style.bar1}`}></span>
            <span className={mobileMenu ? ` ` : `${style.bar2}`}></span>
            <span className={mobileMenu ? ` ` : `${style.bar3}`}></span>
          </div>
        </div>
        <div className={style.mobileToggleSideMenu}>
          <div
            className={mobileMenu ? `${style.menuWraps}` : `${style.hideMenu}`}
          >
            <ul className={style.menu}>
              <div className={style.wrapMenu}>
                <Link href="/hajjUmra">
                  <li className={style.firstChild}>
                    <DirectionsRailway className={style.menuIcon} />

                    <p className="ml-3">Hajj & Umrah</p>
                  </li>
                </Link>
                <Link href="/flight">
                  <li className={style.activeLink}>
                    <Flight className={style.menuFlightIcon} />

                    <p className="ml-3">Flight</p>
                  </li>
                </Link>
                <Link href="/hotel">
                  <li>
                    <Hotel className={style.menuIcon} />

                    <p className="ml-3">Hotel</p>
                  </li>
                </Link>
                <Link href="/visa">
                  <li>
                    <BookOnline className={style.menuIcon} />

                    <p className="ml-3">Vissa</p>
                  </li>
                </Link>
                <Link href="/tours">
                  <li>
                    <TransferWithinAStation className={style.menuIcon} />

                    <p className="ml-3">Tours</p>
                  </li>
                </Link>
                <Link href="/bus">
                  <li>
                    <BusAlert className={style.menuIcon} />

                    <p className="ml-3">Buses</p>
                  </li>
                </Link>
                <Link href="/train">
                  <li className={style.lastChild}>
                    <DirectionsRailway className={style.menuIcon} />
                    <p className="ml-3">Trains</p>
                  </li>
                </Link>
              </div>
            </ul>
            <div className={style.securityInfo}>
              <Link href="/login">
                <button>Login</button>
              </Link>
              <Link href="/signup">
                <button className={style.signUpBtn}>Sign Up</button>
              </Link>
              <Link href="/aboutUs">
                <p>About Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
