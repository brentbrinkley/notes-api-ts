"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Note = /** @class */ (function () {
    function Note(color, shape, midi_val, common_notaion, svg, filtered) {
        this.color = color;
        this.shape = shape;
        this.midi_val = midi_val;
        this.common_notaion = common_notaion;
        this.svg = svg;
        this.filtered = filtered;
    }
    return Note;
}());
var noteData = {
    colors: [
        'gold',
        'black',
        'red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'purple',
        'pink',
        'grey'
    ],
    shapes: [
        'circle',
        'moon',
        'star',
        'plus',
        'triangle',
        'square',
        'key',
        'leaf',
        'crown',
        'cube',
        'minus',
        'sun'
    ],
    octaves: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pitches: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    svg_shapes: [
        "<svg id=\"circle\" width=\"59\" height=\"59\" viewBox=\"0 0 59 59\" xmlns=\"http://www.w3.org/2000/svg\"><title> 1-Circle-C</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><circle cx=\"29.3\" cy=\"29.3\" r=\"29.3\"/></g></g></svg>",
        "<svg id=\"moon\" width=\"45\" height=\"59\" viewBox=\"0 0 45 59\" xmlns=\"http://www.w3.org/2000/svg\"><title> 2-Moon-C-Sharp</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><path d=\"M0 53.8C4.4 56.5 9.6 58.1 15.1 58.1 31.1 58.1 44.1 45.1 44.1 29 44.1 13 31.1 0 15.1 0 9.6 0 4.4 1.5 0 4.2 8.4 9.3 13.9 18.5 13.9 29 13.9 39.5 8.4 48.7 0 53.8L0 53.8Z\"/></g></g></svg>",
        "<svg id=\"star\" width=\"63\" height=\"63\" viewBox=\"0 0 63 63\" xmlns=\"http://www.w3.org/2000/svg\"><title> 3-Star-D</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><polygon points=\"40.7 53.9 31.3 62.1 21.7 54.1 9.3 53.2 8.2 40.7 0 31.3 8 21.7 8.9 9.3 21.3 8.2 30.8 0 40.3 8 52.8 8.9 53.9 21.3 62.1 30.8 54.1 40.3 53.2 52.8\"/></g></g></svg>",
        "<svg id=\"plus\" width=\"59\" height=\"59\" viewBox=\"0 0 59 59\" xmlns=\"http://www.w3.org/2000/svg\"><title> 4-Plus-D-Sharp</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><path d=\"M18.5 18.5L4 18.5C1.8 18.5 0 20.3 0 22.5L0 36.5C0 38.7 1.8 40.5 4 40.5L18.5 40.5 18.5 55C18.5 57.2 20.3 59 22.5 59L36.5 59C38.7 59 40.5 57.2 40.5 55L40.5 40.5 55 40.5C57.2 40.5 59 38.7 59 36.5L59 22.5C59 20.3 57.2 18.5 55 18.5L40.5 18.5 40.5 4C40.5 1.8 38.7 0 36.5 0L22.5 0C20.3 0 18.5 1.8 18.5 4L18.5 18.5Z\"/></g></g></svg>",
        "<svg id=\"triangle\" width=\"66\" height=\"54\" viewBox=\"0 0 66 54\" xmlns=\"http://www.w3.org/2000/svg\"><title> 5-Triangle-E</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><polygon points=\"32.6 0 65.3 53.4 0 53.4\"/></g></g></svg>",
        "<svg id=\"square\" width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" xmlns=\"http://www.w3.org/2000/svg\"><title> 6-Square-F</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><rect width=\"53.5\" height=\"53.5\" rx=\"6\"/></g></g></svg>",
        "<svg id=\"key\" width=\"36\" height=\"60\" viewBox=\"0 0 36 60\" xmlns=\"http://www.w3.org/2000/svg\"><title> 7-Key-F-Sharp</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><path d=\"M8.8 28.6C3.5 25.9 0 21 0 15.4 0 6.9 8.1 0 18 0 27.9 0 36 6.9 36 15.4 36 21 32.5 25.9 27.2 28.6L34.9 56.1C35.5 58.3 34.2 60 32 60L4 60C1.8 60 0.5 58.3 1.1 56.1L8.8 28.6Z\"/></g></g></svg>",
        "<svg id=\"leaf\" width=\"55\" height=\"65\" viewBox=\"0 0 55 65\" xmlns=\"http://www.w3.org/2000/svg\"><title> 8-Leaf-G</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><path d=\"M42.3 12.9C45.6 16.5 48.4 20.3 50.1 24.1 55.8 36.1 55.8 48.2 50.1 54.2 45.1 59.5 35.5 60.2 29.4 56.9 29.4 57 29.5 57.1 29.5 57.2L29.6 64.3 25.1 64.3 24.9 57.2C24.9 57.1 24.9 57 24.9 56.9 18.8 60.2 9.3 59.5 4.3 54.2 -1.4 48.2-1.4 36.1 4.3 24.1 8.3 15.1 18.6 6 27.2 0 29.9 1.9 32.8 4.1 35.7 6.6 33.8 7.3 32.4 9.1 32.4 11.2 32.4 13.9 34.7 16.1 37.5 16.1 39.7 16.1 41.6 14.8 42.3 12.9Z\"/></g></g></svg>",
        "<svg id=\"crown\" width=\"72\" height=\"51\" viewBox=\"0 0 72 51\" xmlns=\"http://www.w3.org/2000/svg\"><title> 9-Crown-G-Sharp</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><path d=\"M61.5 12.7C61.5 14.8 62.5 16.5 64 17.5 60.8 22.2 56.4 27.6 51.9 29.2 45.9 31.3 40.3 18.5 37.6 11 39.6 10.2 41.1 8.1 41.1 5.6 41.1 2.5 38.8 0 35.9 0 33.1 0 30.8 2.5 30.8 5.6 30.8 8.1 32.2 10.2 34.3 11 31.5 18.5 26 31.3 20 29.2 15.4 27.6 11 22.2 7.9 17.5 9.4 16.5 10.4 14.8 10.4 12.7 10.4 9.6 8 7.1 5.2 7.1 2.3 7.1 0 9.6 0 12.7 0 15.9 2.3 18.4 5.2 18.4 5.2 18.4 12.3 50.9 12.3 50.9L59.5 50.9 66.5 18.4C69.6 18.4 71.9 15.9 71.9 12.7 71.9 9.6 69.6 7.1 66.7 7.1 63.8 7.1 61.5 9.6 61.5 12.7Z\"/></g></g></svg>",
        "<svg id=\"cube\" width=\"60\" height=\"69\" viewBox=\"0 0 60 69\" xmlns=\"http://www.w3.org/2000/svg\"><title> 10-Metatron-A</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><polygon points=\"30.1 0 59.6 17 59.6 51.1 30.1 68.1 0.6 51.1 0.6 17\"/></g></g></svg>",
        "<svg id=\"minus\" width=\"63\" height=\"28\" viewBox=\"0 0 63 28\" xmlns=\"http://www.w3.org/2000/svg\"><title> 11-Minus-A-Sharp</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><rect width=\"62.2\" height=\"27.1\" rx=\"6\"/></g></g></svg>",
        "<svg id=\"sun\" width=\"76\" height=\"75\" viewBox=\"0 0 76 75\" xmlns=\"http://www.w3.org/2000/svg\"><title> 12-Sun-B</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#FFF\"><polygon points=\"37.6 64.2 30.7 74.9 28.1 62.4 17.7 69.9 19.8 57.3 7.5 60.5 14 49.5 1.3 48.1 11.3 40.2 0 34.3 12.2 30.5 3.8 20.9 16.5 21.8 12.2 9.9 23.7 15.3 24 2.6 32.8 11.8 37.6 0 42.5 11.8 51.3 2.6 51.6 15.3 63.1 9.9 58.7 21.8 71.5 20.9 63.1 30.5 75.3 34.3 64 40.2 74 48.1 61.3 49.5 67.8 60.5 55.5 57.3 57.5 69.9 47.2 62.4 44.6 74.9\"/></g></g></svg>"
    ]
};
// returns an array of composed old notation values
function buildCommonNotation() {
    var oldNotation = [];
    noteData.octaves.forEach(function (octave) {
        noteData.pitches.forEach(function (pitch) {
            oldNotation.push("" + pitch + octave);
        });
    });
    return oldNotation;
}
// compose our note data
function buildNote() {
    var counter = 0;
    var container = [];
    var oldNotation = buildCommonNotation();
    noteData.colors.forEach(function (color) {
        // If the midi value is less than the max value of 127 loop
        noteData.shapes.forEach(function (shape, index) {
            if (counter < 128) {
                container.push(new Note(color, shape, counter, oldNotation[counter], noteData.svg_shapes[index], false));
            }
            counter += 1;
        });
    });
    return container;
}
exports.default = buildNote();
//# sourceMappingURL=Note.js.map