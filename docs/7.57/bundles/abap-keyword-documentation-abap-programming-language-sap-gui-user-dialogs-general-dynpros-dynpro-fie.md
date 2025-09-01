# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Field Help, Input Help, and Dropdown List Boxes

Included pages: 15


### abenabap_dynpros_help.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Help, Input Help, and Dropdown List Boxes, ABENABAP_DYNPROS_HELP, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Help, ABENABAP_DYNPROS_FIELD_HELP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

dynpro - Field Help

There are three ways of displaying field help for screen elements on dynpros:

-   [Displaying the Documentation of the Data Element](#abenabap-dynpros-field-help-1-------displaying-the-supplementary-documentation-of-the-data-element---@ITOC@@ABENABAP_DYNPROS_FIELD_HELP_2)
-   [Calling Help Texts in Dialog Modules](#abenabap-dynpros-field-help-3---displaying-the-documentation-of-the-data-element-----if-a-screen-element-in-the-screen-painter-was-defined-by-copying-a-field-from-the-abap-dictionary--the--documentation--javascript-call-link---abenddic-data-elements-sema-htm-----of-the-associated-data-element-is-displayed-automatically-when-the-f1-help-is-selected-for-this-field--unless-this-step-is-overridden-in-the-dynpro-flow-logic---displaying-the-supplementary-documentation-of-the-data-element-----the-documentation-of-some-data-elements-has-supplementary--documentation--javascript-call-link---abenddic-data-elements-sema-htm------the-supplementary-documentation-for-a-dynpro-field-is-created-in-the-screen-painter-and-not-in-the-abap-dictionary-in-the-abap-workbench--here--the-supplementary-documentation-is-defined-for-the-data-element-using-a-number---supplementary-documentation-of-this-type-is-specific-to-a-program-and-to-a-dynpro--any-supplementary-documentation-with-the-same-number-defined-in-the-abap-dictionary-is-overridden-by-any-dynpro-specific-supplementary-documentation--supplementary-documentation-defined-in-abap-dictionary-can-still-be-linked-with-a-dynpro-field-in-table-thlpf--this-requires-a-new-line-in-table-thlpf-containing-the-program-name--dynpro-number--field-name--and-the-number-of-the-supplementary-documentation---to-be-able-to-display-the-supplementary-documentation--the-dynpro-flow-logic-must-respond-to-the-poh-event-as-follows---process-on-help-request---------field-field---module-mod---with-hlp--javascript-call-link---abendynp-field-help-htm-------------only--field--javascript-call-link---dynpfield-htm-----statements-are-allowed-after--process-on-help-request--javascript-call-link---dynpprocess-htm------if-the-flow-logic-of-a-dynpro-does-not-contain-the-event-keyword-process-on-help-request--f1-displays-either-the-data-element-documentation-of-the-field-on-which-the-cursor-is-positioned-or-no-help-documentation-is-displayed--in-other-cases--the-following-field-statement-is-executed-on-whose-field-field-the-cursor-is-positioned---if-dynpro-specific-supplementary-documentation-exists-for-the-field-field--this-is-displayed-by-specifying-its-number-hlp--a-variable-hlp-can-be-filled-before-the-help-is-displayed--for-example--by-calling-the-dialog-module-mod--at-the-event-process-on-help-request--the-field-statement-does-not--however--transport-the-content-of-the-dynpro-field-field-to-the-abap-program---calling-help-texts-in-dialog-modules-----any-help-text-can-be-displayed-by-calling-dialog-modules-at-poh---process-on-help-request-----------field-field-module-mod---javascript-call-link---abendynp-field-help-htm------------after--process-on-help-request--javascript-call-link---dynpprocess-htm------the-module-statement-can-only-be-used-in-combination-with-the-field-statement--when-f1-is-selected--the-dialog-module-mod-of-the-field-statement-on-whose-field-field-the-cursor-is-positioned--if-multiple-field-statements-are-specified-for-the-same-field-field--only-the-first-statement-is-executed--the-dialog-module-mod-does-not-provide-the-content-of-the-dynpro-field-field--since-this-content-is-not-transported-by-the-field-statement-at-process-on-help-request-time---the-dialog-module-mod-is-defined-like-a-regular-pai-module-in-the-abap-program--the-processing-logic-of-the-module-must-ensure-that-adequate-help-is-displayed-for-the-selected-field--function-modules-such-as-help--object--show--for--field-or-help--object--show-can-be-used-to-do-this---executable-example---field-help--javascript-call-link---abendynpro-f1-help-abexa-htm-----------abenabap-dynpros-value-help-htm-------------as-abap-release-757---copyright-2023-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------general-dynpros--javascript-call-link---abenabap-dynpros-htm---------dynpro---field-help--input-help--and-dropdown-list-boxes--javascript-call-link---abenabap-dynpros-help-htm---------------mail-gif-object-mail-gif-sap-language-en--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Help, ABENABAP_DYNPROS_VALUE_HELP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Help

Dynpros use input helps to support interactive input. This can be done in three different ways.

-   [Input helps from the ABAP Dictionary](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\))
    
    The associated [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") is provided automatically for dynpro fields from the ABAP Dictionary. If a field has no search help defined, the ABAP Dictionary still offers the content of a check table, the fixed values of the corresponding domain, or static calendar help or clock help as input help.
    
-   [Input helps on the dynpro](javascript:call_link\('abenabap_dynpros_value_help_dynp.htm'\))
    
    ABAP Dictionary search helps can be linked with individual dynpro fields.
    
-   [Input helps in dialog modules](javascript:call_link\('abenabap_dynpros_value_help_mod.htm'\))
    
    In dynpro flow logic, dialog modules providing self-programmed input help can be called at POV time.
    

These three options are ordered by ascending priority. If different techniques are used at the same time, the POV module calls override any definition on the dynpro, which in turn overrides the binding to the ABAP Dictionary.

These three options should, however, be applied in the given order. If possible, a search help from ABAP Dictionary should always be defined for the input help and input help should only be defined in dialog modules if no other option is available. In particular, the enhancement of search helps using search help exits should be considered beforehand.

Continue
[dynpro - Input Helps in the ABAP Dictionary](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\))
[dynpro - Input Helps on Dynpros](javascript:call_link\('abenabap_dynpros_value_help_dynp.htm'\))
[dynpro - Input Help in Dialog Modules](javascript:call_link\('abenabap_dynpros_value_help_mod.htm'\))


### abenabap_dynpros_value_help_auto.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Input Help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Helps in the ABAP Dictionary, ABENABAP_DYNPROS_VALUE_HELP_AUTO, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Helps in the ABAP Dictionary

The primary input helps used in the ABAP Dictionary are [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). A search help is a standalone [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that is used specifically to provide input helps on screen fields. Search helps can be linked with table fields and data elements. The content of [check tables](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry"), [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry"), or calendar helps and clock helps can be used instead of search helps.

-   [Overview of ABAP Dictionary Input Helps](#abenabap-dynpros-value-help-auto-1-------hierarchy-of-the-input-helps---@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_2)
-   [Data Transport of Search Helps](#abenabap-dynpros-value-help-auto-3-------search-help-exits---@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_4)

Overview of ABAP Dictionary Input Helps   

-   Search helps
    
    There are two kinds of search helps: elementary and collective. An elementary search help represents a search path and defines where the data in the proposal list is read from, how data is transported between the screen layout and the infrastructure, and how the input help dialog is designed. A collective search help comprises multiple elementary search helps. A collective search help combines all search paths that are meaningful for a field.
    
-   Check tables
    
    In the case of [foreign key relationships](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary, the key fields of the check table can be used as input help for a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") used as a dynpro field.
    
-   Fixed values
    
    The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as an input help for dynpro fields that reference the domain. The [value table](javascript:call_link\('abenvalue_table_glosry.htm'\) "Glossary Entry") of a domain, on the other hand, cannot be used for input helps.
    
-   Calendar helps and clock helps
    
    Predefined calendar helps and clock helps can be used as input helps for fields of the type DATS and TIMS.
    

Hierarchy of the Input Helps   

Search helps can be bound in different ways to fields of database tables or components of ABAP Dictionary structures. The input help available to a user depends on the way a search help is bound. The following list shows, in ascending order of priority, the input help used:

-   Calendar helps and clock helps
    
    If no other input helps are defined for fields of the type DATS or TIMS, the calendar help or clock help is used.
    
-   Fixed values
    
    If neither a check table nor a search help is defined for a field, any fixed values of the domain are used for the input help.
    
-   Search help of the data element
    
    If neither a check table nor a search help is defined for a field, the search help linked with the data element of the field is used.
    
-   Check table
    
    If the check table of a field does not have a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") nor its own search help, and no dedicated search help is specified for a field, the content of the key fields of the check table is used as an input help.
    
-   Check table with text table
    
    If the [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") of the check table of the fields is a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry"), the associated text from the text table is displayed in the input help in the logon language of the user.
    
-   Check table with search help
    
    If a search help is bound to the check table of a field, the search help is used with the values from the check table, but also enables a data transport of multiple parameters.
    
-   Search help of the field
    
    If the dynpro field is defined with reference to a field of a structure or a database table and a search help is assigned to this field directly, this binding has the highest priority and is always used as an input help. To avoid errors in the [automatic input check](javascript:call_link\('abenabap_dynpros_checks_auto.htm'\)), the bound search help should only propose values that also exist in a check table.
    

If necessary, the input help is modified using methods of [flagging obsolete data in check tables](javascript:call_link\('abenddic_deprecation.htm'\)).

Data Transport of Search Helps   

Search helps have an interface (a search help parameter) that controls which input is respected by the screen layout and which screen fields can be filled with data from the selected line in the proposal list. Parameters of a search help can be defined as import and export parameters. A parameter can be both an input and an export parameter at the same time.

When the input help is called, data is transported between the dynpro fields and the import parameters of the search help. If a search help is bound to a data element or directly to a screen field of the dynpro, only a single search help parameter is assigned to the field. In this case, data is transported only between the field and this parameter. If the search help is bound to the table field or structure field or to the check table of the field, it may be necessary to fill multiple search help parameters. When the input help is called, an attempt is made to find an identically named field for each import parameter of the search help that is bound to a table field or structure field. If an appropriate field is found, its content is passed to the search help parameter.

When a line in the proposal list of the search help is selected, data is transported between the export parameters of the search help and the assigned dynpro fields. The values of the proposal list are passed only to input-enabled fields and to fields that are linked with only a single export parameter of the search help.

Search Help Exits   

A search help exit can be used to modify the standard way an input help for a field works. A search help exit is a function module with a predefined interface and can be called at defined points within the input help process. A search help exit can be programmed to modify the program flow of the search help or replace certain steps.

The function module can affect data such as the properties of the search helps, the selection options that apply when preselecting from the proposal list, the proposal list itself, or the subsequent data in the program flow.

Each search help exit must have the same interface as the function module F4IF\_SHLP\_EXIT\_EXAMPLE, which is used as a pattern for any new search exits to be created. Further optional parameters can also be defined, such as any export parameters. For more information, see the documentation for this function module.

If a search help exit is assigned to a search help, it is called by the help processor at the following events. These events are points where user actions are allowed, and it makes sense for the user to respond:

-   Before the dialog box with a search path selection is displayed.
    
    SELONE event; only in collective search helps. The search help exit can be used here, for example, to restrict which search helps are available. This is the only event in which the search help exit is called for collective search helps. All other events call the search help exit for the selected elementary search help.
    
-   After an elementary search help is selected.
    
    PRESEL1 event. This is when the binding of the search help to the dynpro can be affected, for example by associating search help parameters with dynpro fields.
    
-   Before the dialog box for entering conditions is displayed.
    
    PRESEL event. This is when the default content of the dialog box can be modified (or the dialog box hidden).
    
-   Before the data selection.
    
    SELECT time. Some or all of the selected values can be passed from the search help exit.
    
-   Before displaying the proposal list.
    
    DISP event. This is when the proposal list display can be affected by the search help exit. This makes it possible, for example, to hide certain entries or fields of a table from the user depending on the user's authorizations.
    
-   Before the values chosen by the user are passed to the screen layout.
    
    RETURN event. It may be useful to modify the further program flow here depending on which value is chosen.
    

Some requirements for search helps occur repeatedly. One example is the option of determining a search help dynamically at POH time. Cases like this are covered by default function modules that are used either directly as search help exits or that can be called in search help exits. These function modules are prefixed with F4UT\_.

Executable Example

[Input Helps from ABAP Dictionary](javascript:call_link\('abendynpro_f4_help_dic_abexa.htm'\))


### abenabap_dynpros_value_help_dynp.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Input Help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Helps on Dynpros, ABENABAP_DYNPROS_VALUE_HELP_DYNP, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Helps on Dynpros

An ABAP Dictionary [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") can be bound directly to a dynpro field. Here, the first parameter of the search help is assigned to the dynpro field. Only values from the proposal list of the screen can be transported.

Hint

Obsolete input helps on dynpros are possible using the additions [VALUES](javascript:call_link\('dynpfield_value_select.htm'\)) and [SELECT](javascript:call_link\('dynpfield_value_select.htm'\)) of the dynpro logic statement [FIELD](javascript:call_link\('dynpfield.htm'\)).


### abenabap_dynpros_value_help_mod.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Input Help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Help in Dialog Modules, ABENABAP_DYNPROS_VALUE_HELP_MOD, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Help in Dialog Modules

To define input helps in dialog modules, dialog modules can be called at POV time:

PROCESS ON VALUE-REQUEST.
  ...
  FIELD field MODULE mod.
  ...

After [PROCESS ON VALUE-REQUEST](javascript:call_link\('dynpprocess.htm'\)), the MODULE statement can only be used in combination with the FIELD statement. When F4 is selected, the dialog module mod of the FIELD statement on whose field field the cursor is positioned. If multiple FIELD statements are specified for the same field field, only the first statement is executed. The dialog module mod does not provide the content of the dynpro field field, since this content is not transported by the FIELD statement at PROCESS ON HELP-REQUEST time. If the recommended [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") and search help exits do not meet requirements, proposal lists for the input help can be programmed in this dialog module.

Function modules are available here that support search helps as well as all other types of input help, and which also transport data between the dynpro and the ABAP program. These function modules are prefixed with F4IF\_. The most important are:

-   F4IF\_FIELD\_VALUE\_REQUEST
    
    Calls the input help in the ABAP Dictionary dynamically. The import parameters TABNAME and FIELDNAME can be used to pass the name of the component of a structure or database in the ABAP Dictionary to the function module. The ABAP Dictionary input help defined for this component is called. All relevant dynpro fields are read. Any fields selected from the proposal list are either passed to the relevant input-enabled screen fields, if the import parameters DYNPPROG, DYNPNR, and DYNPROFIELD are specified, or passed back in the table parameter RETURN\_TAB.
    
-   F4IF\_INT\_TABLE\_VALUE\_REQUEST
    
    This function module displays a proposal list created in the ABAP program. This list is passed to the function module in the table parameter VALUE\_TAB. The selection of the user is either passed to the corresponding input-enabled screen fields, if the import parameters DYNPPROG, DYNPNR, and DYNPROFIELD are specified, or passed back in the table parameter RETURN\_TAB.
    

The additional function modules DYNP\_VALUES\_READ and DYNP\_VALUES\_UPDATE read and return dynpro fields at POV time. For further information, see the relevant function module documentation.

Executable Example

[Input Helps in Dialog Modules](javascript:call_link\('abendynpro_f4_help_dial_abexa.htm'\))


### abenabap_dynpros_value_help.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Help, ABENABAP_DYNPROS_VALUE_HELP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Help

Dynpros use input helps to support interactive input. This can be done in three different ways.

-   [Input helps from the ABAP Dictionary](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\))
    
    The associated [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") is provided automatically for dynpro fields from the ABAP Dictionary. If a field has no search help defined, the ABAP Dictionary still offers the content of a check table, the fixed values of the corresponding domain, or static calendar help or clock help as input help.
    
-   [Input helps on the dynpro](javascript:call_link\('abenabap_dynpros_value_help_dynp.htm'\))
    
    ABAP Dictionary search helps can be linked with individual dynpro fields.
    
-   [Input helps in dialog modules](javascript:call_link\('abenabap_dynpros_value_help_mod.htm'\))
    
    In dynpro flow logic, dialog modules providing self-programmed input help can be called at POV time.
    

These three options are ordered by ascending priority. If different techniques are used at the same time, the POV module calls override any definition on the dynpro, which in turn overrides the binding to the ABAP Dictionary.

These three options should, however, be applied in the given order. If possible, a search help from ABAP Dictionary should always be defined for the input help and input help should only be defined in dialog modules if no other option is available. In particular, the enhancement of search helps using search help exits should be considered beforehand.

Continue
[dynpro - Input Helps in the ABAP Dictionary](javascript:call_link\('abenabap_dynpros_value_help_auto.htm'\))
[dynpro - Input Helps on Dynpros](javascript:call_link\('abenabap_dynpros_value_help_dynp.htm'\))
[dynpro - Input Help in Dialog Modules](javascript:call_link\('abenabap_dynpros_value_help_mod.htm'\))


### abenabap_dynpros_listbox.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Dropdown List Boxes, ABENABAP_DYNPROS_LISTBOX, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Dropdown List Boxes

[Dropdown list boxes](javascript:call_link\('abendropdown_listbox_glosry.htm'\) "Glossary Entry"), which contain a predefined set of proposal values, can be defined for input/output fields on dynpros. It is not possible to enter a value in this type of input field and a value must be copied from the proposal list instead. If a dropdown list box is assigned to a field, the input help key (F4) cannot be used.

A dropdown list box is a single-column list of text fields with a maximum length of 80 characters. Internally, each text field is linked with a key of up to 40 characters. When the user selects a line, the content of the text field is entered in the input field on the screen and the content of the key is passed to the dynpro field. This means that the content and length of the screen field and dynpro field are not generally identical.

If a function code is assigned to an input/output field with a dropdown list box, selecting a value raises PAI immediately and the function code is passed to the fields sy-ucomm and the OK field. If no function code is assigned, PAI must be raised as usual using a different screen element.

If a dropdown list box is linked with an input/output field, the attribute Value List of the screen element can be used to define how the texts in the dropdown list box are created. There are two options:

-   Value list from the input help (recommended)
    
    If the attribute Value List is empty, the text field of the dropdown list box takes the first column of the [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) linked with the screen field. This input help should have two columns. The key of the dropdown list box is filled automatically from the second column.
    
-   Value list from PBO modules (not recommended)
    
    If the attribute Value List has the value "A", the value list must be filled using the function module VRM\_SET\_VALUES before the screen layout is sent. This is done by passing an internal table of the type VRM\_VALUES of the type pool VRM to the import parameter VALUES of the function module. The line type is a structure consisting of two text fields, KEY and TEXT, with a length of 40 or 80 characters respectively. The table lines can combine values in the component KEY with any texts in the component TEXT. The associated input/output field is passed to the import parameter ID.
    

Executable Examples

-   [List Box with Value List from Input Help](javascript:call_link\('abendynpro_drop1_abexa.htm'\))
-   [List Box with Value List from PBO Module](javascript:call_link\('abendynpro_drop2_abexa.htm'\))


### abeninput_help_abexas.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Helps, Input Helps, and Dropdown List Boxes, ABENINPUT_HELP_ABEXAS, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Field Helps, Input Helps, and Dropdown List Boxes

Continue
![Example](exa.gif "Example") [dynpro - Field Help](javascript:call_link\('abendynpro_f1_help_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Helps in the ABAP Dictionary](javascript:call_link\('abendynpro_f4_help_dic_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Help in Dialog Modules](javascript:call_link\('abendynpro_f4_help_dial_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - List Box with Value List from Input Help](javascript:call_link\('abendynpro_drop1_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - List Box with Value List from PBO Module](javascript:call_link\('abendynpro_drop2_abexa.htm'\))


### abendynpro_f1_help_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Help, ABENDYNPRO_F1_HELP_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

dynpro - Field Help

This example demonstrates how a field help is implemented on dynpros.

Source Code   

REPORT demo\_dynpro\_f1\_help.
DATA:  text     TYPE c LENGTH 30,
       docu\_num TYPE c LENGTH 4,
       int      TYPE i,
       links    TYPE TABLE OF tline,
       field5   TYPE c LENGTH 10,
       field6   TYPE c LENGTH 10.
TABLES demof1help.
text = text-001.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE f1\_help\_field4 INPUT.
  int += 1.
  CASE int.
    WHEN 1.
      docu\_num = '0100'.
    WHEN 2.
      docu\_num = '0200'.
      int = 0.
  ENDCASE.
ENDMODULE.
MODULE f1\_help\_field5 INPUT.
  CALL FUNCTION 'HELP\_OBJECT\_SHOW\_FOR\_FIELD'
       EXPORTING
            doklangu         = sy-langu
            doktitle         = text-002
            called\_for\_tab   = 'DEMOF1HELP'
            called\_for\_field = 'FIELD1'.
ENDMODULE.
MODULE f1\_help\_field6 INPUT.
  CALL FUNCTION 'HELP\_OBJECT\_SHOW'
       EXPORTING
            dokclass = 'TX'
            doklangu = sy-langu
            dokname  = 'DEMO\_FOR\_F1\_HELP'
            doktitle = text-003
       TABLES
            links    = links.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the fields DEMOF1HELP-FIELD1, DEMOF1HELP-FIELD2, DEMOF1HELP-FIELD3, and DEMOF1HELP-FIELD4 from the ABAP Dictionary and the fields field5 and field6 from the ABAP program. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON HELP-REQUEST.
  FIELD demof1help-field4 MODULE f1\_help\_field4 WITH docu\_num.
  FIELD field5 MODULE f1\_help\_field5.
  FIELD field6 MODULE f1\_help\_field6.

The components FIELD1 through FIELD4 of the structure DEMOF1HELP refer to the data element DEMOF1TYPE. This data element is documented and two supplementary documentation objects with numbers 0100 and 0200 are created. The user sees the following field help:

-   If the user chooses F1 on the input field for DEMOF1HELP-FIELD1, the data element documentation of DEMOF1TYPE is displayed, since the field is not specified after PROCESS ON HELP-REQUEST.
-   If the user chooses F1 repeatedly for the input fields DEMOF1HELP-FIELD2 and DEMOF1HELP-FIELD3, the data element documentation is displayed, along with the supplementary documentation for either 0100 or 0200. The necessary assignments are stored statically in the database table THLPF.
-   If the user chooses F1 repeatedly for the input field DEMOF1HELP-FIELD4, the data element documentation is displayed, along with the supplementary documentation for either 0100 or 0200. The variable docu\_num is filled accordingly in the dialog module f1\_help\_field2.
-   If the user chooses F1 on the input field for field5, the data element documentation of DEMOF1TYPE is displayed since this is called in the dialog module f1\_help\_field5 by the function module HELP\_OBJECT\_SHOW\_FOR\_FIELD.
-   If the user chooses F1 on the input field for field6, the SAPscript document DEMO\_FOR\_F1\_HELP is displayed since this is called in the dialog module f1\_help\_field6 by the function module HELP\_OBJECT\_SHOW.


### abendynpro_f4_help_dic_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Helps in the ABAP Dictionary, ABENDYNPRO_F4_HELP_DIC_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Helps in the ABAP Dictionary

This example demonstrates how input helps from the ABAP Dictionary can be used.

Source Code   

REPORT demo\_dynpro\_f4\_help\_dictionary.
TABLES demof4help.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the components of the structure DEMOF4HELP from the ABAP Dictionary. The function code of the pushbutton is CANCEL with the function type E. When the user chooses the F4 help for the individual fields, the following is displayed:

-   The fields Date and Time refer to the components DATE\_FIELD and TIME\_FIELD of the DDIC structure. The data type is either DATS or TIMS. Consequently, the input help displayed here is either a calendar or a clock, both set to the current values by default.
-   The field Numbers refers to the component NUM\_FIELD of the DDIC structure. This component is based on the domain DEMO\_NUMBERS to which ten fixed values are assigned. These are displayed as the input help.
-   The first field Airline refers to the component CARRIER1 of the DDIC structure. This component is based on the data element DEMOF4DE. The search help DEMO\_F4\_DE with the parameter CARRID is assigned to this data element. The search help reads the columns CARRID and CARRNAME of the database table SCARR. Only SCARRNAME is specified but CARRID is flagged as an export parameter.
-   The second field Airline refers to the component CARRIER2 of the DDIC structure. This component is assigned the check table SCARR. The check table SCARR in turn is assigned the search help H\_SCARR which can display and export both columns CARRID and CARRNAME.
-   The field Connection Number refers to the component CONNID of the DDIC structure. This component is assigned the search help DEMO\_F4\_FIELD. The search help has two parameters, CARRID and CONNID, which are assigned to the components CARRIER2 and CONNID of the structure. The search help imports CARRIER, reads the associated data from the database table SPFLI, displays CARRIER and CONNID, and exports CONNID.


### abendynpro_f4_help_dial_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Help in Dialog Modules, ABENDYNPRO_F4_HELP_DIAL_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Help in Dialog Modules

This example demonstrates how input helps can be implemented in dialog modules.

Source Code   

REPORT demo\_dynpro\_f4\_help\_module .
TYPES: BEGIN OF values,
         carrid TYPE spfli-carrid,
         connid TYPE spfli-connid,
       END OF values.
DATA: carrier(3) TYPE c,
      connection(4) TYPE c.
DATA: progname TYPE sy-repid,
      dynnum   TYPE sy-dynnr,
      dynpro\_values TYPE TABLE OF dynpread,
      field\_value LIKE LINE OF dynpro\_values,
      values\_tab TYPE TABLE OF values.
CALL SCREEN 100.
MODULE init OUTPUT.
  progname = sy-repid.
  dynnum   = sy-dynnr.
  CLEAR: field\_value, dynpro\_values.
  field\_value-fieldname = 'CARRIER'.
  APPEND field\_value TO dynpro\_values.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE value\_carrier INPUT.
  CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'
       EXPORTING
            tabname     = 'DEMOF4HELP'
            fieldname   = 'CARRIER1'
            dynpprog    = progname
            dynpnr      = dynnum
            dynprofield = 'CARRIER'.
ENDMODULE.
MODULE value\_connection INPUT.
  CALL FUNCTION 'DYNP\_VALUES\_READ'
       EXPORTING
            dyname             = progname
            dynumb             = dynnum
            translate\_to\_upper = 'X'
       TABLES
            dynpfields         = dynpro\_values.
  field\_value = dynpro\_values\[ 1 \].
  SELECT  carrid, connid
    FROM  spfli
    WHERE carrid = @( CONV #( field\_value-fieldvalue ) )
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

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - List Box with Value List from Input Help, ABENDYNPRO_DROP1_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

The static dynpro number of dynpro 100 is 100. The screen layout contains a single input field, namely the component SDYN\_CONN-CARRID. Its attribute dropdown is Listbox, the output length is 20, the attribute value list is empty, and it is assigned function code SELECTED. The functions BACK, EXIT, and CANCEL are defined in the GUI status with the function type E. The dynpro flow logic is as follows:

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

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - List Box with Value List from PBO Module, ABENDYNPRO_DROP2_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Helps, Input Helps, and Dropdown List Boxes, ABENINPUT_HELP_ABEXAS, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Field Helps, Input Helps, and Dropdown List Boxes

Continue
![Example](exa.gif "Example") [dynpro - Field Help](javascript:call_link\('abendynpro_f1_help_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Helps in the ABAP Dictionary](javascript:call_link\('abendynpro_f4_help_dic_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - Input Help in Dialog Modules](javascript:call_link\('abendynpro_f4_help_dial_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - List Box with Value List from Input Help](javascript:call_link\('abendynpro_drop1_abexa.htm'\))
![Example](exa.gif "Example") [dynpro - List Box with Value List from PBO Module](javascript:call_link\('abendynpro_drop2_abexa.htm'\))
