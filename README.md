## Website Performance Optimization portfolio project

The aim of this project was to 
- Optimize PageSpeed Insights score for index.html
- Optimize Frames per Second in pizza.html

### Setup

Follow the steps below to set up the project

1. Clone or download the repo.
2. Navigate to the project directory and run `npm install` to install all the node dependencies.
3. Run `grunt` to apply automated optimizations like minification and image compression.
4. The `dist` folder contains the production _optimized_ version and `src` folder contains the development version.
5. You can also check the [app hosted on github.io](http://royshouvik.github.io/frontend-nanodegree-mobile-portfolio/dist).

### Optimizations performed
#### Part 1 - Optimize PageSpeed Insights score for index.html

1. Resized and compressed image "pizzeria.jpg" to reduce size by 99%.
2. Moved scripts to bottom of `index.html` just before the `</body>` tag to unblock CRP.
3. Added media query to print stylesheets to unblock rendering.
4. Achived 50% reduction in transferred bytes by minifying and combining scripts using `grunt-contrib-uglify` plugin.
5. Removed render blocking CSS using `grunt-critical` plugin.
6. Used `grunt-contrib-imagemin` plugin to optimize and compress images. This saved 103 KB of data.


After performing these optimizations, the Page Speed score improved to 95+ for both mobile and desktop.

#### Part 2 - Optimize Frames per Second in pizza.html
1. Wrap the function body inside requestAnimationFrame 
2. Fetch and assign "scrollTop" outside of the loop
3. Reduce the number of movable pizza elements from 200 to 30, since rest of the pizza elements are outside the viewport due to fixed positioning and
performance depends on the number of elements modified.