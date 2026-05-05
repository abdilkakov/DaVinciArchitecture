import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: "#122a17",
            border: "1px solid rgba(201, 168, 76, 0.4)",
            color: "#f5ead8",
          },
        }}
      />
    </BrowserRouter>
  );
}
