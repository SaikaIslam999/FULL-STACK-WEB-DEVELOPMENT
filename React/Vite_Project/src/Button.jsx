function handleClick(){
    console.log("Hello!!");
}

function handleMouseOver(){
    console.log("Bye!!");
}

function handleDblClick(){
    console.log("You double clicked!");
}

export default function Button(){
    return <div>
        <button onClick={handleClick}>Click me!</button>
        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eaque ut reiciendis tempora alias aut dicta debitis officiis fugit, 
            architecto saepe provident repellendus est non, 
            eligendi deleniti expedita dolorem explicabo tenetur?
        </p>
        <button onDoubleClick={handleDblClick}>Double click me!!</button>
    </div>
}