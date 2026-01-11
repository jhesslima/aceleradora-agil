# 📷 Busca de Fotos

Um aplicativo web simples e elegante para buscar fotos pelo nome em tempo real.

## ✨ Funcionalidades

- 🔍 Busca em tempo real enquanto digita
- 🧹 Botão para limpar a pesquisa
- 📱 Design responsivo (funciona em celular e desktop)
- ⚡ Interface rápida e leve
- 🎨 Tema preto e branco minimalista

## 🚀 Como usar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/aceleradora.git
```

2. Entre na pasta do projeto:
```bash
cd aceleradora
```

3. Abra o arquivo `index.html` no navegador ou use o Live Server do VS Code.

## 📁 Estrutura do Projeto

```
aceleradora/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos do site
├── js/
│   ├── app.js          # Lógica da aplicação
│   └── photos-data.js  # Banco de dados das fotos
├── images/             # Pasta com as imagens
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── ...
└── README.md           # Este arquivo
```

## 🎯 Como Funciona

1. Digite o nome da foto na barra de busca
2. Os resultados aparecem automaticamente enquanto você digita
3. Clique no **X** para limpar a busca
4. Clique na **lupa** para buscar novamente

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Lógica de busca e interatividade

## 📝 Personalizando

### Adicionar mais fotos:

1. Adicione a imagem na pasta `images/`
2. Edite `js/photos-data.js` e adicione um novo objeto:

```javascript
{
    id: 11,
    title: "Nome da sua foto",
    url: "./images/foto11.jpg"
}
```

### Alterar cores:

Edite o arquivo `css/style.css` e modifique as cores conforme sua preferência.

## 📦 Como subir para o GitHub

1. **Inicialize o repositório Git:**
```bash
git init
```

2. **Adicione todos os arquivos:**
```bash
git add .
```

3. **Faça o primeiro commit:**
```bash
git commit -m "Primeiro commit: Aplicativo de busca de fotos"
```

4. **Crie um repositório no GitHub** (acesse github.com e clique em "New repository")

5. **Conecte seu repositório local ao GitHub:**
```bash
git remote add origin https://github.com/seu-usuario/aceleradora.git
```

6. **Envie o código:**
```bash
git branch -M main
git push -u origin main
```

## 🌐 Deploy (Hospedar online)

Para hospedar gratuitamente, use uma dessas opções:

- **GitHub Pages**: Vá em Settings > Pages > Source: main branch
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com

## 👤 Autor

**Jéssica Mendes de Lima**
---

⭐ Se gostou do projeto, deixe uma estrela no repositório!