import Head from "next/head";
import ModifyModal from "../Common/ModifyModal";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title> Ghuronti </title>
      </Head>
      <ModifyModal></ModifyModal>
      <main className="layout">{children}</main>
    </>
  );
}
