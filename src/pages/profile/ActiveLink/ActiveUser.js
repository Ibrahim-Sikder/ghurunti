import React from "react";
import { Router, withRouter } from "next/router";
import style from './ActiveLink.module.css';

const ActiveUser = ({ router, href, children }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router?.pathname === href || router?.asPath === href;

  return (
    <section>
      <a
        href={href}
        onClick={handleClick}
        className={isCurrentPath ? `${style.activeUser}` : `${style.user}`}
      >
        {children}
      </a>
    </section>
  );
};

export default withRouter(ActiveUser);
