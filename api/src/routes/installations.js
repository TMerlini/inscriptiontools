const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Data directory for Umbrel
const DATA_DIR = process.env.APP_DATA_DIR || '/data';
const INSTALLATIONS_FILE = path.join(DATA_DIR, 'installations.json');

// Ensure installations file exists
if (!fs.existsSync(INSTALLATIONS_FILE)) {
  fs.writeFileSync(INSTALLATIONS_FILE, JSON.stringify([], null, 2));
}

// Helper function to read installations
const getInstallations = () => {
  try {
    const data = fs.readFileSync(INSTALLATIONS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading installations file:', error);
    return [];
  }
};

// Helper function to write installations
const saveInstallations = (installations) => {
  try {
    fs.writeFileSync(INSTALLATIONS_FILE, JSON.stringify(installations, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing installations file:', error);
    return false;
  }
};

// Get all installed apps
router.get('/', (req, res) => {
  const installations = getInstallations();
  res.json(installations);
});

// Install an app
router.post('/:id', (req, res) => {
  const appId = req.params.id;
  const installations = getInstallations();
  
  // Check if already installed
  if (installations.some(app => app.id === appId)) {
    return res.status(400).json({ error: 'App already installed' });
  }
  
  // In a real implementation, this would trigger a Docker container setup
  // For now, we just add it to our installations list
  const newInstallation = {
    id: appId,
    installedAt: new Date().toISOString(),
    status: 'installed'
  };
  
  installations.push(newInstallation);
  
  if (saveInstallations(installations)) {
    res.status(201).json(newInstallation);
  } else {
    res.status(500).json({ error: 'Failed to install app' });
  }
});

// Uninstall an app
router.delete('/:id', (req, res) => {
  const appId = req.params.id;
  const installations = getInstallations();
  
  const appIndex = installations.findIndex(app => app.id === appId);
  
  if (appIndex === -1) {
    return res.status(404).json({ error: 'App not installed' });
  }
  
  // In a real implementation, this would stop and remove the Docker container
  installations.splice(appIndex, 1);
  
  if (saveInstallations(installations)) {
    res.status(200).json({ message: 'App uninstalled successfully' });
  } else {
    res.status(500).json({ error: 'Failed to uninstall app' });
  }
});

// Check installation status
router.get('/:id/status', (req, res) => {
  const appId = req.params.id;
  const installations = getInstallations();
  
  const app = installations.find(app => app.id === appId);
  
  if (!app) {
    return res.status(404).json({ error: 'App not installed' });
  }
  
  res.json({ id: app.id, status: app.status });
});

module.exports = router; 