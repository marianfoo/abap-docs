  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters.htm) → 

PARAMETERS - type\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_shortref.htm)

Syntax

... *{* TYPE type *\[*DECIMALS dec*\]* *}*
  *|* *{* LIKE dobj *}*
  *|* *{* LIKE (name) *}* ...

Alternatives:

[1\. ... TYPE type *\[*DECIMALS dec*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LIKE dobj](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LIKE (name)](#!ABAP_ALTERNATIVE_3@3@)

Effect

These additions define the data type of the parameter. If none of the additions is specified, the parameter has the type c. The data type can be defined using a static reference to an existing data type type, using a static reference to a data object dobj, or using a dynamic reference to a data type from ABAP Dictionary in name.

If the addition [NO-DISPLAY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_screen.htm) is not specified, the data type of a parameter must be elementary and (with the exception of string) [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm "Glossary Entry"), and the numeric type f is not allowed. If the addition NO-DISPLAY is specified, any data types, except [reference types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") and [enumerated types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), are possible.

Note

If there is a reference to data types from ABAP Dictionary, the parameter adopts all the properties defined there as screen-relevant. Conversion routines defined in the domain may be executed during the data transport from and to the input field. The text defined in ABAP Dictionary can be inherited as a selection text. You must must ensure that the input field on the selection screen is associated with a global data object of the program and does not receive a real reference, as is the case for dynpro fields created in Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison to general screens, input help functionality is limited here in that dependencies between fields and previously entered data are not taken into account. A value check is not performed automatically, but can be executed using the addition [VALUE CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_value.htm).

Alternative 1

... TYPE type *\[*DECIMALS dec*\]*

Effect

This addition gives the parameter the data type type. type can be specified as:

-   the built-in ABAP types, with the exception of b, s, f, and xstring.
    
-   A non-generic data type from ABAP Dictionary, a non-generic public data type of a global class, or a data type from the same program, already defined using [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm), and which is elementary and not of the type f or xstring (with the exception of the use of [NO-DISPLAY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_screen.htm)) and which is not an [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry").
    

If the built-in ABAP type p is specified, DECIMALS can be used to define the number of [digits after the decimal point](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry") dec. If DECIMALS is not specified, the number of decimal places is 0. If DECIMALS is specified, the same applies as in the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_simple.htm).

If type is a type from ABAP Dictionary that has the type CHAR, length 1, and (in the domain) the [fixed values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_value_glosry.htm "Glossary Entry") "X" and " ", the input field on the selection screen is displayed automatically as if the addition [AS CHECKBOX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_screen.htm) were specified.

Note

[Enumerated types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry") cannot be specified, regardless of the [base type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbase_type_glosry.htm "Glossary Entry").

Example

Declaration of a parameter with reference to the component carrid of the database table spfli. On the selection screen, a callable three-character input field with a field help and input help is created.

PARAMETERS p\_carrid TYPE spfli-carrid.

Alternative 2

... LIKE dobj

Effect

Using this addition, the parameter applies all the properties of a data object dobj already declared, in particular also a possible reference to ABAP Dictionary. The same applies to dobj as to [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_referring.htm), except that the specified data object can be elementary and [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm "Glossary Entry") (with the exception of string), it cannot have the type f (unless [NO-DISPLAY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_screen.htm) is used) and cannot be an [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

Notes

-   LIKE can be used to reference the public attributes of global classes.
    
-   For reasons of compatibility, LIKE can also be used for an [obsolete type reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlike_obsolete.htm).
    

Alternative 3

... LIKE (name)

Effect

This addition creates the data object para with the data type c and the length 132. The input field is displayed on the selection screen, but with a length, field help, and input help appropriate for the data type specified in name.

name expects a flat character-like data object containing the name of a component in a flat structure from ABAP Dictionary in uppercase when the selection screen is accessed. The following can be specified for name:

-   Constant

If the data object name is specified as a constant, it can be evaluated statically and the specified component is identified as the used object.

-   Variable

If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

A text field literal can be specified for name, but its content is ignored. If the [text pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_pool_glosry.htm "Glossary Entry") currently loaded does not contain a selection text for the parameter, the output field displays the corresponding field label from ABAP Dictionary. When the data is transported from the input field to the data object para, the content is converted in such a way as if it were assigned by the respective ABAP data type (no formatting characters, decimal separation character is period symbol, data format is "yyyymmdd", and so on).

If the content of name is not a component structure from ABAP Dictionary or a literal is specified for name, the input field is displayed according to the actual type of the parameter. If no selection text is created for the parameter in the currently loaded text pool, the output field contains the text "Dynamic Parameter".

Note

The field name of the program in which the selection screen is defined is used. If the selection screen is defined in a [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the field name of the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry") is used, even if the selection screen from the assigned [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is displayed.

Example

Dynamic formatting of the input field of the parameter p\_dyn. On the selection screen, a three-character input field with the input help for the column carrid in the database table spfli is displayed. If the parameter does not have a selection text, the text "Airline Carrier" is displayed in the output field.

DATA comp TYPE c LENGTH 61.
PARAMETERS p\_dyn LIKE (comp).
INITIALIZATION.
  comp = 'SPFLI-CARRID'.

Continue
![Example](exa.gif "Example") [Selection Screens, Dynamic Dictionary Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensel_screen_dyn_dict_abexa.htm)