## About

This project will use NPM to download resources dependencies used by
many of sub-projects in this repository.

NOTE: The "node_modules" directory is checkin into the repository on
purpose! We want a static copy of it for off-line demo purpose.

NOTE2: Not all node dependencies works directly as the browser script!
For example, the "splitjs" need to manually download the browser script 
version into "resources" folder.

NOTE3: The "resources/node_modules/jquery-ui" contains source code but it's not
in a single file (however they are good for amd/requirejs loading). We have another 
version that has single script file in "resources/jquery-ui" for convenience as well.
