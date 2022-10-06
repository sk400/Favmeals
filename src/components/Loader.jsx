import React from 'react'
import { Box, CircularProgress } from "@mui/material"

const Loader = () => {
    return (
        <Box sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
            <CircularProgress
                color="primary"
                size="md"
                variant="soft"
            />
        </Box>
    )
}

export default Loader