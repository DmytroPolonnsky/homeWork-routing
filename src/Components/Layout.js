import Appbar from "./Appbar";
function Layout({ children }) {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
}
export default Layout;
