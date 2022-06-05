import React from "react";
import "./Gallery.css";
class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      pics: [],
      bigPic: -1
    };
    this.handelClick = this.handelClick.bind(this);
  }
  handelClick(event) {
    this.setState((oldState) => {
      return {
        pics: oldState.pics,
        bigPic: event.target.id
      };
    });
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.setState({
          pics: data.results.map((pic, i) => {
            return {
              id: i,
              big: pic.picture.large,
              small: pic.picture.thumbnail,
              lastName: pic.name.last
            };
          })
        });
      });
  }
  render() {
    return (
      <div className="gallery_container">
        <div className="thumb_container">
          <section>
            {this.state.pics.map((pic, i) => {
              return (
                <button
                  onClick={this.handelClick}
                  key={i}
                  id={i}
                  className="thumb"
                >
                  <img
                    src={pic.small}
                    id={i}
                    key={i}
                    className="thumb_image"
                    alt={pic.lastName}
                  />
                </button>
              );
            })}
          </section>
        </div>
        <section className="large_pic">
          {this.state.bigPic > -1 && (
            <img
              src={this.state.pics[this.state.bigPic].big}
              alt={this.state.pics[this.state.bigPic].lastName}
            />
          )}
        </section>
      </div>
    );
  }
}
export default Gallery;
