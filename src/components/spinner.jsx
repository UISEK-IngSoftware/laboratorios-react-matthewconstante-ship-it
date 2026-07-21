import {Box, CircularProgress} from "@mui/material"

export default function Spinner() {
    return (
        <Box className="spinner-container">
            <CircularProgress size ={60} />
        </Box>
    );
}