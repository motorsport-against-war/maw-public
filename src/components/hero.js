import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import {FormatImageURL} from "../../lib/utils";

export default function Hero({hero}) {
    //console.log('VVV', hero)
    if (!hero) return <></>

    const styles = {
        paperContainer: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${FormatImageURL(hero.image.data.attributes.formats.large.url)})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"600px",
        },
        redDot: {
            width:"270px",
            height:"270px",
            borderRadius: "3000px",
            backgroundColor: "#8e2c2c",
            backgroundPosition: "center center",
            borderColor: "transparent",
            borderStyle: "solid"
        }
    };

    return (
        <Box component="section" style={styles.paperContainer}>
            <Container sx={{ py: 10 }} maxWidth="lg">
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                        <Typography color="white" component="h1" variant="h3" fontWeight="fontWeightBold" fontSize={55}>
                            {hero.title.split(' ').map((part)=>(
                                <div key={part}>{part}</div>
                            ))}
                        </Typography>
                        <Typography color="white" sx={{ mt: 4 }} fontSize={22}>
                            {hero.body}
                        </Typography>
                        {/*<Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                            <Button size="large" variant="outlined">
                                Contact Us
                            </Button>
                            <Button size="large" variant="contained">
                                Get Started
                            </Button>
                        </Stack>*/}
                    </Grid>
                    <Grid item  justifyContent="flex-end" xs={12} md={6} sx={{display: { xs: 'none', md: 'flex' }}} >
                        <Box style={styles.redDot}>
                            <Stack direction="row" justifyContent="center">
                                <Typography color="white" component="h1" variant="h3" fontWeight="fontWeightBold" fontSize={100}>
                                    {hero.deadChildrenQty}
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="center">
                                <Typography color="white" align="center" sx={{ mt: 0 }} fontSize={22}>
                                    {hero.deadChildrenText}
                                </Typography>
                            </Stack>

                        </Box>
                        {/*<Box
                            alt="hero"
                            component="img"
                            src={baseMediaURL+hero.image.data.attributes.formats.large.url}
                            sx={{ width: "100%" }}
                        />*/}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}