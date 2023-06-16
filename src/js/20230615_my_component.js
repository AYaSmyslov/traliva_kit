#USAGE_BEGIN#traliva_kit_debug##
registerHelp('$20230615MyComponent', {
    title: 'краткого описания нет',
    //descr: '',
    //options:{},
    //stateObj:{}
});
#USAGE_END#traliva_kit_debug##


function $20230615MyComponent($p_wContainer, $p_options, $p_widgets){
	$Traliva.$WidgetStateSubscriber.call(this, $p_wContainer, $p_options, $p_widgets);
	this.$options = $p_options;
	this.$wConpainer = $p_wContainer;

	$p_wContainer.$_onResized = (function($self){
		return function($w, $h){
			$self.$w = $w;
			$self.$h = $h;
			$self.$_update();
		}
	})(this);
	
	$p_wContainer.$setContent(this.$e = document.createElement('canvas'));

	this.$e.width += 100; // Место для текста справа
//	this.$chart = new Chart(this.$e, {
//		type: $p_options.$type,
//		options: $p_options.$options,
//		plugins: $p_options.$plugins
	//});
//	const canvas = document.getElementById('canvas');
/*	this.$e.width += 100; // Место для текста справа
	const ctx = this.$e.getContext('2d');
const barHeight = 40;
const barMargin = 0;
const labelMargin = 5;


ctx.clearRect(0, 0, this.$e.width, this.$e.height);

const textWidth = 100;

// Текст слева
ctx.fillStyle = '#000';
ctx.textAlign = 'start';
ctx.textBaseline = 'middle';
ctx.fillText(data.labels[0], 10, this.$e.height / 2);

data.datasets.forEach((dataset, i) => {
  const barX = barMargin;
  const barY = (barHeight + barMargin) * i;

    // Значение справа
  const valueX = this.$e.width - textWidth - labelMargin;
  const valueY = barY + barHeight / 2;
  ctx.fillStyle = '#000';
  ctx.textAlign = 'start';
  ctx.fillText(dataset.data[0], valueX, valueY);

    // Рассчет ширины прямоугольника с учетом доступной ширины текста
  const maxRectWidth = valueX - barX - labelMargin-textWidth;
  const rectWidth = dataset.data[0] * maxRectWidth;

  // Прямоугольник
  const rectX = barX;
  ctx.fillStyle = dataset.backgroundColor;
  ctx.fillRect(rectX+textWidth, barY, rectWidth, barHeight);

});
*/

};

/*function $20230615MyComponent($p_wContainer, $p_options, $p_widgets){
    $Traliva.$WidgetStateSubscriber.call(this, $p_wContainer, $p_options, $p_widgets);
// ..
};*/
$20230615MyComponent.prototype = Object.create($Traliva.$WidgetStateSubscriber.prototype);
$20230615MyComponent.prototype.constructor = $20230615MyComponent;
$20230615MyComponent.prototype.$processStateChanges = function(s){
	var $1;
	if (!s){
		console.error('epic fail');
		return;
	}
	console.log('230525 1: ', s);
	if (s.$needUpdate){
//		this.$_update();

//		this.$chart.data = s.$data;
		$1 = false; // признак того, что данные хоть какие-то есть
		for (const o of s.$data.datasets){
			if (o.data.length){
				$1 = true;
				break;
			}
		}
		this.$wConpainer.$setVisible($1);
//		this.$chart.update();
	}
//	const canvas = document.getElementById('canvas');
/*	this.$e.width += 100; // Место для текста справа
	const ctx = this.$e.getContext('2d');
	const barHeight = 40;
	const barMargin = 0;
	const labelMargin = 5;


	ctx.clearRect(0, 0, this.$e.width, this.$e.height);

	const textWidth = 100;

	// Текст слева
	ctx.fillStyle = '#000';
	ctx.textAlign = 'start';
	ctx.textBaseline = 'middle';
	//ctx.fillText(this.$chart.data.labels[0], 10, this.$e.height / 2);
	ctx.fillText(s.$data.labels[0], 10, this.$e.height / 2);

	//this.$chart.data.datasets.forEach((dataset, i) => {
	s.$data.datasets.forEach((dataset, i) => {
	  const barX = barMargin;
	  const barY = (barHeight + barMargin) * i;

		// Значение справа
	  const valueX = this.$e.width - textWidth - labelMargin;
	  const valueY = barY + barHeight / 2;
	  ctx.fillStyle = '#000';
	  ctx.textAlign = 'start';
	  ctx.fillText(dataset.data[0], valueX, valueY);

		// Рассчет ширины прямоугольника с учетом доступной ширины текста
	  const maxRectWidth = valueX - barX - labelMargin-textWidth;
	  const rectWidth = dataset.data[0] * maxRectWidth;

	  // Прямоугольник
	  const rectX = barX;
	  ctx.fillStyle = dataset.backgroundColor;
	  ctx.fillRect(rectX+textWidth, barY, rectWidth, barHeight);

	});
*/

};
$20230615MyComponent.prototype.$_update = function(){
	this.$e.style.width = '' + this.$w + 'px';
//	this.$_state

//	this.$e.width += 100; // Место для текста справа
	const ctx = this.$e.getContext('2d');
	const barHeight = 40;
	const barMargin = 0;
	const labelMargin = 5;


	ctx.clearRect(0, 0, this.$e.width, this.$e.height);

	const textWidth = 100;

	// Текст слева
	ctx.fillStyle = '#000';
	ctx.textAlign = 'start';
	ctx.textBaseline = 'middle';
	//ctx.fillText(this.$chart.data.labels[0], 10, this.$e.height / 2);
	ctx.fillText(this.$_state.$data.labels[0], 10, this.$e.height / 2);

	//this.$chart.data.datasets.forEach((dataset, i) => {
	this.$_state.$data.datasets.forEach((dataset, i) => {
	const barX = barMargin;
	const barY = (barHeight + barMargin) * i;

	// Значение справа
	const valueX = this.$e.width - textWidth - labelMargin;
	const valueY = barY + barHeight / 2;
	ctx.fillStyle = '#000';
	ctx.textAlign = 'start';
	ctx.fillText(dataset.data[0], valueX, valueY);

	// Рассчет ширины прямоугольника с учетом доступной ширины текста
	const maxRectWidth = valueX - barX - labelMargin-textWidth;
	const rectWidth = dataset.data[0] * maxRectWidth;

	// Прямоугольник
	const rectX = barX;
	ctx.fillStyle = dataset.backgroundColor;
	ctx.fillRect(rectX+textWidth, barY, rectWidth, barHeight);
	});
};
/*    if (!s){
        console.error('epic fail');
        return;
    }
    // ...
};*/
//$20230615MyComponent.$widgetsFields = [];
