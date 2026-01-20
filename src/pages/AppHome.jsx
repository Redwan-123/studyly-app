import Exams from "../components/Exams";
import BottomNav from "../components/BottomNav";

export default function AppHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6">
        <Exams />
      </div>
      <BottomNav />
    </div>
  );
}
