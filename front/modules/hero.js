
import React, { useEffect, useState } from "react"
import axios from 'axios'
import '../css/hero.scss'
import { Outlet, Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import '../css/hero.css'

const Hero = () => {
    const [query, setQuery] = React.useState();
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchplaces = async () => {
            const res = await axios.get(`http://localhost:3001/places`)
            setdata(res.data)
        }
        fetchplaces()

    }, [query])

    const datas = data.filter(dat => dat.pname.toLowerCase().includes(query))
    
    
    return (
        <div >
            <div className='hero'>
                <div className='content'>
                    <h1 class="display-3">Find the perfect place</h1>
                    <p className='search-text'> Search the perfect place for your vacation and view the reviews of previous visitors. </p>
                    <div className='search'>

                        <div>
                            <input type='text' onChange={e => setQuery(e.target.value)} placeholder="Type here to Search..." />
                        </div>
                        <div className='radio'>

                            <a href="#search" ><button type='submit'><AiOutlineSearch className='icon' /> </button></a>
                        </div>
                        
                        

                    </div>
                    <div style={{marginTop:'5%'}}>
                            <button className="button-92"> <a class="nav-link" href="#destinations"> See Top Destinations</a></button>
                       

                        </div>
                </div>

            </div>

            <div id="search">

                <section class="wrapper">
                    <div class="container">

                        <div class="row">
                            {datas.map((item) => {
                                return (

                                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4"><div class="card text-white card-has-bg click-col" style={{ backgroundImage: `url(${item.image})` }}>
                                        
                                        <div class="card-img-overlay d-flex flex-column">
                                            <div class="card-body">
                                            <h4 class="card-title mt-0 "><a class="text-white" herf="#">{item.pname}</a></h4>
                                                <small class="card-meta mb-2"></small>
                                               
                                                <small><i class="far fa-clock"></i> ALL TIME</small>
                                            </div>
                                            <div class="card-footer">
                                                <div class="media">

                                                    <div class="media-body">
                                                        <h6 class="my-0 text-white d-block">Click here to find places</h6>
                                                        <Link to={`/explore/${item._id}`}><buttton class="btn btn-primary" >explore</buttton></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                                
                        })}
                            </div>
                            
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Hero