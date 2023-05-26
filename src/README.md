
## In acest exemplu vom explora utilizarea provider key-urilor useFactory și useValue.

Scopul nostru este să furnizăm (să **injectăm**) un **FakeSpinService doar** în cazul în care este 1 aprilie. In restul zilelor, vom injecta un SpinService. <br />

---

### UseValue, InjectionToken

Pentru a face acest lucru, vom crea un injection token numit **FOOLS_DAY_TOKEN**. <br />
Acest token va reprezenta o valoare booleană (true sau false) care indică dacă este ziua păcălelilor sau nu. <br />

Am definit acest token în fișierul [spin-service.token.ts](app%2Fspin-service.token.ts), si il vom provide-ui in app.module.ts. <br />
Valoarea pe care o vom provide-ui cand acest token este injectat, o vom seta **manual** cu true sau false, cu ajutorul lui **useValue**.

---

### UseFactory

De aceasta data, dorim sa avem un mod dinamic prin care sa stabilim ce service vom injecta in functie de data. <br />

Pentru a determina dacă este 1 aprilie sau nu, vom folosi un service numit **DateService**, care expune o metodă *isAprilFoolsDay()*. Il gasim aici: [date.service.ts](app%2Fdate.service.ts)<br />
Vom renunta la FOOLS_DAY_TOKEN si la useValue, si le vom inlocui cu useFactory, care se va folosi de [spin-service.factory.ts](app%2Fspin-service.factory.ts). <br />

Prin utilizarea provider key-ului **useFactory**, avem posibilitatea de a decide in mod **dinamic** dacă vom furniza un obiect de tip **SpinService** sau **FakeSpinService**, în funcție de rezultatul returnat de metoda isAprilFoolsDay().

---

