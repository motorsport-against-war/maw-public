import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {loadGlobal, loadPage, loadPressKits} from "../../lib/strapi";
import Link from 'next/link'
import Footer from "../layouts/default/footer";
import Typography from "@mui/material/Typography";
import React from "react";
import PageHeader from "../components/pageHeader";
import PageBody from "../components/pageBody";
import PresskitList from "../components/presskitList";

const PressKit = ({ menu, meta, hero, page, pressKits, error }) => {

  return (
    <div className={styles.container}>
        <PageHeader title={page.Meta.title}/>
        <PageBody body={page.body}/>
        <PresskitList items={pressKits}/>
    </div>
  )
}

export const  getStaticProps = async () => {
  const { menu, meta, hero } = await loadGlobal()
  const { page } = await loadPage('/presskit')
  const { pressKits } = await loadPressKits()
  return { props: { menu, meta, hero, pressKits, page }, revalidate: 10 }
}

export default PressKit;