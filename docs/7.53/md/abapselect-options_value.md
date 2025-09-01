  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm) → 

SELECT-OPTIONS - value\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options_shortref.htm)

Syntax

... *\[*DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]**\]*
    *\[*LOWER CASE*\]*
    *\[*MATCHCODE OBJECT search\_help*\]*
    *\[*MEMORY ID pid*\]* ...

Extras:

[1\. ... DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... LOWER CASE](#!ABAP_ADDITION_2@2@)
[3\. ... MATCHCODE OBJECT search\_help](#!ABAP_ADDITION_3@3@)
[4\. ... MEMORY ID pid](#!ABAP_ADDITION_4@4@)

Effect

These additions allow a start value to be specified, allow lowercase, and integrate a search help or a [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry").

Addition 1

... DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]*

Effect

This addition defines [start values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_value_glosry.htm "Glossary Entry") for the columns in the first row of the [selection table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_table_glosry.htm "Glossary Entry"). Without the addition DEFAULT, type-dependent [initial values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry") are used as start values.

val1 and val2 are used to define start values for columns low and high. These start values can either be specified as literals or as previously defined data objects. If the data type of the specified start values does not match the data type of the columns, these are converted according to the conversion rules.

The addition OPTION is used to define the start value for the option column. If the addition TO is not specified, one of the expressions eq, ne, ge, gt, le, lt, cp, or np must be specified directly for opt. If the addition TO is specified, either specify bt or nb must be specified. If the addition OPTION is not used, the content of the option column is set to ""EQ" or "BT". If specify cp or np are specified, the start value in val1 must contain at least one of the wildcard characters "\*" or "+" when data is passed to the selection table, otherwise the program terminates.

The addition SIGN is used to define the start value for the sign column. Either i or e must be specified directly for sgn. If the addition SIGN is not used, the content of column sign is changed to "I".

The times at which the start values are passed to the first position in the selection table are processed in the same way as with the addition DEFAULT to the [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_value.htm) statement. If the selection table is not empty when the transfer takes place, the start values are not transferred to the first position. Only the [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") in the selection table is filled with these values, which does not influence the [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry").

Notes

-   The associated input fields on the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") are only filled with the start values if the first row in the selection table is not changed before the selection screen is sent. The system displays the value contained in the selection table when the event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) has been processed. Start values for multiple selection can only be defined by inserting lines in the selection table.
    
-   When specifying start values, you must ensure that these have the internal format of the ABAP values, and not the output format of the screen display.
    

Addition 2

... LOWER CASE

Effect

This addition prevents the content of character-like fields from being converted to block capitals when the data is transported from the input fields on the selection screen to the selection table.

Addition 3

... MATCHCODE OBJECT search\_help

Effect

This addition associates the input fields for the selection criterion with a search help search\_help from ABAP Dictionary. The name of the search help must be specified directly. The addition has the same effect on the input fields as when it is used with a [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_value.htm) statement for an input field for a parameter.

Addition 4

... MEMORY ID pid

Effect

This addition associates the first input field with an [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") in the [user memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_memory_glosry.htm "Glossary Entry"). The ID pid of the SPA/GPA parameter must be specified directly and it can contain a maximum of 20 characters. The addition has the same effect on the first input field as when it is used with a [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_value.htm) statement for an input field for a parameter.

If the specified ID pid is not in the database table TPARA, the extended program check reports an error.

Continue
![Example](exa.gif "Example") [Selection Screens, Default Values for Selection Criteria](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_sel_opt_def_abexa.htm)