import React, { useEffect, useState } from "react";
import Search from "./Search";
import Station from "./Station";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RadioPlayer() {
  const [radioChannels, setRadioChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRadioChannels() {
      try {
        const response = await fetch(
          "https://api.sr.se/api/v2/channels?format=json&size=100"
        );
        const data = await response.json();
        setTimeout(() => {
          setRadioChannels(data.channels);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching radio channels:", error);
        setIsLoading(false);
      }
    }

    getRadioChannels();
  }, [setIsLoading]);

  const filteredList =
    searchTerm == ""
      ? radioChannels
      : radioChannels.filter((channel) => {
          return channel.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      {isLoading ? (
        <SkeletonTheme highlightColor="grey" height={500}>
          <Skeleton count={5} />
        </SkeletonTheme>
      ) : (
        <Station filteredList={filteredList} />
      )}
    </div>
  );
}

export default RadioPlayer;
