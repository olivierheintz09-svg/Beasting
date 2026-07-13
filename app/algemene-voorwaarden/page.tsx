import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden · Beasting',
  description: 'De algemene voorwaarden van Beasting — onderdeel van Concept Partners.',
}

const DEFINITIONS: { term: string; def: string }[] = [
  {
    term: 'Wij, ons',
    def: 'Concept Partners: De eenmanszaak die de Beasting organiseert. In het handelsregister van de Kamer van Koophandel kun je ons vinden onder nummer 34142291.',
  },
  {
    term: 'Jij, jou, je',
    def: 'Dat ben jij! Individueel of bedrijf. Degene waarmee wij een Overeenkomst sluiten.',
  },
  {
    term: 'Overeenkomst',
    def: 'Dat wat wij mondeling of schriftelijk met elkaar overeenkomen. Hieronder valt ook alles wat aan deze overeenkomst voorafgaat én de uitvoering ervan.',
  },
  {
    term: 'Beasting',
    def: 'Beasting, onderdeel van Concept Partners.',
  },
]

type Sub = { num: string; text: string; bullets?: string[] }
type Section = { n: number; title: string; items: Sub[] }

const SECTIONS: Section[] = [
  {
    n: 1,
    title: 'WANNEER GELDEN DEZE VOORWAARDEN?',
    items: [
      { num: '1.1', text: 'Deze algemene voorwaarden zijn van toepassing op alles wat wij met jou overeenkomen.' },
      { num: '1.2', text: 'Afwijkingen of aanvullingen op deze voorwaarden kunnen natuurlijk altijd, maar die zijn alleen van toepassing als wij deze schriftelijk aangepast hebben.' },
      { num: '1.3', text: 'Als één of meerdere bepalingen van deze algemene voorwaarden ooit geheel of gedeeltelijk nietig zijn of vernietigd worden, dan blijven de overige bepalingen van deze algemene voorwaarden volledig van toepassing. Wij zullen dan samen met jou een nieuwe bepaling overeenkomen, zonder het doel en de strekking van de ongeldige of vernietigde bepaling uit het oog te verliezen.' },
      { num: '1.4', text: 'Als wij van jou niet steeds een strikte naleving van deze algemene voorwaarden verlangen, dan betekent dat niet dat de bepalingen van deze algemene voorwaarden niet langer van toepassing zijn, of dat wij het recht verliezen om in andere gevallen wel de strikte naleving van de bepalingen van deze voorwaarden te verlangen.' },
    ],
  },
  {
    n: 2,
    title: 'AANBIEDINGEN',
    items: [
      { num: '2.1', text: 'Onze aanbiedingen gelden alleen voor de door ons aangegeven duur. Dit is altijd ter uitsluitende beoordeling aan ons. De voorwaarden van onze aanbiedingen kunnen, wanneer nodig, ook wijzigen. Je kunt aan onze aanbiedingen dus geen rechten ontlenen.' },
      { num: '2.2', text: 'Wij kunnen niet aan een aanbieding worden gehouden als deze een kennelijke vergissing of verschrijving bevat.' },
      { num: '2.3', text: 'Onze aanbiedingen gelden niet automatisch voor toekomstige Overeenkomsten.' },
      { num: '2.4', text: 'Als wij in een aanbieding een samengestelde prijsopgave opnemen, dan kunnen wij niet verplicht worden om een gedeelte van de Overeenkomst te verrichten tegen een overeenkomstig gedeelte van de samengestelde prijs.' },
    ],
  },
  {
    n: 3,
    title: 'OVEREENKOMST',
    items: [
      { num: '3.1', text: 'Een Overeenkomst komt alleen tot stand (I) als jij alle onderdelen van onze offerte ongewijzigd accepteert; of (II) als wij de totstandkoming van de Overeenkomst schriftelijk aan jou bevestigen; of (III) als wij al geheel of gedeeltelijk uitvoering hebben gegeven aan de Overeenkomst.' },
      { num: '3.2', text: 'Afspraken, toezeggingen of wijzigingen in de Overeenkomst die door ons ná het aangaan van de Overeenkomst zijn gedaan, zijn alleen bindend als deze schriftelijk door ons zijn bevestigd, of als wij al begonnen zijn met de uitvoering daarvan.' },
    ],
  },
  {
    n: 4,
    title: 'WAT WE VAN JOU VERWACHTEN',
    items: [
      { num: '4.1', text: 'Jij zorgt dat alle benodigde gegevens, waarvan wij hebben aangegeven dat deze noodzakelijk zijn voor het correct en tijdig uitvoeren van de overeengekomen werkzaamheden, of waarvan jij behoort te begrijpen dat deze noodzakelijk zijn voor de correcte uitvoering van onze werkzaamheden, op tijd en in de juiste vorm, aan ons worden aangeleverd.' },
      { num: '4.2', text: 'Jij bent ervoor verantwoordelijk dat alle aan ons verstrekte gegevens compleet, betrouwbaar en juist zijn. Ook als deze gegevens van of via derden zijn verkregen.' },
      { num: '4.3', text: 'Je en/of de deelnemers voldoen aan de fysieke en mentale eisen voor deelname aan Beasting. Mocht blijken dat jouw fysieke of mentale gesteldheid in onze beleving tekortkomt dan behouden wij het recht voor om je deelname (per direct) te stoppen. Je hebt dan geen recht op restitutie van de betaalde gelden.' },
      { num: '4.4', text: 'Jij zult alle redelijke instructies van ons en onze trainers opvolgen en andere deelnemers niet hinderen.' },
    ],
  },
  {
    n: 5,
    title: 'UITVOERING VAN DE OVEREENKOMST',
    items: [
      { num: '5.1', text: 'Alle werkzaamheden die door ons worden verricht in de uitvoering van de Overeenkomst worden verricht naar beste inzicht en kunnen. Zoals ze dat juridisch mooi verwoorden: gelijk aan de eisen van goed vakmanschap en de op dat moment bekende stand van de wetenschap. Onze verplichting betreft een inspanningsverplichting. Wij bieden dus geen garantie voor enig resultaat of verwachtingen.' },
      { num: '5.2', text: 'Wij snappen heel goed dat je hoopt op lekker weer tijdens de activiteit. Helaas hebben wij het weer niet in de hand en kan het dus voorkomen dat het regent of stormt. Wij bieden geen garantie op bepaalde weersomstandigheden. In principe vinden de geplande activiteiten altijd doorgang. Als er sprake is van extreme weeromstandigheden kan dit wel anders zijn.' },
      { num: '5.3', text: 'Wij bepalen de wijze waarop de Overeenkomst wordt uitgevoerd en welke personen hierbij betrokken zijn. Heb jij speciale wensen? Dan proberen wij hiermee rekening te houden. Mocht het nodig zijn dan kunnen wij personen die betrokken zijn bij de uitvoering van de Overeenkomst vervangen.' },
      { num: '5.4', text: 'Als jouw veiligheid onvoldoende gewaarborgd is tijdens de activiteit, hebben wij het recht om af te wijken van de gesloten overeenkomst en/of gemaakte afspraken. Onze instructeurs met medische achtergrond hebben hierin het laatste woord. Je deelname is op eigen risico. Bij uitval tijdens de activiteit worden de door jou gemaakte kosten niet vergoed.' },
      { num: '5.5', text: 'Wij zorgen voor al het trainingsmateriaal. Je moet zelf nog zorgen voor geschikte kleding en schoenen. Je krijgt nog een lijst van spullen wat je mee dient te nemen.' },
    ],
  },
  {
    n: 6,
    title: 'BETALING EN INCASSOKOSTEN',
    items: [
      { num: '6.1', text: 'Een deel van onze vergoeding kan bij vooruitbetaling verschuldigd zijn. Je kunt pas deelnemen na ontvangst van deze betaling.' },
      { num: '6.2', text: 'Betaling vindt plaats via factuur.' },
      { num: '6.3', text: 'Betalingstermijn is 14 dagen na factuurdatum.' },
      { num: '6.4', text: 'In geval jij in verzuim bent met de volledige betaling van de door ons aan jou in rekening gebrachte bedragen binnen de betalingstermijn, dan ben jij aan ons de buitengerechtelijke (incasso)kosten verschuldigd.' },
    ],
  },
  {
    n: 7,
    title: 'ALS WIJ DE OVEREENKOMST WILLEN UITSTELLEN OF BEËINDIGEN',
    items: [
      { num: '7.1', text: 'Wij kunnen de nakoming van onze verplichtingen opschorten of de Overeenkomst ontbinden zonder dat wij jou schadeloos moeten stellen, kosten of een schadevergoeding verschuldigd zijn.' },
      { num: '7.2', text: 'Wij mogen een Overeenkomst, of een wijziging daarin, altijd weigeren of beëindigen als de Overeenkomst in strijd is met wet- of regelgeving, of als de Overeenkomst of de wijzing daarin naar onze mening schade kan toebrengen aan onze goede naam of reputatie.' },
    ],
  },
  {
    n: 8,
    title: 'ALS JIJ DE OVEREENKOMST WIL ANNULEREN',
    items: [
      {
        num: '8.1',
        text: 'Wil je de Overeenkomst annuleren? Dan mogen wij de volgende kosten aan jou in rekening brengen:',
        bullets: [
          'Bij annulering méér dan 31 dagen vóór de uitvoering van de Overeenkomst: 50% van de totale overeengekomen kosten;',
          'Bij annulering korter dan 31 dagen vóór de uitvoering van de Overeenkomst: 75% van de totale overeengekomen kosten.',
          'Bij annulering korter dan 14 dagen vóór de uitvoering van de Overeenkomst: 100% van de totale overeengekomen kosten.',
        ],
      },
      { num: '8.2', text: 'Als annuleringsdatum geldt de datum en het tijdstip waarop wij jouw schriftelijke annulering hebben ontvangen.' },
    ],
  },
  {
    n: 9,
    title: 'OVERMACHT',
    items: [
      { num: '9.1', text: 'In het geval van overmacht kunnen wij de uitvoering van de Overeenkomst uitstellen. Dit kun je terugvinden in artikel 6:75 BW.' },
      { num: '9.2', text: 'Naast de informatie uit bovenstaand artikel en de rechtspraak verstaan we onder overmacht: alle oorzaken van buitenaf, voorzien of onvoorzien, waarop wij geen invloed kunnen uitoefenen, maar waardoor wij niet in staat zijn om onze verplichtingen na te komen. Hieronder ook begrepen ernstige weersomstandigheden (zoals hevige onweer, sneeuwval, ijzel, storm of extreme warmte), de situatie dat wij diensten te laat geleverd krijgen.' },
      { num: '9.3', text: 'Wij mogen onze verplichtingen uitstellen tijdens de periode van overmacht en kunnen activiteiten niet door laten gaan.' },
      { num: '9.4', text: 'Als de periode van overmacht (bijvoorbeeld covid 19) langer dan drie maanden voortduurt, dan mogen zowel jij als wij de Overeenkomst ontbinden, je ontvangt dan het volledige bedrag terug.' },
      { num: '9.4', text: 'Als wij al een deel van onze verplichtingen zijn nagekomen wanneer de overmacht intreedt, dan mogen wij deze alvast aan jou in rekening brengen. Je bent dan verplicht deze factuur te voldoen alsof het een aparte Overeenkomst is.' },
    ],
  },
  {
    n: 10,
    title: 'AANSPRAKELIJKHEID',
    items: [
      { num: '10.1', text: 'Onze aansprakelijkheid is altijd beperkt tot hetgeen in deze algemene voorwaarden is geregeld.' },
      { num: '10.2', text: 'Deelname aan activiteiten komt voor jouw risico. Wij zijn niet aansprakelijk voor schade, van welke aard dan ook, die jij lijdt of mogelijk zal lijden als gevolg van de activiteit(en). Wij zijn ook niet aansprakelijk voor verlies, diefstal of schade aan eigendommen.' },
      { num: '10.3', text: 'Voor deelname is een goede gezondheid in zowel psychische als fysieke zin vereist. Waar nodig vragen wij aan jou een verklaring dat je in goede gezondheid verkeert. Dit laat overigens onverlet dat het verkeren in een goede gezondheid in zowel psychische als fysieke zin voor jouw eigen rekening en risico blijft komen. Wij aanvaarden hiervoor geen enkele aansprakelijkheid, ook niet als wij een dergelijke verklaring hebben opgevraagd.' },
      { num: '10.4', text: 'Onze aansprakelijkheid is in ieder geval steeds beperkt tot maximaal het bedrag dat onze verzekering uitkeert, of als er geen uitkering van de verzekering plaatsvindt, tot maximaal het aan jou gefactureerde bedrag voor de betreffende activiteit waarop de aansprakelijkheid betrekking heeft.' },
      { num: '10.5', text: 'Als aansprakelijkheid wordt aangenomen, dan geldt dat alleen voor directe schade. Directe schade bestaat uit (I) de redelijke kosten om de oorzaak en omvang van de schade vast te stellen; (II) indien van toepassing, de redelijke kosten die gemaakt zijn om onze gebrekkige prestatie op te lossen, voor zover deze aan ons toegerekend kunnen worden; en (III) de redelijke kosten die gemaakt zijn om de schade te voorkomen of beperken. Je moet dan wel kunnen aantonen dat deze kosten ook daadwerkelijk hebben geleid tot beperking van de directe schade.' },
      { num: '10.6', text: 'Wij zijn nooit aansprakelijk voor indirecte schade, waaronder gevolgschade.' },
      { num: '10.7', text: 'De beperkingen van onze aansprakelijkheid zijn niet van toepassing als wij de schade hebben veroorzaakt met opzet of grove schuld.' },
    ],
  },
  {
    n: 11,
    title: 'VRIJWARING',
    items: [
      { num: '11.1', text: 'Wij, en de mensen die wij inschakelen, worden door jou gevrijwaard voor eventuele aansprakelijkheid ten opzichte van derden die schade lijden door de uitvoering van onze werkzaamheden en/of tijdens activiteiten.' },
      { num: '11.2', text: 'Als er schade ontstaat aan onze zaken, of als zaken zoekraken, dan worden de reparatiekosten of de vervangingskosten door ons aan jou in rekening gebracht. Dit doen we natuurlijk alleen maar in het geval dat de schade of het zoekraken aan jou kan worden toegerekend.' },
    ],
  },
  {
    n: 12,
    title: 'PORTRETRECHT / BEELDMATERIAAL',
    items: [
      { num: '12.1', text: 'Tijdens de uitvoering van de Overeenkomst kunnen wij foto’s en videomateriaal maken om te gebruiken op onze website of social media. Mocht je, om welke reden dan ook, niet willen dat deze foto’s/videomateriaal gemaakt of gedeeld worden, laat het ons dan vooraf schriftelijk weten.' },
      { num: '12.2', text: 'Ook hebben wij het recht om beeldmateriaal dat jij hebt gemaakt tijdens activiteiten te gebruiken, zonder dat we daarbij jouw naam hoeven te vermelden.' },
    ],
  },
  {
    n: 13,
    title: 'KLACHTEN',
    items: [
      { num: '13.1', text: 'Wij hechten veel waarde aan een succesvolle uitvoering van de Overeenkomst. Als jij toch een tekortkoming of verbeterpunt constateert, dan dien je dit uiterlijk binnen 3 dagen na deze activiteit het aan ons te melden. Aan een ingezonden klacht of verbeterpunt kunnen geen rechten worden ontleend. Als wij het nodig vinden, dan kunnen wij de klacht in kwestie (laten) onderzoeken. Jij bent verplicht om ons hiertoe in de gelegenheid te stellen.' },
      { num: '13.2', text: 'Als het (eind)resultaat afwijkt van jouw verwachting, dan is dat geen reden voor afkeuring, korting, schadevergoeding of ontbinding van de Overeenkomst.' },
      { num: '13.3', text: 'Het indienen van klachten ontslaat jou niet van de afname- en betalingsverplichting.' },
      { num: '13.4', text: 'Als we hebben vastgesteld dat de klacht tijdig is ingediend én gegrond is, dan zullen wij binnen een redelijke termijn na jouw schriftelijke kennisgeving, hiervoor een (door ons passend geachte) oplossing bieden. Bij het te laat zijn met het melden van een gebrek of klacht, heb je geen recht meer op herstel, vervanging of (andere) schadeloosstelling.' },
      { num: '13.5', text: 'Wij hanteren voor alle overige gevallen een verjaringstermijn van één jaar.' },
    ],
  },
  {
    n: 14,
    title: 'BIJ PROBLEMEN…',
    items: [
      { num: '14.1', text: 'Het Nederlands recht is van toepassing.' },
      { num: '14.2', text: 'Geschillen zullen worden onderworpen aan de bevoegde rechter.' },
      { num: '14.3', text: 'Maar voordat we naar die rechter stappen hebben er uiteraard eerst zelf alles aan gedaan om er samen uit te komen.' },
    ],
  },
]

const bodyStyle: React.CSSProperties = {
  font: 'var(--type-body)',
  lineHeight: 1.7,
  color: 'var(--brand-bone-dim)',
  margin: '0 0 16px',
}

const numStyle: React.CSSProperties = {
  color: 'var(--brand-bone)',
  marginRight: 8,
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="page-enter bg-ink" style={{ padding: '120px 0' }}>
      <div className="wrap-tight" style={{ maxWidth: 720 }}>

        {/* Header block */}
        <div className="kicker" style={{ marginBottom: 16 }}>LEGAL · CONCEPT PARTNERS</div>
        <h1 style={{
          font: '700 clamp(40px, 6vw, 72px)/0.95 var(--font-sans)',
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: 'var(--brand-bone)',
          margin: '0 0 24px',
        }}>ALGEMENE VOORWAARDEN</h1>
        <p style={{ font: 'var(--type-body-lg)', lineHeight: 1.6, color: 'var(--brand-bone-dim)', margin: 0 }}>
          In deze algemene voorwaarden hebben we een aantal belangrijke zaken opgenomen. Wil je iets weten over jouw verplichtingen, de wijze waarop wij onze werkzaamheden uitvoeren of de voorwaarden van betaling? Dat vind je allemaal hier terug.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--line-hairline)', margin: '48px 0' }} />

        {/* Definitions */}
        <h2 style={{
          font: '700 24px/1.2 var(--font-sans)',
          textTransform: 'uppercase',
          color: 'var(--brand-bone)',
          margin: '0 0 24px',
          letterSpacing: '0.01em',
        }}>WAT BEDOELEN WE MET…</h2>
        <dl style={{ margin: 0 }}>
          {DEFINITIONS.map(d => (
            <div key={d.term} style={{ marginBottom: 16 }}>
              <dt style={{
                font: '700 13px/1.4 var(--font-sans)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--track-wide)',
                color: 'var(--brand-bone)',
                marginBottom: 4,
              }}>{d.term}</dt>
              <dd style={{ ...bodyStyle, margin: 0 }}>{d.def}</dd>
            </div>
          ))}
        </dl>

        {/* Numbered sections */}
        {SECTIONS.map(section => (
          <section key={section.n}>
            <h2 style={{
              font: '700 24px/1.25 var(--font-sans)',
              textTransform: 'uppercase',
              color: 'var(--brand-bone)',
              margin: '48px 0 16px',
              letterSpacing: '0.01em',
            }}>{section.n}. {section.title}</h2>
            {section.items.map((item, i) => (
              <div key={`${section.n}-${i}`}>
                <p style={bodyStyle}>
                  <strong style={numStyle}>{item.num}</strong>{item.text}
                </p>
                {item.bullets && (
                  <ul style={{ margin: '0 0 16px', paddingLeft: 24, listStyle: 'none' }}>
                    {item.bullets.map((b, bi) => (
                      <li key={bi} style={{ ...bodyStyle, margin: '0 0 8px', position: 'relative' }}>
                        <span style={{ ...numStyle, position: 'absolute', left: -20 }}>•</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}

      </div>
    </div>
  )
}
