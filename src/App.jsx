import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SearchTrainer from "./Pages/Searc";
import HeroSection from "./Pages/FitHero";
import ContentSection from "./Pages/ContentSection";
import TrainerDisplay from "./Pages/Trainerdisplay";
import SettingsPage from "./Pages/Setting";
import TrainerAppointment from "./Pages/TrainerAppointment";
import LearnerList from "./Pages/Learnerlist";
import AdminDashboard from "./Dashboard";
import TrainerLogin from "./Pages/TraineeLogin";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/trainerlogin" element={<TrainerLogin />} />

          <Route path="/content" element={<ContentSection />} />
          <Route path="/search" element={<SearchTrainer />} />
          <Route path="/setting" element={<SettingsPage />} />
          <Route path="/display" element={<TrainerDisplay />} />
          <Route path="/booksession/:id" element={<TrainerAppointment />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/learnerlist" element={<LearnerList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
