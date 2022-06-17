import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import Button from '../components/button';
import AboutAccess from '../components/paradigma-pro/about-access';
import Indicators from '../components/paradigma-pro/indicators';
import AboutPublications from '../components/paradigma-pro/about-publications';
import Community from '../components/paradigma-pro/community';
import CommonQuestions from '../components/paradigma-pro/common-questions';
import ActionBar from '../components/header/action-bar';

import mockup from '../images/Mockup-1.png';
import moeda from '../images/image-moeda.png';
// import setagreen from '../images/seta-green.svg';
import logocarteira from '../images/icons8-inspection-2.svg';
import logorelatorio from '../images/icons8-news-1.svg';
import logominicurso from '../images/icons8-video-1.svg';
import logoideiasalternativas from '../images/icons8-financial-growth-analysis-1.svg';
import logoindicadores from '../images/icons8-heat-map-1.svg';
import logovaloracao from '../images/icons8-bitcoin-1.svg';
import imageaspas from "../images/“.png";
import setalightgreen from "../images/seta-light-green.svg";
import group from "../images/Group-10948.png";
import setagreen from "../images/seta-green.svg";
import rotatomobile from "../images/Rotato-Mobile-Boletim-Invertido.png";

function ParadigmaPro() {
  return <>
    <div className="page-wrapper">
      <ActionBar/>
      <div className="main-wrapper">
        <div className="section_header page-pro-background">
          <Header/>
          <div className="page-padding">
            <div className="container-large padding-vertical padding-huge">
              <div className="main-grid">
                <div id="w-node-_4758ae2d-3723-6356-40c0-4e8dd8087bb4-71152178" className="grid-wrapper">
                  <div className="flex-horizontal-bottom">
                    <div className="text-size-xlarge">Paradigma Pro</div>
                    <div className="flex-number">
                      <div className="text-size-medium text-color-white text-weight-semibold">R$ 159,90</div>
                    </div>
                  </div>
                  <div className="flex-horizontal-bottom max-width-xlarge margin-vertical margin-xsmall">
                    <h2 className="heading-xhuge">Turbine seus investimentos</h2>
                      <img src={moeda} loading="lazy" alt="" className="emoji-money"/>
                  </div>
                  <div className="text-size-large text-color-dark-gray">Encontre as <span className="text-color-darkest-gray text-weight-medium">melhores oportunidades de investimento</span> no mercado mais acelerado do planeta. Simples, transparente, direto ao ponto.</div>
                  <div className="buttons-wrapper margin-top margin-large">
                    <Button text="ASSINE AGORA" link="!#" />
                    {/* <a data-w-id="4758ae2d-3723-6356-40c0-4e8dd8087bbe" href="!#" className="button-large w-inline-block">
                      <div>ASSINE AGORA</div>
                      <img src={setagreen} loading="lazy" alt="" className="icon-xsmall margin-left margin-tiny"/>
                    </a> */}
                  </div>
                </div>
                <div id="w-node-_4758ae2d-3723-6356-40c0-4e8dd8087bc4-71152178" className="grid-wrapper page-pro">
                  <img src={mockup} loading="lazy" id="w-node-_981e73c5-53a5-2281-123e-afec0277f944-71152178" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 600px" alt="" className="full-image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="page-padding">
            <div className="container-large padding-bottom padding-xlarge">
              <div className="text-size-medium text-color-light-gray text-weight-semibold text-style-allcaps">O que você ganha ao liberar seu acesso</div>
              <div className="main-grid page-pro margin-vertical margin-xlarge">
                <AboutAccess id="w-node-_8825f63d-4f82-0115-3c8b-ba5d787e83fb-71152178" image={logocarteira} title="Carteiras Temáticas" subtitle="Carro-chefe" text="Seleção de ativos que julgamos ser as melhores oportunidades no universo cripto. Segmentadodos pelos temas mais promissores."/>

                <AboutAccess id="w-node-e2995616-b56b-8998-a5a3-afbee93afd2f-71152178" image={logorelatorio} title="Relatórios" text="Boletins, panoramas, notícias relevantes e guias. Filtramos o que realmente importa e te entregamos mastigado."/>

                <AboutAccess id="w-node-aeb547d2-e557-7080-b690-61fe5547502b-71152178" image={logominicurso} title="Mini-cursos" text="Aprenda o passo-a-passo na prática com tutoriais sobre diversos temas e fatos relevantes no formato mais preferido da internet."/>

                <AboutAccess id="w-node-e3c78479-2541-3537-c710-54acc705bc24-71152178" image={logoideiasalternativas} title="Ideias alternativas de investimento" subtitle="Tem estômago?" text="Ideias sobre projetos em fases muito iniciais ou de capitalização de mercado muito baixa."/>

                <AboutAccess id="w-node-_216ad6c4-877d-0395-5c98-473a30c5900e-71152178" image={logoindicadores} title="Indicadores On-chain" text="Dados para você descobrir sinais e antever grandes movimentos. Conexão direta com a blockchain e as maiores bolsas do mundo."/>

                <AboutAccess id="w-node-_65071f81-56f9-c1a0-3a6e-02c000c8be6a-71152178" image={logovaloracao} title="Modelos de Valoração" text="Explore métodos de precificação do bitcoin. Confira suas previsões e aprenda a julgar se está caro ou barato."/>
              </div>
            </div>
          </div>
        </div>
        <Indicators/>
        <div className="section">
          <div className="page-padding">
            <div className="container-large padding-vertical padding-huge">
              <h2 className="heading-xlarge text-align-center margin-bottom margin-large"></h2>
              <AboutPublications/>
            </div>
          </div>
        </div>

        <div className="main-grid grid-custom margin-custom-left margin-vertical margin-huge">
          <div id="w-node-_04f8d9a2-2aed-64fe-efd8-f19bda242180-71152178" className="grid-wrapper">

            <div id="w-node-_623dd891-df92-faff-063c-c059fce7cf93-71152178" className="max-width-medium margin-bottom margin-huge">
              <h2 className="heading-xxhuge text-color-pink margin-bottom margin-small">28</h2>
              <h2 className="heading-xlarge">relatórios com as oportunidades + quentes</h2>
              <div className="text-size-large text-color-dark-gray margin-top margin-xsmall">A cada 45 dias, te mandamos um relatório de longo formato. As idéias de investimento antes restritas a fundos e tubarões, agora numa linguagem que você pode entender e aplicar.</div>
            </div>

            <div className="max-width-medium margin-left margin-huge">
              <div className="flex-horizontal-align-center">
                <img src={imageaspas} loading="lazy" alt="" className="image-6"/>
                <h2 className="heading-xlarge">As FAANG da Web3</h2>
              </div>
              <div className="div-block-10">
                <div className="text-size-large text-color-dark-gray margin-vertical margin-xsmall">Conheça 5 protocolos (com tokens) que podem desbancar ou competir com os maiores olgopólios da web 2.0.</div>
                <div className="buttons-wrapper">
                  <a data-w-id="9e10a641-1e1d-b7e7-e177-adbb9d8be7bb" href="!#" className="button-text w-inline-block">
                    <div>Leia mais</div>
                    <img src={setalightgreen} loading="lazy" alt="" className="icon-xsmall margin-left margin-xxsmall"/>
                  </a>
                </div>
              </div>
            </div>
                
          </div>

          <div id="w-node-_44b815d9-6324-5161-324d-7fa96d9737d7-71152178" className="grid-wrapper custom-inner size-image">
            <img src={group} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 600px, (max-width: 991px) 526.390625px, 752px" alt="" className="full-image fix-mobile"/>
          </div>
        </div>

        <div className="main-grid grid-duo margin-top margin-huge">
          <div id="w-node-_71100703-8d2e-9843-8156-41ae28b7b061-71152178" className="grid-wrapper">
            <div id="w-node-_71100703-8d2e-9843-8156-41ae28b7b062-71152178" className="max-width-medium">
              <h2 className="heading-xlarge">Boletim semanal</h2>
              <div className="text-size-large text-color-dark-gray margin-top margin-xsmall">Gaste menos tempo filtrando notícias. Receba os produtos mais inovadores, status da blockchain e projetos com maior potencial de valorização, toda semana, na sua caixa de entrada.</div>
            </div>
            <div className="buttons-wrapper margin-top margin-medium">
              <a data-w-id="cdfec08f-3ae4-19b4-aac3-3fef37e7c041" href="!#" className="button-large w-inline-block">
                <div>Comece a receber já</div>
                <img src={setagreen} loading="lazy" alt="" className="icon-xsmall margin-left margin-xxsmall"/>
              </a>
            </div>
          </div>
          <div id="w-node-_71100703-8d2e-9843-8156-41ae28b7b05f-71152178" className="grid-wrapper mobile">
            <img src={rotatomobile} loading="lazy" sizes="(max-width: 479px) 85vw, (max-width: 767px) 325.890625px, (max-width: 991px) 39vw, 389.90625px" alt="" className="image-phone"/></div>
        </div>
        <Community/>
        <CommonQuestions/>
      </div>
      <Footer/>
    </div>
  </>;
}

export default ParadigmaPro;
