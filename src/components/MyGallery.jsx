import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: '/RapidsLogo.jpg',
    thumbnail: '/RapidsLogo.jpg',
  },
  {
    original: '/RapidsTeam.jpg',
    thumbnail: '/RapidsTeam.jpg'
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery