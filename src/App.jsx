import { MantineProvider } from "@mantine/core";
import AppRouter from "./routes/AppRouter"
import { ToastContainer } from "react-toastify";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/dates/styles.css';
import "react-country-state-city/dist/react-country-state-city.css";
import "react-chat-elements/dist/main.css"
import { LoginStatusProvider } from "./contexts/LoginStatusContext";
import { UserDetailsProvider } from "./contexts/UserDetailContext";
function App() {
 

  return (
    <MantineProvider>
      <LoginStatusProvider>
      <UserDetailsProvider>
      <AppRouter/>
      </UserDetailsProvider>
      </LoginStatusProvider>
      <ToastContainer/>
    </MantineProvider>
  )
}

export default App
