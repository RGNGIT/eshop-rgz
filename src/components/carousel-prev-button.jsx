export default function CarouselPrevButton(props) {
  return <button className="prev-btn" onClick={props.onClick}>{props.icon}</button>
}

CarouselPrevButton.defaultProps = { icon: "X" }