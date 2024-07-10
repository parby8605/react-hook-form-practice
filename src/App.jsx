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
      <h2 className="title">React-Hook-Form 예제</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ID", { required: "ID를 입력해 주세요" })}
          aria-invalid={errors.ID ? "true" : "false"}
          placeholder="ID"
        />
        {errors.ID && <p role="alert">{errors.ID.message}</p>}
        <input
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
          type="email"
          placeholder="E-mail"
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 4,
              message: "4자리 이상 비밀번호를 사용해주세요.",
            },
            maxLength: {
              value: 16,
              message: "16자리 이하 비밀번호를 사용해주세요.",
            },
          })}
          type="password"
          placeholder="password (4~16자리)"
        />
        {errors.password && <p role="alert">{errors.password.message}</p>}
        <input
          {...register("NickName")}
          placeholder="NickName - 필수사항이 아닙니다"
        />
        <select {...register("GENDER")}>
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
