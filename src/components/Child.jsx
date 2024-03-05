import React from 'react'


const Child=(props)=> {

const {no,playername,matches,rank,points,runs}=props.sports;

    return (
        <>
        Sports Data
        <table className='table table-bordered text-white'>
            <tr>
                <td>{no}</td>
                <td>{playername}</td>
                <td>{matches}</td>
                <td>{rank}</td>
                <td>{points}</td>
                <td>{runs}</td>
            </tr>
        </table>
        </>
    )
}

export default Child
