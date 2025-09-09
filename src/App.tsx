import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { Quran } from './pages/Quran';
import { Hadith } from './pages/Hadith';
import { Prayer } from './pages/Prayer';
import { About } from './pages/About';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/hadith" element={<Hadith />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/about" element={<About />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;