import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  // Container GlobalStyles
  container: {
    flex: 1, // Makes the container fill the available space
    padding: 16, // Adds padding inside the container
    backgroundColor: '#f0f0f0', // Sets a light gray background color
  },

  // Text GlobalStyles
  heading: {
    fontSize: 24, // Large font size for headings
    fontWeight: 'bold', // Bold text
    color: '#333', // Dark gray text color
    marginBottom: 12, // Space below the heading
  },
  subheading: {
    fontSize: 18, // Medium font size for subheadings
    fontWeight: '600', // Semi-bold text
    color: '#555', // Medium gray text color
    marginBottom: 8, // Space below the subheading
  },
  bodyText: {
    fontSize: 14, // Standard font size for body text
    color: '#666', // Light gray text color
    lineHeight: 20, // Increases line height for better readability
  },

  // Button GlobalStyles
  button: {
    backgroundColor: '#007BFF', // Blue background color
    paddingVertical: 12, // Vertical padding inside the button
    paddingHorizontal: 24, // Horizontal padding inside the button
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    marginVertical: 10, // Vertical margin around the button
  },
  buttonText: {
    fontSize: 16, // Font size for button text
    color: '#FFF', // White text color
    fontWeight: '600', // Semi-bold text
  },

  // Input GlobalStyles
  input: {
    height: 40, // Fixed height for input fields
    borderColor: '#ccc', // Light gray border color
    borderWidth: 1, // Border width
    borderRadius: 4, // Rounded corners
    paddingHorizontal: 10, // Horizontal padding inside the input
    marginVertical: 10, // Vertical margin around the input
    backgroundColor: '#FFF', // White background color
  },

  // Image GlobalStyles
  image: {
    width: '100%', // Full width of the container
    height: 200, // Fixed height for the image
    borderRadius: 10, // Rounded corners
    marginBottom: 16, // Space below the image
  },

  // Flexbox utilities
  row: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space between items
    marginVertical: 10, // Vertical margin around the row
  },
  column: {
    flexDirection: 'column', // Vertical layout
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    marginVertical: 10, // Vertical margin around the column
  },

  // Utility GlobalStyles
  center: {
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
  },
  spacer: {
    marginVertical: 10, // Vertical margin for spacing
  },
  textCenter: {
    textAlign: 'center', // Center text horizontally
  },
});

export default GlobalStyles;
