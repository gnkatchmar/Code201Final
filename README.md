###Going forward we are merging our branches into the 'working' branch.
- We will use the working branch to test our changes as a team before we merge working into master.
- Thus, master will always be functional, hopefully bug-free, and presentation-ready!

To see the latest-greatest, just bring up your console and type:

    git pull origin working

Then checkout your local 'working' branch:

    git checkout working

Load it up in your browser/editor to have a look! Keep in mind that the working branch is what we as a team are proposing to merge into master at some point in the future -- once we are sure it's stable. This should take some of the anxiety out of making/merging a pull request!

__Note: This is easy to do, but also easy to forget. When you submit a pull request just be sure that your 'base' branch dropdown is set to 'working' and not 'master'.__

----------

https://docs.google.com/spreadsheets/d/16IxZ8lJr8j_VHQySW8rdTueaeK7XSBh6oqZ1E0bHWhw/edit?usp=sharing

//////////////////////////

Using Git for Project:

Initial setup, only have to do once: "$ git clone [url]". This creates a new folder, so have to: "cd [new folder]" to navigate where you need to be.

To begin work on a new issue branch:

1.  In [master] (use "$ git checkout master" if not in [master] : "$ git pull origin master". This insures that you have the most up-to-date versions of the files.
2.  "$ git checkout -b [issue#_description]". This creates and switches you to the new branch which will be named something like "10_addCSStoInputs".
3.  Do your work. When done, use the usual add ., commit -m, and push origin [branchname].
4.  Go to GitHub, switch to your new branch, and create pull request.	

//////////////////////////

The Breakfast Club
Team Members: Gregory  Katchmar (launch driver), Cheryl Cruz, Jade Dhabolt, Nathan Pickard, Rosemary Joe

Problem Statement: Yelp doesn’t allow a method to see when restaurants are open at a future time

Scope: limited to weekend brunch restaurants

Project Pitch: app lets user input desired time, preferred neighborhood, maybe get browser location to show nearby restaurants (if doable), provides links to restaurant website, provide user opportunity to review app, use a Google Map of all locations and also filter by time and neighborhood, maybe have short cuisine/price description/photos?


First page: location awareness provides list of nearby restaurants (if user opts to allow), then provides user opportunity to launch refined search or Google Map
Second page: user can enter time and neighborhood to get a different set of restaurants
Third page: Google Map of the restaurants

All restaurants will be linked to their website

Store last user’s settings in local storage.