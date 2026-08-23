import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "./styles.css";

import Home from "./routes/Home";
import EditIndex from "./routes/EditIndex";
import EditSlug from "./routes/EditSlug";
import InviteSlug from "./routes/InviteSlug";
import NotFound from "./routes/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditIndex />} />
        <Route path="/edit/:slug" element={<EditSlug />} />
        <Route path="/invite/:slug" element={<InviteSlug />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
