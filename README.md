# Components library for Newsletters and Landing Pages
   there is no too much components, because there is a lot of combinations you can create by yourself just by using created markup

## Check yourself:
   Paste HTML code in order to check is it valid or not: https://validator.w3.org/

## YAGNI
   Before creating new class, think about is it possible to use classes that have been already created to achieve result

## Components created without paddings and background colors. Added only styles for text with media queries for media query: max-width: 768px
  since containers depends from design you can create it for yourself,
  most common containers added to Containers folder.
  In order to add background color, you can add inline style for particular tag.

## Outlook doesn't accept class="first_class second_class" only class="first_class" is accepted
  so, if you want to add more containers for Title, you have to nest in inside tables.
  Check exmaples of HTML code inside Examples folder.

## Class with padding can be applied only for td or table
  unless you change display property for tag.

## What is complex component?
Component this is code that contains other small components.

Example:
Category component (complex component) contain components like:

Title,
Image witl link
Subtitle
Products grid
CTA

## Why CTA, Title and Subtitle are components?

Because every component contain different styles for Text.
CTA - 20px
Title - 30px
Subtitle - 18px 

## Where to find complex components?

Example folder contains folders with components.
Every folder component contains 2 files: *.css and *.html

## How to use complex component?

Copy html code from html file and paste it into newsletter.html file.
Copy style code from css file and paste it into newsletter.css file.

## Caveats!

Every complex component folder contains css file where can be duplicated some styles.

Example:
You have newsletter with 4 categories and Intro section.

Since category component contains title and subtitle.
in style.css file you will find the title and subtitle styles.

And Intro section contains the same styles for title and subtitle.

So, there is no reason to copy second time styles from intro.css file for title and subtitle since them will be duplicated.
