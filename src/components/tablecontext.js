import React, { useState } from "react";
import Context from "./context"
const TableState = (props) => {
    const course = [
        "dsa",
        "daa",
        "web"
      ]
      const sem = [
        "winter",
        "fall",
        "summer"
      ]
      const slot = [
        "A1",
        "A2",
        "B1"
      ]
      const teacher = [
        "vibz",
        "manu",
        "priya"
      ]
      let category = {
        sem: {
          cat: "sem",
          name: sem
        },
        course: {
          cat: "course",
          name: course
        },
        slot: {
          cat: "slot",
          name: slot
        },
        teacher: {
          cat: "teacher",
          name: teacher
        }
      }
    let list = category.course.name;
    const [selected, setselected] = useState("");
    const onChange = (e) => {
        setselected(e.target.options[e.target.selectedIndex].innerText)
    }

return (
    <Context.Provider value={{ selected, onChange }}>
      {props.children}
    </Context.Provider>
  )
}
export default TableState;
