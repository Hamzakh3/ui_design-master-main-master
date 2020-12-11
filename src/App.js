import './App.css';
import GridView from './components/GridView';
import SimplePaper from './components/page';
import Mat_toolbar from './components/mat_toolbar';
import Acc from './components/acc';



function App() {
  return (
    <div >
      <Mat_toolbar />
      <div className=" body_style">
        <Acc />
        <GridView />
        {/* divider */}
        <div className="hr" ></div>
        <h2 _ngcontent-ofg-c212="" className="sectionTitle">See other dashboard solutions</h2>
        <p _ngcontent-ofg-c212="" class="sectionSubtitle">Experience the same dataset with a different technology</p>
        <div className="divider"></div>
        <SimplePaper />
      </div>

    </div>
  );
}

export default App;
