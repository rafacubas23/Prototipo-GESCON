export default function Header({ title, onBack }) {
    return (
        <div className="header" style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {onBack && (
                    <button className="back-btn" onClick={onBack}>← Voltar</button>
                )}
                <h1 style={{ textAlign: "left" }}>{title}</h1>
            </div>

            <div style={{ width: 40 }}></div>
        </div>
    );
}
