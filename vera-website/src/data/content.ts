export type Lang = 'cs' | 'de';
export type Work = {id:string; image:string; cs:string; de:string; dimensions:string; collection:'prague'|'still';};
export const works: Work[] = [
 {id:'01',image:'/images/prague-1.jpg',cs:'Praha s kyticí',de:'Prag in Blüten',dimensions:'33 × 30 cm',collection:'prague'},
 {id:'02',image:'/images/prague-2.jpg',cs:'Návštěva Prahy',de:'Begegnung mit Prag',dimensions:'90 × 70 cm',collection:'prague'},
 {id:'03',image:'/images/prague-3.jpg',cs:'Obrázky Prahy',de:'Prager Impressionen',dimensions:'55 × 45 cm',collection:'prague'},
 {id:'04',image:'/images/prague-4.jpg',cs:'Jarní Praha',de:'Frühling in Prag',dimensions:'70 × 60 cm',collection:'prague'},
 {id:'05',image:'/images/prague-5.jpg',cs:'Pražské mosty',de:'Die Brücken von Prag',dimensions:'50 × 45 cm',collection:'prague'},
 {id:'06',image:'/images/prague-6.jpg',cs:'Královský letohrádek',de:'Das Königliche Belvedere',dimensions:'100 × 70 cm',collection:'prague'},
 {id:'07',image:'/images/prague-7.jpg',cs:'Láska mezi věžemi',de:'Liebe im Turmmeer',dimensions:'90 × 70 cm',collection:'prague'},
 {id:'08',image:'/images/work-000.jpg',cs:'Spěchající čas',de:'Die rinnende Zeit',dimensions:'80 × 70 cm',collection:'still'},
 {id:'09',image:'/images/work-001.jpg',cs:'Letní pohoštění',de:'Sommerliche Tafel',dimensions:'50 × 43 cm',collection:'still'},
 {id:'10',image:'/images/work-002.jpg',cs:'Pohyblivé představy',de:'Fließende Bilder',dimensions:'80 × 70 cm',collection:'still'},
 {id:'11',image:'/images/work-003.jpg',cs:'Prchavé chvíle',de:'Flüchtige Augenblicke',dimensions:'70 × 60 cm',collection:'still'},
 {id:'12',image:'/images/work-004.jpg',cs:'Letní okno',de:'Blick ins Sommerfenster',dimensions:'56 × 45 cm',collection:'still'},
 {id:'13',image:'/images/work-005.jpg',cs:'Návštěva beránků',de:'Als die Lämmer zu Gast waren',dimensions:'90 × 70 cm',collection:'still'},
];
export const copy = {
 cs:{home:'Úvod',works:'Obrazy',about:'O Věře',contact:'Kontakt',eyebrow:'Malířka · Praha',heroSub:'Obrazy mezi vzpomínkou a představou.',explore:'Prohlédnout tvorbu',featured:'Vybrané dílo',collection:'Kolekce',prague:'Praha',still:'Zátiší a květiny',pragueSub:'Věže · mosty · město',stillSub:'Květiny · zátiší · sny',allWorks:'Všechna díla',index:'Index děl',work:'Dílo',aboutTitle:'Život a tvorba',aboutText:'Věra Krupičková je česká malířka, jejíž tvorba zachycuje město, květiny a prchavé okamžiky. V obrazech se prolínají vzpomínky, barvy a osobní pohled na svět.',aboutNote:'Podrobnější životopis a fotografie autorky doplníme po ověření.',contactTitle:'Napište nám.',contactText:'Máte zájem o některý z obrazů nebo se chcete dozvědět více o tvorbě Věry Krupičkové? Ozvěte se nám.',name:'Jméno',email:'E-mail',message:'Zpráva',send:'Odeslat zprávu',thanks:'Děkujeme, zpráva byla odeslána.',back:'Zpět na díla',next:'Další',previous:'Předchozí',close:'Zavřít',copyright:'Všechna práva vyhrazena.',skip:'Přejít na obsah',number:'13 děl · 2 kolekce'},
 de:{home:'Start',works:'Werke',about:'Über Věra',contact:'Kontakt',eyebrow:'Malerin · Prag',heroSub:'Bilder zwischen Erinnerung und Vorstellung.',explore:'Werke entdecken',featured:'Ausgewähltes Werk',collection:'Kollektionen',prague:'Prag',still:'Stillleben & Blumen',pragueSub:'Türme · Brücken · Stadt',stillSub:'Blumen · Stillleben · Träume',allWorks:'Alle Werke',index:'Werkverzeichnis',work:'Werk',aboutTitle:'Leben und Werk',aboutText:'Věra Krupičková ist eine tschechische Malerin. Ihre Werke zeigen die Stadt, Blumen und flüchtige Augenblicke. Erinnerungen, Farben und ein ganz persönlicher Blick auf die Welt verbinden sich in ihrer Malerei.',aboutNote:'Eine ausführlichere Biografie und ein Porträt folgen nach Abstimmung.',contactTitle:'Schreiben Sie uns.',contactText:'Sie interessieren sich für ein Gemälde oder möchten mehr über das Werk von Věra Krupičková erfahren? Wir freuen uns auf Ihre Nachricht.',name:'Name',email:'E-Mail',message:'Nachricht',send:'Nachricht senden',thanks:'Vielen Dank, Ihre Nachricht wurde gesendet.',back:'Zurück zu den Werken',next:'Weiter',previous:'Zurück',close:'Schließen',copyright:'Alle Rechte vorbehalten.',skip:'Zum Inhalt springen',number:'13 Werke · 2 Kollektionen'}
} as const;
