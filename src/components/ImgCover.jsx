import { useDrag, useDrop } from "react-dnd";
import React from "react";
const ImgCov = ({ p, pin, val, index, handlePin, moveImage, id }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      //   return;
      // }
      // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      //   return;
      // }
      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
    options: { dropEffect: "copy" },
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      className="img-cover "
      ref={ref}
      style={{ opacity }}
      key={id}
      onClick={(e) => handlePin(e, p, !val)}
    >
      <img className="main" src={p} alt="" />
      <img src={pin} className={`pin ${val ? "active" : ""}`} alt="" />
      <span className="btn_text"></span>
    </div>
  );
};

export default ImgCov;
