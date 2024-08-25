import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Starters } from '../Data/Data'
import { Pizza } from '../Data/Data'
import { Sooper } from '../Data/Data'
import { Deal } from '../Data/Data'
import { sp } from '../Data/Data'
import { sp1 } from '../Data/Data'
import { deal2 } from '../Data/Data'
import { order } from '../Data/Data'
import { Link } from 'react-router-dom';

const Cheezious = () => {
  return (
    <div>
    {/* navbar  */}
    <div className='container-fluid mb-5  ' style={{backgroundColor:'#FFCE24', paddingBottom:'-90px'}}>
    <nav className="navbar navbar-expand-sm shadow" >
  <div className="container-fluid " >
    <ul className="navbar-nav " style={{margintop:'-10px', marginBottom:'-20px'}}>
      <li className="nav-item " style={{marginLeft:'20%'}} >
        <Link className="nav-link active pt-3 "  to="#" ><FaLocationDot className="fa-2x"  style={{ color: '#E40B01'}}  /></Link>
      </li>
     <li className="nav-item"  style={{marginLeft:'-5%'}} >
        <Link className="nav-link active" to="#" >
        <div className="container-fluid  " style={{width:'130%'}}>
          <p>   Deliver to Lahore </p>
          
          </div>
        </Link>
      </li>
      <li className="nav-item ">
      
    {/* <Link class="navbar-brand" to="#"> */}
      <img src="/cimage/logo.png" alt="Avatar Logo"  className="rounded-pill"   style={{width:'60px',marginLeft:'600%'}}/> 
    {/* </Link> */}
  
      </li>
      <li className="nav-item">
        <Link className="nav-link pt-3" to="#" style={{marginLeft:'1400%'}}><IoSearch className="fa-2x"  style={{ color: '#E40B01'}}/></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link pt-3" to="#" style={{marginLeft:'1450%'}}><FaUserCircle className="fa-2x"  style={{ color: '#E40B01'}}/></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link pt-3" to="#" style={{marginLeft:'1500%'}}><FaCartShopping className="fa-2x"  style={{ color: '#E40B01'}}/></Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
    {/* slider section starts here  */}
    <div className='container text-center'  >
    <Carousel >
      <Carousel.Item >
       <img src="/cimage/slider1.jpg" nalt="First_slider" className='image-fluid' style={{width:'100%',borderRadius:'15px'}} />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/cimage/slider2.jpg" alt="Second_slider" className='image-fluid' style={{width:'100%',borderRadius:'15px'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/cimage/slider3.jpg"  alt="Third_slider" style={{width:'100%',borderRadius:'15px'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/cimage/slider4.jpg"  alt="Third_slider" style={{width:'100%',borderRadius:'15px'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/cimage/slider5.jpg"  alt="Third_slider" style={{width:'100%',borderRadius:'15px'}}/>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* buttons  */}
    <div>
      <div className='container pt-5'>
        <div className='row text-center' >
        <div className='col ' >
        <button className='btn btn-warning mb-2  ' style={{borderRadius:'20px', backgroundColor:'#FFCE24', marginRight:'20px'}}> <strong>Starters</strong> </button>
        <button className='btn btn-warning  mb-2 ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0', border:'none', marginRight:'20px'}}> <strong>Somewhat Local</strong> </button>
        <button className='btn btn-warning mb-2  ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Somewhat Sooper</strong> </button>
        <button className='btn btn-warning mb-2  ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Cheezy Treats</strong> </button>
        <button className='btn btn-warning  mb-2 ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Pizza Deals</strong> </button>
        <button className='btn btn-warning  mb-2 ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Sandwich&Platters</strong> </button>
        <button className='btn btn-warning mb-2  ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Special Pizza</strong> </button>
        </div>
        </div>
        <div className='row text-center pt-2 '>
        <div className='col p-2'>
        <button className='btn btn-warning mb-2 ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Somewhat Amazing</strong> </button>
        <button className='btn btn-warning mb-2' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Pastas</strong> </button>
        <button className='btn btn-warning mb-2 ' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Burgers</strong> </button>
        <button className='btn btn-warning mb-2' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Side Order</strong> </button>
        <button className='btn btn-warning mb-2' style={{borderRadius:'20px', backgroundColor:'#D1D2D0',border:'none', marginRight:'20px'}}> <strong>Addons</strong> </button>
        </div>
        </div>
        </div>
    </div>
     {/* starters div  */}
     <div className='container ' >
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Starters</strong> </h3>
      <div className='row '>
        {
          Starters.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
      {/* somewhat local  */}
      <div className='container ' >
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Somewhat Local</strong> </h3>
      <div className='row '>
        {
          Pizza.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
    {/* Sooper  */}
    <div className='container '>
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Somewhat Sooper</strong> </h3>
      <div className='row '>
        {
          Sooper.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
    {/* deal  */}
    <div className='container '>
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Pizza Deals</strong> </h3>
      <div className='row '>
        {
          Deal.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
    {/* Sandwich and platters  */}
    <div className='container '>
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Sandwich and platters</strong> </h3>
      <div className='row '>
        {
          sp.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
    {/* Special Pizza  */}
    <div className='container '>
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Special Pizza</strong> </h3>
      <div className='row '>
        {
          sp1.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
    {/* Somewhat Special  */}
    <div className='container '>
      <h3 className=' pt-5' style={{fontSize:'35px'}}><strong>Somewhat Amazing</strong> </h3>
      <div className='row '>
        {
          deal2.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-12px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    <hr/>
    {/* Side Order  */}
    <div className='container '>
      <h3 className=' pt-5' style={{fontSize:'30px'}}><strong>Side Orders</strong> </h3>
      <div className='row '>
        {
          order.map((item, i)=>{
                return(
                    <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-2'>
                        <div className='card text-center b image_container' style={{borderRadius:'22px'}}>                      
                            <img src={item.image} alt={item.name} className='card-img-top image-fluid border1' style={{borderRadius:'22px'}} />
                            <div className='favorite_icon'>
                            <FaRegHeart className="fa-2x" />
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title' style={{marginTop:'-20px'}}>{item.title}   </h5>
                                <p className='card-text' style={{marginTop:'-9px'}}>{item.description}</p>
                                <hr/>
                                <p className='card-text ' style={{marginTop:'-5px', color:'red'}}><strong>Rs.{item.price}</strong> </p>
                                <Link to={`/product/${item.id}`} className='btn btn-danger ' style={{marginTop:'-10px', borderRadius:'30px',backgroundColor:'#E40B01'}}> <strong>Add To Cart</strong> </Link>
                            </div>
                        </div>
                    </div>
                )     
        })
        }
      </div>
    </div>
    </div>
  )
}
export default Cheezious
