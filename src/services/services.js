export  default class NbRBServices {

    _apiBase = 'https://www.nbrb.by/api/exrates/rates/dynamics/';
    counter = 0;

    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`could not fetch ${this._apiBase}${url}, ${res.status}`)
        }

        return await res.json();
    }

    async getDataRUB(start,end) {
        const res = await this.getResources(`298?startdate=${start}&enddate=${end}`);
        return res.map(this.transformData)
    }

   async getDataEUR(start, end) {
        const res = await this.getResources(`451?startdate=${start}&enddate=${end}`);
        return res.map(this.transformData)
    }

    async getDataUSD(start, end) {
        const res = await this.getResources(`145?startdate=${start}&enddate=${end}`);
        return res.map(this.transformData)
    }

    transformData = (data) => {
        return {
            id: this.counter++,
            date: data.Date,
            officialRate: data.Cur_OfficialRate,
        }
}
}
