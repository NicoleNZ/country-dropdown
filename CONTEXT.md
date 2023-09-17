# Context File

## What is this file for?

Please use this file to give some context and meaning to the decisions you've
made when implementing a solution to the
exercise.

## What are we looking for?

You are welcome to keep it brief but please jot down a few notes on:

- Why you have chosen a library?
- What other libraries you have considered (if any)

The headings below are just there to guide you, feel free to remove them or add
new ones based on your selection of
tools.

---

### State Management

I will be using useState for state management for this exercise, and perhaps useReducer? Will need to get started to see what I end up with here!

### CSS Styling

I will go with styled-components for CSS Styling because it is very customisable, and I really like the way that the styling is kept in the same file as the component being styled. I find personally it reduces the time clicking around from file to file when you are first understanding how a component works! I have used both material UI and css modules in the past, but the majority of my experience has been with styled-components, hence why I gravitate towards it.

### Data Fetching

My experience with data fetching is primarily using ducks/sagas to populate our Redux store, and then using selectors to grab the data I need. Since that isn't the case with this exercise, I will be using Object methods to convert the responses to arrays so that I can then loop over them and do things!

### Braindump

Tests:
Ideally I would want to write up some unit tests first but I don't think I'm going to have time! Examples of tests I might write would be to test that the reponses from the API calls are working - I currently work with ducks/sagas to configure our Redux store, and then use Selectors to grab the data I want, so my unit tests are for testing the Selectors are doing the right thing. If I had more time I would read through the Jest docs and learn how to test fetch APIs that way.

Validation:
Didn't get to this - would do it by checking if both dropdowns had a value - if so, show messgae, if not, show error.

Tick icon:
Bit of a hacky solution potentially haha

REM:
I would usually use REM instead of px - only reason I haven't is I'm focusing on functionality given the timeframe. Under actual working conditions I would know the root font size and would be using REM.

Final words:
Still not completely done - a bit buggy but it's a quick job so hopefully shows enough!
