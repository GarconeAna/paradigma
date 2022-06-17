import Button from '../components/button';
import Footer from '../components/footer';
import Header from '../components/header';
import FearGreed from '../components/feargreed';
import CryptoTable from '../components/crypto-table';
import ActionBar from '../components/header/action-bar';

function Home() {
  return <>
    <div className="page-wrapper">
      <ActionBar/>
      <div className="main-wrapper">
        <div className="section_header">
          <Header/>
          <div className="page-padding">
            <div className="container-large">
              <div className="padding-vertical padding-xxlarge">
                <div className="main-grid">
                  <div id="w-node-e6935c6f-3638-e03f-08c8-ba4e4f695437-49152174" className="grid-wrapper">
                    <div>
                      <h1 className="heading-xhuge">As Maiores Criptomoedas</h1>
                    </div>
                    <div className="margin-vertical margin-xsmall">
                      <div className="text-size-large text-color-dark-gray">Compare preços lado a lado com fundamentos. Vire <span className="text-color-medium-green">Paradigma Pro</span> para desbloquear o melhor conteúdo.</div>
                    </div>
                    <div id="w-node-c3264975-3374-429e-8820-9bc466de5dcb-66de5db1" className="buttons-wrapper">
                      <Button text="Vire Pro" link="#"/>
                      <Button text="Saiba Mais" link="#"/>
                    </div>
                  </div>
                  <div id="w-node-f99acad8-fa20-800d-5f76-178139bfb243-49152174" className="grid-wrapper">
                    <div className="background-color-white style-radius padding-small">
                      <div>
                        <h2 className="heading-medium margin-bottom margin-small">Índice do Medo &amp; Ganância</h2>
                      </div>
                      <div className="grid-index-wrapper">
                        <div className="text-size-small text-style-allcaps text-color-red">Medo Extremo</div>
                        <div className="text-size-small text-style-allcaps text-color-dark-gray">nível</div>
                        <div className="text-size-small text-style-allcaps text-color-olive-green">Euforia Extrema</div>
                      </div>
                      <div className="index-color margin-custom1">
                        <FearGreed/>    
                      </div>
                      <div className="text-size-regular text-color-main-gray text-align-right">Último update em 6/Maio</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CryptoTable/>
        <Footer/>
      </div>
    </div>
  </>;
}

export default Home;
