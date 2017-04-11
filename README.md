# Model Privacy Notice Generator

This is tool for generating JSON representing your MPN.
You do not need to include this project in your project.
Just use the link below to create an MPN.
Below are instructions and an example.

Instructions:

1. Generate your MPN JSON using the MPN Generator @
http://transparenthealth.org/mpngen (If you want to set this up locally, the source code is @
https://github.com/TransparentHealth/pps)

2. Copy the json to a file. In our example we've put it in `src.js.json.js`.

3. Download the MPN Display library from https://github.com/TransparentHealth/pps-display

4. Reference the CSS in your HTML.1

5. Reference the JQuery

6. Reference the MPN JSON

7. Reference the MPN Display JavaScript

An online example can be found @ http://transparenthealth.org/mpndisplay/index.html


Here is the example `index.html` with comments:


    <!doctype html>
    <html lang="en">
    <head>
    <!--  The MPN styling-->
      <link rel="stylesheet" href="http://transparenthealth.org/pps-display/lib/styles/mpn.min.css" type="text/css">

      <meta name="viewport" content="width=device-width, initial-scale=1">
      
      <title>Example MPN</title>
    </head>
    <body>
       <h1>Example MPN</h1>

       <!--The div that performs the display-->
       <div class="policyDisplay"></div>

       <!-- Requires JQuery -->
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

       <!--The JSON representing your privacy notice-->
       <script src="src/js/json.js"></script>

       <!--The JavaScript to render the privacy notice-->
       <script src="http://transparenthealth.org/pps-display/lib/js/mpnDisplay.min.js"></script>


    </body>
    </html>



Instructions:


This is a submission for the 2017 Privacy Policy Snapshot Challenge
https://www.challenge.gov/challenge/privacy-policy-snapshot-challenge/
