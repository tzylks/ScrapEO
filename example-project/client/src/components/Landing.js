import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Landing() {
    return (
        <>
            <Box sx={{ }}>
                <Parallax horiztonal={true} pages={2.4} style={{ top: '0', left: '0' }}>

                    <ParallaxLayer horizontal={true} factor={2} offset={0} speed={1} style={{ backgroundColor: '#ff6d6d' }}>
                    <Typography variant='h1' style={{fontSize: '10rem', position: 'absolute', top: 130, left: 350, fontFamily: "'Bowlby One SC', cursive", color: 'white'}}>ScrapEO</Typography>
                    </ParallaxLayer>

                    <ParallaxLayer
                        factor={2.5}
                        horizontal={true}
                        offset={1}
                        speed={2}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#28FFBF' }}>
                        <p style={{marginBottom: '40vh'}}>Scroll down</p>
                    </ParallaxLayer>
               

                    {/* <ParallaxLayer factor={2} horizontal={true} offset={1} speed={1} style={{ backgroundColor: 'yellow' }} /> */}
                </Parallax>
            </Box>
        </>
    )
}

export default Landing