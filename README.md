# Vue 3 CompositionApi + TypeScript + Vite + Element Plus + SCSS

# test-task001
все условия ТЗ соблюдены:

- страница по адресу /graph/1?tab=2 показывает второй блок с заглушкой под график для первого набора данных

- Приложение корректно работает в Google Chrome версии 103-105, Firefox 44 и выше за счёт [@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy)
- Firefox 44 - только при отключении безопасного режима.

- "/APIv1/tabs" запрос возвращает массив charts, каждый элемент которого содержит ИД, имя и описание вкладки (id, name, description соответственно), и массив отображаемых на графике показателей (de_refs), в который включены ИД (id), name, description (необязательный параметр) для каждого показателя.

-  "/APIv0/data/1" запрос возвращает объект, содержащий массив значений values и массив описаний показателей data_elements. Элемент массива values состоит из метки времени timepoint (мс) и массива values_at_timepoint, состоящего из ИД показателей (id) и соответствующих им значений (value).

- Структура выходных данных: легенда графика (legend), представляющая собой массив наименований отображаемых на графике показателей, объект, задающий массив временных значений по оси X (xAxis), массив значений по оси Y для каждой из линий на графике (series).

- Также был создан chart - объект с группами показателей со значениями по оси Y , наименованиями и id, для сокращения вычислений и более удобного использования данных для графиков.

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Project setup
- backend for requests in server folder
```
cd server
npm install
npm run start
```
- then check - [vue-ln.web.app](https://vue-ln.web.app/)

 Compiles and hot-reloads for development
```
npm run dev
```

 Compiles and minifies for production
```
npm run build
```
