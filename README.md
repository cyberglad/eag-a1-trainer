# EAG A1 — тренажёр

Статический сайт-симулятор épreuve d'aptitude générale (группа A1): одна страница на вопрос, таймер, автоматическое завершение по времени, разбор ответов с объяснениями на русском.

Блоки: Scales Verbal (49 вопросов / 12 мин), Raisonnement verbal, Planification, Jugement situationnel (Conseiller и Servir le client-usager), примеры численного и абстрактного рассуждения.

## Публикация на GitHub Pages

```bash
cd eag-trainer
git init -b main && git add . && git commit -m "EAG A1 trainer"
gh repo create cyberglad/eag-a1-trainer --public --source=. --push
gh api -X POST repos/cyberglad/eag-a1-trainer/pages -f "source[branch]=main" -f "source[path]=/"
```

Через 1–2 минуты сайт будет на https://cyberglad.github.io/eag-a1-trainer/

## Как добавить вопросы

Все задания лежат в `data.js`. Варианты ответов нумеруются с 0; для ситуационного суждения: шкала 4 — оценка 1–4, шкала 5 — 0 (− −) … 4 (++).
