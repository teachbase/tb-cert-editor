import { Component } from 'react'
import Image from 'Image';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  dropHandler(files) {
    console.log(files);
  }

  onImageUpdate(image) {
    this.setState({ image });
  }

  render() {
    return <div>
      <div id="panel">
      </div>
      <div id="main">
        <Image onUpdate={ this.onImageUpdate.bind(this) }/>
      </div>
    </div>;
  }
}

export default Main;
