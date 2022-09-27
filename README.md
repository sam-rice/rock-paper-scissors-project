# "paper-scissors-stone...." Project (Rock-Paper-Scissors)

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This application is a classic rock-paper-scissors game featuring video footage from the 1968 British independent film *if....*. The featured footage is from a scene in which several characters play a game of rock-paper-scissors (or "scissors-paper-stone"), and the design of the app features a minimal color palette inspired by the film's original theatrical poster. A user can select moves against a "computer" player, and the "player" who wins 10 rounds is declared the "winner" of the game. An "extended" game mode and a short writeup explaining the history of the film are also available within the app.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository.
2. Clone your new, forked repo to your local machine.
3. cd into the project's parent-level repository on your local machine.
4. Open all files in your text editor.
5. View the project in the browser by running open index.html in your terminal.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

![RPSgif](https://user-images.githubusercontent.com/108169988/192647499-b882ab8e-44c1-4ad0-a652-a9a231450401.gif)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

This project was an assignment for the fifth and final week of the first module of Turing's front-end software engineering program. I spent approximately 35 hours creating it. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

[Sam Rice](https://github.com/sam-rice)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

The learning goals of this project included building a classic rock-paper-scissors application with only a wire-frame as a starting guide, and without any pre-existing code to work from. "Vanilla" JavaScript, CSS, and HTML were the allowed languages. As our final project of "Mod 1", it was an oppurtunity to pull everything we've learned over the last five weeks into one project.

### Wins & Challenges
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

- The biggest challenge of making this project was getting through an issue I was having with GitHub and larger file sizes. Several video files in my assets folder were being tracked in my local Git repository, and when I went to push the branch to remote, I realized that GitHub doesn't support files over 100mb without using Git LFS. After researching/downloading/installing Git LFS, I experienced further issues trying to push to remote, when my previous local commits were still tracking the larger files without Git LFS. Next, I reverted back to my initial commit on the branch to work around the large files I was unable to unstage. At this point, I realized that migrating the large files to Git LFS had reset my commit history and wouldn't allow my working branch to merge with main. After further research and guidance from an instructor, I was finally able to force a merge between the two branches. This was a huge lesson learned regarding larger assets, and in the future I know how to handle them.

- A "win" I experienced came from the final feature I worked on. I wanted a small writeup about the film to be built into the app to explain the context of the footage used. I was unsatisfied with my first approach, which was creating an additional page view and switching to it when the user prompted it. It felt repetetive comapred to the rest of the app's experience. I decided to research using modals, since I felt it would be appropriate to have the writeup feel "outside" of the main experience of the game. After some initial struggling to get it to work, I was able to finally get it thanks to MDN documentation and YouTube tutorials. The end result of the feature is simple but much nicer-looking than I'd originally hoped for. 
