import {useState} from "react";

export function useTracksSelection() {
    const[trackId, setTrackId] = useState<string | null>(null);


    return {trackId, setTrackId};
}

