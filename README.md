# ionic-starter-es6-with-modules

Ionic tabs starter project using babel as an es6 transpiler with sourcemaps.

Using 'amd' module output from babel with moduleIds turned on with curl.js to start.  Additionally, I converted
all controllers and services to classes and organized the dir structure by domain to see how it'd work out.  Still
found myself injecting $scope into classes when I wanted to bind to properties used in ngModel (not too bad).  Looks
like you have to $inject to support minification since constructor args don't have a way to communicate selectors for
the DI container besides their names.

I used http://status203.me/2015/01/11/getting-started-ionic-es6/ as a guide to get started.

I've had ionic serve --lab crash a few times on me when I have a gross syntax error in my es6 source.  Additionally,
I've had issues reloading the www/js/all.js file via livereload after babel has run; cached versions seem to be retained
so this may be a livereload caching issue.

Any suggestions welcome.