import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${site.name} – ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const rows = site.experience.map((e) => ({
    offset: e.start,
    topic: e.company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    current: e.end === null,
  }));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0F1624",
          color: "#E6EAF2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ fontSize: 26, color: "#8E9BB3" }}>{site.location}</div>
          <div style={{ fontSize: 68, fontWeight: 700, marginTop: 12, letterSpacing: -1.5 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, color: "#8E9BB3", marginTop: 8 }}>{site.title}</div>
          <div style={{ fontSize: 28, marginTop: 40, maxWidth: 620, lineHeight: 1.4 }}>
            {site.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 380,
            borderRadius: 16,
            border: "2px solid #2A3652",
            background: "#18223A",
            padding: 28,
            fontSize: 22,
            lineHeight: 1.8,
            alignSelf: "center",
          }}
        >
          <div style={{ color: "#8E9BB3", fontSize: 18, marginBottom: 10 }}>
            $ tail -f career.events
          </div>
          {rows.map((r) => (
            <div key={r.offset} style={{ display: "flex", gap: 18 }}>
              <span style={{ color: "#8E9BB3" }}>{r.offset}</span>
              <span style={{ color: "#7C8CFF" }}>{r.topic}</span>
              {r.current && <span style={{ color: "#F2B66D", marginLeft: "auto" }}>●</span>}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
