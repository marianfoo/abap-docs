# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Selection Screens / Create Selection Screens / SELECT-OPTIONS

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapselect-options.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm)
- [abapselect-options_for.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_for.htm)
- [abensel_screen_sel_opt_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_sel_opt_abexa.htm)
- [abapselect-options_screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
- [abapselect-options_value.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
- [abensel_screen_sel_opt_def_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_sel_opt_def_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.518Z

---

### abapselect-options.htm

> **📖 Official SAP Documentation**: [abapselect-options.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) → 

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

-   The statement declares a selection table in the program with the name selcrit. A selection table is an internal [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") and [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). In selection tables, multiple selection conditions can be saved. The content of selection tables can be analyzed in a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") with the [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) or in a [similar expression](javascript:call_link\('abenwhere_logexp_seltab.htm'\)) of a WHERE condition in Open SQL. Selection tables have the following four columns:
    

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
    After a user action on the dialog box for multiple selections, the contents of all input fields and the chosen settings are transported to the rows of the selection table. During these transports, the contents of character-type fields are converted by default into capitals, after which a conversion routine is performed, if required. After each transport, various [selection screen events](javascript:call_link\('abapat_selection-screen_events.htm'\)) are raised.
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



**📖 Source**: [abapselect-options.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm)

### abapselect-options_for.htm

> **📖 Official SAP Documentation**: [abapselect-options_for.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_for.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

SELECT-OPTIONS - FOR

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Syntax

... FOR *{*dobj*|*(name)*}* ...

Alternatives:

[1\. ... FOR dobj](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... FOR (name)](#!ABAP_ALTERNATIVE_2@2@)

Effect

This addition determines the data type of the columns low and high in the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry"). The data type can be defined by means of a static reference to an existing data object dobj or by a dynamic reference to a data type from ABAP Dictionary in name.

If the addition [NO-DISPLAY](javascript:call_link\('abapselect-options_screen.htm'\)) is not specified, the data type of the columns low and high in the selection table must be elementary and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") and the numeric type f is not allowed. If the addition NO-DISPLAY is specified, any data types, except [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), are possible.

Note

When referencing data types from ABAP Dictionary, the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") inherits all the screen-relevant attributes defined there. During data transport to and from the input fields, any conversion routines defined in the domain are executed. The text defined in ABAP Dictionary can be inherited as a selection text. Note, however, that the input fields on the selection screen are associated with a global data object belonging to the program and do not have any real reference to the dictionary, in contrast to dynpro fields, which are created in Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison with general dynpros, input help functions are limited here in that dependencies between fields and previously entered data are ignored. No automatic value checking is performed.

Alternative 1

... FOR dobj

Effect

If this addition is specified, the columns low and high in the selection table inherit all the attributes of a data object dobj that has already been declared, most importantly a reference to ABAP Dictionary, if applicable. dobj expects a data object that is elementary and flat and not of the type f (unless [NO-DISPLAY is used](javascript:call_link\('abapselect-options_screen.htm'\))) and is not an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

Note

As well as the data objects referred to using FOR from their own program, the public attributes of global classes are also relevant data objects.

Example

Typical declaration and application of a selection criterion.

DATA spfli\_wa TYPE spfli.
SELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid.
SELECT \*
       FROM spfli
       WHERE carrid IN @s\_carrid
       INTO @spfli\_wa.
  ...
ENDSELECT.

Alternative 2

... FOR (name)

Effect

This addition is used to create the columns low and high in the selection table with data type c and length 45. The input fields are displayed on the selection screen, but with a length, field help, and input help appropriate for the data type specified in name.

name expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object that contains the name of a component in a flat structure from ABAP Dictionary in uppercase letters when the selection screen is accessed. The following can be specified for name:

-   Constant

If the data object name is specified as a constant, it can be evaluated statically and the specified component is identified as the used object.

-   Variable

If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

A text field literal can be specified for name, but its content is ignored. If the [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") currently loaded does not contain a selection text for the parameter, the output field displays the corresponding field label from ABAP Dictionary. When data is transported from the input field to the selection table, the content is converted as if it were assigned by the corresponding ABAP data type (no formatting characters, period as a decimal separator, date format "yyyymmdd", and so on).

If the content of name is not a structure component in ABAP Dictionary, the input fields are displayed according to the actual type of the columns low and high. This also applies if a literal is specified for name. If a selection text for the parameter is not created in the text pool currently loaded, the output field contains the text "Generic Selection Option".

A dynamic reference to a data type is not possible in a selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Example

Dynamic design of the selection criterion selcrit on selection screen 500 based on the entries in the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") for an executable program.

PARAMETERS: dbtab  TYPE c LENGTH 30,
            column TYPE c LENGTH 30.
DATA name(80) TYPE c.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
SELECT-OPTIONS selcrit FOR (name).
SELECTION-SCREEN END OF SCREEN 500.
name = dbtab && '-' && column.
CALL SELECTION-SCREEN 500 STARTING AT 10 10.

Continue
![Example](exa.gif "Example") [Selection Screens, Basic Form of Selection Criteria](javascript:call_link\('abensel_screen_sel_opt_abexa.htm'\))



**📖 Source**: [abapselect-options_for.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_for.htm)

### abensel_screen_sel_opt_abexa.htm

> **📖 Official SAP Documentation**: [abensel_screen_sel_opt_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_sel_opt_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) →  [SELECT-OPTIONS - FOR](javascript:call_link\('abapselect-options_for.htm'\)) → 

Selection Screens, Basic Form of Selection Criteria

The example shows how the selection tables are filled in a multiple selection.

Source Code

REPORT demo\_sel\_screen\_select\_options.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA name(80) TYPE c.
    CLASS-METHODS main.
ENDCLASS.
SELECTION-SCREEN BEGIN OF SCREEN 100.
  PARAMETERS: dbtab  TYPE c LENGTH 30 DEFAULT 'SFLIGHT',
              column TYPE c LENGTH 30 DEFAULT 'CARRID'.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
  SELECT-OPTIONS selcrit FOR (start=>name).
SELECTION-SCREEN END OF SCREEN 500.
START-OF-SELECTION.
  start=>main( ).
CLASS start IMPLEMENTATION.
  METHOD main.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    name = dbtab && '-' && column.
    CALL SELECTION-SCREEN 500 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    cl\_abap\_demo\_services=>list\_table( selcrit\[\] ).
  ENDMETHOD.
ENDCLASS.

Description

On the selection screen 100, the name of the table dbtab and its column column can be specified. These are then used for the dynamic layout of the selection criterion on the selection screen 500.

Two input fields and a pushbutton to enter additional values for the selection criterion are displayed. The value which the user enters in the first input field is written to the component selcrit-low of the selection table; the value for the second field is written to the component selcrit-high.

For more complex selections, the user can use the pushbutton on the right side of the selection screen to display the GUI window for multiple selections.

The contents of the selection table are then shown in a list. The first column determines whether the subsequent values are to be included or not; the second contains the Boolean operator and the last two columns contain the limits low and high.



**📖 Source**: [abensel_screen_sel_opt_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_sel_opt_abexa.htm)

### abapselect-options_for.htm

> **📖 Official SAP Documentation**: [abapselect-options_for.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_for.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

SELECT-OPTIONS - FOR

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Syntax

... FOR *{*dobj*|*(name)*}* ...

Alternatives:

[1\. ... FOR dobj](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... FOR (name)](#!ABAP_ALTERNATIVE_2@2@)

Effect

This addition determines the data type of the columns low and high in the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry"). The data type can be defined by means of a static reference to an existing data object dobj or by a dynamic reference to a data type from ABAP Dictionary in name.

If the addition [NO-DISPLAY](javascript:call_link\('abapselect-options_screen.htm'\)) is not specified, the data type of the columns low and high in the selection table must be elementary and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") and the numeric type f is not allowed. If the addition NO-DISPLAY is specified, any data types, except [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), are possible.

Note

When referencing data types from ABAP Dictionary, the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") inherits all the screen-relevant attributes defined there. During data transport to and from the input fields, any conversion routines defined in the domain are executed. The text defined in ABAP Dictionary can be inherited as a selection text. Note, however, that the input fields on the selection screen are associated with a global data object belonging to the program and do not have any real reference to the dictionary, in contrast to dynpro fields, which are created in Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison with general dynpros, input help functions are limited here in that dependencies between fields and previously entered data are ignored. No automatic value checking is performed.

Alternative 1

... FOR dobj

Effect

If this addition is specified, the columns low and high in the selection table inherit all the attributes of a data object dobj that has already been declared, most importantly a reference to ABAP Dictionary, if applicable. dobj expects a data object that is elementary and flat and not of the type f (unless [NO-DISPLAY is used](javascript:call_link\('abapselect-options_screen.htm'\))) and is not an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

Note

As well as the data objects referred to using FOR from their own program, the public attributes of global classes are also relevant data objects.

Example

Typical declaration and application of a selection criterion.

DATA spfli\_wa TYPE spfli.
SELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid.
SELECT \*
       FROM spfli
       WHERE carrid IN @s\_carrid
       INTO @spfli\_wa.
  ...
ENDSELECT.

Alternative 2

... FOR (name)

Effect

This addition is used to create the columns low and high in the selection table with data type c and length 45. The input fields are displayed on the selection screen, but with a length, field help, and input help appropriate for the data type specified in name.

name expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object that contains the name of a component in a flat structure from ABAP Dictionary in uppercase letters when the selection screen is accessed. The following can be specified for name:

-   Constant

If the data object name is specified as a constant, it can be evaluated statically and the specified component is identified as the used object.

-   Variable

If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

A text field literal can be specified for name, but its content is ignored. If the [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") currently loaded does not contain a selection text for the parameter, the output field displays the corresponding field label from ABAP Dictionary. When data is transported from the input field to the selection table, the content is converted as if it were assigned by the corresponding ABAP data type (no formatting characters, period as a decimal separator, date format "yyyymmdd", and so on).

If the content of name is not a structure component in ABAP Dictionary, the input fields are displayed according to the actual type of the columns low and high. This also applies if a literal is specified for name. If a selection text for the parameter is not created in the text pool currently loaded, the output field contains the text "Generic Selection Option".

A dynamic reference to a data type is not possible in a selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Example

Dynamic design of the selection criterion selcrit on selection screen 500 based on the entries in the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") for an executable program.

PARAMETERS: dbtab  TYPE c LENGTH 30,
            column TYPE c LENGTH 30.
DATA name(80) TYPE c.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
SELECT-OPTIONS selcrit FOR (name).
SELECTION-SCREEN END OF SCREEN 500.
name = dbtab && '-' && column.
CALL SELECTION-SCREEN 500 STARTING AT 10 10.

Continue
![Example](exa.gif "Example") [Selection Screens, Basic Form of Selection Criteria](javascript:call_link\('abensel_screen_sel_opt_abexa.htm'\))



**📖 Source**: [abapselect-options_for.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_for.htm)

### abapselect-options_screen.htm

> **📖 Official SAP Documentation**: [abapselect-options_screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

SELECT-OPTIONS - screen\_options

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Syntax

... *\[*OBLIGATORY*|*NO-DISPLAY*\]*
    *\[*VISIBLE LENGTH vlen*\]*
    *\[*NO-EXTENSION*\]*
    *\[*NO INTERVALS*\]*
    *\[*[MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))*\]* ...

Extras:

[1\. ... OBLIGATORY](#!ABAP_ADDITION_1@1@)
[2\. ... NO-DISPLAY](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)
[4\. ... NO-EXTENSION](#!ABAP_ADDITION_4@4@)
[5\. ... NO INTERVALS](#!ABAP_ADDITION_5@5@)

Effect

These additions can be used to declare the first input field as a mandatory field, hide the input field on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), and define the visible length of the field. The display of the second input field and the pushbutton for multiple selection can be suppressed. The addition [MODIF ID](javascript:call_link\('abapselection-screen_modif_id.htm'\)) assigns all screen elements of the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.

Note

As well as the additions already available, the function module SELECT\_OPTIONS\_RESTRICT can also be used to restrict the number of selection options offered and prohibit the value "E" for the column sign in the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") before the selection screen is sent.

Addition 1

... OBLIGATORY

Effect

This addition defines the first input field for the selection criterion on the selection screen as a mandatory field. If this field is blank, the user cannot exit the selection screen using the Execute function (F8) and can only use the Back, Exit, or Cancel functions.

Addition 2

... NO-DISPLAY

Effect

If this addition is specified, no screen elements are created on the selection screen for the selection criterion. In an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), a selection criterion of this type is used exclusively as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when it is called with [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

If the addition NO-DISPLAY is specified, the low and high columns in the selection table can have any [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data types. These selection tables can only be supplied with data using the addition [WITH](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) of the statement SUBMIT.

Note

The length of the values passed to the columns low and high in the selection table, for which there is no input field, is not restricted to 45 characters, as is the case for selection criteria with input fields.

Addition 3

... VISIBLE LENGTH vlen

Effect

This addition defines the visible length of the input field as vlen, where vlen is entered directly as a positive number. If vlen is shorter than the length of columns low and high in the selection table and shorter than the maximum visible length, it is possible to scroll in the input field, which is displayed with the length of vlen. Otherwise, the addition is ignored.

Addition 4

... NO-EXTENSION

Effect

If this addition is specified, the pushbutton for multiple selection is not created on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Note

The user cannot access the dialog box for multiple selection on the selection screen, which means that he or she cannot edit [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") containing multiple rows.

Addition 5

... NO INTERVALS

Effect

If this addition is specified, the second input field is not created on the selection screen.

Note

The user can only specify a single comparison in the first row of the selection table on the selection screen. Intervals can still be selected in the dialog box for multiple selection.

Example

Declaration of a selection criterion for which a single comparison is possible on the selection screen, but multiple selection is not possible.

DATA spfli\_wa TYPE spfli.
SELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid NO-EXTENSION
                                            NO INTERVALS.



**📖 Source**: [abapselect-options_screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm)

### abapselect-options_value.htm

> **📖 Official SAP Documentation**: [abapselect-options_value.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

SELECT-OPTIONS - value\_options

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

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

These additions allow a start value to be specified, allow lowercase, and integrate a search help or a [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry").

Addition 1

... DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]*

Effect

This addition defines [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") for the columns in the first row of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry"). Without the addition DEFAULT, type-dependent [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") are used as start values.

val1 and val2 are used to define start values for columns low and high. These start values can either be specified as literals or as previously defined data objects. If the data type of the specified start values does not match the data type of the columns, these are converted according to the conversion rules.

The addition OPTION is used to define the start value for the option column. If the addition TO is not specified, one of the expressions eq, ne, ge, gt, le, lt, cp, or np must be specified directly for opt. If the addition TO is specified, either specify bt or nb must be specified. If the addition OPTION is not used, the content of the option column is set to ""EQ" or "BT". If specify cp or np are specified, the start value in val1 must contain at least one of the wildcard characters "\*" or "+" when data is passed to the selection table, otherwise the program terminates.

The addition SIGN is used to define the start value for the sign column. Either i or e must be specified directly for sgn. If the addition SIGN is not used, the content of column sign is changed to "I".

The times at which the start values are passed to the first position in the selection table are processed in the same way as with the addition DEFAULT to the [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement. If the selection table is not empty when the transfer takes place, the start values are not transferred to the first position. Only the [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") in the selection table is filled with these values, which does not influence the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry").

Notes

-   The associated input fields on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are only filled with the start values if the first row in the selection table is not changed before the selection screen is sent. The system displays the value contained in the selection table when the event [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)) has been processed. Start values for multiple selection can only be defined by inserting lines in the selection table.
    
-   If start values are specified, these must have the internal format of the ABAP values, and not the output format of the screen display.
    

Addition 2

... LOWER CASE

Effect

This addition prevents the content of character-like fields from being converted to block capitals when the data is transported from the input fields on the selection screen to the selection table.

Addition 3

... MATCHCODE OBJECT search\_help

Effect

This addition associates the input fields for the selection criterion with a search help search\_help from ABAP Dictionary. The name of the search help must be specified directly. The addition has the same effect on the input fields as when it is used with a [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement for an input field for a parameter.

Addition 4

... MEMORY ID pid

Effect

This addition associates the first input field with an [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"). The ID pid of the SPA/GPA parameter must be specified directly and it can contain a maximum of 20 characters. The addition has the same effect on the first input field as when it is used with a [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement for an input field for a parameter.

If the specified ID pid is not in the database table TPARA, the extended program check reports an error.

Continue
![Example](exa.gif "Example") [Selection Screens, Default Values for Selection Criteria](javascript:call_link\('abensel_screen_sel_opt_def_abexa.htm'\))



**📖 Source**: [abapselect-options_value.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)

### abensel_screen_sel_opt_def_abexa.htm

> **📖 Official SAP Documentation**: [abensel_screen_sel_opt_def_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_sel_opt_def_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) →  [SELECT-OPTIONS - value\_options](javascript:call_link\('abapselect-options_value.htm'\)) → 

Selection Screens, Default Values for Selection Criteria

The example shows which default values you can set for selection criteria.

Source Code

REPORT demo\_sel\_screen\_select\_default.
DATA wa\_spfli TYPE spfli.
SELECT-OPTIONS airline FOR wa\_spfli-carrid
               DEFAULT 'AA'
                    TO 'LH'
                OPTION  nb
                  SIGN  i.

Description

The symbol before the first field indicates that the field airline-option contains the operator NB. The green colour indicates that the field airline-sign contains the value "I". The arrow on the right pushbutton is not green since only one line of the selection table is filled.



**📖 Source**: [abensel_screen_sel_opt_def_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_sel_opt_def_abexa.htm)

### abapselect-options_value.htm

> **📖 Official SAP Documentation**: [abapselect-options_value.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapselect-options_value.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

SELECT-OPTIONS - value\_options

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

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

These additions allow a start value to be specified, allow lowercase, and integrate a search help or a [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry").

Addition 1

... DEFAULT val1 *\[*TO val2*\]* *\[*OPTION opt*\]* *\[*SIGN sgn*\]*

Effect

This addition defines [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") for the columns in the first row of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry"). Without the addition DEFAULT, type-dependent [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") are used as start values.

val1 and val2 are used to define start values for columns low and high. These start values can either be specified as literals or as previously defined data objects. If the data type of the specified start values does not match the data type of the columns, these are converted according to the conversion rules.

The addition OPTION is used to define the start value for the option column. If the addition TO is not specified, one of the expressions eq, ne, ge, gt, le, lt, cp, or np must be specified directly for opt. If the addition TO is specified, either specify bt or nb must be specified. If the addition OPTION is not used, the content of the option column is set to ""EQ" or "BT". If specify cp or np are specified, the start value in val1 must contain at least one of the wildcard characters "\*" or "+" when data is passed to the selection table, otherwise the program terminates.

The addition SIGN is used to define the start value for the sign column. Either i or e must be specified directly for sgn. If the addition SIGN is not used, the content of column sign is changed to "I".

The times at which the start values are passed to the first position in the selection table are processed in the same way as with the addition DEFAULT to the [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement. If the selection table is not empty when the transfer takes place, the start values are not transferred to the first position. Only the [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") in the selection table is filled with these values, which does not influence the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry").

Notes

-   The associated input fields on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are only filled with the start values if the first row in the selection table is not changed before the selection screen is sent. The system displays the value contained in the selection table when the event [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)) has been processed. Start values for multiple selection can only be defined by inserting lines in the selection table.
    
-   If start values are specified, these must have the internal format of the ABAP values, and not the output format of the screen display.
    

Addition 2

... LOWER CASE

Effect

This addition prevents the content of character-like fields from being converted to block capitals when the data is transported from the input fields on the selection screen to the selection table.

Addition 3

... MATCHCODE OBJECT search\_help

Effect

This addition associates the input fields for the selection criterion with a search help search\_help from ABAP Dictionary. The name of the search help must be specified directly. The addition has the same effect on the input fields as when it is used with a [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement for an input field for a parameter.

Addition 4

... MEMORY ID pid

Effect

This addition associates the first input field with an [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"). The ID pid of the SPA/GPA parameter must be specified directly and it can contain a maximum of 20 characters. The addition has the same effect on the first input field as when it is used with a [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) statement for an input field for a parameter.

If the specified ID pid is not in the database table TPARA, the extended program check reports an error.

Continue
![Example](exa.gif "Example") [Selection Screens, Default Values for Selection Criteria](javascript:call_link\('abensel_screen_sel_opt_def_abexa.htm'\))
