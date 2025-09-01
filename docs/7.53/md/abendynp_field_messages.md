  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) → 

Handling of Messages from the PAI Event

If the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) in the event block for [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") is [associated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_module.htm) with a MODULE statement, the statement controls the handling of [warnings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwarning_glosry.htm "Glossary Entry") and [error messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry"), which are sent in the called module using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm).

Handling Outside a Processing Chain

If FIELD is specified outside a processing chain introduced using [CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm), and if a warning or an error message is sent in the dialog module specified after [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_module.htm), PAI processing is interrupted and the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") is displayed again without raising the event [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry"). The input field belonging to dynp\_field is the only field ready for input on the current screen and can be overwritten by the user . If the value in the input field is changed by the user, PAI processing is continued after an user action with the first FIELD statement or CHAIN statement associated with the [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") dynp\_field. If the value in the input field is not changed by the user, PAI processing is continued again with the current FIELD statement. Previous statements of the PAI event block are not processed again.

Handling Within a Processing Chain

If FIELD is specified within a processing chain, introduced by [CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm), and if a warning or an error message was sent within a module called within the processing chain, PAI processing is interrupted and the screen displayed again without raising the event PBO. All input fields of the dynpro fields are ready for input that are specified within the processing chain after FIELD statements. If the value of at least one of these input fields is changed by the user, PAI processing continues after an user action at the first FIELD or CHAIN statement that associated with one of the changed dynpro fields. If none of the input fields is changed by the user, the PAI processing continues again directly at the CHAIN statement of the current processing chain. Previous statements of the PAI event block are not processed again.

Notes

-   If an error message occurs after user input, the user must correct the input values until no error message is sent; after a warning, the input values can be confirmed unchanged. The warning is not sent again when the [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm) statement is executed again.

-   If warnings or error messages are sent in modules without reference to FIELD or CHAIN, PAI processing is interrupted and the screen is displayed again without raising the event PBO and without a field on the screen being ready for input . In the event of an error message, the user must terminate the processing. To do this, an appropriate option must be created on the user interface; otherwise the program can only be terminated from outside.

-   User actions associated with function codes that set the [OK field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenok_field_glosry.htm "Glossary Entry") also count as changes to input fields. A prerequisite for this is that the OK field is defined in the dynpro and that function codes are not read exclusively by the system field sy-ucomm.

Continue
[Input Checks - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_check_abexas.htm)