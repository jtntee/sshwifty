// Sshwifty - A Web SSH client
//
// Copyright (C) 2019-2022 Ni Rui <ranqus@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// Generated by:
//
// <!doctype html>
// <html>
// 	<meta charset="UTF-8" />
// 	<title>KEYBOARDEVENT KEY DUMP</title>

// 	<input name="key" id="input" />

// 	<script>
// 		var keyHistory = [];
// 		var targetProps = [
// 			"altKey",
// 			"char",
// 			"charCode",
// 			"code",
// 			"ctrlKey",
// 			"key",
// 			"keyCode",
// 			"location",
// 			"metaKey",
// 			"repeat",
// 			"shiftKey",
// 			"which",
// 		]

// 		document.getElementById("input").addEventListener("keydown", function(e) {
// 			e.preventDefault();

// 			var ev = {};

// 			for (var i in targetProps) {
// 				ev[targetProps[i]] = e[targetProps[i]];
// 			}

// 			keyHistory.push([e.key, ev])

// 			document.getElementById("result").innerHTML = JSON.stringify(keyHistory);
// 		})

// 	</script>

// 	<div id="result">
// 	</div>
// </html>

export const consoleScreenKeys = [
  {
    title: "Function Keys",
    keys: [
      [
        "F1",
        {
          altKey: false,
          charCode: 0,
          code: "F1",
          ctrlKey: false,
          key: "F1",
          keyCode: 112,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 112,
        },
      ],
      [
        "F2",
        {
          altKey: false,
          charCode: 0,
          code: "F2",
          ctrlKey: false,
          key: "F2",
          keyCode: 113,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 113,
        },
      ],
      [
        "F3",
        {
          altKey: false,
          charCode: 0,
          code: "F3",
          ctrlKey: false,
          key: "F3",
          keyCode: 114,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 114,
        },
      ],
      [
        "F4",
        {
          altKey: false,
          charCode: 0,
          code: "F4",
          ctrlKey: false,
          key: "F4",
          keyCode: 115,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 115,
        },
      ],
      [
        "F5",
        {
          altKey: false,
          charCode: 0,
          code: "F5",
          ctrlKey: false,
          key: "F5",
          keyCode: 116,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 116,
        },
      ],
      [
        "F6",
        {
          altKey: false,
          charCode: 0,
          code: "F6",
          ctrlKey: false,
          key: "F6",
          keyCode: 117,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 117,
        },
      ],
      [
        "F7",
        {
          altKey: false,
          charCode: 0,
          code: "F7",
          ctrlKey: false,
          key: "F7",
          keyCode: 118,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 118,
        },
      ],
      [
        "F8",
        {
          altKey: false,
          charCode: 0,
          code: "F8",
          ctrlKey: false,
          key: "F8",
          keyCode: 119,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 119,
        },
      ],
      [
        "F9",
        {
          altKey: false,
          charCode: 0,
          code: "F9",
          ctrlKey: false,
          key: "F9",
          keyCode: 120,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 120,
        },
      ],
      [
        "F10",
        {
          altKey: false,
          charCode: 0,
          code: "F10",
          ctrlKey: false,
          key: "F10",
          keyCode: 121,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 121,
        },
      ],
      [
        "F11",
        {
          altKey: false,
          charCode: 0,
          code: "F11",
          ctrlKey: false,
          key: "F11",
          keyCode: 122,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 122,
        },
      ],
      [
        "F12",
        {
          altKey: false,
          charCode: 0,
          code: "F12",
          ctrlKey: false,
          key: "F12",
          keyCode: 123,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 123,
        },
      ],
    ],
  },
  {
    title: "Misc Keys",
    keys: [
      [
        "Escape",
        {
          altKey: false,
          charCode: 0,
          code: "Escape",
          ctrlKey: false,
          key: "Escape",
          keyCode: 27,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 27,
        },
      ],
      [
        "Tab",
        {
          altKey: false,
          charCode: 0,
          code: "Tab",
          ctrlKey: false,
          key: "Tab",
          keyCode: 9,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 9,
        },
      ],
      [
        "Insert",
        {
          altKey: false,
          charCode: 0,
          code: "Insert",
          ctrlKey: false,
          key: "Insert",
          keyCode: 45,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 45,
        },
      ],
      [
        "Delete",
        {
          altKey: false,
          charCode: 0,
          code: "Delete",
          ctrlKey: false,
          key: "Delete",
          keyCode: 46,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 46,
        },
      ],
    ],
  },
  {
    title: "Navigation Keys",
    keys: [
      [
        "Home",
        {
          altKey: false,
          charCode: 0,
          code: "Home",
          ctrlKey: false,
          key: "Home",
          keyCode: 36,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 36,
        },
      ],
      [
        "End",
        {
          altKey: false,
          charCode: 0,
          code: "End",
          ctrlKey: false,
          key: "End",
          keyCode: 35,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 35,
        },
      ],
      [
        "Up " + String.fromCharCode(8593),
        {
          altKey: false,
          charCode: 0,
          code: "ArrowUp",
          ctrlKey: false,
          key: "ArrowUp",
          keyCode: 38,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 38,
        },
      ],
      [
        "Down " + String.fromCharCode(8595),
        {
          altKey: false,
          charCode: 0,
          code: "ArrowDown",
          ctrlKey: false,
          key: "ArrowDown",
          keyCode: 40,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 40,
        },
      ],
      [
        "Left " + String.fromCharCode(8592),
        {
          altKey: false,
          charCode: 0,
          code: "ArrowLeft",
          ctrlKey: false,
          key: "ArrowLeft",
          keyCode: 37,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 37,
        },
      ],
      [
        "Right " + String.fromCharCode(8594),
        {
          altKey: false,
          charCode: 0,
          code: "ArrowRight",
          ctrlKey: false,
          key: "ArrowRight",
          keyCode: 39,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 39,
        },
      ],
      [
        "Page Up " + String.fromCharCode(9652),
        {
          altKey: false,
          charCode: 0,
          code: "PageUp",
          ctrlKey: false,
          key: "PageUp",
          keyCode: 33,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 33,
        },
      ],
      [
        "Page Down " + String.fromCharCode(9662),
        {
          altKey: false,
          charCode: 0,
          code: "PageDown",
          ctrlKey: false,
          key: "PageDown",
          keyCode: 34,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 34,
        },
      ],
    ],
  },
  {
    title: "Control Keys",
    keys: [
      [
        "Ctrl+C",
        {
          altKey: false,
          charCode: 0,
          code: "KeyC",
          ctrlKey: true,
          key: "c",
          keyCode: 67,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 67,
        },
      ],
      [
        "Ctrl+Z",
        {
          altKey: false,
          charCode: 0,
          code: "KeyZ",
          ctrlKey: true,
          key: "z",
          keyCode: 90,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 90,
        },
      ],
      [
        "Ctrl+R",
        {
          altKey: false,
          charCode: 0,
          code: "KeyR",
          ctrlKey: true,
          key: "r",
          keyCode: 82,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 82,
        },
      ],
      [
        "Ctrl+L",
        {
          altKey: false,
          charCode: 0,
          code: "KeyL",
          ctrlKey: true,
          key: "l",
          keyCode: 76,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 76,
        },
      ],
      [
        "Ctrl+A",
        {
          altKey: false,
          charCode: 0,
          code: "KeyA",
          ctrlKey: true,
          key: "a",
          keyCode: 65,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 65,
        },
      ],
      [
        "Ctrl+E",
        {
          altKey: false,
          charCode: 0,
          code: "KeyE",
          ctrlKey: true,
          key: "e",
          keyCode: 69,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 69,
        },
      ],
      [
        "Ctrl+W",
        {
          altKey: false,
          charCode: 0,
          code: "KeyW",
          ctrlKey: true,
          key: "w",
          keyCode: 87,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 87,
        },
      ],
      [
        "Ctrl+U",
        {
          altKey: false,
          charCode: 0,
          code: "KeyU",
          ctrlKey: true,
          key: "u",
          keyCode: 85,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 85,
        },
      ],
      [
        "Ctrl+K",
        {
          altKey: false,
          charCode: 0,
          code: "KeyK",
          ctrlKey: true,
          key: "k",
          keyCode: 75,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 75,
        },
      ],
      [
        "Ctrl+D",
        {
          altKey: false,
          charCode: 0,
          code: "KeyD",
          ctrlKey: true,
          key: "d",
          keyCode: 68,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 68,
        },
      ],
      [
        "Ctrl+Q",
        {
          altKey: false,
          charCode: 0,
          code: "KeyQ",
          ctrlKey: true,
          key: "q",
          keyCode: 81,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 81,
        },
      ],
      [
        "Ctrl+X",
        {
          altKey: false,
          charCode: 0,
          code: "KeyX",
          ctrlKey: true,
          key: "x",
          keyCode: 88,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 88,
        },
      ],
      [
        "Ctrl+T",
        {
          altKey: false,
          charCode: 0,
          code: "KeyT",
          ctrlKey: true,
          key: "t",
          keyCode: 84,
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 84,
        },
      ],
    ],
  },
];
