import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage, loadPressKits} from "../../lib/strapi";
import Link from 'next/link'
import Footer from "../layouts/default/footer";
import Typography from "@mui/material/Typography";
import React from "react";
import PageHeader from "../components/pageHeader";
import PageBody from "../components/pageBody";
import PresskitList from "../components/presskitList";
import ArticlesList from "../components/articlesList";

const Home = ({ menu, meta, hero, pageHome, pageDonate, pagePressKit, pressKits, articles, error }) => {

  return (
    <div className={styles.container}>
        <PageHeader title={pageHome.Meta.title}/>
        <PageBody body={pageHome.body}/>
        <ArticlesList articles={articles}/>

        <PageHeader title={pageDonate.Meta.title}/>
        <PageBody body={pageDonate.body}/>

        <PageHeader title={pagePressKit.Meta.title}/>
        <PageBody body={pagePressKit.body}/>
        <PresskitList items={pressKits}/>
    </div>
  )
}

export const  getStaticProps = async () => {
    const { menu, meta, hero } = await loadGlobal()
    const { page:pageHome } = await loadPage('/')
    const { page:pageDonate } = await loadPage('/donate')
    const { page:pagePressKit } = await loadPage('/presskit')
    const { pressKits } = await loadPressKits()
    const { articles } = await loadArticles()
    return { props: { menu, meta, hero, pageHome, pageDonate, pagePressKit, pressKits, articles }, revalidate: 10  }
}

export default Home;