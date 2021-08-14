
export const getData = async () => {
    
    // const url = 'https://api.propublica.org/congress/v1/113/house/members.json' <- add

    const url = 'https://api.propublica.org/congress/v1/113/senate/members.json'
    const key = {
        method: 'GET',
        headers: {
            "X-API-Key": "9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz"
        }
    }
    const resp = await fetch(url, key)
    const { results:[data] } = await resp.json();
    
        return data;
}