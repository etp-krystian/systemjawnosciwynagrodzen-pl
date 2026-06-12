---
layout: base
locale: pl
title: Kontakt w sprawie wdrożenia
heading: Kontakt w sprawie wdrożenia
description: Jeśli chcesz skontaktować się z nami w sprawie wdrożenia, wypełnij formularz.
permalink: /kontakt-wdrozenia/
alternateLangs:
  pl: /kontakt-wdrozenia/
contactPage: true
render_with_liquid: false
---

<style>
  .is-contact .prose .contact-form-shell {
    max-width: 760px;
    width: 100%;
    padding: 24px;
    border: 1px solid rgba(226, 232, 240, 0.92);
    border-radius: 14px;
    background: #fff;
  }

  .is-contact .prose .contact-form {
    margin: 0;
  }

  .is-contact .prose .contact-form-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    margin: 0 0 16px;
    align-items: start;
  }

  .is-contact .prose .contact-form-row:last-of-type {
    margin-bottom: 0;
  }

  .is-contact .prose .contact-form-field {
    display: grid;
    grid-template-rows: auto auto;
    align-content: start;
    min-width: 0;
    width: 100%;
  }

  .is-contact .prose .contact-form-field label {
    display: block;
    margin: 0 0 4px;
    padding: 0;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 650;
  }

  .is-contact .prose .contact-form-field input {
    display: block;
    width: 100%;
    min-height: 44px;
    padding: 10px 13px;
    border: 1px solid rgba(148, 163, 184, 0.52);
    border-radius: 10px;
    background: #fff;
    box-sizing: border-box;
  }

  .is-contact .prose .contact-form-actions {
    display: grid;
    gap: 8px;
    margin-top: 24px;
  }


  .is-contact .prose .contact-form-legal,
  .is-contact .prose .contact-form-note {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: var(--muted);
    max-width: none;
  }

  .is-contact .prose .contact-form-required {
    color: #dc2626;
    font-weight: 800;
  }

  .is-contact .prose .contact-form-actions .contact-form-legal {
    margin-top: 8px;
  }

  .is-contact .prose .contact-form-error {
    display: none;
    margin: 8px 0 0;
    color: #b91c1c;
    font-size: 12px;
    line-height: 16px;
  }

  .is-contact .prose .contact-form-error.is-visible {
    display: block;
  }

  @media (min-width: 720px) {
    .is-contact .prose .contact-form-row--two {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .is-contact .prose .contact-form-row--two .contact-form-field {
      flex: 1 1 0;
      min-width: 0;
    }

    .is-contact .prose .contact-form-row--two .contact-form-field label {
      min-height: 0;
    }
  }
</style>

<div class="contact-form-shell">
  <form class="contact-form" name="wdrozenie-kontakt" method="POST" action="/kontakt-wdrozenia/dziekujemy/" data-form-purpose="implementation-contact" data-submit-endpoint="https://konto.systemjawnosciwynagrodzen.pl/backend-api/public/contact/implementation">
    <input type="hidden" name="form_name" value="wdrozenie-kontakt" />

    <div class="contact-form-row contact-form-row--two">
      <div class="contact-form-field">
        <label for="organization-name">Nazwa organizacji <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="organization-name" name="organization_name" type="text" autocomplete="organization" placeholder="Np. ABC Sp. z o.o." required />
      </div>

      <div class="contact-form-field">
        <label for="industry">Branża <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="industry" name="industry" type="text" placeholder="Np. produkcja, IT, retail, usługi finansowe" required />
      </div>
    </div>

    <div class="contact-form-row contact-form-row--two">
      <div class="contact-form-field">
        <label for="employee-count">Liczba pracowników (orientacyjnie) <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="employee-count" name="employee_count" type="number" min="1" step="1" inputmode="numeric" placeholder="Np. 250" required />
      </div>

      <div class="contact-form-field">
        <label for="position-count">Liczba stanowisk (orientacyjnie) <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="position-count" name="position_count" type="number" min="1" step="1" inputmode="numeric" placeholder="Np. 80" required />
      </div>
    </div>

    <div class="contact-form-row contact-form-row--two">
      <div class="contact-form-field">
        <label for="full-name">Imię i nazwisko <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="full-name" name="full_name" type="text" autocomplete="name" placeholder="Np. Anna Kowalska" required />
      </div>

      <div class="contact-form-field">
        <label for="email">Adres e-mail <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="email" name="email" type="email" autocomplete="email" placeholder="anna@gmail.com" required />
      </div>
    </div>

    <div class="contact-form-row contact-form-row--single">
      <div class="contact-form-field">
        <label for="phone">Numer telefonu <span class="contact-form-required" aria-hidden="true">*</span></label>
        <input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="500 600 700" required />
      </div>
    </div>

    <div class="contact-form-actions">
      <button class="btn btn-primary" type="submit"><span>Wyślij formularz</span></button>
      <p class="contact-form-error" data-form-error role="alert">Nie udało się wysłać formularza. Spróbuj ponownie za chwilę.</p>
      <p class="contact-form-legal">
        Wysyłając formularz, wyrażasz zgodę na kontakt w sprawie wdrożenia i akceptujesz naszą
        <a href="/polityka-prywatnosci/">politykę prywatności</a>.
      </p>
      <p class="contact-form-note">Skontaktujemy się po otrzymaniu zgłoszenia.</p>
    </div>
  </form>
</div>

<script>
  (() => {
    const form = document.querySelector('[data-form-purpose="implementation-contact"]');

    if (!form) {
      return;
    }

    const endpoint = form.dataset.submitEndpoint;
    const submitButton = form.querySelector('button[type="submit"]');
    const errorMessage = form.querySelector("[data-form-error]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!endpoint) {
        form.submit();
        return;
      }

      errorMessage?.classList.remove("is-visible");

      if (submitButton) {
        submitButton.disabled = true;
      }

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        window.location.href = form.action;
      } catch (error) {
        errorMessage?.classList.add("is-visible");
        if (submitButton) {
          submitButton.disabled = false;
        }
        console.error("Implementation contact form submission failed", error);
      }
    });
  })();
</script>
