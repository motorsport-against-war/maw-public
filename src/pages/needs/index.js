import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {loadArticles, loadGlobal, loadPage} from "../../../lib/strapi";
import Link from 'next/link'
import Typography from "@mui/material/Typography";
import React from "react";
import PageHeader from "../../components/pageHeader";
import PageBody from "../../components/pageBody";

const baseMediaURL = process.env.NEXT_PUBLIC_MEDIA_URL

const Needs = ({ menu, meta, page, error }) => {

  return (
      <section className={styles.container}>
          <PageHeader title={page.Meta.title}/>
          <PageBody body={page.body}/>
      </section>

  )
}

export const getStaticProps = async () => {
    const { menu, meta, hero } = await loadGlobal()
    const { page } = await loadPage('/needs')
    return { props: { menu, meta, hero, page } }
}

export default Needs;