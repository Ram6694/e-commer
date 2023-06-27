import React from 'react';
import Product from '../Product';
import Data from '../Data';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-5'>

                    <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel' data-bs-interval='3000'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-MAY-EasyBreezyOversizedTees-common-1686725700.jpg' className='d-block w-100' alt='IPhone' height='500px'  />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-June-Women-ShortTops-1687758007.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/air-1x1-banner-01-1687158858.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-utility-cargos-common-1687619518.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-MAY-EasyBreezyOversizedTees-common-1686725700.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-June-Women-ShortTops-1687758007.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>


                    <div id='idea' className='row my-4' style={{ paddingLeft: "150px" }}>


                        <div id='idea1' class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg" alt="New Arrivalsimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">New Arrivals</p>
                            </div>
                        </div>


                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg" alt="Bestsellersimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Best sellers</p>
                            </div>
                        </div>

                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg" alt="Official Collaborationsimage" />
                            <div class="card-body text-center " style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Official Collaborations</p>
                            </div>
                        </div>


                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg" alt="Customizationimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Customization</p>
                            </div>
                        </div>


                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker-1684474101.gif" alt="Combosimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Combos</p>
                            </div>
                        </div>


                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg" alt="Vote for Designsimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Vote for Designs</p>
                            </div>
                        </div>


                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="Last Sizes Leftimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Last Sizes left</p>
                            </div>
                        </div>


                        <div class="card border-white " style={{ width: "10rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-plus-size-common-1682570373.jpg" alt="Plus Sizeimage" />
                            <div class="card-body text-center" style={{ fontSize: "13px", fontWeight: "700" }}>
                                <p class="card-text">Plus size</p>
                            </div>
                        </div>


                    </div>

                    <div>
                        <img src="https://images.bewakoof.com/uploads/grid/app/brand-strip-1683780891-1684740361.gif" alt="" style={{ width: " 100%", }}></img>
                    </div>

                    <div className='text-center mt-2'>
                        <h4 className='mb-0'>Designs of the Week</h4>

                        <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1687669563.jpg" alt="" style={{ width: '50%' }}></img>
                        <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1687669563.jpg" alt="" style={{ width: "50%" }}></img>

                    </div>

                    <div className='row mt-5  ms-3' style={{ borderTop: "2px solid #EEE9F0" }}>

                        <h4 className='text-center mt-2 mb-0' >TRENDING CATEGORIES</h4>

                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg" alt="Printed t shirts" />
                        </div>

                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg" alt="Oversized T- Shirts" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg" alt="Combo T-shirts" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg" alt="Joggers" />
                        </div>

                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg" alt="vest" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg" alt="Full sleeve t shirts" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg" alt="Printed T-shirt" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png" alt="Oversized T- Shirts" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg" alt="Fashion Tops" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png" alt="Joggers" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg" alt="Dresses" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg" alt="Boyfriend T Shirts" />


                        </div>

                    </div>

                    <div className='text-center mt-3'>
                        <h4>TOO HOT TO BE MISSED</h4>

                        <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-buy3at999--1--1686806204.jpg" alt="" style={{ width: "50%", padding: "5px", paddingLeft: "0" }} />
                        <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-Pride-collection-1687758006.jpg" alt="" style={{ width: "50%", paddingBottom: "6px" }} />
                        <div className='mt-3'>
                            <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriend-tees-1686817741.jpg" alt="" style={{ width: "50%", }} />

                            <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-bannerr-shirts-1687162714.jpg" alt="" style={{ width: "50%" }} />
                        </div>
                    </div>

                    <div className='row ms-3'>
                        <h4 className='text-center mt-3'>CATEGORIES TO BAG</h4>

                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg" alt="Shirts" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg" alt="boxers" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box--m-pyjama-1685086220.jpg" alt="pyjamas" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-cords-1686063032.jpg" alt="Women Co-ords" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-pjs-1686063033.jpg" alt="Pajamas" />
                        </div>


                        <div class="" style={{ width: "15rem" }}>
                            <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-shorts-1686063034.jpg" alt="Shorts " />
                        </div>
                    </div>

                    <div id='carouselExampleIndicator' className='carousel slide' data-bs-ride='carousel' data-bs-interval='2000'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src="https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-June-AOP-Common-03reviszed-1687759032.jpg" className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-2023-WithUSP-lazy-pyjamas-common-1687184955.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/static-1x1-StatementDresses-ProductChange-1686631065.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-June-Common-Joggers-1686892864.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <img src="https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-June-AOP-Common-03reviszed-1687759032.jpg" className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>

                                        <img src='https://images.bewakoof.com/uploads/grid/app/1X1-2023-WithUSP-lazy-pyjamas-common-1687184955.jpg' className='d-block w-100' alt='IPhone' height='500px' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicator' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true' ></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicator' data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>



                    <div className='row ms-4'>
                        <h4 className='text-center mt-4'>TOP ACCESSORIES</h4>


                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-mobile-covers-1687757495.jpg" alt="Mobile Covers" style={{ width: "23rem" }} />



                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-sliders-1687757497.jpg" alt="Sliders" style={{ width: "23rem" }} />



                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-backpacks-1687757496.jpg" alt="" style={{ width: "23rem" }} />



                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-caps-1687757497.jpg" alt="Caps" style={{ width: "23rem" }} />


                    </div>


                    <div className='col-lg-12' style={{ backgroundImage: "url(https://images.bewakoof.com/web/bg-web-mc-land-page.svg)" }}>

                        <h5 className='text-center'>BESTSELLERS</h5>
                        <div id='carouselExampleIndicatorss' className='carousel slide' data-bs-ride='carousel' data-bs-interval='3000'>
                            <ol className='carousel-indicators'>
                                {Array(Math.ceil(Data.length / 5)).fill().map((_, index) => (
                                    <li
                                        key={index}
                                        data-bs-target='#carouselExampleIndicators'
                                        data-bs-slide-to={index}
                                        className={index === 0 ? 'active' : ''}
                                    ></li>
                                ))}
                            </ol>
                            <div className='carousel-inner'>
                                {Array(Math.ceil(Data.length / 5)).fill().map((_, slideIndex) => {
                                    const start = slideIndex * 5;
                                    const end = start + 5;
                                    const chunk = Data.slice(start, end);
                                    const isActive = slideIndex === 0 ? 'active' : '';

                                    return (
                                        <div className={`carousel-item ${isActive}`} key={slideIndex}>
                                            <div className='row ms-5'>
                                                {chunk.map((item, itemIndex) => (
                                                    <div className='col-lg-2 col-md-2 col-sm-12 m-3' key={itemIndex} style={{ border: "1px solid #F0EEDE", backgroundColor: "white" }}>
                                                        <div className="hover-zoom">
                                                            <img className='py-0' src={item.img} style={{ width: '100%', loading: 'lazy', decoding: 'async', objectFit: 'cover' }} alt='Product' />
                                                            <div>
                                                                <h3 className='title mt-3' style={{ fontSize: '12px' }}>{item.title}</h3>
                                                                <p className='text' style={{ fontSize: '12px' }}>{item.des}..</p>
                                                                <h5 style={{ fontWeight: '700' }}>{item.price}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorss" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorss" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>



                    </div>


                    <div className='text-center mt-3'>
                        <h4>OUR BEST PICKS</h4>
                        <img src="https://images.bewakoof.com/uploads/grid/app/MidSize-2023-WithUSP-vests-1686548124.jpg" alt="" style={{ width: "50%", padding: "5px", paddingLeft: "0" }} />

                        <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-boxers-1687163175.jpg" alt="" style={{ width: "50%", paddingBottom: "6px" }} />

                        <div className=''>
                            <img className='' src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-COMBO-1687794187.gif" alt="" style={{ width: "50%", padding: "5px", paddingLeft: "0" }} />

                            <img src="https://images.bewakoof.com/uploads/grid/app/plus-size-common-1683622044.jpg" alt="" style={{ width: "50%", padding: "5px", paddingLeft: "0" }} />
                        </div>
                    </div>


                    <div className='mt-2'>
                        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt="Non tribe" style={{ width: " 100%" }} />
                    </div>


                    <div className='mt-2'>
                        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="vote for Designs" style={{ width: "100%" }} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
