import Item from "./Item";
import Profile from "./Profile";
import Userimage from "./Userimage";
import Info from "./Info";
import Product from "./Product";
// import Todo from "./Todo";

const person={
  name:"Elvin",
  surname:"Camalzade",
  age:24,
  avatar:"https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg"
};

const products=[
  {
    name:"Apple",
    price:1200.5,
    avatar:"https://wallpaperaccess.com/full/213636.jpg"
  },
  {
    name:"Samsung",
    price:1800.5,
    avatar:"https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_3.png?$512_N_PNG$"
  },
  {
    name:"Acer Rog",
    price:5500.5,
    avatar:"https://dlcdnwebimgs.asus.com/gain/161DFF39-ECAE-48F6-B10E-52179600208F"
  }
];

function App() {
  return (
    <div style={{
      display:"flex",
      justContent:"space-between"
    }}>
      {/* <Todo></Todo> */}
      {/* <Profile></Profile> */}
      {/* <Item></Item> */}
      {/* <Userimage name={person.name} avatar={person.avatar}></Userimage>
      <Info person={person}></Info> */}
      <Product size={50} product={products[0]}></Product>
      <Product size={100} product={products[1]}></Product>
      <Product size={150} product={products[2]}></Product>
    </div>
  );
}

export default App;
