import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import React from "react";

function Cover(){
    return (
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Peter Sadek
            </Typography>
          </CardContent>
        </Card>
    );
}

export default Cover;