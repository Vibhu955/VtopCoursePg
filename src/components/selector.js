import React, { useState } from 'react'
function Selector(props) {
    let { select, setselect, el, Course, type, category } = props;
    let ele;
    console.log(category)
    const onChange = (e) => {
        setselect(e.target.options[e.target.selectedIndex].innerText)
    }
    return (
        <div>
            <p>{category ? category.cat : ""}</p>
            {el ? <div><select class="form-select form-select-sm" id={`nameSelector${props.sem}`} aria-label="Small select example" onChange={onChange}>
                <option >Open this select menu</option>

                {/* { ele= Object.keys(el).filter((element) => { return element === type })} */}
                {/* { Course.map((element)=>{return <option value="2"> {(ele[0]==="sem"?element.sem:ele[0]==="slots"?element.slots.map((slot)=>{return slot}):"")} </option>
               })} */}
                {category ? category.name.map((nm) => {
                    return <option value="1">{nm}</option>
                }) : ""}


            </select></div> : ""
            }
            <div id="selectedName"> {select}</div>
        </div >
    )
}
export default Selector;