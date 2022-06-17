import Button from '../components/button';
import CallCard from '../components/call-card';
import Footer from '../components/footer';
import Header from '../components/header';
import ActionBar from '../components/header/action-bar';
import RankingTable from '../components/ranking-table';

function Ranking() {
  return <>
    <div className="page-wrapper">
      <ActionBar/>
      <div className="main-wrapper">
        <div className="section_header page-ranking">
        <Header/>
        <div className="page-padding">
          <div className="container-large padding-top padding-xxlarge">
            
            <div className="main-grid page-ranking">
              <div id="w-node-_9fe109cd-84dd-4ee2-b0fe-8a75bc8bc482-35152179" className="grid-wrapper padding-bottom padding-xlarge">
                <h1 className="heading-xhuge">Paradigmer do Mês 👑</h1>
                <div className="text-size-large text-color-dark-gray margin-top margin-xsmall">Todo mês, o/a mais engajado ganha um brinde exclusivo. <span className="text-color-medium-green">Veja como participar</span>. Veja também o presente do mês no <span className="text-color-medium-green">nosso Twitter</span>.</div>
              </div>
            </div>

            <div className="ranking-wrapper">
              <div className="buttons-wrapper margin-gap-0">
                <a data-w-id="9ff8e964-b476-3489-ee31-6fafc894c39b" href="#" className="button-small w-inline-block">
                  <div>Mês</div>
                </a>
                <a data-w-id="95ab5dd4-409c-ea99-95b4-99ebc4f8f5f7" href="#" className="button-small-secondary w-inline-block">
                  <div>All-time</div>
                </a>
              </div>
              <div className="margin-top margin-xsmall">
                <RankingTable/>
              </div>

              <div className="buttons-wrapper page-ranking margin-top margin-small">
                <Button text="Ver Mais" link="#"/>
                {/* <a data-w-id="c949c9c1-2bb2-c312-b953-e9700f9fde72" href="#" className="button-large-secondary w-inline-block">
                  <div>Ver Mais</div>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        </div>
        <CallCard/>
        <Footer/>
      </div>
      
    </div>
  </>;
}

export default Ranking;
