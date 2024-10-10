import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/customers', {
      replace: true
    })
  }


  return (
    <>
      <div className="p-5">
        <h1 className="text-lg">LoginPage</h1>
        <hr />

        <div className="mt-5">
          <button type="submit"
            className="flex w-full justify-center bg-slate-700 text-white rounded-md  px-3 py-1.5 text-md font-semibold"
            onClick={onLogin}>
            Iniciar Session
          </button>
        </div>
      </div>

    </>

  )
}
