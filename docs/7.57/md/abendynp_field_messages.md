---
title: "Handling Outside a Processing Chain"
description: |
  If FIELD is specified outside a processing chain introduced using CHAIN(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm), and if a warning or an error message is sent in the dialog module specified after MODULE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/d
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm"
abapFile: "abendynp_field_messages.htm"
keywords: ["do", "if", "try", "abendynp", "field", "messages"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - FIELD, Handling of Messages from the PAI Event, ABENDYNP_FIELD_MESSAGES, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - FIELD, Handling of Messages from the PAI Event

If the statement [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) in the event block for [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") is [linked](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_module.htm) with a MODULE statement, the statement controls the handling of [warnings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwarning_glosry.htm "Glossary Entry") and [error messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenerror_message_glosry.htm "Glossary Entry"), which are sent in the called module using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm).

Handling Outside a Processing Chain   

If FIELD is specified outside a processing chain introduced using [CHAIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm), and if a warning or an error message is sent in the dialog module specified after [MODULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_module.htm), PAI processing is interrupted and the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") is displayed again without raising the event [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry"). The input field belonging to dynp\_field is the only field ready for input on the current screen and can be overwritten by the user. If the value in the input field is changed by the user, PAI processing is continued after a user action with the first FIELD statement or CHAIN statement linked with the [dynpro field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") dynp\_field. If the value in the input field is not changed by the user, PAI processing is continued again with the current FIELD statement. Previous statements of the PAI event block are not executed again.

Handling within a Processing Chain   

If FIELD is specified within a processing chain, introduced by [CHAIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpchain.htm), and if a warning or an error message was sent within a module called within the processing chain, PAI processing is interrupted and the screen displayed again without raising the event PBO. All input fields of the dynpro fields are ready for input that are specified within the processing chain after FIELD statements. If the value of at least one of these input fields is changed by the user, PAI processing continues after a user action at the first FIELD or CHAIN statement that linked with one of the changed dynpro fields. If none of the input fields is changed by the user, the PAI processing continues again directly at the CHAIN statement of the current processing chain. Previous statements of the PAI event block are not processed again.

Hints

-   If an error message occurs after user input, the user must correct the input values until no error message is sent, whereas after a warning, the input values can be confirmed unchanged. The warning is not sent again when the [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) statement is executed again.
-   If warnings or error messages are sent in modules without reference to FIELD or CHAIN, PAI processing is interrupted and the screen layout is displayed again without raising the event PBO and without a field on the screen layout being ready for input. In the event of an error message, the user must terminate the processing. To do this, an appropriate option must be created on the user interface, otherwise the program can only be terminated from outside.
-   User actions linked with function codes that set the [OK field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenok_field_glosry.htm "Glossary Entry") also count as changes to input fields. A prerequisite for this is that the OK field is defined in the dynpro and that function codes are not evaluated exclusively by the system field sy-ucomm.

Executable Examples

-   [Automatic Input Checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_auto_check_abexa.htm)
-   [Input Checks in Dialog Modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_chain_abexa.htm)