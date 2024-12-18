import { useForm } from "react-hook-form"
import { AuthLayoutForm } from "../../../layout/AuthLayoutForm"
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { SendButton } from "../../../common/button/SendButton";
import { Link, useNavigate } from "react-router-dom";
import { authValidation } from "../../../../utils/validations/authValidation";
import { useFetchApi } from "../../../../hook/useFetchApi";




export const Register = () => {
    const { fetchDatas } = useFetchApi('auth');
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async (datas) => {
        try {
            await fetchDatas({ method: 'POST', body: datas, patch: '/registro' })
            navigate('/login');
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <AuthLayoutForm>
            <h1 className="text-center uppercase text-xl font-bold text-gray-600">Registrate</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                <div>
                    <InputDashboard
                        label={'Nombre'}
                        {...register('nombre', authValidation.nombre)}
                        error={errors.nombre?.message}
                    />
                    <InputDashboard
                        label={'Apellido'}
                        {...register('apellido', authValidation.apellido)}
                        error={errors.apellido?.message}
                    />
                    <InputDashboard
                        label={'Correo'}
                        {...register('correo', authValidation.correo)}
                        error={errors.correo?.message}
                    />
                    <InputDashboard
                        label={'Password'}
                        type="password"
                        {...register('password', authValidation.password)}
                        error={errors.password?.message}
                    />
                </div>
                <div className="px-3">
                    <SendButton
                        texto="Crear Cuenta"
                    />
                </div>
            </form>
            <p className="text-xs mt-2">Ya tenes una cuenta ? <Link to={'/login'} className="font-bold">Inicia Sesion</Link> </p>
        </AuthLayoutForm>
    )
}