import { List, ListItem, ListItemDecorator, SvgIcon, Typography } from "@mui/joy";
import React from "react";

function Technologies({ technologies }) {
    return (
        <>
            <Typography
                id="decorated-list-demo"
                level="body-xs"
                textTransform="uppercase"
                fontWeight="lg"
                mb={1}
            >
                Technologies
            </Typography>
            <List aria-labelledby="decorated-list-demo">
                {
                    technologies.map((tech) => <a href={tech.link} target={"_blank"} style={{ textDecoration: 'none' }}> <ListItem key={tech.title} >
                        <ListItemDecorator>{tech.icon}</ListItemDecorator>
                        {tech.title}
                    </ListItem>
                    </a>
                    )
                }
            </List>
        </>
    );
}

export default Technologies;