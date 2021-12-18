# Chingu Holiday Hackathon 2021 - Santa's Delivery Dashboard

Contents

1. [Overview](#overview)
2. [Contributors](#contributors)
3. [Features](#features)
4. [Dependencies](#dependencies)
5. [Bugs](#bugs)
6. [To Do List](#todo)
7. [Running the Project](#runproject)


## OVERVIEW <a name="overview"></a>
For the Chingu Holiday Hackathon 2021 we're creating a game with a purpose - to help Santa deliver presents around the world before the night is over.

As he travels, households leave milk & cookies or carrots & tea as snacks. Milk & cookies increase Santa's calories and slow him down, while carrots & tea help him control his weight so he can complete deliveries faster.

Santa sets himself a calorie target of 5,000 calories. Under 5,000 and he can deliver presents to 10 homes per second, but over 5,000 calories and he slows to 5 homes per second. For each house that leaves him milks and cookies, he puts on 75 calories and will burn 60 (so a net addition of 15 calories). But if he snacks on carrots and tea, he has a calorie reduction of -10.

Santa wants an app that will: 
- let him assign a calorie target; 
- track the calories consumed and spent during the night; and 
- monitor his progress on a dashboard that updates once per second.


## CONTRIBUTORS <a name="contributors"></a>
Our hackathon team comprised of:

- Robert Corrado (twitter etc etc ?)
- Chris Logothetis(twitter etc etc ?)
- Tyler Woolcott (twitter etc etc ?)


## FEATURES <a name="features"></a>

To monitor his progress, Santa requests a dashboard that:

1. let's him input a target of homes to deliver presents;
2. sets his calorie target of 5,000
3. updates and displays the following every one second:

    1. his nightly calorie target of 5,000;
    2. his total nightly calories accumulated so far;
    3. the total number of homes who have left him milk & cookies;
    4. the total number of homes who have left him carrots & tea;
    5. his current delivery speed as a number of homes per second (i.e 10 or 5);
    6. the number of homes visited so far;
    7. the number of homes remaining;
    8. total time.

4. Buttons to start and stop
5. At the end of the night he will see the total time taken at 3(viii). above


### *Extra features*

The app was designed mobile-first. It will display in portrait orientation on his or his elves' smartphones, then in portrait or landscape on tablets. On laptops and monitors it displays in landscape orientation.

Santa asked that we generate random numbers of homes leaving milk/cookies, instead of a 60/40 split.

Early simulations showed that the app works fine should Santa enter a target divisable by 10. But any other target results in a misfire. Therefore, when 10 homes remain, the speed will switch to 1 house per second in order to finish the < 10 homes.

To improve his user experience, Santa asked for a 'Refresh' button on the dashboard, to save him refreshing his browser or re-loading the app every time he runs a simulation.

During our simulations with Santa before Christmas Eve, it quickly became apparent that he would breach his 5,000 calorie limit in a matter of minutes, and it would never decrease. This would mean that Santa would spend most of the night delivering presents to five houses per second; a great many software developers would be left very disappointed the next morning.

*Health & Safety note: our meetings with Santa were conducted over video-calls as covid travel restrictions prevented us from visiting him at the North Pole. This meant that we couldn't form a better understanding of his exercise regime, sleigh dynamics and reindeers' nutrition programme.* 

To combat the issue of the ever increasing calorie intake, we added a warning light to flash at 4,750 calories, giving Santa a buffer before he slows to 5 homes/second. At this stage Santa needs to stop snacking on the milks and cookies. The light will turn off once his calorie intake is again below 4,750. Naturally, he would cause great offence were he to leave the milk and cookies on the mantlepiece and so he would take them for the reindeers.

Even so, extra simulations further demonstrated that St Nick would still fall short of his target for homes to deliver too, which will be in the millions of good software developers. Santa's elves believe that they may be able to boost the metabolic rate of his reindeer through a combination of the extra milk and cookies together with a prototype dietary supplement that they've been developing. This will enable Santa to visit 200 homes per second, not 10.

To that end, Santa has requested a 'Fast Forward' button, which he can tap once he's feeding the milk, cookies and supplement to the reindeers. It remains to be seen whether he'll meet the home target he inputs next week.

The Fast Forward button must be clicked twice to activate, to avoid any slips.

Santa will have no time to properly test the elves' cocktail as supply chain issues resulting from covid have severly restricted cookie deliveries to the North Pole. Christmas Eve will be the trial run... 


## DEPENDENCIES <a name="dependencies"></a>

- React
- React-DOM
- React-Bootstrap: Input Group
- React-Bootstrap: Form
- Tailwind CSS


## BUGS <a name="bugs"></a>

- During the first one second interval, Homes Remaining does not reduce by 10, but the total of Homes Visited increases by 10. Whilst Santa can visit all the homes in his target, the app will tell him that 10 homes remain.
- We don't currently understand why the Fast Forward button needs two clicks, but it's a handy safety feature.
- Buttons should be disabled until an input is submitted.
- If 'refresh' is clicked whilst the simulation is running, the metrics refresh, but the simulation continues. Stop must currently be clicked before refresh.
- After refresh is clicked, a new number must be inputted.
- With the exception of an aria lable on the form, we have not optimised the app for assistive technologies. We have not run a colour contrast test.


## TO DO <a name="todo"></a>

- we ran out of time to allow Santa to toggle between the metrics and his address book. This will connect to his API and show the next 10 (or 5) software developers, whether they have been naughty or nice, and if nice, what present they will receive.

Note: to report bugs or submit ideas for features please use Github Issues.

Note: to report a security vulnerabily please send a direct message. Do NOT report it through public issues.


## RUNNING THE PROJECT <a name="runproject"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The following instructions are taken from the CRA readme.md:

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
