---
title: "SELECT-OPTIONS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_shortref.htm) Syntax SELECT-OPTIONS selcrit FOR dobj(name)(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_for.htm)  screen_options(https://help.sap.com/doc
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options.htm"
abapFile: "abapselect-options.htm"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "data", "types", "internal-table", "field-symbol", "abapselect", "options"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_create.htm) → 

SELECT-OPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_shortref.htm)

Syntax

SELECT-OPTIONS selcrit [FOR *{*dobj*|*(name)*}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_for.htm)
               *\[* [screen\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_screen.htm)*\]*
               *\[*[value\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_value.htm)*\]*
               *\[* [NO DATABASE SELECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_no_db_sel.htm)*\]*
               *\[* [ldb\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_ldb.htm)*\]*.

Effect

This declares a [selection criterion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit for a data object dobj or a type specified in name. Selection criteria are components of a [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry"), to which are assigned a [selection table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_table_glosry.htm "Glossary Entry") in the ABAP program, as well as two input fields and a pushbutton for multiple selection.

The name of the selection criterion selcrit is limited to a maximum of 8 characters. This statement is allowed in the global declaration part of [executable programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), [function pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), and [module pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodul_pool_glosry.htm "Glossary Entry"). In function pools and module pools, the statement is only allowed within the definition of a [standalone selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_definition.htm). In executable programs, the statement is otherwise automatically assigned to the [standard selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_standard.htm).

The statement SELECT-OPTIONS has the following effect:

-   The statement declares a selection table in the program with the name selcrit. A selection table is an internal [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") with [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry") and [standard key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_key_glosry.htm "Glossary Entry"). Selection tables can be used to store [ranges conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenranges_condition_glosry.htm "Glossary Entry") that join multiple comparison expressions. The content of selection tables can be analyzed in a [comparison expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_expression_glosry.htm "Glossary Entry") with the [comparison operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomp_operator_glosry.htm "Glossary Entry") [IN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_select_option.htm) or in a [similar expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_seltab.htm) of a WHERE condition in ABAP SQL. Selection tables have the same layout as [ranges tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenranges_table_glosry.htm "Glossary Entry") and have the following four columns:

-   sign of type c and length 1. The content of sign determines for every line whether the result of the condition formulated in the column is included or excluded in the entire resulting set for all lines. Valid values are "I" for include and "E" for exclude.

-   option of type c with length 2. option contains the selection option for the condition of the line in the form of comparison operators. Valid operators are "EQ", "NE", "GE", "GT", "LE", "LT", "CP", and "NP", if the column high is initial, and "BT", "NB", if column high is not initial. For the options "CP" and "NP", the data type of the columns low and high must be c, and special rules apply to entries on the selection screen.

-   low of the data type defined after [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_for.htm). This column is designated for the comparison value or the lower interval limitation.

-   high of the data type defined after [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_for.htm). This column is designated for the upper interval limitation.

-   Two input fields with the name selcrit-low and selcrit-high are created on the current selection screen using a matching external data type in a new line at positions 35 and 60. The length of the input fields is based upon the length of the data type which is defined after FOR. The maximum length of the input fields is 255. The maximum visible length of the input fields is between 10 and 18 (depending on the nesting depth in framed blocks). If the length is greater than the maximum visible length, the content is displayed as movable.
    An output field generated automatically is displayed in the first position available to the left of the input field as a label with a length of between 20 and 30 depending on the nesting depth in blocks with frames. The output field contains either the name of the selcrit selection criterion or the selection text to which the selection criterion is assigned in the text elements of the program. If the user requests field or input help on the output field using the function key F1 or F4, the same output is displayed as if one of the input fields is chosen.
    A multiple selection pushbutton is created after the second input field. If this pushbutton is selected, a dialog screen with four [tabstrip control pages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentab_page_glosry.htm "Glossary Entry") appears, in which the input fields are again displayed in tabular form in [Table Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm "Glossary Entry"). The tabstrip pages are separated based on individual value comparison, interval limitation, and settings for the column sign.
    Users can select an input field with a double-click on the selection screen or use the dialog screen for multiple selection. On the selection screen, the value of the column sign can also be chosen. On the dialog screen for multiple selection, this is done by selecting the respective tabstrip page. If the selection option is not equal to "EQ" or "BT", it is displayed as an icon in front of the first input field. The color of the icon is green if the content of the column sign is "I", and red if it is "E".
    The selection options "CP" and "NP" can be selected only if the first input field contains one of the wildcard characters "\*" or "+". "+" masks a single character, "\*" masks any character string, even an empty one. If one of these characters is entered, the selection option is automatically set to "CP". If "CP" is set, and all wildcard characters have been removed, the selection option is automatically set to "EQ" when there is a user action. This limitation does not apply within the program. When the selection table is evaluated, the column low can also contain a string without wildcard characters for the selection options "CP" and "NP".
    The attributes of the elements on the selection screen can be affected with the statement [screen\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_screen.htm) or the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen.htm).
    

-   The first line of the selection table selcrit is associated with the input fields on the selection screen. All lines are displayed in the dialog box for multiple selection.
    Each time before the selection screen is sent to the [selection screen event](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") AT SELECTION-SCREEN OUTPUT, the content of first line in the selection table is transported to the selection screen, with a [conversion routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry") being executed if required. If the length of the columns low and high in the first line of the selection table is greater than 255, the surplus content is cut off on the right. It is only possible for all lines to be transported if the button for multiple selections is selected. A conversion routine might be executed here, and lines might be cut off. Settings for the content of the input fields can be made in [value\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_value.htm).
    After a user action on the selection screen, the contents of the input fields and the chosen settings are transported to the first line and the header line of the selection table.
    After a user action on the dialog box for multiple selections, the contents of all input fields and the chosen settings are transported to the lines of the selection table. These transports convert the content of character-like fields by default into uppercase letters by default, after which a conversion routine is performed, if required. After each transport, various [selection screen events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_selection-screen_events.htm) are raised.
    If a value has been entered in the entry field for the upper interval high, the system checks whether this value is greater than the lower interval limit low following each transport and conversion routine (if performed). If necessary, an [error message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenerror_message_glosry.htm "Glossary Entry") is sent. This check can be switched off before the selection screen is sent, using the function module RS\_SELOPT\_NO\_INTERVAL\_CHECK.
    

-   If selection criteria are defined in the selection include of a logical database, further additions [ldb\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_ldb.htm) are necessary or possible.
    

-   If, in an executable program, a selection criterion is defined for a component of a node of the associated logical database, declared by [TABLES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptables.htm) or [NODES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnodes.htm), and the node in question is intended for dynamic selection on the logical database, the selection table is passed (by default) to the logical database, after [selection screen processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"), where it is handled as a dynamic selection. Furthermore, in this case, the input fields for the corresponding dynamic selection are displayed directly on the selection screen. Therefore the user does not need to select the fields using the Dynamic Selections function. This transfer can be suppressed using the addition [NO DATABASE SELECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_no_db_sel.htm).
    

Hints

-   To avoid undefined system behavior, the header line of a selection table should not be changed in the program. Read access should also be avoided. Instead separate work areas, field symbols, or data references should be used, as always for internal tables.
    

-   If a selection criterion is supplied with data when calling up an executable program using [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm), a [conversion routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry") may be performed for the first line only, while the value of the columns low and high will be truncated at position 255 for the first line only. If the selection criterion is declared with the addition [NO-DISPLAY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_screen.htm), no conversion routine or truncation will be performed for the first line either.
    

-   If the type of the selection criterion is a [decimal floating point number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry") that does not refer to a data type in ABAP Dictionary, the output style preserve scaling is set for the input field of the selection screen. Here, any trailing zeros are preserved in the decimal places. If there is a reference to a data type in the ABAP Dictionary, the output style defined there is used.
    

-   If the type of the selection criteria is a [packed number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpacked_number_glosry.htm "Glossary Entry") or a [decimal floating point number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry") defined in ABAP Dictionary, the attribute sign must be set for the type attribute, so that negative numbers can be displayed on the selection screen. This setting is only possible for [domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendomain_glosry.htm "Glossary Entry") and not for specifying a built-in type directly for [data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_element_glosry.htm "Glossary Entry") or structure components. If a negative number is entered on the selection screen and this property is not set, the system rejects it with an error message. If the columns low or high contain a negative number when the selection screen is called, an uncatchable exception is raised.
    

-   If the type of the selection criterion is a [decimal floating point number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry") defined in ABAP Dictionary for which the output style "currency amount" is specified, only numbers with the corresponding amount of decimal places can be entered on the selection screen. If a corresponding ABAP data object contains a number with too many decimal places when the selection screen is called, an uncatchable exception is raised. If the output style is "extended currency amount", additional decimal places can be displayed.
    

-   An automatic set of the selection option "CP" when entering escape characters and an undo when removing escape characters occurs only after user input in the associated input field on the selection screen. Escape characters in fields whose content is passed to the selection screen from the program do not produce an automatic set of the selection option.
    

-   The columns sign and option of a selection table declared using SELECT-OPTIONS are not related to data types in ABAP Dictionary. In the case of [ranges tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenranges_table_glosry.htm "Glossary Entry") defined in ABAP Dictionary, these columns refer to the data elements DDSIGN and DDOPTION.
    

Continue
[SELECT-OPTIONS, FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_for.htm)
[SELECT-OPTIONS, screen\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_screen.htm)
[SELECT-OPTIONS, value\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_value.htm)