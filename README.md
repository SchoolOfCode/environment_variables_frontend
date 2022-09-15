![Project Clean-Up](https://user-images.githubusercontent.com/98705391/184337846-b06b80b3-98d3-40b4-912b-dc429ad54f72.png)
# Welcome To Project Clean-up
This is the repository for the front end of Project Clean-up, an app created as a final project in the [School of Code's](https://www.schoolofcode.co.uk/) Bootcamp 12 (25 April - 16 August 2022). If you'd like to see the back-end, please check out the [git repository](https://github.com/SchoolOfCode/environment_variables_backend).

Deployed on vercel: https://projectcleanup.netlify.app/

![Earth, map, and map marker emojis](https://user-images.githubusercontent.com/98705391/184339535-2eb89ee6-2c6b-4376-baf3-2f5c4720e582.png)

### 🤔 **The Problem** 
Pollution and litter is a growing environmental crisis. Animals can choke on or ingest litter, suffocate in plastic bags, get entangled in elastics and plastics, or suffer injuries from discarded glass, metals and hooks. It can also present a danger to plant life, with flammable materials presenting a fire hazard, leak contaminants which can damage plants and inhibit their growth, or reduce light availability and moisture. 

### 🧠 **Our Solution** 
Our aim is to help protect the wildlife and beauty of our green spaces by reducing litter and so the hazards it presents. Project Clean-Up is a full-stack app which enables people to join and create litter clean-up events in their communities—or further afield, if that's what takes their fancy! 

### 🛠️ **How It Works** 
All of the clean-up events are stored in a database. The front-end makes requests to the database to display clean-up statistics, and populate the front page map with all events. Users can choose to join an event without registering, or register using Auth0 to start their own event⁠—which is then posted to the database and so visible on the front page map. After an event, the host can log their clean and submit the number of volunteers in attendance, and the amount of litter collected, which is then reflected in the statistics displayed on the page. A weather widget is included, along with advice for various weather conditions, so that users can ensure they are adequately prepared for the Great British weather on the day of their clean-up!


## Authors (aka, the Environment Variables)
**Click our names to view our GitHub Profiles** 

- [Emma Gill](https://github.com/SurfingElectron)

- [Amira Gucher-Blackman](https://github.com/amiragucher)

- [Blake Lawrence](https://github.com/BlakeLawrence)

- [Edgaras Markunas](https://github.com/EdMark11)

- [Simran Rai](https://github.com/srai98i)

- [Jena Zubaydi](https://github.com/jena-84)


## App Features
The app offers a number of features to achieve its goal of helping users join and create litter clean-up events:
- 🗺️ **Interactive maps**, so users can locate existing clean-ups, or select a location to start their own; 

- ⛅ **A weather widget**, to allow users to check the weather for an upcoming event and prepare accordingly; 

- 📱 **Responsive design**, so the app can be used just as easily on mobile devices as it is on computers;  

- 💽 **A custom database**, which stores all clean-up events, and responds to HTTP requests via our [back-end](https://github.com/SchoolOfCode/environment_variables_backend); 

- 🔒 **User authentication**, to minimise spam, irrelevant or malicious postings, and to facilitate future features.


## Screenshots
|Landing Page| Forms |
|--|--|
| ![Landing page screenshot](https://user-images.githubusercontent.com/64714474/184341409-0a635d8c-ba79-4a27-8ddb-d54dde55dcdb.png) | ![Log a Clean screenshot](https://user-images.githubusercontent.com/64714474/184341488-e399b883-98eb-48e6-9f53-fffadf3fa6c4.png) |
| ![Map screenshot](https://user-images.githubusercontent.com/64714474/184341540-24922844-2518-420f-a5fc-4443f44924c5.png) | ![Start a Clean screenshot](https://user-images.githubusercontent.com/64714474/184341654-116dba21-7ba4-4cf1-9958-c5e324e6c390.png) |



## APIs
- [Leaflet](https://react-leaflet.js.org/) for the interative maps
- [Open Weather map](https://openweathermap.org/api) for the weather widget
  

## Installation 💻
**Clone the front-end and back-end repositories to your computer:**

```bash
https://github.com/SchoolOfCode/environment_variables_frontend
https://github.com/SchoolOfCode/environment_variables_backend

```

**Install the dependancies for both with the following command:**
```bash
npm install
```

To run this project, you will need to add the following environment variables to your front-end .env file:

`NEXT_PUBLIC_WEATHER_KEY= <place your api key from open weather map here>`

`NEXT_PUBLIC_DATABASE_URL= <place your api key from Heroku here>`

You will also need to add your Auth0 applications keys to your development and/or deployment environments. Please refer to the [Auth0](https://auth0.com/docs) docs for further details on how to do this.
  

## Tech stack
### Front-end
![Javascript mini-banner](https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)
![React mini-banner](https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642)
![Next.js mini-banner](https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465)
![CSS mini-banner](https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465) 
![Tailwind mini-banner](https://i.im.ge/2022/08/11/FGEabT.image-58.png) 
![Formik mini-banner](https://i.im.ge/2022/08/11/FGCNkf.Group-18.png) 
![Auth0 mini-banner](https://i.im.ge/2022/08/11/FGy2mS.Group-16.png) 
![Figma mini-banner](https://camo.githubusercontent.com/4a1038affbb2653ec140936555b3714ddc322526be8567b489e8423a795dea18/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4669676d612d4632344531453f7374796c653d666f722d7468652d6261646765266c6f676f3d6669676d61266c6f676f436f6c6f723d7768697465) 
![Netlify mini-banner](https://camo.githubusercontent.com/92dde1e7c42c013a5fce4dfeee0843f06710bfd38a610885e33a273c7eca0d22/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65746c6966792d3030433742373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e65746c696679266c6f676f436f6c6f723d7768697465)    

### Testing
 ![Cypress mini-banner](https://camo.githubusercontent.com/a2cc7362377d69d8ad5147e49f7b269cab69f00509828ce2d583b9dde9130499/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d637970726573732d2532334535453545353f7374796c653d666f722d7468652d6261646765266c6f676f3d63797072657373266c6f676f436f6c6f723d303538613565) 
 ![Jest mini-banner](https://camo.githubusercontent.com/5ec7b7ed343219da6b2213349bacdc389803950b5298464b35e76f7ab6ccf27d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6573742d4332313332353f7374796c653d666f722d7468652d6261646765266c6f676f3d6a657374266c6f676f436f6c6f723d7768697465)


## Colour Reference 
![Colour reference banner](https://i.im.ge/2022/08/11/FGY0w1.Group-19-1.png) We chose colours which would reflect the goals and theme of our app, using [coolers](https://coolors.co/) to help generate colour palettes. Blues and greens are strongly associated with the environment, and we chose a dark green so we would have a high contrast against a light background for accessibility and ease of use. 

|Background Colour |Primary Colour|Accent Colour|
|--|--|--|
| #E6E5E4 ![Background colour example](https://i.im.ge/2022/08/11/FGxQ6a.Rectangle-196.png) | #004F54 ![Primary colour example](https://i.im.ge/2022/08/11/FG3lk1.Rectangle-195.png) | #FF9505 ![Accent colour example](https://i.im.ge/2022/08/11/FG3F9m.Rectangle-194.png)
<br>
<br>
  
## Challenges and how we overcame them
There were numerous challenges on this project, mostly because we are a team of junior developers grappling with new technologies. In general, we used our skills at navigating documentation and parsing error messages

**Next.js and Leaflet**
- Using Next.js and Leaflet together was a challenge because 




## What we took from this experience
Our goal for this project was to work together well as a team, learn as much as we could, and at the end of it, present a functional and attractive app. We enabled this by deciding on a team manifesto at the very start, which included important topics like how we wanted to approach discussions, make decisions, and resolve conflicts. This 




Furthermore, working in an Agile environment and taking on an iterative approach to our project through user feedback and revision was an invaluable experience for us and will surely put us all in good stead for when we take on our first positions as developers.

Given more time, there are alot more features and functionality we would implement, but we worked hard at all times and we are very pleased with the end-result.
