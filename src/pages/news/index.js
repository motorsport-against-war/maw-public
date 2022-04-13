import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage} from "../../../lib/strapi";
import Link from 'next/link'
import ArticlesList from "../../components/articlesList";

const News = ({ menu, meta, page, articles, error }) => {

  return (
      <section>
        <h1 className={styles.title}>
            {page.Meta.title}
        </h1>

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