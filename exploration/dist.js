!function(n){function t(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=n,t.c=a,t.i=function(n){return n},t.d=function(n,a,e){t.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(a,"a",a),a},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar margin = { top: 10, right: 30, bottom: 30, left: 60 };\nvar width = 960 - margin.left - margin.right;\nvar height = 500 - margin.top - margin.bottom;\n\nvar $name = d3.select('body').append('p').attr('class', 'name');\n\nvar $svg = d3.select('body').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);\n\nvar $g = $svg.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');\n\nfunction setupChart(data) {\n  var _data = _slicedToArray(data, 2),\n      peopleData = _data[0],\n      pageviewData = _data[1];\n\n  var person = peopleData[15];\n  var pageviews = pageviewData.filter(function (d) {\n    return d.pageid === person.pageid;\n  });\n  console.log({ person: person, pageviews: pageviews });\n\n  $name.text(person.display);\n\n  var $axisX = $g.append('g').attr('class', 'g-axis axis--x');\n  var $axisY = $g.append('g').attr('class', 'g-axis axis--y');\n  var $vis = $g.append('g').attr('class', 'g-vis');\n  var $path = $vis.append('path').attr('class', 'pageviews');\n\n  var scaleX = d3.scaleLinear().domain(d3.extent(pageviews, function (d) {\n    return d.timestamp;\n  })).range([0, width]);\n\n  var scaleY = d3.scaleLinear().domain([0, person.max_views]).range([height, 0]);\n\n  var line = d3.line().x(function (d) {\n    return scaleX(d.timestamp);\n  }).y(function (d) {\n    return scaleY(d.views);\n  });\n\n  $path.attr('d', line(pageviews));\n\n  var axisY = d3.axisLeft(scaleY);\n  $axisY.call(axisY);\n\n  var axisX = d3.axisBottom(scaleX);\n  $axisX.call(axisX).attr('transform', 'translate(0, ' + height + ')');\n}\n\nfunction loadPeopleData() {\n  return new Promise(function (resolve, reject) {\n    d3.csv('data/people.csv', function (d) {\n      return _extends({}, d, {\n        max_views: +d.max_views,\n        max_percent_traffic: +d.max_percent_traffic,\n        thumbnail_width: +d.thumbnail_width,\n        thumbnail_height: +d.thumbnail_height,\n        year_of_birth: +d.year_of_birth,\n        year_of_death: +d.year_of_death\n      });\n    }).then(resolve).catch(reject);\n  });\n}\n\nfunction loadPageviewsData() {\n  return new Promise(function (resolve, reject) {\n    d3.csv('data/pageviews.csv', function (d) {\n      return _extends({}, d, {\n        timestamp: +d.timestamp,\n        views: +d.views,\n        percent_traffic: +d.percent_traffic\n      });\n    }).then(resolve).catch(reject);\n  });\n}\n\nfunction init() {\n  var p = [loadPeopleData(), loadPageviewsData()];\n  Promise.all(p).then(setupChart).catch(console.error);\n}\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY3JpcHQuanM/OWE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXJnaW4gPSB7IHRvcDogMTAsIHJpZ2h0OiAzMCwgYm90dG9tOiAzMCwgbGVmdDogNjAgfTtcbmNvbnN0IHdpZHRoID0gOTYwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG5jb25zdCBoZWlnaHQgPSA1MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuY29uc3QgJG5hbWUgPSBkM1xuICAuc2VsZWN0KCdib2R5JylcbiAgLmFwcGVuZCgncCcpXG4gIC5hdHRyKCdjbGFzcycsICduYW1lJyk7XG5cbmNvbnN0ICRzdmcgPSBkM1xuICAuc2VsZWN0KCdib2R5JylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgLmF0dHIoJ3dpZHRoJywgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcblxuY29uc3QgJGcgPSAkc3ZnXG4gIC5hcHBlbmQoJ2cnKVxuICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKTtcblxuZnVuY3Rpb24gc2V0dXBDaGFydChkYXRhKSB7XG4gIGNvbnN0IFtwZW9wbGVEYXRhLCBwYWdldmlld0RhdGFdID0gZGF0YTtcbiAgY29uc3QgcGVyc29uID0gcGVvcGxlRGF0YVsxNV07XG4gIGNvbnN0IHBhZ2V2aWV3cyA9IHBhZ2V2aWV3RGF0YS5maWx0ZXIoZCA9PiBkLnBhZ2VpZCA9PT0gcGVyc29uLnBhZ2VpZCk7XG4gIGNvbnNvbGUubG9nKHsgcGVyc29uLCBwYWdldmlld3MgfSk7XG5cbiAgJG5hbWUudGV4dChwZXJzb24uZGlzcGxheSk7XG5cbiAgY29uc3QgJGF4aXNYID0gJGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZy1heGlzIGF4aXMtLXgnKTtcbiAgY29uc3QgJGF4aXNZID0gJGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZy1heGlzIGF4aXMtLXknKTtcbiAgY29uc3QgJHZpcyA9ICRnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ctdmlzJyk7XG4gIGNvbnN0ICRwYXRoID0gJHZpcy5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdwYWdldmlld3MnKTtcblxuICBjb25zdCBzY2FsZVggPSBkM1xuICAgIC5zY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihkMy5leHRlbnQocGFnZXZpZXdzLCBkID0+IGQudGltZXN0YW1wKSlcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgY29uc3Qgc2NhbGVZID0gZDNcbiAgICAuc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIHBlcnNvbi5tYXhfdmlld3NdKVxuICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgY29uc3QgbGluZSA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KGQgPT4gc2NhbGVYKGQudGltZXN0YW1wKSlcbiAgICAueShkID0+IHNjYWxlWShkLnZpZXdzKSk7XG5cbiAgJHBhdGguYXR0cignZCcsIGxpbmUocGFnZXZpZXdzKSk7XG5cbiAgY29uc3QgYXhpc1kgPSBkMy5heGlzTGVmdChzY2FsZVkpO1xuICAkYXhpc1kuY2FsbChheGlzWSk7XG5cbiAgY29uc3QgYXhpc1ggPSBkMy5heGlzQm90dG9tKHNjYWxlWCk7XG4gICRheGlzWC5jYWxsKGF4aXNYKS5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKTtcbn1cblxuZnVuY3Rpb24gbG9hZFBlb3BsZURhdGEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZDMuY3N2KCdkYXRhL3Blb3BsZS5jc3YnLCBkID0+ICh7XG4gICAgICAuLi5kLFxuICAgICAgbWF4X3ZpZXdzOiArZC5tYXhfdmlld3MsXG4gICAgICBtYXhfcGVyY2VudF90cmFmZmljOiArZC5tYXhfcGVyY2VudF90cmFmZmljLFxuICAgICAgdGh1bWJuYWlsX3dpZHRoOiArZC50aHVtYm5haWxfd2lkdGgsXG4gICAgICB0aHVtYm5haWxfaGVpZ2h0OiArZC50aHVtYm5haWxfaGVpZ2h0LFxuICAgICAgeWVhcl9vZl9iaXJ0aDogK2QueWVhcl9vZl9iaXJ0aCxcbiAgICAgIHllYXJfb2ZfZGVhdGg6ICtkLnllYXJfb2ZfZGVhdGhcbiAgICB9KSlcbiAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdldmlld3NEYXRhKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGQzLmNzdignZGF0YS9wYWdldmlld3MuY3N2JywgZCA9PiAoe1xuICAgICAgLi4uZCxcbiAgICAgIHRpbWVzdGFtcDogK2QudGltZXN0YW1wLFxuICAgICAgdmlld3M6ICtkLnZpZXdzLFxuICAgICAgcGVyY2VudF90cmFmZmljOiArZC5wZXJjZW50X3RyYWZmaWNcbiAgICB9KSlcbiAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IHAgPSBbbG9hZFBlb3BsZURhdGEoKSwgbG9hZFBhZ2V2aWV3c0RhdGEoKV07XG4gIFByb21pc2UuYWxsKHApXG4gICAgLnRoZW4oc2V0dXBDaGFydClcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG59XG5cbmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzY3JpcHQuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);