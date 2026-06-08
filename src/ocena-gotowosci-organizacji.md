---
layout: base
locale: pl
title: Ocena Gotowości Organizacji do Jawności Wynagrodzeń
heading: Ocena gotowości organizacji
description: "Sprawdź, jak przygotowana jest organizacja do wymogów jawności wynagrodzeń. Krótka ocena struktury stanowisk, widełek płac i danych wynagrodzeniowych."
permalink: /ocena-gotowosci-organizacji/
alternateLangs:
  pl: /ocena-gotowosci-organizacji/
renderPageHeader: false
render_with_liquid: false
---

<section class="page-hero">
  <div class="container">
    <div class="page-hero-inner">
      <div class="page-header">
        <h1>Ocena gotowości organizacji</h1>
        <p class="page-lead">Sprawdź, jak przygotowana jest organizacja do wymogów jawności wynagrodzeń. Krótka ocena struktury stanowisk, widełek płac i danych wynagrodzeniowych.</p>
      </div>
    </div>
  </div>
</section>

<section class="assessment-stage">
  <div class="container">
    <div class="assessment-flow assessment-panel" data-assessment-flow>
      <div class="assessment-progress" aria-live="polite">
        <p class="assessment-progress-meta">Krok <span data-assessment-current>1</span> z <span data-assessment-total>8</span></p>
        <div class="assessment-progress-bar" aria-hidden="true">
          <span data-assessment-progress></span>
        </div>
      </div>

      <div class="assessment-step is-active" data-assessment-step="1">
        <h3 class="assessment-question">Czy organizacja posiada zdefiniowaną strukturę stanowisk?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 1">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Tak">Tak</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Częściowo">Częściowo</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="2">
        <h3 class="assessment-question">Czy stanowiska są przypisane do poziomów lub kategorii?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 2">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Tak">Tak</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Częściowo">Częściowo</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="3">
        <h3 class="assessment-question">Czy istnieją formalne widełki wynagrodzeń?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 3">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Tak">Tak</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Częściowo">Częściowo</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="4">
        <h3 class="assessment-question">Czy organizacja posiada udokumentowane kryteria awansów i zmian poziomu?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 4">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Tak">Tak</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Częściowo">Częściowo</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="5">
        <h3 class="assessment-question">Czy możliwe jest szybkie porównanie wynagrodzeń osób wykonujących podobną pracę?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 5">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Tak">Tak</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Częściowo">Częściowo</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="6">
        <h3 class="assessment-question">Czy dane wynagrodzeniowe znajdują się w jednym systemie?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 6">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Tak">Tak</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Częściowo">Częściowo</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="7">
        <h3 class="assessment-question">Czy organizacja analizuje różnice wynagrodzeń między grupami pracowników?</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 7">
          <button class="btn btn-ghost assessment-option" type="button" data-value="Regularnie">Regularnie</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Sporadycznie">Sporadycznie</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="Nie">Nie</button>
        </div>
      </div>

      <div class="assessment-step" data-assessment-step="8">
        <h3 class="assessment-question">Liczba pracowników</h3>
        <div class="assessment-options" role="group" aria-label="Odpowiedzi dla pytania 8">
          <button class="btn btn-ghost assessment-option" type="button" data-value="1-49">1-49</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="50-249">50-249</button>
          <button class="btn btn-ghost assessment-option" type="button" data-value="250+">250+</button>
        </div>
      </div>

      <div class="assessment-nav">
        <button class="btn btn-ghost" type="button" data-assessment-back>Wstecz</button>
        <button class="btn btn-primary" type="button" data-assessment-submit hidden><span>Pokaż wynik</span></button>
      </div>
    </div>
  </div>
</section>

<script src="/js/assessment-form.js" defer></script>
