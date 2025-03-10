import './App.css'
import CabTracker from "./component/CabTracker";

export default function Home() {

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Live Cab Tracker</h1>
      <CabTracker />
    </div>
  );
}
