# 🔧 Conexão do Sensor de Umidade do Solo ao Arduino UNO:

VCC do sensor -> 5V do Arduino

GND do sensor -> GND do Arduino

A0 do sensor  -> A0 do Arduino

### 💡 Observações:

O pino A0 permite medir o nível de umidade com precisão (valor analógico entre 0 e 1023), o que é ideal para automações que ativam a irrigação com base em umidade abaixo de um limite.

Se o sensor tiver também um pino D0 (digital), ele pode ser ignorado nesse caso, já que estamos usando leitura analógica.

>Conecte o Arduino no seu computador e acesse o Arduino IDE para começar a diversão!

# Escrevendo o código e conectando o Arduino ao Firebase

## 🧠 O que o código precisa fazer:
Ler o valor da umidade no pino A0.

Conectar-se ao Wi-Fi.

Enviar esse valor para o Firebase Realtime Database.

## 🧰 Pré-requisitos:
Placa: Arduino UNO com ESP8266 (NodeMCU ou ESP-01) ou Arduino + módulo ESP-01.

Sensor de umidade com saída analógica (A0).

Conta e projeto configurado no Firebase com Realtime Database habilitado (está em https://github.com/jairrogerr/Germinah-edu/blob/main/docs/firebase-config.md).

Biblioteca FirebaseESP8266 (ou FirebaseArduino, mas a primeira é mais atual).

Dados de Wi-Fi e credenciais do Firebase.

## 📦 Instale no Arduino IDE:
Vá em Sketch > Include Library > Manage Libraries

Instale:

Firebase ESP8266 by Mobizt

ESP8266WiFi (já vem se estiver usando NodeMCU)

## ✅ Código exemplo (com Firebase Realtime Database):
```
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>

// Credenciais do Wi-Fi
const char* ssid = "SEU_WIFI";
const char* password = "SENHA_DO_WIFI";

// Dados do Firebase
#define FIREBASE_HOST "seu-projeto.firebaseio.com"
#define FIREBASE_AUTH "sua_chave_secreta_do_database"

// Objeto Firebase
FirebaseData firebaseData;

int pinoSensor = A0;
int valorUmidade;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Conectando ao Wi-Fi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConectado ao Wi-Fi");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
}

void loop() {
  valorUmidade = analogRead(pinoSensor);
  Serial.print("Umidade do Solo: ");
  Serial.println(valorUmidade);

  if (Firebase.setInt(firebaseData, "/germinah/umidade", valorUmidade)) {
    Serial.println("Dados enviados com sucesso.");
  } else {
    Serial.print("Erro ao enviar: ");
    Serial.println(firebaseData.errorReason());
  }

  delay(5000); // Espera 5 segundos antes de enviar novamente
}
```

## 🛠️ Coisas que você pode mudar:
"/germinah/umidade" → pode ser alterado para /horta1/umidade, /dados/solo, etc.

delay(5000) → muda o intervalo de envio.

valorUmidade → pode normalizar para porcentagem (mapear 0–1023 para 0–100%).