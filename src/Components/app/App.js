import React, {useState, useEffect} from "react";

import SearchField from "../searchFIeld";
import Table from "../table";
import DateWidget from "../dataWidget";
import NbRBServices from "../../services/services";

import './app.css';

const App = () => {
    const nbRB = new NbRBServices();
    const [dataUSD, setDataUSD] = useState([{
        id: '',
        idForVisible: false,
        date: '',
        officialRate: '',
    }])

    const [dataEUR, setDataEUR] = useState([{
        id: '',
        idForVisible: '',
        date: '',
        officialRate: ''
    }])

    const [dataRUB, setDataRUB] = useState([{
        id: '',
        idForVisible: '',
        date: '',
        officialRate: ''
    }])

    const [term, setTerm] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [visibilityUSD, setVisibilityUSD] = useState(false);
    const [visibilityEUR, setVisibilityEUR] = useState(false);
    const [visibilityRUB, setVisibilityRUB] = useState(false);



    useEffect(() => {
        if(dateStart !== '' && dateEnd !== ''){
            nbRB.getDataUSD(dateStart, dateEnd)
                .then((elem) => {
                    setDataUSD(elem)
                })

            nbRB.getDataEUR(dateStart, dateEnd)
                .then((elem) => {
                    setDataEUR(elem)
                })

            nbRB.getDataRUB(dateStart, dateEnd)
                .then((elem) => {
                    setDataRUB(elem)
                })
        }
    },[dateStart, dateEnd]);

    const search = (e) => {
        setTerm(e.target.value.toLowerCase());
        switch (e.target.value.toLowerCase()) {
            case 'd' : setVisibilityRUB(true);
            setVisibilityEUR(true)
                break;
            case 's': setVisibilityRUB(true);
                setVisibilityEUR(true)
                break;
            case 'us':  setVisibilityRUB(true);
                setVisibilityEUR(true)
                break;
            case 'usd': setVisibilityRUB(true);
                setVisibilityEUR(true)
                break;
            case 'e':
                setVisibilityUSD(true);
                setVisibilityRUB(true);
                break;
            case 'r':
                setVisibilityUSD(true)
                break;
            case 'eu' :
                setVisibilityRUB(true);
                setVisibilityUSD(true);
                break;

            case 'eur' :
                setVisibilityRUB(true);
                setVisibilityUSD(true);
                break;
            case 'b':
                setVisibilityUSD(true);
                setVisibilityEUR(true);
                break;
            case 'ru':
                setVisibilityUSD(true);
                setVisibilityEUR(true);
                break;
            case 'rub':
                setVisibilityUSD(true);
                setVisibilityEUR(true);
                break;
            default: setVisibilityEUR(false);
            setVisibilityRUB(false);
            setVisibilityUSD(false)
        }
    }

    const startDate = e => setDateStart(e.target.value);

    const endDate = e => setDateEnd(e.target.value);

    let maxIndexUSD = dataUSD.reduce((acc, curr, i) => dataUSD[acc].officialRate > curr.officialRate ? acc : i, 0);
    let maxIndexEUR = dataEUR.reduce((acc, curr, i) => dataEUR[acc].officialRate > curr.officialRate ? acc : i, 0);
    let maxIndexRUB = dataRUB.reduce((acc, curr, i) => dataRUB[acc].officialRate > curr.officialRate ? acc : i, 0);
    let minIndexUSD = dataUSD.reduce((acc, curr, i) => dataUSD[acc].officialRate < curr.officialRate ? acc : i, 0);
    let minIndexEUR = dataEUR.reduce((acc, curr, i) => dataEUR[acc].officialRate < curr.officialRate ? acc : i, 0);
    let minIndexRUB = dataRUB.reduce((acc, curr, i) => dataRUB[acc].officialRate < curr.officialRate ? acc : i, 0);


    return(
        <div className='app'>

            <SearchField search={search} term={term}/>
            {dateStart === '' ? <h1>Input Date</h1> :   <Table
                dataUSD={dataUSD} dataEUR = {dataEUR} dataRUB = {dataRUB}
                maxIndexUSD={maxIndexUSD} maxIndexEUR={maxIndexEUR}
                maxIndexRUB={maxIndexRUB} minIndexUSD={minIndexUSD}
                minIndexEUR={minIndexEUR} minIndexRUB={minIndexRUB}
                visibilityUSD = {visibilityUSD} visibilityRUB={visibilityRUB}
                visibilityEUR={visibilityEUR}
            />}
            <DateWidget startDate={startDate} endDate={endDate}/>
        </div>

    )
}

export default App