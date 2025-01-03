import '../styles/header-switch-button.css';

export default function HeaderSwitchButton(props) {
  return <button style={props.style} className='header-button' onClick={props.onClick}>{props.text}</button>
}

HeaderSwitchButton.defaultProps = { text: "<кнопка>" }