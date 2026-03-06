# 📚 Navegação Drawer no React Native com Expo

---

## 🧠 Introdução

Ao desenvolver aplicações mobile com **React Native**, uma das necessidades mais comuns é organizar a navegação entre telas.

Existem diversos tipos de navegação disponíveis, e entre os mais utilizados estão:

* **Stack Navigation** → navegação em pilha
* **Bottom Tabs** → abas na parte inferior
* **Drawer Navigation** → menu lateral deslizante

Neste material vamos estudar a **Drawer Navigation**, um tipo de navegação muito usado em aplicativos modernos, onde um **menu lateral aparece ao deslizar a tela ou ao clicar em um botão**.

Esse padrão é bastante comum em aplicativos como:

* Gmail
* Facebook
* Aplicativos bancários
* Aplicativos corporativos

Ao final deste guia você entenderá:

* O que é **Drawer Navigation**
* Como instalar as dependências necessárias
* Como funciona o suporte a **gestos e animações**
* Como preparar o ambiente para usar essa navegação

---

# 📖 Conceitos Fundamentais

## O que é Drawer Navigation?

A **Drawer Navigation** é um tipo de navegação onde um **menu lateral deslizante** aparece na tela.

Esse menu normalmente contém links para diferentes seções do aplicativo.

Características principais:

* Abre lateralmente
* Possui **animação suave**
* Pode ser aberto:

  * arrastando o dedo
  * clicando em um botão
* Geralmente aparece **à esquerda da tela**

---

### Estrutura visual do Drawer

```
-------------------------
| ☰  App Title          |
|-----------------------|
|                       |
|   Conteúdo da Tela    |
|                       |
|                       |
-------------------------

Ao abrir o menu:

-------------------------
| MENU | Conteúdo       |
|------|----------------|
| Home |                |
| Perfil               |
| Configurações        |
| Sobre                |
-------------------------
```

---

## Biblioteca utilizada

Para implementar o Drawer Navigation utilizamos a biblioteca:

```
@react-navigation/drawer
```

Ela faz parte do ecossistema **React Navigation**.

---

## Dependências adicionais

O Drawer precisa de algumas bibliotecas extras para funcionar corretamente:

| Biblioteca                   | Função                           |
| ---------------------------- | -------------------------------- |
| react-native-gesture-handler | Detectar gestos de arrastar      |
| react-native-reanimated      | Criar animações suaves           |
| react-native-worklets        | Executar animações performáticas |

Essas bibliotecas são responsáveis por permitir:

* arrastar o menu com o dedo
* animar a abertura
* animar o fechamento

---

# 🔎 Explicação Detalhada

## 1️⃣ Parando a aplicação

Antes de instalar novas dependências, é importante **parar a execução do projeto**.

Isso evita conflitos durante a instalação.

Exemplo:

```
CTRL + C
```

no terminal onde o app está rodando.

---

# 2️⃣ Instalando o Drawer Navigation

Agora instalamos a biblioteca responsável pelo menu lateral.

```bash
npm install @react-navigation/drawer
```

Essa biblioteca adiciona suporte ao **Drawer Navigator** dentro do React Navigation.

---

# 3️⃣ Instalando dependências obrigatórias

Para que o Drawer funcione corretamente, é necessário instalar bibliotecas adicionais.

```bash
npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
```

### react-native-gesture-handler

Responsável por detectar gestos como:

* arrastar
* deslizar
* pressionar

Sem essa biblioteca não seria possível abrir o Drawer **deslizando o dedo**.

---

### react-native-reanimated

Biblioteca responsável por criar **animações fluidas e performáticas**.

Ela permite:

* animação de abertura do menu
* animação de fechamento
* transições suaves

---

### react-native-worklets

Essa biblioteca permite executar lógica diretamente na **thread de UI**, melhorando a performance das animações.

---

# 4️⃣ Dependências nativas (iOS)

Quando bibliotecas que utilizam **código nativo** são instaladas, é necessário atualizar as dependências do iOS.

Dentro da pasta `ios`, execute:

```bash
pod install
```

Ou execute automaticamente usando:

```bash
npx pod-install
```

Esse processo conecta as bibliotecas nativas ao projeto.

---

# 5️⃣ Gerando uma nova build do aplicativo

Após instalar bibliotecas nativas, é necessário **recompilar o aplicativo**.

Execute:

```bash
npx expo run:ios
```

Esse comando:

1. gera uma nova build
2. integra as novas bibliotecas
3. executa novamente o aplicativo

---

# 💡 Exemplos práticos

## Exemplo de estrutura com Drawer

Uma aplicação pode ter a seguinte estrutura:

```
App
 ├── Drawer Navigator
 │
 ├── Home
 ├── Perfil
 ├── Configurações
 └── Sobre
```

---

### Exemplo básico de Drawer Navigator

```javascript
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}
```

Nesse exemplo:

* criamos um **Drawer Navigator**
* registramos as telas dentro dele
* o React Navigation cria automaticamente o menu lateral

---

# ⚠️ Pontos importantes

Alguns pontos devem ser observados ao usar Drawer Navigation.

### 1️⃣ Dependências obrigatórias

O Drawer **não funciona sem**:

* react-native-gesture-handler
* react-native-reanimated

---

### 2️⃣ Build obrigatória após instalar libs nativas

Após instalar dependências que utilizam código nativo é necessário:

```
rebuild do aplicativo
```

Exemplo:

```
npx expo run:ios
```

---

### 3️⃣ Funciona junto com outros navegadores

O Drawer pode ser combinado com:

* Stack Navigation
* Bottom Tabs

Essa é uma prática muito comum em aplicações reais.

---

# 📝 Resumo do conteúdo

Neste material aprendemos que:

* **Drawer Navigation** é um menu lateral deslizante
* Ele faz parte do **React Navigation**
* Para utilizá-lo é necessário instalar:

```
@react-navigation/drawer
```

e também:

```
react-native-gesture-handler
react-native-reanimated
react-native-worklets
```

Também vimos que:

* gestos permitem abrir e fechar o menu
* animações deixam a experiência mais fluida
* bibliotecas nativas exigem **rebuild do app**

---

# 🎯 Perguntas para revisão

1️⃣ O que é Drawer Navigation?

2️⃣ Qual biblioteca principal é usada para implementar Drawer Navigation?

3️⃣ Qual biblioteca é responsável por detectar gestos?

4️⃣ Qual biblioteca cria as animações do Drawer?

5️⃣ Por que é necessário recompilar o aplicativo após instalar algumas dependências?

---

# 📌 Conclusão

A **Drawer Navigation** é um padrão muito utilizado em aplicações mobile por permitir organizar várias funcionalidades dentro de um **menu lateral acessível e intuitivo**.

No React Native, sua implementação é simples graças ao **React Navigation**, mas exige algumas dependências extras para lidar com **gestos e animações**.

Com o conhecimento apresentado neste material, você já possui a base necessária para:

* instalar o Drawer Navigator
* configurar suas dependências
* preparar o ambiente para utilizá-lo em projetos React Native com Expo.

Esse tipo de navegação é amplamente utilizado em **aplicativos profissionais**, tornando-se um recurso essencial no desenvolvimento mobile moderno.