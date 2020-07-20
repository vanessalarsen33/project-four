import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import ReactCardCarousel from "react-card-carousel";

class CardCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "60vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "300px",
      width: "250px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#557050",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={CardCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
          <div style={CardCarousel.CARD_STYLE}
          className="Facial"
          >Facial
          <NavLink exact to='/appointment' >BOOK</NavLink>
          </div>
          <div style={CardCarousel.CARD_STYLE}
          className="Massage"
          >Massage
          <NavLink exact to='/appointment' >BOOK</NavLink>
          </div>
          <div style={CardCarousel.CARD_STYLE}
          className="Nails"
          >Manicure
          <NavLink exact to='/appointment' >BOOK</NavLink>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default CardCarousel;