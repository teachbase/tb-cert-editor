export default ({ id, label, value, onChange }) => {
  id = 'textinput_' + id;
  return <div className="text_input">
    <label htmlFor={ id }>{ label }</label>
    <input id={ id } type="text" onChange={ onChange } value={ value }/>
  </div>
}
