import React, { useState } from 'react'
import Selector from './selector'
import Table from './table'

function Home(props) {
    const [select, setselect] = useState('');
    let types=["sem","teachers","slots","name"]
    let { Course,category } = props;
    return (
        <div>
            <div className=' m-3'>
                {/* {props.category.map((el)=>{ return <Selector key={el.cat} cat={el.cat} name={el.name} select={select} setselect={setselect}/>})}
        */}</div>
            {[Course.map((el,i) => { return <Selector key={el.title} type={types[i]} el={el} category={category[i]}/* teachers={el.teachers} slots={el.slots} sem={el.sem} name={el.name}*/ select={select} Course={Course} setselect={setselect} /> })]}
            {console.log(select)}
            <Table Course={Course} select={select} />
        </div>
    )
}
export default Home