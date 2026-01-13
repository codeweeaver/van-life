import { Link } from "react-router";

export default function NotFound() {
    return (
        <section>
            <div className="wrapper h-screen flex items-center justify-center">
                <div class="text-center mb-40">
                    <p class="text-base font-semibold text-accent">404</p>
                    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Page not found
                    </h1>
                    <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            class="rounded-md bg-accent px-5 py-4 text-sm font-semibold text-white shadow-xs hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
