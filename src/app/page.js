import BottomNavbar from "./components/BottomNavbar";
import Logo from "./components/logo/Logo";
import Sidebar from "./components/Sidebar";
export default function Home() {

  return (
    <div className="">
      <Logo/>
      <Sidebar />
      <BottomNavbar/>
    </div>
  );
}
