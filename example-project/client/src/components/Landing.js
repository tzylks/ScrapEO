import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useSpring, animated } from 'react-spring'

function Landing() {
    const parallax = useRef(null)
    const [website, setWebsite] = useState('')
    const [websiteData, setWebsiteData] = useState([])
    const { x } = useSpring({
        from: { x: 0 },
        config: { frequency: 100 },
      })

    function submitForm(e) {
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
            .then(data => setWebsiteData(data))
    }
    const hi = () => {
    if (websiteData.header) {
    const head = websiteData.header.split(' ')
    const newHeader = [head[0], head[1], head[2], head[3], head[4],head[5]].join(' ')
    return newHeader
    } }
    return (
        <>


            <Parallax ref={parallax} pages={5.5} style={{ top: '0', left: '0' }}>

                <ParallaxLayer horizontal config={{ friction: 20 }} onClick={() => parallax.current.scrollTo(1.5)} factor={2.4} offset={0} speed={1} style={{ background: '#9C19E0', opacity: 1 }}>
                    
                    <Typography variant='h1' style={{ color: "black", fontSize: '10rem', position: 'absolute', top: 280, left: 350, fontFamily: "'Bowlby One SC', cursive", color: '#FF5DA2' }}>S</Typography>
                    <Typography variant='h1' style={{ fontSize: '10rem', position: 'absolute', top: 280, left: 470, fontFamily: "'Bowlby One SC', cursive", color: 'white' }}>crap</Typography>
                    <Typography variant='h1' style={{ fontSize: '10rem', position: 'absolute', top: 280, left: 905, fontFamily: "'Bowlby One SC', cursive", color: '#FF5DA2' }}>EO</Typography>
                    <Typography variant='h1' style={{ fontSize: '6rem', position: 'absolute', top: 580, left: 394, fontFamily: "'Bowlby One SC', cursive", color: 'white' }}>Scroll Down</Typography>

                </ParallaxLayer>

                <ParallaxLayer
                    factor={2}
                    config={{ mass: 1, tension: 180, friction: 12 }}
                    horizontal
                    offset={1}
                    speed={2}
                    onClick={() => parallax.current.scrollTo(2.5)}
                    style={{ zIndex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'pink' }}>
                    <Typography variant='h1' style={{ color: "black", fontSize: '6.7rem', position: 'absolute', top: 1550, left: 80, fontFamily: "'Bowlby One SC', cursive", color: 'white' }}>A Ruby Scraping Tool</Typography>
                </ParallaxLayer>


                <ParallaxLayer horizontal factor={2} offset={1.5} speed={1} style={{ backgroundColor: '#FFEF78' }}>


                    <Typography variant='h1' style={{ color: "black", fontSize: '4.2rem', position: 'absolute', top: 2350, left: 150, fontFamily: "'Bowlby One SC', cursive", color: 'black' }}>Enter URL with leading 'https://' </Typography>
                    <Typography variant='h1' style={{ color: "black", fontSize: '2.7rem', position: 'absolute', top: 2790, left: 440, fontFamily: "'Bowlby One SC', cursive", color: 'black' }}>Scroll to the next page</Typography>
                    <form onSubmit={submitForm} style={{ zIndex: 2000, position: 'absolute', top: 2500, left: 350 }}>
                        <TextField variant="outlined" placeholder="Website.." defaultValue="Website.." value={website} onChange={(e) => setWebsite(e.target.value)} sx={{ width: '40vw', color: 'black', border: 'none', borderColor: 'transparent' }} />
                        <Button variant="outlined" type="submit" sx={{ marginLeft: '.4vw', bgcolor: 'white', height: '57px', width: '200px' }}>Submit</Button>
                    </form>

                </ParallaxLayer>

                <ParallaxLayer horizontal factor={1.75} offset={2.5} speed={1} style={{ backgroundColor: 'black', padding: '10vw', overflow: 'scroll' }}>

                    <div style={{}}>
                    <Typography variant='h1' style={{ marginRight: '10vw', color: "black", fontSize: '1.7rem', position: 'absolute', top: 3750, left: 80, fontFamily: "'Bowlby One SC', cursive", color: 'white' }}>URL: {websiteData.url}  <br /> 
                    Title:  {websiteData.title} <br /> Meta Description: {websiteData.meta_description} <br /> Header: {websiteData.header !== "" ? hi() : "No Header"} <br /> H1: {websiteData.header1 !== "" ? websiteData.header1 : "No H1"}  <br /> H2: {websiteData.header2 !== "" ? websiteData.header2 : "No H2"}  <br /> H3: {websiteData.header3 !== "" ? websiteData.header3 : "No H3"}  <br /> H4: {websiteData.header4 !== "" ? websiteData.header4 : "No H4"}  <br /> H5: {websiteData.header5 !== "" ? websiteData.header5 : "No H5"}  <br /> H6: {websiteData.header6 !== "" ? websiteData.header6 : "No H6"}  <br /> Twitter Content: {websiteData.twitter_content !== null ? websiteData.twitter_content : "No Twitter Content"} </Typography>
                    </div>
                  

                </ParallaxLayer>
            </Parallax>

        </>
    )
}

export default Landing