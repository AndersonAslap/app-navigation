Aqui está uma **versão melhorada do seu README**, mantendo **todo o conteúdo original**, mas com:

* melhor **organização**
* **hierarquia de títulos**
* explicações mais claras
* padronização de blocos de código
* melhor legibilidade

---

# 📱 App Navigation (Expo + React Navigation)

Este projeto demonstra a implementação dos principais tipos de navegação no **React Native com Expo**, utilizando o **React Navigation**.

Navegações abordadas:

* **Stack Navigation**
* **Bottom Tabs Navigation**
* **Drawer Navigation**

---

# 🚀 Criação do Projeto

Execute o comando abaixo para criar o projeto utilizando o template **Blank (Bare)**.

```bash
npx create-expo-app --template
```

Durante a criação selecione:

```
choose a template: Blank (Bare) # Já traz um projeto com expo pré-build
```

Depois informe o nome do projeto:

```
whats is your name app named? app-navigation
```

---

# ▶️ Rodando a Aplicação

Para executar a aplicação no Android:

```bash
npx expo run:android
```

---

# 📦 Instalando React Navigation

O pacote principal do React Navigation é:

```bash
npm install @react-navigation/native
```

Esse pacote contém **a funcionalidade central do React Navigation**.

---

## Dependências adicionais

Em seguida instale as dependências usadas pela maioria dos navegadores:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

Essas bibliotecas são responsáveis por:

* **react-native-screens** → melhora a performance das telas
* **react-native-safe-area-context** → lida com áreas seguras da tela (notch, barra de status, etc.)

O Expo instalará **versões compatíveis com o SDK atual**.

---

# 🧭 Implementando Stack Navigation

Para utilizar o **Stack Navigation**, instale o pacote:

```bash
npm install @react-navigation/native-stack
```

A **native-stack** é **mais performática** do que a stack tradicional.

---

## Dependência adicional

A biblioteca abaixo fornece componentes utilizados pelo React Navigation.

```bash
npm install @react-navigation/elements
```

---

## Configurando TypeScript Strict Mode

Para que o React Navigation funcione corretamente com tipagens, é recomendado ativar o **strict mode** no TypeScript.

No arquivo **tsconfig.json**:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

---

# 📑 Implementando Bottom Tabs Navigation

Instale o pacote:

```bash
npm install @react-navigation/bottom-tabs
```

Esse tipo de navegação cria **abas na parte inferior da aplicação**.

---

# 📂 Implementando Drawer Navigation

Instale o pacote:

```bash
npm install @react-navigation/drawer
```

---

## Dependências obrigatórias do Drawer

Para que o **Drawer Navigation** funcione corretamente, é necessário instalar algumas dependências adicionais:

```bash
npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
```

Essas bibliotecas são responsáveis por:

* **gestos**
* **animações**
* **interações de arrastar**

---

## Importante

Quando utilizar o **Drawer**, é necessário importar o `gesture-handler` no arquivo principal da aplicação.

```ts
import "react-native-gesture-handler";
```

Normalmente no arquivo:

```
App.tsx
```

---

# ⚙️ Configurações

## Adicionando TypeScript

Para adicionar **TypeScript** ao projeto:

1. Renomeie o arquivo:

```
App.js → App.tsx
```

2. Execute novamente a aplicação.

O **Expo detectará automaticamente** que o projeto deseja usar TypeScript e perguntará:

```
Deseja instalar o TypeScript?
```

Se confirmar:

* o Expo instala
* configura automaticamente o projeto

---

# 🐞 Erros encontrados

## ❌ Erro ao executar

```bash
npx expo run:android
```

---

# ✅ Solução

Abra o arquivo:

```
android/gradle/wrapper/gradle-wrapper.properties
```

Altere a linha para:

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-bin.zip
```

ou

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-all.zip
```

Ambas funcionam.

### Diferença entre elas

| Versão  | Descrição                     |
| ------- | ----------------------------- |
| **bin** | Mais leve (recomendado)       |
| **all** | Inclui documentação e sources |

---

# ❌ Outro erro encontrado

```
SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file
```

Agora o erro mudou.

Isso significa que:

✅ **Gradle está funcionando**

❌ **Android SDK não está configurado**

O Gradle **não consegue localizar o Android SDK instalado no computador**.

---

# ✅ Solução mais rápida (recomendada)

Crie ou edite o arquivo:

```
android/local.properties
```

Adicione o caminho do **Android SDK**.

No Windows normalmente é:

```
sdk.dir=C:\\Users\\ander\\AppData\\Local\\Android\\Sdk
```

---

## ⚠️ Observações importantes

* Use **duas barras `\\`**
* O arquivo deve ficar exatamente nesta estrutura:

```
app-navigation
 ├─ android
 │   ├─ app
 │   ├─ build.gradle
 │   ├─ local.properties  ← AQUI
```

---

✅ Com isso o projeto deve executar normalmente no Android.

---

Se quiser, também posso te mostrar **3 melhorias que fazem seu README parecer de projeto open source profissional no GitHub** (badge, preview da aplicação e estrutura de pastas).
