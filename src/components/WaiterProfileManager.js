import React, { useState, useEffect, useRef } from "react";
import "./WaiterProfileManager.css";

const WAITER_PROFILES_STORAGE_KEY = "waiterProfiles";
const TABLES_STORAGE_KEY = "tablesByProfile";
const malePredictions = [
	"Wiedziałam, że będziesz tym, który pierwszy odważy się zrobić krok, na który inni tylko patrzą. Przed Tobą decyzja, która wzmocni Twoją pozycję i pokaże, że masz charakter lidera.",
	"Miałam sen, że stoisz na czele ważnej sprawy i wszyscy liczą się z Twoim zdaniem. To znak, że nadchodzi moment, w którym zabłyśniesz kompetencją.",
	"Powiem Ci po tajemnicy — ktoś już obserwuje Twoje działania i widzi w Tobie potencjał do czegoś większego.",
	"Widzę, że przyszedłeś na ten etap życia gotowy na przełom. Twoja determinacja otworzy drzwi, które do tej pory były zamknięte.",
	"Czuję wyraźnie, że będziesz musiał zaufać swojemu instynktowi — i dobrze na tym wyjdziesz.",
	"Miałam wizję, w której odbierasz gratulacje za coś, nad czym długo pracowałeś. To bliżej, niż myślisz.",
	"Wiedziałam, że nie zatrzymasz się w pół drogi. Twoja konsekwencja zacznie przynosić konkretne efekty.",
	"Widzę przy Tobie energię odwagi — podejmiesz decyzję, która odmieni Twoją sytuację zawodową.",
	"Powiem Ci coś, czego nie mówię każdemu — masz przed sobą rozmowę, która wiele ustawi na Twoich warunkach.",
	"Miałam sen, że podpisujesz ważny dokument lub finalizujesz istotną sprawę. To symbol zamknięcia starego etapu.",
	"Wiedziałam, że będziesz gotów zawalczyć o swoje. I tym razem nikt Cię nie zlekceważy.",
	"Widzę, że ktoś z Twojego otoczenia zacznie traktować Cię z większym szacunkiem po Twoim stanowczym kroku.",
	"Czuję, że odważysz się powiedzieć to, co długo trzymałeś w sobie — a to oczyści atmosferę.",
	"Powiem Ci w sekrecie — Twoja cierpliwość właśnie zaczyna się opłacać.",
	"Miałam wizję, że inwestujesz w siebie i szybko widzisz pierwsze rezultaty.",
	"Wiedziałam, że będziesz tym, który wytrzyma presję. Sytuacja, która nadejdzie, pokaże Twoją siłę psychiczną.",
	"Widzę przy Tobie symbol wzrostu finansowego — rozsądna decyzja przyniesie stabilność.",
	"Czuję, że przyszedłeś przygotowany na większą odpowiedzialność. Ktoś Ci ją powierzy.",
	"Powiem Ci coś ważnego — Twoje nazwisko padnie w pozytywnym kontekście tam, gdzie się tego nie spodziewasz.",
	"Miałam sen, że odbierasz telefon z dobrą wiadomością dotyczącą przyszłości.",
	"Wiedziałam, że będziesz gotów zakończyć to, co Ci nie służy. To uwolni ogrom energii.",
	"Widzę, że zrobisz ruch, który przyspieszy Twoje plany.",
	"Czuję przy Tobie energię zwycięstwa w sprawie, która długo była nierozstrzygnięta.",
	"Powiem Ci w tajemnicy — ktoś zacznie widzieć w Tobie partnera do poważnej współpracy.",
	"Miałam wizję Twojego spokoju w sytuacji, w której inni tracą głowę. To Twoja przewaga.",
	"Wiedziałam, że będziesz miał odwagę zmienić kierunek, gdy uznasz to za słuszne.",
	"Widzę przed Tobą szansę na rozwój, jeśli tylko nie zawahasz się jej chwycić.",
	"Czuję, że rozmowa, którą przeprowadzisz, odmieni czyjeś nastawienie do Ciebie.",
	"Powiem Ci coś jeszcze — Twoja ambicja zacznie przynosić realne rezultaty.",
	"Miałam sen, że świętujesz małe zwycięstwo, które okaże się początkiem większego sukcesu.",
	"Wiedziałam, że nie poddasz się przy pierwszej przeszkodzie — właśnie to Cię wyróżnia.",
	"Widzę przy Tobie nową możliwość finansową, która wymaga odwagi.",
	"Czuję, że zyskasz wsparcie osoby, której doświadczenie okaże się kluczowe.",
	"Powiem Ci po cichu — Twoje działania zrobią większe wrażenie, niż sądzisz.",
	"Miałam wizję, w której ktoś dziękuje Ci za pomoc i lojalność.",
	"Wiedziałam, że będziesz konsekwentny — a konsekwencja to teraz Twoja największa broń.",
	"Widzę, że zamkniesz pewien rozdział z poczuciem zwycięstwa.",
	"Czuję przy Tobie energię nowego początku, który sam zainicjujesz.",
	"Powiem Ci szczerze — masz przed sobą moment, w którym pokażesz klasę.",
	"Miałam sen, że stoisz pewnie, wiedząc, że to Ty kontrolujesz sytuację.",
	"Wiedziałam, że będziesz gotów wybaczyć sobie dawny błąd i ruszyć dalej silniejszy.",
	"Widzę przed Tobą decyzję, która ustawi Twoje najbliższe miesiące.",
	"Czuję, że Twoje doświadczenie stanie się Twoim atutem w nowym projekcie.",
	"Powiem Ci w sekrecie — ktoś zacznie liczyć się z Twoim zdaniem bardziej niż dotąd.",
	"Miałam wizję, że osiągasz cel szybciej, niż planowałeś.",
	"Wiedziałam, że będziesz walczył do końca — i to przyniesie Ci nagrodę.",
	"Widzę przy Tobie symbol stabilizacji i bezpieczeństwa.",
	"Czuję, że Twoja odwaga przyciągnie właściwe osoby.",
	"Powiem Ci jeszcze — to, co zaczynasz, ma potencjał na coś długotrwałego.",
	"Miałam sen, że uśmiechasz się z satysfakcją, wiedząc, że to był Twój świadomy wybór.",
	"Miałam wizję, w której stoisz przed wyborem, który inni uznaliby za ryzykowny, ale Ty podejmujesz go z chłodną kalkulacją i spokojem. Widzę, że to właśnie ta decyzja ustawi Twoją pozycję na dłuższy czas i sprawi, że zaczniesz być traktowany jak ktoś, kto naprawdę wie, czego chce.",

	"Wiedziałam, że będziesz musiał udowodnić coś nie innym, lecz samemu sobie. Nadchodzi moment, w którym spojrzysz wstecz i zrozumiesz, że byłeś silniejszy, niż przypuszczałeś, a to doświadczenie zbuduje w Tobie zupełnie nową pewność.",

	"Powiem Ci w sekrecie — ktoś testuje Twoją cierpliwość i konsekwencję, ale nie po to, by Cię osłabić. To próba, po której otrzymasz więcej swobody i większy wpływ na to, co dzieje się wokół Ciebie.",

	"Miałam sen, że wchodzisz do miejsca, w którym wcześniej czułeś dystans, a teraz witają Cię z uznaniem. To znak, że Twoja reputacja rośnie, nawet jeśli nie zawsze to widzisz.",

	"Widzę przy Tobie symbol zamkniętej bramy, która nagle się uchyla. To szansa, którą dostaniesz dzięki wcześniejszemu wysiłkowi — nie przypadkiem, lecz jako rezultat Twojej wytrwałości.",

	"Czuję wyraźnie, że staniesz się dla kogoś autorytetem w sprawie, która jeszcze niedawno była dla Ciebie wyzwaniem. Twoje doświadczenie zacznie pracować na Twoją korzyść.",

	"Wiedziałam, że nie zadowolisz się przeciętnością. Pojawi się możliwość, która pozwoli Ci podnieść standard życia lub pracy, ale będzie wymagała odwagi i zdecydowania.",

	"Miałam wizję, że rezygnujesz z czegoś, co trzymało Cię w miejscu, i w tej samej chwili czujesz ulgę oraz przypływ energii. To znak, że uwolnienie przyniesie Ci więcej niż trzymanie się znanego.",

	"Powiem Ci coś ważnego — Twoja cisza i obserwacja okażą się potężniejszą strategią niż impulsywne działanie. Ktoś nie doceni Twojej analizy sytuacji, a później będzie musiał przyznać Ci rację.",

	"Widzę przed Tobą projekt lub pomysł, który początkowo wydaje się mały, ale z czasem zaczyna rosnąć. Jeśli dasz mu konsekwencję, stanie się czymś stabilnym i dochodowym.",

	"Miałam sen, że odzyskujesz kontrolę nad sprawą, która wymknęła się spod Twojego wpływu. Ten powrót będzie dowodem na to, że potrafisz naprawiać błędy bez utraty twarzy.",

	"Wiedziałam, że nadejdzie chwila, w której będziesz musiał jasno określić swoje warunki. Zrobisz to spokojnie, ale stanowczo — i właśnie ta postawa przyniesie Ci respekt.",

	"Czuję, że w Twoim otoczeniu pojawi się osoba, która będzie myśleć podobnie jak Ty. Ta relacja — zawodowa lub prywatna — stanie się impulsem do większych działań.",

	"Widzę, że zakończysz pewien konflikt bez potrzeby walki. Twoja dojrzałość sprawi, że sytuacja sama zacznie się układać na Twoją korzyść.",

	"Powiem Ci w tajemnicy — Twoje nazwisko zostanie wymienione w kontekście większej odpowiedzialności. To propozycja, która zmusi Cię do wyjścia na wyższy poziom.",

	"Miałam wizję, w której inwestujesz czas w rozwój konkretnej umiejętności, a później ta umiejętność staje się Twoją przewagą konkurencyjną.",

	"Wiedziałam, że nie boisz się zaczynać od nowa. Pojawi się sytuacja, która pozwoli Ci odbudować coś w lepszej, dojrzalszej formie.",

	"Widzę przy Tobie energię stabilizacji finansowej — nie poprzez przypadek, lecz przez rozsądne, przemyślane ruchy.",

	"Czuję, że staniesz się dla kogoś wsparciem w trudnym momencie, a ta lojalność wróci do Ciebie w najmniej oczekiwanym czasie.",

	"Powiem Ci szczerze — Twoja ambicja przestaje być tylko planem, a zaczyna być widoczna w działaniach, które inni zaczną naśladować.",
	"Miałam sen, że odrzucasz propozycję, która wygląda atrakcyjnie, ale intuicyjnie czujesz, że to nie Twoja droga. Ta odmowa ochroni Cię przed stratą czasu i energii.",

	"Wiedziałam, że będziesz musiał wykazać się cierpliwością wobec osoby, która nie nadąża za Twoim tempem. Twoja wyrozumiałość zbuduje most, który później okaże się kluczowy.",

	"Widzę, że dostaniesz możliwość rozszerzenia swoich wpływów — może to być nowe stanowisko, nowy rynek albo nowe środowisko, w którym pokażesz klasę.",

	"Czuję, że przełamiesz schemat, który powtarzał się w Twoim życiu od dawna. Tym razem zareagujesz inaczej i właśnie to zmieni rezultat.",

	"Powiem Ci w sekrecie — Twoja przeszła porażka stanie się argumentem przemawiającym na Twoją korzyść, bo pokaże, że wyciągnąłeś wnioski.",

	"Miałam wizję rozmowy, w której zachowujesz absolutny spokój, a druga strona zaczyna ustępować. Twoja opanowana postawa stanie się Twoją siłą.",

	"Wiedziałam, że nie będziesz wiecznie czekał na idealny moment. W pewnej chwili sam go stworzysz.",

	"Widzę przy Tobie symbol drogi, która rozwidla się na dwie części. Wybierzesz trudniejszą, ale bardziej opłacalną w dłuższej perspektywie.",

	"Czuję, że Twoja dyscyplina zacznie przynosić efekty w obszarze zdrowia lub kondycji — zobaczysz realną różnicę.",

	"Powiem Ci coś jeszcze — Twoja odwaga w przyznaniu się do błędu sprawi, że ktoś zacznie Ci ufać bardziej niż wcześniej.",
	"Miałam wizję, że osiągasz cel, który kiedyś wydawał Ci się poza zasięgiem, a teraz patrzysz na niego z poczuciem, że to dopiero początek.",

	"Wiedziałam, że Twoja wytrzymałość psychiczna zostanie nagrodzona — sytuacja, która miała Cię złamać, wzmocni Cię.",

	"Widzę przed Tobą etap większej niezależności — finansowej, emocjonalnej albo zawodowej — który zbudujesz własnymi decyzjami.",

	"Czuję, że zrobisz coś, czego długo unikałeś, i odkryjesz, że strach był większy niż realne ryzyko.",

	"Powiem Ci w tajemnicy — to, co teraz budujesz powoli, stanie się fundamentem na kilka kolejnych lat.",

	"Miałam sen, że ktoś, kto kiedyś wątpił w Ciebie, zmienia zdanie po zobaczeniu Twoich rezultatów.",

	"Wiedziałam, że nie zrezygnujesz z planu tylko dlatego, że wymaga więcej czasu. Ta cierpliwość da Ci przewagę.",

	"Widzę przy Tobie symbol zamknięcia starego zobowiązania i wejścia w nową, lżejszą przestrzeń działania.",

	"Czuję, że Twoja konsekwencja zacznie inspirować innych do działania.",

	"Powiem Ci szczerze — przed Tobą okres, w którym udowodnisz sobie, że potrafisz funkcjonować na wyższym poziomie niż dotąd.",
];

const femalePredictions = [
	"Wiedziałam, że będziesz tą, która odważy się zawalczyć o swoje marzenia. Twoja determinacja zacznie przynosić widoczne efekty.",
	"Miałam sen, że stoisz pewna siebie i spokojna, a inni podziwiają Twoją siłę.",
	"Powiem Ci po tajemnicy — ktoś widzi w Tobie więcej, niż sama w sobie dostrzegasz.",
	"Widzę, że przyszedł moment, w którym zaufasz swojej intuicji i podejmiesz właściwą decyzję.",
	"Czuję przy Tobie energię rozkwitu — wchodzisz w etap większej pewności siebie.",
	"Miałam wizję, że otrzymujesz wiadomość, która wywoła uśmiech i ulgę.",
	"Wiedziałam, że będziesz gotowa zamknąć to, co Cię ograniczało.",
	"Widzę przed Tobą rozmowę, która przyniesie jasność i spokój.",
	"Powiem Ci w sekrecie — Twoja cierpliwość wkrótce się opłaci.",
	"Miałam sen, że ktoś dziękuje Ci za Twoje wsparcie i dobre serce.",
	"Wiedziałam, że nie zrezygnujesz z siebie dla innych.",
	"Widzę przy Tobie nową szansę zawodową lub twórczą.",
	"Czuję, że odważysz się postawić granice i poczujesz ulgę.",
	"Powiem Ci coś ważnego — Twoja intuicja będzie teraz Twoim najlepszym przewodnikiem.",
	"Miałam wizję stabilizacji finansowej dzięki rozsądnej decyzji.",
	"Wiedziałam, że będziesz gotowa na większą odpowiedzialność.",
	"Widzę przy Tobie symbol harmonii w relacjach.",
	"Czuję, że ktoś wyzna Ci coś, co zmieni Twoje spojrzenie.",
	"Powiem Ci po cichu — Twoje działania są bardziej doceniane, niż myślisz.",
	"Miałam sen, że świętujesz małe zwycięstwo, które okaże się początkiem większego sukcesu.",
	"Wiedziałam, że będziesz silniejsza po trudnym doświadczeniu.",
	"Widzę przed Tobą nowy etap pełen możliwości.",
	"Czuję, że Twoja kreatywność zacznie przynosić realne efekty.",
	"Powiem Ci w tajemnicy — ktoś chce Ci zaproponować coś ważnego.",
	"Miałam wizję Twojego spokoju w sytuacji, która wcześniej budziła niepokój.",
	"Wiedziałam, że będziesz umiała wybaczyć i ruszyć dalej.",
	"Widzę przy Tobie energię miłości i wzajemności.",
	"Czuję, że Twoja pewność siebie przyciągnie właściwe osoby.",
	"Powiem Ci szczerze — nadchodzi moment, w którym zabłyśniesz.",
	"Miałam sen, że realizujesz plan, który długo dojrzewał w Twojej głowie.",
	"Wiedziałam, że nie pozwolisz się zlekceważyć.",
	"Widzę, że podejmiesz decyzję korzystną dla swojej przyszłości.",
	"Czuję przy Tobie symbol rozwoju osobistego.",
	"Powiem Ci w sekrecie — Twoje marzenie jest bliżej, niż myślisz.",
	"Miałam wizję spotkania, które wiele zmieni.",
	"Wiedziałam, że będziesz wierna swoim wartościom.",
	"Widzę przed Tobą szansę na nową współpracę.",
	"Czuję, że odzyskasz równowagę w ważnej relacji.",
	"Powiem Ci jeszcze — Twoja siła tkwi w autentyczności.",
	"Miałam sen, że czujesz dumę z podjętej decyzji.",
	"Wiedziałam, że będziesz gotowa zacząć od nowa.",
	"Widzę przy Tobie symbol spełnienia i satysfakcji.",
	"Czuję, że ktoś okaże Ci szczerość, której potrzebowałaś.",
	"Powiem Ci w tajemnicy — Twoja praca przyniesie uznanie.",
	"Miałam wizję Twojego uśmiechu po osiągnięciu celu.",
	"Wiedziałam, że nie poddasz się przy pierwszej trudności.",
	"Widzę przed Tobą decyzję, która da Ci wolność.",
	"Czuję, że Twoja energia przyciągnie dobre wydarzenia.",
	"Powiem Ci szczerze — jesteś bliżej przełomu, niż Ci się wydaje.",
	"Miałam sen, że idziesz naprzód bez lęku i z podniesioną głową.",
	"Miałam wizję, w której stoisz na granicy starego i nowego etapu swojego życia. Za Tobą doświadczenia, które Cię zahartowały, przed Tobą przestrzeń, w której wreszcie przestaniesz się umniejszać. Widzę, że podejmiesz decyzję nie z lęku, lecz z dojrzałości — i to będzie punkt zwrotny.",

	"Wiedziałam, że w Twoim sercu dojrzewa zmiana, choć jeszcze nie ubrałaś jej w konkretne słowa. Wkrótce nazwiesz to, czego naprawdę pragniesz, i przestaniesz godzić się na półśrodki, które dotąd były wygodne, ale niespełniające.",

	"Powiem Ci w sekrecie — ktoś analizuje Twoją siłę i odporność, bo widzi w Tobie osobę, która potrafi unieść więcej niż inni. To może być zapowiedź większej odpowiedzialności, ale też większego uznania.",

	"Miałam sen, że siedzisz spokojnie w miejscu, które kiedyś budziło w Tobie napięcie. To symbol, że odzyskasz kontrolę nad emocją, która przez długi czas miała nad Tobą przewagę.",

	"Widzę przy Tobie obraz mostu — po jednej stronie przeszłość, po drugiej nowe możliwości. Przejdziesz go świadomie, nie paląc za sobą wszystkiego, lecz wybierając to, co naprawdę Ci służy.",

	"Czuję, że w Twoim życiu pojawi się rozmowa, która zdejmie z Ciebie ciężar niedopowiedzeń. Wypowiesz coś, co długo nosiłaś w sobie, a druga strona zareaguje dojrzalej, niż się spodziewasz.",

	"Wiedziałam, że nie jesteś stworzona do bycia tłem w cudzej historii. Wkrótce wydarzy się sytuacja, w której to Twoje zdanie będzie kluczowe, a Twoja decyzja wyznaczy kierunek.",

	"Miałam wizję, że odrzucasz coś, co kiedyś było Twoim marzeniem, bo zrozumiesz, że już z tego wyrosłaś. Ta rezygnacja nie będzie porażką, lecz dowodem rozwoju.",

	"Powiem Ci coś ważnego — Twoja intuicja ostrzeże Cię przed niejasną propozycją. Jeśli jej posłuchasz, unikniesz rozczarowania i zachowasz energię na coś lepszego.",

	"Widzę przed Tobą symbol otwartych drzwi w przestrzeni zawodowej lub twórczej. To nie będzie przypadkowa szansa, lecz rezultat Twojej cichej, systematycznej pracy.",

	"Miałam sen, że odbierasz słowa przeprosin lub uznania, których wcześniej Ci odmówiono. To przyniesie Ci domknięcie pewnej historii.",

	"Wiedziałam, że nadejdzie moment, w którym przestaniesz się tłumaczyć ze swoich wyborów. Ta wewnętrzna zgoda na siebie odmieni sposób, w jaki patrzą na Ciebie inni.",

	"Widzę przy Tobie energię stabilizacji finansowej, która nie przyjdzie nagle, lecz będzie wynikiem jednej bardzo rozsądnej decyzji, podjętej bez presji.",

	"Czuję, że ktoś z Twojego otoczenia zacznie traktować Cię poważniej po tym, jak pokażesz konsekwencję i nie wycofasz się pod wpływem emocji.",

	"Powiem Ci w tajemnicy — Twoja delikatność jest mylnie odbierana jako słabość, ale wkrótce ktoś przekona się, jak ogromna siła się za nią kryje.",

	"Miałam wizję, że inwestujesz w coś, co daje Ci długofalowe poczucie bezpieczeństwa — może to być wiedza, umiejętność albo relacja oparta na wzajemnym szacunku.",

	"Wiedziałam, że jesteś gotowa wybaczyć sobie przeszłe decyzje. To pojednanie z samą sobą uwolni Cię bardziej niż jakiekolwiek zewnętrzne przeprosiny.",

	"Widzę przed Tobą etap, w którym przestaniesz ścigać czyjeś oczekiwania, a zaczniesz budować życie w zgodzie ze swoim rytmem.",

	"Czuję, że otrzymasz propozycję współpracy lub wsparcia, która początkowo wyda się niepewna, ale okaże się stabilnym fundamentem.",

	"Powiem Ci szczerze — Twoje serce zacznie otwierać się na nową relację, gdy przestaniesz porównywać ją z przeszłością.",
	"Miałam sen, że zmieniasz otoczenie lub sposób działania i szybko zauważasz, jak bardzo ta decyzja wpływa na Twoje samopoczucie.",

	"Wiedziałam, że przestaniesz czekać na czyjeś pozwolenie, by zrobić coś tylko dla siebie.",

	"Widzę przy Tobie symbol światła w miejscu, które wcześniej wydawało się zamknięte — rozwiązanie przyjdzie z nieoczekiwanej strony.",

	"Czuję, że Twoja konsekwencja w dbaniu o siebie zacznie przynosić widoczne rezultaty, zarówno fizyczne, jak i emocjonalne.",

	"Powiem Ci w sekrecie — ktoś zacznie walczyć o Twoją uwagę, gdy zauważy, że przestałaś ją rozdawać bez zastanowienia.",

	"Miałam wizję, że kończysz pewien projekt z poczuciem, że przekroczyłaś własne ograniczenia.",

	"Wiedziałam, że nie zostaniesz w miejscu, które podcina Ci skrzydła, nawet jeśli było wygodne.",

	"Widzę przed Tobą rozmowę, która wyjaśni dawne nieporozumienie i pozwoli ruszyć dalej bez ciężaru.",

	"Czuję, że Twoja energia przyciągnie osobę o podobnej wrażliwości i dojrzałości.",

	"Powiem Ci jeszcze — Twoje marzenie zacznie przybierać realną formę, gdy przestaniesz odkładać pierwszy krok.",

	"Miałam sen, że patrzysz na swoje życie z dumą, bo wiesz, ile wysiłku włożyłaś w to, by być tu, gdzie jesteś.",

	"Wiedziałam, że będziesz gotowa postawić granicę nawet kosztem chwilowego napięcia.",

	"Widzę przy Tobie symbol harmonii w relacjach rodzinnych, która przyjdzie po szczerej rozmowie.",

	"Czuję, że odzyskasz coś cennego — może to być pasja, wiara w siebie albo poczucie sprawczości.",

	"Powiem Ci w tajemnicy — Twoje działania zaczną przynosić uznanie, którego wcześniej brakowało.",

	"Miałam wizję, że decydujesz się na krok, który kiedyś wydawał się zbyt śmiały, a teraz czujesz, że to właściwy czas.",

	"Wiedziałam, że przestaniesz bać się samotności, bo odkryjesz, że jest ona przestrzenią wzrostu.",

	"Widzę przed Tobą możliwość podróży — dosłownej lub symbolicznej — która zmieni Twoją perspektywę.",

	"Czuję, że ktoś przyzna Ci rację w sprawie, o którą walczyłaś w ciszy.",

	"Powiem Ci szczerze — jesteś bliżej stabilizacji emocjonalnej, niż myślisz.",

	"Miałam sen, że Twoje słowa inspirują inną kobietę do odwagi.",

	"Wiedziałam, że nadejdzie moment, w którym poczujesz się bezpiecznie w swojej decyzji.",

	"Widzę przy Tobie symbol zamknięcia trudnego rozdziału z poczuciem lekcji, a nie straty.",

	"Czuję, że Twoja kreatywność stanie się źródłem dodatkowego dochodu lub uznania.",

	"Powiem Ci jeszcze — Twoja droga zaczyna się klarować, nawet jeśli jeszcze nie widzisz całego obrazu.",

	"Miałam wizję, że stoisz pewnie, nie szukając już aprobaty w oczach innych.",

	"Wiedziałam, że Twoja cierpliwość wobec siebie przyniesie głęboki spokój.",

	"Widzę przed Tobą etap większej niezależności i odwagi w mówieniu 'chcę' zamiast 'muszę'.",

	"Czuję, że zamkniesz pewien temat sercowy bez żalu, lecz z wdzięcznością za lekcję.",

	"Powiem Ci w sekrecie — Twoje życie zaczyna układać się w sposób, który kiedyś był tylko cichym pragnieniem.",

	"Miałam sen, że w Twoim otoczeniu pojawia się osoba, która wnosi stabilność i szczerość.",

	"Wiedziałam, że nie zatrzymasz się w pół drogi do spełnienia.",

	"Widzę przy Tobie symbol nowego początku, który sama zainicjujesz.",

	"Czuję, że Twoja odwaga stanie się inspiracją dla innych.",

	"Powiem Ci szczerze — decyzja, którą podejmiesz w najbliższym czasie, będzie początkiem czegoś większego, niż zakładasz.",
];

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const saveProfilesToLocalStorage = (profiles) => {
	localStorage.setItem(WAITER_PROFILES_STORAGE_KEY, JSON.stringify(profiles));
};

const loadProfilesFromLocalStorage = () => {
	const data = localStorage.getItem(WAITER_PROFILES_STORAGE_KEY);
	return data ? JSON.parse(data) : [];
};

const saveTablesToLocalStorage = (profileId, tables) => {
	const storedTables =
		JSON.parse(localStorage.getItem(TABLES_STORAGE_KEY)) || {};
	storedTables[profileId] = tables;
	localStorage.setItem(TABLES_STORAGE_KEY, JSON.stringify(storedTables));
};

const capitalizeName = (name) => {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const WaiterProfileManager = ({ onProfileSelect }) => {
	const [profiles, setProfiles] = useState([]);
	const [newProfileName, setNewProfileName] = useState("");
	const [newProfilePassword, setNewProfilePassword] = useState("");
	const [activeProfileId, setActiveProfileId] = useState(null);
	const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
	const [passwordInput, setPasswordInput] = useState("");
	const [selectedProfile, setSelectedProfile] = useState(null);
	const [isGenderSelectOpen, setIsGenderSelectOpen] = useState(false);

	// 🔴 FLAGA BLOKUJĄCA PODWÓJNE DRUKOWANIE
	const isPrintingRef = useRef(false);
	const passwordInputRef = useRef(null);

	useEffect(() => {
		const storedProfiles = loadProfilesFromLocalStorage();
		setProfiles(storedProfiles);
	}, []);

	useEffect(() => {
		if (isPasswordModalOpen && passwordInputRef.current) {
			passwordInputRef.current.focus();
		}
	}, [isPasswordModalOpen]);

	const handleAddProfile = () => {
		if (newProfileName.trim() === "" || newProfilePassword.trim() === "") {
			alert("Proszę wprowadzić nazwę i hasło.");
			return;
		}

		const formattedName = capitalizeName(newProfileName);
		const newProfile = {
			id: Date.now(),
			name: formattedName,
			password: newProfilePassword,
			color: getRandomColor(),
		};

		const updatedProfiles = [...profiles, newProfile];
		setProfiles(updatedProfiles);
		saveProfilesToLocalStorage(updatedProfiles);
		saveTablesToLocalStorage(newProfile.id, []);
		setNewProfileName("");
		setNewProfilePassword("");
	};

	const handleProfileSelect = (profile) => {
		setSelectedProfile(profile);
		setIsPasswordModalOpen(true);
	};

	const getRandomPrediction = (arr) => {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	const printPrediction = (text) => {
		if (isPrintingRef.current) return;
		isPrintingRef.current = true;

		// Stwórz ukryty iframe
		const iframe = document.createElement("iframe");
		iframe.style.position = "fixed";
		iframe.style.bottom = "-1000px";
		iframe.style.right = "-1000px";
		iframe.style.width = "1px";
		iframe.style.height = "1px";
		iframe.style.border = "none";

		document.body.appendChild(iframe);

		const doc = iframe.contentWindow.document;

		doc.open();
		doc.write(`
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="UTF-8">
			<style>
				* { margin: 0; padding: 0; box-sizing: border-box; }
				body { 
					font-family: "Courier New", Courier, monospace; 
					background: white;
					padding: 10px;
					width: 80mm;
				}
				.slip { 
					width: 76mm; 
					text-align: center; 
					border: 2px solid #000; 
					padding: 15px 10px;
				}
				.stars { font-size: 22px; margin: 8px 0; letter-spacing: 4px; }
				.title { 
					font-size: 20px; 
					font-weight: 900; 
					border-bottom: 2px solid #000; 
					padding: 10px 0;
					margin: 10px 0;
					text-transform: uppercase;
				}
				.divider { font-size: 12px; margin: 12px 0; letter-spacing: 2px; }
				.text { 
					font-size: 16px; 
					font-weight: 600;
					font-style: italic; 
					margin: 15px 0; 
					line-height: 1.6;
				}
				.date { font-size: 11px; color: #666; margin-top: 10px; }
			</style>
		</head>
		<body>
			<div class="slip">
				<div class="stars">✨ ✨ ✨</div>
				<div class="title">WRÓŻBITA LUNDORA</div>
				<div class="divider">==============================</div>
				<div class="text">${text}</div>
				<div class="divider">==============================</div>
				<div class="stars">✨ ✨ ✨</div>
				<div class="date">${new Date().toLocaleDateString("pl-PL")}</div>
			</div>
		</body>
		</html>
	`);
		doc.close();

		// Drukuj z iframe
		setTimeout(() => {
			iframe.contentWindow.focus();
			iframe.contentWindow.print();

			// Usuń iframe po drukowaniu
			setTimeout(() => {
				document.body.removeChild(iframe);
				isPrintingRef.current = false;
			}, 1000);
		}, 100);
	};
	const handlePredictionStart = () => {
		setIsGenderSelectOpen(true);
	};

	const handleSelectMale = () => {
		const text = getRandomPrediction(malePredictions);
		printPrediction(text);
		setIsGenderSelectOpen(false);
	};

	const handleSelectFemale = () => {
		const text = getRandomPrediction(femalePredictions);
		printPrediction(text);
		setIsGenderSelectOpen(false);
	};

	const handlePasswordSubmit = () => {
		if (passwordInput === selectedProfile.password) {
			onProfileSelect(selectedProfile);
			setActiveProfileId(selectedProfile.id);
			setIsPasswordModalOpen(false);
			setPasswordInput("");
		} else {
			alert("Nieprawidłowe hasło");
			setPasswordInput("");
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handlePasswordSubmit();
		}
	};

	const handleNameChange = (e) => {
		setNewProfileName(capitalizeName(e.target.value));
	};

	const handlePasswordChange = (e) => {
		setNewProfilePassword(e.target.value);
	};

	return (
		<div className="waiter-profile-manager">
			<div className="add-waiter">
				<form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						placeholder="Nazwa kelnera"
						value={newProfileName}
						onChange={handleNameChange}
						autoComplete="off"
						name="new-waiter-name"
					/>
					<input
						type="password"
						placeholder="Hasło"
						value={newProfilePassword}
						onChange={handlePasswordChange}
						autoComplete="new-password"
						name="new-waiter-password"
					/>
				</form>
				<button onClick={handleAddProfile}>Dodaj kelnera</button>
				<button className="prediction-btn" onClick={handlePredictionStart}>
					Wróżbita Lundora
				</button>
			</div>

			<div className="profile-list">
				{profiles.map((profile) => (
					<div
						key={profile.id}
						className={`profile-card ${
							profile.id === activeProfileId ? "active" : "inactive"
						}`}
						style={{ backgroundColor: profile.color }}
						onClick={() => handleProfileSelect(profile)}>
						<div>{profile.name}</div>
					</div>
				))}
			</div>

			{isPasswordModalOpen && (
				<div className="password-modal-overlay">
					<div className="modal-content">
						<h3>Wprowadź hasło: {selectedProfile?.name}</h3>
						<input
							type="password"
							placeholder="Hasło"
							value={passwordInput}
							onChange={(e) => setPasswordInput(e.target.value)}
							ref={passwordInputRef}
							onKeyPress={handleKeyPress}
							autoComplete="new-password"
						/>
						<button onClick={handlePasswordSubmit}>Potwierdź</button>
						<button onClick={() => setIsPasswordModalOpen(false)}>
							Anuluj
						</button>
					</div>
				</div>
			)}

			{isGenderSelectOpen && (
				<div className="password-modal-overlay">
					<div className="modal-content gender-modal">
						<h3>Wróżba dla kogo?</h3>
						<div className="gender-buttons">
							<button className="gender-btn male" onClick={handleSelectMale}>
								<span className="gender-icon">👨</span>
								Facet
							</button>
							<button
								className="gender-btn female"
								onClick={handleSelectFemale}>
								<span className="gender-icon">👩</span>
								Kobieta
							</button>
						</div>
						<button
							className="cancel-btn"
							onClick={() => setIsGenderSelectOpen(false)}>
							Anuluj
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default WaiterProfileManager;
