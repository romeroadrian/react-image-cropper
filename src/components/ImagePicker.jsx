import React from "react";

export default class ImagePicker extends React.Component {
  render() {
    return (
      <input type="file" onChange={this.onFileSelected.bind(this)}/>
    );
  }

  onFileSelected(event) {
    let selectedFile = event.target.files[0];
    let imageType = /^image\//;

    if (!imageType.test(selectedFile.type)) {
      return;
    }

    if (this.props.onImageSelected) {
      this.props.onImageSelected(selectedFile);
    }
  }
}
