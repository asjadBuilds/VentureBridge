import AppRouter from "./routes/AppRouter"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ToastContainer } from "react-toastify";
function App() {
 

  return (
    <MantineProvider>
      <AppRouter/>
      <ToastContainer/>
    </MantineProvider>
  )
}

export default App
