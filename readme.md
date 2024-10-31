
# Cultural Tour Guide

**Cultural Tour Guide** is a web application that serves as an interactive tool for exploring various cities, learning about popular destinations, and discovering key phrases in Hebrew, Arabic, and English. The app provides an engaging experience through city descriptions, a memory card game, and an embedded Google Maps feature to make travel planning more immersive and enjoyable.

## Features

### 1. Main Page
- Displays a collection of **city cards**, each representing a unique location.
- Includes a **toggle button** to show/hide cities on Google Maps.

### 2. Interactive Google Maps
- Uses the **Google Maps API** to place markers on city locations.
- Each marker, when clicked, shows a **popup card** with details about the city.
- A **"View" button** opens a description page, highlighting key information about the city and its **top three popular places**.

### 3. Memory Card Game
- Provides a **memory card game** for each city, offering levels of difficulty:
  - **Easy**
  - **Medium**
  - **Hard**

### 4. Language Dictionary
- Includes a dictionary to learn popular words in **Hebrew, Arabic, and English**.
- Aimed at helping users connect better with the language and culture of each destination.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: [Specify backend technology here]
- **Google Maps API**: For interactive map integration

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```
2. Navigate to the project directory:
   ```bash
   cd cultural-tour-guide
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure your Google Maps API key:
   - Obtain a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/).
   - Add the API key to your `.env` file or directly in the JavaScript file where the map is initialized.

5. Start the application:
   ```bash
   npm start
   ```

## Usage
1. **Navigate to the main page** to view all available cities.
2. Use the **toggle button** to display or hide cities on the map.
3. Click on any **map marker** to learn more about the city.
4. **Play the memory card game** by selecting a city and choosing your preferred difficulty level.
5. Explore the **language dictionary** to familiarize yourself with popular terms in different languages.

## Contributing
If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request.

## License
This project is licensed under the MIT License.
