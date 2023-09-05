import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100dvh",
          width: "100dvw",
          overflow: "hidden",
        }}
      >
        <nav style={{ flex: 1, padding: "1rem" }}>
          <ul>
            <li>
              <Link to="/a">Goto A</Link>
            </li>
            <li>
              <Link to="/b">Goto B</Link>
            </li>
          </ul>
        </nav>
        <div style={{ flex: 2, padding: "1rem", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
