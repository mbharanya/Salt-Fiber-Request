# Install
```
tsc
```

# Run
```
# address format: <street> <house-number>, <zip> <city> ex. Caspar-Wüst-Strasse 38, 8052 Zürich
node build/App.js <address>
```

# Example
```
$ node build/App.js "Caspar-Wüst-Strasse 38, 8052 Zürich"
{ result_count: 1,
  results:
   [ { infos: [Object],
       score: 100,
       source: 'ALEX',
       ordering: 'ALEX',
       house_number: '38',
       street_name: 'Caspar-Wüst-Strasse',
       city: 'Zürich ',
       zip_code: '8052' } ],
  qualiResultState: true }
  
  
$ node build/App.js "No-Fiber-Street 38, 8052 Zürich"
{ result_count: 0, results: [], qualiResultState: true }
```
