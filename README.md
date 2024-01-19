# Components library for Newsletters and Landing Pages
   There is no too much components, because there is a lot of combinations you can create by yourself just by using created markup

## Check yourself:
   This is not a required step.
   Paste HTML code in order to check is it valid or not: https://validator.w3.org/

## important - YAGNI
   Before creating new class, think about is it possible to use classes that have been already created to achieve result

## Components created without paddings and background colors. Added only styles for text with media queries for media query: max-width: 768px
  Since containers depends from design you can create it for yourself,
  most common containers added to Containers folder.
  In order to add background color, you can add inline style for particular tag.

## Outlook doesn't accept class="first_class second_class" only class="first_class" is accepted
  So, if you want to add more containers for Title, you have to nest in inside tables.
  Check exmaples of HTML code inside Examples folder.

## Class with padding can be applied only for td or table
   Unless you change display property for tag.
   But, if you apply padding for table tag, be shure that on Outlook older version it will render as you expected.
   Check [Figma file](https://www.figma.com/file/UxCIKxIAe1VRXjWivWkRFK/HTML-EMAILS-STYLES-AND-RESTRICTIONS?type=design&node-id=0-1&mode=design&t=EJtLwyfWK4maaroO-0) to figure out with Outlook bugs

## Why CTA, Title and Subtitle are components?
   Because every component contain different styles for Text.<br />
   CTA - 20px font-size <br />
   Title - 30px font-size <br />
   Subtitle - 18px font-size <br />

## What is complex component?
   Component this is code that contains other small components.
   
   Example:
   [Category component](https://github.com/demczenko/Components/tree/main/Examples/CategoryImageWithProducts) (complex component) contain components like:
   
   Title,
   Image with link,
   Subtitle,
   Products grid and
   CTA
   
## Where to find complex components?
   [Example](https://github.com/demczenko/Components/tree/main/Examples) folder contains folders with components.
   Every folder component contains 2 files: *.css and *.html

## How to use complex component?
   **Step 1** <br />
   Copy html code from html file and paste it into your newsletter.html file. <br />
   **Step 2** <br />
   Complex components should be nested inside **td** tag. <br />
   (you can always validate your markup - only to check **tag** markup)
   <br />
   **Step 3** <br />
   Copy style code from css file and paste it into newsletter.css file.

## Caveats!
   Every complex component folder contains css file in which some styles can be duplicated.
   
   Example:
   You have newsletter with 4 categories and Intro section.
   
   Since category component contains title and subtitle, you will find the title and subtitle styles in style.css file.
   Intro section component also contains the same styles for title and subtitle.
   
   So, there is no reason to copy second time styles from style.intro.css file for title and subtitle as they will be duplicated.
