# Install
```
tsc
```

# Run
```
# address format: <street> <house-number>, <zip> <city> ex. Caspar-Wüst-Strasse 38, 8052 Zürich
./fiber.sh <address>
```

# Examples
```
$ ./fiber.sh "Definitely-Has-Fiber-Street 38, 8052 Zürich"
{ result_count: 1,
  results:
   [ { infos: [Object],
       score: 100,
       source: 'ALEX',
       ordering: 'ALEX',
       house_number: '38',
       street_name: 'Definitely-Has-Fiber-Street',
       city: 'Zürich ',
       zip_code: '8052' } ],
  qualiResultState: true }
  
  
$ ./fiber.sh "No-Fiber-Street 38, 8052 Zürich"
{ result_count: 0, results: [], qualiResultState: true }

$ ./fiber.sh "Long
Street
With
New lines 38

8052 Zürich"
{ result_count: 0, results: [], qualiResultState: true }
```
