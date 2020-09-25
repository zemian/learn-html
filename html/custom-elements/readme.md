## About

- https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
- https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements

HTML Custom elements provide a way for authors to build their own fully-featured DOM elements.

Two distinct types of custom elements can be defined:

    An autonomous custom element, which is defined with no extends option. 
    These types of custom elements have a local name equal to their defined name.

    A customized built-in element, which is defined with an extends option. 
    These types of custom elements have a local name equal to the value passed in their 
    extends option, and their defined name is used as the value of the "is" attribute, which 
    therefore must be a valid custom element name.

An autonomous custom element does not have any special meaning: it represents its children. 
A customized built-in element inherits the semantics of the element that it extends.

## Element connected/disconnected

An element is connected if its shadow-including root is a document. 

## Element Upgrades

Because element definition can occur at any time, a non-custom element could be created, and then 
later become a custom element after an appropriate definition is registered. We call this process 
"upgrading" the element, from a normal element into a custom element.

Note that upgrades only apply to elements in the document tree. (Formally, elements that are 
connected.) An element that is not inserted into a document will stay un-upgraded. 

## Custom Element Reactions

A custom element possesses the ability to respond to certain occurrences by running author code:
* When upgraded, its constructor is run, with no arguments.
* When it becomes connected, its connectedCallback is called, with no arguments.
* When it becomes disconnected, its disconnectedCallback is called, with no arguments.
* ...

We call these reactions collectively custom element reactions.
