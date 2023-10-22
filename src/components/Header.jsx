import "../assets/dashboard/dashboard.css";

const Header = ({ title, noInfo, obj }) => {
  if (obj && obj.name) {
    var name = obj.name;
  } else {
    name = "";
  }
  return (
    <div className="header">
      <div className="title">{title}</div>
      {!noInfo && (
        <div className="info">
          <div className="logo">{name[0]}</div>
          <div className="name">{name}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
