import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {loadGlobal, loadPage} from "../../lib/strapi";
import Link from 'next/link'
import Footer from "../layouts/default/footer";
import Typography from "@mui/material/Typography";
import React from "react";

const Presskit = ({ menu, meta, hero, page, error }) => {

  return (
    <div className={styles.container}>
        <Typography sx={{ mt: 4 }} component="h1" variant="h3">
          {page.Meta.title}
        </Typography>
        <Typography sx={{ mt: 4 }}>
          {page.body}
        </Typography>
    </div>
  )
}

/*Home.getInitialProps = async ctx => {
  return loadGlobal()
};*/

export const  getStaticProps = async () => {
  const { menu, meta, hero } = await loadGlobal()
  const { page } = await loadPage('/presskit')
  return { props: { menu, meta, hero, page } }
}

export default Presskit;