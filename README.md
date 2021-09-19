# Journey
Journey is a web app that lets users plan their next trip. Features include creating, editing, and deleting personal itineraries with individual items.

![Image 2021-09-16 at 3 29 04 PM](https://user-images.githubusercontent.com/6384642/133943454-abe6d742-a70b-4069-9007-59d40b7a3955.jpg)

Journey was created with <a href="https://reactjs.org/">ReactJS</a> on the frontend, and <a href="https://www.ruby-lang.org/en/">Ruby</a> / <a href="https://rubyonrails.org/">Ruby on Rails</a> in the backend.

<a href="https://journey-itinerary.herokuapp.com/">View the live web app here!</a>

## Get started
after cloning the repo into you system you will need to: 
- make sure your system is running a ruby version 

After clonging the repo, run the following steps in the project directory to get started:

### `bundle install`
Install Ruby gem packages associated with the project.

### `rails db:migrate db:seed`
Migrates all tables and associations that are needed. Also make sure to seed the backend so you have some data to work with.

### `rails s`
Start your Rails server. For a closer look at just the backend, you can open http://localhost:3000

### Create API keys and add a `.env.local`
Our app uses two APIs that need their own private keys.
1. <a href="https://www.mapbox.com/">MapBox</a>
2. <a href="https://locationiq.com/">LocationIQ</a>

Then, create a `.env.local` file inside the client root. Add your API keys with the following prefix:
`REACT_APP_LOCATION_TOKEN=[LocationIQ Key]`
`REACT_APP_MAPBOX_TOKEN=[MapBox Key]`

### `npm start --prefix client`
Runs the app in the development mode. 

### `npm test --prefix client`
Launches the test runner in the interactive watch mode. See the section about running tests for more information. Open http://localhost:4000 to view it in the browser.

## Features
1. User can create an account
2. User can login to an existing account
3. User can create a new itinerary with many itinerary items
4. User can edit and delete existing itineraries and itinerary items
5. User can change their profile settings

## Contributors
### Joe Christensen
Github: <a href="https://github.com/ChristensenJoe">ChristensenJoe</a>
<!-- Email: <a href="mailto:jyk595@gmail.com">jyk595@gmail.com</a> -->

### Isaac Segovia
Github: <a href="https://github.com/IsaacCodes2021">IsaacCodes2021</a>
<!-- Email: <a href="mailto:jyk595@gmail.com">jyk595@gmail.com</a> -->

### John Kim
Github: <a href="https://github.com/jyk595">jyk595</a>
Email: <a href="mailto:jyk595@gmail.com">jyk595@gmail.com</a>
