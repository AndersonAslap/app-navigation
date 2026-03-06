# 📚 Implementando Navegação em Aplicações React Native com React Navigation

---

## 🧠 Introdução

Em aplicações mobile modernas, a **navegação entre telas** é um dos elementos mais importantes da experiência do usuário. Diferente de aplicações web tradicionais, onde a navegação ocorre por meio de URLs, aplicativos mobile utilizam **estruturas de navegação internas** para alternar entre telas.

No ecossistema **React Native**, a solução mais utilizada para gerenciar navegação é o **React Navigation**.

Neste material você aprenderá:

* O que é **React Navigation**
* Como **instalar e configurar** a biblioteca em um projeto **Expo**
* O papel das dependências utilizadas
* Como preparar o projeto para utilizar **Stack Navigation**
* Como gerar uma nova **build quando bibliotecas nativas são adicionadas**

Este guia aborda a **configuração inicial da navegação**, preparando o ambiente para começar a implementar fluxos entre telas.

---

## 📖 Conceitos Fundamentais

Antes de iniciar a instalação, é importante entender alguns conceitos essenciais.

### React Navigation

O **React Navigation** é uma biblioteca que permite gerenciar **navegação entre telas** em aplicações React Native.

Com ele é possível implementar diferentes tipos de navegação:

* **Stack Navigation** (pilha de telas)
* **Tab Navigation** (abas)
* **Drawer Navigation** (menu lateral)

A biblioteca funciona através de **navegadores (navigators)** que controlam como as telas são organizadas e exibidas.

---

### Stack Navigation

A **Stack Navigation** funciona como uma **pilha de telas**.

O comportamento é semelhante ao histórico de navegação de um navegador:

* Uma nova tela é **empilhada**
* Ao voltar, a tela atual é **removida da pilha**

Exemplo de fluxo:

```
Home → Detalhes → Pagamento
```

Ao voltar:

```
Pagamento → Detalhes → Home
```

Esse padrão é extremamente comum em aplicações mobile.

---

### Dependências utilizadas

Durante a configuração do React Navigation, algumas bibliotecas adicionais são necessárias.

#### @react-navigation/native

Contém **o núcleo do React Navigation**.

Ele fornece:

* gerenciamento de navegação
* contexto de navegação
* utilitários principais

---

#### react-native-screens

Essa biblioteca otimiza o gerenciamento de telas no React Native.

Benefícios:

* melhora a performance
* utiliza componentes nativos para renderização de telas
* reduz consumo de memória

---

#### react-native-safe-area-context

Alguns dispositivos possuem **áreas não seguras da tela**, como:

* notch do iPhone
* bordas arredondadas
* áreas reservadas do sistema

Essa biblioteca garante que o conteúdo fique dentro das **safe areas**.

Exemplo:

```
┌────────────────────────┐
│  Notch do dispositivo  │
│                        │
│   Conteúdo do app      │
│                        │
└────────────────────────┘
```

---

#### @react-navigation/native-stack

Implementa o **Stack Navigator utilizando APIs nativas**, oferecendo:

* melhor performance
* animações mais fluidas
* comportamento mais próximo de apps nativos

---

#### @react-navigation/elements

Biblioteca que fornece **componentes visuais utilizados pelo React Navigation**, como:

* headers
* botões
* layouts de navegação

---

## 🔎 Explicação Detalhada

### 1️⃣ Instalando o React Navigation Core

O primeiro passo é instalar o **núcleo da biblioteca**.

```bash
npm install @react-navigation/native
```

Esse pacote fornece toda a base do sistema de navegação.

---

### 2️⃣ Instalando dependências essenciais

Agora precisamos instalar duas bibliotecas importantes:

* gerenciamento de telas
* suporte a áreas seguras

Quando usamos **Expo**, devemos utilizar:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

O comando `expo install` garante que as versões instaladas sejam **compatíveis com o SDK do Expo**.

---

### 3️⃣ Instalando Stack Navigation

Agora instalamos o navegador do tipo **Stack**.

```bash
npm install @react-navigation/native-stack
```

Esse pacote permite criar navegação baseada em pilha de telas.

---

### 4️⃣ Instalando componentes do React Navigation

Também instalamos a biblioteca de elementos visuais:

```bash
npm install @react-navigation/elements
```

Ela contém componentes utilizados pelo sistema de navegação.

---

### 5️⃣ Atualizando a build do aplicativo

Quando adicionamos bibliotecas que possuem **código nativo**, precisamos gerar uma nova build.

No iOS:

```bash
npx expo run:ios
```

No Android:

```bash
npx expo run:android
```

Isso recompila o aplicativo incluindo as novas dependências nativas.

---

### 6️⃣ Por que precisamos recompilar?

Algumas bibliotecas possuem **código nativo** (Java/Kotlin ou Objective-C/Swift).

Quando isso acontece:

1. O código precisa ser integrado ao projeto nativo
2. O aplicativo precisa ser recompilado

Após essa etapa, o desenvolvimento volta a ocorrer normalmente usando **JavaScript/TypeScript**.

---

### 7️⃣ Rodando o projeto em múltiplos dispositivos

Após gerar a build, é possível executar o app em diferentes ambientes.

Exemplo:

* **iOS Simulator**
* **Android Emulator**

Quando o código JavaScript é atualizado, basta recarregar o bundle:

```
R
```

O aplicativo será atualizado simultaneamente nos dois dispositivos.

---

## 💡 Exemplos práticos

### Estrutura de instalação completa

```bash
npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

npm install @react-navigation/elements
```

---

### Executando o app no iOS

```bash
npx expo run:ios
```

---

### Executando o app no Android

```bash
npx expo run:android
```

---

### Recarregando o app

Durante o desenvolvimento:

```
Pressione R
```

Isso recarrega o **bundle JavaScript** sem recompilar o app.

---

## ⚠️ Pontos importantes

Alguns detalhes merecem atenção durante a configuração.

### 1️⃣ Use `expo install` quando estiver usando Expo

Isso evita problemas de compatibilidade.

---

### 2️⃣ Rebuild apenas quando necessário

A recompilação do app só é necessária quando:

* novas bibliotecas nativas são instaladas
* código nativo é modificado

Caso contrário, apenas recarregar o app é suficiente.

---

### 3️⃣ Navegação é baseada em JavaScript

Depois que o ambiente está configurado, toda a navegação é implementada com **JavaScript**, sem necessidade de mexer novamente em código nativo.

---

### 4️⃣ Stack Navigation é o padrão mais utilizado

Grande parte dos aplicativos utiliza stack navigation para fluxos como:

* login
* cadastro
* navegação entre páginas

---

## 📝 Resumo do conteúdo

Neste material aprendemos como configurar a navegação em um projeto React Native utilizando **React Navigation**.

Principais etapas:

1. Instalar o **core do React Navigation**
2. Instalar dependências necessárias
3. Configurar **Stack Navigation**
4. Recompilar o app após instalar bibliotecas nativas
5. Executar o aplicativo no **Android e iOS**

Após essa configuração inicial, o projeto está pronto para começar a **implementar a navegação entre telas**.

---

## 🎯 Perguntas para revisão

1. Qual é a função da biblioteca **@react-navigation/native**?
2. Para que serve o **react-native-safe-area-context**?
3. Qual a diferença entre **Stack Navigation** e outros tipos de navegação?
4. Por que precisamos executar `npx expo run:ios` ou `run:android` após instalar certas bibliotecas?
5. Qual a vantagem de usar `expo install` em vez de `npm install` em projetos Expo?

---

## 📌 Conclusão

A implementação da navegação é um passo essencial no desenvolvimento de aplicações mobile.

Com o **React Navigation**, conseguimos criar fluxos de telas organizados, performáticos e alinhados com os padrões das plataformas móveis.

Ao configurar corretamente:

* o **core da biblioteca**
* as **dependências nativas**
* o **Stack Navigator**

o projeto fica preparado para construir experiências completas de navegação entre telas.

Nas próximas etapas do desenvolvimento, a navegação será implementada diretamente em **JavaScript**, permitindo criar transições entre telas de forma simples e poderosa.