import { MantineProvider } from "@mantine/core";
import AppRouter from "./routes/AppRouter"
import { ToastContainer } from "react-toastify";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
function App() {
 

  return (
    <MantineProvider>
      <AppRouter/>
      <ToastContainer/>
    </MantineProvider>
  )
}

export default App
