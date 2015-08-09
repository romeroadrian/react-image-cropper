import React from "react";

export default class ImagePreview extends React.Component {

  componentDidMount() {
    this.updateCanvas();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.image !== this.props.image || nextProps.coords !== this.props.coords) {
      this.updateCanvas();
    }
  }

  updateCanvas() {
    if (this.props.image && this.props.coords) {
      let canvas = React.findDOMNode(this.refs.canvas);
      let ctx = canvas.getContext("2d");

      let image = new Image();
      image.src = this.props.image;

      ctx.drawImage(image,
        this.props.coords.x,
        this.props.coords.y,
        this.props.coords.w,
        this.props.coords.h,
        0,
        0,
        this.props.width,
        this.props.height
      );
    }
  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.width} height={this.props.height} />
    );
  }
  
}

ImagePreview.defaultProps = {
  width: 100,
  height: 100
};
