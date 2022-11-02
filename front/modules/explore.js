import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import '../css/explore.css'
import '../css/hero.scss'
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import { useNavigate } from "react-router";
import { useUserAuth } from "./UserAuthContext";

export default function Explore(props) {
    const { id } = useParams()


    const [wait, waitset] = useState(false)
    const [data, setdata] = React.useState()
    const getData = async () => {
        const res = await axios.get(`http://localhost:3001/places/${id}`)

        setdata(res.data)

    }


    useEffect(() => {

        getData()
    }, [])
    useEffect(() => {

        if (data) {
            waitset(true)
            console.log(data.places)
        }
    }, [data])





    const [input, setInput] = React.useState({
        uname: '',
        review: ''
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setInput(previnput => {
            return {
                ...previnput,
                [name]: value
            }
        })
    }
    function handleClick(event) {
        event.preventDefault();
        alert("submitted");
        const newtour = {

            uname: input.uname,
            review: input.review

        }
        axios.post(`http://localhost:3001/mainplaces/${id}`, (newtour))
    }
    const { logOut, user } = useUserAuth();


    return (
        <div>






            <div >
                {wait &&
                    <>

                        <div>
                            <div className='hero1' style={{
                                backgroundImage: `url(${data.image})`, backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '500px'
                            }}>
                                <div className='content'>
                                    <h1 style={{ color: "white" }} class="display-3">{data.pname}</h1>
                                    <h4 style={{ color: "white" }} >{data.location}</h4>
                                    <p style={{ color: "white" }} className='search-text'>{data.speciality}</p>

                                </div>

                            </div>
                        </div>
                        <div >

                            <div class="container">
                                <div className="placeslist">
                                    <div class="row">
                                        {data.places.map(m => (

                                            <div class="col-xs-12 col-sm-6 col-md-2" style={{ paddingBottom: "2%" }}>
                                                <div class="image-flip" >
                                                    <div class="mainflip flip-0">
                                                        <div class="frontside">
                                                            <div class="card">
                                                                <div class="card-body text-center">
                                                                    <p><img src={m.limage} alt="card image" /></p>
                                                                    <small class="card-title">{m.lname}</small>


                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="backside">
                                                            <div class="card">
                                                                <div class="card-body text-center mt-4">
                                                                    <h4 class="card-title">{m.lname}</h4>
                                                                    <p class="card-text" style={{color:"black"}}>{m.special}</p>
                                                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-secondary btn-sm"><i class="fa fa-info"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                        )}
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div  style={{ padding: '50px' }}>
                {wait && <iframe style={{ width: "100%", height: '600px' }} src={data.map} ></iframe>}
            </div>

            <div style={{paddingLeft:"10%"}}><h4>you can see previous visitors reviews</h4><h3 style={{color:'gray'}}>{user.email}</h3> </div>


                        <div class="row" style={{paddingLeft:'15%',marginBottom:"5%"}}>

                            
                            <div class="col-8" style={{ background: 'none', borderRadius: '20px' }}>
                                <h1 style={{ color: 'white' }}>Reviews</h1>
                                {data.reviews.map(m => (
                                    <div style={{ marginLeft: '5%' }}>
                                        <table>
                                            <tr>
                                            <td><h4 style={{ color: 'gray' }}>{m.uname}</h4></td>
                                            <td>:</td>
                                            <td><small style={{ color: 'white' }}>{m.review}</small></td>

                                            </tr>
                                            
                                            </table>

                                        
                                        
                                        
                                    </div>
                                ))}


                            </div>
                            <div class="col-4" >
                                <div><h1 style={{ color: 'white' }}>ADD your Review</h1></div>
                                <form class='form col-md-5'>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input name="uname" onChange={handleChange} type="text" class="form-control" placeholder="Enter name" />



                                        <label for="exampleInputEmail1">Describe your trip</label>
                                        <input name="review" onChange={handleChange} type="text" class="form-control" placeholder="Enter review" />

                                    </div>

                                    <button style={{ marginTop: '2%' }} onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>


                                </form>
                            </div>


                        </div>



                    </>}

            </div>
            <div>
            <div className='hero1' style={{
                                backgroundImage: "url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '400px'

                            }}>
                                <div className='content'>
                                <Link className="button-92" to={`/hotel/${id}`}>see hotels</Link>
                                    

                                </div>
                                </div>
                
                
            </div>
            <div>
                <section id="contact">
                    <div className='footer' style={{backgroundColor:"black",height:"10px"}}>
                        <div className='social'>
                            <FaFacebook  className='icon'></FaFacebook>
                            <FaInstagram className='icon' />
                            <FaTwitter className='icon' />
                            <FaPinterest className='icon' />
                        </div>

                    </div>

                </section>

            </div>


        </div>



    )
}









