# Iot-Door

## Install

### Clone

```shell
git clone https://github.com/akiicat/iot-door.git
cd iot-door
npm install
```

### GCP Key file

```shell
cp [YOUR_KEY_PATH] ./key.json
```

### Run

```shell
npm start
```

### Motor Install

```shell
sudo cp -f bin/motor /usr/bin/
```

### Auto Run

```shell
sudo cp door.service /lib/systemd/system/
```

And modify path to absoluted path

```shell
sudo systemctl start door
sudo systemctl enable door.service
```

```shell
sudo reboot
```

