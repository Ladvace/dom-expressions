import { template as _$template } from "r-dom";
import { createComponent as _$createComponent } from "r-dom";
import { setAttribute as _$setAttribute } from "r-dom";
const _tmpl$ = /*#__PURE__*/ _$template(`<div>First</div>`, 2),
  _tmpl$2 = /*#__PURE__*/ _$template(`<div>Last</div>`, 2),
  _tmpl$3 = /*#__PURE__*/ _$template(`<div></div>`, 2);
const multiStatic = [_tmpl$.cloneNode(true), _tmpl$2.cloneNode(true)];
const multiExpression = [_tmpl$.cloneNode(true), inserted, _tmpl$2.cloneNode(true), "After"];
const multiDynamic = [
  (() => {
    const _el$5 = _tmpl$.cloneNode(true);
    _$setAttribute(_el$5, "id", state.first);
    return _el$5;
  })(),
  () => state.inserted,
  (() => {
    const _el$6 = _tmpl$2.cloneNode(true);
    _$setAttribute(_el$6, "id", state.last);
    return _el$6;
  })(),
  "After"
];
const singleExpression = inserted;
const singleDynamic = inserted;
const firstStatic = [inserted, _tmpl$3.cloneNode(true)];
const firstDynamic = [inserted, _tmpl$3.cloneNode(true)];
const firstComponent = [_$createComponent(Component, {}), _tmpl$3.cloneNode(true)];
const lastStatic = [_tmpl$3.cloneNode(true), inserted];
const lastDynamic = [_tmpl$3.cloneNode(true), inserted];
const lastComponent = [_tmpl$3.cloneNode(true), _$createComponent(Component, {})];
