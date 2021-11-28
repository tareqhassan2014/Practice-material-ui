import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router";
// import PlaceHolder from "./components/PlaceHolder";
import theme from "./components/Theme/Theme";
import Header from "./components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
      <Route path="/" element={<div>Home</ div>} />
      <Route path="/services" element={<div>Service</ div>} />
      <Route path="/portfolio" element={<div>Portfolio</ div>} />
      <Route path="/blog" element={<div>Blog</ div>} />
      <Route path="/contact" element={<div>contact</ div>} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
