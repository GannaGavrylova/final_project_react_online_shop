import styles from "./styles.module.css";

import { Modal } from "antd";

function ModalWindow({ loading, open, setOpen, setLoading }) {
  //   const [open, setOpen] = React.useState(false);
  //   const [loading, setLoading] = React.useState(true);
  //   const showLoading = () => {
  //     setOpen(true);
  //     setLoading(true);

  //     // Simple loading mock. You should add cleanup logic in real world.
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   };
  return (
    <>
      <Modal
        title={<p>Loading Modal</p>}
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalWindow;
