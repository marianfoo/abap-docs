  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT-OPTIONS, value_options, ABAPSELECT-OPTIONS_VALUE, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT-OPTIONS, value\_options

[Short Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Syntax

... *\[*DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]**\]*
    *\[*LOWER CASE*\]*
    *\[*MATCHCODE OBJECT search\_help*\]*
    *\[*MEMORY ID pid*\]* ...

Additions:

[1\. ... DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... LOWER CASE](#!ABAP_ADDITION_2@2@)
[3\. ... MATCHCODE OBJECT search\_help](#!ABAP_ADDITION_3@3@)
[4\. ... MEMORY ID pid](#!ABAP_ADDITION_4@4@)

Effect

These additions can be used to define a start value that allows lowercase letters or used to bind a search help or a [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

Addition 1   

... DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]*

Effect

This addition defines [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") for the columns in the first line of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry"). Without the addition DEFAULT, type-dependent [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") are used as start values.

val1 and val2 are used to define start values for columns low and high. These start values can either be specified as literals or as previously defined data objects. If the data type of the specified start values does not match the data type of the columns, these are converted according to the conversion rules.

The addition OPTION is used to define the start value for the option column. If the addition TO is not specified, one of the expressions eq, ne, ge, gt, le, lt, cp, or np must be specified directly for opt. If the addition TO is specified, either bt or nb must be specified. If the addition OPTION is not used, the content of the option column is set to EQ or BT. If cp or np are specified, the start value in val1 must contain at least one of the wildcard characters \* or + when data is passed to the selection table, otherwise the program terminates.

The addition SIGN is used to define the start value for the sign column. Either i or e must be specified directly for sgn. If the addition SIGN is not used, the content of column sign is set to I.

The times at which the start values are passed to the first line of the selection table are processed in the same way as with the addition DEFAULT to the [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement. If the selection table is not initial when the transfer takes place, the start values are not transferred to the first line. Only the [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") in the selection table is filled with these values, which does not affect the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry").

Hints

-   The associated input fields on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are only filled with the start values if the first line in the selection table is not changed before the selection screen is sent. The system displays the value contained in the selection table when the event [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)) has been processed. Start values for multiple selection can only be defined by inserting lines in the selection table.
-   When specifying start values, these must have the internal format of the ABAP values, and not the output format of the screen layout display.

Addition 2   

... LOWER CASE

Effect

This addition prevents the content of character-like fields from being converted to uppercase letters when the data is transported from the input fields on the selection screen to the selection table.

Addition 3   

... MATCHCODE OBJECT search\_help

Effect

This addition associates the input fields for the selection criterion with a search help search\_help from the ABAP Dictionary. The name of the search help must be specified directly. The addition has the same effect on the input fields as when it is used with a [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement for an input field for a parameter.

Addition 4   

... MEMORY ID pid

Effect

This addition associates the first input field with an [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry") in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"). The ID pid of the SPA/GPA parameter must be specified directly and can contain a maximum of 20 characters. The addition has the same effect on the first input field as when it is used with a [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement for an input field for a parameter.

If the specified ID pid is not in the DDIC database table TPARA, the extended program check reports an error.

Continue
![Example](exa.gif "Example") [Selection Screens - Default Values for Selection Criteria](javascript:call_link\('abensel_screen_sel_opt_def_abexa.htm'\))