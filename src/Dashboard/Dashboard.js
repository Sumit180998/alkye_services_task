import React, { useEffect, useState } from 'react';
import './Dashboard.css';
 import img_header_logo from '../Image/img_header_logo.png'
 import Group_3 from '../Image/Group_3.svg'
 import img_rectangle_32 from '../Image/img_rectangle_32.png'
 import img_rectangle_33 from '../Image/img_rectangle_33.png'
 import img_rectangle_34 from '../Image/img_rectangle_34.png'
 import img_rectangle_39 from '../Image/img_rectangle_39.png'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ArticlesApi } from '../Redux/Slice/Slice';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';


function Dashboard() {
  const[Photography,setPhotography]=useState([])
  const[Learning,setLearning]=useState([])


 
  const Dispatch=useDispatch()
  const data=useSelector(state=>state)
  console.log(data)
     
      
  console.log(data.Articlesvalue.data)
  
  useEffect(()=>{
  Dispatch(ArticlesApi(data.Token))

  },[data.Token])

  useEffect(()=>{
    const Airticle=data.Articlesvalue.data
    const data1=Airticle?.filter((a)=> a.prompt==='Photography')
    const data2=Airticle?.filter((a)=> a.prompt==='Learning')
    

  setLearning(data2)
  setPhotography(data1)
  },[data])
  return (
    <div className="dashboard">
        <div className="dashboard__column">
        <div className="dashboard__content">
  {/* header logo section */}
  <div className="dashboard__header-logos">
    <img
      src={Group_3}
      alt="headerlogo"
      className="sign-up__logo-1"
    />
    <img
      src={img_header_logo}
      alt="headerlogo"
      className="dashboard__logo--secondary"
    />
  </div>
  <p className="dashboard__welcome-text ui text size-lg">
    <span className="dashboard__welcome-text-span"> Welcome&nbsp;</span>
    <a href="#" className="dashboard__welcome-text-span-1">
      {" "}
      Test
    </a>
  </p>
  <h1 className="dashboard__greeting ui heading size-xs">
    Hope you having a good day!
  </h1>
  <p className="dashboard__section-title ui text size-lg">Photography</p>
  <div className="dashboard-row-one container-sm">
    <div id="slider1" className="dashboard-row-one__slider swiper">
       {Photography?.map((a)=>(
        <Card article={a}/>
       ))}

    </div>
    
  </div>
  <div className="dashboard-row">
    <div className="dashboard-row__view-three" />
    <div className="dashboard-row__view-four" />
    <div className="dashboard-row__view-four" />
  </div>
  <p className="dashboard__learning-text ui text size-lg">Learning</p>
  <div className="dashboard-row-one container-sm">
    <div id="slider" className="dashboard-row-one__slider swiper">
    {Learning?.map((a)=>(
        <Card article={a}/>
       ))}
    </div>
    
  </div>
  <div className="dashboard-row">
    <div className="dashboard-row__view-three" />
    <div className="dashboard-row__view-four" />
    <div className="dashboard-row__view-four" />
  </div>
</div>


        </div>
 <Footer/>
    </div>
  )
}

export default Dashboard