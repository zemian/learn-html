## About

- https://jqueryui.com/
- https://github.com/jquery/jquery-ui

* An example can be found in "resoruces/jquery-ui/index.html"
* There are more "demos" in the "resources/node_modules/jquery-ui" source directory!


## jQuery UI

jQuery UI contains many widgets that maintain state and therefore may have a
slightly different usage pattern than typical jQuery plugins you are already used
to. While the initialization is the same as most jQuery plugins, jQuery UI's widgets
are built on top of the Widget Factory which provides the same general API to all of them.


## Widget Factory

Writing jQuery plugins is as simple as adding a method to jQuery.prototype (more
commonly seen as $.fn) and following some simple conventions like returning this for
chainability.

Most jQuery plugins are stateless; they perform some action and their job is done.
For example, if you set the text of an element using .text( "hello" ), there is no
setup phase and the result is always the same. For these types of plugins, it makes
sense to just extend jQuery's prototype.

However, some plugins are stateful; they have full life cycles, maintain state, and
react to changes. These plugins require a lot of code dedicated to initialization
and state management (and sometimes destruction).

The widget factory aims to solve both problems, removing the boilerplate and creating
a consistent API across plugins.
