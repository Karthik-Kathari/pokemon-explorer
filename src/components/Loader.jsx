import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../assets/loading.json";

export default function Loader() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: 280, width: 250 }}
      />
    </div>
  );
}
