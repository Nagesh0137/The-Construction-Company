import React, { useEffect, useState } from "react";
import Services from "./Services";
import About from "./About";
import Project from "./Project";
import Footer from "../Footer";
import axios from "axios";
export default function Home(){
    const [data,setdata]=useState();
    const [ourservice,setourservie]=useState()
    const [ourproject,setourproject]=useState()
    useEffect(()=>{
      axios.get('http://localhost:1000/admin/get_slider').then((res)=>{
        setdata(res.data)
    })
    axios.get('http://localhost:1000/admin/our_services').then((res)=>{
        setourservie(res.data)
    })
    axios.get('http://localhost:1000/admin/our_projects').then((res)=>{
        setourproject(res.data)
    })
     },[])
     console.log(ourproject)
    return(
        <>
            <section className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0 overflow-hidden">
                            <div className="backimg d-flex align-items-center">
                                <div className="home-text w-100">
                                     <span className="text-white position-absolute fw-bold z-3 ps-5 text-uppercase">{data && data[0].first_heading}</span>
                                    <p>{data && data[0].main_heading}</p>
                                    <div className="">
                                            <h2>{data && data[0].main_animated_heading}</h2>
                                            <h2>{data && data[0].main_animated_heading}</h2>
                                    </div>
                                    
                                </div>
                                 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* About us */}
            <section>
            <div className="container mt-5">
                <div className="row our-services">
                    <div className="col-12">
                        <h1>OUR SERVICES</h1>
                    </div>
                </div>
                <div className="row mt-5">
                {ourservice && ourservice.map((val, index) => (
                    <div key={index} className="col-12 col-md-4">
                        <div className="card overflow-hidden border-0 rounded-0">
                        <img src={`http://localhost:1000/uploads/${val.our_service_image}`} className="card-img-top rounded-0" alt="Service"/>
                        <div className="card-body">
                            <h5 className="card-title">{val.our_service_heading}</h5>
                            <div className="d-flex align-items-center mt-4">
                            <p className="mt-3">Read More</p>
                            <a href={val.our_service_link} className="btn">
                                <i className="fa-solid fa-plus p-2 mb-0"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <img src="https://themewagon.github.io/constructioncompany/assets/img/icon/services_icon1.png" className="w-100" alt="Service Icon" />
                    </div>
                    ))}    
                </div>
            </div>
        </section> 

                     {/* about us who i am */}
                <section className=''>
                    <div className='container-fluid mt-5 pt-5'>
                        <div className='row'>
                            <div className='co-12 col-md-6'>
                                <div className='About-us p-4'>
                                    <h1>WHO WE ARE</h1>
                                    <b>Mollit anim laborum duis au dolor in voluptcate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</b> <br/><br/>
                                    <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.</p><br/><br/>
                                    <button type='button' className='btn py-3 px-5 bgcolor text-white'>READ MORE</button>
                                </div>
                            </div>
                            <div className='co-12 col-md-6'>
                                <div className='position-relative'>
                                    <img src="https://themewagon.github.io/constructioncompany/assets/img/gallery/safe_in.png" className='w-100 float-start' alt=""/>
                                        <div className='Since-card '>
                                            <h1>1994</h1>
                                            <p>Since</p>
                                        </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        {/* OUR PROJECT  */}
        <section>
            <div className="container pb-5 mb-5">
                <div className="row Project p-5 mt-5">
                    <div className="col-12 col-md-6">
                        <div className="">
                        <h1 className="">OUR PROJECTS</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                       <div className="project-nav">
                            <ul  className="d-flex justify-content-center pt-5 ps-md-5">
                                <li className="nav-item">
                                    <a className="active" >show all</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" >Intorior</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" >Recent</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" >Big building</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" >Park</a>
                                </li>
                            </ul>
                       </div>
                    </div>
                  </div>  
                    {/* project 1nd row */}
                    <div className="row">
                        {ourproject && ourproject.map((val,index)=>(
                             <div className="col-12 col-md-4">
                             <div class="mt-5 project-card border-0">
                                 <img src={`http://localhost:1000/uploads/${val.project_image}`}class="card-img-top h-100 w-100" alt="..."/>
                                 <div class="card-title bg-body-tertiary p-3">
                                     <div className="w-100 h-100 d-flex justify-content-end"><a href="" className="nav-link"><i className="fa-solid fa-plus project-nav-plus"></i></a></div>
                                     <h2>{val.project_heading}</h2>
                                 </div>
                             </div>
                         </div>
                        ))}
                       
                    </div>
                  </div>                                 
                
         </section>
    
            {/* lets talk */}
            <section>
                <div className="container-fluid m-0 p-0 overflow-hidden">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lets-talk-bgimg py-5 text-white">
                                <div className="container">
                                    <div>
                                        <h2>Lats talk with us</h2>
                                    </div>
                                    <span className="back-text">Lat`s chat</span>
                                    <p className="mt-4">Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.</p>
                                   <a href=""> <button className="btn py-2 px-4 mt-5 bg-white"> Read More</button></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container count-bg-img">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-flex p-4 count-text justify-content-center align-items-center text-center text-white pt-4">
                                            <div>
                                                <h2 className="p-3">34</h2>
                                            </div>
                                            <div>
                                                <h6>MACHINERY</h6>
                                                <h2>Tools</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex p-4 count-text justify-content-center align-items-center text-center text-white pt-4">
                                            <div>
                                                <h2 className="p-3">76</h2>
                                            </div>
                                            <div>
                                                <h6>MACHINERY</h6>
                                                <h2>Tools</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex p-4 count-text justify-content-center align-items-center text-center text-white pt-4">
                                            <div>
                                                <h2 className="p-3">08</h2>
                                            </div>
                                            <div>
                                                <h6>MACHINERY</h6>
                                                <h2>Tools</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* OUR TEAM */}
            <section>
                <div className="container py-5">
                    <div className="row our-team">
                        <div className="col-12">
                            <div className="">
                            <h1 className="ourteam p-5">OUR TEAM</h1>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div class="card border-0 rounded-0 overflow-hidden">
                                <img src="https://themewagon.github.io/constructioncompany/assets/img/team/team1.png" class="card-img-top" alt="..."/>
                                <div class="card-body bg-body-tertiary border border-top-0 position-relative">
                                    <h6 class="card-text text-center">UX Designer</h6>
                                    <h2 class="card-title">Ethan Welch</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div class="card border-0 rounded-0 overflow-hidden">
                                <img src="https://themewagon.github.io/constructioncompany/assets/img/team/team2.png" class="card-img-top" alt="..."/>
                                <div class="card-body bg-body-tertiary border border-top-0 position-relative">
                                    <h6 class="card-text text-center">UX Designer</h6>
                                    <h2 class="card-title">Ethan Welch</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div class="card border-0 rounded-0 overflow-hidden">
                                <img src="https://themewagon.github.io/constructioncompany/assets/img/team/team3.png" class="card-img-top" alt="..."/>
                                <div class="card-body bg-body-tertiary border border-top-0 position-relative">
                                    <h6 class="card-text text-center">UX Designer</h6>
                                    <h2 class="card-title">Ethan Welch</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}