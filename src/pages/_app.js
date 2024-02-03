import "../styles/globals.css";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../../components/Layout/Layout";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import style from "../../src/styles/globals.css";
import { Toaster } from "react-hot-toast";
import ApiProvider from "@/Context/ApiContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/Redux/app/store";
import { animateScroll as scroll } from 'react-scroll';
import { HiArrowNarrowUp } from "react-icons/hi";


export default function App({ Component, pageProps: { ...pageProps } }) {
  function Loading() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const handleStart = (url) => url !== router.asPath && setLoading(true);
      const handleComplete = (url) =>
        url !== router.asPath &&
        setTimeout(() => {
          setLoading(false), 5000;
        });

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });
    return loading && <Loader />;
  }


  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('button')
     if(window.scrollY > 600){
       button?.classList.add('scrollToTopBtn')
      }
      else{
      button?.classList.remove('scrollToTopBtn')
     }

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

function scrollToTop(){
  window.scrollTo(0,0)
  scroll.scrollToTop({ smooth: true });
}



  return (
    <>
      <HelmetProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApiProvider>
              <Layout>
                <Loading />
                <Component {...pageProps} />
                <Toaster />
              </Layout>
            </ApiProvider>
          </PersistGate>
        </Provider>
      </HelmetProvider>

      <button onClick={scrollToTop} id="button"><HiArrowNarrowUp size={25} /> </button>

    </>
  );
}
