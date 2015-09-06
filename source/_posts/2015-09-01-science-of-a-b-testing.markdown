---
layout: post
title: "The science of A/B Testing"
date: 2015-09-01
comments: true
categories: ['Analytics', 'Hypothesis Testing', 'A/B Testing']
---

Modern day web or mobile ecosystem thrive on data-driven decisions, based on data obtained from _well-designed_ __experiments__. Lets take look at the science, behind one of the most popular experiments on web - __A/B Tests__.
<!--more-->
This post is part of a series about A/B tests.
I will post the links as i write the subsequent posts.
<script
    src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML,http://vikasrtr.github.io/javascripts/MathJaxLocal.js'>
</script>
## What is A/B testing
> A/B testing or split testing is a randomized experiment, which compares performance of a metric, over alternate versions of same web page, simultaneously.

Simply, in A/B testing, different users are shown different variants of same web page and performance of a given metric, say _clicking a button_, is compared. How we select the users and how measure such a performance is key to successful test.

# 

To understand A/B test, lets break-through the definition one-by-one:
> __a randomized experiment__

What is a randomized experiment and why do we need it ?  
A randomized experiment refers to an experiment in which the subjects or objects are `selected` in randomized fashion. This is done, so that the process of selection represents a `chance model` and any `bias` is reduced.

> __performance of a metric__

A metric connects the maths to business.  
A metric can be any business query, that the test seeks to be answered. For example, _does the new search box works?_ or _does changing color of Buy button increase sales?_

> __alternate versions of same page__

A/B test __must__ always be done on __same page__ with __slight__ variation. The slight variation scheme is used to eliminate the `confounding` variable, which may hide the cause of a particular result or action.
However, contextualizing the results of a test may sometimes bring wonderfully surprising results, as mentioned here at [airbnb's blog](http://nerds.airbnb.com/experiments-at-airbnb/).

> __simultaneously__

This perhaps may be the most important characterisitc of A/B tests. The test must be performed for all subjects at same time. This is done to create a notion of independence among subjects of test.  
For example, _running part of test on Sunday or other on Monday, will lead to biased results_.

## The Basics

In A/B testing, the users of application, are first randomly selected and placed into several buckets or groups and then tested for result. The process can be sumarized as:

 - Categorize visitors into groups
 - Provide variants of a web page to users of each groups, with all users of same group getting same variant.
 - Measure and compare the response

## The Maths

As theory of probabilistic development goes with gamblers, the statistical theory goes with, __medical field of clinical trials__ and thus it borrows much of its conventions from there. For simplicity let us assume that we want to generate only two groups.

> In an A/B test, the incoming users are randomly placed into two groups.  
One group is shown the __current web page__ and another is shown a variant.

The users shown the current page are called - __Control Group__ and the users, which gets the variant are called - __Treatment Group__.

> The resaon for using control group is to have a baseline for comparing the result of variant.

Statistically, A/B tests are simply `two-sample hypothesis tests`.

__What is hypothesis testing?__  
A hypothesis is simply _a statement_, that hasn't been proved true. And hypothesis testing is _process of verifying that, whether a given hypothesis is true_.

Since, a hypothesis can be complex enough to deduce its probability, we use a different approach to prove our hypothesis, which is known as __null-hypothesis testing__. In null-hypothesis testing, we use a baseline claim called - `null hypothesis` and _try to reject_ it based on comparison to another hypothesis called - `alternate hypothesis`.

> In A/B testing, null-hypothesis states that "the variant has no effect on user", while alternate hypothesis states that "the variant has __significant__ effect on user!"

Mathematically,  
$$H_o = p_c - p_t$$
where $H_o$ is the null-hypothesis & $p_c$ and $p_t$ are rate of change of metric for control and treatment groups respectively.

To reject the null-hypothesis, we have to prove that:  
$$H_o = p_c - p_t < 0 $$
i.e. performance of metric is less in treatment group, than control group.

__But why we need these hypotheses things ?__  
One common understanding is to think that $p_c - p_t$ is simply the required difference, so why need a hypothesis testing.  
The answer is that we want to account for _chance variation_. Since, even if both groups are shown __exactly same page__ (something called _dummy testing_), even then the rates will be different due to chance variation. And we don't want to be misleaded by chance, making sure that the results are due to actual difference.  

__How to be confident: Two sample Z-test__  
To account for chance variation, we use little stats and something called Z-test.  
Z-test falls in domain of significance testing, allowing us to detect the _significance_ of results as compared to null-hypothesis.

Simply, Z-score is:  
$$ Z = \frac{\text{difference of rates}}{\text{Standard Error of sample}}$$
And the complete equation thus becomes,  
$$Z = \frac{p_c - p_t}{\sqrt{\frac{p_c(1 - p_c)}{N_c} + \frac{p_t(1 - p_t)}{N_t}}}$$
Here, $N_c$ and $N_t$ are number of users in control and treatment groups respectively.

__But what actually is z-score__
> Z-score is the probability of obtaining a test-statisitc, as extreme as the observed one, assuming the null-hypothesis to be true. It is denoted by __P__ and called as __P-value__.

If P < 0.05, then we conclude that the null-hypothesis is rejected, making the observed difference _statistically significant_, otherwise the observed difference is just due to chance variation.

In upcoming post we take a look at some data and code to perform an A/B experiment.

Stay Curious !!

## References
 - http://20bits.com/article/statistical-analysis-and-ab-testing
 - http://nerds.airbnb.com/experiments-at-airbnb/