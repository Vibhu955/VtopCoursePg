import React from 'react';

function Table(props) {
      let {Course,select}=props;
      console.log(select)
      const processViewStudentCourseDetail=()=>{
      }
    return (
       <div>        
          <table className="table my-5" style={{ backgroundColor: "#fff", border: "1px solid #ddd", fontSize: "13px", padding: "4px", textAlign: "center" }}>
         <tbody>
                  <tr style={{ backgroundColor: "#3c8dbc", color: "#fff" }}>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Sl.No.</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Class Group</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Course Code</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Course Title</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Course Type</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Class Id</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Slot</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Faculty</b></td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "10px" }}><b>Action</b></td>
                  </tr>
                  {Course.map((el)=>{ return select==="fall" && el.sem==="Fall Sem"?
                  el.teachers.map((teacher,i)=>{return  <tr>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>{i+1}</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>General (Semester)</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>{`BCSE20${i}L`}</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>{el.name}</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>Theory Only</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>{`VL202324010201${i}`}</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>A2/TA2/TAA2</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>{teacher}</td>
                      <td style={{ verticalAlign: "middle", textAlign: "center", border: "1px solid #b2b2b2", padding: "5px" }}>
                          <button style={{ padding: "3px 12px" }} className="btn btn-primary" type="button" onClick={() => processViewStudentCourseDetail('VL20232401', '15752', 'VL2023240102011')}>View</button>
                      </td>
                 </tr> }) :""})}

                 </tbody>          

           </table>
    </div>

    )
}

export default Table;
