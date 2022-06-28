
import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { blue, dark, yellow } from "../../services/colorSlice";

export default function Users({ data }) {
    const myColor = useSelector(state => state.counter.color)
    const dispatch = useDispatch()
    return <>
        <button className="theme-btn" style={{ backgroundColor:myColor}}
         onClick={() => dispatch(dark())}>Dark Theme</button>


        <button className="theme-btn" style={{ backgroundColor: myColor }}
         onClick={() => dispatch(blue())}>Blue Theme</button>


        <button className="theme-btn" style={{ backgroundColor: myColor }}
         onClick={() => dispatch(yellow())}>Yellow Theme</button>

         <br/>

        {data.map(y =>
        (<a href={'/Posts/' + y.id} className='posts' style={{ backgroundColor: myColor }}>

            Post
            <br />
            <br />
            <b>{y.id}</b>

        </a>
        ))}
    </>
}


export async function getServerSideProps(context) {

    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json();



    return {
        props: { data },
    }
}