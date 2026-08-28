CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  intent TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'unknown',
  submitted_at TEXT NOT NULL,
  ip TEXT,
  created_at TEXT NOT NULL,
  UNIQUE (email, intent)
);

CREATE INDEX IF NOT EXISTS idx_leads_ip_created_at ON leads (ip, created_at);
