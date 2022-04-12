import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage} from "../../../lib/strapi";
import Link from 'next/link'

const News = ({ menu, meta, articles, error }) => {

  return (
      <>
        <h1 className={styles.title}>
            {meta.title}
        </h1>

        list:
        <ul>
          {articles.map(function(a, idx){
            return (<li key={idx}><Link href={'/news/'+a.id}><a>{a.attributes.title}</a></Link></li>)
          })}
        </ul>

      </>
  )
}

/*Home.getInitialProps = async ctx => {
  return loadGlobal()
};*/

export const  getStaticProps = async () => {
  const { menu, metaGlobal } = await loadGlobal()
  const { meta:metaLocal } = await loadPage('news')
  const {articles} = await loadArticles()
  return { props: { menu, meta:metaLocal||metaGlobal, articles } }
}

export default News;