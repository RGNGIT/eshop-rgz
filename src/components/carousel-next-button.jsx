export default function CarouselNextButton(props) {
  return <button className="next-btn" onClick={props.onClick}>{props.icon}</button>
}

CarouselNextButton.defaultProps = { icon: "X" }