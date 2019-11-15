import { useEffect } from "react";
import { View, Panel, PanelHeader, FormLayout, File } from "@vkontakte/vkui";
import IconCamera24 from "@vkontakte/icons/dist/24/camera";
import IconDocument24 from "@vkontakte/icons/dist/24/document";
import "@vkontakte/vkui/dist/vkui.css";

const useSessionEffect = () => {
  let session = null;
  if (typeof window !== "undefined" && window.location.hash) {
    debugger;
    const url = new URL(window.location.hash);
    const accessToken = url.searchParams.get("access_token");
    if (accessToken) {
      localStorage.setItem("session", accessToken);
    }
  }
  if (typeof localStorage !== "undefined") {
    session = localStorage.getItem("session");
  }
  useEffect(() => {
    if (!session) {
      console.log("fetching session");
      window.location.href =
        "https://oauth.vk.com/authorize?client_id=7210115&display=page&redirect_uri=http://localhost:3000/&response_type=token&v=5.103";
    }
  }, [session]);

  return session;
};

function App() {
  const session = useSessionEffect();
  console.log("session", session);

  return (
    <View activePanel="panel">
      <Panel id="panel" theme="white">
        <PanelHeader>File</PanelHeader>
        <FormLayout>
          <File top="Upload your photo" before={<IconCamera24 />} size="l">
            Upload your photo
          </File>
          <File
            top="Download Documents"
            before={<IconDocument24 />}
            size="xl"
            level="secondary"
          >
            Download Documents
          </File>
        </FormLayout>
      </Panel>
    </View>
  );
}

export default App;
