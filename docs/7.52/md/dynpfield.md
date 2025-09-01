  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Statements in the Screen Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_dynpro_statements.htm) → 

FIELD

Syntax

FIELD dynp\_field *{* *\[* MODULE mod *\[*[cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield_module.htm)*\]* *\]*
                 *|* *\[* *\[*MODULE mod*\]* [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm) hlp *\]* *}*.

Effect

The statement FIELD of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") controls the data transport from the dynpro to the ABAP program during the event [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry"). It can be combined with the MODULE statement to call dialog modules conditionally, to allow any input to be checked, and to allow self-programmed field and input helps at POH time and POV time.

FIELD can be used in the event blocks at [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry"), [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry"), [POH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpoh_glosry.htm "Glossary Entry"), and [POV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpov_glosry.htm "Glossary Entry"), but is ignored in the event block at PBO. dynp\_field expects a dynpro field of the current dynpro. The statement has the following effect:

-   In the event block at PAI, FIELD controls the time when the [data transport](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_data_transport.htm) from dynpro field dynp\_field to the global data object with the same name of the ABAP program takes place.
    
-   In the event block at PAI, FIELD can be combined with a [MODULE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield_module.htm) statement to call a module mod according to the conditions cond for the dynpro field dynp\_field and to allow input checks with [error handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_messages.htm).
    
-   In the event blocks at POH and POV, FIELD can either be combined with a MODULE statement (without cond condition) to call a module mod with self-programmed [field or input help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm) or, with the addition WITH of POH, a [data element additional documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm) can be called.
    

If a [switch](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenswitch_german_glosry.htm "Glossary Entry") is assigned to the dynpro field dynp\_field in Screen Painter, the statement FIELD is respected only if the dynpro field has been activated by the switch.

Note

The statement FIELD has two further additions, [VALUES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield_value_select.htm) and [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield_value_select.htm), for executing an obsolete value check in the flow logic.

Continue
[Data Transport at PAI Time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_data_transport.htm)
[FIELD - MODULE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield_module.htm)
[Handling of Messages from the PAI Event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_messages.htm)
[Field Help and Input Help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm)