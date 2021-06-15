(window.webpackJsonpgloboFormbuilder=window.webpackJsonpgloboFormbuilder||[]).push([[0],{14:function(e,n,l){"use strict";l.r(n);var a={element:'\n{% assign columnWidth = element.columnWidth | parseInt %}\n{% assign columnWidthClass = "layout-" | append : columnWidth | append : "-column" %}\n{% assign attrInput = "" %}\n\n{% if element.conditionalField && element.onlyShowIf && element.onlyShowIf != false %}\n{% assign columnWidthClass = columnWidthClass | append : " conditional-field" %}\n{% assign escapeConnectedValue = element[element.onlyShowIf] | escapeHtml %}\n{% assign attrInput = "disabled=\'disabled\'" %}\n{% assign dataAttr = dataAttr | append : " data-connected-id=\'" | append : element.onlyShowIf | append : "\'" %}\n{% assign dataAttr = dataAttr | append : " data-connected-value=\'" | append : escapeConnectedValue | append : "\'" %}\n{% endif %}\n\n{% case element.type %}\n{% when "text" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="text" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "name" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="text" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "email" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="text" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "textarea" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <textarea id="{{element.id}}" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" rows="3" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} ></textarea>\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "url" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="text" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "phone" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="text" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "number" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="number" {{attrInput}} class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "password" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="password" data-type="{{element.type}}" {{attrInput}} class="{{configs.appearance.style}}-input" id="{{element.id}}" name="{{element.id}}" {% if element.validationRule %} data-validate-rule="{{element.validationRule}}" {% endif %} {% if element.validationRule == \'advancedValidateRule\' %} data-advanced-validate-rule="{{element.advancedValidateRule}}" {% endif %} placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% if element.hasConfirm %}\n    <div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n        <label for="{{element.id}}Confirm" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.labelConfirm}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n        <input type="password" data-type="{{element.type}}" data-additional-type="confirm-{{element.type}}" data-connected-element="{{element.id}}" {% if element.validationRule %} data-validate-rule="{{element.validationRule}}" {% endif %} {% if element.validationRule == \'advancedValidateRule\' %} data-advanced-validate-rule="{{element.advancedValidateRule}}" {% endif %}  {{attrInput}} class="{{configs.appearance.style}}-input" id="{{element.id}}Confirm" name="{{element.id}}Confirm" placeholder="{{element.placeholderConfirm}}" {% if element.required %}presence{% endif %} >\n        {% if element.descriptionConfirm != \'\' %}\n            <small class="help-text globo-description">{{element.descriptionConfirm}}</small>\n        {% endif %}\n        <small class="messages"></small>\n    </div>\n{% endif %}\n{% when "datetime" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input \n        type="text" \n        autocomplete="off"\n        {{attrInput}} \n        data-type="{{element.type}}" \n        class="{{configs.appearance.style}}-input" \n        id="{{element.id}}" \n        name="{{element.id}}" \n        placeholder="{{element.placeholder}}" \n        {% if element.required %}presence{% endif %} \n        data-format="{{element.format}}" \n        {% if element.otherLang %}\n        data-locale="{{element.localization}}" \n        {% endif %} \n        dataDateFormat="{{element.date-format}}" \n        dataTimeFormat="{{element.time-format}}" \n        {% if element.format == \'date\' and element.isLimitDate %}\n            limitDateType="{{element.limitDateType}}"\n            {% if element.limitDateSpecificEnabled %}\n                limitDateSpecificDates="{{element.limitDateSpecificDates}}"\n            {% endif %}\n            {% if element.limitDateRangeEnabled %}\n                limitDateRangeDates="{{element.limitDateRangeDates}}"\n            {% endif %}\n            {% if element.limitDateDOWEnabled %}\n                limitDateDOWDates="{{element.limitDateDOWDates}}"\n            {% endif %}\n        {% endif %}\n    >\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "file" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <input type="file" {{attrInput}} data-type="{{element.type}}" class="{{configs.appearance.style}}-input" id="{{element.id}}" {% if element.allowed-multiple %} multiple name="{{element.id}}[]" {% else %} name="{{element.id}}" {% endif %}\n        placeholder="{{element.placeholder}}" {% if element.required %}presence{% endif %} data-allowed-extensions="{{element.allowed-extensions | join : \',\' }}">\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "checkbox" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <legend class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</legend>\n    {% assign options = element.options | optionsToArray %}\n    <ul>\n        {% for option in options %}\n            <li>\n                <div class="checkbox-wrapper">\n                    <input class="checkbox-input" {{attrInput}} id="{{element.id}}-{{option}}-{{uniqueId}}" type="checkbox" data-type="{{element.type}}" name="{{element.id}}[]" {% if element.required %}presence{% endif %} value="{{option}}">\n                    <label class="checkbox-label globo-option" for="{{element.id}}-{{option}}-{{uniqueId}}">{{option}}</label>\n                </div>\n            </li>\n            \n        {% endfor %}\n    </ul>\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "radio" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <legend class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</legend>\n    {% assign options = element.options | optionsToArray %}\n    <ul>\n        {% for option in options %}\n        <li>\n            <div class="radio-wrapper">\n                <input class="radio-input" {{attrInput}} id="{{element.id}}-{{option}}-{{uniqueId}}" type="radio" data-type="{{element.type}}" name="{{element.id}}" {% if element.required %}presence{% endif %} value="{{option}}">\n                <label class="radio-label globo-option" for="{{element.id}}-{{option}}-{{uniqueId}}">{{option}}</label>\n            </div>\n        </li>\n        {% endfor %}\n    </ul>\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "select" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    {% assign options = element.options | optionsToArray %}\n    <select name="{{element.id}}" {{attrInput}} id="{{element.id}}" class="{{configs.appearance.style}}-input" {% if element.required %}presence{% endif %}>\n        <option selected="selected" value="" disabled="disabled">{{element.placeholder}}</option>\n        {% for option in options %}\n        <option value="{{option}}">{{option}}</option>\n        {% endfor %}\n    </select>\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "country" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    {% assign options = element.options | optionsToArray %}\n    <select name="{{element.id}}" {{attrInput}} id="{{element.id}}" class="{{configs.appearance.style}}-input" {% if element.required %}presence{% endif %}>\n        <option selected="selected" value="" disabled="disabled">{{element.placeholder}}</option>\n        {% for option in options %}\n        <option value="{{option}}">{{option}}</option>\n        {% endfor %}\n    </select>\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "heading" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <h3 class="heading-title globo-heading">{{element.heading}}</h3>\n    <p class="heading-caption">{{element.caption}}</p>\n</div>\n{% when "paragraph" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label"><span class="label-content">{{element.label}}</span></label>\n    <div class="globo-paragraph">{{element.text}}</div>\n</div>\n{% when "rating-star" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}}>\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label globo-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    <div class="star-rating">\n        <fieldset>\n            <input type="radio" {{attrInput}} data-type="{{element.type}}" {% if element.required %}presence{% endif %} id="{{element.id}}-5-stars" name="{{element.id}}" value="5" /><label for="{{element.id}}-5-stars" title="5 Stars">5 stars</label>\n            <input type="radio" {{attrInput}} data-type="{{element.type}}" {% if element.required %}presence{% endif %} id="{{element.id}}-4-stars" name="{{element.id}}" value="4" /><label for="{{element.id}}-4-stars" title="4 Stars">4 stars</label>\n            <input type="radio" {{attrInput}} data-type="{{element.type}}" {% if element.required %}presence{% endif %} id="{{element.id}}-3-stars" name="{{element.id}}" value="3" /><label for="{{element.id}}-3-stars" title="3 Stars">3 stars</label>\n            <input type="radio" {{attrInput}} data-type="{{element.type}}" {% if element.required %}presence{% endif %} id="{{element.id}}-2-stars" name="{{element.id}}" value="2" /><label for="{{element.id}}-2-stars" title="2 Stars">2 stars</label>\n            <input type="radio" {{attrInput}} data-type="{{element.type}}" {% if element.required %}presence{% endif %} id="{{element.id}}-1-star" name="{{element.id}}" value="1" /><label for="{{element.id}}-1-star" title="1 Star">1 star</label>\n        </fieldset>\n    </div>\n    {% if element.description != \'\' %}\n        <small class="help-text globo-description">{{element.description}}</small>\n    {% endif %}\n    <small class="messages"></small>\n</div>\n{% when "devider" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}} >\n    <hr>\n</div>\n{% when "hidden" %}\n<div class="globo-form-control {{columnWidthClass}}" {{dataAttr}} style="display: none;visibility: hidden;">\n    <label for="{{element.id}}" class="{{configs.appearance.style}}-label"><span class="label-content">{{element.label}}</span>{% if element.required %}<span class="text-danger text-smaller"> *</span>{% endif %}</label>\n    {% if element.dataType == \'fixed\' %}\n        <input type="hidden" data-type="{{element.dataType}}" id="{{element.id}}" name="{{element.id}}" value="{{element.fixedValue}}">\n    {% else %}\n        <input type="hidden" data-type="{{element.dataType}}" id="{{element.id}}" name="{{element.id}}" data-default-value="{{element.defaultValue}}" value="{{element.defaultValue}}" >\n    {% endif %}\n</div>\n{% else %}\n\n{% endcase %}\n',template:'\n<div class="globo-form {{configs.appearance.layout}}-form">\n<style>{{ null | renderElement : dynamicCSS,configs }}</style>\n<div class="globo-form-app {{configs.appearance.layout}}-layout">\n    <form class="g-container" novalidate action="{{Globo.FormBuilder.url}}/api/front/form/{{formId}}/send" method="POST" enctype="multipart/form-data" data-id={{formId}}>\n        {% if configs.header.active %}\n        <div class="header">\n            <h3 class="title globo-heading">{{configs.header.title}}</h3>\n            {% if configs.header.description != \'\' and configs.header.description != \'<p><br></p>\' %}\n            <div class="description globo-description">{{configs.header.description}}</div>\n            {% endif %}\n        </div>\n        {% endif %}\n        {% if configs.isStepByStepForm %}\n            <div class="globo-formbuilder-wizard" data-id={{formId}}>\n                <div class="wizard__content">\n                    <header class="wizard__header">\n                        <div class="wizard__steps">\n                        <nav class="steps">\n                            {% for element in configs.elements %}\n                                <div class="step">\n                                    <div class="step__content">\n                                        <p class="step__number"></p>\n                                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">\n                                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>\n                                            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>\n                                        </svg>\n                                        <div class="lines">\n                                            {% if forloop.first == true %}\n                                                <div class="line -start"></div>\n                                            {% endif %}\n                                            <div class="line -background">\n                                            </div>\n                                            <div class="line -progress">\n                                            </div>\n                                        </div>  \n                                    </div>\n                                </div>\n                            {% endfor %}\n                        </nav>\n                        </div>\n                    </header>\n                    <div class="panels">\n                        {% for element in configs.elements %}\n                        <div class="panel" data-id={{formId}}>\n                            {% if element.type != "group" %}\n                                {{ element | renderElement : partialElement , configs }}\n                            {% else %}\n                                {% for el in element.elements %}\n                                    {{ el | renderElement : partialElement , configs }}\n                                {% endfor %}\n                            {% endif %}\n                            {% if forloop.last == true %}\n                                {% if configs.reCaptcha.enable = true %}\n                                    <div class="globo-form-control">\n                                        <div class="globo-g-recaptcha" data-sitekey="{{Globo.FormBuilder.shop.settings.reCaptcha.siteKey}}"></div>\n                                        <input type="hidden" name="reCaptcha" id="reCaptcha">\n                                        <small class="messages"></small>\n                                    </div>\n                                {% endif %}\n                            {% endif %}\n                        </div>\n                        {% endfor %}\n                    </div>\n                    {% if Globo.FormBuilder.shop.pricing.features.removeCopyright == false and Globo.FormBuilder.shop.settings.hideWaterMark == false %}\n                    <p style="text-align: right;font-size:small;" >Made by <a target="_blank" rel="nofollow" href="https://apps.shopify.com/form-builder-contact-form">Powerful Contact Form Builder</a> </p>\n                    {% endif %}\n                    <div class="message error" data-other-error="{{configs.errorMessage.otherError}}">\n                        <div class="content"></div>\n                        <div class="dismiss" onclick="Globo.FormBuilder.dismiss(this)">\n                            <svg viewBox="0 0 20 20" class="" focusable="false" aria-hidden="true"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path></svg>\n                        </div>\n                    </div>\n                    {% unless configs.afterSubmit.message == "" %}\n                    <div class="message success">\n                        <div class="content">{{configs.afterSubmit.message}}</div>\n                        <div class="dismiss" onclick="Globo.FormBuilder.dismiss(this)">\n                            <svg viewBox="0 0 20 20" class="" focusable="false" aria-hidden="true"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path></svg>\n                        </div>\n                    </div>\n                    {% endunless %}\n                    <div class="footer wizard__footer">\n                        {% if configs.footer.description != \'\' and configs.footer.description != \'<p><br></p>\' %}\n                        <div class="description globo-description">{{configs.footer.description}}</div>\n                        {% endif %}\n                        <button type="button" class="action previous  {{configs.appearance.style}}-button">{{configs.footer.previousText}}</button>\n                        <button type="button" class="action next submit {{configs.appearance.style}}-button" data-submitting-text="{{configs.footer.submittingText}}" data-submit-text=\'<span class="spinner"></span>{{configs.footer.submitText}}\' data-next-text={{configs.footer.nextText}} ><span class="spinner"></span>{{configs.footer.nextText}}</button>\n                        <h1 class="wizard__congrats-message"></h1>\n                    </div>\n                </div>\n            </div>\n        {% else %}\n            <div class="content flex-wrap block-container" data-id={{formId}}>\n                {% for element in configs.elements %}\n                    {% if element.type != "group" %}\n                        {{ element | renderElement : partialElement , configs }}\n                    {% else %}\n                        {% for el in element.elements %}\n                            {{ el | renderElement : partialElement , configs }}\n                        {% endfor %}\n                    {% endif %}\n                {% endfor %}\n                {% if configs.reCaptcha.enable = true %}\n                    <div class="globo-form-control">\n                        <div class="globo-g-recaptcha" data-sitekey="{{Globo.FormBuilder.shop.settings.reCaptcha.siteKey}}"></div>\n                        <input type="hidden" name="reCaptcha" id="reCaptcha">\n                        <small class="messages"></small>\n                    </div>\n                {% endif %}\n            </div>\n            {% if Globo.FormBuilder.shop.pricing.features.removeCopyright == false and Globo.FormBuilder.shop.settings.hideWaterMark == false %}\n            <p style="text-align: right;font-size:small;">Made by <a target="_blank" rel="nofollow" href="https://apps.shopify.com/form-builder-contact-form">Powerful Contact Form Builder</a> </p>\n            {% endif %}\n            <div class="message error" data-other-error="{{configs.errorMessage.otherError}}">\n                <div class="content"></div>\n                <div class="dismiss" onclick="Globo.FormBuilder.dismiss(this)">\n                    <svg viewBox="0 0 20 20" class="" focusable="false" aria-hidden="true"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path></svg>\n                </div>\n            </div>\n            {% unless configs.afterSubmit.message == "" %}\n            <div class="message success">\n                <div class="content">{{configs.afterSubmit.message}}</div>\n                <div class="dismiss" onclick="Globo.FormBuilder.dismiss(this)">\n                    <svg viewBox="0 0 20 20" class="" focusable="false" aria-hidden="true"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path></svg>\n                </div>\n            </div>\n            {% endunless %}\n            <div class="footer">\n                {% if configs.footer.description != \'\' and configs.footer.description != \'<p><br></p>\' %}\n                <div class="description globo-description">{{configs.footer.description}}</div>\n                {% endif %}\n                <button class="action submit {{configs.appearance.style}}-button"><span class="spinner"></span>{{configs.footer.submitText}}</button>\n            </div>\n        {% endif %}\n        <input type="hidden" value="{{Globo.FormBuilder.customer.id}}" name="customer[id]">\n        <input type="hidden" value="{{Globo.FormBuilder.customer.email}}" name="customer[email]">\n        <input type="hidden" value="{{Globo.FormBuilder.customer.name}}" name="customer[name]">\n        <input type="hidden" value="{{Globo.FormBuilder.page.title}}" name="page[title]">\n        <input type="hidden" value="{{Globo.FormBuilder.page.href}}" name="page[href]">\n        <input type="hidden" value="" name="_keyLabel">\n    </form>\n    {% unless configs.afterSubmit.message == "" %}\n    <div class="message success">\n        <div class="content">{{configs.afterSubmit.message}}</div>\n        <div class="dismiss" onclick="Globo.FormBuilder.dismiss(this)">\n            <svg viewBox="0 0 20 20" class="" focusable="false" aria-hidden="true"><path d="M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path></svg>\n        </div>\n    </div>\n    {% endunless %}\n</div>\n{% if configs.appearance.layout == \'float\'  %}\n{% if configs.appearance.floatingIcon != \'\' or configs.appearance.floatingText != \'\' %}\n{% if configs.appearance.floatingText != \'\' and configs.appearance.floatingText != null %}\n{% assign circle = \'\' %}\n{% else %}\n{% assign circle = \'circle\' %}\n{% endif %}\n<div class="floating-button {{circle}} {{configs.appearance.position}}" onclick="Globo.FormBuilder.showFloatingForm(this)">\n    <div class="fabLabel">\n        {{configs.appearance.floatingIcon}}\n        {{configs.appearance.floatingText}}\n    </div>\n</div>\n{% endif %}\n<div class="overlay" onclick="Globo.FormBuilder.hideFloatingForm(this)"></div>\n{% endif %}\n</div>\n',dynamicCSS:'\n.globo-form-app{\n    max-width: {{configs.appearance.width}}px;\n    width: -webkit-fill-available;\n    background-color:#FFF;\n    {% if configs.appearance.background == \'color\' %}\n    background-color: {{configs.appearance.backgroundColor}};\n    {% endif %}\n    {% if configs.appearance.background == \'image\' %}\n    background-image : url(\'{{configs.appearance.backgroundImage}}\');\n    background-position: center {{configs.appearance.backgroundImageAlignment}};;\n    background-repeat:no-repeat;\n    background-size: cover;\n    {% endif %}\n}\n\n.globo-form-app .globo-heading{\n    color: {{configs.appearance.headingColor}}\n}\n.globo-form-app .globo-description,\n.globo-form-app .header .globo-description{\n    color: {{configs.appearance.descriptionColor}}\n}\n.globo-form-app .globo-label,\n.globo-form-app .globo-form-control label.globo-label,\n.globo-form-app .globo-form-control label.globo-label span.label-content{\n    color: {{configs.appearance.labelColor}}\n}\n.globo-form-app .globo-form-control .help-text.globo-description{\n    color: {{configs.appearance.descriptionColor}}\n}\n.globo-form-app .globo-form-control .checkbox-wrapper .globo-option,\n.globo-form-app .globo-form-control .radio-wrapper .globo-option\n{\n    color: {{configs.appearance.optionColor}}\n}\n.globo-form-app .footer{\n    text-align:{{configs.footer.submitAlignment}};\n}\n.globo-form-app .footer button{\n    border:1px solid {{configs.appearance.mainColor}};\n    {% if configs.footer.submitFullWidth %}\n        width:100%;\n    {% endif %}\n}\n.globo-form-app .footer button.submit,\n.globo-form-app .footer button.action.loading .spinner{\n    background-color: {{configs.appearance.mainColor}};\n    color : {{ configs.appearance.mainColor | idealTextColor }};\n}\n.globo-form-app .globo-form-control .star-rating>fieldset:not(:checked)>label:before {\n    content: url(\'data:image/svg+xml; utf8, <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="{{configs.appearance.mainColor | encodeHexColor }}" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>\');\n}\n.globo-form-app .globo-form-control .star-rating>fieldset>input:checked ~ label:before {\n    content: url(\'data:image/svg+xml; utf8, <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="{{configs.appearance.mainColor | encodeHexColor }}" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>\');\n}\n.globo-form-app .globo-form-control .star-rating>fieldset:not(:checked)>label:hover:before, .globo-form-app .globo-form-control .star-rating>fieldset:not(:checked)>label:hover ~ label:before{\n    content : url(\'data:image/svg+xml; utf8, <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="{{configs.appearance.mainColor | encodeHexColor }}" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>\')\n}\n.globo-form-app .globo-form-control .radio-wrapper .radio-input:checked ~ .radio-label:after {\n    background: {{configs.appearance.mainColor}};\n    background: radial-gradient({{configs.appearance.mainColor}} 40%, #fff 45%);\n}\n.globo-form-app .globo-form-control .checkbox-wrapper .checkbox-input:checked ~ .checkbox-label:before {\n    border-color: {{configs.appearance.mainColor}};\n    box-shadow: 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);\n    background-color: {{configs.appearance.mainColor}};\n}\n.globo-form-app .step.-completed .step__number,\n.globo-form-app .line.-progress,\n.globo-form-app .line.-start{\n    background-color: {{configs.appearance.mainColor}};\n}\n.globo-form-app .checkmark__check,\n.globo-form-app .checkmark__circle{\n    stroke: {{configs.appearance.mainColor}};\n}\n.globo-form .floating-button{\n    background-color: {{configs.appearance.mainColor}};\n}\n.globo-form-app .globo-form-control .checkbox-wrapper .checkbox-input ~ .checkbox-label:before,\n.globo-form-app .globo-form-control .radio-wrapper .radio-input ~ .radio-label:after{\n    border-color : {{configs.appearance.mainColor}};\n}\n.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay {\n    background: {{configs.appearance.mainColor}};\n    border-color: {{configs.appearance.mainColor}};\n}\n'};const{Liquid:t}=l(6),o=new t;o.registerFilter("renderElement",(e,n,l)=>o.parseAndRenderSync(n,{element:e,configs:l})),o.registerFilter("parseInt",e=>parseInt(100/e)),o.registerFilter("optionsToArray",(e,n)=>e.split(/\r?\n/)),o.registerFilter("encodeHexColor",e=>void 0!==e&&e.replace("#","%23")),o.registerFilter("idealTextColor",e=>void 0!==e&&Globo.FormBuilder.idealTextColor(e)),o.registerFilter("escapeHtml",e=>"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),o.templates=a;n.default=o}}]);