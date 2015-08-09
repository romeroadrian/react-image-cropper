import React from "react";
import ImagePicker from "./ImagePicker";
import Cropper from "./Cropper";
import ImagePreview from "./ImagePreview";

export default class ImageCropper extends React.Component {

  state = {
    image: null,
    coords: null
  }

  constructor(props) {
    super(props);
    this.onImageSelected = this.onImageSelected.bind(this);
    this.onCropChange = this.onCropChange.bind(this);
  }

  onImageSelected(file) {
    let reader = new FileReader();
    reader.onload = (e) => { this.setState({image: e.target.result}) };
    reader.readAsDataURL(file);
  }

  onCropChange(coords) {
    this.setState({coords: coords});
  }

  render() {
    return (
      <div>
        <ImagePicker onImageSelected={this.onImageSelected} />
        <Cropper image={this.state.image} onChange={this.onCropChange} />
        <ImagePreview image={this.state.image} dimensions={this.state.dimensions} coords={this.state.coords} />
      </div>
    );
  }
}
