## In acest exemplu vom descoperi cum functioneaza provider key-urile useClass si useExisting.

---

### UseClass

Pentru a începe, avem un serviciu numit SpinService provide-uit la nivelul root al aplicației, ceea ce înseamnă că este disponibil în întreaga aplicație. <br />
În acest caz, componentele OneComponent și AnotherComponent vor partaja **aceeasi instanta de SpinService**, astfel ca atunci când unul dintre ele învârte roata, amândoi vor primi același premiu.
Vom porni cu service-ul SpinService provide-uit la nivel de root, care il face sa fie disponibil in intreaga aplicatie. <br />

In WheelModule am creat un serviciu numit **FakeSpinService** care ofera premii... false. <br />
Pentru a face o gluma utilizatorilor OneComponent si AnotherComponent, vom utiliza provider key-ul **useClass** și vom înlocui **SpinService** cu **FakeSpinService**, fără ca utilizatorii să observe această schimbare.

---

### UseExisting

Pentru a studia **useExisting**, vom face un test: <br/>
Daca in OneComponent injectam direct un FakeSpinService, observam ca cei doi utilizatori, desi amandoi folosesc FakeSpinService (unul in mod explicit, celalalt implicit), primesc **instante diferite** ale acestui service. <br />
Totusi, daca inlocuim **useClass** cu **useExisting**, cele doua componente vor share-ui din nou aceeasi instanta a lui FakeSpinService, deoarece se va injecta instanța care **există deja** în Injector, fără a crea una nouă, așa cum se întâmplă în cazul utilizării useClass.

