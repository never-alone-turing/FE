<h2 align="center">Never Alone</h2>
<p align="center">
  <a href='https://github.com/never-alone-turing'><strong>Repo Link</strong></a>
  <br />
  A Turing School Mod 4 Project
</p>

[![Contributors][contributors-shield]](https://github.com/never-alone-turing/FE/graphs/contributors)
[![Forks][forks-shield]](https://github.com/never-alone-turing/FE/network/members)
[![Issues][issues-shield]](https://github.com/never-alone-turing/FE/issues)
[![Stars][stars-shield]](https://github.com/never-alone-turing/FE)


# About The Project

Never Alone is an application that allows people to check in on each other. The target audience is people caring for someone who is elderly or who is living with a disability, but it could also be utilized for anyone who wants to be able to check in on a friend or family member.

The aim of the application is to allow a user to quickly check in on how someone is doing, and if they have remembered a task such as taking medications, without being intrusive. Users can set times for check-ins and see if they are accomplished within a set time each day simply by checking their screen at any time.

This was a group project for the Turing School of Software and Design. The Front End of the project is being discussed here, while more insight into the backend experience can be seen on [the separate repository](https://github.com/never-alone-turing/never_alone_be). We were able to select a project we wished to work on from suggestions put forward by our peers. The idea for this project came from Ian Holliday, who is one of the developers for the project. Since this application seems best suited to be used from a phone or mobile device, we chose to work with React Native and Expo, which were new technologies for everyone on the team.

## Endpoint
With this project, we utilized GraphQL and in such, only needed to utilize one end point.

`"https://never-alone-backend.herokuapp.com/graphql"`

Our backend team set up their own server and provided thus provided us with this endpoint. If you would like to checkout the backend repo you can check it out [here!](https://github.com/never-alone-turing/never_alone_be)

## Built with

  - JavaScript
  - React
  - React Native
  - Expo
  - Babel

## Installation

It should be noted that to run this project locally you will need to install the [xcode cli](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d)

* note: this was difficult for us when we were getting started. Because React-Native is a newer technology, it seems that there is less documentation around trouble shooting. 

After installing the xcode cli you will need to download an emulator; [Android](https://developer.android.com/studio) [iOS](https://developer.apple.com/xcode/)
Or you can use the Expo app on your phone <= Recommended 

In your terminal:

1. Clone the repo: `git clone https://github.com/never-alone-turing/FE.git`
2. Install NPM packages: `npm install`
3. If you are using Expo: `expo start` to open whichever simulator you prefer, or run `npm start` to open in your browser.

If you are using the Expo app, a QR code will display, that can be scanned to open the app on your phone.

If you are using an Android simulator, you will need to have Android Studio downloaded on your computer. If you are using a MAC, you will need to have XCode downloaded to use the Iphone simulator.

## Using The App

The landing page of this app allows the user to choose their role as either the caretaker or the care receiver. 

![Screen Shot 2021-01-14 at 1 42 14 PM](https://user-images.githubusercontent.com/65988644/104634197-50fbc280-566e-11eb-93dc-c66e2afdfb05.png)

As caretaker, the user has the ability to add, remove, and view tasks that the user should complete throughout that day. The status of each task reflects whether or not that task has been completed by the care receiver.

![Screen Shot 2021-01-14 at 1 48 49 PM](https://user-images.githubusercontent.com/65988644/104634913-3c6bfa00-566f-11eb-92b9-f336cb8a62b5.png) ![Screen Shot 2021-01-14 at 1 51 33 PM](https://user-images.githubusercontent.com/65988644/104635235-9e2c6400-566f-11eb-82f9-3d89f42d657b.png)

As the care receiver, the user can view their tasks for the day and mark them as complete by holding down the button. This mode of communication allows the caretaker to guide the receiver without any loss of autonomy. 

![Screen Shot 2021-01-14 at 1 56 04 PM](https://user-images.githubusercontent.com/65988644/104635669-404c4c00-5670-11eb-81d6-f1e802cdd5ba.png) ![Screen Shot 2021-01-14 at 1 56 23 PM](https://user-images.githubusercontent.com/65988644/104635711-4b06e100-5670-11eb-95b4-3ba3a22803af.png)



## Successes and Challenges

* Creating an app based on a student idea
   * Most of our projects have very specific learning goals and end product expectations. This assignment required us to set goals on our own, and allowed us to experience the entire process of creating an app.
* Learning a new framework
   * While React is part of the Turing curriculum, no one on the team had used ReactNative before. Learning this new technology and using expo was a difficult process.
   * Using a new framework meant that we were unable to utilize the dev tools that we have grown accustomed to. 
* Increased understanding of asynchronous git workflow
   * Each member of the team lives in a different time zone, so we learned how to be flexible and considerate in terms of scheduling.
* Learning more about how styling affects accessibility
   * In order to build an accessible app, we had to consider cognition, physical differences, independence, and motor skills while building out functionality and determining the user experience. 
* Deployment and Continuous Integration
   * At the beginning of our process, we learned that there would be certain challenges when it came to deploying the app. As a team, we decided to prioritize other goals that could be met realistically given our time frame.  


## Moving Forward

While we as a team are satisfied with the MVP we produced for this assignment, we have discussed continuing our progress in the future. Potential changes include the following extentions:
* deploying the application to app stores
* increasing accessibility (i.e. adding accessibility labels, considering screenreaders and other tools)
* further styling to account for text length
* creating accounts so that multiple families and groups can use Never Alone
* the ability to send a link to the receiver that automatically logs them into the app

## Contact

[Ian Holladay - Developer](https://github.com/holladayian)

[Kathryn Jackson - Developer](https://github.com/kathrynljackson)

[Naomi Ware - Developer](https://github.com/nware1066)

### Our Backend Team!!

- [Saryn Mooney](https://github.com/sarynm12)
- [Daniel Lessenden](https://github.com/D-Lessenden)
- [Nico Rithner](https://github.com/nicorithner)

[Backend Repo](https://github.com/never-alone-turing/never_alone_be)

[contributors-shield]: https://img.shields.io/github/contributors/never-alone-turing/FE.svg?style=flat-square
[contributors-url]: https://github.com/holladayian/never-alone-turing/FE
[forks-shield]: https://img.shields.io/github/forks/never-alone-turing/FE.svg?style=flat-square
[forks-url]: https://github.com/never-alone-turing/FE/network/members
[stars-shield]: https://img.shields.io/github/stars/never-alone-turing/FE.svg?style=flat-square 
[stars-url]: https://github.com/never-alone-turing/FE/stargazers
[issues-shield]: https://img.shields.io/github/issues/never-alone-turing/FE.svg?style=flat-square
[issues-url]: https://github.com/never-alone-turing/FE/issues
[product-screenshot]: images/screenshot.png
