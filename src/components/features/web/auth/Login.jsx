import { useForm } from "react-hook-form"
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { SendButton } from "../../../common/button/SendButton";
import { AuthLayoutForm } from "../../../layout/AuthLayoutForm";
import { Link, useNavigate } from "react-router-dom";
import { useFetchApi } from "../../../../hook/useFetchApi";
import { authValidation } from "../../../../utils/validations/authValidation";
import { AuthContext } from "../../../../auth/context/AuthContext";
import { useContext } from "react";
import { useState } from "react";



export const Login = () => {
    const [errores, setErrores] = useState('');

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const { fetchDatas } = useFetchApi('auth');
    const navigate = useNavigate();

    const onSubmit = async (datas) => {
        try {
            const { data: { usuario, token } } = await fetchDatas({ method: 'POST', body: datas, patch: '/login' });
            login(usuario.nombre, usuario.correo, token, usuario.id_rol, usuario.id_usuario);
            navigate('/', {
                replace: true
            });
        } catch (err) {
            setErrores('Usuario no encontrado');
        }
    }



    return (
        <AuthLayoutForm>
            <h1 className="text-center uppercase text-xl font-bold text-gray-600">Iniciar Sesion</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-3">
                    <InputDashboard
                        label={'Usuario'}
                        {...register('correo', authValidation.correo)}
                        error={errors.correo?.message}
                    />
                    <InputDashboard
                        label={'Password'}
                        type='password'
                        {...register('password', authValidation.password)}
                        error={errors.password?.message}
                    />
                </div>
                <div className="px-3">
                    <SendButton
                        texto="Iniciar"
                    />
                </div>
                {errores.length > 0 && <p className="text-center text-red-600 text-xs">{errores}</p>}
            </form>
            <p className="text-xs mt-2">No tenes una cuenta ? <Link to={'/register'} className="font-bold">Create Una</Link> </p>
        </AuthLayoutForm >
    )
}