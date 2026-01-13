import { useOutletContext } from "react-router";

export default function HostVanPricing() {
    const { currentVan } = useOutletContext();

    return (
        <section>
            <h4 className="font-bold">
                ${currentVan.price}
                <span className="font-normal">/day</span>
            </h4>
        </section>
    );
}
