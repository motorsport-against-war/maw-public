import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export default function PageBody({body}) {
    return (
        <Typography sx={{ mt: 4 }}>
            {body}
        </Typography>
    );
}