export default function EventCard({ date, title, location, category }) {
    return (
        <div className="event-card">
            <div className="event-date">{date}</div>
            <div className="event-title">{title}</div>
            <div className="event-location">📍 {location}</div>
            <div className="event-category">{category}</div>
        </div>
    );
}
