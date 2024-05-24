import React from "react";
import Headimg from "./Headimg";
export default function Blog(){
    return(
        <>
          <Headimg title="BLOG"></Headimg>
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="conatainer">
                        <div className="card border-0 mb-3 overflow-hidden">
                            <img src="https://themewagon.github.io/constructioncompany/assets/img/blog/single_blog_1.png" className="card-img-top" alt="..."/>
                            <div className="card-body pb-4 bg-body-tertiary position-relative shadow-lg z-1">
                                <div className="blog-date bgcolor p-4 rounded-2 ms-3 text-white fs-bold fs-5">15<br/> Jan</div>
                                <h5 className="mt-5 card-title">Google inks pact for new 35-storey office</h5>
                                <p className="card-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <p className="card-text"><small className="text-body-secondary"><i className="fa fa-user mx-2"></i>Travel, Lifestyle | <i class="fa-solid fa-comments mx-2"></i>03 Comments</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="conatainer">
                           <div className="row">
                            <div className="bg-body-tertiary p-3">
                                <input type="text" className="p-3 w-75 float-start" placeholder="Serarch Keyword"></input>
                                    <div className="float-start p-2 bgcolor rounded-1 "><button className=" border-0 bgcolor p-2 w-100"><i class="float-start bgcolor text-white fs-4 fa-solid fa-magnifying-glass"></i></button></div>
                                <br/>
                                <button type="button" className="btn mt-3 p-3 btn-info w-100">Serarch</button>
                            </div>
                            <div className="mt-4 p-2 text-dark blog-list bg-body-tertiary">
                                <h5 className="px-4 pt-3">Category</h5>
                                <ul type="none" className="">
                                    <li className="nav-item"><a href="" className="nav-link">Resaurant food(37)</a></li>
                                    <li className="nav-item"><a href="" className="">Travel news(10)</a></li>
                                    <li className="nav-item"><a href="" className="">Modern technology(03)</a></li>
                                    <li className="nav-item"><a href="" className="">MProduct(11)</a></li>
                                    <li className="nav-item"><a href="" className="">Inspiration21</a></li>
                                    <li className="nav-item"><a href="" className="">Health Care (21)09 </a></li>
                                </ul>
                            </div> 
                            <div className="mt-4 p-2 text-dark blog-list bg-body-tertiary">
                                <h5 className="px-4 pt-3">Recent Post</h5>
                                <div className="m-4">
                                <div class="overflow-hidden bg-body-tertiary border-0">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        <img src="https://themewagon.github.io/constructioncompany/assets/img/post/post_1.png" class="w-75" alt="..."/>
                                        </div>
                                        <div class="col-md-8">
                                        <div class="p-2 card-body">
                                            <h5 class="card-title">From life was you fish...</h5>
                                            <p class="card-text"><small class="text-body-secondary">January 12, 2019</small></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}