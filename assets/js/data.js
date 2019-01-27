var soundsDirectory = "assets/sounds/";
var soundsFolders = ["A", "B", "C", "D", "E", "F", "G"];
var currentFolder = "A";
var keyData = loadKeyData(currentFolder);

document.addEventListener("keypress", function(event){
    if (event.key === " "){
    	var newIndex = (soundsFolders.indexOf(currentFolder) + 1) % soundsFolders.length;
        currentFolder = soundsFolders[newIndex];
        keyData = loadKeyData(currentFolder);
    }
});

function loadKeyData(folder){
    var newKeyData = {
        q: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/bubbles.mp3"]
            }),
			color: "#1abc9c"
        },
        w: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/clay.mp3"]
            }),
			color: "#2ecc71"
        },
        e: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/confetti.mp3"]
            }),
			color: "#3498db"
        },
        r: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/corona.mp3"]
            }),
			color: "#9b59b6"
        },
        t: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/dotted-spiral.mp3"]
            }),
			color: "#34495e"
        },
        y: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/flash-1.mp3"]
            }),
			color: "#16a085"
        },
        u: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/flash-2.mp3"]
            }),
			color: "#27ae60"
        },
        i: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/flash-3.mp3"]
            }),
			color: "#2980b9"
        },
        o: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/glimmer.mp3"]
            }),
			color: "#8e44ad"
        },
        p: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/moon.mp3"]
            }),
			color: "#2c3e50"
        },
        a: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/pinwheel.mp3"]
            }),
			color: "#f1c40f"
        },
        s: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/piston-1.mp3"]
            }),
			color: "#e67e22"
        },
        d: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/piston-2.mp3"]
            }),
			color: "#e74c3c"
        },
        f: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/prism-1.mp3"]
            }),
			color: "#95a5a6"
        },
        g: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/prism-2.mp3"]
            }),
			color: "#f39c12"
        },
        h: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/prism-3.mp3"]
            }),
			color: "#d35400"
        },
        j: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/splits.mp3"]
            }),
			color: "#1abc9c"
        },
        k: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/squiggle.mp3"]
            }),
			color: "#2ecc71"
        },
        l: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/strike.mp3"]
            }),
			color: "#3498db"
        },
        z: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/suspension.mp3"]
            }),
			color: "#9b59b6"
        },
        x: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/timer.mp3"]
            }),
			color: "#34495e"
        },
        c: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/ufo.mp3"]
            }),
			color: "#16a085"
        },
        v: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/veil.mp3"]
            }),
			color: "#27ae60"
        },
        b: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/wipe.mp3"]
            }),
			color: "#2980b9"
        },
        n: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/zig-zag.mp3"]
            }),
			color: "#8e44ad"
        },
        m: {
			sound: new Howl({
                src: [soundsDirectory + folder + "/moon.mp3"]
            }),
	        color: "#2c3e50"
        }
    }
    return newKeyData;
}
