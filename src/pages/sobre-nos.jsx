import Footer from '../components/footer';
import ActionBar from '../components/header/action-bar';
import HeaderMenu from '../components/header/action-bar/menu';
import seta from '../images/seta-withw.svg';
import fimage from '../images/fimage-about-head.png';
import setacarrosel2 from '../images/seta-carrossel-2.svg';
import setacarrosel from '../images/seta-carrossel.svg';
import group from '../images/Group-10947_1.png';
import setagreen from '../images/seta-green.svg';
import Reports from '../components/sobre-nos/reports';
import CallCard from '../components/sobre-nos/call-card';
import WithUs from '../components/sobre-nos/with-us';
import Media from '../components/sobre-nos/media';

function SobreNos() {
  return <>
    <div className="page-wrapper">
      <ActionBar/>
      <div className="main-wrapper">
        <div className="section_header page-about">
          <HeaderMenu/>
          <div className="page-padding">
            <div className="container-large padding-vertical padding-huge">
              <div className="main-grid grid-custom">
                <div id="w-node-_41485098-b357-94a3-8433-767498c6bae8-2815217b" className="grid-wrapper">
                  <h2 className="heading-huge text-color-white">A vanguarda do conhecimento em Bitcoin &amp; Criptomoedas</h2>
                  <div className="text-size-large text-color-white margin-top margin-xsmall">Produzimos pesquisa original e análises acionáveis sobre criptomoedas. Testamos os produtos mais inovadores do mercado para trazer o alpha até você. Nosso conteúdo é como nenhum outro no Brasil. Tire a prova você mesmo.</div>
                  <div className="buttons-wrapper margin-top margin-large">
                    <a data-w-id="41485098-b357-94a3-8433-767498c6baf9" href="#" className="button-withe-secondary w-inline-block">
                      <div>Conheça nosso conteúdo</div>
                      <img src={seta} loading="lazy" alt="" className="icon-xsmall margin-left margin-tiny"/>
                    </a>
                  </div>
                </div>
                <div id="w-node-_3291484f-e3c3-b165-a89d-117d24e62dc1-2815217b" className="grid-wrapper custom-inner">
                  <img src={fimage} loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 816px" alt="" className="full-image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-description">
          <div className="page-padding">
            <div className="container-large padding-bottom padding-huge">
              <h2 className="heading-large margin-bottom margin-large">Alguns dos nossos relatórios:</h2>
              <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                <div className="grid page-about w-slider-mask">
                  <Reports title="Os segredos da maior gestora de BTC do planeta" />
                  <Reports title="Yearn Finance: um hedge fund quantitativo sem dono" />
                  <Reports title="O Fim das Nações" />
                  <Reports title="A Fórmula dos Bored Apes" />
                  <Reports title="A Fórmula dos Bored Apes" />
                  <Reports title="A Fórmula dos Bored Apes" />
                  <Reports title="A Fórmula dos Bored Apes" />
                </div>
                <div className="left-arrow w-slider-arrow-left">
                  <img src={setacarrosel2} loading="lazy" alt=""/>
                </div>
                <div className="right-arrow w-slider-arrow-right">
                  <img src={setacarrosel} loading="lazy" alt=""/>
                </div>
                <div className="w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-bottom padding-huge">
          <div className="page-padding">
            <div className="container-large padding-top padding-xlarge">
              <div className="main-grid grid-custom">
                <div id="w-node-_41485098-b357-94a3-8433-767498c6bb81-2815217b" className="grid-wrapper">
                  <div id="w-node-_41485098-b357-94a3-8433-767498c6bb82-2815217b" className="max-width-medium margin-bottom margin-huge">
                    <h2 className="heading-xlarge">A 1ª research do Brasil especializada em cripto</h2>
                    <div className="text-size-large text-color-dark-gray margin-top margin-xsmall">Juntamos os melhores talentos do país a tecnologias avançadas de leitura da blockchain para te ajudar a decidir onde, como e quando investir.</div>
                  </div>
                </div>
                <div id="w-node-cd73f0a8-44ab-134e-8627-53a9fc79dc8c-2815217b" className="grid-wrapper size-image">
                  <img src={group} loading="lazy" sizes="(max-width: 767px) 92vw, (max-width: 991px) 600px, 856px" alt="" className="full-image"/> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section page-about">
          <div className="page-padding">
            <div className="container-large padding-vertical padding-huge">
            <div className="background-color-main-green padding-xxlarge stylle-radius">
              <CallCard title="Assine agora — Se não ficar satisfeito, cancele em até 7 dias e receba o dinheiro de volta" image={setagreen} button="Assinar"/>
            </div>
            <Media/>
            </div>
          </div>
        </div>
        <WithUs/>  
      </div>
      <Footer/>
    </div>
  </>;
}

export default SobreNos;
