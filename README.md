# Readme with description

## Почему сделал так, а не иначе

До начала прохождения стажировки не писал на реакте, пришлось параллельно изучать реакт и кодить на нем. Поэтому архитектура не совсем приятная у приложения, потому что строил ее на этапе знакомства с фреймворком. В конце пересмотрел некоторые свои решения, но времени исправить их нет. Еще и начал немного позже, что тоже дало свои плоды, и у меня получился некрасивый код, местами не по БЭМ, местами не по TS. Также, добавил адаптивность, но не успел сделать мобильную версию, она выглядит жутковато. Но я очень старался :) Написал кастомный компонент для селекта (выбор городов)

## В каком моменте сомневаюсь

Сомневаюсь в том, что нужен компонент Display. Думаю, можно было бы его убрать и слегка изменить структуру кода, чтобы было красивее и лаконичнее. Еще сомневаюсь в своем распределении стейтов между компонентами (некоторые стейты можно было бы переместить для красоты и логичности на n компонентов вверх).

## Что не успел сделать из-за ограничения по времени

Из-за ограничения по времени не успел привести код в порядок (удалить ненужные переменные и немного реструктурировать: есть не совсем логичные решения, которые я хотел бы исправить), навести порядок в стилях и назвать все классы по БЭМу, сделать мобильную версию сайта и прикрепить listener на нажатие клавиш-стрелочек для того, чтобы листать недельный прогноз. Еще не успел повесить стили на иконки стрелочек для перелистывания (чтобы был стейт disabled, если листать нельзя). Пришлось использовать не совсем стилизованное выпадающее окошко для выбора даты (хотел сделать кастомный компонент, но тоже не хватило времени). Самое грустное, что не успел пофиксить баг с одновременным использованием обеих карточек (прогноз на 7 дней и прошлый прогноз).

## Другая дополнительная информация.

Очень много полезных ссылок в документе-ТЗ :)

# Из-за бага можно использовать только одну карточку, при использовании обеих падает, нужно обновить
