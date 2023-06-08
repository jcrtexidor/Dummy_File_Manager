import './App.scss';
import { ConfigProvider, theme } from 'antd';
import Window from './Views/Window';


const App = ({ }) => {


  return <>
    <ConfigProvider theme={{ algorithm: [theme.darkAlgorithm, theme.compactAlgorithm] }}>
      <Window />
    </ConfigProvider>
  </>;
}

export default App



