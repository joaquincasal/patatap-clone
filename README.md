# Patatap clone

A simplified [patatap](https://www.patatap.com) clone I made while doing Colt Steel's [Web Development Bootcamp](https://www.udemy.com/the-web-developer-bootcamp/) on Udemy (great course, by the way!).

It only uses [paperjs](http://paperjs.org/)/[animejs](https://animejs.com/) for animations and [howler](https://howlerjs.com/) for sounds.

I made some changes (that I consider improvements) to the app seen on the course, these can be seen on the commits (the first commit is quite similar to the app as seen on the course).  
For example, I changed paperjs (the original library used on the course) for animejs. I just wanted to see how easy it was to change libraries. Right now, it works with animejs but I left the paperjs part commented to stress how few changes are needed to change from one library to another (apart from writing the code to make the new library work).

## Usage

Open the index.html with a browser and tap the letter keys on the keyboard, every letter has an animation and a sound attached (in the original web every animation is different, while here all animations are circles but in different colors). Space bar can be pressed to change the sounds that are played.