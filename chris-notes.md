# changes 11 Dec

- Tailwind v3 and PostCSS v8 have issues with CRA v4. Tried running CRA v5 alpha, which meant to have fixed this, but no joy

- tailwind.config:
    - added new `purge` section from Tailwind set-up tutorial I followed. Their way of minimising the 200,000 lines of code in CSS file when goes to build. Revert back to your original if it's better
    - adding stuff from Tailwind 3 in the themes bit

- need build: script for postCSS?

- app.css - commented out everything

- navbar - commented out

- tailwind config - put background image back in (commented out) and find where to put - public or src

- stop button - I followed logic to add const that copied stopSanta(). Then added a button that copied Start. Don't understand anything about how it works, but copied this: https://stackoverflow.com/questions/62234777/how-to-clearinterval-in-react-hook-on-clicking-button

- start button had a ternary in it. With the Stop btn I've now commented out the ternary

- I added timeSecs to count total time

- milk/cookies and tea/carrots - we need to pull the values out of map of Array(currentSpeed) and tot them up. Possibly, because there's a chain of map and reduce, the values needed aren't saved as variables for later use?

- Input - should Santa be able to change the number of houses he wants to visit? If he lowers it, he's failing on kids ;) At moment he can input new number and press start to lower House Target.
    a) House Target needs to disappear when start typing number
    b) once number entered the input should be disabled until a refresh by Santa.