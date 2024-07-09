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
      {/**handleSubmit(params) params는 submit 전송시 실행되는 콜백함수 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ID", { required: "ID를 입력해주세요", maxLength: 16 })}
          placeholder="ID"
        />
        {errors.ID && <p role="alert">{errors.ID?.message}</p>}
        <input
          {...register("mail", { required: "Email을 입력해주세요" })}
          aria-invalid={errors.mail ? "true" : "false"}
          placeholder="E-mail"
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        <input
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 4,
              message: "비밀번호는 최소 4자리 이상이여아 합니다",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 최대 16자리 이하이여아 합니다",
            },
          })}
          placeholder="password (4~16자리)"
        />
        {errors.password && <p role="alert">{errors.password?.message}</p>}
        <input
          {...register("NickName", {
            required: false,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="NickName - 필수사항이 아닙니다"
        />
        <select {...register("gender")}>
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
