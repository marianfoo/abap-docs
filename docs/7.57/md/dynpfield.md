  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_dynpro_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - FIELD, DYNPFIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

dynpro - FIELD

Syntax

FIELD dynp\_field *{* *\[* MODULE mod *\[*[cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_module.htm)*\]* *\]*
                 *|* *\[* *\[*MODULE mod*\]* [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_help.htm) hlp *\]* *}*.

Effect

The statement FIELD of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") controls the data transport from the dynpro to the ABAP program during the event [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry"). It can also be linked with the MODULE statement to call dialog modules conditionally, to allow any input to be checked, and to allow self-programmed field and input helps at POH time and POV time.

FIELD can be specified in the event blocks at [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry"), [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry"), [POH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpoh_glosry.htm "Glossary Entry"), and [POV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpov_glosry.htm "Glossary Entry"), but is ignored in the event block at PBO. dynp\_field expects a dynpro field of the current dynpro. The statement has the following effect:

-   In the event block at PAI, FIELD controls the time of [data transport](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_data_transport.htm) from the dynpro field dynp\_field to the identically named global data object of the ABAP program takes place.
-   In the event block at PAI, FIELD can be linked with a [MODULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_module.htm) statement to call a module mod depending on the conditions cond for the dynpro field dynp\_field and to allow input checks with [error handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm).
-   In the event blocks at POH and POV, FIELD can either be linked with a MODULE statement (without a cond condition) to call a module mod with a self-programmed [field help or input help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_help.htm) or the addition WITH of POH can be used to call [supplementary data element documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_help.htm).

If a switch is assigned to the dynpro field dynp\_field in the [Screen Painter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry"), the statement FIELD is respected only if the dynpro field has been activated by the switch.

Hint

The statement FIELD has two further additions, [VALUES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_value_select.htm) and [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_value_select.htm), for executing an obsolete value check in the flow logic.

Continue
[dynpro - FIELD, Data Transport at PAI Time](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_data_transport.htm)
[dynpro - FIELD, MODULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_module.htm)
[dynpro - FIELD, Handling of Messages from the PAI Event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_messages.htm)
[dynpro - FIELD, Field Help and Input Help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_help.htm)