## Tips on flexbox:

- Great tutorial here: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Keep/wrap one element (div) per flex item.
- Learn which one is max-axis vs cross-axis.
- Learn the difference between flex container vs flex item.
- Flex container "direction: row" means arrange flex items in row (left to right).
- Flex container "direction: column" means arrange flex items in column (top to bottom).
- By default, flex item size is stretched. However the element inside will fill the
  flex item depending on their "width" and "height" value. A 100% will stretch it to full
  flex item size.
    NOTE: Default block elements (div) will have width=100%, height=[content height].
    while inline element will have width and height = [content height].
- If you do not let flex item stretch (setting flex: 0 0 auto;) then you need
  to control the alignment and justification of the flex items since there will be extra space.
- There is a difference between flex item spacing vs elements inside flex item spacing.
- The justify-content is for adjusting max-axis (row by default).
- The align-content is for adjusting cross-axis (column by default), and you need to define height and "flex-wrap: wrap".
- The align-items is for adjusting flex items relative to them-self.
- The align-self is for adjusting individual flex item and there is no equivalent of justify-self.
