import "./Time.css";
const date: Date = new Date();

const Time = () => {
  return (
    <div className="date">
      <p className="Date">
        Today is {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} {" "}
        {date.getHours()}:{date.getMinutes()}
      </p>
    </div>
  );
};

export default Time;
