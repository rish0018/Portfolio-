---
title: "I Spent a Month With a Phone App and Here Is What It Taught Me"
date: 2026-10-26
summary: Nine lessons from a month of building a mobile app, told over tea.
tags: [mobile, lessons, debugging]
cover: /blog/phone-app-month.png
---

Heyo.

Sit down. Get some tea. Welcome to me yapping my worries away.

I am a developer. This month I worked on our mobile app. I thought it would be easy. The app is small. It fits in a pocket. How hard can a pocket thing be?

Very hard. Let me tell you everything.

## Lesson 1: The fake phone was lying to me

To test the app, I use a fake phone on my computer. It is called an emulator. It is like a pet that thinks it is a phone.

One day my test tool stopped working. No clear error. Just a quiet "I cannot do this." I looked at my code for hours. My code was fine.

The problem was a tiny setting called page size. My fake phone used a big page size. My test tool only liked the small one. It was like trying to put a big shoe on a small foot. Nobody was wrong. They just did not fit.

I made a new fake phone with the small page size. Everything worked.

**What I learned:** when something fails and your code looks fine, maybe the code is not the problem. Maybe the shoe is.

## Lesson 2: A screen with no exit is not a screen, it is a trap

We have an unlock screen. It asks for your fingerprint. But what if your phone has no fingerprint set up?

The old screen said, "No biometric data is enrolled." Then it showed a button called "Try again."

Try again to do what? The fingerprint did not appear by magic. I pressed that button many times. Nothing changed. It was like knocking on a wall and hoping it becomes a door.

So I added a "slide to unlock" bar. Now you can slide your finger across and go in. It was the first time our app used a gesture. I was very proud. I told my chair about it.

**What I learned:** always give people a door. Even a small one.

## Lesson 3: Dates are sneaky

I fixed one date bug. Then my fix made a worse bug. I felt like a doctor who gives you medicine and the medicine gets sick.

Here is what happened. The app has a start date and an end date. When you change the view, the app adjusts the dates to match. My fix saved the adjusted dates. Then the next change adjusted them again. And again. Every switch squeezed the dates a little more.

After a few taps, a whole range of months became one single day. Poof. Months gone.

The fix was simple. Do not save the adjusted date. Only show it. Keep the original safe in the drawer, and put only a copy on the table.

**What I learned:** do not save a helper's work as the truth. Let the truth stay true.

## Lesson 4: Two things can look the same and still be different

I fixed a bug in one screen. Then I told everyone it was done. Then someone showed me the same bug in another screen.

The two screens looked the same. They had the same shape of code. But they kept their data in two different places. Fixing one did nothing for the other. It was like watering your neighbor's plant and being sad that yours is dry.

**What I learned:** when you fix one thing, go and look for its twin.

## Lesson 5: Why load the same data twice?

Every time a user closed a screen and opened it again, the app asked the server for the same data. Again. And again. The server was polite, but I think it was tired.

So I added a short memory. The app now remembers the answer for five minutes. If you come back in five minutes, it says, "I remember this one," and skips the trip.

Then I found two small problems with my own idea.

First, the memory never cleaned itself. It would grow and grow, like a bag of things you never throw away. So now it clears old things when it adds new things.

Second, when a person logged out, the memory stayed. The next person could see the first person's data. That is bad. Very bad. Now the memory is wiped when someone logs out.

**What I learned:** a good idea can still have a bad side. Always ask, "What happens next?"

## Lesson 6: Not every wish can be granted

I wanted to be clever. I thought, "If the user adds one more program to their list, I will only ask the server about the new one and then join the answers."

Nice idea. It does not work. The server already adds everything together before it sends the answer. I cannot pull one part out of a finished soup.

So I cache the whole answer for the exact same choices. It is less clever. It is correct. I will take correct over clever every day.

**What I learned:** sometimes the honest answer to "can we do this?" is "not like that, but here is something close."

## Lesson 7: One letter can break a whole month

This one is my favorite.

Our database code checked if the view was "M". But the app sent the word "Monthly". M is not Monthly. So the monthly part of the code never ran. For a long time, Monthly view was quietly acting like Weekly view, and nobody knew.

The test people had always typed "M" by hand, so everything looked fine for them. The app used a different word and met a different world.

I fixed it so both words are accepted.

**What I learned:** test the way your users really test. Not the way that is easy for you.

## Lesson 8: The internet can go away and not tell you

One day the fake phone said, "No internet." But my computer had internet. I was sure the app was broken.

It was not. The fake phone just could not find its way to the internet. I gave it a new map (some DNS numbers) and restarted it. It started to talk to the world again.

**What I learned:** when the whole world is broken, check the little room you are standing in first.

## Lesson 9: Say what you did not check

This is the quiet lesson. Many times, my tests passed. My code was clean. Everything was green. I felt great.

But I had not tried it on a real phone. So I wrote it down: "Not checked on the device."

It feels small to write that. But it is honest. A green test is not the same as a happy user. I want my future self to know what I really saw and what I only hoped.

**What I learned:** "It works" and "I think it works" are two different sentences. Use the right one.

## The end, and a hug

After a month, the app is a little better. I am a little better too.

I learned that bugs are not enemies. They are just messages written in a very rude way. When you read them slowly and with coffee, they say useful things.

If you are a new developer and today everything is broken: that is normal. It was broken for me too. Drink some water. Take a short walk. Come back. The bug will still be there, but you will be calmer, and calm people find bugs faster.

Thank you for reading. Now go and sit in the sun for five minutes. The cache can wait.
