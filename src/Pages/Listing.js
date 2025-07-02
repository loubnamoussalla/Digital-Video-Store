import React, { useContext } from 'react';
import ListingGrid from '../Components/listingGrid';
import { AppContext } from '../Contexts/AppContext';
import Header from '../Components/header';
import Footer from '../Components/footer';

export default function ListingPage() {


  return (
    <div >
      <Header />
      <ListingGrid />
      <Footer />
    </div>
  );
}
