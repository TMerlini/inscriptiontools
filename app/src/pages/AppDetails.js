import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Badge,
  Spinner,
  Center,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  useToast,
  Alert,
  AlertIcon
} from '@chakra-ui/react';

function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installing, setInstalling] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [installError, setInstallError] = useState(null);

  // In a real app, these functions would make API calls to your backend
  useEffect(() => {
    // Simulate API call to fetch app details
    setTimeout(() => {
      // This is mocked data - in a real app you would fetch from your API
      const mockApp = {
        id: id,
        name: id === 'bitcoin-node' ? 'Bitcoin Node' : 
              id === 'lightning-network' ? 'Lightning Network' :
              id === 'nextcloud' ? 'Nextcloud' :
              id === 'pihole' ? 'Pi-hole' :
              id === 'jellyfin' ? 'Jellyfin' :
              id === 'homeassistant' ? 'Home Assistant' : 'Unknown App',
        description: id === 'bitcoin-node' ? 'Run a full Bitcoin node' :
                    id === 'lightning-network' ? 'Fast Bitcoin payments' :
                    id === 'nextcloud' ? 'Self-hosted productivity platform' :
                    id === 'pihole' ? 'Network-wide ad blocking' :
                    id === 'jellyfin' ? 'Media system' :
                    id === 'homeassistant' ? 'Home automation' : 'Description unavailable',
        icon: id === 'bitcoin-node' ? '₿' :
              id === 'lightning-network' ? '⚡' :
              id === 'nextcloud' ? '☁️' :
              id === 'pihole' ? '🕳️' :
              id === 'jellyfin' ? '🎞️' :
              id === 'homeassistant' ? '🏠' : '📦',
        category: id === 'bitcoin-node' || id === 'lightning-network' ? 'cryptocurrency' :
                  id === 'nextcloud' ? 'productivity' :
                  id === 'pihole' ? 'utilities' :
                  id === 'jellyfin' ? 'media' :
                  id === 'homeassistant' ? 'iot' : 'other',
        rating: 4.7,
        downloads: 12500,
        version: '1.0.0',
        maintainer: 'Community',
        size: '200MB',
        requirements: {
          ram: '2GB',
          storage: '10GB'
        },
        screenshots: [],
        longDescription: 'This is a longer description of the application that goes into more detail about features and capabilities.'
      };
      
      setApp(mockApp);
      // Check if installed (mock data)
      setIsInstalled(Math.random() > 0.7); // Randomly determine if installed
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleInstall = () => {
    setInstalling(true);
    setInstallError(null);
    
    // Simulate installation API call
    setTimeout(() => {
      // 80% success rate for demo purposes
      if (Math.random() > 0.2) {
        setIsInstalled(true);
        toast({
          title: 'App installed',
          description: `${app.name} has been successfully installed.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        setInstallError('Failed to install the app. Please try again.');
        toast({
          title: 'Installation failed',
          description: 'There was an error installing the app.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
      setInstalling(false);
    }, 3000);
  };

  const handleUninstall = () => {
    setInstalling(true);
    
    // Simulate uninstallation API call
    setTimeout(() => {
      setIsInstalled(false);
      toast({
        title: 'App uninstalled',
        description: `${app.name} has been successfully uninstalled.`,
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
      setInstalling(false);
    }, 2000);
  };

  if (loading) {
    return (
      <Center h="300px">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!app) {
    return (
      <Box>
        <Heading>App Not Found</Heading>
        <Text mt={4}>The app you're looking for could not be found.</Text>
        <Button mt={4} onClick={() => navigate('/')}>Back to Home</Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button mb={4} onClick={() => navigate(-1)} size="sm">
        ← Back
      </Button>
      
      <Flex mb={6}>
        <Box 
          fontSize="5xl" 
          bg="blue.100" 
          p={4} 
          borderRadius="md" 
          width="80px" 
          height="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {app.icon}
        </Box>
        <Box ml={5}>
          <Heading>{app.name}</Heading>
          <Badge colorScheme="blue" mb={2}>{app.category}</Badge>
          <Text color="gray.600">{app.description}</Text>
        </Box>
      </Flex>

      {installError && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {installError}
        </Alert>
      )}
      
      <Flex mb={8} justify="flex-start">
        {isInstalled ? (
          <Button 
            colorScheme="red" 
            isLoading={installing}
            loadingText="Uninstalling"
            onClick={handleUninstall}
          >
            Uninstall
          </Button>
        ) : (
          <Button 
            colorScheme="blue" 
            isLoading={installing}
            loadingText="Installing"
            onClick={handleInstall}
          >
            Install
          </Button>
        )}
      </Flex>
      
      <Divider mb={6} />
      
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5} mb={8}>
        <Stat>
          <StatLabel>Version</StatLabel>
          <StatNumber>{app.version}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Size</StatLabel>
          <StatNumber>{app.size}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Maintainer</StatLabel>
          <StatNumber>{app.maintainer}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Downloads</StatLabel>
          <StatNumber>{app.downloads.toLocaleString()}</StatNumber>
        </Stat>
      </SimpleGrid>
      
      <Box mb={8}>
        <Heading size="md" mb={3}>Requirements</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box p={3} bg="gray.50" borderRadius="md">
            <Text fontWeight="bold">RAM:</Text> {app.requirements.ram}
          </Box>
          <Box p={3} bg="gray.50" borderRadius="md">
            <Text fontWeight="bold">Storage:</Text> {app.requirements.storage}
          </Box>
        </SimpleGrid>
      </Box>
      
      <Box>
        <Heading size="md" mb={3}>Description</Heading>
        <Text>{app.longDescription}</Text>
      </Box>
    </Box>
  );
}

export default AppDetails; 