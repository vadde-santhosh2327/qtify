import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom"

const FirstPage = () => {
    const [api, setApi] = useState([]);
    const [api1, setApi1] = useState([]);
    const [api2, setApi2] = useState([]);
    let navigate = useNavigate();
    let [search, setSearch] = useState("");
    let [bar, setBar] = useState([]);
    let change = (e) => {
        setSearch(e.target.value);

        fetch('https://qtify-backend-labs.crio.do/albums/top').then(response => response.json()).then(result => setBar(result))
    };
    // console.log(search);



    useEffect(() => {
        fetch('https://qtify-backend-labs.crio.do/albums/top')
            .then(response => response.json())
            .then(result => setApi(result))
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        fetch('https://qtify-backend-labs.crio.do/albums/new')
            .then(response => response.json())
            .then(result => setApi1(result))
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        fetch('https://qtify-backend-labs.crio.do/songs')
            .then(response => response.json())
            .then(result => setApi2(result))
            .catch(error => console.log(error));
    }, []);

    return (
        <>

            <div id='navbar'>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#34c94b' }}>
                    <a style={{ marginLeft: '100px' }} className="navbar-brand" href="#">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAkCAYAAADSO4eRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgB5VnhedowED2c/i9NBsCZoDBBnAlCJ4g7QekEkAmaTICZIM0EOBNAJkATBBZI3HdwIoeQwRhIoHnfd0jySSf7dHc6iQoVQBU4OTmJsiy74CbKUFiTSqXyBBq+vLykE4COGJVVTOigHgTBNaoxN2k9ktfX1xvoxNARwqsMtgQooY1qy8OeCDFC8uP2+fn5Nx0ZlpQBPYRQRJ/Uh8ItUtADqn/dVWfrQVGHq7RBoWIZWMnlMVnJgjJcRUABBvQTH5RSAWB87CjlqBQyV4bHInr4kNamQZHlQBl/QE15xAppHFVwPT097YIyoYS2BMtQ8rp0BJhaBlYzEquYusZ4PD6nLcFBGNYxsC4j7pLSASPgH+QQbfsAyrikHYDdguONbXMsoQNHwD6Ol46knewy2LElQAkp11FGbIF0wIB3BLFtwJR7tGMgM71Rk0V0wAiwYhdSn+zJp4ckSRossE57BuaIQV2hcJOxX+wADpxnZ2csKISFcHI1zJlsmmRJ01g3cCFBOQKfcxVWBgfU77QF5F1jUMJyPfyu8C3Y0g0Vhdr+XGq5LwLqZ8sYuSuAse08ubQFZC7G2MNrqncag+43tYxgBU/vMCEK3nojTz/mDRwXiKkEWIaYOVPV4VXpLSGsunzn3RqwnB8+61mFVcrQk7XVi7DJc1Dkg5hRfe9V/5DKgbPWrtBXzcCH2XkNzy1tDeuCk02VYPFlXQflpxYNOxl4CYoBzT6e3YjPJgntCZDdQdFZ06102h8U6BOr+kLgktW5U/xrKgnJdWrqUYOfaXcQN4pUXjR1H2nrfvM+vjG58lYE0EwG9FVg8gms6sBVRGaOMvIQqT4jG7SdD/dhJPxb9azuzDmW59OjSBHL0AKWtluxDiNNVkyNysHQookbKrYtTjz99NhUPY9sRRRjrYnvagopY25+nqClJ7f4RiUA2Xw41C7HOcp5Xh6jxg1lrO1nZJw9Y+nxOs9ZWmRWhqHdIveuFKsxpHeGLGAqzaZizTNvq3BWxq7PI/qOdAFQxh19DB6k1G5sLePRdgpwcdshv0Lsixv7YEU8mJscm22OvB5S/IQ+BqmqX8oOVXd50zwDColxluDj9hXOE6y9R1ESgz8utIJAiZ5F8pCqFoyxLcgzuCe5Ap+v/XofebHDC5TJ+YhmSjCKnVJRQEhLbU19D/+X4se0BTC+o2TVPPyRu7UqXj+PJ3y7xY7UNy30LbKbJPQWA3hPv1YThPT234rZZ/a5A6RShqAr59kUa5XhyTKTbHYi5PODTcUZPVnZDpWHUfWIdovUI/uRygAfmWQFQSWR+bPJmuKPyrqJ08ci1PwibjIFLCRGwRe8e8sVZL93t99SSVwOHlR9WPZ0+64QC2Ha6TWhY3lH8V/O3pAtHtqa9JmhYg6jSp8N2ezOog8afHoX8exQoyznonjttd9/glTKJ9Bt3i7yDwI32xLUo15uAAAAAElFTkSuQmCC"
                            alt="Qtify Logo"
                            height="50"
                            width="80"
                        />
                    </a>
                    {/* Navbar and Search Bar */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mr-auto"></div>
                        <form className="form-inline mx-auto">
                            <input style={{ width: '400px', height: '50px', border: '1px solid' }}
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search a album of your choice"
                                aria-label="Search"
                                onChange={change}
                            />
                        </form>
                        <ul className="navbar-nav" style={{ marginRight: '100px' }}>
                            <li className="nav-item">
                                <button style={{ backgroundColor: 'black', borderRadius: '12px', width: '120px' }}>
                                    <Link to="/feedback" style={{textDecoration:"none"}}><a style={{ color: '#34c94b'}} className="nav-link" href="">Feedback</a></Link>
                                </button>
                            </li>
                            <li>
                            <button style={{ backgroundColor: 'black', borderRadius: '12px', width: '120px',marginLeft:"5px" }}>
                                    <Link to="/Login" style={{textDecoration:"none"}}><a style={{ color: '#34c94b'}} className="nav-link" href="">Login</a></Link>
                                </button>
                                
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
            <div className='searchbar' style={{ width: '400px', height: '200px', position: "absolute", zIndex: '1', left: '550px', top: '70px', color: 'white' }}>
                {search && bar.filter(data => data.title.toLowerCase().includes(search)).map((data) => {
                    return (
                        <div onClick={() => navigate(`/Details`, { state: { data } })} style={{ cursor: 'pointer', display: "flex", justifyContent: "space-between", backgroundColor: "#34c94b", color: 'black', alignItems: 'center', padding: '10px' }}>
                            <img style={{ width: "70px", height: "70px", borderRadius: '10px' }} src={data.image} alt='img'></img>
                            <h4>{data.title}</h4>
                            <h4>{data.follows}</h4>
                        </div>
                    )
                })}
            </div>

            <div id='imagediv'>
                <div id="text">
                    <h1 style={{ color: 'white', display: 'inline-block', marginTop: '100px' }}>
                        100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
                    </h1>
                    <img style={{ marginBottom: '70px' }} src="https://qtify-venkykumar.netlify.app/static/media/headphone.66e109c97f55e2a35a02d810fa2b6650.svg" alt="" />
                </div>

                {/* Carousel Section */}
                <span style={{ color: 'white', marginLeft: '50px' }}> <b>Top Albums</b> </span> <br /><br />
                <Carousel>
                    <div id="carts1">

                        {api.slice(0, 8).map((data, index) => {
                            return (
                                <>
                                    <div id='carddiv' key={index} >
                                        <Card onClick={() => navigate('/Details', { state: { data } })} style={{ backgroundColor: '#34c94b' }} >
                                            <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                            <Card.Body>

                                                <Card.Text >
                                                    <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.follows}</button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card><br />
                                        <Card.Title style={{ fontSize: '15px', color: 'white' }}>{data.title}</Card.Title>
                                    </div>
                                </>

                            );
                        })}

                    </div>

                    <div id="carts2">
                        {api.slice(8, 13).map((data) => {
                            return (
                                <>
                                    <div id='carddiv'>
                                        <Card onClick={() => navigate(`/Details`, { state: { data } })} style={{ backgroundColor: '#34c94b' }}>
                                            <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                            <Card.Body>

                                                <Card.Text>
                                                    <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.follows}</button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card><br />
                                        <Card.Title style={{ fontSize: '15px', color: 'white' }}>{data.title}</Card.Title>
                                    </div>
                                </>

                            );
                        })}

                    </div>
                </Carousel>

                <div id="secondrow">
                    <span style={{ color: 'white', marginLeft: '50px' }}> <b>New Albums</b> </span> <br /><br />
                    <Carousel>
                        <div id="carts1">

                            {api1.slice(0, 8).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ cursor: 'pointer', display: "flex", justifyContent: "space-between", backgroundColor: "#34c94b", color: 'black', alignItems: 'center', padding: '10px' }} onClick={() => navigate(`/Details`, { state: { data } })}>
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.follows}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>

                        <div id="carts2">
                            {api1.slice(8, 13).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv'>
                                            <Card style={{ backgroundColor: '#34c94b' }}>
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text>
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.follows}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>
                    </Carousel>
                </div>

                <hr style={{ border: '2px solid ', color: '#34c94b' }} /> <br />

                <h2 style={{ color: '#34c94b', marginLeft: '60px' }}>Songs</h2> <br />

                <div id="thirdrow">

                    <Carousel>
                        <div id="carts1">

                            {api2.slice(0, 8).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ backgroundColor: '#34c94b',cursor: 'pointer', display: "flex", justifyContent: "space-between", color: 'black', alignItems: 'center', padding: '10px' }} onClick={() => navigate(`/Details`, { state: { data } })}>
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.likes}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white', width: '100px' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>
                        <div id="carts2">

                            {api2.slice(9, 17).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ backgroundColor: '#34c94b' }} >
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.likes}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white', width: '100px' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>
                        <div id="carts2">

                            {api2.slice(18, 26).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ backgroundColor: '#34c94b' }} >
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.likes}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white', width: '100px' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>
                        <div id="carts2">

                            {api2.slice(27, 35).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ backgroundColor: '#34c94b' }} >
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.likes}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white', width: '100px' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>
                        <div id="carts2">

                            {api2.slice(36, 44).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ backgroundColor: '#34c94b' }} >
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.likes}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white', width: '100px' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>
                        <div id="carts2">

                            {api2.slice(45, 53).map((data) => {
                                return (
                                    <>
                                        <div id='carddiv' >
                                            <Card style={{ backgroundColor: '#34c94b' }} >
                                                <Card.Img style={{ width: '150px', height: '170px' }} variant="top" src={data.image} />
                                                <Card.Body>

                                                    <Card.Text >
                                                        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '12px' }}>{data.likes}</button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card><br />
                                            <Card.Title style={{ fontSize: '15px', color: 'white', width: '100px' }}>{data.title}</Card.Title>
                                        </div>
                                    </>

                                );
                            })}

                        </div>

                    </Carousel>
                </div>
                <hr style={{ border: '2px solid ', color: '#34c94b' }} /> <br />
                <div id="faq" style={{ textAlign: 'center', paddingBottom: '50px' }}>
                    <h1 style={{ color: '#34c94b' }}>FAQs</h1> <br />
                    <select name="" id="" style={{ width: '1000px', borderRadius: '10px', height: '60px', color: 'white', backgroundColor: 'black' }}>
                        <option value="">Is QTify free to use?</option>
                        <option value="">Sorry, unfortunately we don't provide service to download any songs.</option>
                    </select>
                    <br /><br />
                    <select name="" id="" style={{ width: '1000px', borderRadius: '10px', height: '60px', color: 'white', backgroundColor: 'black' }}>
                        <option value="">Can I download and listen to songs offline?</option>
                        <option value="">Sorry, unfortunately we don't provide service to download any songs.</option>
                    </select>

                </div>





            </div>
            <div id='foot' style={{ backgroundColor: '#34c94b', display: 'flex', justifyContent: 'space-around', color: 'white' }}>
                <div id="left" style={{ marginTop: '50px' }}>
                    <h3>Qtify</h3>
                    <p>Qtify is a digital music service that gives you access to millions of songs and other content from <br /> creators all over the world.</p>

                </div>
                <div id="right" style={{ marginTop: '50px', marginRight: '200px' }}>
                    <h3>
                        Contact
                    </h3>
                    <p>Bengaluru, India</p>
                    <p>qtify@gmail.com</p>
                    <p>+91 7789874574254</p>
                    <p>02145-54214525</p>

                </div>
            </div>

        </>
    );
}

export default FirstPage;