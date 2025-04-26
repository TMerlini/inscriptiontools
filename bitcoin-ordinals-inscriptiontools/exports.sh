#!/bin/bash

# This file is used to export environment variables that other apps can use
# to connect to your app's services.

# Export the app container IP and port
export INSCRIPTION_TOOLS_IP="$(ip addr show $(ip route | grep default | awk '{print $5}') | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)"
export INSCRIPTION_TOOLS_PORT="3000"

# Example of how to export a value from docker-compose environment variables
export BITCOIN_NODE_PORT="${BITCOIN_RPC_PORT}"
export BITCOIN_NODE_USER="${BITCOIN_RPC_USER}" 