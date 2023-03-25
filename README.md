# Tailwind Assessment

> An assessment for Tailwind Scientific that plots a few airports in Canada and planes that are flying to and from those airports.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

As part of an interview assessment for Tailwind Scientific I was asked to connect to their API and plot some live and static data to a map. It was my first time building anything with Angular, and I learned on the fly! My biggest roadblock was actually the Typescript that I obviously need more practice with! It I used [Leftlet](https://leafletjs.com/) with [Open Street Map](https://www.openstreetmap.org/#map=5/53.357/-94.878) to create the map.

## Tech Stack

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

![Angular](https://img.shields.io/badge/Angular-DD0031.svg?style=for-the-badge&logo=Angular&logoColor=white)

![Leaflet](https://img.shields.io/badge/Leaflet-199900.svg?style=for-the-badge&logo=Leaflet&logoColor=white)
![Open Street Map](https://img.shields.io/badge/OpenStreetMap-7EBC6F.svg?style=for-the-badge&logo=OpenStreetMap&logoColor=white)

## Features

Map:

![Finished Product](/src/images/finished.png "Home Page")
The blue pins are the locations of the airports provided by the API.
The green circles are planes in flight with locations given by the API. These locations are live and change with every refresh.
As an added feature, the small blue dots are the capital cities of the Canadian provinces.

Close Up:

![Home Page](/src/images/zoom.png "Home Page")
Close up view.

## Setup

### Available Commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artefacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Status

Status: Complete

## Room for Improvement

Improvement Thoughts:

The project is finished as requested by Tailwind, but to spice things up a little I'd like to figure out how to change the markers to icons and change the flight icons to plans. I'd like to change the displayed data to map layers so you can show selected information. I'd like to implement a refresh button.
and I'd like to display a detailed list of the current flights. As part of these improvements, there are some currently unused components and styling that have been created with the hopes of continuing to build the app.

I have left a few TODO notes around the app to help me remember all these things.

To do:

- [ ] change flight markers
- [ ] create layers for the map
- [ ] create list of current flights
- [ ] automatic refresh button

## Acknowledgements

Many thanks to [Brad Traversy](https://traversymedia.com) for his easy to follow [Angular tutorial](https://www.youtube.com/watch?v=3dHNOWTI7H8). Thanks also to Chris Engelsma for their [two part Angular + Leaflet guide](https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service) which a was big help displaying the map, connecting Leaflet to the API and displaying the response data.

## Contact

Created by [@azulverdosa](ellemocambo@gmail.com) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ "linked")

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## Licence

MIT Licence Copyright (c) [2023] [AvaElise]
