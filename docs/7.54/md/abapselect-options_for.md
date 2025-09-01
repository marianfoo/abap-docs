  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

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

When referencing data types from ABAP Dictionary, the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") inherits all the screen-relevant attributes defined there. During data transport to and from the input fields, any conversion routines defined in the domain are executed. The text defined in ABAP Dictionary can be inherited as a selection text. Note, however, that the input fields on the selection screen are linked with a global data object belonging to the program and do not have any real reference to the dictionary, in contrast to screen fields, which are created in the Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison to general screens, input help functionality is limited here in that dependencies between fields and previously entered data are not taken into account. No automatic value checking is performed.

Alternative 1

... FOR dobj

Effect

If this addition is specified, the columns low and high in the selection table inherit all the attributes of a data object dobj that has already been declared, most importantly a reference to ABAP Dictionary, if applicable. dobj expects a data object that is elementary and flat and not of the type f (unless [NO-DISPLAY](javascript:call_link\('abapselect-options_screen.htm'\)) is used) and is not an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

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