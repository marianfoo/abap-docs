  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) → 

SELECT-OPTIONS

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Syntax

SELECT-OPTIONS selcrit [FOR *{*dobj*|*(name)*}*](javascript:call_link\('abapselect-options_for.htm'\))
               *\[* [screen\_options](javascript:call_link\('abapselect-options_screen.htm'\))*\]*
               *\[*[value\_options](javascript:call_link\('abapselect-options_value.htm'\))*\]*
               *\[* [NO DATABASE SELECTION](javascript:call_link\('abapselect-options_no_db_sel.htm'\))*\]*
               *\[* [ldb\_options](javascript:call_link\('abapselect-options_ldb.htm'\))*\]*.

Effect

This declares a selection criterion selcrit for a data object dobj or a type specified in name. Selection criteria are components of a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), to which are assigned a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") in the ABAP program, as well as two input fields and a pushbutton for multiple selection.

The name of the selection criterion selcrit is limited to a maximum of 8 characters. This statement is allowed in the global declaration part of [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), and [module pools](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"). In function groups and module pools, the statement is only allowed within the definition of a [standalone selection screen](javascript:call_link\('abapselection-screen_definition.htm'\)). In executable programs, the statement is otherwise automatically assigned to the [standard selection screen](javascript:call_link\('abapselection-screen_standard.htm'\)).

The statement SELECT-OPTIONS has the following effect:

-   The statement declares a selection table in the program with the name selcrit. A selection table is an internal [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") and [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). Selection tables can be used to store [ranges conditions](javascript:call_link\('abenranges_condition_glosry.htm'\) "Glossary Entry") that join multiple comparison expressions. The content of selection tables can be analyzed in a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") with the [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) or in a [similar expression](javascript:call_link\('abenwhere_logexp_seltab.htm'\)) of a WHERE condition in ABAP SQL. Selection tables have the same layout as [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and have the following four columns:
    

-   sign of type c and length 1. The content of sign determines for every row whether the result of the condition formulated in the column is included or excluded in the entire resulting set for all rows. Valid values are "I" for include and "E" for exclude.

-   option of type c with length 2. option contains the selection option for the condition of the row in the form of relational operators. Valid operators are "EQ", "NE", "GE", "GT", "LE", "LT", "CP", and "NP", if the column high is initial, and "BT", "NB", if column high is not initial. For the options "CP" and "NP", the data type of the columns low and high must be c, and special rules apply to entries on the selection screen.

-   low of the data type defined after [FOR](javascript:call_link\('abapselect-options_for.htm'\)). This column is designated for the comparison value or the lower interval limitation.

-   high of the data type defined after [FOR](javascript:call_link\('abapselect-options_for.htm'\)). This column is designated for the upper interval limitation.

-   Two input fields with the name selcrit-low and selcrit-high are created on the current selection screen using a matching external data type in a new row at positions 35 and 60. The length of the input fields is based upon the length of the data type which is defined after FOR. The maximum length of the input fields is 255. The maximum visible length of the input fields is between 10 and 18 (depending on the nesting depth in framed blocks). If the length is greater than the maximum visible length, the content is displayed as movable.
    An output field generated automatically is displayed in the first position available to the left of the input field as a label with a length of between 20 and 30 depending on the nesting depth in blocks with frames. The output field contains either the name of the selcrit selection criterion or the selection text to which the selection criterion is assigned in the text elements of the program. If the user requests field or input help on the output field using the function key F1 or F4, the same output is displayed as if one of the input fields is chosen.
    A multiple selection pushbutton is created after the second input field. If this pushbutton is selected, a dialog screen with four [tabstrip control pages](javascript:call_link\('abentab_page_glosry.htm'\) "Glossary Entry") appears, in which the input fields are again displayed in tabular form in [Table Controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry"). The tabstrip pages are separated based on individual value comparison, interval limitation, and settings for the column sign.
    Users can select an input field with a double-click on the selection screen or use the dialog screen for multiple selection. On the selection screen, the value of the column sign can also be chosen. On the dialog screen for multiple selection, this is done by selecting the respective tabstrip page. If the selection option is not equal to "EQ" or "BT", it is displayed as an icon in front of the first input field. The color of the icon is green if the content of the column sign is "I", and red if it is "E".
    The selection options "CP" and "NP" can be selected only if the first input field contains one of the wildcard characters "\*" or "+". "+" masks a single character, "\*" masks any character string, even an empty one. If one of these characters is entered, the selection option is automatically set to "CP". If "CP" is set, and all wildcard characters have been removed, the selection option is automatically set to "EQ" when there is a user action. This limitation does not apply within the program. When the selection table is evaluated, the column low can also contain a string without wildcard characters for the selection options "CP" and "NP".
    The attributes of the elements on the selection screen can be influenced with the statement [screen\_options](javascript:call_link\('abapselect-options_screen.htm'\)) or the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)).
    
-   The first row of the selection table selcrit is associated with the input fields on the selection screen. All rows are displayed in the dialog box for multiple selection.
    Each time before the selection screen is sent to the [selection screen event](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") ATSELECTION-SCREEN OUTPUT, the content of first row in the selection table is transported to the selection screen, with a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") being executed if required. If the length of the columns low and high in the first row of the selection table is greater than 255, the surplus content is cut off on the right. It is only possible for all rows to be transported if the button for multiple selections is selected. A conversion routine might be executed here, and rows might be cut off. Settings for the content of the input fields can be made in [value\_options](javascript:call_link\('abapselect-options_value.htm'\)).
    After a user action on the selection screen, the contents of the input fields and the chosen settings are transported to the first row and the header row of the selection table.
    After a user action on the dialog box for multiple selections, the contents of all input fields and the chosen settings are transported to the rows of the selection table. These transports convert the content of character-like fields by default into uppercase letters by default, after which a conversion routine is performed, if required. After each transport, various [selection screen events](javascript:call_link\('abapat_selection-screen_events.htm'\)) are raised.
    If a value has been entered in the entry field for the upper interval high, the system checks whether this value is greater than the lower interval limit low following each transport and conversion routine (if performed). If necessary, an [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") is sent. This check can be switched off before the selection screen is sent, using the function module RS\_SELOPT\_NO\_INTERVAL\_CHECK.
    
-   If selection criteria are defined in the selection include of a logical database, further additions [ldb\_options](javascript:call_link\('abapselect-options_ldb.htm'\)) are necessary or possible.
    
-   If, in an executable program, a selection criterion is defined for a component of a node of the associated logical database, declared by [TABLES](javascript:call_link\('abaptables.htm'\)) or [NODES](javascript:call_link\('abapnodes.htm'\)), and the node in question is intended for dynamic selection on the logical database, the selection table is passed (by default) to the logical database, after [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry"), where it is handled as a dynamic selection. Furthermore, in this case, the input fields for the corresponding dynamic selection are displayed directly on the selection screen. Therefore the user does not need to select the fields using the Dynamic Selections function. This transfer can be suppressed using the addition [NO DATABASE SELECTION](javascript:call_link\('abapselect-options_no_db_sel.htm'\)).
    

Notes

-   To avoid undefined system behavior, the header row of a selection table should not be changed in the program. Read access should also be avoided. Instead separate work areas, field symbols, or data references should be used, as always for internal tables.
    
-   If a selection criterion is supplied with data when calling up an executable program using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") may be performed for the first row only, while the value of the columns low and high will be truncated at position 255 for the first row only. If the selection criterion is declared with the addition [NO-DISPLAY](javascript:call_link\('abapselect-options_screen.htm'\)), no conversion routine or truncation will be performed for the first row either.
    
-   If the type of the selection criterion is a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") that does not refer to a data type in ABAP Dictionary, the output style preserve scaling is set for the input field of the selection screen. Here, any trailing zeroes are preserved in the decimal places. If there is a reference to a data type in the ABAP Dictionary, the output style defined there is used.
    
-   If the type of the selection criteria is a [packed number](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry") or a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary, the attribute sign must be set for the type attribute, so that negative numbers can be displayed on the selection screen. This setting is only possible for [domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") and not for specifying a built-in type directly for [data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") or structure components. If a negative number is entered on the selection screen and this property is not set, the system rejects it with an error message. If the columns low or high contain a negative number when the selection screen is called, an non-handleable exception is raised.
    
-   If the type of the selection criterion is a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary for which the output style "currency amount" is specified, only numbers with the corresponding amount of decimal places can be entered on the selection screen. If a corresponding ABAP data object contains a number with too many decimal places when the selection screen is called, a non-handleable exception is raised. If the output style is "extended currency amount", additional decimal places can be displayed.
    
-   The columns sign and option of a selection table declared using SELECT-OPTIONS are not related to data types in ABAP Dictionary. In the case of [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary, these columns refer to the data elements DDSIGN and DDOPTION.
    

Continue
[SELECT-OPTIONS - FOR](javascript:call_link\('abapselect-options_for.htm'\))
[SELECT-OPTIONS - screen\_options](javascript:call_link\('abapselect-options_screen.htm'\))
[SELECT-OPTIONS - value\_options](javascript:call_link\('abapselect-options_value.htm'\))