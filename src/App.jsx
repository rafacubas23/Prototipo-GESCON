import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryCard from "./components/CategoryCard";
import ContentCard from "./components/ContentCard";
import EventCard from "./components/EventCard";
import { leiturasData, agendaData, podcastsData, leituraTexto } from "./data";

export default function App() {
    const [screen, setScreen] = useState("home");
    const [fontSize, setFontSize] = useState("small");
    const [highContrast, setHighContrast] = useState(false);

    const changeFontSize = (size) => setFontSize(size);
    const toggleContrast = () => setHighContrast(!highContrast);

    const renderHome = () => (
        <div className="screen active">
            <Header title="Cultura em Movimento" />

            <div className="content">
                <div className="badge">100% Gratuito</div>
                <p className="welcome-text">
                    Aproveite seu tempo no transporte público com conteúdo cultural de qualidade.
                    Escolha uma categoria abaixo:
                </p>

                <div className="category-cards">
                    <CategoryCard
                        icon="📚"
                        title="Leituras Rápidas"
                        desc="Contos, poesias e crônicas para ler durante seu trajeto"
                        onClick={() => setScreen("leituras")}
                    />

                    <CategoryCard
                        icon="🎧"
                        title="Ouça e Aprenda"
                        desc="Podcasts e áudios sobre cultura e história local"
                        onClick={() => setScreen("podcasts")}
                    />

                    <CategoryCard
                        icon="📅"
                        title="Agenda Cultural"
                        desc="Eventos, exposições e shows em São Bento do Sul"
                        onClick={() => setScreen("agenda")}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );

    const renderLeituras = () => (
        <div className="screen active">
            <Header title="Leituras Rápidas" onBack={() => setScreen("home")} />

            <div className="content">
                <div className="filters">
                    <button className="filter-btn active">Todos</button>
                    <button className="filter-btn">Contos</button>
                    <button className="filter-btn">Poesias</button>
                    <button className="filter-btn">Crônicas</button>
                </div>

                <div className="content-list">
                    {leiturasData.map((item, idx) => (
                        <ContentCard
                            key={idx}
                            {...item}
                            onClick={() => setScreen("leitura-detalhe")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    const renderLeituraDetalhe = () => (
        <div className="screen active">
            <Header title="Leitura" onBack={() => setScreen("leituras")} />

            <div className="reading-controls">
                <button
                    className={`control-btn ${fontSize === "small" ? "active" : ""}`}
                    onClick={() => changeFontSize("small")}
                >
                    A
                </button>

                <button
                    className={`control-btn ${fontSize === "medium" ? "active" : ""}`}
                    onClick={() => changeFontSize("medium")}
                >
                    A+
                </button>

                <button
                    className={`control-btn ${fontSize === "large" ? "active" : ""}`}
                    onClick={() => changeFontSize("large")}
                >
                    A++
                </button>

                <button
                    className={`control-btn ${highContrast ? "active" : ""}`}
                    onClick={toggleContrast}
                >
                    ◐ Contraste
                </button>
            </div>

            <div
                className={`reading-content size-${fontSize} ${
                    highContrast ? "high-contrast" : ""
                }`}
            >
                <div className="reading-title">{leituraTexto.title}</div>
                <div className="reading-author">{leituraTexto.author}</div>

                {leituraTexto.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </div>
        </div>
    );

    const renderPodcasts = () => (
        <div className="screen active">
            <Header title="Ouça e Aprenda" onBack={() => setScreen("home")} />

            <div className="content">
                <div className="section-title">Podcasts Disponíveis</div>

                <div className="content-list">
                    {podcastsData.map((p, idx) => (
                        <ContentCard key={idx} {...p} isPodcast />
                    ))}
                </div>
            </div>
        </div>
    );

    const renderAgenda = () => (
        <div className="screen active">
            <Header title="Agenda Cultural" onBack={() => setScreen("home")} />

            <div className="content">
                <div className="filters">
                    <button className="filter-btn active">Todos</button>
                    <button className="filter-btn">Música</button>
                    <button className="filter-btn">Teatro</button>
                    <button className="filter-btn">Exposições</button>
                    <button className="filter-btn">Oficinas</button>
                </div>

                {agendaData.map((ev, idx) => (
                    <EventCard key={idx} {...ev} />
                ))}
            </div>
        </div>
    );

    return (
        <div className="phone-frame">
            {screen === "home" && renderHome()}
            {screen === "leituras" && renderLeituras()}
            {screen === "leitura-detalhe" && renderLeituraDetalhe()}
            {screen === "podcasts" && renderPodcasts()}
            {screen === "agenda" && renderAgenda()}
        </div>
    );
}
