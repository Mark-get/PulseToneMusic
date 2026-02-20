// import {useEffect, useState} from "react";
//
// function App() {
//
//     const [selectedTracksId, setselectedTracksId] = useState(null);
//     const [selectedTrack, setselectedTrack] = useState(null);
//     const[tracks, setTracks] = useState(null);
//
//     useEffect(() => {
//         console.log("effect");
//         fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',{
//             headers: {
//                 'api-key': 'bf923068-1ed6-4869-a226-0dbcdef36c85'
//             }
//         }).then(res => res.json())
//             .then(json => setTracks(json.data));
//     } ,[]);
//
//     useEffect(() => {
//
//         if(!selectedTracksId) {
//             return;
//         }
//
//         fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTracksId,{
//             headers: {
//                 'api-key': 'bf923068-1ed6-4869-a226-0dbcdef36c85'
//             }
//         }).then(res => res.json())
//             .then(json => setselectedTrack(json.data));
//     }, [selectedTracksId]);
//
//     if (tracks === null) {
//         return (
//             <div>
//                 <span>Loading...</span>
//             </div>
//         )
//     }
//
//     if (tracks.length === 0) {
//         return (
//             <div>
//                 <h1>MusicsFun</h1>
//                 <span>no tracks</span>
//             </div>
//         )
//     }
//
//     return (
//         <div>
//             <h1>MusicFun Player</h1>
//             <button onClick={ () =>{
//                     setselectedTracksId(null)
//                     setselectedTrack(null)
//             }}>reset selection</button>
//             <div style={
//                 {
//                     display:'flex',
//                     gap:"30px"
//                 }
//                 }>
//              <ul>
//                  {
//                     tracks.map((track) => {
//
//                         return (
//                             <li key={track.id} style={ {
//                                 border: track.id === selectedTrack?.id ? '1px solid orange' : 'none'
//                             } }>
//                                 <div onClick={ () => {
//                                     setselectedTracksId(track.id);
//
//
//                                 } }>
//                                     {track.attributes.title}
//                                 </div>
//                                 <audio src={track.attributes.attachments[0].url} controls></audio>
//                             </li>
//                         )
//                     })}
//             </ul>
//                 <div>
//                     <h2>Details</h2>
//                     {selectedTrack === null ? 'track is not selected' :
//                         <div>
//                        <h3>{selectedTrack.attributes.title}</h3>
//                             <h4>Lyrics</h4>
//                             <p>
//                                 {selectedTrack.attributes.lyrics ?? 'no lyrics'}
//                             </p>
//                         </div>}
//                 </div>
//             </div>
//
//         </div>
//     )
// }
//
// export default App
