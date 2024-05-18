# <h1>Gardena</h1>

<a href="https://github.com/itsannaw/gardena/actions"><img src="https://github.com/itsannaw/gardena/actions/workflows/cicd.yml/badge.svg" /></a>

* Проект представляет собой галерею растений.
* Использовано [Perenuale API](https://perenual.com/). (имеет ограничение: не более 100 запросов в день)
* [Посмотреть проект](https://gardena-plant.vercel.app/).

## Реализованы следующие требования к функциональности:

-   [x] Реализованы Требования к функциональности
-   [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется [Firebase](https://github.com/itsannaw/gardena/blob/main/src/services/firebase.ts)

#### React

-   [x] Пишем функциональные компоненты с хуками в приоритете над классовыми.
-   [x] Есть разделение на [умные](https://github.com/itsannaw/gardena/blob/main/src/pages/history/HistoryPage.tsx) и [глупые](https://github.com/itsannaw/gardena/blob/main/src/components/layout/footer/Footer.tsx) компоненты
-   [x] Есть [рендеринг списков](https://github.com/itsannaw/gardena/blob/main/src/components/gallery/Gallery.tsx)
-   [x] Реализована хотя бы одна [форма](https://github.com/itsannaw/gardena/blob/main/src/components/auth/AuthForm.tsx)
-   [x] Есть применение [Контекст API](https://github.com/itsannaw/gardena/blob/main/src/context/ThemeContext.tsx)
-   [x] Есть применение [предохранителя](https://github.com/itsannaw/gardena/blob/main/src/App.tsx)
-   [x] Есть хотя бы один [кастомный хук](https://github.com/itsannaw/gardena/blob/main/src/hooks/useIsLoggedIn.ts)
-   [x] Хотя бы несколько компонентов используют PropTypes:[PasswordInput](https://github.com/itsannaw/gardena/blob/main/src/components/ui/inputs/password/PasswordInput.tsx),[EmailInput](https://github.com/itsannaw/gardena/blob/main/src/components/ui/inputs/email/EmailInput.tsx)
-   [x] Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/itsannaw/gardena/blob/main/src/hooks/useDebounce.ts)
-   [x] Есть применение lazy + Suspense: [HomePage](https://github.com/itsannaw/gardena/blob/main/src/pages/home/HomePage.tsx)

#### Redux

-   [x] Используем [Modern Redux with Redux Toolkit](https://github.com/itsannaw/gardena/blob/main/src/store/index.ts)
-   [x] Используем [слайсы](https://github.com/itsannaw/gardena/blob/main/src/store/index.ts)
-   [x] Есть хотя бы одна [кастомная мидлвара](https://github.com/itsannaw/gardena/blob/main/src/store/middlewares/authMiddleware.ts)
-   [x] Используется [RTK Query](https://github.com/itsannaw/gardena/blob/main/src/store/api/plantsApi.ts)
-   [x] Используется [Transforming Responses](https://github.com/itsannaw/gardena/blob/main/src/store/api/plantsApi.ts)

### 2 уровень (необязательный)

-   [x] Используeтся TypeScript
-   [x] Используется Firebase.
-   [x] Настроен [CI / CD](https://github.com/itsannaw/gardena/blob/main/.github/workflows/cicd.yml)

### **Дополнительно**

-   [x] Проект собран при помощи Vite
-   [x] Для работы со стилями использовался NextUI и TailwindCSS.
-   [x] Для форматирования даты использовался date-fns.
-   [x] Для валидации форм - zod.
