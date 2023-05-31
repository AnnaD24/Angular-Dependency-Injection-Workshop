
## In acest exemplu vom explora cum utilizam resolution modifiers

Scopul nostru este să furnizăm (să **injectăm**) un **FakeSpinService doar** în cazul în care este 1 aprilie. In restul zilelor, vom injecta un SpinService. <br />

---

### @SkipSelf()

Prin @SkipSelf() omitem component injectorul curent, incepem cautarea in ierarhia de injectori de la urmatoarea componenta.

---

### @Host()

Vom folosi directiva congrats-directive si vom observa ca aceasta va folosi doar instanta provide-uita in ea insasi, iar daca nu exista, <br />
va cauta in ierarhia de injectori pana in injectorul componentei sale host. 
---


### @Optional()

Cu ajutorul lui @Optional() marcam o dependenta ca optionala, astfel incat nu vom mai vedea o eroare atunci cand niciun injector nu contine o instanta a serviciului injectat. <br />
Poate fi folosita alaturi de orice alt resolution modifier.

---

### @Self()

Vom folosi directiva congrats-directive si vom observa ca aceasta va folosi instanta doar provide-uita in ea insasi.
