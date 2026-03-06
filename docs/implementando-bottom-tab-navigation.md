# 📚 Implementando Navegação com Bottom Tabs no React Native (React Navigation)

---

## 🧠 Introdução

Ao desenvolver aplicações mobile, é comum precisarmos de diferentes formas de navegação entre telas. Em muitos aplicativos modernos, especialmente aqueles que possuem várias áreas principais (como **Home, Produtos, Perfil, Configurações**), um padrão muito utilizado é a **navegação por abas na parte inferior da tela**.

Esse padrão é conhecido como **Bottom Tabs Navigation**.

No ecossistema **React Native**, essa funcionalidade é implementada através da biblioteca **React Navigation**, utilizando o pacote:

```
@react-navigation/bottom-tabs
```

Neste material você aprenderá:

* O que é **Bottom Tabs Navigation**
* Como instalar o pacote necessário
* Como transformar uma navegação **Stack** em **Tabs**
* Como reutilizar código existente
* Como organizar tipagens e imports
* Como integrar a nova navegação ao aplicativo

Ao final, você terá uma estrutura de navegação funcional com **abas na parte inferior da aplicação**.

---

# 📖 Conceitos Fundamentais

## Stack Navigation

A **Stack Navigation** funciona como uma pilha de telas.

Cada nova tela é **empilhada** sobre a anterior.

Exemplo de fluxo:

```
Home → Produto → Detalhes
```

Ao voltar:

```
Detalhes → Produto → Home
```

Esse modelo é muito utilizado para **fluxos sequenciais**, como:

* cadastro
* checkout
* formulários

---

## Bottom Tabs Navigation

Já a **Bottom Tabs Navigation** apresenta **abas na parte inferior da tela**, permitindo acesso rápido às principais seções do aplicativo.

Exemplo comum em aplicativos:

```
[Home]   [Produtos]   [Favoritos]   [Perfil]
```

Cada aba representa **uma rota principal da aplicação**.

Esse tipo de navegação é amplamente utilizado em apps como:

* Instagram
* WhatsApp
* Spotify
* Uber

---

## React Navigation Bottom Tabs

O React Navigation disponibiliza um pacote específico para esse tipo de navegação:

```
@react-navigation/bottom-tabs
```

Ele permite criar um **Tab Navigator**, responsável por controlar:

* as abas exibidas
* as telas associadas a cada aba
* o comportamento de navegação

---

# 🔎 Explicação Detalhada

## 1️⃣ Instalando a navegação por abas

Primeiro precisamos instalar o pacote responsável pelas **Bottom Tabs**.

```bash
npm install @react-navigation/bottom-tabs
```

Como as dependências principais do React Navigation já foram instaladas anteriormente, **não é necessário reconstruir o aplicativo**.

Após a instalação, o pacote já pode ser utilizado imediatamente.

---

# 2️⃣ Reaproveitando a estrutura da navegação Stack

Em vez de criar tudo do zero, uma estratégia eficiente é **duplicar o arquivo de navegação Stack existente**.

Exemplo:

Arquivo original:

```
stack.routes.tsx
```

Criamos uma cópia:

```
bottom.routes.tsx
```

Isso permite **reaproveitar a mesma estrutura**, alterando apenas os pontos necessários.

Essa abordagem economiza tempo e evita erros.

---

# 3️⃣ Criando o Bottom Tab Navigator

No Stack Navigator usamos:

```javascript
createNativeStackNavigator()
```

Para Tabs utilizamos:

```javascript
createBottomTabNavigator()
```

Exemplo:

```javascript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
```

Agora temos um **Tab Navigator** que controlará as abas do aplicativo.

---

# 4️⃣ Substituindo Stack por Tab

No arquivo duplicado, substituímos todas as ocorrências de **Stack** por **Tab**.

Antes:

```javascript
<Stack.Navigator>
```

Depois:

```javascript
<Tab.Navigator>
```

Antes:

```javascript
<Stack.Screen />
```

Depois:

```javascript
<Tab.Screen />
```

Exemplo completo:

```javascript
<Tab.Navigator>

  <Tab.Screen
    name="home"
    component={Home}
  />

  <Tab.Screen
    name="products"
    component={Products}
  />

</Tab.Navigator>
```

Agora cada tela será exibida como uma **aba inferior**.

---

# 5️⃣ Ajustando as tipagens

Se o projeto estiver utilizando **TypeScript**, é importante ajustar as tipagens.

Antes:

```typescript
NativeStackScreenProps
```

Depois:

```typescript
BottomTabScreenProps
```

Isso garante que os tipos utilizados sejam compatíveis com a navegação por abas.

---

# 6️⃣ Padronizando nomes

Para manter o código organizado, é importante atualizar os nomes utilizados.

Exemplo:

Antes:

```
StackRoutes
```

Depois:

```
BottomRoutes
```

Ou:

```
BottomTabRoutes
```

Isso evita confusão entre diferentes tipos de navegação no projeto.

---

# 7️⃣ Atualizando o arquivo principal de rotas

No arquivo principal da aplicação (geralmente `index.tsx` ou `routes/index.tsx`), substituímos a navegação Stack pela navegação Tabs.

Antes:

```javascript
import { StackRoutes } from './stack.routes'

<StackRoutes />
```

Depois:

```javascript
import { BottomRoutes } from './bottom.routes'

<BottomRoutes />
```

Após salvar, o aplicativo já exibirá as **abas inferiores**.

---

# 8️⃣ Resultado da navegação

Agora a aplicação apresentará abas na parte inferior da tela.

Exemplo visual:

```
--------------------------------
|                              |
|        Tela Atual            |
|                              |
--------------------------------
|   Home   |   Produtos        |
--------------------------------
```

Ao clicar nas abas, a navegação acontece automaticamente.

---

# 💡 Exemplos práticos

## Exemplo básico de Bottom Tabs

```javascript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export function BottomRoutes() {

  return (
    <Tab.Navigator>

      <Tab.Screen
        name="home"
        component={Home}
      />

      <Tab.Screen
        name="products"
        component={Products}
      />

    </Tab.Navigator>
  )
}
```

---

## Navegação entre abas

Se o usuário clicar em **Produtos**, a aplicação muda de tela.

```
Home → Produtos
```

Se clicar novamente em **Home**, volta para a tela inicial.

Esse comportamento é automático.

---

## Navegação programática

Também é possível navegar via código:

```javascript
navigation.navigate("products")
```

Esse comando abre a aba **Produtos**.

---

# ⚠️ Pontos importantes

### 1️⃣ Stack e Tabs podem coexistir

Uma aplicação pode utilizar **Stack Navigation dentro de Tabs**.

Exemplo comum:

```
Tabs
 ├── Home (Stack)
 ├── Produtos (Stack)
 └── Perfil (Stack)
```

Isso permite fluxos complexos.

---

### 2️⃣ A estrutura das rotas é quase idêntica

A principal diferença entre **Stack** e **Tabs** é apenas o **navigator utilizado**.

Por isso copiar o arquivo Stack e adaptar é uma boa prática.

---

### 3️⃣ A navegação continua usando o objeto `navigation`

Mesmo usando Tabs, o objeto continua funcionando da mesma forma:

```javascript
navigation.navigate("home")
```

---

### 4️⃣ Manter nomes consistentes melhora a organização

Padronizar nomes como:

```
BottomRoutes
BottomTabProps
BottomNavigation
```

facilita a manutenção do código.

---

# 📝 Resumo do conteúdo

Neste material aprendemos como implementar **navegação por abas inferiores** utilizando React Navigation.

Principais etapas:

1️⃣ Instalar o pacote

```
@react-navigation/bottom-tabs
```

2️⃣ Duplicar a estrutura da navegação Stack

3️⃣ Substituir:

```
createNativeStackNavigator
```

por

```
createBottomTabNavigator
```

4️⃣ Alterar:

```
Stack.Navigator → Tab.Navigator
Stack.Screen → Tab.Screen
```

5️⃣ Ajustar tipagens e nomes

6️⃣ Importar a nova navegação no arquivo principal do projeto

Ao final, o aplicativo passa a possuir **navegação por abas na parte inferior da tela**.

---

# 🎯 Perguntas para revisão

1️⃣ Qual biblioteca do React Navigation permite criar navegação por abas inferiores?

2️⃣ Qual função é utilizada para criar o navegador de Tabs?

3️⃣ Qual a diferença conceitual entre **Stack Navigation** e **Bottom Tabs Navigation**?

4️⃣ Por que duplicar o arquivo Stack pode facilitar a implementação de Tabs?

5️⃣ O objeto `navigation` continua funcionando ao utilizar Bottom Tabs?

---

# 📌 Conclusão

A **Bottom Tabs Navigation** é um dos padrões mais utilizados em aplicativos mobile, pois facilita o acesso rápido às principais áreas da aplicação.

Com o **React Navigation**, implementar esse tipo de navegação é simples, bastando instalar o pacote adequado e criar um **Tab Navigator**.

Além disso, como a estrutura é muito semelhante à Stack Navigation, podemos reutilizar grande parte do código existente, tornando o desenvolvimento mais rápido e organizado.

Com essa estrutura configurada, o próximo passo normalmente envolve:

* adicionar **ícones nas abas**
* personalizar o **estilo da barra inferior**
* combinar **Tabs com Stack Navigation**

Essas técnicas permitem criar **experiências de navegação completas e profissionais em aplicações React Native**.
