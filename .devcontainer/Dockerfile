FROM node:20-bullseye-slim

# Instala dependências do sistema necessárias para o Cypress
RUN apt-get update && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Copia os arquivos de configuração do npm e do projeto
COPY package.json package-lock.json* ./

# Instala dependências do Node.js
RUN npm install

# Copia o restante do código
COPY . .