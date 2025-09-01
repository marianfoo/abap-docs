  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PARAMETERS%2C%20type_options%2C%20ABAPPARAMETERS_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PARAMETERS, type\_options

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters_shortref.htm)

Syntax

... *{* TYPE type *\[*DECIMALS dec*\]* *}*
  *|* *{* LIKE dobj *}*
  *|* *{* LIKE (name) *}* ...

Alternatives:

[1\. ... TYPE type *\[*DECIMALS dec*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LIKE dobj](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LIKE (name)](#!ABAP_ALTERNATIVE_3@3@)

Effect

These additions define the data type of the selection parameter. If none of the additions is specified, the selection parameter has the type c. The data type can be defined using a static reference to an existing data type type, using a static reference to a data object dobj, or using a dynamic reference to a data type from the ABAP Dictionary in name.

If the addition [NO-DISPLAY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters_screen.htm) is not specified, the data type of a selection parameter must be elementary and [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry"), except for string, and the numeric type f is not allowed. If the addition NO-DISPLAY is specified, any data types, except [reference types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_type_glosry.htm "Glossary Entry") and [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry"), are possible.

Hint

If there is a reference to data types from the ABAP Dictionary, the selection parameter adopts all screen-relevant properties defined here. [conversion exits](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm "Glossary Entry") defined in the domain may be executed during the data transport from and to the input field. The text defined in the ABAP Dictionary can be inherited as a selection text. It should be noted, however, that the input field on the selection screen is linked with a global data object of the program and does not have a real reference to the ABAP Dictionary, as is the case for dynpro fields created in the Screen Painter with reference to the dictionary. This has a particular effect on automatic support for input help (F4) and value checking. In comparison to general dynpros, input help functionality is limited here in such a way that dependencies between fields and previously entered data are not respected. A value check is not performed automatically but can be executed using the addition [VALUE CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters_value.htm).

Alternative 1   

... TYPE type *\[*DECIMALS dec*\]*

Effect

This addition gives the selection parameter the data type type. type can be specified as:

-   The built-in ABAP types, except for b, s, f, and xstring.
-   A non-generic data type from the ABAP Dictionary, a [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry"), a non-generic public data type of a global class, or a data type from the same program, already defined using [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm), and which is elementary and not of the type f or xstring (unless [NO-DISPLAY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters_screen.htm) is used) and which is not an [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

If the built-in ABAP type p is specified, DECIMALS can be used to define the number of [digits after the decimal point](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") dec. If DECIMALS is not specified, the number of decimal places is 0. If DECIMALS is specified, the same applies as to the statement [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm).

If type is a type from the ABAP Dictionary that has the type CHAR, length 1, and the [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry") X and blank in the domain, the input field on the selection screen is displayed automatically as if the addition [AS CHECKBOX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters_screen.htm) were specified.

Hint

[Enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry") cannot be specified, regardless of the [base type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbase_type_glosry.htm "Glossary Entry").

Example

Declaration of a selection parameter with reference to the component carrid of the database table spfli. On the selection screen, a three-character input field with a callable field help and input help is created.

PARAMETERS p\_carrid TYPE spfli-carrid.

Alternative 2   

... LIKE dobj

Effect

Using this addition, the selection parameter applies all the properties of a data object dobj already declared, in particular a possible reference to the ABAP Dictionary. The same applies to dobj as to [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_referring.htm), except that the specified data object can be elementary and [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry"), except for string, it cannot have the type f (unless [NO-DISPLAY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters_screen.htm) is used) and cannot be an [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

Hints

-   LIKE can be used to reference the public attributes of global classes.
-   For reasons of compatibility, LIKE can also be used for an [obsolete type reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlike_obsolete.htm).

Alternative 3   

... LIKE (name)

Effect

This addition creates the data object para with the data type c and the length 132. The input field is displayed on the selection screen, but with a length, field help, and input help appropriate for the data type specified in name.

name expects a flat character-like data object containing the name of a component in a flat structure from the ABAP Dictionary in uppercase letters when the selection screen is called. The following can be specified for name:

-   Constant
    
    If the data object name is specified as a constant, it can be evaluated statically, and the specified component is identified as the used object.
    
-   Variable
    
    If the data object name is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.
    

A text field literal can be specified for name, but its content is not evaluated. If the [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry") currently loaded does not contain a selection text for the selection parameter, the output field displays the corresponding field label from the ABAP Dictionary. When the data is transported from the input field to the data object para, the content is converted in such a way as if it were assigned by the respective ABAP data type (no formatting characters, decimal separation character is period symbol, data format is yyyymmdd, and so on).

If the content of name is not a component structure from the ABAP Dictionary or a literal is specified for name, the input field is displayed according to the actual type of the selection parameter. If no selection text is created for the selection parameter in the currently loaded text pool, the output field contains the text Dynamic Parameter.

Hint

The field name of the program in which the selection screen is defined is used. If the selection screen is defined in a [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the field name of the [database program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_program_glosry.htm "Glossary Entry") is used, even if the selection screen from the assigned [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is displayed.

Example

Dynamic formatting of the input field of the selection parameter p\_dyn. On the selection screen, a three-character input field with the input help for the column carrid in the database table spfli is displayed. If the selection parameter does not have a selection text, the text Airline Carrier is displayed in the output field.

DATA comp TYPE c LENGTH 61.
PARAMETERS p\_dyn LIKE (comp).
INITIALIZATION.
  comp = 'SPFLI-CARRID'.

Continue
![Example](exa.gif "Example") [Selection Screens - Dynamic Dictionary Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensel_screen_dyn_dict_abexa.htm)