class DoublyNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }   

add(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
    } 
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
}

delete(value) {
    if (!this.head) return;
    if (this.head.value === value) {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
        return;
    }
    let current = this.head;
    while (current && current.data !== data) {
        current = current.next;
    }
    if (current) {
        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;
        if (current.prev) current.prev.next = current.next;
    }
}

traverse(callback) {
    let current = this.head;
    while (current) {
        callback(current.data);
        current = current.next;
    }
}

search(data) {
    let current = this.head;
    while (current) {
        if (current.data === data) return current;
        current = current.next;
    }
    return null;
    }
}
const currentSongdisplay = document.getElementById("current-song");
const KoloheKaiPlaylist = new DoublyLinkedList();
KoloheKaiPlaylist.add("Cool Down");
KoloheKaiPlaylist.add("Ehu Girl");
KoloheKaiPlaylist.add("Dream Girl");
KoloheKaiPlaylist.add("He'e Roa");
KoloheKaiPlaylist.add("This Is the Life");
KoloheKaiPlaylist.add("Heartstrings");

const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let currentSongNode = KoloheKaiPlaylist.head;

function updateCurrentSongDisplay() {
    currentSongdisplay.innerText = currentSongNode.value;
}

play.addEventListener("click", () => {
    if (currentSongNode) {
        return updateCurrentSongDisplay();
    }
    return (currentSongNode = KoloheKaiPlaylist.head);
});

next.addEventListener("click", () => {
    if (currentSongNode && currentSongNode.next) {
        currentSongNode = currentSongNode.next;
        return updateCurrentSongDisplay();
    }   
    alert("End of playlist");
});
prev.addEventListener("click", () => {
    if (currentSongNode && currentSongNode.prev) {
        currentSongNode = currentSongNode.prev;
        return updateCurrentSongDisplay();
    }
    alert("Start of playlist");
});

searchInput.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
        searchButton.click();
    }
});
searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    const result = KoloheKaiPlaylist.search(query);
    if (result) {
        currentSongNode = result;
        return updateCurrentSongDisplay();
    }
    alert(`Song not found in playlist: ${query}`);
    searchInput.value = "";
});

