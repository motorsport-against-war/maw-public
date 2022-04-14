import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage} from "../../../lib/strapi";
import Link from 'next/link'
import ArticlesList from "../../components/articlesList";
import Typography from "@mui/material/Typography";
import React from "react";
import PageHeader from "../../components/pageHeader";
import PageBody from "../../components/pageBody";

const News = ({ menu, meta, page, articles, error }) => {
  return (
      <section className={styles.container}>
          <PageHeader title={page.Meta.title}/>
          <PageBody body={page.body}/>
          <ArticlesList articles={articles}/>
      </section>
  )
}

/*Home.getInitialProps = async ctx => {
  return loadGlobal()
};*/

export const  getStaticProps = async () => {
  const { menu, meta, hero } = await loadGlobal()
  const { page } = await loadPage('/news')
  const { articles } = await loadArticles()
  return { props: { menu, meta, hero, page, articles } }
}

export default News;