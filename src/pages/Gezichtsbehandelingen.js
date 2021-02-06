import React from 'react';
import './Gezichtsbehandelingen.css'
import PriceCard from "../components/PriceCard";

export default function Gezichtsbehandelingen(){
    return(
        <>
        <h1 className='face-treatment-title'>GEZICHTSBEHANDELINGEN</h1>
            <div className='face-treatment-container'>
                <h2 className='face-treatment-text'>Waarom een gezichtsbehandeling?<br/><br/>Een gezichtsbehandeling is bedoeld om uw gezicht grondig te reinigen,
                de conditie van uw huid te verbeteren, om vroegtijdige huidveroudering tegen te gaan en heerlijk te ontspannen. U
                heeft maar één huid, daar moet u zuinig mee omgaan. Uw huid staat dagelijks bloot aan schadelijke invloeden van
                buitenaf. Het is daarom geen overbodige luxe om regelmatig een bezoek te brengen aan de schoonheidsspecialiste.
            </h2>
                <div className='container-pricecards'>
                    <PriceCard
                        title= 'WENKBRAUWEN VERVEN'
                        price= '€6,50'
                    />
                    <PriceCard
                        title= 'EPILEREN'
                        price= '€8'
                    />
                    <PriceCard
                        title= 'WIMPERS VERVEN'
                        price= '€8'
                    />
                    <PriceCard
                        title= 'WIMPERS EN WENKBRAUWEN VERVEN'
                        price= '€13,50'
                    />
                    <PriceCard
                        title= 'HENNA BROWS'
                        price= 'VANAF €20'
                    />
                    <PriceCard
                        title= 'BASIS'
                        price= '€49,50'
                        description=
                        <ul>
                        <li>Reiniging</li>
                        <li>Peeling</li>
                        <li>Vapozone</li>
                        <li>Oneffenheden verwijderen</li>
                        <li>Epileren</li>
                        <li>Masker</li>
                        <li>Dag/nachtverzorging</li>
                        </ul>
                        duration='Behandelingsduur: circa 60 min.'
                    />
                <PriceCard
                    title= 'ACNEBEHANDELING'
                    price= '€55'
                    description='Acné is een van de meest voorkomende huidaandoeningen. Bovendien bestaan er verschillende vormen van acné.
                    Acné kan langdurig en hardnekkig aanhouden en zal op den duur littekens doen ontstaan. '
                    duration='Van lichte tot zware acné biedt deze kuurbehandeling uitkomst.'
                />
                <PriceCard
                    title= 'COMPLETE'
                    price= '€57'
                    description=
                        <ul>
                            <li>Uitgebreide reiniging</li>
                            <li>Peeling</li>
                            <li>Vapozone</li>
                            <li>Oneffenheden verwijderen</li>
                            <li>Epileren</li>
                            <li>Cupping gezicht, bij te boeken*</li>
                            <li>Massage nek-schouder-decollete-gelaat</li>
                            <li>Masker</li>
                            <li>Serum</li>
                            <li>Dag/nachtverzorging</li>
                        </ul>
                    duration='Behandelingsduur: circa 90 min.'
                />
                <PriceCard
                    title= 'COMPLETE- ALGINAATMASKER'
                    price= '€62'
                    description=
                        <ul>
                    <li>Uitgebreide reiniging</li>
                    <li>Peeling</li>
                    <li>Vapozone</li>
                    <li>Oneffenheden verwijderen</li>
                    <li>Epileren</li>
                    <li>Celtherapie- masker</li>
                    <li>Massage nek-schouder-decollete-gelaat</li>
                    <li>Serum</li>
                    <li>Dag/nachtverzorging</li>
                </ul>
                    extra='De kracht van deze maskers zit in het feit dat ze het hele gezicht bedekken.
                    Doordat de maskers vloeibaar aangebracht worden, kun je ook de gevoelige en moeilijk te bereiken zones
                    rondom de ogen en mond behandelen, iets dat met andere maskers niet mogelijk is. De algen in de maskers
                    zijn 10 keer rijker aan oligo-elementen dan vergelijkbare plantaardige stoffen en de bruine algen bevatten
                    een grote hoeveelheid polysachariden die het vermogen hebben vocht te absorberen'

                    duration='Behandelingsduur: circa 90 min.'
                />
                <PriceCard
                    title= 'COMPLETE- COLLAGEEN VLIESMASKER'
                    price= '€62'
                    description=
                        <ul>
                    <li>Uitgebreide reiniging</li>
                    <li>Peeling</li>
                    <li>Vapozone</li>
                    <li>Oneffenheden verwijderen</li>
                    <li>Epileren</li>
                    <li>Cupping gezicht, bij te boeken*</li>
                    <li>Massage nek-schouder-decollete-gelaat</li>
                    <li>Masker</li>
                    <li>Serum</li>
                    <li>Dag/nachtverzorging</li>
                </ul>
                    extra='Dit masker heeft een sterk revitaliserende en hydraterende werking.
                    Het masker bevat een hoog gehalte werkstoffen die de huid ophelderen, kalmeren en laten stralen. Een enorme boost voor het hele gelaat, de huid wordt overgelaten gevoed, soepel en fris.
                    Het masker wordt voorafgaand de massage aangebracht waardoor ik tijdens de massage de werkstoffen goed in de huid kan masseren.'
                    duration='Behandelingsduur: circa 90 min.'
                />
                <PriceCard
                    title= 'COMPLETE- CELTHERAPIE'
                    price= '€57'
                    description=
                        <ul>
                    <li>Uitgebreide reiniging</li>
                    <li>Peeling</li>
                    <li>Vapozone</li>
                    <li>Oneffenheden verwijderen</li>
                    <li>Epileren</li>
                    <li>Celtherapie-masker</li>
                    <li>Massage nek-schouder-decollete-gelaat</li>
                    <li>Serum</li>
                    <li>Dag/nachtverzorging</li>
                </ul>
                    extra='Deze celtherapie is geschikt voor iedereen boven de 35 jaar die een flinke oppepper voor de huid nodig heeft.
                    De bedoeling is dat de huidcellen in een snel tempo in grote aantallen opnieuw in de diepste huidlaag van de opperhuid worden aangemaakt. Dit door middel van het rejuvenatingmask, die peelend werkt, desinfecteert, doorbloeding activeert, onzuiverheden uit de huid trekt en zorgt voor een snelle celvernieuwing.
                    De gehele structuur van de huid veranderd hierdoor. De huid wordt gladder, poriën worden fijner, de teint wordt frisser en de doorbloeding wordt beter.
                    Hierdoor vervagen kleine vlekjes en rimpeltjes.'
                    duration='Behandelingsduur: circa 90 min.'
                />
                </div>
            </div>
            </>
            );
};