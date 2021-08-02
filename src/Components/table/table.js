import React from "react";
import './table.css'

const Table = ({dataUSD, dataEUR, dataRUB,
                   maxIndexUSD, maxIndexEUR, maxIndexRUB,
                   minIndexUSD, minIndexEUR, minIndexRUB,
               visibilityUSD, visibilityEUR, visibilityRUB}) => {

    return (
        <div className='table-widget'>
        <table className='table'>
            <tbody>
            <tr>
                <td/>
                {dataUSD.map((elem) => {
                    elem.date = elem.date.substr(0,10)

                    return <td key={elem.id}>{elem.date}</td>
                })}
            </tr>
            <tr className={visibilityUSD ? 'visibility' : ''} >
                <td>USD</td>
                {dataUSD.map((elem) => {
                    return <td className={elem.id === maxIndexUSD ? 'class-max' : '' ||
                    elem.id === minIndexUSD ? 'class-min' : ''}
                               key={elem.id}>{elem.officialRate}</td>
                })}

            </tr>
            <tr className={visibilityEUR ? 'visibility' : ''}>
                <td>EUR</td>
                {dataEUR.map((elem) => {
                    return <td className={elem.id - dataUSD.length === maxIndexEUR ? 'class-max' : '' ||
                    elem.id - dataUSD.length === minIndexEUR ? 'class-min' : ''}
                               key={elem.id}>{elem.officialRate}</td>
                })}
            </tr>
            <tr className={visibilityRUB ? 'visibility' : ''}>
                <td>RUB</td>
                {dataRUB.map((elem) => {
                    return <td className={elem.id - dataUSD.length - dataEUR.length === maxIndexRUB ? 'class-max' : '' ||
                    elem.id - dataUSD.length - dataEUR.length === minIndexRUB ? 'class-min' : ''}
                               key={elem.id}>{elem.officialRate}</td>
                })}
            </tr>
            </tbody>
        </table>
        </div>
    )

}

export default Table;