#!/bin/bash

# This file is used to export environment variables that other apps can use
# to connect to your app's services.

# Export the app container IP and port
export ORDINARINOS_IP="$(ip addr show $(ip route | grep default | awk '{print $5}') | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)"
export ORDINARINOS_PORT="3500"

# Connection to Bitcoin node
export BITCOIN_NODE_PORT="${BITCOIN_RPC_PORT}"
export BITCOIN_NODE_USER="${BITCOIN_RPC_USER}"

# Connection to Ordinals node
export ORDINALS_NODE_IP="${APP_ORDINALS_IP}"
export ORDINALS_NODE_PORT="80" 