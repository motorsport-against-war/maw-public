import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, {useEffect} from "react";
import md from "markdown-it";


export default function PageBody({body}) {
    const [html, setHtml] = React.useState('');

    useEffect(() => {
        if (!body) return
        const html = md().render(body)
        setHtml(html)
    }, [body]);

    if (html=='') return <></>

    return (
        <Typography sx={{ mt: 4 }} dangerouslySetInnerHTML={{ __html: html }}/>
    );
}