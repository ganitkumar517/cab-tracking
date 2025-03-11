# Cab Tracking System

## Overview
This project is a real-time cab tracking system built using React, WebSockets, and Google Maps API. The system displays available cabs on a map and provides detailed information about drivers, passengers, and ride details when a cab is selected.

## Features
- **Real-time Cab Location Tracking**: Uses WebSockets to fetch cab location updates.
- **Google Maps Integration**: Displays cabs on a map with interactive markers.
- **Cab & Passenger Details**: Shows driver and passenger information in a drawer when a cab is selected.
- **Dynamic WebSocket Server**: Provides mock cab data and updates locations in real time.

## Technologies Used
- **Frontend**:
  - React.js
  - Google Maps API
  - Material UI (MUI)
  - Tailwind CSS
  - WebSockets
- **Backend**:
  - Node.js
  - WebSocket Server

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>=16.0.0)
- npm or yarn
- Google Maps API Key

### Steps to Run the Project

#### 1. Clone the repository
```sh
 git clone <repo-url>
 cd cab-tracking-system
```

#### 2. Install dependencies
```sh
 npm install
 # or
 yarn install
```

#### 3. Set up environment variables
Create a `.env` file in the root directory and add:
```sh
REACT_APP_GOOGLE_API_KEY=your_google_maps_api_key
```

#### 4. Start the WebSocket Server
```sh
 node server.js
```

#### 5. Start the React App
```sh
 npm start
 # or
 yarn start
```

## Usage
1. Open the app in the browser.
2. Wait for the cabs to appear on the Google Map.
3. Click on a cab to view its details in the drawer.
4. Use the close button to hide the drawer.

# Start Generation Here
## Deployed Details

- WebSocket API: [https://cab-tracking.onrender.com](https://cab-tracking.onrender.com) - This is the WebSocket server that provides real-time updates for the cabs.

- React App: [https://cab-tracking.vercel.app](https://cab-tracking.vercel.app) - This is the deployed React application that allows users to track cabs on a Google Map interface.

# End Generation Here


## Author
Ganit kumar

