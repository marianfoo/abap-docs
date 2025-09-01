  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - FIELD](javascript:call_link\('dynpfield.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20FIELD%2C%20Handling%20of%20Messages%20from%20the%20PAI%20Event%2C%20ABENDYNP_FIELD_MESSAGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

dynpro - FIELD, Handling of Messages from the PAI Event

If the statement [FIELD](javascript:call_link\('dynpfield.htm'\)) in the event block for [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") is [linked](javascript:call_link\('dynpfield_module.htm'\)) with a MODULE statement, the statement controls the handling of [warnings](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") and [error messages](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"), which are sent in the called module using the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)).

Handling Outside a Processing Chain   

If FIELD is specified outside a processing chain introduced using [CHAIN](javascript:call_link\('dynpchain.htm'\)), and if a warning or an error message is sent in the dialog module specified after [MODULE](javascript:call_link\('dynpfield_module.htm'\)), PAI processing is interrupted and the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is displayed again without raising the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"). The input field belonging to dynp\_field is the only field ready for input on the current screen and can be overwritten by the user. If the value in the input field is changed by the user, PAI processing is continued after a user action with the first FIELD statement or CHAIN statement linked with the [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") dynp\_field. If the value in the input field is not changed by the user, PAI processing is continued again with the current FIELD statement. Previous statements of the PAI event block are not executed again.

Handling within a Processing Chain   

If FIELD is specified within a processing chain, introduced by [CHAIN](javascript:call_link\('dynpchain.htm'\)), and if a warning or an error message was sent within a module called within the processing chain, PAI processing is interrupted and the screen displayed again without raising the event PBO. All input fields of the dynpro fields are ready for input that are specified within the processing chain after FIELD statements. If the value of at least one of these input fields is changed by the user, PAI processing continues after a user action at the first FIELD or CHAIN statement that linked with one of the changed dynpro fields. If none of the input fields is changed by the user, the PAI processing continues again directly at the CHAIN statement of the current processing chain. Previous statements of the PAI event block are not processed again.

Hints

-   If an error message occurs after user input, the user must correct the input values until no error message is sent, whereas after a warning, the input values can be confirmed unchanged. The warning is not sent again when the [MESSAGE](javascript:call_link\('abapmessage.htm'\)) statement is executed again.
-   If warnings or error messages are sent in modules without reference to FIELD or CHAIN, PAI processing is interrupted and the screen layout is displayed again without raising the event PBO and without a field on the screen layout being ready for input. In the event of an error message, the user must terminate the processing. To do this, an appropriate option must be created on the user interface, otherwise the program can only be terminated from outside.
-   User actions linked with function codes that set the [OK field](javascript:call_link\('abenok_field_glosry.htm'\) "Glossary Entry") also count as changes to input fields. A prerequisite for this is that the OK field is defined in the dynpro and that function codes are not evaluated exclusively by the system field sy-ucomm.

Executable Examples

-   [Automatic Input Checks](javascript:call_link\('abendynpro_auto_check_abexa.htm'\))
-   [Input Checks in Dialog Modules](javascript:call_link\('abendynpro_field_chain_abexa.htm'\))