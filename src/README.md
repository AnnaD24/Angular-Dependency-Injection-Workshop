In acest exemplu vom descoperi cum functioneaza provider key-urile useClass si useExisting.

Vom porni cu service-ul SpinService provide-uit la nivel de root, care il face sa fie disponibil in intreaga aplicatie. <br />
In acest caz, one component si another component vor share-ui **aceeasi instanta de SpinService**, 
astfel ca atunci cand oricare dintre ei invarte de roata, amandoi vor primi **acelasi** premiu.

In WheelModule am creat un **FakeSpinService** care ofera premii... false. <br />
Pentru a face o gluma utilizatorilor OneComponent si AnotherComponent, ne vom folosi de **useClass** si vom substitui **SpinService** cu un **FakeSpinService**, fara ca utilizatorii sa vada aceasta schimbare. 


Pentru a studia **useExisting**, vom face un test: <br/>
Daca in OneComponent injectam direct un FakeSpinService, observam ca cei doi utilizatori, desi ambii folosesc FakeSpinService (unul explicit, celalalt implicit), au primit cate **o instanta diferita** a acestui service. <br />
Totusi, daca inlocuim **useClass** cu **useExisting**, cele doua componente vor share-ui din nou aceeasi instanta a lui FakeSpinService, deoarece se va injecta instanta care **_exista_** deja in Injector, si nu se va crea una noua cum se intampla in cazul folosirii lui useClass.

