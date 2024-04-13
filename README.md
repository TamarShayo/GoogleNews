# Google News Web Application

This web application displays news topics from the RSS feed of Google News. Clicking on each topic will display its title, body, and link.

## Features

- **RSS Feed Storage:** The RSS feed is stored in the HttpCache for efficient retrieval.
- **Repeater Control:** All news topics are rendered using the Repeater control for easy management and display.
- **Ajax Implementation:** Displaying the body of the post is implemented using Ajax for seamless user experience.
- **Clean and Readable Code:**
  - Code is properly commented following coding standards.
  - Layers separation is achieved with clear separation between UI and DAL.
- **External Libraries:** External JS libraries like jQuery are used for enhanced functionality.

## Application Structure

- **UI Layer:** Contains the web pages and user interface elements.
- **DAL Layer:** Manages data access and manipulation.
- **CSS:** External CSS files for styling.
- **JavaScript:** External JavaScript files for client-side functionality.
- **Images:** Image assets used in the application.

## Usage

1. Clone the repository to your local machine.
2. Open the solution in Visual Studio.
3. Build and run the application.
4. Navigate to the news page to view the latest topics from Google News.
5. Click on each topic to view its details including title, body, and link.

## Technologies Used

- ASP.NET Web Forms: Used for building the web application.
- C#: Programming language for backend logic.
- Ajax: Used for asynchronous communication between the client and server.
- jQuery: External library for enhanced client-side scripting.
- **Microsoft.Extensions.Caching.Memory:** Used for caching the RSS feed data in memory for efficient retrieval.
- HTML/CSS: Markup and styling for the web pages.
- HttpCache: Storage mechanism for caching the RSS feed.
