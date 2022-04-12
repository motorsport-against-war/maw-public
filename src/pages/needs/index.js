import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage} from "../../../lib/strapi";
import Link from 'next/link'

const Index = ({ menu, meta, error }) => {

  return (
    <>
        <h1 className={styles.title}>
          {meta.title}
        </h1>

    </>
  )
}

export const getStaticProps = async () => {
    const { menu, meta:metaGlobal } = await loadGlobal()
    const { meta:metaLocal, error } = await loadPage('need')
    return { props: { menu, meta:metaLocal||metaGlobal } }
}

export default Index;