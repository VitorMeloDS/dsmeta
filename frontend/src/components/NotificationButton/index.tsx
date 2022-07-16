import axios from "axios";
import icon from "../../assets/img/nofication-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type props = {
  saleId: number;
}

function handleClick(id: number){
  axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then((res) =>{
       console.log('foi')
    }).catch((err) =>{
      alert('No momento não foi possivel enviar o SMS tente novamente.')
    })
}

function NotificationButton({saleId}: props) {

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
