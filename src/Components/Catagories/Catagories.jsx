import React from 'react'
import './Catagories.css'

const images = [{
    icon:"https://preview.colorlib.com/theme/narosundar/assets/img/icon/services1.svg",
    title:"Stylish Haircut",
    description:"Available be the majority have suffered alteration in some form, by injected humour."
}, {
    icon:"https://preview.colorlib.com/theme/narosundar/assets/img/icon/services2.svg",
    title:"Cut & hair style",
    description:"Available be the majority have suffered alteration in some form, by injected humour."
},{
    icon:"https://preview.colorlib.com/theme/narosundar/assets/img/icon/services3.svg",
    title:"Color & hair wash",
    description:"Available be the majority have suffered alteration in some form, by injected humour."
},{
    icon:"https://preview.colorlib.com/theme/narosundar/assets/img/icon/services1.svg",
    title:"Stylish Beardcut",
    description:"Available be the majority have suffered alteration in some form, by injected humour."
}].map((item) => {
    return (
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                <div className="single_cat text-center p-5">
                    <div className="cat_icon">
                        <img src={item.icon} alt="Icons"/>
                    </div>
                    <h3 className="py-3">{item.title}</h3>
                    <div className="cat_caption"> 
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
    )
})

const Catagories = () => {
  return (
    <section className="catagories_section">
      <div className="container py-5">
        <div className="row py-5">
            {images}
        </div>
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div class="carousel-inner h-50" >
    <div class="carousel-item active d-flex flex-row justify-content-center align-items-center gap-3">
    <img src="https://media.timeout.com/images/102436079/image.jpg" alt="Los Angeles" class="" style={{width:"50%", height:"100%"}}/>
    <img src="https://thebarbersonline.com/wp-content/uploads/2019/03/IMG_0216-1.jpg" alt="Chicago" class="d-block" style={{width:"50%", height:"100%"}}/>
      <div class="carousel-caption">
      
        <h3>Mekelle </h3>
        <p>Came to us and your dreams comes true</p>
      </div>
      
      
    </div>
    <div class="carousel-item  gap-3">
    <img src="https://media.timeout.com/images/102436079/image.jpg" alt="Los Angeles" class="" style={{width:"50%", height:"100%"}}/>
    <img src="https://thebarbersonline.com/wp-content/uploads/2019/03/IMG_0216-1.jpg" alt="los Angeles" class="" style={{width:"50%", height:"100%"}}/>
    <div class="carousel-caption">
        <h3>Adiss Abeba</h3>
        <p>Came to us and your dreams comes true</p>
      </div> 
    </div>
    <div class="carousel-item gap-3">
      <img className=' img-fluid' src="https://salon-media.s3.ca-central-1.amazonaws.com/wp-content/uploads/2017/03/170314_interiors_ScotchandScissors.jpg" alt="New York" style={{width:"50%",height:"100%"}}/>
      <img className=' img-fluid' src="https://thisisthebarbershop.com/wp-content/uploads/2016/03/TBS_Barrangaroo_1_LR.jpg" alt="New York" class="" style={{width:"50%",height:"100%"}}/>
      
      <div class="carousel-caption">
        <h3>Hawassa</h3>
        <p>We love You!</p>
      </div>  
    </div>
  </div>
  
  
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

      </div>
    </section>
  )
}

export default Catagories
