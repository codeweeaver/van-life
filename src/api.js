import supabase from "./utils/superbase";

export async function getVans() {
    let { data: vans, error } = await supabase.from("vans").select("*");
    if (error) {
        throw {
            message: "Failed to fetch vans",
            statusText: error,
            status: error,
        };
    }
    return vans;
}

export async function getVan(id) {
    let { data: van, error } = await supabase
        .from("vans")
        .select()
        .eq("id", id);
    if (error) {
        throw {
            message: error.message,
        };
    }
    return van;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        };
    }
    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };
    }

    return data;
}
