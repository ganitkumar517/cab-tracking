import './App.css'
import CabTracker from "./component/CabTracker";

export default function Home() {

  return (
    <div className="container flex flex-col gap-6 py-6">
      <h1 className="text-4xl font-bold">Live Cab Tracker</h1>
      <CabTracker />
    </div>
  );
}
