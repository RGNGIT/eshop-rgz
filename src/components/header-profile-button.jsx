import '../styles/header-switch-button.css';

export default function HeaderProfileButton(props) {
  return <div>
    <button style={props.style} className='header-button' onClick={props.onClick}>{props.text}</button>
  </div>
}

HeaderProfileButton.defaultProps = { text: "<кнопка>" }