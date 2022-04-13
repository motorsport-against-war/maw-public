import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const categories = [
    { header: "PRESS KIT", links: [
        {
            title:"Stickers",
            href:"/presskit"
        },
        {
            title:"Merch",
            href:"/presskit"
        },
        {
            title:"Artworks",
            href:"/presskit"
        }
    ]
    },
    { header: "JOIN US", links: [
            {
                title:"Instagram",
                href:"https://www.facebook.com/MotorsportAgainstWar/"
            },
            {
                title:"Facebook",
                href:"https://www.facebook.com/MotorsportAgainstWar/"
            },
            {
                title:"Twitter",
                href:"https://www.facebook.com/MotorsportAgainstWar/"
            }
        ]
    }
];

export default function ThreeColumnFooter() {
    return (
        <Box component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={3} sx={{ py: 8 }}>
                    <Grid item xs={12} md={6}>
                        <img alt="Brand logo" src="/images/logo_big.jpg" width="100%" />
                        <Typography color="text.secondary" sx={{ mt: 2 }} variant="body2">
                            <Link href="mailto:motorsportagainstwar@gmail.com" target="_blank">motorsportagainstwar@gmail.com</Link>
                        </Typography>
                        {/*<Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                            <IconButton aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="LinkedIn">
                                <LinkedInIcon />
                            </IconButton>
                        </Stack>*/}
                    </Grid>
                    {categories.map((category) => (
                        <Grid key={category.header} item xs={12} md={2}>
                            <Stack spacing={1}>
                                <Typography component="div" variant="h6">
                                    {category.header}
                                </Typography>
                                {category.links.map((link) => (
                                    <Link
                                        color="text.secondary"
                                        key={link.title}
                                        underline="none"
                                        href={link.href}
                                        variant="body2"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Divider />
                <Box
                    sx={{
                        textAlign: "center",
                        py: 3,
                    }}
                >
                    <Typography color="text.secondary" variant="body2">
                        © 2022 MotorsportAgainstWar
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}