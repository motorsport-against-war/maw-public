import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage} from "../../../lib/strapi";
import Link from 'next/link'

const Needs = ({ menu, meta, page, error }) => {

  return (
    <>
        <h1 className={styles.title}>
          {page.Meta.title}
        </h1>

    </>
  )
}

export const getStaticProps = async () => {
    const { menu, meta, hero } = await loadGlobal()
    const { page } = await loadPage('/needs')
    return { props: { menu, meta, hero, page } }
}

export default Needs;