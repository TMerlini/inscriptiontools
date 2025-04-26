import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Pages
import Homepage from './pages/Homepage';
import AppDetails from './pages/AppDetails';
import InstalledApps from './pages/InstalledApps';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="gray.50">
        <Header />
        <Flex>
          <Sidebar />
          <Box flex="1" p={5}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/app/:id" element={<AppDetails />} />
              <Route path="/installed" element={<InstalledApps />} />
            </Routes>
          </Box>
        </Flex>
      </Box>
    </Router>
  );
}

export default App; 