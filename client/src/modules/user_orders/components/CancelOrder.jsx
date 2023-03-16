import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDeleteOrderMutation } from "../../../redux/service/order.service";
import Swal from "sweetalert2";

const CancelOrder = ({ order }) => {
  // console.log("🚀 ~ file: CancelOrder.jsx:7 ~ CancelOrder ~ order:", order)
  const [DeleteOrder, {isSuccess}] = useDeleteOrderMutation();

  const submit = (e) => {
    DeleteOrder(e);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Order successfully removed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [isSuccess]);

  return (
    <section className="cancel_order_button">
      <Button onClick={() => submit(order.id)} className="cancel_user_order">
        Cancel order
      </Button>
    </section>
  );
};

export default CancelOrder;
