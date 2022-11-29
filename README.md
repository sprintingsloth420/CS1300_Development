# Development

### Link to Deployed Website
https://sprintingsloth420.github.io/CS1300_Development/

### Goal and Value of the Application
This website displays 12 of my personal favorite artworks including pictures, basic information, and a short description of what I like about the artwork. The user can sort the artworks by year of production and dimension and filter by media and the current location of the artwork. The user can also bookmark artworks that they like. 

This website hence serves as a prototype and can be further developed so that the user may, for example, look for their paintings that they can go and see in different countries, sorted and filtered according to their preference.

### Usability Principles Considered
The website has a clear layout, where all the control panels are on the left and the items are listed on the right. The title of each artwork has a different font weight and size, creating a hiearchy in texts. The buttons are emphasized with a different color.

### Organization of Components
There are five components in total. Four of them are control panels, including the Sort panel, the Filter1 and Filter2 panels, and the aggregate Boookmark panel. The other componenet is GalleryItem for each of the artworks displaying a picture, information, and a bookmark button.

### How Data is Passed Down Through Components
All states are initialized in App.js. The state variables and the useState functions are then passed into the corresponding component as props. The state variables themselves are updated in each of the components - more specifically, one sort and two filter state variables are updated in the corresponding components, and the aggregator state variables are updated in the corresponding GalleryItem component. Then the functions that handle the changes in state variables are in App.js. For example, the matchesSort function sorts GalleryData according to the updated sort state variable, and the matchesType function filters GalleryData according to the updated filter state variables. The updated aggregator state variables are passed into the aggregate Bookmark component in App.js too.

### How the User Triggers State Changes

