import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Heading, 
  Input, 
  InputGroup, 
  InputLeftElement,
  Spinner,
  Text,
  Center
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';

// This would normally come from an API call
const MOCK_APPS = [
  {
    id: 'bitcoin-node',
    name: 'Bitcoin Node',
    description: 'Run a full Bitcoin node',
    icon: '₿',
    category: 'cryptocurrency',
    rating: 4.8,
    downloads: 15243
  },
  {
    id: 'lightning-network',
    name: 'Lightning Network',
    description: 'Fast Bitcoin payments',
    icon: '⚡',
    category: 'cryptocurrency',
    rating: 4.6,
    downloads: 8721
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    description: 'Self-hosted productivity platform',
    icon: '☁️',
    category: 'productivity',
    rating: 4.7,
    downloads: 12385
  },
  {
    id: 'pihole',
    name: 'Pi-hole',
    description: 'Network-wide ad blocking',
    icon: '🕳️',
    category: 'utilities',
    rating: 4.9,
    downloads: 18462
  },
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    description: 'Media system',
    icon: '🎞️',
    category: 'media',
    rating: 4.5,
    downloads: 9852
  },
  {
    id: 'homeassistant',
    name: 'Home Assistant',
    description: 'Home automation',
    icon: '🏠',
    category: 'iot',
    rating: 4.8,
    downloads: 14582
  }
];

function Homepage() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setApps(MOCK_APPS);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Heading mb={4}>Community Apps</Heading>
      
      <InputGroup mb={6}>
        <InputLeftElement pointerEvents="none">
          🔍
        </InputLeftElement>
        <Input 
          placeholder="Search apps..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {loading ? (
        <Center h="300px">
          <Spinner size="xl" />
        </Center>
      ) : filteredApps.length > 0 ? (
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {filteredApps.map(app => (
            <Link to={`/app/${app.id}`} key={app.id}>
              <AppCard app={app} />
            </Link>
          ))}
        </Grid>
      ) : (
        <Center h="300px">
          <Text>No apps found matching "{searchTerm}"</Text>
        </Center>
      )}
    </Box>
  );
}

export default Homepage; 