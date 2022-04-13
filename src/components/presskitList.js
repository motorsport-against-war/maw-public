import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import {FormatDate} from "../../lib/time";
import Link from "@mui/material/Link";

export default function PresskitList({items}) {

    if (!items) return <></>
    return (
        <Box
            component="section"
            sx={{
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "background.default" : "grey.50",
                p: 4,
            }}
        >
            <Grid container spacing={3}>
                {items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={6}>
                        <Card variant="outlined">
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    /*src={`https://images.weserv.nl/?url=https://motorsport-against-war.s3.eu-central-1.amazonaws.com/medium_277161102_7202581566481814_673016036970988432_n_da7c1f27e0.jpeg&w=560&h=420&fit=cover`}*/
                                    src={process.env.NEXT_PUBLIC_FAKE_WESERV_IMAGE || `https://images.weserv.nl/?url=${item.attributes.cover.data.attributes.formats.medium?.url}&w=560&h=420&fit=cover`}
                                    alt={item.attributes.title}
                                    /*loading="lazy"*/
                                />

                                {/*<Avatar
                                    alt={article.attributes.title}
                                    src={`${baseMediaURL+article.attributes.cover.data.attributes.formats.medium.url}`}
                                    sx={{ width: 56, height: 56, mb: 2 }}
                                />*/}
                                <Typography variant="h6" component="div">
                                   {item.attributes.item.title}
                                </Typography>
                                <Typography color="text.secondary" variant="body2">
                                    {item.attributes.item.size}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button variant="outlined" href={item.attributes.item.imageOrig.data.attributes.url} target="_blank">
                                    Download
                                </Button>
                            </CardActions>
                            {/*<CardActions sx={{ justifyContent: "space-between" }}>
                                <Button size="small" startIcon={<MailIcon />}>
                                    Email
                                </Button>
                                <Button size="small" startIcon={<PhoneIcon />}>
                                    Phone
                                </Button>
                            </CardActions>*/}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
