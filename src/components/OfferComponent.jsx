import React from 'react';
import {Box,Grid,Typography} from '@mui/material';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item5 from '../images/item5.jpg';
import item6 from '../images/item6.jpg';
import item7 from '../images/item7.jpg';
import item8 from '../images/item8.jpg';
import item9 from '../images/item9.jpg';
import item10 from '../images/item10.jpg';
import clothItem1 from '../images/clothItem1.jpg';
import clothItem2 from '../images/clothItem2.jpg';
import clothItem3 from '../images/clothItem3.jpg';
import clothItem4 from '../images/clothItem5.jpg';

const OfferComponent = ()=>{
    return(
        <Grid container gap={3} sx={{marginTop:"-100px"}} className='offerContainer'>
            <Grid item xs={12} sm={6} md={2.7} sx={{width:"100%",height:"70vh",padding:"30px 0"}} className='items'>
                <Grid container gap={2} sx={{justifyContent:"center"}}>
                    <Grid item xs={10}>
                    <Typography variant='h6' className='offerHeading'>Upgrade your home | Amazon brands & more</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item1} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹549 | Bestselling bedsheets</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item2} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹219 | Home storage & organisation</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item3} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹109 | Indoor lightings</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item5} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹299 | Curtains & more</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ml:3}}><Typography className="showmore">show more</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={2.8} sx={{width:"100%",height:"70vh",padding:"30px 0"}} className='items'>
                <Grid container gap={2} sx={{justifyContent:"center"}}>
                    <Grid item xs={10}>
                    <Typography variant='h6' className='offerHeading'>Up to 70% off | Styles for men</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={clothItem1} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px",height:"5vh"}}>clothing</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={clothItem2} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px",height:"5vh"}}>foot wear</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={clothItem3} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px",height:"5vh"}}>watches</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={clothItem4} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px",height:"5vh"}}>bags & luggage</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ml:3}}><Typography className="showmore">mega fashion days</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={2.8} sx={{width:"100%",height:"70vh",padding:"30px 0"}} className='items'>
            <Grid container gap={2} sx={{justifyContent:"center"}}>
                    <Grid item xs={10}>
                    <Typography variant='h6' className='offerHeading'>Upgrade your home | Amazon brands & more</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item1} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹549 | Bestselling bedsheets</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item2} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹219 | Home storage & organisation</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item3} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹109 | Indoor lightings</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item5} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹299 | Curtains & more</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ml:3}}><Typography className="showmore">show more</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={2.8} sx={{width:"100%",height:"70vh",padding:"30px 0"}} className='items'>
            <Grid container gap={2} sx={{justifyContent:"center"}}>
                    <Grid item xs={10}>
                    <Typography variant='h6' className='offerHeading'>Upgrade your home | Amazon brands & more</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item1} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹549 | Bestselling bedsheets</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item2} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹219 | Home storage & organisation</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item3} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹109 | Indoor lightings</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={item5} style={{width:"100%",objectFit:"cover"}} alt="item" />
                        <Typography sx={{fontSize:"15px"}}>Starting ₹299 | Curtains & more</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ml:3}}><Typography className="showmore">show more</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OfferComponent