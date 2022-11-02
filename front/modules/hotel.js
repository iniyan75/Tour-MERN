import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import '../css/explore.css'
import axios from 'axios'
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Hotel() {
    const { id } = useParams()


    const [wait, waitset] = useState(false)
    const [data, setdata] = React.useState()
    const getData = async () => {
        const res = await axios.get(`http://localhost:3001/places/${id}`)

        setdata(res.data)


    }

    console.log(data)


    useEffect(() => {

        getData()
    }, [])
    useEffect(() => {

        if (data) {
            waitset(true)
            console.log(data.places)
        }
    }, [data])
    return (
        <>
            {wait &&
                <div>
                    <div>
                        <div>
                            <div className='hero1' style={{
                                backgroundImage: "url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '300px'

                            }}>
                                <div className='content'>
                                    <h1 style={{ color: "white " }} class="display-3">See hotels in {data.pname}</h1>
                                    <h4 style={{ color: "white" }} >{data.location}</h4>
                                    <p style={{ color: "white" }} className='search-text'>{data.speciality}</p>

                                </div>

                                <div class="container py-4">
                                    {data.hotels.map(m => (
                                        <article class="postcard dark blue">
                                            <a class="postcard__img_link" href="#">
                                                <img class="postcard__img" src={m.himage} alt="Image Title" />
                                            </a>
                                            <div class="postcard__text">
                                                <h1 class="postcard__title blue"><a href="#">{m.hname}</a></h1>
                                                <div class="postcard__subtitle small">
                                                    <time datetime="2020-05-25 12:00:00">
                                                        <i class="fas fa-calendar-alt mr-2"></i>ALL TIME
                                                    </time>
                                                </div>
                                                <div class="postcard__bar"></div>
                                                <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                                <ul class="postcard__tagbox">
                                                    <h2>₹{m.hprice}</h2>
                                                </ul>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>






                </div>}




        </>
    )
}