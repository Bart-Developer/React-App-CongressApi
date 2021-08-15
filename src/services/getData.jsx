
export const getData = async (table) => {

    //FETCH FROM DATA NEEDED

    const url = `https://api.propublica.org/congress/v1/113/${table}/members.json`
    const key = {
        method: 'GET',
        headers: {
            "X-API-Key": "9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz"
        }
    }
    const resp = await fetch(url, key)
    const { results: [ data ] } = await resp.json();
    const { members } = data;
    

//    FILTER DATA NEEDED
    
    let congress = members.map(congressman => {
        return {
            id: congressman.id,
            title: congressman.title,
            name: congressman.first_name,
            last_name: congressman.last_name,
            party: congressman.party,
            missed_votes_pct: congressman.missed_votes_pct,
            votes_with_party_pct: `% ${congressman.votes_with_party_pct}`,
            state: congressman.state,
            total_votes: congressman.total_votes,
            missed_votes: congressman.missed_votes,
            years_in_office: congressman.seniority
        }
    })

  
    return congress;
}