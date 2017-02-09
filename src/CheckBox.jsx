export default ({ id, label, value, onChange }) => {
  id = 'checkbox_' + id;
  return <div className="checkbox">
    <input id={ id } type="checkbox" onChange={ onChange } value={ value }/>
    <label htmlFor={ id }>{ label }</label>
  </div>
}
