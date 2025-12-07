/* --- БАЗОВЫЕ НАСТРОЙКИ --- */
:root {
    --bg-dark: #0B0E14; /* Глубокий черный/синий */
    --primary: #3B82F6; /* Яркий синий */
    --accent: #8B5CF6;  /* Фиолетовый */
    --text-main: #FFFFFF;
    --text-muted: #94A3B8;
    --glass-bg: rgba(30, 41, 59, 0.6);
    --glass-border: rgba(255, 255, 255, 0.08);
    --radius-lg: 16px;
    --radius-md: 8px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    line-height: 1.5;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
a { text-decoration: none; }

/* ФОНОВЫЙ ГРАДИЕНТ */
.bg-gradient {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
    background: radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.15), transparent 25%),
                radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.15), transparent 25%);
}

/* --- СТЕКЛО --- */
.glass {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
}

/* --- НАВИГАЦИЯ --- */
.navbar {
    position: fixed; top: 0; width: 100%; z-index: 1000;
    padding: 16px 0;
    border-bottom: 1px solid var(--glass-border);
}
.nav-row { display: flex; justify-content: space-between; align-items: center; }

.logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.2rem; }
.logo-icon {
    width: 32px; height: 32px; background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;
}

.nav-links a { margin: 0 15px; color: var(--text-muted); font-size: 0.95rem; transition: 0.3s; }
.nav-links a:hover { color: white; }
.hidden-mobile { display: block; }
@media(max-width: 768px) { .hidden-mobile { display: none; } }

/* --- КНОПКИ --- */
.btn {
    padding: 10px 24px; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.2s;
    border: none; display: inline-flex; justify-content: center; align-items: center;
}
.btn-primary { background: var(--primary); color: white; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }
.btn-primary:hover { background: #2563EB; transform: translateY(-1px); }
.btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; }
.btn-outline:hover { border-color: white; background: rgba(255,255,255,0.05); }
.btn-lg { padding: 14px 32px; font-size: 1.1rem; }
.w-full { width: 100%; }

/* --- HERO --- */
.hero { padding: 160px 0 80px; text-align: center; }
.hero-content { max-width: 800px; margin: 0 auto; }

.badge {
    display: inline-block; padding: 6px 16px; background: rgba(59, 130, 246, 0.1);
    color: #93C5FD; border-radius: 20px; font-size: 0.9rem; margin-bottom: 24px;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 24px; font-weight: 800; }
.text-gradient {
    background: linear-gradient(to right, #60A5FA, #C084FC);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

.hero-desc { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 40px; }
.hero-btns { display: flex; gap: 16px; justify-content: center; margin-bottom: 60px; }

.metrics-strip {
    display: flex; justify-content: center; gap: 40px; align-items: center;
    padding-top: 40px; border-top: 1px solid var(--glass-border);
}
.metric { display: flex; flex-direction: column; }
.metric strong { font-size: 1.5rem; color: white; }
.metric span { font-size: 0.9rem; color: var(--text-muted); }
.divider { width: 1px; height: 40px; background: var(--glass-border); }

/* --- PRODUCT DEMO (Окно приложения) --- */
.product-showcase { padding: 60px 0 100px; }
.section-title { text-align: center; margin-bottom: 40px; }
.section-title h2 { font-size: 2.5rem; margin-bottom: 10px; }

/* TABS */
.tabs-wrapper {
    display: flex; justify-content: center; gap: 10px; margin-bottom: 30px;
    background: rgba(255,255,255,0.05); padding: 5px; border-radius: 50px; width: fit-content; margin-left: auto; margin-right: auto;
}
.tab-btn {
    background: transparent; border: none; color: var(--text-muted); padding: 10px 24px;
    border-radius: 40px; cursor: pointer; font-size: 0.95rem; font-weight: 500; transition: 0.3s;
}
.tab-btn.active { background: #1E293B; color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }

/* APP WINDOW STRUCTURE */
.app-window {
    width: 100%; max-width: 1000px; height: 600px; margin: 0 auto;
    border-radius: 16px; display: flex; flex-direction: column; overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
}

.window-header {
    height: 44px; background: #151B28; border-bottom: 1px solid var(--glass-border);
    display: flex; align-items: center; padding: 0 16px; gap: 16px;
}
.window-controls { display: flex; gap: 6px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #EF4444; } .yellow { background: #EAB308; } .green { background: #22C55E; }
.address-bar {
    flex: 1; background: #0B0E14; height: 26px; border-radius: 6px;
    font-size: 0.8rem; color: #64748B; display: flex; align-items: center; padding: 0 10px; font-family: monospace;
}

.window-body { flex: 1; display: flex; background: #0F172A; overflow: hidden; }

/* SIDEBAR MOCK */
.app-sidebar {
    width: 220px; background: #111827; border-right: 1px solid var(--glass-border);
    padding: 20px; display: flex; flex-direction: column; gap: 8px;
}
.sidebar-item {
    padding: 10px 12px; color: var(--text-muted); border-radius: 6px; font-size: 0.9rem; cursor: pointer;
}
.sidebar-item.active { background: #1E293B; color: white; font-weight: 500; }
.mt-auto { margin-top: auto; }

@media(max-width: 768px) { .app-sidebar { width: 60px; padding: 10px; } .sidebar-item { font-size: 0; text-align: center; } .sidebar-item::before { content: "●"; font-size: 1.2rem; } }

/* APP CONTENT SCREENS */
.app-content { flex: 1; padding: 24px; display: none; overflow-y: auto; }
.app-content.active { display: block; animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.content-header h3 { font-size: 1.4rem; font-weight: 600; }
.date-picker, .btn-sm { background: #1E293B; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; border: 1px solid var(--glass-border); }

/* DASHBOARD GRID */
.dashboard-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.kpi-card, .chart-card, .table-card {
    background: #1E293B; border-radius: 12px; padding: 20px; border: 1px solid var(--glass-border);
}
.wide { grid-column: span 3; }

.kpi-card small { color: var(--text-muted); font-size: 0.85rem; }
.kpi-card .value { font-size: 1.8rem; font-weight: 700; margin: 5px 0; }
.trend { font-size: 0.8rem; }
.trend.positive { color: #22C55E; } .trend.neutral { color: #94A3B8; }

/* FAKE CHART CSS */
.fake-chart { display: flex; align-items: flex-end; gap: 10px; height: 120px; margin-top: 15px; }
.bar { flex: 1; background: #334155; border-radius: 4px; transition: height 0.5s; }
.bar.active { background: var(--primary); }

/* FAKE TABLE CSS */
.fake-table { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
.ft-row { display: grid; grid-template-columns: 1fr 2fr 1fr 1fr; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; }
.header { color: var(--text-muted); font-size: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
.badge { padding: 2px 8px; border-radius: 10px; font-size: 0.75rem; text-align: center; }
.badge.green { background: rgba(34,197,94,0.2); color: #4ADE80; }
.badge.gray { background: rgba(148,163,184,0.2); color: #CBD5E1; }
.badge.yellow { background: rgba(234,179,8,0.2); color: #FDE047; }

/* MAP SCREEN */
.map-container { position: relative; height: 400px; background: #0F172A; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); }
.map-grid {
    width: 100%; height: 100%;
    background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 40px 40px; opacity: 0.5;
}
.map-pin { width: 12px; height: 12px; background: var(--primary); border-radius: 50%; position: absolute; box-shadow: 0 0 10px var(--primary); cursor: pointer; }
.map-pin:hover { transform: scale(1.5); transition: 0.2s; background: white; }
.p1 { top: 30%; left: 40%; } .p2 { top: 60%; left: 70%; background: #EAB308; } .p3 { top: 40%; left: 20%; background: #22C55E; }
.map-overlay-panel {
    position: absolute; bottom: 20px; left: 20px; background: rgba(15, 23, 42, 0.9);
    padding: 15px; border-radius: 8px; border: 1px solid var(--glass-border); width: 200px;
}
.map-overlay-panel h5 { margin-bottom: 8px; }
.map-overlay-panel p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px; }
.text-green { color: #22C55E; }
.mini-bar-chart { height: 6px; background: #334155; border-radius: 3px; margin-top: 8px; }
.mb-fill { height: 100%; background: #22C55E; border-radius: 3px; }

/* DOCS SCREEN (AI) */
.docs-split { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; height: 100%; }
.upload-zone {
    background: #1E293B; border-radius: 12px; border: 2px dashed #334155;
    display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
}
.file-preview { text-align: center; }
.file-icon { font-size: 2rem; font-weight: 700; color: #F87171; margin-bottom: 10px; }
.scan-line {
    position: absolute; width: 100%; height: 2px; background: #3B82F6; box-shadow: 0 0 10px #3B82F6;
    top: 0; animation: scan 3s infinite linear;
}
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }

.ai-result-panel { padding: 20px; background: #1E293B; border-radius: 12px; border: 1px solid var(--glass-border); }
.field-group { margin-bottom: 15px; }
.field-group label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 5px; }
.field-group input { width: 100%; background: #0F172A; border: 1px solid #334155; padding: 8px; border-radius: 6px; color: white; }
.tag-ai { display: inline-block; background: rgba(139, 92, 246, 0.2); color: #C084FC; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; }
.btn-confirm { width: 100%; background: #22C55E; color: white; border: none; padding: 10px; border-radius: 6px; margin-top: 10px; cursor: pointer; }

/* --- FEATURES GRID --- */
.features-section { padding: 80px 0; }
.grid-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
.feature-card { padding: 30px; border-radius: 16px; transition: transform 0.3s; }
.feature-card:hover { transform: translateY(-5px); background: #1E293B; }
.icon { font-size: 2.5rem; margin-bottom: 16px; }

/* --- CONTACT --- */
.contact-section { padding: 80px 0; }
.contact-wrapper {
    display: flex; flex-wrap: wrap; padding: 50px; border-radius: 24px; gap: 40px; align-items: center;
}
.contact-text { flex: 1; min-width: 300px; }
.check-list { list-style: none; margin-top: 20px; }
.check-list li { margin-bottom: 10px; padding-left: 24px; position: relative; color: var(--text-muted); }
.check-list li::before { content: "✓"; position: absolute; left: 0; color: var(--primary); }
.contact-form { flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 15px; }
.contact-form input { padding: 14px; background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; color: white; }
.contact-form input:focus { border-color: var(--primary); outline: none; }

/* --- FOOTER --- */
footer { border-top: 1px solid var(--glass-border); padding: 40px 0; color: var(--text-muted); font-size: 0.9rem; }
.footer-row { display: flex; justify-content: space-between; }
.footer-links a { margin-left: 20px; color: var(--text-muted); }

/* MOBILE */
@media(max-width: 768px) {
    h1 { font-size: 2.5rem; }
    .hero { padding-top: 120px; }
    .hero-btns { flex-direction: column; }
    .app-window { height: auto; min-height: 500px; }
    .dashboard-grid { grid-template-columns: 1fr; }
    .wide { grid-column: span 1; }
    .contact-wrapper { padding: 24px; }
    .docs-split { grid-template-columns: 1fr; }
}
