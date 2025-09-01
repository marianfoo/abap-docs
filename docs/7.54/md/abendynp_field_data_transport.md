  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [FIELD](javascript:call_link\('dynpfield.htm'\)) → 

FIELD - Data Transport in Event PAI

If the statement [FIELD](javascript:call_link\('dynpfield.htm'\)) is used in the event block at point of time [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), the statement controls the data transport for the specified [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). By default, all dynpro fields are transported to the ABAP program at the event PAI and before the processing of the corresponding event block. If one or more FIELD statements are used, only those dynpro fields are transported directly at the event PAI that are not specified after a FIELD statement.

The transport of the content of a dynpro field dynp\_field specified after FIELD to the identically named global ABAP data object takes place when the corresponding FIELD statement is executed. If a dynpro field is specified in more than one FIELD statement, its value is passed when the first corresponding FIELD statement is executed. There are the following exceptions:

-   The statement FIELD is ignored by the OK field. The OK field is always transported directly at the event PAI.

-   A field whose content is empty at [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and which is not changed by the user is not transported by the FIELD statement. This applies to the full row in the [LOOPs](javascript:call_link\('dynploop.htm'\)) for [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry")s and [step loops](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry").

Notes

-   The effect of the statement FIELD on the data transport at the event PAI is independent from its association with a MODULE statement.

-   If an empty field (not modified by the user) is filled with a value in a PAI module before the FIELD statement is executed, this value is not overwritten by the FIELD statement using the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry").

-   A dynpro field must not be used in a PAI module, before it is transported by the dynpro. Otherwise, the ABAP field contains the same value as at the end of the previous dialog step.

-   When dynpro fields are defined with reference to [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, the global data objects with the same name of the ABAP program must be declared with the statement TABLES as [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"). Otherwise, no data transport takes place, neither with or without FIELD.

-   If a dynpro field is defined with reference to a data element in ABAP Dictionary, and an obsolete field exit is assigned to this field in a customer system, the function module of the field exit can be executed during the transport. This usually changes the value of the dynpro field.

-   Any dynpro fields, except fields of type STRING or SSTRING, are empty if they contain nothing but blanks in the screen display. Dynpro fields of type STRING or SSTRING are empty if they do not contain any characters. An initial time field with the characters 000000 or a numeric field with the value 0 are, for example, not empty and are transported by FIELD. [CLEAR ... WITH space](javascript:call_link\('abapclear.htm'\)) can be used to insert blanks in character-like fields.

Continue
![Example](exa.gif "Example") [Dynpros, FIELD Statement](javascript:call_link\('abendynpro_field_abexa.htm'\))