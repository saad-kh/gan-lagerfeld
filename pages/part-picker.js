import { useContext, useCallback } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StateContext } from "../src/state";

const PartPicker = () => {
  const { state, dispatch } = useContext(StateContext);
  const { parts } = state;

  const onPartSelected = useCallback(e => {
    const partId = e.target.dataset.partId;
    dispatch({
      type: "setSelectedPartId",
      payload: partId || null
    });
  });

  return (
    <div className="container">
      <div className="title">
        Which piece of clothing would you like to change?
      </div>

      <div className="part-picker" onClick={onPartSelected}>
        {parts === null ? (
          <div className="progress">
            <CircularProgress />
          </div>
        ) : (
          parts
            .filter(
              part =>
                part.id === "0_0_85" ||
                part.id === "0_85_85" ||
                part.id === "0_128_0" ||
                part.id === "0_119_221" ||
                part.id === "128_0_0" ||
                part.id === "255_85_0"
            )
            .map(part => (
              <div
                key={part.id}
                className="part"
                data-part-id={part.id}
                alt={part.action}
                style={{
                  top: part.bounds.top,
                  left: part.bounds.left,
                  width: part.bounds.right - part.bounds.left,
                  height: part.bounds.bottom - part.bounds.top
                }}
              />
            ))
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }

        .title {
            margin: 15px;
            font-size: 32px;
            font-weight: 400;
            font-family: Poppins
        }

        .part-picker {
          position relative;
          width: 392px;
          height: 864px;
          background-image: url(${state.outfitPictureUrl});
          background-repeat: no-repeat;
          background-size: auto;
          border: 5px solid black;
          border-radius: 15px;
        }

        .progress {
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
        }

        .part {
          position: absolute;
          background-color: white;
          opacity: 0.4;
          cursor: pointer;
          border: 5px solid black;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
};

export default PartPicker;
