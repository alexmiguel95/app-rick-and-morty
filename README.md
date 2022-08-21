<h1 align="left">Rick and Morty</h1>

###


Aplicativo construído em React Native que consome a api pública do [Rick and Morty](https://rickandmortyapi.com/documentation/#rest) listando os detalhes de cada personagem.

![](demonstration.gif)
*********************************************************************************************************

&nbsp;

###

<h2 align="left">API</h2>

###

https://rickandmortyapi.com/documentation/#rest

###

&nbsp;
&nbsp;

<h2 align="left">TECNOLOGIAS</h2>

*  React Native
*  TypeScript
*  Expo
*  Axios
*  Styled Components
###
&nbsp;
<h2 align="left">REQUISITOS</h2>
Criar um aplicativo utilizando React Native com Typescript onde possamos:

* Listar todos os personagens do desenho Rick and Morty mostrando a foto e nome de cada personagem
* Ao clicar em um dos itens da lista, deve mostrar um modal com mais detalhes do personagem

&nbsp;

<h2 align="left">EXECUTAR O PROJETO</h2>

> **Requisitos para rodar o projeto** 
> * YARN
> * NODE


```bash
# Clone o projeto em sua máquina
$ git clone https://github.com/alexmiguel95/app-rick-and-morty.git

# Acesse a pasta do projeto no seu terminal
$ cd rick-and-morty

# Instale as dependências
$ yarn
```

> **Dispositivos físicos**

1 - Instale o aplicativo **Expo Go** no aparelho
[Google Play](https://play.google.com/store/search?q=expo+go&c=apps&hl=pt_BR&gl=US) | 
[Apple Store](https://apps.apple.com/br/app/expo-go/id982107779)

2 - No computador acesse a pasta do projeto pelo terminal, `cd rick-and-morty`, e digite `npx expo start`, ele deve gerar um QR code no terminal.

3 - Com o dispositivo físico conectado na mesma rede que o computador, abra o aplicativo **Expo Go** e escaneie o QR code. O aplicativo será instalado no celular,
&nbsp;
&nbsp;

<div align="left">
</div>

###

<div align="left">
</div>

###
&nbsp;
&nbsp;
<div align="left">
  <a href="https://www.linkedin.com/in/alexmiguel95/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>
</div>

###

&nbsp;
## Pontos de melhoria

- [x] Melhorar a performance da listagem de personagens adicionando infinite scroll na listagem para que não puxe todos os personagens de um só vez