import '../styles/header-switch-button.css';

export default function HeaderProfileButton(props) {
  return <div>
    <button style={props.style} className="header-profile-button" onClick={props.onClick}>
      <span style={{paddingTop: "9px"}}>{props.text}</span>
      <img src={props.avatar} alt="Avatar" className="avatar-mini" />
    </button>
  </div>
}

HeaderProfileButton.defaultProps = { text: "<кнопка>" }