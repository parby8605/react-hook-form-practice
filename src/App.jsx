import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/**handleSubmit(params) params는 submit 전송시 실행되는 콜백함수 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ID", { required: true, maxLength: 16 })}
          placeholder="ID"
        />
        <input
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <input
          {...register("EnglishName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="EnglishName"
        />
        <select {...register("gener")}>
          <option value={"male"}>male</option>
          <option value={"female"}>female</option>
          <option value={"others"}>others</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
