# Rick & Morty API Character Explorer

## Overview

This project is a web application that fetches and displays characters from the Rick & Morty API. It allows users to filter characters based on their status (Alive, Dead, Unknown) and sort them by name or date created. The application aims to provide a user-friendly interface for exploring characters from the popular animated series.

## Features

- Fetch and display characters from the Rick & Morty API
- Sorting options: by Name (A-Z) or Date Created (Newest to Oldest)
- Filtering options: by character status (Alive, Dead, Unknown)


## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BlakeCaraballo/RickAndMortyAPI.git
   cd RickAndMortyAPI
   npm install
   npm run dev

##Approach
The application was built using React, leveraging functional components and hooks (such as useState and useEffect) to manage state and side effects. The following steps outline the approach taken:

API Integration: Implemented API calls to fetch character data from the Rick & Morty API, using asynchronous functions to handle data retrieval.
State Management: Utilized useState to manage sorting and filtering options, as well as loading and error states.
Rendering Components: Created a Card component to display character details and a DataSection component to handle sorting, filtering, and displaying the list of characters.

##Challenges

State Management: Balancing sorting and filtering functionality while ensuring that the UI remains responsive was tricky. The use of useMemo helped optimize performance.

##Extras Implemented

Responsive Design: Ensured that the layout adapts well to different screen sizes for a better user experience.
Custom Styles: Implemented custom CSS for a unique look, using CSS modules to scope styles.




