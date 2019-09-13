import React from "react";
import M from "../../../back/public/js/materialize";

export default class CarouselReact extends React.Component {
  constructor() {
    super();
    this.handleCarousel = this.handleCarousel.bind(this);
  }

  handleCarousel() {
    var elems = document.querySelectorAll(".carousel");
    var instance = M.Carousel.init(elems, { dragged: false });
  }

  componentDidMount() {
    this.handleCarousel();
  }
  render() {
    return (
      <div className="carouselClass">
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src="https://i.pinimg.com/originals/f7/62/a9/f762a90c8fdadd3e7f77128a8e93e468.jpg" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://ih0.redbubble.net/image.535116170.9103/flat,550x550,075,f.u3.jpg" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81o%2BzjZ4KHL._SY679_.jpg" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://images-na.ssl-images-amazon.com/images/I/714hR8KCqaL._SY679_.jpg" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="https://http2.mlstatic.com/poster-cine-la-caida-der-untergang-50-x-70-cm-solo-lamina-D_NQ_NP_722117-MLA26404889071_112017-F.jpg" />
          </a>
        </div>
      </div>
    );
  }
}
