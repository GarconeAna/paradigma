import seta from '../../../images/svg-seta.svg';
import setaTop from '../../../images/svg-seta-top.svg';

function ItemFearGreed({number, disablend=false}) {
  return <>
    <div className={`item item-${number}`}>
      <img src={seta} loading="lazy" alt="" className="item-icon"/>
      <div className={`explaner padding-custom1 item-${number}`}>
        <div className="text-size-small text-style-allcaps">2.2 Medo</div>
        <img src={setaTop} loading="lazy" alt="" className="image"/>
      </div>
    </div>

  </>;
}

export default ItemFearGreed;
