import React from 'react';
import Navbar from 'components/Header/NavBar';
import HikeList from 'components/Hikes/HikeList';
import CountHikes from 'components/Hikes/CountHikes';
import { HikeProvider } from 'components/Hikes/HikeContext';
import AddHike from 'components/Hikes/AddHike';

// const styles = {
//   backgroundImage: {
//     height: 1356,
//     backgroundImage: `url(${'containers/Img/Image.jpg'})`,
//   },
// };

export default function ListPage() {
  return (
    <div>
      <Navbar />
      <HikeProvider>
        <CountHikes />
        <HikeList />
        <AddHike />
      </HikeProvider>
    </div>
  );
}
