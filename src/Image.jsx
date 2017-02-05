import { Component } from 'react'
import Dropzone from 'react-dropzone'

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  dropHandler(files) {
    const image = files[0];
    if (!image) return;
    this.setState({
      url: URL.createObjectURL(image)
    });
  }

  imageLoadHander(e) {
    const { width, height } = e.currentTarget.image;
    this.props.onUpdate({ width, height });
  }

  render() {
    const { url } = this.state;

    return <Dropzone onDrop={ this.dropHandler.bind(this) } multiple={ false } accept="image/*" className="DropZone" activeClassName="activeDropZone">
      { url ?
        <img src={ url } onLoad={ this.imageLoadHander.bind(this) }/> :
        <div>Try dropping some files here, or click to select files to upload.</div>
      }
    </Dropzone>
  }
}

export default Image;
