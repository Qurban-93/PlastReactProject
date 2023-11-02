import fisrtImg from "../images/Rectangle1.jpg";
import secondImg from "../images/Rectangle2.jpg";
import thirdImg from "../images/Rectangle3.jpg";
import fourthImg from "../images/Rectangle4.jpg";
import fiveImg from "../images/Rectangle5.jpg";

import deviceFirst from "../images/Device1.png";
import deviceSecond from "../images/Device2.png";
import deviceThird from "../images/Device3.png";

import ellipseFirst from "../images/Ellipse1.png";
import ellipseSecond from "../images/Ellipse2.png";
import ellipseThird from "../images/Ellipse3.png";
import ellipseFourth from "../images/Ellipse4.png";
import ellipseFive from "../images/Ellipse5.png";

function generateProducts() {
  const products = [
    {
      id: 1,
      title: "Ağ vərəqlər (A4)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: fisrtImg,
      price: "5 azn/ 1 kg",
    },
    {
      id: 2,
      title: "Qazetlər",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: secondImg,
      price: "6 azn/ 1 kg",
    },
    {
      id: 3,
      title: "Karton kağızlar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: thirdImg,
      price: "7 azn/ 1 kg",
    },
    {
      id: 4,
      title: "Arxiv",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: fourthImg,
      price: "8 azn/ 1 kg",
    },
    {
      id: 5,
      title: "Qarışıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: fiveImg,
      price: "9 azn/ 1 kg",
    },
  ];

  const devices = [
    {
      id: 1,
      title: "Statik 24",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: deviceFirst,
      price: "4,400 azn",
    },
    {
      id: 2,
      title: "Statik 30A",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: deviceSecond,
      price: "9,400 azn",
    },
    {
      id: 3,
      title: "Statico ST-40 üfüqi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: deviceThird,
      price: "8,400 azn",
    },
    {
      id: 4,
      title: "Statik 24",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: deviceFirst,
      price: "7,400 azn",
    },
    {
      id: 5,
      title: "Statik 30A",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: deviceSecond,
      price: "6,400 azn",
    },
    {
      id: 6,
      title: "Statico ST-40 üfüqi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: deviceThird,
      price: "5,400 azn",
    },
  ];

  const filterProducts = [
    {
      id: 1,
      title: "Ağ vərəqlər (A4)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseFirst,
      price: "5 azn/ 1 kg",
    },
    {
      id: 2,
      title: "Qazetlər",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseSecond,
      price: "6 azn/ 1 kg",
    },
    {
      id: 3,
      title: "Karton kağızlar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseThird,
      price: "7 azn/ 1 kg",
    },
    {
      id: 4,
      title: "Arxiv",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseFourth,
      price: "8 azn/ 1 kg",
    },
    {
      id: 5,
      title: "Qarışıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseFive,
      price: "9 azn/ 1 kg",
    },
    {
      id: 1,
      title: "Ağ vərəqlər (A4)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseFirst,
      price: "5 azn/ 1 kg",
    },
    {
      id: 2,
      title: "Qazetlər",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseSecond,
      price: "6 azn/ 1 kg",
    },
    {
      id: 3,
      title: "Karton kağızlar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseThird,
      price: "7 azn/ 1 kg",
    },
    {
      id: 4,
      title: "Arxiv",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseFourth,
      price: "8 azn/ 1 kg",
    },
    {
      id: 5,
      title: "Qarışıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus repudiandae mollitia maiores.",
      image: ellipseFive,
      price: "9 azn/ 1 kg",
    },
  ];

  return { products, devices, filterProducts };
}

export default generateProducts;
