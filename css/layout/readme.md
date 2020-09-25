Think of all HTML elements has a rectangular UI pixel space shape. The "layout"
of these elements means how the browser will arrange them on the UI.

display: Each element will have a default placement method, or display, in
relative to other elements that's next to each other.
- block: Elements are stack together on top of each other from top to bottom.
- inline: Elements are place next to each other from left to right.
- none: Elements are treated like it doesn't exists. Not display at all, and yet
          the html and nested content are still in the document.

position: Cause the element to be placed out side of it's normal flow. Use the
          top, right, bottom, and left properties to control the position.
- static: Default and will not place out of position.
- relative: Place element relative to itself!
- absolute: Place element relative to containing "positioned" element, or else
            relative to body of html.
- fixed: Place element relative to viewport screen.
- sticky: Place element like "relative position" until its containing block
          crosses a specified threshold (such as setting top to value other
          than auto) within its flow root (or the container it scrolls within),
          at which point it is treated as "stuck" until meeting the opposite
          edge of its containing block.
