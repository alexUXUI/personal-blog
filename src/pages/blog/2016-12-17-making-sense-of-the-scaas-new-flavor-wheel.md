---
templateKey: blog-post
title: Transducers are cool
date: 2016-12-17T15:04:10.000Z
description: They transform collections of data more efficiently.
tags:
  - functional programming
  - tranduce
  - map
  - filter
  - reduce
  - javascript
---
Transducers are a functional technique for a more reusable way of executing multiple operations on a single values in a collection.

The idea behind executing multiple operations on a single element at a time is that 

rather than mapping over and array `3` times and performing a `single operation` each time, a transducer will map over the array `1` time and apply all `three operations` on each array element.

Pretty cool, huh?

Your program will be more memory efficient as well because with the .chain syntax of .map, .filter and .reduce, javascript must return a new copy of the array in an intermediary collection.

```
  data
    .map(multiplyByTwo)
    .map(filterOdds)
    .map(divideByFour)
```

But with transducers, only one new collection is created.
