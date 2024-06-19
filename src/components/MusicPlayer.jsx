import React, { useEffect, useState } from "react";

const MusicPlayer = ({
  vol,
  rate,
  changeVolume,
  changeRate,
  pausePlay,
  soundRef,
  songLength,
  title,
  changeSong,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const updateTime = () => {
      if (soundRef.current) {
        setCurrentTime(soundRef.current.seek());
      }
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [soundRef]);

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="p-10 rounded-lg shadow-lg w-80 backdrop-blur-sm bg-white/20 backdrop-brightness-90">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
        />

        <h2 className="text-xl font-semibold text-center">{title}</h2>

        <p className="text-gray-600 text-sm text-center"></p>

        <div className="mt-6 flex justify-center items-center">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#000000"
                ></path>
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <button
            className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4"
            onClick={pausePlay}
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                  fill="#000000"
                ></path>
                <path
                  d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={changeSong}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#000000"
                ></path>
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center p-2 mt-2 rounded bg-slate-400">
          <div>
            <h1 className="font-bold text-center">
              Volume: {Math.round(vol * 100)}%
            </h1>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="1.0"
                step="0.05"
                value={vol}
                className="volSlider"
                id="myVol"
                onChange={(e) => {
                  const newVolume = parseFloat(e.target.value);
                  changeVolume(newVolume - vol);
                }}
              />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-center">
              Rate: {Math.round(rate * 100)}%
            </h1>
            <div className="slidecontainer">
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.01"
                value={rate}
                className="rateSlider"
                id="myRate"
                onChange={(e) => {
                  const newRate = parseFloat(e.target.value);
                  changeRate(newRate - rate);
                }}
              />
            </div>
          </div>
        </div>

        <div className="h-2 mt-6 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${(currentTime / songLength) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between mt-1 text-md font-bold text-black-600">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(songLength)}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
