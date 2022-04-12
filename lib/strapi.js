import axios from "axios";

const baseURL = process.env.STRAPI_BASE_URL

export async function loadGlobal() {
    try {
        const res = await axios.get(`${baseURL}/api/global?populate=Menu.items,Meta`);
        const {attributes} = res.data.data;
        const menu = attributes.Menu.items;
        const meta = attributes.Meta;
        return { menu, meta };
    } catch (error) {
        console.log('FETCH ERROR', error)
        return { error };
    }
}

export async function loadPage(url) {
    const apiURL = `${baseURL}/api/page-${url}?populate=*`
    try {
        const res = await axios.get(apiURL);
        const {attributes} = res.data.data;
        const meta = attributes.Meta;
        return { meta };
    } catch (error) {
        console.log(error.toString()+' URL:'+apiURL)
        return { error };
    }
}

export async function loadArticles() {
    try {
        const res = await axios.get(`${baseURL}/api/articles/?populate=*`);
        const articles = res.data.data;
        return { articles };
    } catch (error) {
        console.log('FETCH ERROR', error)
        return { error };
    }
}

export async function loadArticle(id) {
    try {
        const res = await axios.get(`${baseURL}/api/articles/${id}?populate=*`);
        const article = res.data.data.attributes;
        return { article };
    } catch (error) {
        console.log('FETCH ERROR', error)
        return { error };
    }
}