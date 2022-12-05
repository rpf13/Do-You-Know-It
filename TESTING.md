# Testing

This site conains all testing, executed for this project.

"Click to return back to the [README.md](README.md)"

---
## User Stories Testing

- As a visiting user, I would like to be immediately attracted by a beautiful, colorful and minimalistic site

    ![Game Main Site](docs/testing/01_game_main.png)

- As a visiting user, I can find an explanation on how to play the quiz

    ![How To Play](docs/testing/02_howtoplay.png)

- As a visiting user, I would like to have an immediate overview of the site and how the quiz works
    -> Fullfilled via the simple and self-explanatory interface
- As a visiting user, I can see the status of the running quiz, how many questions are left, how many correct and wrong answers
    -> Fullfilled via the quiz status bar, showing correct-, incorrect questions amount as well as at which, out of how many questions, the player is currently at.
- As a visiting user, I always have the chance to abort the game and go back to the main site
    -> Fullfilled via the Cancel button on the top right of the quiz card.

    ![Quiz Start](docs/testing/05_quiz_start.png)

- As a visiting user, I can fill out a contact form to give feedback

    ![Feedback Form](docs/testing/03_feedback.png)

- As a visiting user, I can visit the github repo via dedicated link / button
    -> Github repo "top right corner button" available on each site, on every card displayed.

    ![Github Site Link](docs/testing/04_confirmation.png)

- As a visiting user, I will get an end of game text, once I have finished all questions. From there I can replay the game or go back to the main site.

    ![End of Game](docs/testing/05_quiz_endofgame.png)


---
## Code Validation
    you must showcase proof with screenshots that you've validated any code files, such as HTML, CSS, JS, Python (where applicable)

### HTML Validator

### CSS Validator

### Java Script Validator

### Performace Testing via Lighthouse

Performance Testing has been done via Lighthouse extension on the Chrome browser. I have testes for desktop and mobile and I am very happy with the result:

- Desktop
    ![Lighthouse Desktop](docs/testing/lighthouse_desktop.png)

- Mobile

    ![Lighthouse Mobile](docs/testing/lighthouse_mobile.png)

### Wave Webaim Validator

## Functional testing & Responsiveness
The functional and responsiveness testing will be shown in a combined manner. All functions of the site will be tested with each device stated below, showing that responsiveness is granted and proper functionality is documented with each device type.
If there are multiple steps possible per section, only one snapshot will be provided in order to proff the responsiveness. All functionality, as mentioned in each section is tested on each of the devices. If nothing special is mentioned, functionality was tested without an error.

- iPhone

<details>
<summary>iPhone 12 Pro iOS 16.1 tested with Safari</summary>

- Main Game Site

- How to Play Button to modal w. explanation where as click on close or outside the modal closes the modal box.

- Feedback card filling in form
    - missing one of the mandatory fields & getting an error
    - klick on cancel button to leave
    - filling out complete form and submit
    - confirmation site w. redirect back to main site after a few seconds

- Main quiz functionality (Start Game button)
    - Question & Answers get displayed
    - Countdown Timer starts running
    - Selecting answer disables answer button click functionality
    - Selecting answer displays correct, incorrect answers via green or red color
    - Correct or incorrect answers counter increases by 1
    - Next Question button displays next question
    - If time elapses, game over message appears, answer button click functionality gets disabled
    - Replay button starts a new game, all counters reset
    - End Game button brings the user back to main site
    - Finishing quiz shows end of quiz message, statistics as well as Restart and End Game button

</details>

- iPad

<details>
<summary>iPad Pro 11" iOS 16.1 tested with Chrome for iPad OS</summary>

- Main Game Site

    ![Main Game](docs/testing/ipad1.png)

- How to Play Button to modal w. explanation where as click on close or outside the modal closes the modal box.

    ![How to Play Modal](docs/testing/ipad2.png)

- Feedback card filling in form
    - missing one of the mandatory fields & getting an error
    - klick on cancel button to leave
    - filling out complete form and submit
    - confirmation site w. redirect back to main site after a few seconds

    ![Feedback missing](docs/testing/ipad3.png)

    ![Feedback correct](docs/testing/ipad4.png)

    ![Confirmation Site](docs/testing/ipad5.png)

- Main quiz functionality (Start Game button)
    - Question & Answers get displayed
    - Countdown Timer starts running
    - Selecting answer disables answer button click functionality
    - Selecting answer displays correct, incorrect answers via green or red color
    - Correct or incorrect answers counter increases by 1
    - Next Question button displays next question
    - If time elapses, game over message appears, answer button click functionality gets disabled
    - Replay button starts a new game, all counters reset
    - End Game button brings the user back to main site
    - Finishing quiz shows end of quiz message, statistics as well as Restart and End Game button

    ![Quiz Start](docs/testing/ipad6.png)

    ![Quiz First Question & Answers](docs/testing/ipad7.png)

    ![Quiz Next Question](docs/testing/ipad8.png)

    ![Quiz Game Over](docs/testing/ipad9.png)

    ![Quiz Final](docs/testing/ipad10.png)

</details>

- Desktop

<details>
<summary>Macbook Pro 16" tested with Firefox v106.05</summary>

- Main Game Site

    ![Main Game](docs/testing/macbook1.png)

- How to Play Button to modal w. explanation where as click on close or outside the modal closes the modal box.

    ![How to Play Modal](docs/testing/macbook2.png)

- Feedback card filling in form
    - missing one of the mandatory fields & getting an error
    - klick on cancel button to leave
    - filling out complete form and submit
    - confirmation site w. redirect back to main site after a few seconds

    ![Feedback missing](docs/testing/macbook3.png)

    ![Feedback correct](docs/testing/macbook4.png)

    ![Confirmation Site](docs/testing/macbook5.png)

- Main quiz functionality (Start Game button)
    - Question & Answers get displayed
    - Countdown Timer starts running
    - Selecting answer disables answer button click functionality
    - Selecting answer displays correct, incorrect answers via green or red color
    - Correct or incorrect answers counter increases by 1
    - Next Question button displays next question
    - If time elapses, game over message appears, answer button click functionality gets disabled
    - Replay button starts a new game, all counters reset
    - End Game button brings the user back to main site
    - Finishing quiz shows end of quiz message, statistics as well as Restart and End Game button

    ![Quiz Start](docs/testing/macbook6.png)

    ![Quiz First Question & Answers](docs/testing/macbook7.png)

    ![Quiz Next Question](docs/testing/macbook8.png)

    ![Quiz Game Over](docs/testing/macbook9.png)

    ![Quiz Final](docs/testing/macbook10.png)

</details>

---
## Browser Compatibility
    you must showcase proof with screenshots that you've tested the finished project on various browsers, such as Chrome, Firefox, Edge, Safari, Brave, etc.
    -> Add table with all browsers, tested

## Unfixed Bugs
    list out any unfinished bugs you might have, where applicable... if none, don't just put "I have no bugs"... put something like: "There are no remaining bugs that I am aware of."
