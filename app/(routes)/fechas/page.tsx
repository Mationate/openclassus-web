import Events from "./_components/event-registration";

const PreRegisterPage = ({}: {
}) => {

    return ( 
        <div className="mx-auto flex flex-col md:flex-row md:items-start md:justify-between h-full bg-zinc-900 p-6">
  {/* Columna de texto a la izquierda */}
  <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
    <a href="/">
        <span className=" text-sm text-black bg-amber-400 hover:bg-color3bs rounded-sm p-2">
            Volver
        </span>
    </a>
    <h3 className="text-white text-[14px] font-medium lg:text-base mt-4">
      Preguntas frecuentes
    </h3>
    <h1 className="py-4 text-2xl font-medium text-amber-400 lg:text-[42px] lg:leading-[58px]">
      Conviértete en facilitador de la metodología Not A Game
    </h1>
    <p className="text-slate-400 pb-[24px]">
      Ya seas un Consultor, Formador, Relator o líder de equipo en tu organización, te respondemos algunas dudas de por qué debes transformarte en un facilitador certificado.
    </p>
  </div>

  {/* Columna de eventos a la derecha */}
  <div className="lg:w-2/3 mt-4 md:mt-0">
    <div className="flex items-start gap-x-2">
      <Events />
    </div>
  </div>
</div>

      
    );
}

export default PreRegisterPage;
