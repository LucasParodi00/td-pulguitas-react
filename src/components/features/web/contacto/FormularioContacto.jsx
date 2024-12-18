import { useForm } from "react-hook-form"
import { InputDashboard } from "../../../common/inputs/InputDashboard";
import { TextAreaDashboard } from "../../../common/inputs/TextAreaDashboard";
import { SendButton } from "../../../common/button/SendButton";
import { ContainerWeb } from "../../../layout/ContainerWeb";


export const FormularioContacto = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

    }

    return (
        <div>
            <ContainerWeb>
                <form className="grid lg:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-10">
                        <InputDashboard
                            label={'Nombre y Apellido'}
                            {...register('nombreyapellido')}
                        />

                        <InputDashboard
                            label={'Correo'}
                            {...register('correo')}
                        />
                    </div>
                    <TextAreaDashboard
                        rows='6'
                        label={'Mensaje'}
                        {...register('mensaje')}
                    />
                    <SendButton texto="Enviar" />
                </form>
            </ContainerWeb>
        </div>
    )
}