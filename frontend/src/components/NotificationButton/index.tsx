import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/nofication-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type props = {
  saleId: number;
}

function handleClick(id: number){
  axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then((res) =>{
      toast.success("SMS enviado com sucesso!");
    }).catch((err) =>{
      toast.error("Falha ao enviar o SMS!");
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
