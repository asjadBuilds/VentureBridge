import AppRouter from "./routes/AppRouter"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
 

  return (
    <MantineProvider>
      <AppRouter/>
    </MantineProvider>
  )
}

export default App
