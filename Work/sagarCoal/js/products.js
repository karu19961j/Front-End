function _onCardMove(track) {

        var radius = track.width / 2;

        var center = {
          x: track.x,
          y: track.y
        };

        polygonMap.points.forEach(function(point, i) {

          if (_detectPointInCircle(point, radius, center)) {

            // Notice that since the points array has been previously generated
            // from the paths array we can safely use the index to get the correct path.
            $(polygonMap.paths[i]).attr('class', CLASSES.polygon);

          } else {
            $(polygonMap.paths[i]).attr('class', CLASSES.polygon + ' ' + CLASSES.polygonHidden);
          }
        });
      }

      /**
       * Detect if a point is inside a circle area.
       * @param {object} point The point to test.
       * @param {number} radius The width of the card.
       * @param {object} center The center of the card.
       * @private
       */
      function _detectPointInCircle(point, radius, center) {

        var xp = point.x;
        var yp = point.y;

        var xc = center.x;
        var yc = center.y;

        var d = radius * radius;

        var isInside = Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2) <= d;

        return isInside;
      };

var polygonMap = {
     paths: null,
     points: null
   };

   ...

   /**
    * Store path elements, map coordinates and sizes.
    * @param {Element} pattern The SVG Element generated with Trianglify.
    * @private
    */
   function _mapPolygons(pattern) {

     // Append SVG to pattern container.
     $(SELECTORS.pattern).append(pattern);

     // Convert nodelist to array,
     // Used `.childNodes` because IE doesn't support `.children` on SVG.
     polygonMap.paths = [].slice.call(pattern.childNodes);

     polygonMap.points = [];

     polygonMap.paths.forEach(function(polygon) {

       // Hide polygons by adding CSS classes to each svg path (used attrs because of IE).
       $(polygon).attr('class', CLASSES.polygon + ' ' + CLASSES.polygonHidden);

       var rect = polygon.getBoundingClientRect();

       var point = {
         x: rect.left + rect.width / 2,
         y: rect.top + rect.height / 2
       };

       polygonMap.points.push(point);
     });

     // All polygons are hidden now, display the pattern container.
     $(SELECTORS.pattern).removeClass(CLASSES.patternHidden);
   };

Card.prototype._clipImageIn = function() {

      // Circle.
      var tween = TweenLite.to(this._clip, 1, {
        attr: {
          r: 60
        },
        ease: Expo.easeInOut
      });

      return tween;
    };

/**
    * Float card to final position.
    * @param {Function} callback The callback `onCardMove`.
    * @private
    */
   Card.prototype._floatContainer = function(callback) {

     $(document.body).css('overflow', 'hidden');

     var TL = new TimelineLite;

     // Get the card position on the viewport.
     var rect = this._container.getBoundingClientRect();
     var windowW = window.innerWidth;

     var track = {
       width: 0,
       x: rect.left + (rect.width / 2),
       y: rect.top + (rect.height / 2),
     };

     // Fix the container to the card position (start point).
     TL.set(this._container, {
       width: rect.width,
       height: rect.height,
       x: rect.left,
       y: rect.top,
       position: 'fixed',
       overflow: 'hidden'
     });

     // Tween the container (and the track values) to full screen (end point).
     TL.to([this._container, track], 2, {
       width: windowW, // This value must be in px in order to correctly update the track width.
       height: '100%',
       x: windowW / 2,
       y: 0,
       xPercent: -50,
       ease: Expo.easeInOut,
       clearProps: 'all',
       className: '-=' + CLASSES.containerClosed,
       onUpdate: callback.bind(this, track)
     });

     return TL;
   };


       var TL = new TimelineLite; // Polygon

       var start = [
         [0, 500],
         [0, 0],
         [1920, 0],
         [1920, 500]
       ];

       var end = [
         [1025, 330],
         [1117, 171],
         [828, 206],
         [913, 260]
       ];

       var points = [];

       // Create a tween for each point

       start.forEach(function(point, i) {

         var tween = TweenLite.to(point, 1.5, end[i]);

         end[i].onUpdate = function() {

           points.push(point.join());

           // Every 4 point update clip-path.
           if (points.length === end.length) {
             $(this._clip).attr('points', points.join(' '));
             // Reset.
             points = [];
           };

         }.bind(this);

         tween.vars.ease = Expo.easeInOut;

         // Add the tween for each point at the start of the timeline.
         TL.add(tween, 0);

       }, this);

       return TL;
