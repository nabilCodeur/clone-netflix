import { Link } from "react-router-dom";

const FallbackComponent = ({
  error,
  resetErrorBoundary,
}: {
  error: Error | null;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] ">
      <div className="flex flex-col items-center justify-center p-16 space-y-4 rounded-sm bg-black/70">
        <h1 className="mb-4 text-2xl font-bold text-white uppercase">
          Une erreur s'est produite
        </h1>
        {import.meta.env.DEV ? (
          <p>{error?.message ?? "Erreur inconnue"}</p>
        ) : null}
        <Link to={"/"}>
          <button
            className="p-2 text-center text-white uppercase bg-red-600 rounded-sm"
            onClick={resetErrorBoundary}
          >
            Retour à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FallbackComponent;
