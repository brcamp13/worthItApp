### To-Do: 
- [x] Pass dropdown selection from first page to second page
- [ ] Make the site not crash if you refresh second page (have initialized state)
- [ ] Format the second page
- [ ] Test the entire app flow from beginning to end
- [ ] Better style the first page
- [ ] Transition effect when moving between pages
- [ ] Format for mobile and different-sized devices
- [ ] Research information for most majors (or the most popular)
- [ ] Derive an objective metric for determining the worth of a major
- [ ] Deploy
- [ ] Ads/Google analytics?

### Ideas: 
## Make the app entirely single-page (Which content is displayed depends on a "buttonWasPressed" conditional, or similar)
## Doing so would make a transition effect much easier, and would probably make the app not crash upon refreshing
## It would also make obtaining the dropdown selection and using it in the second content block much easier (no more React router trickery)
## To extend upon this, you should still have a first page and second page component. Just place the conditional within app.js
## So, if button isn't pressed, display first page. If button is pressed, display second page. Then on second page, have another button ("take me home") that reverses the button conditional again (so it will then "not be pressed") and you'll go back to the first page
## Refreshing the page will re-initialize the state, meaning buttonIsPressed will be false and the first page will be displayed
## Sweet! Doing this later tonight

