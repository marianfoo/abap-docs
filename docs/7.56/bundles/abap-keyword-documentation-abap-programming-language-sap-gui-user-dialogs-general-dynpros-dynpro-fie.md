# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Field Help, Input Help, and Dropdown List Boxes

Included pages: 15


### abenabap_dynpros_help.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

dynpro - Field Help, Input Help, and Dropdown List Boxes

The field help (F1) and input help (F4) are standard functions. No other function codes can be linked with the function keys F1 and F4.

-   When the function key F1 or the corresponding icon on the toolbar is chosen, a help text is displayed for the field on which the cursor is positioned.
-   When the function key F4 or the input help button on the right of a screen field is chosen, all possible input values for the field on which the cursor is positioned are displayed. The user can then choose one or more values to copy to the screen field.

There are different ways of providing field help and input help, some of which involve predefined ABAP Dictionary functions and some which require self-programmed solutions.

One special way to display value list, for example, are dropdown list boxes.

-   [Field help](javascript:call_link\('abenabap_dynpros_field_help.htm'\))
-   [Input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\))
-   [Dropdown list boxes](javascript:call_link\('abenabap_dynpros_listbox.htm'\))

Continue
[dynpro - Field Help](javascript:call_link\('abenabap_dynpros_field_help.htm'\))
[dynpro - Input Help](javascript:call_link\('abenabap_dynpros_value_help.htm'\))
[dynpro - Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_listbox.htm'\))
[dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\))


### abenabap_dynpros_field_help.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

dynpro - Field Help

There are three ways of displaying field help for screen elements on dynpros:

-   [Displaying the Documentation of the Data Element](#abenabap-dynpros-field-help-1-------displaying-the-supplementary-documentation-of-the-data-element---@ITOC@@ABENABAP_DYNPROS_FIELD_HELP_2)
-   [Calling Help Texts in Dialog Modules](#abenabap-dynpros-field-help-3---displaying-the-documentation-of-the-data-element--if-a-screen-element-in-the-screen-painter-was-defined-by-copying-a-field-from-the-abap-dictionary--the--documentation--javascript-call-link---abenddic-data-elements-sema-htm-----of-the-associated-data-element-is-displayed-automatically-when-the-f1-help-is-selected-for-this-field--unless-this-step-is-overridden-in-the-dynpro-flow-logic---displaying-the-supplementary-documentation-of-the-data-element--the-documentation-of-some-data-elements-has-supplementary--documentation--javascript-call-link---abenddic-data-elements-sema-htm------the-supplementary-documentation-for-a-dynpro-field-is-created-in-the-screen-painter-and-not-in-the-abap-dictionary-in-the-abap-workbench--here--the-supplementary-documentation-is-defined-for-the-data-element-using-a-number---supplementary-documentation-of-this-type-is-specific-to-a-program-and-to-a-dynpro--any-supplementary-documentation-with-the-same-number-defined-in-the-abap-dictionary-is-overridden-by-any-dynpro-specific-supplementary-documentation--supplementary-documentation-defined-in-abap-dictionary-can-still-be-linked-with-a-dynpro-field-in-table-thlpf--this-requires-a-new-line-in-table-thlpf-containing-the-program-name--dynpro-number--field-name--and-the-number-of-the-supplementary-documentation---to-be-able-to-display-the-supplementary-documentation--the-dynpro-flow-logic-must-respond-to-the-poh-event-as-follows---process-on-help-request---------field-field---module-mod---with-hlp--javascript-call-link---abendynp-field-help-htm-------------only--field--javascript-call-link---dynpfield-htm-----statements-are-allowed-after--process-on-help-request--javascript-call-link---dynpprocess-htm------if-the-flow-logic-of-a-dynpro-does-not-contain-the-event-keyword-process-on-help-request--f1-displays-either-the-data-element-documentation-of-the-field-on-which-the-cursor-is-positioned-or-no-help-documentation-is-displayed--in-other-cases--the-following-field-statement-is-executed-on-whose-field-field-the-cursor-is-positioned---if-dynpro-specific-supplementary-documentation-exists-for-the-field-field--this-is-displayed-by-specifying-its-number-hlp--a-variable-hlp-can-be-filled-before-the-help-is-displayed--for-example--by-calling-the-dialog-module-mod--at-the-event-process-on-help-request--the-field-statement-does-not--however--transport-the-content-of-the-dynpro-field-field-to-the-abap-program---calling-help-texts-in-dialog-modules--any-help-text-can-be-displayed-by-calling-dialog-modules-at-poh---process-on-help-request-----------field-field-module-mod---javascript-call-link---abendynp-field-help-htm------------after--process-on-help-request--javascript-call-link---dynpprocess-htm------the-module-statement-can-only-be-used-in-combination-with-the-field-statement--when-f1-is-selected--the-dialog-module-mod-of-the-field-statement-on-whose-field-field-the-cursor-is-positioned--if-multiple-field-statements-are-specified-for-the-same-field-field--only-the-first-statement-is-executed--the-dialog-module-mod-does-not-provide-the-content-of-the-dynpro-field-field--since-this-content-is-not-transported-by-the-field-statement-at-process-on-help-request-time---the-dialog-module-mod-is-defined-like-a-regular-pai-module-in-the-abap-program--the-processing-logic-of-the-module-must-ensure-that-adequate-help-is-displayed-for-the-selected-field--function-modules-such-as-help--object--show--for--field-or-help--object--show-can-be-used-to-do-this---executable-example---field-help--javascript-call-link---abendynpro-f1-help-abexa-htm-----------abenabap-dynpros-value-help-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---input-help--dynpros-use-input-helps-to-support-interactive-input--this-can-be-done-in-three-different-ways--------input-helps-from-the-abap-dictionary--javascript-call-link---abenabap-dynpros-value-help-auto-htm--------------the-associated--search-help--javascript-call-link---abensearch-help-glosry-htm-----glossary-entry---is-provided-automatically-for-dynpro-fields-from-the-abap-dictionary--if-a-field-has-no-search-help-defined--the-abap-dictionary-still-offers-the-content-of-a-check-table--the-fixed-values-of-the-corresponding-domain--or-static-calendar-help-or-clock-help-as-input-help------------input-helps-on-the-dynpro--javascript-call-link---abenabap-dynpros-value-help-dynp-htm--------------abap-dictionary-search-helps-can-be-linked-with-individual-dynpro-fields------------input-helps-in-dialog-modules--javascript-call-link---abenabap-dynpros-value-help-mod-htm--------------in-dynpro-flow-logic--dialog-modules-providing-self-programmed-input-help-can-be-called-at-pov-time--------these-three-options-are-ordered-by-ascending-priority--if-different-techniques-are-used-at-the-same-time--the-pov-module-calls-override-any-definition-on-the-dynpro--which-in-turn-overrides-the-binding-to-the-abap-dictionary---these-three-options-should--however--be-applied-in-the-given-order--if-possible--a-search-help-from-abap-dictionary-should-always-be-defined-for-the-input-help-and-input-help-should-only-be-defined-in-dialog-modules-if-no-other-option-is-available--in-particular--the-enhancement-of-search-helps-using-search-help-exits-should-be-considered-beforehand---continue--dynpro---input-helps-in-the-abap-dictionary--javascript-call-link---abenabap-dynpros-value-help-auto-htm------dynpro---input-helps-on-dynpros--javascript-call-link---abenabap-dynpros-value-help-dynp-htm------dynpro---input-help-in-dialog-modules--javascript-call-link---abenabap-dynpros-value-help-mod-htm-----------abenabap-dynpros-value-help-auto-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---input-help--javascript-call-link---abenabap-dynpros-value-help-htm---------dynpro---input-helps-in-the-abap-dictionary--the-primary-input-helps-used-in-the-abap-dictionary-are--search-helps--javascript-call-link---abensearch-help-glosry-htm-----glossary-entry----a-search-help-is-a-standalone--repository-object--javascript-call-link---abenrepository-object-glosry-htm-----glossary-entry---that-is-used-specifically-to-provide-input-helps-on-screen-fields--search-helps-can-be-linked-with-table-fields-and-data-elements--the-content-of--check-tables--javascript-call-link---abencheck-table-glosry-htm-----glossary-entry-----fixed-values--javascript-call-link---abenfixed-value-glosry-htm-----glossary-entry----or-calendar-helps-and-clock-helps-can-be-used-instead-of-search-helps--------overview-of-abap-dictionary-input-helps---@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_1)
-   [Hierarchy of the Input Helps](#abenabap-dynpros-value-help-auto-2-------data-transport-of-search-helps---@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_3)
-   [Search Help Exits](#abenabap-dynpros-value-help-auto-4---overview-of-abap-dictionary-input-helps------search-helps----------there-are-two-kinds-of-search-helps--elementary-and-collective--an-elementary-search-help-represents-a-search-path-and-defines-where-the-data-in-the-proposal-list-is-read-from--how-data-is-transported-between-the-screen-layout-and-the-infrastructure--and-how-the-input-help-dialog-is-designed--a-collective-search-help-comprises-multiple-elementary-search-helps--a-collective-search-help-combines-all-search-paths-that-are-meaningful-for-a-field-----------check-tables----------in-the-case-of--foreign-key-relationships--javascript-call-link---abenforeign-key-dependency-glosry-htm-----glossary-entry---defined-in-the-abap-dictionary--the-key-fields-of-the-check-table-can-be-used-as-input-help-for-a--foreign-key-field--javascript-call-link---abenforeign-key-field-glosry-htm-----glossary-entry---used-as-a-dynpro-field-----------fixed-values----------the--fixed-values--javascript-call-link---abenfixed-value-glosry-htm-----glossary-entry---of-a-domain-can-be-used-as-an-input-help-for-dynpro-fields-that-reference-the-domain--the--value-table--javascript-call-link---abenvalue-table-glosry-htm-----glossary-entry---of-a-domain--on-the-other-hand--cannot-be-used-for-input-helps-----------calendar-helps-and-clock-helps----------predefined-calendar-helps-and-clock-helps-can-be-used-as-input-helps-for-fields-of-the-type-dats-and-tims--------hierarchy-of-the-input-helps--search-helps-can-be-bound-in-different-ways-to-fields-of-database-tables-or-components-of-abap-dictionary-structures--the-input-help-available-to-a-user-depends-on-the-way-a-search-help-is-bound--the-following-list-shows--in-ascending-order-of-priority--the-input-help-used-------calendar-helps-and-clock-helps----------if-no-other-input-helps-are-defined-for-fields-of-the-type-dats-or-tims--the-calendar-help-or-clock-help-is-used-----------fixed-values----------if-neither-a-check-table-nor-a-search-help-is-defined-for-a-field--any-fixed-values-of-the-domain-are-used-for-the-input-help-----------search-help-of-the-data-element----------if-neither-a-check-table-nor-a-search-help-is-defined-for-a-field--the-search-help-linked-with-the-data-element-of-the-field-is-used-----------check-table----------if-the-check-table-of-a-field-does-not-have-a--text-table--javascript-call-link---abentext-table-glosry-htm-----glossary-entry---nor-its-own-search-help--and-no-dedicated-search-help-is-specified-for-a-field--the-content-of-the-key-fields-of-the-check-table-is-used-as-an-input-help-----------check-table-with-text-table----------if-the--foreign-key-table--javascript-call-link---abenforeign-key-table-glosry-htm-----glossary-entry---of-the-check-table-of-the-fields-is-a--text-table--javascript-call-link---abentext-table-glosry-htm-----glossary-entry----the-associated-text-from-the-text-table-is-displayed-in-the-input-help-in-the-logon-language-of-the-user-----------check-table-with-search-help----------if-a-search-help-is-bound-to-the-check-table-of-a-field--the-search-help-is-used-with-the-values-from-the-check-table--but-also-enables-a-data-transport-of-multiple-parameters-----------search-help-of-the-field----------if-the-dynpro-field-is-defined-with-reference-to-a-field-of-a-structure-or-a-database-table-and-a-search-help-is-assigned-to-this-field-directly--this-binding-has-the-highest-priority-and-is-always-used-as-an-input-help--to-avoid-errors-in-the--automatic-input-check--javascript-call-link---abenabap-dynpros-checks-auto-htm------the-bound-search-help-should-only-propose-values-that-also-exist-in-a-check-table--------if-necessary--the-input-help-is-modified-using-methods-of--flagging-obsolete-data-in-check-tables--javascript-call-link---abenddic-deprecation-htm-------data-transport-of-search-helps--search-helps-have-an-interface--a-search-help-parameter--that-controls-which-input-is-respected-by-the-screen-layout-and-which-screen-fields-can-be-filled-with-data-from-the-selected-line-in-the-proposal-list--parameters-of-a-search-help-can-be-defined-as-import-and-export-parameters--a-parameter-can-be-both-an-input-and-an-export-parameter-at-the-same-time---when-the-input-help-is-called--data-is-transported-between-the-dynpro-fields-and-the-import-parameters-of-the-search-help--if-a-search-help-is-bound-to-a-data-element-or-directly-to-a-screen-field-of-the-dynpro--only-a-single-search-help-parameter-is-assigned-to-the-field--in-this-case--data-is-transported-only-between-the-field-and-this-parameter--if-the-search-help-is-bound-to-the-table-field-or-structure-field-or-to-the-check-table-of-the-field--it-may-be-necessary-to-fill-multiple-search-help-parameters--when-the-input-help-is-called--an-attempt-is-made-to-find-an-identically-named-field-for-each-import-parameter-of-the-search-help-that-is-bound-to-a-table-field-or-structure-field--if-an-appropriate-field-is-found--its-content-is-passed-to-the-search-help-parameter---when-a-line-in-the-proposal-list-of-the-search-help-is-selected--data-is-transported-between-the-export-parameters-of-the-search-help-and-the-assigned-dynpro-fields--the-values-of-the-proposal-list-are-passed-only-to-input-enabled-fields-and-to-fields-that-are-linked-with-only-a-single-export-parameter-of-the-search-help---search-help-exits--a-search-help-exit-can-be-used-to-modify-the-standard-way-an-input-help-for-a-field-works--a-search-help-exit-is-a-function-module-with-a-predefined-interface-and-can-be-called-at-defined-points-within-the-input-help-process--a-search-help-exit-can-be-programmed-to-modify-the-program-flow-of-the-search-help-or-replace-certain-steps---the-function-module-can-affect-data-such-as-the-properties-of-the-search-helps--the-selection-options-that-apply-when-preselecting-from-the-proposal-list--the-proposal-list-itself--or-the-subsequent-data-in-the-program-flow---each-search-help-exit-must-have-the-same-interface-as-the-function-module-f4if--shlp--exit--example--which-is-used-as-a-pattern-for-any-new-search-exits-to-be-created--further-optional-parameters-can-also-be-defined--such-as-any-export-parameters--for-more-information--see-the-documentation-for-this-function-module---if-a-search-help-exit-is-assigned-to-a-search-help--it-is-called-by-the-help-processor-at-the-following-events--these-events-are-points-where-user-actions-are-allowed--and-it-makes-sense-for-the-user-to-respond-------before-the-dialog-box-with-a-search-path-selection-is-displayed-----------selone-event--only-in-collective-search-helps--the-search-help-exit-can-be-used-here--for-example--to-restrict-which-search-helps-are-available--this-is-the-only-event-in-which-the-search-help-exit-is-called-for-collective-search-helps--all-other-events-call-the-search-help-exit-for-the-selected-elementary-search-help-----------after-an-elementary-search-help-is-selected-----------presel1-event--this-is-when-the-binding-of-the-search-help-to-the-dynpro-can-be-affected--for-example-by-associating-search-help-parameters-with-dynpro-fields-----------before-the-dialog-box-for-entering-conditions-is-displayed-----------presel-event--this-is-when-the-default-content-of-the-dialog-box-can-be-modified--or-the-dialog-box-hidden------------before-the-data-selection-----------select-time--some-or-all-of-the-selected-values-can-be-passed-from-the-search-help-exit-----------before-displaying-the-proposal-list-----------disp-event--this-is-when-the-proposal-list-display-can-be-affected-by-the-search-help-exit--this-makes-it-possible--for-example--to-hide-certain-entries-or-fields-of-a-table-from-the-user-depending-on-the-user-s-authorizations-----------before-the-values-chosen-by-the-user-are-passed-to-the-screen-layout-----------return-event--it-may-be-useful-to-modify-the-further-program-flow-here-depending-on-which-value-is-chosen--------some-requirements-for-search-helps-occur-repeatedly--one-example-is-the-option-of-determining-a-search-help-dynamically-at-poh-time--cases-like-this-are-covered-by-default-function-modules-that-are-used-either-directly-as-search-help-exits-or-that-can-be-called-in-search-help-exits--these-function-modules-are-prefixed-with-f4ut-----executable-example---input-helps-from-abap-dictionary--javascript-call-link---abendynpro-f4-help-dic-abexa-htm-----------abenabap-dynpros-value-help-dynp-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---input-help--javascript-call-link---abenabap-dynpros-value-help-htm---------dynpro---input-helps-on-dynpros--an-abap-dictionary--search-help--javascript-call-link---abensearch-help-glosry-htm-----glossary-entry---can-be-bound-directly-to-a-dynpro-field--here--the-first-parameter-of-the-search-help-is-assigned-to-the-dynpro-field--only-values-from-the-proposal-list-of-the-screen-can-be-transported---hint--obsolete-input-helps-on-dynpros-are-possible-using-the-additions--values--javascript-call-link---dynpfield-value-select-htm-----and--select--javascript-call-link---dynpfield-value-select-htm-----of-the-dynpro-logic-statement--field--javascript-call-link---dynpfield-htm------------abenabap-dynpros-value-help-mod-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---input-help--javascript-call-link---abenabap-dynpros-value-help-htm---------dynpro---input-help-in-dialog-modules--to-define-input-helps-in-dialog-modules--dialog-modules-can-be-called-at-pov-time---process-on-value-request----------field-field-module-mod---------after--process-on-value-request--javascript-call-link---dynpprocess-htm------the-module-statement-can-only-be-used-in-combination-with-the-field-statement--when-f4-is-selected--the-dialog-module-mod-of-the-field-statement-on-whose-field-field-the-cursor-is-positioned--if-multiple-field-statements-are-specified-for-the-same-field-field--only-the-first-statement-is-executed--the-dialog-module-mod-does-not-provide-the-content-of-the-dynpro-field-field--since-this-content-is-not-transported-by-the-field-statement-at-process-on-help-request-time--if-the-recommended--search-helps--javascript-call-link---abensearch-help-glosry-htm-----glossary-entry---and-search-help-exits-do-not-meet-requirements--proposal-lists-for-the-input-help-can-be-programmed-in-this-dialog-module---function-modules-are-available-here-that-support-search-helps-as-well-as-all-other-types-of-input-help--and-which-also-transport-data-between-the-dynpro-and-the-abap-program--these-function-modules-are-prefixed-with-f4if----the-most-important-are-------f4if--field--value--request----------calls-the-input-help-in-the-abap-dictionary-dynamically--the-import-parameters-tabname-and-fieldname-can-be-used-to-pass-the-name-of-the-component-of-a-structure-or-database-in-the-abap-dictionary-to-the-function-module--the-abap-dictionary-input-help-defined-for-this-component-is-called--all-relevant-dynpro-fields-are-read--any-fields-selected-from-the-proposal-list-are-either-passed-to-the-relevant-input-enabled-screen-fields--if-the-import-parameters-dynpprog--dynpnr--and-dynprofield-are-specified--or-passed-back-in-the-table-parameter-return--tab-----------f4if--int--table--value--request----------this-function-module-displays-a-proposal-list-created-in-the-abap-program--this-list-is-passed-to-the-function-module-in-the-table-parameter-value--tab--the-selection-of-the-user-is-either-passed-to-the-corresponding-input-enabled-screen-fields--if-the-import-parameters-dynpprog--dynpnr--and-dynprofield-are-specified--or-passed-back-in-the-table-parameter-return--tab--------the-additional-function-modules-dynp--values--read-and-dynp--values--update-read-and-return-dynpro-fields-at-pov-time--for-further-information--see-the-relevant-function-module-documentation---executable-example---input-helps-in-dialog-modules--javascript-call-link---abendynpro-f4-help-dial-abexa-htm-----------abenabap-dynpros-value-help-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---input-help--dynpros-use-input-helps-to-support-interactive-input--this-can-be-done-in-three-different-ways--------input-helps-from-the-abap-dictionary--javascript-call-link---abenabap-dynpros-value-help-auto-htm--------------the-associated--search-help--javascript-call-link---abensearch-help-glosry-htm-----glossary-entry---is-provided-automatically-for-dynpro-fields-from-the-abap-dictionary--if-a-field-has-no-search-help-defined--the-abap-dictionary-still-offers-the-content-of-a-check-table--the-fixed-values-of-the-corresponding-domain--or-static-calendar-help-or-clock-help-as-input-help------------input-helps-on-the-dynpro--javascript-call-link---abenabap-dynpros-value-help-dynp-htm--------------abap-dictionary-search-helps-can-be-linked-with-individual-dynpro-fields------------input-helps-in-dialog-modules--javascript-call-link---abenabap-dynpros-value-help-mod-htm--------------in-dynpro-flow-logic--dialog-modules-providing-self-programmed-input-help-can-be-called-at-pov-time--------these-three-options-are-ordered-by-ascending-priority--if-different-techniques-are-used-at-the-same-time--the-pov-module-calls-override-any-definition-on-the-dynpro--which-in-turn-overrides-the-binding-to-the-abap-dictionary---these-three-options-should--however--be-applied-in-the-given-order--if-possible--a-search-help-from-abap-dictionary-should-always-be-defined-for-the-input-help-and-input-help-should-only-be-defined-in-dialog-modules-if-no-other-option-is-available--in-particular--the-enhancement-of-search-helps-using-search-help-exits-should-be-considered-beforehand---continue--dynpro---input-helps-in-the-abap-dictionary--javascript-call-link---abenabap-dynpros-value-help-auto-htm------dynpro---input-helps-on-dynpros--javascript-call-link---abenabap-dynpros-value-help-dynp-htm------dynpro---input-help-in-dialog-modules--javascript-call-link---abenabap-dynpros-value-help-mod-htm-----------abenabap-dynpros-listbox-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---dropdown-list-boxes---dropdown-list-boxes--javascript-call-link---abendropdown-listbox-glosry-htm-----glossary-entry----which-contain-a-predefined-set-of-proposal-values--can-be-defined-for-input-output-fields-on-dynpros--it-is-not-possible-to-enter-a-value-in-this-type-of-input-field-and-a-value-must-be-copied-from-the-proposal-list-instead--if-a-dropdown-list-box-is-assigned-to-a-field--the-input-help-key--f4--cannot-be-used---a-dropdown-list-box-is-a-single-column-list-of-text-fields-with-a-maximum-length-of-80-characters--internally--each-text-field-is-linked-with-a-key-of-up-to-40-characters--when-the-user-selects-a-line--the-content-of-the-text-field-is-entered-in-the-input-field-on-the-screen-and-the-content-of-the-key-is-passed-to-the-dynpro-field--this-means-that-the-content-and-length-of-the-screen-field-and-dynpro-field-are-not-generally-identical---if-a-function-code-is-assigned-to-an-input-output-field-with-a-dropdown-list-box--selecting-a-value-raises-pai-immediately-and-the-function-code-is-passed-to-the-fields-sy-ucomm-and-the-ok-field--if-no-function-code-is-assigned--pai-must-be-raised-as-usual-using-a-different-screen-element---if-a-dropdown-list-box-is-linked-with-an-input-output-field--the-attribute-value-list-of-the-screen-element-can-be-used-to-define-how-the-texts-in-the-dropdown-list-box-are-created--there-are-two-options-------value-list-from-the-input-help--recommended-----------if-the-attribute-value-list-is-empty--the-text-field-of-the-dropdown-list-box-takes-the-first-column-of-the--input-help--javascript-call-link---abenabap-dynpros-value-help-htm-----linked-with-the-screen-field--this-input-help-should-have-two-columns--the-key-of-the-dropdown-list-box-is-filled-automatically-from-the-second-column-----------value-list-from-pbo-modules--not-recommended-----------if-the-attribute-value-list-has-the-value--a---the-value-list-must-be-filled-using-the-function-module-vrm--set--values-before-the-screen-layout-is-sent--this-is-done-by-passing-an-internal-table-of-the-type-vrm--values-of-the-type-pool-vrm-to-the-import-parameter-values-of-the-function-module--the-line-type-is-a-structure-consisting-of-two-text-fields--key-and-text--with-a-length-of-40-or-80-characters-respectively--the-table-lines-can-combine-values-in-the-component-key-with-any-texts-in-the-component-text--the-associated-input-output-field-is-passed-to-the-import-parameter-id--------executable-examples-------list-box-with-value-list-from-input-help--javascript-call-link---abendynpro-drop1-abexa-htm----------list-box-with-value-list-from-pbo-module--javascript-call-link---abendynpro-drop2-abexa-htm-----------abeninput-help-abexas-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---field-helps--input-helps--and-dropdown-list-boxes--continue---example--exa-gif--example----dynpro---field-help--javascript-call-link---abendynpro-f1-help-abexa-htm-------example--exa-gif--example----dynpro---input-helps-in-the-abap-dictionary--javascript-call-link---abendynpro-f4-help-dic-abexa-htm-------example--exa-gif--example----dynpro---input-help-in-dialog-modules--javascript-call-link---abendynpro-f4-help-dial-abexa-htm-------example--exa-gif--example----dynpro---list-box-with-value-list-from-input-help--javascript-call-link---abendynpro-drop1-abexa-htm-------example--exa-gif--example----dynpro---list-box-with-value-list-from-pbo-module--javascript-call-link---abendynpro-drop2-abexa-htm-----------abendynpro-f1-help-abexa-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---field-helps--input-helps--and-dropdown-list-boxes--javascript-call-link---abeninput-help-abexas-htm---------dynpro---field-help--this-example-demonstrates-how-a-field-help-is-implemented-on-dynpros---source-code--report-demo--dynpro--f1--help--data---text-----type-c-length-30---------docu--num-type-c-length-4---------int------type-i---------links----type-table-of-tline---------field5---type-c-length-10---------field6---type-c-length-10--tables-demof1help--text---text-001--call-screen-100--module-cancel-input----leave-program--endmodule--module-f1--help--field4-input----int----1----case-int------when-1--------docu--num----0100-------when-2--------docu--num----0200---------int---0----endcase--endmodule--module-f1--help--field5-input----call-function--help--object--show--for--field---------exporting-------------doklangu-----------sy-langu-------------doktitle-----------text-002-------------called--for--tab------demof1help--------------called--for--field----field1---endmodule--module-f1--help--field6-input----call-function--help--object--show---------exporting-------------dokclass----tx--------------doklangu---sy-langu-------------dokname-----demo--for--f1--help--------------doktitle---text-003--------tables-------------links------links--endmodule---description--the-static-next-dynpro-number-of-dynpro-100-is-100--the-input-fields-are-assigned-the-fields-demof1help-field1--demof1help-field2--demof1help-field3--and-demof1help-field4-from-the-abap-dictionary-and-the-fields-field5-and-field6-from-the-abap-program--the-function-code-of-the-pushbutton-is-cancel-with-the-function-type-e--the-dynpro-flow-logic-is-as-follows---process-before-output--process-after-input----module-cancel-at-exit-command--process-on-help-request----field-demof1help-field4-module-f1--help--field4-with-docu--num----field-field5-module-f1--help--field5----field-field6-module-f1--help--field6---the-components-field1-through-field4-of-the-structure-demof1help-refer-to-the-data-element-demof1type--this-data-element-is-documented-and-two-supplementary-documentation-objects-with-numbers-0100-and-0200-are-created--the-user-sees-the-following-field-help-------if-the-user-chooses-f1-on-the-input-field-for-demof1help-field1--the-data-element-documentation-of-demof1type-is-displayed--since-the-field-is-not-specified-after-process-on-help-request------if-the-user-chooses-f1-repeatedly-for-the-input-fields-demof1help-field2-and-demof1help-field3--the-data-element-documentation-is-displayed--along-with-the-supplementary-documentation-for-either-0100-or-0200--the-necessary-assignments-are-stored-statically-in-the-database-table-thlpf------if-the-user-chooses-f1-repeatedly-for-the-input-field-demof1help-field4--the-data-element-documentation-is-displayed--along-with-the-supplementary-documentation-for-either-0100-or-0200--the-variable-docu--num-is-filled-accordingly-in-the-dialog-module-f1--help--field2------if-the-user-chooses-f1-on-the-input-field-for-field5--the-data-element-documentation-of-demof1type-is-displayed-since-this-is-called-in-the-dialog-module-f1--help--field5-by-the-function-module-help--object--show--for--field------if-the-user-chooses-f1-on-the-input-field-for-field6--the-sapscript-document-demo--for--f1--help-is-displayed-since-this-is-called-in-the-dialog-module-f1--help--field6-by-the-function-module-help--object--show--------abendynpro-f4-help-dic-abexa-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---field-helps--input-helps--and-dropdown-list-boxes--javascript-call-link---abeninput-help-abexas-htm---------dynpro---input-helps-in-the-abap-dictionary--this-example-demonstrates-how-input-helps-from-the-abap-dictionary-can-be-used---source-code--report-demo--dynpro--f4--help--dictionary--tables-demof4help--call-screen-100--module-cancel-input----leave-program--endmodule---description--the-static-next-dynpro-number-of-dynpro-100-is-100--the-input-fields-are-assigned-the-components-of-the-structure-demof4help-from-the-abap-dictionary--the-function-code-of-the-pushbutton-is-cancel-with-the-function-type-e--when-the-user-chooses-the-f4-help-for-the-individual-fields--the-following-is-displayed-------the-fields-date-and-time-refer-to-the-components-date--field-and-time--field-of-the-ddic-structure--the-data-type-is-either-dats-or-tims--consequently--the-input-help-displayed-here-is-either-a-calendar-or-a-clock--both-set-to-the-current-values-by-default------the-field-numbers-refers-to-the-component-num--field-of-the-ddic-structure--this-component-is-based-on-the-domain-demo--numbers-to-which-ten-fixed-values-are-assigned--these-are-displayed-as-the-input-help------the-first-field-airline-refers-to-the-component-carrier1-of-the-ddic-structure--this-component-is-based-on-the-data-element-demof4de--the-search-help-demo--f4--de-with-the-parameter-carrid-is-assigned-to-this-data-element--the-search-help-reads-the-columns-carrid-and-carrname-of-the-database-table-scarr--only-scarrname-is-specified-but-carrid-is-flagged-as-an-export-parameter------the-second-field-airline-refers-to-the-component-carrier2-of-the-ddic-structure--this-component-is-assigned-the-check-table-scarr--the-check-table-scarr-in-turn-is-assigned-the-search-help-h--scarr-which-can-display-and-export-both-columns-carrid-and-carrname------the-field-connection-number-refers-to-the-component-connid-of-the-ddic-structure--this-component-is-assigned-the-search-help-demo--f4--field--the-search-help-has-two-parameters--carrid-and-connid--which-are-assigned-to-the-components-carrier2-and-connid-of-the-structure--the-search-help-imports-carrier--reads-the-associated-data-from-the-database-table-spfli--displays-carrier-and-connid--and-exports-connid--------abendynpro-f4-help-dial-abexa-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------dynpro---field-helps--input-helps--and-dropdown-list-boxes--javascript-call-link---abeninput-help-abexas-htm---------dynpro---input-help-in-dialog-modules--this-example-demonstrates-how-input-helps-can-be-implemented-in-dialog-modules---source-code--report-demo--dynpro--f4--help--module---types--begin-of-values-----------carrid-type-spfli-carrid-----------connid-type-spfli-connid---------end-of-values--data--carrier-3--type-c--------connection-4--type-c--data--progname-type-sy-repid--------dynnum---type-sy-dynnr--------dynpro--values-type-table-of-dynpread--------field--value-like-line-of-dynpro--values--------values--tab-type-table-of-values--call-screen-100--module-init-output----progname---sy-repid----dynnum-----sy-dynnr----clear--field--value--dynpro--values----field--value-fieldname----carrier-----append-field--value-to-dynpro--values--endmodule--module-cancel-input----leave-program--endmodule--module-value--carrier-input----call-function--f4if--field--value--request---------exporting-------------tabname--------demof4help--------------fieldname------carrier1--------------dynpprog------progname-------------dynpnr--------dynnum-------------dynprofield----carrier---endmodule--module-value--connection-input----call-function--dynp--values--read---------exporting-------------dyname---------------progname-------------dynumb---------------dynnum-------------translate--to--upper----x---------tables-------------dynpfields-----------dynpro--values----field--value---dynpro--values---1-------select--carrid--connid-----from--spfli-----where-carrid---( CONV #( field\_value-fieldvalue ) )
    INTO  CORRESPONDING FIELDS OF TABLE @values\_tab.
  CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'
       EXPORTING
            retfield    = 'CONNID'
            dynpprog    = progname
            dynpnr      = dynnum
            dynprofield = 'CONNECTION'
            value\_org   = 'S'
       TABLES
            value\_tab   = values\_tab.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON VALUE-REQUEST.
  FIELD carrier MODULE value\_carrier.
  FIELD connection MODULE value\_connection.

When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   For the airline, the module value\_carrier is called at POV. There, the function module F4IF\_FIELD\_VALUE\_REQUEST displays the input help of the component CARRIER1 of the structure DEMOF4HELP from the ABAP Dictionary, namely the search help DEMOF4DE. The selection of the user is passed to the dynpro field carrier.
-   For the connection, the module value\_connection is called at POV. There, the function module DYNP\_VALUES\_READ passes the value of the dynpro field carrier to the program. SELECT then extracts the matching values from the database table SPFLI into the internal table values\_tab and passes them to the function module F4IF\_INT\_TABLE\_VALUE\_REQUEST. The function module displays these values as an input help and passes the selection of the user to the dynpro field connection.


### abendynpro_drop1_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

dynpro - List Box with Value List from Input Help

This example demonstrates the recommended way to enable a dropdown list box.

Source Code

\*&---------------------------------------------------------------------\*
\*& Report  DEMO\_DROPDOWN\_LIST\_BOX                                      \*
\*&---------------------------------------------------------------------\*
REPORT demo\_dropdown\_list\_box.
\* Dynpro Interfaces
TABLES sdyn\_conn.
DATA   ok\_code TYPE sy-ucomm.
\* Local class definition
CLASS dynpro\_utilities DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS value\_help.
ENDCLASS.
\* Local class implementation
CLASS dynpro\_utilities IMPLEMENTATION.
  METHOD value\_help.
    TYPES: BEGIN OF carrid\_line,
             carrid   TYPE spfli-carrid,
             carrname TYPE scarr-carrname,
           END OF carrid\_line.
    DATA carrid\_list TYPE STANDARD TABLE OF carrid\_line.
    SELECT carrid, carrname
                FROM scarr
                INTO CORRESPONDING FIELDS OF TABLE @carrid\_list.
    CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'
         EXPORTING
              retfield        = 'CARRID'
              value\_org       = 'S'
         TABLES
              value\_tab       = carrid\_list
         EXCEPTIONS
              parameter\_error = 1
              no\_values\_found = 2
              OTHERS          = 3.
    IF sy-subrc <> 0.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.
\* Event Blocks and Dialog Modules
START-OF-SELECTION.
  CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  CASE ok\_code.
    WHEN 'SELECTED'.
      MESSAGE i888(sabapdemos) WITH sdyn\_conn-carrid.
  ENDCASE.
ENDMODULE.
MODULE create\_dropdown\_box INPUT.
  dynpro\_utilities=>value\_help( ).
ENDMODULE.

Description

The static dynpro number of dynpro 100 is 100. The screen layout contains a single input field, namely the component SDYN\_CONN-CARRID. Its attribute dropdown is "Listbox", the output length is 20, the attribute value list is empty, and it is assigned function code SELECTED. The functions BACK, EXIT, and CANCEL are defined in the GUI status with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.
PROCESS ON VALUE-REQUEST.
  FIELD sdyn\_conn-carrid MODULE create\_dropdown\_box.

The user is not allowed to enter values in the screen field. When the user selects the input field on dynpro 100, the system displays a list box. The Value list attribute is empty, so the system launches the input mechanism. In this case, the event block PROCESS ON VALUE-REQUEST is created in the dynpro flow logic which overrides all other mechanisms. The system fills a two-column internal table in the corresponding dialog module and passes it to the input help using the function module F4IF\_INT\_TABLE\_VALUE\_REQUEST. The system inserts the two columns of the table into the list box.

When the user selects a line in the list box, the PAI event is raised using the function code SELECTED and the value in the first column of the internal table is copied to the input field.


### abendynpro_drop2_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

dynpro - List Box with Value List from PBO Module

This example demonstrates a non-recommended way to enable a dropdown list box.

Source Code

REPORT demo\_dynpro\_dropdown\_listbox.
DATA: name  TYPE vrm\_id,
      list  TYPE vrm\_values,
      value LIKE LINE OF list.
DATA: wa\_spfli TYPE spfli,
      ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
TABLES demof4help.
name = 'DEMOF4HELP-CONNID'.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE init\_listbox OUTPUT.
  CLEAR: demof4help-connid,
         list.
  SELECT  connid, cityfrom, cityto, deptime
          FROM spfli
          WHERE carrid = @demof4help-carrier2
          INTO CORRESPONDING FIELDS OF @wa\_spfli.
    value-key  = wa\_spfli-connid.
    WRITE wa\_spfli-deptime TO value-text USING EDIT MASK '\_\_:\_\_:\_\_'.
    value-text =
      |{ value-text } { wa\_spfli-cityfrom } { wa\_spfli-cityto }|.
    APPEND value TO list.
  ENDSELECT.
  IF sy-subrc <> 0.
    MESSAGE 'No connections for that airline' TYPE 'I' DISPLAY LIKE 'E'.
    LEAVE TO SCREEN 100.
  ENDIF.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = name
      values = list.
ENDMODULE.
MODULE user\_command\_100.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'CARRIER' AND NOT demof4help-carrier2 IS INITIAL.
    LEAVE TO SCREEN 200.
  ELSE.
    SET SCREEN 100.
  ENDIF.
ENDMODULE.
MODULE user\_command\_200.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'SELECTED'.
    MESSAGE i888(sabapdemos) WITH text-001 demof4help-carrier2
                                          demof4help-connid.
    CLEAR demof4help.
  ENDIF.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 200. The input field is assigned the component CARRIER2 of the structure DEMOF4HELP from the ABAP Dictionary. Its dropdown attribute is L, the output length is 15, the value list attribute is empty, and it is assigned the function code CARRIER. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_100.

The static next dynpro number of dynpro 200 is 100. The input field is assigned the component CONNID of the structure DEMOF4HELP from the ABAP Dictionary. Its dropdown attribute is L, the output length is 30, the value list attribute is A, and it is assigned the SELECTED function code. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_listbox.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_200.

The user is not allowed to enter values in the screen fields. When selecting the input field on dynpro 100, the user sees a value list in the list box derived from the input help of the DEMOF4HELP-CARRIER2 field. In this case, this is the search help H\_SCARR assigned to the SCARR check table in the ABAP Dictionary. The value list contains the names of the airlines. When the user selects an entry, the dynpro field is filled with the ID of the airline, and the event PAI is raised. The module user\_command\_100 checks the OK field and calls dynpro 200.

At the PBO event of dynpro 200, an internal table called list is filled with values from the database table SPFLI. The key component is filled with the flight connection numbers, and other relevant information is stored in the text field. The list table is passed to the VRM\_SET\_VALUES function module. When the user selects the input field on dynpro 200, the text column of the internal table is displayed in the list box. When the user selects an entry, the dynpro field is filled with the associated entry from the key column, and the event PAI is raised. The module user\_command\_200 checks and processes the OK field.


### abeninput_help_abexas.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

dynpro - Field Helps, Input Helps, and Dropdown List Boxes

Continue
![Example](exa.gif "Example") [dynpro - Field Help](javascript:call_link\('abendynpro_f1_help_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Helps in the ABAP Dictionary](javascript:call_link\('abendynpro_f4_help_dic_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Help in Dialog Modules](javascript:call_link\('abendynpro_f4_help_dial_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - List Box with Value List from Input Help](javascript:call_link\('abendynpro_drop1_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - List Box with Value List from PBO Module](javascript:call_link\('abendynpro_drop2_abexa.htm'\))
