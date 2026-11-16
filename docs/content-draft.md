# Prijedlog teksta za `src/content/site.ts` (radna verzija, treba tvoju potvrdu)

Pravilo iz briefa: ništa se ne izmišlja. Svaka rečenica dolje izvedena je iz tehnologija u CV-u.
Rečenice označene **[?]** su zaključak iz tehnologija, ne činjenica iz CV-a: potvrdi, prepravi ili obriši.
Brojke, postotci i "postignuća" namjerno nisu napisani; dodaj ih sam samo ako ih stvarno imaš.

Nakon što prepraviš tekst, zalijepi snippete u `site.ts` (polja `about`, `experience[].summary`,
`availability`). Sekcije se tada same pojave.

---

## 1. About (3–5 rečenica)

Prijedlog A (neutralan, samo činjenice):

> I am a backend engineer based in Zagreb, working in software since 2018 and on Java since 2019.
> Most of my work has been Spring Boot services that exchange events over Kafka or JMS, store data in
> PostgreSQL and run on Kubernetes. At Huddle that stack is reactive: Spring WebFlux with Redis,
> WebSockets and Snowflake alongside Kafka and PostgreSQL. I hold a master's degree in computer science
> from FESB and the PSM I certificate, and I speak Croatian, English and German.

Prijedlog B (A + jedna osobna rečenica o načinu rada, **[?]** jer nije iz CV-a):

> … run on Kubernetes. **[?]** I like services that are easy to operate: clear APIs, good logging and
> metrics, and CI pipelines that catch problems before production. At Huddle …

Snippet (verzija A):

```ts
about: [
  "I am a backend engineer based in Zagreb, working in software since 2018 and on Java since 2019.",
  "Most of my work has been Spring Boot services that exchange events over Kafka or JMS, store data in PostgreSQL and run on Kubernetes.",
  "At Huddle that stack is reactive: Spring WebFlux with Redis, WebSockets and Snowflake alongside Kafka and PostgreSQL.",
  "I hold a master's degree in computer science from FESB and the PSM I certificate, and I speak Croatian, English and German.",
],
```

## 2. Hero rečenica (jedna)

Trenutno (radna verzija iz briefa):

> Backend engineer building reactive, event-driven services with Java, Spring Boot and Kafka.

Alternative:

1. > Java backend engineer: Spring Boot, Kafka and PostgreSQL services that run on Kubernetes.
2. > I build event-driven backend services with Spring Boot, Kafka and WebFlux.
3. > Backend engineer who turns Kafka streams and WebSocket connections into reliable Spring Boot services. **[?]** (malo slobodnije)

## 3. Iskustvo: `summary` po poziciji (2–3 rečenice)

Što sustavi rade i koja je bila tvoja uloga, CV ne govori. Tamo gdje to piše **[?]**, dopiši jednu
konkretnu rečenicu (domena sustava, tvoj dio) ili obriši.

### Huddle, Zagreb (Apr 2023 – danas)

```ts
summary: [
  "Backend development of reactive Spring Boot (WebFlux) services on Java 17.",
  "Event-driven integration over Kafka, real-time updates to clients over WebSockets, PostgreSQL and Redis for storage and caching, Snowflake for analytical data.", // [?] uloga Redisa i Snowflakea
  "Services deployed to Kubernetes through GitLab CI/CD pipelines.",
  // [?] TODO(antun): jedna rečenica o tome što sustav radi (domena) i tvoj dio.
],
```

### GlobalLogic Croatia, Zagreb (Aug 2021 – Apr 2023)

```ts
summary: [
  "Spring Boot services on Java 11 with JMS messaging and PostgreSQL, with search backed by Elasticsearch.", // [?] uloga Elasticsearcha
  "Jenkins pipelines with SonarQube quality checks; code hosted on Bitbucket.",
  // [?] TODO(antun): klijent/domena projekta (ako smiješ reći) i tvoj dio.
],
```

### Maurer Electronics GmbH, Split (Apr 2019 – Aug 2021)

```ts
summary: [
  "First Java backend role: Spring Boot services on Java 8 with Kafka and PostgreSQL.",
  "Services packaged with Docker and deployed to Kubernetes with Helm charts on Linux.",
  "Scrum team working with Jira and Confluence.",
  // [?] TODO(antun): što je sustav radio.
],
```

### AD Plastik Group, Solin (Sep 2018 – Apr 2019)

```ts
summary: [
  "Full-stack work on business applications: Angular (2–4) front end, C#/.NET back end and SQL Server.", // [?] "business applications"
],
```

### AD Plastik Group, Solin (Jun 2017 – Dec 2017, student)

```ts
summary: [
  "Part-time student role building Angular (2–4) front ends.",
],
```

## 4. Status "Open to work / freelance"

Odluči jedno (ili ostavi `null` i oznaka se ne prikazuje):

```ts
availability: "Open to freelance and contract work",
// ili
availability: "Open to new opportunities",
// ili
availability: null,
```

## 5. Otvoreno (iz briefa, poglavlje 10)

- [ ] Javna verzija CV-a bez telefona i datuma rođenja → `public/Antun-Bartolovic-CV.pdf`, pa `cvUrl: "/Antun-Bartolovic-CV.pdf"`
- [ ] Fotografija: da ili ne (trenutno ne)
- [ ] Dodatni projekti osim tri javna repozitorija
- [ ] Vlastita domena ili ostaje `antunbartolovic.netlify.app`
