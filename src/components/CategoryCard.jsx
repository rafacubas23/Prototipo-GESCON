export default function CategoryCard({ icon, title, desc, onClick }) {
    return (
        <div className="category-card" onClick={onClick}>
            <div className="category-icon">{icon}</div>
            <div className="category-title">{title}</div>
            <div className="category-desc">{desc}</div>
        </div>
    );
}
