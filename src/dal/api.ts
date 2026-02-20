export type TrackDetailsResource = {
    id: string,
    attributes: {
        title: string,
        lyrics:string | null
    }
}

type GetTrackDetailsOutput = {
    data: TrackDetailsResource
}

const prepareHeaders = ()=>{
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined
        return {
            'api-key': apiKey

    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,{
        headers: prepareHeaders()
    }).then(res => res.json())
    return promise;
}

type TrackAttachment = {
    url: string
}
type TrackListItemOutputAttributes = {
    title: string;
    attachments: Array<TrackAttachment>;
}

export type GetTrackListOutput = {
    id: string;
    attributes: TrackListItemOutputAttributes;
}

type GetTrackOutput = {
    data: Array<GetTrackListOutput>
}
export const getTracks = () => {
    const promise: Promise<GetTrackOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',{
        headers: prepareHeaders()
    }).then(res => res.json())
    return promise;
}


//fetch returns PROMISE, we subscribe on that PROMISE through method 'then' and when promise
// is resolved this function will be called: 'res => res.json()'
// at same time 'then' retuns another promise, which will go to that variable called const promise
// const promise will resolved becasause of func res.json(), res.json() returns another promise
