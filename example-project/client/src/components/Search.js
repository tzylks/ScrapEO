import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';

function Search() {
    return (
        <>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <TextField variant="outlined" defaultValue="Website.." sx={{ color: 'black', border: 'none', borderColor: 'transparent'}} />
                <Button variant="outlined" sx={{ marginLeft: '.4vw', bgcolor: 'white', height: '57px', width: '200px' }}>Submit</Button>
            </Box>
        </>
    )
}

export default Search