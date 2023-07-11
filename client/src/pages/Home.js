import "../styles/Home2.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <div>
            <div className="absolute grid grid-cols-12 gap-4 min-h-screen w-full overflow-hidden overflow-hidden-y z-10 " >
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="relative grid min-h-screen place-content-end">
                        {[...Array(4)].map((_, j) => (
                        <div 
                            className={`w-16 h-16 rounded-full bg-red-500 animate-bubble delay-${j+i}s mb-4 absolute`}
                            key={j}
                            style={{
                            '--animation-order': j + 1,
                            '--animation-length': `${Math.random() * 5 + 3}s`,
                            '--animation-distance': '100vh',
                            }}
                        />
                        ))}
                    </div>
                ))}
            </div>
            <div className="relative z-20">
                {/* Your content goes here */}
                <NavLink to="/protected">
                <button
                    id="GSbutton"
                    className="GSbutton"
                    style={{ "--clr": "#ff1867", color: "white" }}
                >
                    Get Started<i></i>
                </button>
                </NavLink>
            </div>
        </div>
    </div>
  );
}
