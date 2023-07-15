import React from "react";

const avatar = "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg";
const name = "Elvin";
const date = new Date(2020, 10, 10);

const subStyle={
    marginTop:"-40%",
    textAlign:"center",
    color:"white"
}
const subStyle2={
    marginTop:"-40%",
    textAlign:"center",
    color:"white"
}
export default function Profile() {
  return (
    <div>
      <section
        style={{
          width: "250px",
          height: "250px",
          margin: "auto",
          border: "5px solid springgreen",
          marginTop: "100px",
          padding: "40px",
          boxSizing:"border-box",
          borderRadius: "50%",
        }}
        >
        <img
          src={avatar}
          style={{
              width: "150px",
              height: "150px",
              margin: "auto",
              borderRadius: "50%",
          }}
          alt='profile'
        ></img>
        <h2 style={subStyle} className="special">{name}</h2>
        <h2 style={subStyle}>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</h2>
      </section>
    </div>
  );
}
