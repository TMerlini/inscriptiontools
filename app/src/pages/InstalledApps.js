import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Spinner,
  Center,
  SimpleGrid,
  Flex,
  Button,
  Alert,
  AlertIcon,
  useToast
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function InstalledApps() {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  // Mock data for installed apps
  const MOCK_INSTALLED_APPS = [
    {
      id: 'bitcoin-node',
      name: 'Bitcoin Node',
      description: 'Run a full Bitcoin node',
      icon: '₿',
      version: '1.0.0',
      installedAt: '2023-07-15T10:30:00Z',
      status: 'running'
    },
    {
      id: 'nextcloud',
      name: 'Nextcloud',
      description: 'Self-hosted productivity platform',
      icon: '☁️',
      version: '25.0.3',
      installedAt: '2023-08-02T14:45:00Z',
      status: 'running'
    },
    {
      id: 'pihole',
      name: 'Pi-hole',
      description: 'Network-wide ad blocking',
      icon: '🕳️',
      version: '5.14.2',
      installedAt: '2023-06-20T09:15:00Z',
      status: 'running'
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch installed apps
    setTimeout(() => {
      try {
        setInstalledApps(MOCK_INSTALLED_APPS);
        setLoading(false);
      } catch (err) {
        setError('Failed to load installed apps');
        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleUninstall = (appId) => {
    // Simulate uninstallation process
    setInstalledApps(prevApps => 
      prevApps.map(app => 
        app.id === appId 
          ? { ...app, status: 'uninstalling' } 
          : app
      )
    );
    
    // Simulate API call for uninstallation
    setTimeout(() => {
      setInstalledApps(prevApps => prevApps.filter(app => app.id !== appId));
      
      toast({
        title: 'App uninstalled',
        description: 'The app has been successfully removed.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  const handleStop = (appId) => {
    // Simulate stopping the app
    setInstalledApps(prevApps => 
      prevApps.map(app => 
        app.id === appId 
          ? { ...app, status: 'stopping' } 
          : app
      )
    );
    
    // Simulate API call for stopping
    setTimeout(() => {
      setInstalledApps(prevApps => 
        prevApps.map(app => 
          app.id === appId 
            ? { ...app, status: 'stopped' } 
            : app
        )
      );
      
      toast({
        title: 'App stopped',
        description: 'The app has been successfully stopped.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }, 1500);
  };

  const handleStart = (appId) => {
    // Simulate starting the app
    setInstalledApps(prevApps => 
      prevApps.map(app => 
        app.id === appId 
          ? { ...app, status: 'starting' } 
          : app
      )
    );
    
    // Simulate API call for starting
    setTimeout(() => {
      setInstalledApps(prevApps => 
        prevApps.map(app => 
          app.id === appId 
            ? { ...app, status: 'running' } 
            : app
        )
      );
      
      toast({
        title: 'App started',
        description: 'The app has been successfully started.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }, 1500);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <Center h="300px">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  return (
    <Box>
      <Heading mb={6}>Installed Applications</Heading>
      
      {installedApps.length === 0 ? (
        <Box p={6} textAlign="center" bg="gray.50" borderRadius="md">
          <Text mb={4}>You don't have any applications installed yet.</Text>
          <Button as={Link} to="/" colorScheme="blue">
            Browse Apps
          </Button>
        </Box>
      ) : (
        <SimpleGrid spacing={6} columns={{ base: 1, lg: 1 }}>
          {installedApps.map(app => (
            <Box 
              key={app.id}
              p={5}
              borderWidth="1px"
              borderRadius="lg"
              bg="white"
              boxShadow="sm"
            >
              <Flex justify="space-between" align="center">
                <Flex align="center">
                  <Box 
                    fontSize="3xl" 
                    bg="blue.100" 
                    p={2} 
                    borderRadius="md" 
                    width="48px" 
                    height="48px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mr={4}
                  >
                    {app.icon}
                  </Box>
                  
                  <Box>
                    <Heading size="md">{app.name}</Heading>
                    <Text color="gray.600" fontSize="sm">{app.description}</Text>
                    <Text mt={1} fontSize="xs">
                      Installed on: {formatDate(app.installedAt)}
                    </Text>
                  </Box>
                </Flex>
                
                <Box>
                  <Flex direction="column" align="flex-end">
                    <Box mb={3}>
                      <Badge 
                        colorScheme={
                          app.status === 'running' ? 'green' : 
                          app.status === 'stopped' ? 'gray' :
                          app.status === 'stopping' || app.status === 'starting' || app.status === 'uninstalling' ? 'yellow' : 'red'
                        }
                        p={1}
                        borderRadius="md"
                      >
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </Badge>
                    </Box>
                    <Flex>
                      {app.status === 'running' && (
                        <Button 
                          size="sm" 
                          mr={2} 
                          onClick={() => handleStop(app.id)}
                          isDisabled={app.status === 'stopping' || app.status === 'starting' || app.status === 'uninstalling'}
                        >
                          Stop
                        </Button>
                      )}
                      {app.status === 'stopped' && (
                        <Button 
                          size="sm" 
                          mr={2} 
                          onClick={() => handleStart(app.id)}
                          colorScheme="blue"
                          isDisabled={app.status === 'stopping' || app.status === 'starting' || app.status === 'uninstalling'}
                        >
                          Start
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        colorScheme="red" 
                        variant="outline"
                        onClick={() => handleUninstall(app.id)}
                        isDisabled={app.status === 'stopping' || app.status === 'starting' || app.status === 'uninstalling'}
                      >
                        {app.status === 'uninstalling' ? 'Uninstalling...' : 'Uninstall'}
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default InstalledApps; 