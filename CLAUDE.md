# CV portfolio – Antun Bartolović

Projektni brief za AI agenta (Claude Code) koji gradi osobnu portfolio web-stranicu.
Pročitaj cijeli dokument prije prve linije koda.

## 1. Cilj

Jednostranična (single-page) portfolio stranica za backend inženjera koja u 30 sekundi
recruiteru ili tech leadu odgovori na tri pitanja: tko je Antun, na čemu je radio i kako ga
kontaktirati. Jezik stranice: engleski. Tamni način rada je zadan, svijetli je dostupan preko
prekidača.

Publika: tehnički recruiteri, engineering manageri, potencijalni freelance klijenti.
Glavna akcija: kontakt (email / LinkedIn) i preuzimanje CV-a.

## 2. Obavezno prije UI-ja: skill `frontend-design`

Prije pisanja bilo koje komponente učitaj skill **frontend-design** i slijedi njegov proces:

1. Kratki dizajn-plan (boje, tipografija, layout s ASCII wireframeom, principi).
2. Provjera plana prema ovom briefu – sve što izgleda kao generički predložak se mijenja.
3. Tek onda kod.
4. Samokritika uz screenshotove (desktop + mobitel, tamno + svijetlo).

Polazni smjer je u poglavlju 6; agent ga smije poboljšati, ali ne smije pasti na zadani
"SaaS kartice + gradijent" izgled.

## 3. Tehnologija

| Sloj | Izbor |
|---|---|
| Framework | Next.js (App Router, zadnja stabilna verzija) + TypeScript |
| Stil | Tailwind CSS, dizajn-tokeni kao CSS varijable |
| Animacija | Framer Motion (štedljivo, vidi 6.4) |
| Tema | `next-themes`, zadano tamno |
| Kontakt forma | Formspree ili Resend (bez vlastitog backenda) |
| Deploy | Vercel |

Bez Spring Boot admin panela u prvoj verziji – sadržaj je statičan.

## 4. Sadržaj (izvor istine: CV + GitHub)

Sav tekst živi u jednoj datoteci `src/content/site.ts`. Komponente ne sadrže tvrdo
upisan tekst. Ništa se ne izmišlja: nema brojki, postotaka ni postignuća kojih nema ovdje.
Gdje podatak nedostaje, stoji `TODO(antun)` i sekcija se ne prikazuje dok se ne popuni.

### 4.1 Osobno

- Ime: **Antun Bartolović**
- Titula: **Software Engineer – Java & Spring Boot backend**
- Lokacija: Zagreb, Croatia
- Jezici: Croatian, English, German
- Iskustvo: profesionalno od 2018. (backend Java od travnja 2019.)

### 4.2 Linkovi

| Što | URL |
|---|---|
| LinkedIn | https://www.linkedin.com/in/antunbartolovic |
| GitHub | https://github.com/bartolovica |
| Email | `mailto:antunbart@gmail.com` |
| CV (PDF) | `/Antun-Bartolovic-CV.pdf` (u `public/`) |

Vanjski linkovi: `target="_blank" rel="noopener noreferrer"`, s jasnim `aria-label`.

**Privatnost:** na stranici se NE objavljuju broj telefona, datum rođenja ni poštanska
adresa iz CV-a. PDF za preuzimanje treba biti verzija bez telefona i datuma rođenja
(`TODO(antun)`: pripremiti javnu verziju CV-a).

### 4.3 Iskustvo (vremenska crta, najnovije prvo)

| Period | Uloga | Tvrtka | Tehnologije |
|---|---|---|---|
| Apr 2023 – danas | Software Engineer | Huddle, Zagreb | Java 17, Spring Boot (Reactor/WebFlux), Kafka, PostgreSQL, Redis, GitLab CI/CD, Kubernetes, WebSockets, JavaScript, Snowflake |
| Aug 2021 – Apr 2023 | Software Engineer | GlobalLogic Croatia, Zagreb | Java 11, Spring Boot, Maven, JMS, PostgreSQL, Jenkins, SonarQube, Git (Bitbucket), Elasticsearch |
| Apr 2019 – Aug 2021 | Software Engineer | Maurer Electronics GmbH, Split | Java 8, Spring Boot, Maven, PostgreSQL, Linux, Kafka, Docker, Kubernetes, Helm, Jira, Confluence |
| Sep 2018 – Apr 2019 | Software Engineer | AD Plastik Group, Solin | Angular (2–4), C#, .NET, SQL Server |
| Jun 2017 – Dec 2017 | Junior Developer (part-time, student) | AD Plastik Group, Solin | Angular (2–4) |

CV ne sadrži opise posla ni rezultate. `TODO(antun)`: 2–3 konkretne rečenice po poziciji
(što je sustav radio, tvoja uloga, mjerljiv ishod ako postoji). Do tada se prikazuju samo
uloga, tvrtka, period i tehnologije.

### 4.4 Projekti (GitHub: bartolovica)

Javni repozitoriji vidljivi na profilu (svi Java, bez opisa na GitHubu):

| Repo | URL | Opis |
|---|---|---|
| online-book-store | https://github.com/bartolovica/online-book-store | `TODO(antun)` |
| product-service | https://github.com/bartolovica/product-service | `TODO(antun)` |
| blog | https://github.com/bartolovica/blog | `TODO(antun)` |

Zadatak agenta: pročitati README i kod svakog repozitorija te iz toga napisati opis
(1–2 rečenice), stvarni tech stack i 3 ključne značajke. Ne nagađati iz naziva.
`TODO(antun)`: želiš li dodati i vlastite projekte koji nisu na listi (npr. privatne
repozitorije)? Projekt bez opisa se ne prikazuje.

Preporuka Antunu: dodati opis i README na sva tri repozitorija te ih pinati na profilu –
portfolio linka na njih.

### 4.5 Vještine (grupirano, bez postotaka i traka napretka)

- **Backend:** Java 8–17, Spring Boot, Spring WebFlux / Project Reactor, REST, WebSockets, JMS
- **Messaging i podaci:** Kafka, PostgreSQL, Redis, Elasticsearch, Snowflake, SQL Server
- **DevOps:** Docker, Kubernetes, Helm, GitLab CI/CD, Jenkins, SonarQube, Linux
- **Ostalo:** Maven, Git, JavaScript, Angular, C# / .NET, Scrum

Samo tehnologije iz CV-a. Nove se dodaju isključivo kad ih Antun potvrdi.

### 4.6 Obrazovanje i certifikati

- Master's degree, Computer Science – FESB, Split (2016 – 2018)
- Professional Scrum Master I (PSM I) – siječanj 2019.

### 4.7 Tekst koji treba Antunova potvrda

Prijedlog hero rečenice (smije se koristiti kao radna verzija):

> Backend engineer building reactive, event-driven services with Java, Spring Boot and Kafka.

`TODO(antun)`: About (3–5 rečenica), status "Open to work / freelance" da ili ne.

## 5. Struktura stranice

1. **Navigacija** (sticky): ime lijevo; About, Experience, Projects, Skills, Contact;
   prekidač teme; gumb "Download CV". Aktivna sekcija je označena pri skrolanju.
2. **Hero**: ime, titula, jedna rečenica, gumbi "View projects" i "Get in touch",
   ikone LinkedIn i GitHub.
3. **About**
4. **Experience**: okomita vremenska crta
5. **Projects**: mreža 2–3 stupca, kartica = naziv, opis, stack, značajke, link na GitHub
6. **Skills**
7. **Education & certifications**
8. **Contact**: email, LinkedIn, GitHub, forma (Name, Email, Message)
9. **Footer**: copyright, društveni linkovi

## 6. Dizajn – polazni smjer (razraditi kroz `frontend-design`)

Ideja: Antunov svakodnevni svijet su tokovi događaja (Kafka, Reactor, WebSockets).
Stranica to koristi kao jedini upečatljiv motiv – karijera prikazana kao log događaja –
a sve ostalo je mirno i čitljivo.

### 6.1 Boje

| Token | Tamno | Uloga |
|---|---|---|
| `--bg` | `#0F1624` | pozadina (duboka tinta-plava, ne gotovo crna) |
| `--surface` | `#18223A` | kartice, navigacija |
| `--text` | `#E6EAF2` | glavni tekst |
| `--muted` | `#8E9BB3` | sporedni tekst |
| `--accent` | `#7C8CFF` | linkovi, primarni gumb, aktivna sekcija |
| `--signal` | `#F2B66D` | isključivo "trenutno" stanje (aktualni posao, open to work) |

Svijetla tema: iste uloge, pozadina `#F6F7FB`, tekst `#141A2A`, akcent potamnjen do
kontrasta WCAG AA. Sve boje provjeriti na kontrast (min. 4.5:1 za tekst).

### 6.2 Tipografija

- **Geist** za sve (naslovi i tekst); hijerarhija kroz veličinu i težinu, ne kroz drugi font.
- **JetBrains Mono** samo tamo gdje je sadržaj stvarno kod ili identifikator
  (nazivi repozitorija, element u herou) – ne za sitne oznake.
- Bez oznaka u verzalu iznad naslova, bez jedne obojene riječi u naslovu,
  širina retka do ~70 znakova, lijevo poravnanje.

### 6.3 Layout

```
┌──────────────────────────────────────────────────────┐
│ Antun Bartolović      About Experience ...  ◐  [CV]  │
├──────────────────────────────────────────────────────┤
│ Antun Bartolović                  ┌────────────────┐ │
│ Software Engineer                 │ career.events  │ │
│ Jedna rečenica.                   │ 2023 Huddle  ● │ │
│ [View projects] [Get in touch]    │ 2021 GlobalL.  │ │
│ in  gh                            │ 2019 Maurer    │ │
│                                   └────────────────┘ │
└──────────────────────────────────────────────────────┘
```

Hero desno: mali "topic log" sa stvarnim stavkama karijere koje se jednom ispišu pri
učitavanju. Klik na stavku skrola na tu poziciju u Experience. Na mobitelu ide ispod teksta.
Experience nastavlja isti motiv (godina kao oznaka na crti – ovdje je redoslijed stvaran,
pa je numeriranje opravdano). Projekti i vještine su namjerno jednostavni.

### 6.4 Pokret

Jedan orkestrirani trenutak: ispis loga u herou. Bez fade-in animacije na svakoj sekciji.
Hover i fokus stanja smiju imati kratke prijelaze. `prefers-reduced-motion` gasi sve.

## 7. Kvaliteta (definition of done)

- Mobile-first, ispravno od 360 px do 1440 px+
- Tipkovnica: vidljiv fokus, "Skip to content", ispravan redoslijed naslova
- Lighthouse: Performance, Accessibility, Best Practices, SEO ≥ 95
- SEO: `title`, `description`, Open Graph slika, `robots.txt`, `sitemap.xml`,
  JSON-LD `Person` (ime, titula, `sameAs`: LinkedIn + GitHub)
- Forma: validacija, jasne poruke o grešci, stanje "Message sent", honeypot protiv spama
- `npm run build` i `npm run lint` prolaze bez upozorenja

## 8. Struktura projekta

```
src/
  app/            layout.tsx, page.tsx, globals.css, robots.ts, sitemap.ts
  components/     Nav, Hero, EventLog, About, Experience, Projects,
                  Skills, Education, Contact, Footer, ThemeToggle
  content/        site.ts        ← sav sadržaj
  lib/            useActiveSection.ts
public/           Antun-Bartolovic-CV.pdf, og.png
```

## 9. Redoslijed rada

1. Scaffold projekta + `site.ts` s podacima iz poglavlja 4
2. Pročitati tri GitHub repozitorija i popuniti opise projekata
3. Skill `frontend-design`: plan → provjera → revizija
4. Layout i komponente, zatim stil i tema
5. Kontakt forma, SEO, pristupačnost
6. Screenshot provjera, Lighthouse
7. Git repo `bartolovica/portfolio`, deploy na Vercel, upute u README-u

## 10. Otvorena pitanja za Antuna

- [ ] Opisi posla po pozicijama (4.3)
- [ ] About tekst i hero rečenica (4.7)
- [ ] Koji projekti idu na stranicu osim tri javna repozitorija (4.4)
- [ ] Javna verzija CV-a bez telefona i datuma rođenja (4.2)
- [ ] Fotografija: da ili ne
- [ ] "Open to work / freelance" oznaka: da ili ne
- [ ] Vlastita domena (npr. antunbartolovic.com) ili `*.vercel.app`
