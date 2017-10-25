//A basic example, using Formats to generate random directions

const WeightedRandom = require('Meristem').WeightedRandom
const Format = require('Meristem').Format

const definitions = {
  segment: new WeightedRandom({
    '(go) until you reach (landmark), then (turn)': 3,
    '(go), then (turn)': 3,
    '(go) until you reach (landmark). After that, (turn)': 2,
    '(go) until you reach (landmark). Once you\'ve done that, (turn)': 2,
  }),
  landmark: new WeightedRandom({
    '(street)': 4,
    'the corner of (street) and (street)': 3,
    'the bridge': 2,
    'the tall brick building': 3,
    'a corner with a little bookstore': 2,
    'the bus stop': 2,
    '(landmark) near (landmark)': 1
  }),
  street: new WeightedRandom({
    'Abbey (streetSuffix)': 6,
    'King\'s (streetSuffix)': 3,
    'Atterbury (streetSuffix)': 2,
    'Bridge (streetSuffix)': 3,
    'Broad (streetSuffix)': 3,
    'Butler (streetSuffix)': 3,
    'Dean (streetSuffix)': 3,
    'Whitehall (streetSuffix)': 3
  }),
  streetSuffix: new WeightedRandom({
    'Street': 6,
    'Avenue': 3,
    'Way': 1,
    'Lane': 1,
    'Road': 1,
    'Court': 1
  }),
  go: new WeightedRandom({
    'walk a few blocks': 2,
    'go straight ahead': 3,
    'keep going': 1,
  }),
  turn: new WeightedRandom({
    'turn left': 2,
    'turn right': 3,
    'turn left onto (street)': 2,
    'turn right onto (street)': 3,
    'turn left by (landmark)': 1,
    'turn right by (landmark)': 1
  }),
  end: new WeightedRandom({
    '.': 7,
    ', and you\'re there.': 4,
    ', then (segment)(end)': 2,
    '. After that, (segment)(end)': 1,    
    ', (segment)(end)': 1
  })
}

const directions = new Format('To get to (landmark), (segment)(end)', definitions)
for(var i  = 0; i < 5; i++){
  console.log(directions.expand(), '\n')
}