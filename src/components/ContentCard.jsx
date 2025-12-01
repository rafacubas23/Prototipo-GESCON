import { useState } from "react";

export default function ContentCard({
                                        title,
                                        author,
                                        time,
                                        excerpt,
                                        onClick,
                                        isPodcast,
                                    }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="content-card" onClick={onClick}>
            <div className="content-header">
                <div>
                    <div className="content-title">{title}</div>
                    <div className="content-author">{author}</div>
                </div>

                <div className="content-time">{time}</div>
            </div>

            <div className="content-excerpt">{excerpt}</div>

            {isPodcast ? (
                <button className="control-btn" style={{ marginTop: 10 }}>
                    ▶ Ouvir
                </button>
            ) : (
                <button
                    className={`heart-btn ${liked ? "active" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setLiked(!liked);
                    }}
                >
                    ♡
                </button>
            )}
        </div>
    );
}
