import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {loadGlobal, loadArticle, loadArticles} from "../../../lib/strapi";
import ArticlesList from "../../components/articlesList";
import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";

const baseMediaURL = process.env.NEXT_PUBLIC_MEDIA_URL

const Article = ({ menu, meta, article, error }) => {

    //console.log('NNN', article)
    if (!article) return <></>

    return (
        <section>
            <h1 className={styles.title}>
                {article.title}
            </h1>

            <Grid container justifyContent="center">
                <img
                    /*src={`https://images.weserv.nl/?url=https://motorsport-against-war.s3.eu-central-1.amazonaws.com/medium_277161102_7202581566481814_673016036970988432_n_da7c1f27e0.jpeg&w=560&h=420&fit=cover`}*/
                    src={process.env.FAKE_WESERV_IMAGE || `//images.weserv.nl/?url=${article.cover.data.attributes.formats.medium?.url}&w=560&h=420&fit=cover`}
                    alt={article.title}
                    /*loading="lazy"*/
                />
            </Grid>

            <Box>
                {article.body}
            </Box>

        </section>
    )
}

/*Home.getInitialProps = async ctx => {
  return loadGlobal()
};*/

export const  getStaticProps = async (props) => {
    //console.log('STATIC PROPS:', props)
    const { menu, hero, meta } = await loadGlobal()
    const { article } = await loadArticle(props.params.slug)
    return { props: { menu, hero, meta, article }, revalidate: 10 }
}

// instructs next to render all user profiles using SSG
export const getStaticPaths = async () => {
    const {articles} = await loadArticles()
    const paths = articles.map(article => `/news/${article.id}`);
    return { paths, fallback: false };
}

export default Article;