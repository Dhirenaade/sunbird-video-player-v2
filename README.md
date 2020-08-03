![Sunbird-Video-Player](https://github.com/rahulshukla/sunbird-video-player-v2/workflows/Sunbird-Video-Player/badge.svg)

# SunbirdVideoPlayer

  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

  

## Common angular components for Sunbird Video Player!

  

This library provides an embeddable video viewer component 

  

### Getting Started

  

###### Step 1 : Clone the Project and install necessary dependencies of the Project by following steps:

  

npm install

  

###### Step 2 : Run ng build to build the library. [ For development you can skip this step and follow step 3]

    ng build

The build artifacts will be stored in the dist/video-player-v2.

### Using the Sunbird-video-Player for development

    ng serve [will deploy the video player demo app http://localhost:4000]

Directory Structure : 
 - video-player-v2. [ Sunbird video player library ]
 - Demo. [ Sample integrated angular app with video player library ]

### Using the Sunbird-video-Player in your Project

For help getting started with a new Angular app, check out the Angular CLI.

For existing apps, follow these steps to begin using .
###### Step 1: Install the following packages

    npm install sunbird-video-player-v2. [WIP]


###### Step 2: Import the modules and components

Import the NgModule for each component you want to use:

  

    import { VideoPlayerV2Module } from 'video-player-v2';
    @NgModule({
    ...
    imports: [ VideoPlayerV2Module,
    CarouselModule.forRoot()],
    ...
    })
    export class TestAppModule { }

 
# How to use video player

In your component template add below placeholder 

   <sb-video-viewer></sb-video-viewer>


  
## Input for library [ WIP ]
  

## Output from library [WIP]