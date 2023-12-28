import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SelectDataComponent = () => {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  const handleOnDown = (e) => {
    const track = trackRef.current;

    if (track) {
      track.dataset.mouseDownAt = e.clientX;
    }
  };

  const handleOnUp = () => {
    const track = trackRef.current;

    if (track) {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    }
  };

  const handleOnMove = (e) => {
    const track = trackRef.current;

    if (track && track.dataset.mouseDownAt !== "0") {
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage =
        (mouseDelta / maxDelta) * -100 +
        parseFloat(track.dataset.prevPercentage);
      const nextPercentage = Math.max(Math.min(percentage, 0), -100);

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
  };

  document.body.classList.add("overflow-hidden");

  /* -- Had to add extra lines for touch events -- */

  window.onmousedown = (e) => handleOnDown(e);
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.onmouseup = (e) => handleOnUp(e);
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = (e) => handleOnMove(e);
  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  const handleSelection = (param) => {
    console.log("click");
    navigate("/load_data", { state: { param } });
  };

  return (
    <div className="select-data">
      <div
        ref={trackRef}
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <div className="rounded-lg shadow-xl">
          <button onClick={() => handleSelection(1)}>
            <img
              className="image"
              src="https://images.unsplash.com/photo-1607197109166-3ab4ee4b468f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              draggable="false"
            />
          </button>
          <p className="image-label p-5 text-black font-thin">
            Bornes éléctrique pour véhicule
          </p>
        </div>
        <div className="rounded-lg shadow-xl">
          <button onClick={() => handleSelection(2)}>
            <img
              className="image"
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              draggable="false"
            />
          </button>
          <p className="image-label p-5 text-black font-thin">Restaurants</p>
        </div>
        <div className="rounded-lg shadow-xl">
          <button onClick={() => handleSelection(3)}>
            <img
              className="image"
              src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              draggable="false"
            />
          </button>
          <p className="image-label p-5 text-black font-thin">
            Pistes cyclables
          </p>
        </div>
        <div className="rounded-lg shadow-xl">
          <button onClick={() => handleSelection(4)}>
            <img
              className="image"
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              draggable="false"
            />
          </button>
          <p className="image-label p-5 text-black font-thin">
            Centre de santé et médicales
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectDataComponent;
