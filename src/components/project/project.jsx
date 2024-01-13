import { OpenInNew } from "@mui/icons-material";
import { AspectRatio, Box, Button, Card, CardContent, CardOverflow, Typography } from "@mui/joy";
import React from "react";
import Technologies from "../technologies/tech";

function Project({ title, description, image, link1, link2, technologies, type, titleLink, fitImg }) {
    return (
        <Card key={title} orientation="horizontal" variant="outlined" >
            <CardOverflow>
                <AspectRatio ratio="1" sx={{ paddingTop: '50%', paddingInlineStart: '10%', borderRadius: '50%', width: 100, height: 150 }}>
                    <img
                        src={image}
                        srcSet={image}
                        loading="lazy"
                        alt=""
                        style={{
                            objectFit: fitImg
                        }}
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography fontWeight="md" textColor="success.plainColor">
                    {title}
                    {titleLink ? <a style={{ textDecoration: 'none' }} href={titleLink} target="_blank"><OpenInNew /></a> : React.null}
                </Typography>
                {technologies ? <Technologies technologies={technologies} /> : React.null}
                <Typography level="body-sm">{description}</Typography>
                <Box marginTop={1} justifyContent={'center'} gap={1} display={'flex'}>
                    {link1 ? <a style={{ textDecoration: 'none' }} href={link1} target="_blank"><Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            '--variant-borderWidth': '2px',
                            borderRadius: 40,
                            borderColor: 'primary.500',
                            mx: 'auto',
                        }}
                        href={link1}
                        target="_blank"
                        startDecorator={<OpenInNew />}
                    >

                        See Github Project

                    </Button></a> : React.null}
                    {link2 ? <a style={{ textDecoration: 'none' }} href={link2} target="_blank"> <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            '--variant-borderWidth': '2px',
                            borderRadius: 40,
                            borderColor: 'primary.500',
                            mx: 'auto',
                        }}
                        href={link2}
                        target="_blank"
                        startDecorator={<OpenInNew />}
                    >

                        See Project Demo
                    </Button></a> : React.null}

                </Box>
            </CardContent>
            <CardOverflow
                variant="soft"
                color="primary"
                sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs',
                    fontWeight: 'xl',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                }}
            >
                {type}
            </CardOverflow>
        </Card>
    );
}

export default Project;