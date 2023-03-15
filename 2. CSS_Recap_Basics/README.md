# CSS Recap of Fundamentals Concepts

### What is CSS ?
- Style sheet for styling HTML page
- inline style - we should stay away from it.
- internal style in head section
- external style sheet

### CSS Rule
- selector 
- declaration block {property: value}

### Selectors
- element selector
- universal selector *{} -- CSS Reset
- class selecctor followed by .classname{}
- unique selector - id followd by #idname{}
- combine advance selector - mozila docs - combinators

### Property selectors

- color code
- rgba(, , ,)
- background
- text style - 
    - font styles
    - font-family
    - font weight
    - text-decoration
    - font-size
- text decoration
    - text-align
    - line-height
    - letter-spacing
    - word-spacing
- stylling list

### CSS Box Model

- Standard - pattern of Box model 
    - content
    - padding
    - border
    - margin
    - width
    - height
    - border-radious

### Cascade & Inheritance

- When two rules apply that have equal specificity, the one that come last in the css is the one that will be used.
- specificity meaning which will get more importace. Browser will apply which is more specific \
    order - important, inline style, id, class, tag
    - important is used as value of css property- {value: property !important}
- Inheritance
    
### Table


### Type of Position
- relative
- static
- absolute
- sticky