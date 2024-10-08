# Mantra Counter

## Overview

The Mantra Counter is a simple mobile application built using React Native that helps users track their mantra repetitions. This app is designed to encourage mindfulness and meditation practices by allowing users to easily increment their mantra counts, set targets, and receive notifications when they reach their goals.

## Features

- **Increment Counter**: Users can increase the mantra count by pressing a large button.
- **Reset Functionality**: A reset button sets the counter back to zero.
- **Target Setting**: Users can set a target for mantra repetitions (e.g., 108) and receive notifications (vibration/sound) when the target is reached.
- **Data Persistence**: The current counter and target values are stored using AsyncStorage, ensuring data persists even after closing the app.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheCoderAdi/MantraCounter-Internship-Project
   ```
2. Navigate to the project directory:
   ```bash
   cd MantraCounter-Internship-Project
   ```
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   ```

## Usage

1. Open the app on your mobile device.
2. Press the increment button to increment the mantra count.
3. Use the reset button to set the counter back to zero.
4. To set a target, use the target setting button and enter your desired number of repetitions.
5. Once the target is reached, you will receive a notification (vibration/sound) to indicate completion.

## Technologies Used

- **React Native**: For building the mobile application.
- **AsyncStorage**: For data persistence.
- **TypeScript**: For application logic and functionality.

## Challenges Faced

- Implementing data persistence with AsyncStorage.
- Ensuring smooth user experience and responsiveness across different screen sizes.

## License

This project is licensed under the MIT License.

## Acknowledgements

Thank you for the opportunity to work on this assignment. I look forward to any feedback you may have!

**Submission Deadline**: October 11, 2024
