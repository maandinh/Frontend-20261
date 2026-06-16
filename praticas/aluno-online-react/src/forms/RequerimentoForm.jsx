import { useForm } from "react-hook-form";
import { cadastrarRequerimento } from "../services/requerimentoService";


function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (dados) => {
  try {
    const resultado = await cadastrarRequerimento(dados);

    console.log(resultado);

    reset();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <div>
        <label className="block mb-2 font-medium">
          Tipo de Requerimento
        </label>


        <select
          className="w-full border rounded p-2"
          {...register("tipo", {
            required: "Tipo é obrigatório",
          })}
        >
          <option value="">
            Selecione um tipo...
          </option>


          <option value="Revisão de Menção">
            Revisão de Menção
          </option>


          <option value="Dispensa de Disciplina">
            Dispensa de Disciplina
          </option>


          <option value="Mudança de Turno">
            Mudança de Turno
          </option>


          <option value="Trancamento de Matrícula">
            Trancamento de Matrícula
          </option>
        </select>


        {errors.tipo && (
          <p className="text-red-500 mt-1">
            {errors.tipo.message}
          </p>
        )}
      </div>


      <div>
        <label className="block mb-2 font-medium">
          Descrição
        </label>


        <textarea
          rows="5"
          className="w-full border rounded p-2"
          {...register("descricao", {
            required: "Descrição é obrigatória",
            minLength: {
              value: 10,
              message:
                "A descrição deve possuir pelo menos 10 caracteres",
            },
          })}
        />


        {errors.descricao && (
          <p className="text-red-500 mt-1">
            {errors.descricao.message}
          </p>
        )}
      </div>


      <div>
        <label className="block mb-2 font-medium">
          Data do Requerimento
        </label>


        <input
          type="date"
          className="border rounded p-2"
          defaultValue={new Date().toISOString().split("T")[0]}
          {...register("data")}
        />
      </div>


      <div className="flex gap-4">
        <button
          type="reset"
          onClick={() => reset()}
          className="px-4 py-2 border rounded"
        >
          Cancelar
        </button>


        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default RequerimentoForm;