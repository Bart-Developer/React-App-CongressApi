import React from 'react'
import { useEffect,useState } from 'react'

export const useInjectedText = (data) => {
    const [text, setText] = useState("");

    useEffect(() => {
        switch (data) {
            case 'attendance':
                setText("The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present. The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating 'aye or no' when his or her name is announced.")
                break;
            case 'loyalty':
                setText("Those who consider themselves to be strong partisans, strong Democrats and strong Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and legislation that backs their party's agenda.")
                break;
            default: setText("");
        }
    }, [text])

    console.log(text)
    return text;
}
