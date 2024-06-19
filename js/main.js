document.addEventListener( "keydown", function(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
      }
} );

// onContextMenu
    // Create a text block element, on which, when you right-click the mouse, instead of the usual context menu of the browser, your own created context menu appears. This menu may contain options such as "align center", "align center right", "align left", "Hide element".
let taskOne = document.querySelector( ".task__one__wrap" );
let taskOneContextMenu = document.querySelector( ".context__menu" );
let taskOneTextWrap = document.querySelector( ".task__one__wrap" );


taskOne.addEventListener( "contextmenu", function (e) {
    e.preventDefault();
    taskOneContextMenu.classList.add( "active" );
    taskOneContextMenu.style.cssText = ` top: ${e.clientY}px; left: ${e.clientX}px; `;
    taskOneContextMenu.addEventListener( "click", function( event ) {
        if( event.target.id === "left" ) {
            taskOneTextWrap.style.cssText = "text-align: left;";
            taskOneContextMenu.classList.remove( "active" );
        } else if( event.target.id === "center" ) {
            taskOneTextWrap.style.cssText = "text-align: center;";
            taskOneContextMenu.classList.remove( "active" );
        } else if( event.target.id === "right" ) {
            taskOneTextWrap.style.cssText = "text-align: right;";
            taskOneContextMenu.classList.remove( "active" );
        } else {
            taskOneTextWrap.style.cssText = "display: none;";
            taskOneContextMenu.classList.remove( "active" );
        }
    } );
} );


// keyup
// Create a game field where the user can move an object (such as a square or a circle) using the arrow keys. The movement of the object should stop when the key is released

let player = document.querySelector( ".task__two__wrap__player" );
player.style.top = "250px";
player.style.left = "450px";
let area = document.querySelector( ".task__two__wrap" );
area.addEventListener( "keyup", function(e) {    
    if( e.key === "ArrowUp" ) {
        player.style.top = `${ +player.style.top.split("px")[0] - 5}px`;
    } else if( e.key === "ArrowRight" ) {
        player.style.left = `${ +player.style.left.split("px")[0] + 5}px`;
    } else if( e.key === "ArrowDown" ) {
        player.style.top = `${ +player.style.top.split("px")[0] + 5}px`;
    } else if( e.key === "ArrowLeft" ) {
        player.style.left = `${ +player.style.left.split("px")[0] - 5}px`;
    } 
} );


// Create a P element that changes the text to "Hello, World!" when the mouse is hovered over, and reverts to the original text when the mouse is moved away.
let taskThree = document.querySelector( ".task__three__wrap__text" );
const pInnerText = "Try change me";
taskThree.innerHTML = pInnerText;
taskThree.addEventListener( "mouseover", function(e) {
    e.target.innerHTML = "Hello, World!";
    e.target.classList.add( "active" );
} )
taskThree.addEventListener( "mouseout", function(e) {
    e.target.innerHTML = pInnerText;
    e.target.classList.remove( "active" );
} )


// Create two div elements. One of them should appear when the mouse is hovered over the other, and disappear when the mouse is moved away from it.
let taskFourShow = document.querySelector( ".task__four__wrap--show" );
let taskFourHidden = document.querySelector( ".task__four__wrap--hidden" );

taskFourShow.addEventListener( "mouseover", function(e) {
    taskFourHidden.classList.add( "active" );
} );
taskFourHidden.addEventListener( "mouseout", function(e) {
    taskFourHidden.classList.remove( "active" );
} );


// Additional Task
// 'onMouseDown' and 'onMouseUp': Implement a simple 'Drag and drop' game: create an object that can be dragged within a certain area using the mouse button click and release events.
let dragArea = document.querySelector( ".task__five__wrap" );
let brick = document.querySelector( ".task__five__wrap--brick" );
brick.addEventListener( "mousedown", function(e) {
    console.log(e);
    brick.style.position = "absolute";
    brick.style.zIndex = "999";
    dragArea.addEventListener( "mousemove", moveBrick );
    function moveBrick(e) {
        brick.style.top = e.pageY - brick.offsetHeight/2 + "px";
        brick.style.left = e.pageX - brick.offsetWidth/2 + "px";
    };
    brick.addEventListener( "mouseup", function(e) {
        dragArea.removeEventListener("mousemove", moveBrick );
    } );
} );