import { useCallback, useRef, useContext } from "react";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { StateContext } from "../src/state";
import { fontFamily } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 400,
    fontFamily: "Poppins"
  },
  input: {
    display: "none"
  }
}));

async function sendFile(file) {
  var formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://13.81.171.163:5000/getSegmentation", {
    method: "POST",
    body: formData
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

const OutfitPicker = () => {
  const { dispatch } = useContext(StateContext);
  const classes = useStyles();
  const filePickerRef = useRef(null);
  const onClick = useCallback(e => {
    filePickerRef.current.click();
  });
  const onFileSelected = useCallback(async e => {
    if (event.target.files.length == 0) return;
    dispatch({
      type: "setOutfitPictureUrl",
      payload:
        event.target.files.length > 0
          ? URL.createObjectURL(event.target.files[0])
          : null
    });
    try {
      const response = await sendFile(event.target.files[0]);
      dispatch({
        type: "setParts",
        payload: response
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: "setParts",
        payload: []
      });
    }
  });

  return (
    <div className="container">
      <img className="demo-image" src="/demo_high_res.gif" />
      <Button
        variant="outlined"
        disableRipple
        className={classes.button}
        size="large"
        startIcon={<PhotoCameraIcon style={{ fontSize: 32 }} />}
        onClick={onClick}
      >
        Show us yourself
      </Button>
      <input
        ref={filePickerRef}
        type="file"
        id="outfitpicker"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onFileSelected}
      />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }

        .demo-image {
          width: 80%;
          margin: 25px;
        }
      `}</style>
    </div>
  );
};

export default OutfitPicker;
