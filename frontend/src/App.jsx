import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const clientId =
    "629360013163-6ltokaak00enk0a7tj9m1js1ip9urnn6.apps.googleusercontent.com";
  return (
    <>
      <div>
        <GoogleOAuthProvider clientId={clientId}>
          <Messanger />
        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default App;
