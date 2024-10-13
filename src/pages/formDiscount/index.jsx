import styles from "./styles.module.css";
import animals from "../../assets/images/animals.png";
import { useForm } from "react-hook-form";

function FormDiscount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={styles.container_formDiscount}>
      <div className={styles.title_formDiscount}>
        <h1>5% off on the first order</h1>
      </div>
      <div className={styles.containerImageAndForm}>
        <img src={animals} alt="animals" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <input
            type="text"
            {...register("username", { requierd: "Name is requered" })}
            placeholder="Name"
          />

          {errors.username && <p>{errors.username.message}</p>}
          <input
            type="tel"
            {...register("number", { required: "Phone number is requered" })}
            placeholder="Phone number"
          />

          {errors.number && <p>{errors.number.message}</p>}

          <input
            type="email"
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
          <button type="submit">Get a discount</button>
        </form>
      </div>
    </div>
  );
}

export default FormDiscount;
