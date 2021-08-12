
export const getSenators = async () => {
    
    const url = 'https://api.propublica.org/congress/v1/113/senate/members.json'
    const key = {
        method: 'GET',
        headers: {
            "X-API-Key": "9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz"
        }
    }
    const resp = await fetch(url, key)
    const { results } = await resp.json();
    const [ senators ] = results;
    
    console.log(senators);

        return senators;
}