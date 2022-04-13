import axios from "axios";

const baseURL = process.env.STRAPI_BASE_URL

export async function loadGlobal() {
    try {
        const res = await axios.get(`${baseURL}/api/global?populate=Menu.items,Meta,Hero.image`);
        const {attributes} = res.data.data;
        const menu = attributes.Menu.items;
        const meta = attributes.Meta;
        const hero = attributes.Hero;
        return { menu, meta, hero };
    } catch (error) {
        console.error('FETCH ERROR loadGlobal ', error.toString())
        return { error };
    }
}

export async function loadPage(url) {
    const apiURL = `${baseURL}/api/page?populate=Pages.Meta`
    try {
        const res = await axios.get(apiURL);
        const { Pages:pages } = res.data.data.attributes;
        const page = pages.find(x => x.url === url);
        return { page };
    } catch (error) {
        console.error('FETCH ERROR loadPage ', error.toString())
        return { error };
    }
}

export async function loadArticles() {
    try {
        const res = await axios.get(`${baseURL}/api/articles/?populate=*`);
        const articles = res.data.data;
        return { articles };
    } catch (error) {
        console.error('FETCH ERROR loadArticles ', error.toString())
        return { error };
    }
}

export async function loadPressKits() {
    try {
        const res = await axios.get(`${baseURL}/api/presskits?populate=item.imageOrig,item.imageIcon`);
        const pressKits = res.data.data;
        return { pressKits };
    } catch (error) {
        console.error('FETCH ERROR loadPresskits ', error.toString())
        return { error };
    }
}

export async function loadArticle(id) {
    try {
        const res = await axios.get(`${baseURL}/api/articles/${id}?populate=*`);
        const article = res.data.data.attributes;
        return { article };
    } catch (error) {
        console.error('FETCH ERROR loadArticle ', error.toString())
        return { error };
    }
}