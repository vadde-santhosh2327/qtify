
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    let location = useLocation();
    const [songs, setSongs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(5); // Number of songs per page

    useEffect(() => {
        fetch('https://qtify-backend-labs.crio.do/songs')
            .then(response => response.json())
            .then(result => setSongs(result))
            .catch(err => console.log(err));
    }, []);

    const formatDuration = (durationInMs) => {
        const minutes = Math.floor(durationInMs / 60000);
        const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
        return `${ minutes }:${ seconds < 10 ? '0' : '' }${ seconds }`;
    };

    // Pagination logic
    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {/* Navbar */}
            <div id="navbar">
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
                    <ul className="navbar-nav" style={{ marginRight: '100px' }}>
                        <li className="nav-item">
                            <button style={{ backgroundColor: 'black', borderRadius: '12px', width: '120px', marginLeft: '1100px' }}>
                                <a style={{ color: '#34c94b' }} className="nav-link" href="#">Feedback</a>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div id="secondmain" style={{ backgroundColor: '#121212', height: '100vh', color: 'white', display: 'flex', justifyContent: 'space-around' }}>
                <img style={{ width: '400px', height: '400px', marginTop: '120px', borderRadius: '12px' }} src={location.state.data.image} alt="" />
                <div style={{ marginTop: '200px', width: '600px', marginLeft: '-130px' }}>
                    <h1 style={{ fontSize: '60px' }}>{location.state.data.title}</h1>
                    <p style={{ fontSize: '20px' }}>{location.state.data.description}</p>
                    <b>
                        <p style={{ display: 'inline-block' }}>{location.state.data.follows} Follows</p> &nbsp; &nbsp;
                        <span>35 Songs</span> &nbsp;&nbsp;
                        <span>27 min 04 sec </span>
                    </b> <br />
                    <button className='btn-5'><i className="fa-solid fa-shuffle"></i> &nbsp; Shuffle</button> &nbsp;&nbsp;
                    <button className='btn-5'> <i className="fa-brands fa-spotify"></i> &nbsp; Add to Library</button>
                </div>
            </div>

            <div style={{ textAlign: 'center', backgroundColor: '#121212', paddingBottom: '20px' }}>
                {[...Array(Math.ceil(songs.length / songsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        style={{
                            padding: '5px 10px',
                            margin: '5px',
                            borderRadius: '5px',
                            backgroundColor: currentPage === number + 1 ? '#34c94b' : '#121212',
                            color: currentPage === number + 1 ? '#000' : '#fff'
                        }}>
                        {number + 1}
                    </button>
                ))}
            </div>

            {/* Songs Table with Pagination */}
            <div id="songs" style={{ backgroundColor: '#121212', color: 'white', padding: '0px 50px 50px 50px' }}>
                <table style={{ border: 'none', width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '2px solid black', padding: '10px', backgroundColor: '#34c94b' }}>Title</th>
                            <th style={{ border: '2px solid black', padding: '10px', backgroundColor: '#34c94b' }}>Artists</th>
                            <th style={{ border: '2px solid black', padding: '10px', backgroundColor: '#34c94b' }}>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSongs.map((song) => (
                            <tr key={song.id}>
                                <td style={{ border: '2px solid black', padding: '10px' }}>{song.title}</td>
                                <td style={{ border: '2px solid black', padding: '10px' }}>{song.artists.join(', ')}</td>
                                <td style={{ border: '2px solid black', padding: '10px' }}>{formatDuration(song.durationInMs)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}

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
};

export default Details;