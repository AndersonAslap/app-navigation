# Comandos

```bash
npx create-expo-app --template
choose a template: Blank (Bare) # Já traz um projeto com expo pré-build
whats is your name app named? app-navigation
```

> Rodar a aplicação

```bash
npx expo run:android
```

# Configurações

mudar o arquivo App.js para App.tsx e executar a aplicação 
assim que é executado o expo pergunta se é um projeto typescript 
e se deseja instalar o typescript, se sim, ele instala e configura 
o projeto para typescript.

# Erros

## Estava tendo erro na hora de executar a aplicação
npx expo run:android

---

# ✅ Solução

Abra o arquivo:

```text
android/gradle/wrapper/gradle-wrapper.properties
```

Troque a linha para:

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-bin.zip
```

ou

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-all.zip
```

As duas funcionam.
Diferença:

* **bin** → mais leve (recomendado)
* **all** → inclui documentação e sources

---

## Tive outro erro

SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file

Agora o erro mudou — **o Gradle está funcionando**, mas o **Android SDK não está configurado** no seu projeto.

O erro principal é este:

```
SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file
```

Ou seja, o **Gradle não sabe onde está o Android SDK instalado no seu computador**.

---

# ✅ Solução mais rápida (recomendada)

Crie ou edite o arquivo:

```
android/local.properties
```

Dentro dele coloque o caminho do seu **Android SDK**.

Normalmente no Windows é:

```
sdk.dir=C:\\Users\\ander\\AppData\\Local\\Android\\Sdk
```

⚠️ Observações importantes:

* Use **duas barras `\\`**
* O arquivo deve ficar exatamente aqui:

```
app-navigation
 ├─ android
 │   ├─ app
 │   ├─ build.gradle
 │   ├─ local.properties  ← AQUI
```