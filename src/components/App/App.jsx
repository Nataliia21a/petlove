import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import MainLayout from "../../pages/MainLayout/MainLayout";
import HomePage from "../../pages/HomePage/HomePage";
import NewsPage from "../../pages/NewsPage/NewsPage.jsx";
import NoticesPage from "../../pages/NoticesPage/NoticesPage.jsx";
import OurFriendsPage from "../../pages/OurFriendsPage/OurFriendsPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import ProfilePage from "../../pages/ProfilePage/ProfilePage.jsx";
import AddPetPage from "../../pages/AddPetPage/AddPetPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";

export default function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
