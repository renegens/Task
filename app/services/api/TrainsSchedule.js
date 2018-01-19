var api = {
    getSchedule() {
        let url = "https://extranet.trainose.gr/services/passenger_public/mobile_app/ajax.php?c=dromologia&op=vres_dromologia&apo=%CE%9B%CE%91%CE%A1%CE%99&pros=%CE%98%CE%95%CE%A3%CE%A3&date=2018-01-10&rtn_date=undefined-undefined-&travel_type=1&trena%5B%5D=apla&trena%5B%5D=ic&trena%5B%5D=ice&trena%5B%5D=bed&time=23%3A59&time_type=anaxwrhsh&rtn_time=23%3A59&rtn_time_type=anaxwrhsh";
        return fetch(url).then(
            (response) => response.json()
        ).catch(error => {
            console.log("Schedule Retrieval error")
        });
    }
};

module.exports = api;