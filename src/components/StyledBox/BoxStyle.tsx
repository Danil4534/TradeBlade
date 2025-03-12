import "./boxStyle.style.scss";
function BoxStyle(props: any) {
  return (
    <>
      <div
        className="box"
        style={{ backgroundColor: props.bgColorForRightItem }}
      >
        <div
          className="styledBoxLeftSide"
          style={{ backgroundColor: props.bgColorForLeftItem }}
        ></div>
      </div>
    </>
  );
}

export default BoxStyle;
