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

        var mdObj = md({
            html:         true,        // Enable HTML tags in source
            xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                        // This is only for full CommonMark compatibility.
            breaks:       true,        // Convert '\n' in paragraphs into <br>
            langPrefix:   'language-en',  // CSS language prefix for fenced blocks. Can be
                                        // useful for external highlighters.
            linkify:      false,        // Autoconvert URL-like text to links

            // Enable some language-neutral replacement + quotes beautification
            // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
            typographer:  true,

            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Could be either a String or an Array.
            //
            // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
            // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
            quotes: '“”‘’',

            // Highlighter function. Should return escaped HTML,
            // or '' if the source string is not changed and should be escaped externally.
            // If result starts with <pre... internal wrapper is skipped.
            highlight: function (/*str, lang*/) { return ''; }
        });

        const html = mdObj.render(body)
        setHtml(html)
    }, [body]);

    if (html=='') return <></>

    return (
        <Typography sx={{ mt: 4 }} dangerouslySetInnerHTML={{ __html: html }}/>
    );
}