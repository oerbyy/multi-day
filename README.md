## ## Description

- Allows user to select multiple days.
- Days are selected one by one, by clicking on a visual calendar.
- The calendar is not displayed by default, it should pop-up after an user click. By "popup" we mean should be floating but not modal, kinda like this:

[](https://www.notion.so/ca02b7a142ae489a99c316e7a03e2455#71ec3e6696284fc6863ce6fabd44ae55)

- There should be a visible list of already selected days, in a user friendly - format, like `Sunday, February 14th`.

That list can be inlined like this: 

1. 

[](https://www.notion.so/ca02b7a142ae489a99c316e7a03e2455#41ad25d60a5e4243ac65f9e0149c92ca)

**Or,** 

2. each element on its on line, kinda like a todo-list. 

Preferred option is 1

- Any day can be removed independently from the existing selection
- No restriction on the number of days selected
- Controlled
- Any third-party lib can be used (if have a decent audience and activity)
- Preferred third party lib. If that helps, non-mandatory: react-select, react-datepicker, moment
- Emphasis on the stability of the component, not the styling or prettyness

### Bonus

- Days already selected are marked differently in the calendar
- "clear all" feature

## ## Props:

* `value` {Array[String]}

```

[

"2019-01-22T00:00:00.000Z",

"2019-01-22T00:00:00.000Z"

]

```

* `onChange` {func}

* any options/event that seem relevant