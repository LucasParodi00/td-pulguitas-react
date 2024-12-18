import { Register } from "../../components/features/web/auth/Register"
import { LoginLayout } from "../../components/layout/LoginLayout"


export const RegisterPage = () => {
    return (
        <LoginLayout>
            <Register />
        </LoginLayout>
    )
}