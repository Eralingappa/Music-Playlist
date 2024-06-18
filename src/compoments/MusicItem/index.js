import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }
  return (
    <li className="MusicListItem">
      <div className="TrackInfoContainer">
        <img className="MusicTrackImage" src={imageUrl} alt="track" />
        <div className="NameGenreContainer">
          <p className="Name">{name}</p>
          <p className="Genre">{genre}</p>
        </div>
      </div>
      <div className="DurationDeleteContainer">
        <p className="Duration">{duration}</p>
        <button
          className="DeleteButton"
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}
export default MusicItem
