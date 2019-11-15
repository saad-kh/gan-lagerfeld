import { View, Panel, PanelHeader, FormLayout, File } from "@vkontakte/vkui";
import IconCamera24 from "@vkontakte/icons/dist/24/camera";
import IconDocument24 from "@vkontakte/icons/dist/24/document";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
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
