# Notas de Estudo 🧠

---

### 📖 Dicionário

- **https** - Hyper Text Transfer Protocol Secure
- **tag** - Elemento do HTML envolto de <>
  - Para ser fechada é usado />;
  - Pode ser fechada em si mesma ou a parte, a depender se recebe conteúdo
    **Ex**

    ```
    <p>
      paragrafo
    </p> /*precisa de uma tag para fechar*/

    <img src="" /> /*fechada em si mesma, não possui conteúdo*/
    ```

  - Pode receber atributos;

---

## HTML

### Passos para Criar e Configurar um Arquivo HTML

- Escreva "!" e altere o lang (linguagem do site) para "pt-br"
- Adicione a tag _link_ abaixo do _title_ para associar o arquivo de estilo css ao html
  ```
    <link rel="stylesheet" href="style.css" />)
  ```

### Display: block ou inline

No HTML tudo é formado por caixinhas.
Cada caixinha pode ser exibida logo ao lado (inline) ou abaixo (block)
As tags possuem uma forma de exibição já definida.

**Ex:**

1. `h1, p, div` são exibidos em Block, ou seja, um abaixo do outro;
2. `span, img` é exibido em linha.
