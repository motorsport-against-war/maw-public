import Head from "next/head";
import {loadGlobal} from "../../lib/strapi";
import {Button, CssBaseline} from "@mui/material";
import Footer from "./default/footer";
import Header from "./default/header";
import Hero from "../components/hero";
import * as React from "react";

export default function Layout({ children }) {
    //console.log('Layout props:', children)
    return (
        <>
            <Head>
                <title>{children?.props?.meta?.title}</title>
                <meta name="description" content={children?.props?.meta?.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CssBaseline />
            <Header menu={children?.props?.menu}/>
            <Hero hero={children?.props?.hero}/>
            <main>{children}</main>
            <Footer menu={children?.props?.menu}/>
        </>
    )
}

export const  getStaticProps = async () => {
    const { menu, meta } = await loadGlobal()
    return { props: { menu, meta } }
}


