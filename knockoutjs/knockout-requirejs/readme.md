## TS Setup

It's important to set `"moduleResolution": "node"`
in order for TS compiler to find "knockout" module.

## TS knockout d.ts file

There is a difference between:
    
    '@types/knockout' => KO 3.4 
    'knockout/build/types' => KO 3.5
    
So be careful which one you use.

```
  "devDependencies": {
    "@types/knockout": "^3.4.66"
  }
```
