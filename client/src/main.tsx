import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { ColorProvider, BackgroundProvider } from "./contexts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorProvider>
        <BackgroundProvider>
          <App />
        </BackgroundProvider>
      </ColorProvider>
    </Provider>
  </StrictMode>
);
