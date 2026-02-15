/*
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several properties describing the album.

Write a function updateRecords(records, id, prop, value) that takes the following parameters:
- records: an object containing the album collection.
- id: the id number of the album to update.
- prop: the name of the property to update (e.g., "artist", "albumTitle", or "tracks").
- value: the value to set for the property.

The function should modify the records object according to these rules:
1. If value is an empty string, delete the given prop property from the album.
2. If prop is "tracks" and value is not an empty string, add value to the end of the album's tracks array. If the album does not have a tracks property, create an empty array before adding the new value.
3. If prop is not "tracks" and value is not an empty string, set the album's prop property to value.

Return the updated records object.
*/

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    // If the tracks property does not exist, create an empty array
    if(!records[id].tracks) {
        records[id].tracks = [];
    }
    // Add the new track to the tracks array
    records[id].tracks.push(value);
    // If prop is not "tracks" and value is not an empty string
    } else {
        records[id][prop] = value;
    }
  return records;
}

// Test cases
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));