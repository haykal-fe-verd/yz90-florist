export function EnvironmentLabel() {
    if (import.meta.env.MODE !== "development") return null;

    return <div className="app-environment-label uppercase">{import.meta.env.MODE}</div>;
}
