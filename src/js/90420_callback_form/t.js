#USAGE_BEGIN#traliva_kit_debug##
registerHelp('$90420CallbackForm', {
    title: 'Форма обратного звонка',
    //descr: '',
    options:{
        режимРаботы: 'режим работы',
        mediatorUrl: 'url посредника. На этот URL ожидается POST-запрос об оповещении менеджера, в ответ на POST-запрос ожидается объект с полями descr и status.',
        dataVarName: 'имя переменной, в которой будет храниться информация, введённая пользователем'
    },
    stateObj:{
        data: `{
    number: '+71234567890'
}`
    }
});
#USAGE_END#traliva_kit_debug##
#u#TralivaKit__Strip##
#u#TralivaKit__Stack##
#u#TralivaKit__Button##
#u#TralivaKit__LineEdit##
#u#TralivaKit__Label## // или StaticHTML
function $90420CallbackForm($p_wContainer, $p_options, $p_widgets){
    $Traliva.$WidgetStateSubscriber.call(this, $p_wContainer, $p_options, $p_widgets);
    var $wContent;
    this.$widgetsScope = {};
    this.$oWidgets = {};
    this.$statePublisher = new $Traliva.$StatePublisher();
    this.$statePublisher.$setState({
        $phoneNumber: ''
    });
    // неизвестен defaultBackground
    $wContent = $Traliva.$_constructLayout(
        $p_wContainer,
        {%% layout.js %%},
        undefined,
        this.$oWidgets = {},
        this.$widgetsScope = {},
        this.$statePublisher
    );
    console.log('555555555555555555555');
    console.log(this.$widgetsScope);
    {%% logics.js %%}
    this.$statePublisher.$registerSubscriber(new $Logics());
    $p_wContainer.$_onResized = (function($1){return function($w, $h){
        $1.$resize($w, $h);
    };})($wContent);
    $p_wContainer.$setContent($wContent.$_div);
};
$90420CallbackForm.prototype = Object.create($Traliva.$WidgetStateSubscriber.prototype);
$90420CallbackForm.prototype.constructor = $90420CallbackForm;
$90420CallbackForm.prototype.$processStateChanges = function(s){
    if (!s){
        console.error('epic fail');
        return;
    }
    // ...
};
//$90420CallbackForm.$widgetsFields = [];
