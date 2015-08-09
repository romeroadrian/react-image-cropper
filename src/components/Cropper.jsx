import React from "react";
import $ from "jquery";
import "jquery-jcrop";
import "jquery-jcrop/css/jquery.Jcrop.css";

export default class Cropper extends React.Component {

  componentDidMount() {
    let self = this;
    $(React.findDOMNode(this.refs.image)).Jcrop({
      onChange: this.onChange.bind(this),
      onSelect: this.onChange.bind(this),
    }, function() {
      self.jcrop = this;
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.jcrop && nextProps.image !== this.props.image) {
      this.jcrop.setImage(nextProps.image);
    }
  }

  componentWillUnmount() {
    if (this.jcrop) {
      this.jcrop.destroy();
    }
  }

  onChange(coords) {
    if (this.props.onChange) {
      this.props.onChange(coords);
    }
  }

  render() {
    return (
      <img ref="image" src={this.props.image} />
    );
  }

}
