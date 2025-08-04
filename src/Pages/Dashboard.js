import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Contexts/AppContext';
import '../CSS/details.css';
import Details from '../Components/details';
import Footer from '../Components/footer';
import Header from '../Components/header';
import Profile from '../Components/profile';

export default function Dashboard() {


  return (
    <div>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}
