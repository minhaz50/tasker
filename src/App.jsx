import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskerBord from "./task/TaskerBord";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
      </div>
      <TaskerBord />
      <Footer />
    </>
  );
}
