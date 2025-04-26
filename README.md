# Inscription Tools - Umbrel Community App Store

This repository contains a Community App Store for Umbrel OS, focusing on Bitcoin Ordinals inscription tools.

## Apps Included

### Inscription Manager
A simple tool to create, view, and manage Bitcoin inscriptions on your Umbrel node.

## Installation

To add this app store to your Umbrel:

1. In your Umbrel OS interface, go to the App Store page
2. Click on "Add Community App Store"
3. Enter the URL of this GitHub repository
4. The store and its apps will be available for installation

## Development

Each app in this store follows the Umbrel app structure:

- `umbrel-app-store.yml` - Defines the app store metadata
- Each app has its own directory with:
  - `umbrel-app.yml` - App metadata
  - `docker-compose.yml` - Container configuration

## Structure

```
.
├── inscript-manager/            # Inscription Manager app
│   ├── docker-compose.yml       # Container configuration
│   ├── umbrel-app.yml           # App metadata
│   └── web/                     # Web app source code
└── umbrel-app-store.yml         # App store metadata
```

## License

See the LICENSE file for details. 