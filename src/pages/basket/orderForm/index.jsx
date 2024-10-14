import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { Button } from "antd";

function OrderForm({ showLoading, totalPrice, totalItems }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // Отслеживание значений инпутов
  const watchedUsername = watch("username");
  const watchedNumber = watch("number");
  const watchedEmail = watch("email");

  return (
    <div className={styles.container_form}>
      <h1>Order details</h1>
      <p className={styles.total_items}>{totalItems} items</p>
      <div className={styles.total_price}>
        <p>Total </p>
        <p>${totalPrice}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
        <input
          {...register("username", {
            required: "Name is requered",
            minLength: {
              value: 2,
              message: "Name must be at least 2 symbol",
            },
            maxLength: {
              value: 20,
              message: "Name must not exceed 20 symbol",
            },
          })}
          placeholder="Name"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          type="tel"
          {...register("number", {
            required: "Phone number is requered",
            minLength: {
              value: 9,
              message: "Phone number must be at least 9 symbol",
            },
            maxLength: {
              value: 12,
              message: "Phone number must not exceed 12 symbol",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone number must contain only digits",
            },
          })}
          placeholder="Phone number"
          inputMode="numeric"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        {errors.number && <p>{errors.number.message}</p>}
        <input
          {...register("email", {
            required: "Email is requered",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email must contain the @ sign and the domain name",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Button onClick={showLoading} type="primary" htmlType="submit">
          Order
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
