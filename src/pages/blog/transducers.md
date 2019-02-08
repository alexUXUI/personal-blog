---
templateKey: blog-post
title: 'Performant Data Transformation with Transducers '
date: 2019-02-01T15:04:10.000Z
description: _
tags:
  - functional programming
  - tranduce
  - map
  - filter
  - reduce
  - javascript
---
In software development, a transducer is a performant technique for data transformation. A transducer iterates over a collection of data and returns a new result. Often times, in javascript, we accomplish this with `.map`, `.filter`, and `.reduce`.

```

[1,2,3]
  .map(timesTwo)
  .filter(isOdd)
  .reduce(sumEntries)

```

This approach, however, is not as performant as it could be. In this post we will talk about the problems with this approach and how transducers can improve them. A series of functions, like the example above, works like this:

![alt text](https://cdn-images-1.medium.com/max/1600/1*mJicJiOZT4M9jwv6kMkwRg.gif)

The yellow arrows are functions, the angle brackets are collections, and the red lines are items. Notice how each function needs to process all three items in the collection before the next function is called?

This sequential behavior _is_ the bottle-neck of the program. The map, filter, and reduce approach iterates 3 times and generates 4 collections.

**How can we write a better solution?**

Let's address the two main problems with the example program.

1) Space complexity of 4 Collections ↔️. There's an input collection, output collection, and two intermediary collections in the gif above. 


2) Time Complexity of 3 iterations ⏰. The program iterates over the collection three times. Once with map, once with filter, and once with reduce

Let's improve these problems by:  

1) Removing intermediary arrays ↔️

2) Iterating over the data one time, instead of three ⏰

Our goal, then, is to:
1) Iterate over a collection one time 
2) Run multiple functions on each item
3) Return a new result  without using intermediary collections.

The rest of this post aims to show you how a transducer accomplishes our goal within the specified time and space constraints.

**How does a transducer work?**

A transducer iterates over a collection one time and does _not_ create intermediary collections. It iterates one time by running every data transformation on each item as it iterates.

![alt text](https://cdn-images-1.medium.com/max/800/1*rEOyWd0MTPv_NZvzDaFbkA.gif)

Notice how there are only two collections in the example transducer above? No intermediary arrays solves our space complexity issue ↔️

See how each item goes through every function yellow arrow one by one, rather than the program to looping over the data three times? One iteration, rather than three, reduces the time complexity of the algorithm by two thirds ⏰

## Transducer Implementation 

#### Transducers have 4 parts

1) Main function:
Contains all the computations your program will perform on each item in the collection of data 


2) Final function: _is_ the reducing function. It receives a new item once an item has been processed by the computations the Main function. The final function then takes the resulting item and adds it to the output of the transducer.


3) Seed data: Used to initialize the output of the transducer. It works just like the array in the following example: `.reduce((acc, val) => { return acc.concat(val) }, [])`


4) Input Data: any collection of data (that implements map).

#### Transducer Function

Each of the four transducer parts described above will be passed as arguments to the Transducer function:

`Transducer(Main, Final, Seed, Input)`

now that we know how to use and what each part of the transducer is, let's see what goes into each part, and 

#### Implementing each part

The Main Function:

the main function is a composition of the functions you want the transducer to run on each item in the collection.

Function composition is when the output of one function is the input of another. Composite functions can be described as `f(g(x))`, where the output of  `g(x)` is the output of `f`.

Here's an example of function composition:
```
const composeTwo = (f, g) => (...x) => {
  return f(g(...x))
}
```

In the example above, `x` is each item in the collection of data.

We will demonstrate this and how the main function is implemented here:

```
const sumOne = x => x + 1
const timesTwo = x => x * 2

const mainFunction = composeTwo(
  sumOne,
  timesTwo
)

mainFunction(10) // 21
```
 



