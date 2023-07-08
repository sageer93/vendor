import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import amexCard from '../images/source/amex-card.png';
import payPal from '../images/source/paypal.png';
import discoverCard from '../images/source/discover-card.png';
import visaCard from '../images/source/visa-card.png';
import masterCard from '../images/source/master-card.png';
import applyPay from '../images/source/apple-pay.png';
import { Box, Typography } from '@mui/material';

const Footer =()=>{
    return(
        <Box component={"section"} className="footerContainer">
                  <Typography variant='h4' className="title">Subscribe and get 20% discount.</Typography>
                <Box component={"form"} className="footerSubcripe">
                    <Box sx={{width:""}}><input type="email"
                        placeholder="Your email address"/><button
                        type="submit">Subscribe</button></Box>
                </Box>
          <div className="row mt60">
            <div className="col-sm-8 col-md-5 col-lg-3 col-xl-3">
              <div className="footer_social_widget">
                <h4 className="titles">Follow us</h4>
                <div className="social_icon_list mt30">
                  <ul className="mb20">
                    <li className="list-inline-item"><a href="/"><FacebookIcon/></a>
                    </li>
                    <li className="list-inline-item"><a href="/"><TwitterIcon/></a></li>
                    <li className="list-inline-item"><a href="/"><InstagramIcon/></a>
                    </li>
                    <li className="list-inline-item"><a href="/"><LinkedInIcon/></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_mobile_app_widget mb25">
                <h4 className="titles mb10">Mobile Apps</h4>
                <div className="mobile_app_list">
                  <ul className="mb0">
                    <li><a href="/"><span className="flaticon-apple"></span>iOS App</a></li>
                    <li><a href="/"><span className="flaticon-android"></span>Android App</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer_acceped_card_widget">
                <h4 className="titles mb20">We accept</h4>
                <div className="acceped_card_list">
                  <ul className="d-flex mb-0">
                    <li className="me-2"><a href="/"><img src={visaCard} alt="visa-card"/></a></li>
                    <li className="me-2"><a href="/"><img src={masterCard} alt="master-card"/></a></li>
                    <li className="me-2"><a href="/"><img src={applyPay} alt="apple-pay"/></a></li>
                    <li className="me-2"><a href="/"><img src={discoverCard} alt="discover-card"/></a>
                    </li>
                    <li className="me-2"><a href="/"><img src={payPal} alt="paypal"/></a></li>
                    <li><a href="/"><img src={amexCard} alt="amex-card"/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer_qlink_widget">
                <h4 className="titles mb10">About Zenmart</h4>
                <ul className="list-unstyled">
                  <li><a href="/">Track Your Order</a></li>
                  <li><a href="/">Product Guides</a></li>
                  <li><a href="/">Wishlists</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">Store Locator</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer_qlink_widget">
                <h4 className="titles mb10">Customer Support</h4>
                <ul className="list-unstyled">
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">Help Centre</a></li>
                  <li><a href="/">Returns & Exchanges</a></li>
                  <li><a href="/">Best Buy Financing</a></li>
                  <li><a href="/">Best Buy Gift Card</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer_qlink_widget">
                <h4 className="titles mb10 footer_services">Services</h4>
                <ul className="list-unstyled">
                  <li><a href="/">Geek Squad</a></li>
                  <li><a href="/">In-Home Advisor</a></li>
                  <li><a href="/">Trade-In Program</a></li>
                  <li><a href="/">Electronics Recycling</a></li>
                  <li><a href="/">Best Buy Health</a></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-5 col-lg-3 col-xl-3">
              <div className="footer_contact_widget">
                <h4 className="titles mb10 footer_contact">Contact Us</h4>
                <div className="footer_contact_iconbox d-flex mb-4">
                  <div className="icon"><span className="flaticon-delivery-truck"></span></div>
                  <div className="details ms-4">
                    <h5 className="title">Address</h5><a href="/">1/56 D, Lalita Park, Laxmi <br/> Nagar, Delhi, 1100092,
                      India</a>
                  </div>
                </div>
                <div className="footer_contact_iconbox d-flex mb-4">
                  <div className="icon"><span className="flaticon-phone-call"></span></div>
                  <div className="details ms-4">
                    <h5 className="title">Monday-Friday: 08am-9pm</h5><a href="/">+(1) 123 456 7890</a>
                  </div>
                </div>
                <div className="footer_contact_iconbox d-flex">
                  <div className="icon"><span className="flaticon-email"></span></div>
                  <div className="details ms-4">
                    <h5 className="title">Need help with your order?</h5><a href="/">support@zeomart.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="container bdrt1 pt20 pb20">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-widget text-center text-lg-start d-block d-lg-flex mb15-md">
                <p className="me-4">© 2023 Richesm. All Rights Reserved</p>
                <p><a href="/">Privacy</a>·<a href="/">Terms</a>·<a href="/">Sitemap</a></p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_bottom_right_widgets text-center text-lg-end">
                <ul className="mb0">
                  <li className="list-inline-item mb20-340"><select className="selectpicker show-tick">
                      <option>Currency : USD</option>
                      <option>Euro</option>
                      <option>Pound</option>
                    </select></li>
                  <li className="list-inline-item"><select className="selectpicker show-tick">
                      <option>Language: English</option>
                      <option>Frenc</option>
                      <option>Italian</option>
                      <option>Spanish</option>
                      <option>Turkey</option>
                    </select></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
    )
}

export default Footer