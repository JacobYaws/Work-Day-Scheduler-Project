#Work Day Scheduler

## Description

In this project, I was tasked with using an existing webpage to allow entries to be saved, as well as adding in Dayjs to show the correct day and time.

## Table of Contents

[Overview](#overview)
[Screenshots](#screenshots)
[Links](#links)

## Overview

-For this project, I added in the ability for users to save text entries to each hourly block and save them so that the tasks would still show on the page after the page was refreshed/opened. I also added in Dayjs so that the correct date is shown at the top of the page. To do this, I seperated each hour block section by assigning them unique IDs. Using the unique IDs, I was able to store them in the local storage with the text that was entered into that section. Upon a refresh of the page, the data stored in local storage would be pulled and rendered onto the page in the same section. 
-Each section is assigned a background color depending on the time of day. If the time is in the future, the background will be green, if the time is the same hour of the day, it will be red, and if the time is in the past, it will be grey. Dayjs was used to get the time needed to accurately show the sections as their respective colors. Dayjs was also used to show the current day that is presented at the top of the page.


## Screenshots

<img src="https://github.com/JacobYaws/Work-Day-Scheduler-Project/blob/main/Work%20Day%20Scheduler.gif">

## Links

-Github link: https://github.com/JacobYaws/Work-Day-Scheduler-Project

    -To download, navigate to the repository and click on the green 'Code' button. Copy the ssh link and clone it in a terminal by using 'git clone git@github.com:JacobYaws/Work-Day-Scheduler-Project.git'

-Link to the live website: https://jacobyaws.github.io/Work-Day-Scheduler-Project

-Dayjs: https://day.js.org/en/
