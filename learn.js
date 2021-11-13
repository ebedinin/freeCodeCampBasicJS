// Setup
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

// Only change code below this line
function updateRecords(records, id, prop, value) {
    let obj = records[id];
    if (!obj) return records;
    if (!value) {
        delete obj[prop];
        return records;
    }
    if (prop === "tracks") {
        if (!obj.hasOwnProperty("tracks")) obj.tracks = [];
        obj.tracks.push(value);
        return records;
    }
    obj[prop] = value;
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');