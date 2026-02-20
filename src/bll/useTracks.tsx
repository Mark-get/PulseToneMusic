import {useEffect, useState} from "react";
import {type GetTrackListOutput, getTracks} from "../dal/api.ts";

export function useTracks(){
    const[tracks, setTracks] = useState< Array<GetTrackListOutput> | null >(null);

    useEffect(() => {
        getTracks().then(json => setTracks(json.data));
    } ,[]);

    return {tracks};
}