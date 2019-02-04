---
templateKey: blog-post
title: 'Performant Data Transformation with Transducers '
date: 2019-02-01T15:04:10.000Z
description: A conceptual introduction
tags:
  - functional programming
  - tranduce
  - map
  - filter
  - reduce
  - javascript
---
Let's start with what a transducer does. A transducer iterates over a collection of data and returns a new result. Transduce means “to change over, convert”.

How does it work? 

A transducer iterates through a collection of data once and runs multiple functions on each item. 

In JavaScript, we already have functional techniques for iterating over arrays and running multiple functions on each item; map, filter and reduce. Why do we need to use a transducer?

It's because transducers are better than map, filter, and reduce when it comes to running more than one computation on a collection of data, which is a common use-case and the following code snippet probably looks familiar:

```
  data
    .map(multiplyByTwo)
    .map(multiplyByThree)
    .map(divideByFour)
```

This `.chain` syntax is readable and friendly on the eyes, but there are some performance concerns about doing it this way. 

What's the problem?

The problem is that every time we use `.map` in the example above, we create a new copy of the `data` array. 

Given an input of `[1,2,3]` in the example program above, three new arrays would be created `[2,4,6]`, `[6,12,24]` and `[1.5, 3, 6]`. Now, imagine if that array was 10k items long. 

Transducers to the rescue!

Transducers solve the memory problem of 3 arrays by only iterating over the collection one time, and running multiple functions on each item. Rather than iterating over the collection three times, only  running one function on each item.

How does the transducer run more than one function and still be reusable? 

Transducers use a transform function, which is composed of serval operations, on each element in the collection. This is sometimes called xform.

In summary:

Transducers are a functional technique for transforming a collection of data.  

>This collection of data can be any functor data type. A functor is a data type that implements `.map`. Array's are functors: `[1,2,3].map(console.log)`.
