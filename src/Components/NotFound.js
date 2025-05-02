import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Сторінку не знайдено</h1>
      <p>
        На жаль, сторінка, яку ви шукаєте, не існує. Click{" "}
        <Link to="/">here</Link>
      </p>
      <img
        src="https://http.cat/404"
        alt="404 not found"
        style={{ width: "300px", marginTop: "20px" }}
      />
    </div>
  );
}

export default NotFound;

