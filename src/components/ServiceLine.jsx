import { convertTime } from "../utils/calendar";

const ServiceLine = ({ ser, handleEdit, handleRemove, cat }) => {
  const time = convertTime(ser.time);
  console.log(time);
  return (
    <div className="line">
      <div className="name">
        {ser.name} ({time})
      </div>
      <div className="btn-group">
        <div className="btn" onClick={() => handleEdit(cat, ser)}>
          Edit
        </div>
        <div className={`btn rem`} onClick={(e) => handleRemove(e, cat, ser)}>
          <span className="btn_text">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceLine;
