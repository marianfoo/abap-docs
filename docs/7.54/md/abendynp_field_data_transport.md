---
title: "FIELD - Data Transport in Event PAI"
description: |
  If the statement FIELD(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield.htm) is used in the event block at point of time PAI(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm 'Glossary Entry'), the statement controls the data transport for the spec
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynp_field_data_transport.htm"
abapFile: "abendynp_field_data_transport.htm"
keywords: ["insert", "loop", "do", "if", "try", "data", "abendynp", "field", "transport"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield.htm) → 

FIELD - Data Transport in Event PAI

If the statement [FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield.htm) is used in the event block at point of time [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry"), the statement controls the data transport for the specified [dynpro field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_field_glosry.htm "Glossary Entry"). By default, all dynpro fields are transported to the ABAP program at the event PAI and before the processing of the corresponding event block. If one or more FIELD statements are used, only those dynpro fields are transported directly at the event PAI that are not specified after a FIELD statement.

The transport of the content of a dynpro field dynp\_field specified after FIELD to the identically named global ABAP data object takes place when the corresponding FIELD statement is executed. If a dynpro field is specified in more than one FIELD statement, its value is passed when the first corresponding FIELD statement is executed. There are the following exceptions:

-   The statement FIELD is ignored by the OK field. The OK field is always transported directly at the event PAI.

-   A field whose content is empty at [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") and which is not changed by the user is not transported by the FIELD statement. This applies to the full row in the [LOOPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynploop.htm) for [table control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_control_glosry.htm "Glossary Entry")s and [step loops](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstep_loop_glosry.htm "Glossary Entry").

Notes

-   The effect of the statement FIELD on the data transport at the event PAI is independent from its association with a MODULE statement.

-   If an empty field (not modified by the user) is filled with a value in a PAI module before the FIELD statement is executed, this value is not overwritten by the FIELD statement using the [initial value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_value_glosry.htm "Glossary Entry").

-   A dynpro field must not be used in a PAI module, before it is transported by the dynpro. Otherwise, the ABAP field contains the same value as at the end of the previous dialog step.

-   When dynpro fields are defined with reference to [flat structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry") in ABAP Dictionary, the global data objects with the same name of the ABAP program must be declared with the statement TABLES as [interface work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). Otherwise, no data transport takes place, neither with or without FIELD.

-   If a dynpro field is defined with reference to a data element in ABAP Dictionary, and an obsolete field exit is assigned to this field in a customer system, the function module of the field exit can be executed during the transport. This usually changes the value of the dynpro field.

-   Any dynpro fields, except fields of type STRING or SSTRING, are empty if they contain nothing but blanks in the screen display. Dynpro fields of type STRING or SSTRING are empty if they do not contain any characters. An initial time field with the characters 000000 or a numeric field with the value 0 are, for example, not empty and are transported by FIELD. [CLEAR ... WITH space](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm) can be used to insert blanks in character-like fields.

Continue
![Example](exa.gif "Example") [Dynpros, FIELD Statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_field_abexa.htm)