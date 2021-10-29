import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useState } from 'react'
function Search() {
    const [website, setWebsite] = useState('')
    

    function submitForm(e){
        e.preventDefault()
        fetch('/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": website
            })
        })
        .then(res => res.json())
        .then(console.log)
    }

    return (
        <>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <form onSubmit={submitForm}>
                <TextField variant="outlined" placeholder="Website.." defaultValue="Website.." value={website} onChange={(e) => setWebsite(e.target.value)} sx={{ color: 'black', border: 'none', borderColor: 'transparent'}} />
                <Button variant="outlined" type="submit" sx={{ marginLeft: '.4vw', bgcolor: 'white', height: '57px', width: '200px' }}>Submit</Button>
                </form>
            </Box>
        </>
    )
}

export default Search