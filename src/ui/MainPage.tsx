import {TracksList} from "./TracksList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";
import {useTracksSelection} from "../bll/useTracksSelection.tsx";

export function MainPage () {
    const {trackId,setTrackId} =  useTracksSelection()

    const handleTrackSelect = (id:string | null) => {
        setTrackId(id);
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TracksList
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackSelect}/>
                <TrackDetail trackId={trackId}/>
            </div>
        </div>
    )
}
