import { Modal } from "antd";

function ModalWindow({ loading, open, setOpen }) {
  return (
    <Modal
      title={loading ? <h2>Loading...</h2> : <h2>Congratulations!</h2>}
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      {loading ? (
        <p style={{ fontSize: "20px" }}>
          Please wait while we process your order...
        </p>
      ) : (
        <>
          <p style={{ fontSize: "20px" }}>
            Your order has been successfully placed on the website. A manager
            will contact you shortly to confirm your order.
          </p>
        </>
      )}
    </Modal>
  );
}

export default ModalWindow;
