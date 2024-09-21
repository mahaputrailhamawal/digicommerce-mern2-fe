import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useLogin } from "../hooks/use.login";
import { AuthLayout } from "./layout.auth";

export const Login = () => {
    const { errors, handleLogin, loading } = useLogin();

  return (
    <AuthLayout>
        <div className="w-[300px] space-y-4">
            <section>
                <h3>Login</h3>
                <p>Welcome back!</p>
            </section>
            <form onSubmit={handleLogin} className="space-y-2">
                <Input name="email" placeholder="Email"/>
                <Input name="password" type="password" placeholder="Password"/>
                <Button disabled={loading} isFullWidth>Register</Button>
                {errors.map((error) => {
                    return <div key={error.code} className="text-center text-xs text-rose-600">{error.message}</div>
                })}
            </form>
            <div>
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </div>
    </AuthLayout>
  );
};
