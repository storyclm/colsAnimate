# colsAnimate

Предназначение - анимация роста столбцов гистограмм или графиков

### Версия
1.0.0

### Подключение

```sh
<script src="js/jquery.colsAnimate.js"></script>
<link rel="stylesheet" type="text/css" href="css/jquery.colsAnimate.css">
```
----
### Пример использования

#### Верстка
```
<div class="graph">
    <div class="col-1 col1 col" data-col="1"></div>
    <div class="col-2 col1 col" data-col="2"></div>
    <div class="col-3 col1 col" data-col="3"></div>
    <div class="col-4 col1 col" data-col="4"></div>

    <div class="value v1" data-val="160" data-col="1">0</div>
    <div class="value v2" data-val="180" data-col="2">0</div>
    <div class="value v3" data-val="210" data-col="3">0</div>
    <div class="value v4" data-val="220" data-col="4">0</div>
</div>
```
В вёрстке необходимо указать: 
* класс `col` для каждого столбца
* класс `value` для каждого значения столбца
* атрибут `data-col` для каждого столбца и соответсующего ему значению
* атрибут `data-val` для каждого значения, равный значению столбца

#### Вызов функции
```
$('.col1').colsAnimate({
    animDelay: 500,
    animSpeed: 500
});
```
----
###Параметры
* **animDelay** - задержка анимации между ростом каждого столбца. Значение по умолчанию - `500`
    
* **animSpeed** - скорость анимации. Значение по умолчанию - `500`

* **animDirection** - направление анимации. Значение по умолчанию - `up`. Допустимые значения - `up, down, left, right`

* **parentHeight** - высота родительского элемента. Значение по умолчанию - `auto`.

* **parentWidth** - ширина родительского элемента. Значение по умолчанию - `auto`.

* **valueStep** - шаг роста значения. Значение по умолчанию - `10`.
