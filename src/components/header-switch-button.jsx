import '../styles/header-switch-button.css';

export default function HeaderSwitchButton(props) {
  return <button className='header-button' onClick={props.onClick}>{props.text}</button>
}

HeaderSwitchButton.defaultProps = { text: "<кнопка>" }