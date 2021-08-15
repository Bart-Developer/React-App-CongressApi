
export const getData = async (table) => {

    let url='';

   if (table === 'house'){
       console.log('wacho entre al fin');
       url = 'https://api.propublica.org/congress/v1/113/house/members.json'
   }

 

    // switch (table) {
    //     case 'senate':
    //         url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
    //         break;
    //     case 'house':
    //         url = 'https://api.propublica.org/congress/v1/113/house/members.json';
    //         break;

    //     default: url = '';
    // }

    const key = {
        method: 'GET',
        headers: {
            "X-API-Key": "9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz"
        }
    }
    const resp = await fetch(url, key)
    const { results: [data] } = await resp.json();

    console.log(data)

    return data;
}