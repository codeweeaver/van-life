import { useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <section className="flex items-center min-h-[50vh]">
            <div className="wrapper text-center">
                <h1 className="text-3xl font-bold uppercase mb-4">
                    <span>Error: </span>
                    {error.message}
                </h1>
                <h2 className="text-lg font-semibold text-red-900">
                    <p>
                        {error.status} - {error.statusText}
                    </p>
                    <p>
                        {error.headers}-{error.url}
                    </p>
                </h2>
            </div>
        </section>
    );
}
