import logo from "./assets/Tasker_logo.png";

export default function Header() {
  return (
    <nav className="py-2  fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/*  Logo  */}
        <a href="/">
          <img className="h-[70px]  md:ml- " src={logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
