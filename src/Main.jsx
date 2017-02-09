import { Component } from 'react'
import Rnd from 'react-rnd'
import TextInput from './TextInput'
import CheckBox from './CheckBox'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_src: 'https://wcs.smartdraw.com/certificate/img/certificate-1.jpg',
      code: '',
      blocks: [
        { id: 'name', label: 'ФИО', text: 'Фамилия Имя' },
        { id: 'number', label: 'Номер', text: '123456' }
      ]
    };
  }

  onCodeChange(e) {
    const code = e.target.value;
    this.setState({ code });
  }

  onBlockCheckboxChange(i, checked) {
    const blocks = this.state.blocks.slice(0);
    const { id, label, text } = blocks[i];
    if (checked) {
      blocks[i] = { id, label, text, options: { textAlign: 'center' } };
    } else {
      blocks[i] = { id, label, text };
    }
    this.setState({ blocks });
  }

  render() {
    const { image_src, code, blocks } = this.state;
  console.log(blocks);

    return <div>
      <div id="panel">
        <div className="block">
          {
            blocks.map((block, i) => <CheckBox id={ block.id } key={ block.id } label={ block.label } value={ !!blocks.options } onChange={ (e) => this.onBlockCheckboxChange(i, e.target.value) } />)
          }
        </div>
        <div className="block">
          <TextInput id="code" key="code" label="Код" value={ code } onChange={ this.onCodeChange.bind(this) }/>
          <TextInput id="image" key="image" label="Картинка" value={ image_src } onChange={ (e) => this.setState({ image_src: e.target.value }) }/>
        </div>
      </div>
      <div id="main">
        <div className="image"><img src={ image_src } onDragStart={ (e) => e.preventDefault() }/></div>
        {
          blocks.map((block) => block.options ? <Rnd initial={ { x: 0, y: 0, width: 100, height: 50 } } key={ block.id } className="block"><span>{ block.text }</span></Rnd> : null)
        }
      </div>
    </div>;
  }
}

export default Main;
