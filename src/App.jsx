import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Mission from "./pages/Mission";
import Corporate from "./pages/Corporate";
import Social from "./pages/Social";
import Vacancies from "./pages/Vacancies";
import WhyUs from "./pages/WhyUs";

// Course Components
import FullstackProgramming from "./components/courses/FullstackProgramming";
import DataScience from "./components/courses/DataScience";
import DigitalMarketing from "./components/courses/DigitalMarketing";
import ProductOwner from "./components/courses/ProductOwner";
import ProjectManagement from "./components/courses/ProjectManagement";
import BusinessAnalytics from "./components/courses/BusinessAnalytics";

// Other Components
import RoomGallery from "./components/sections/RoomGallery";
import SalaryCalculator from "./components/sections/SalaryCalculator";
import HeroSection from "./components/layout/HeroSection";
import CareerSupport from "./pages/CareerSupport";
import Courses from "./components/sections/Courses";
import ScrollToTop from "./components/sections/ScrollToTop";

// Blog pages
import AllBlogs from "./pages/AllBlogs"; // Import the new AllBlogs page

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <>
                <HeroSection
                  title="Akademiya Haqqında"
                  image="https://div.edu.az/uploads/posts/2024-02/1708175068_divcropped10.jpg"
                />
                <About />
              </>
            }
          />

          <Route
            path="/mission"
            element={
              <>
                <HeroSection
                  title="Missiya və vizyon "
                  image="https://div.edu.az/uploads/posts/2024-02/thumbs/1708175325_divcropped7.jpg"
                />
                <Mission />
              </>
            }
          />

          <Route
            path="/vacancies"
            element={
              <>
                <HeroSection
                  title="Vakansiyalar"
                  image="https://divacademy.az/uploads/posts/2022-06/1655453350_proqramci-vakansiyalar.png"
                />
                <Vacancies />
              </>
            }
          />

          <Route
            path="/social"
            element={
              <>
                <HeroSection
                  title="Sosial məsuliyyət"
                  image="https://div.edu.az/uploads/posts/2021-11/1637047332_130776956_306902867270491_3269936835028076703_n.jpeg"
                />
                <Social />
              </>
            }
          />

          <Route
            path="/corporate"
            element={
              <>
                <HeroSection
                  title="Korporativ təlimlər"
                  image="https://div.edu.az/uploads/posts/2024-02/thumbs/1708175638_divcropped1.jpg"
                />
                <Corporate />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <HeroSection
                  title="Əlaqə "
                  image="https://div.edu.az/img/divfasad1.png"
                />
                <Contact />
              </>
            }
          />

          {/* Blog Routes */}
          <Route
            path="/blog"
            element={
              <>
                <HeroSection
                  title="Blog"
                  image="https://div.edu.az/uploads/posts/2021-11/1637046960_photo-1572773972694-20d00b34e0de.jpeg"
                />
                <Blog />
              </>
            }
          />
          <Route
            path="/all-blogs" // New route for all blogs
            element={
              <>
                <HeroSection
                  title="Bütün Bloglar"
                  image="https://div.edu.az/uploads/posts/2021-11/1637046960_photo-1572773972694-20d00b34e0de.jpeg"
                />
                <AllBlogs /> {/* Show all 6 blogs */}
              </>
            }
          />

          {/* Course Routes */}
          <Route
            path="/courses/fullstack-programming"
            element={
              <>
                <HeroSection
                  title="Fullstack Proqramlaşdırma"
                  image="https://div.edu.az/uploads/posts/2021-11/1637047147_photo-1549082984-1323b94df9a6.jpeg"
                />
                <FullstackProgramming />
              </>
            }
          />

          <Route
            path="/courses/data-science"
            element={
              <>
                <HeroSection
                  title="Data Science"
                  image="https://div.edu.az/uploads/posts/2024-02/1708001471_divcropped3.jpg"
                />
                <DataScience />
              </>
            }
          />

          <Route
            path="/courses/digital-marketing"
            element={
              <>
                <HeroSection
                  title="Digital Marketing"
                  image="https://div.edu.az/uploads/posts/2024-02/thumbs/1708176780_divcropped9.jpg"
                />
                <DigitalMarketing />
              </>
            }
          />

          <Route
            path="/courses/product-owner"
            element={
              <>
                <HeroSection
                  title="Product Owner"
                  image="https://div.edu.az/uploads/posts/2024-02/thumbs/1708176780_divcropped9.jpg"
                />
                <ProductOwner />
              </>
            }
          />

          <Route
            path="/courses/project-management"
            element={
              <>
                <HeroSection
                  title="IT Project Management"
                  image="https://div.edu.az/uploads/posts/2024-02/1708001451_divcropped4.jpg"
                />
                <ProjectManagement />
              </>
            }
          />

          <Route
            path="/courses/business-analytics"
            element={
              <>
                <HeroSection
                  title="IT Biznes Analitika"
                  image="https://div.edu.az/uploads/posts/2024-02/thumbs/1708176780_divcropped9.jpg"
                />
                <BusinessAnalytics />
              </>
            }
          />

          <Route
            path="/salary"
            element={
              <>
                <HeroSection
                  title="Gələcək maaşını hesabla"
                  image="https://div.edu.az/uploads/posts/2021-11/1637047212_photo-1536246026435-0cbb2a92952a.jpeg"
                />
                <SalaryCalculator />
              </>
            }
          />

          <Route
            path="/career-support"
            element={
              <>
                <HeroSection
                  title="Karyera mərkəzi "
                  image="https://div.edu.az/uploads/posts/2024-02/1708175168_divcropped6.jpg"
                />
                <CareerSupport />
              </>
            }
          />

          <Route
            path="/courses"
            element={
              <>
                <HeroSection
                  title="Kurslar "
                  image="https://div.edu.az/uploads/posts/2021-11/1637046826_photo-1504384308090-c894fdcc538d.jpeg"
                />
                <Courses />
              </>
            }
          />
        </Routes>
      </Layout>
      <ScrollToTop />
    </Router>
  );
};

export default App;
