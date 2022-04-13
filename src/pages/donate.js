import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {loadGlobal, loadPage} from "../../lib/strapi";
import Link from 'next/link'
import Footer from "../layouts/default/footer";
import Typography from "@mui/material/Typography";
import React from "react";
import PageHeader from "../components/pageHeader";
import PageBody from "../components/pageBody";

const Donate = ({ menu, meta, hero, page, error }) => {

    return (
        <section className={styles.container}>
            <PageHeader title={page.Meta.title}/>
            <PageBody body={page.body}/>
        </section>
    )
}

/*Home.getInitialProps = async ctx => {
  return loadGlobal()
};*/

export const  getStaticProps = async () => {
    const { menu, meta, hero } = await loadGlobal()
    const { page } = await loadPage('/donate')
    return { props: { menu, meta, hero, page }, revalidate: 10 }
}

export default Donate;