const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Mock apps data (in a real app, this would come from a database)
const APPS = [
  {
    id: 'bitcoin-node',
    name: 'Bitcoin Node',
    description: 'Run a full Bitcoin node',
    icon: '₿',
    category: 'cryptocurrency',
    rating: 4.8,
    downloads: 15243,
    version: '1.0.0',
    maintainer: 'Satoshi',
    size: '150MB',
    requirements: {
      ram: '2GB',
      storage: '500GB'
    }
  },
  {
    id: 'lightning-network',
    name: 'Lightning Network',
    description: 'Fast Bitcoin payments',
    icon: '⚡',
    category: 'cryptocurrency',
    rating: 4.6,
    downloads: 8721,
    version: '0.16.0',
    maintainer: 'Lightning Labs',
    size: '200MB',
    requirements: {
      ram: '1GB',
      storage: '10GB'
    }
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    description: 'Self-hosted productivity platform',
    icon: '☁️',
    category: 'productivity',
    rating: 4.7,
    downloads: 12385,
    version: '25.0.3',
    maintainer: 'Nextcloud Community',
    size: '350MB',
    requirements: {
      ram: '2GB',
      storage: '5GB'
    }
  },
  {
    id: 'pihole',
    name: 'Pi-hole',
    description: 'Network-wide ad blocking',
    icon: '🕳️',
    category: 'utilities',
    rating: 4.9,
    downloads: 18462,
    version: '5.14.2',
    maintainer: 'Pi-hole Team',
    size: '80MB',
    requirements: {
      ram: '512MB',
      storage: '2GB'
    }
  },
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    description: 'Media system',
    icon: '🎞️',
    category: 'media',
    rating: 4.5,
    downloads: 9852,
    version: '10.8.9',
    maintainer: 'Jellyfin Team',
    size: '250MB',
    requirements: {
      ram: '2GB',
      storage: '20GB'
    }
  },
  {
    id: 'homeassistant',
    name: 'Home Assistant',
    description: 'Home automation',
    icon: '🏠',
    category: 'iot',
    rating: 4.8,
    downloads: 14582,
    version: '2023.7.3',
    maintainer: 'Home Assistant',
    size: '300MB',
    requirements: {
      ram: '2GB',
      storage: '8GB'
    }
  }
];

// Get all apps
router.get('/', (req, res) => {
  res.json(APPS);
});

// Get app by ID
router.get('/:id', (req, res) => {
  const app = APPS.find(a => a.id === req.params.id);
  
  if (!app) {
    return res.status(404).json({ error: 'App not found' });
  }
  
  res.json(app);
});

// Get apps by category
router.get('/category/:category', (req, res) => {
  const categoryApps = APPS.filter(a => a.category === req.params.category);
  res.json(categoryApps);
});

// Search apps
router.get('/search/:term', (req, res) => {
  const term = req.params.term.toLowerCase();
  const results = APPS.filter(app => 
    app.name.toLowerCase().includes(term) || 
    app.description.toLowerCase().includes(term)
  );
  
  res.json(results);
});

module.exports = router; 