Exploring [VueJS](https://vuejs.org/)

This project is generated using [vue-cli](https://cli.vuejs.org/)

	npx vue create vue-cli-appe

## How to run

```
cd vue-cli-app
npm install
npm run serve
```

## How to run single vue file

	npx vue serve Hello.vue

## Using Vue-CLI

Instantly serve a App.vue file:

    npm install -g @vue/cli @vue/cli-service-global
    vue serve App.vue

## Hello

See hello.html

## Vue instance

let app = new Vue({
    el: "#app",
    data: {
        message: "Hello"
    }
    computed: {
        capMessage() { return this.message.toUpperCase(); }
    }
    created () {
        console.log("Vue instance created.");
    }
});

"el" stands for element. It's the DOM element that the Vue instance will bind to.

Vue instance usually take a object literal as setup. Unlike normal JS object literal
usage for "this", the Vue instance will automatically bind the "this" to the
Vue instance at runtime! This mean you can use "this.message" safely in any function
defined in Vue instance and it will refer to the correct property!

You can simply modify data value like normal property:
    app.message = "Hi again";

But you can access the raw form:
    app.$data.message

## Template

Use {{ dataProperty }} to render binded model value. The binding is reactive!

## Shorthands (Under Template Syntax)

@click is short for v-on:click
:style is short for v-bind:style

## Condition and Loops

v-if="flag" for condition rendering. If flag is false, the DOM element is removed!
Use the v-show if you the element to remain in DOM tree, but hidden with css only.

v-for="item in list"

You can not use v-for and v-if together on a element binding! You can separate them,
or better yet, use a computed filter to return sub list!

## User Input

Use v-model for two-way binding between form input and app state.

## Components

A web custom element for reuse. It needs to be registered with Vue and use it
as HTML element.

The "data" in a component must be a function!

## Compare to KnockoutJS

* There is no equivalent of KO's "with" binding in VueJS!
    For example, you have to use an explicit current item name in a v-for binding
    See https://stackoverflow.com/questions/47016786/how-can-i-specify-a-binding-context-in-vue-js-just-like-in-knockout-js-and-wpf