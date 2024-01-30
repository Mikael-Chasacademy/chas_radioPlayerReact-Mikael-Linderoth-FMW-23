function Station({ filteredList }) {
  return (
    <div>
      <div id="channels">
        {filteredList.map((channel) => (
          <div
            key={channel.id}
            className="radiostyle"
            style={{ backgroundColor: `#${channel.color}` }}
          >
            <img src={channel.image} alt={channel.name} />
            <div className="controller">
              <h2>{channel.name}</h2>
              <audio controls className="audiostyle">
                <source src={channel.liveaudio.url} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Station;
