  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA, TYPE, LIKE enum

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA enum\_var *{* *{*TYPE enum\_type*}*
              *|* *{*LIKE enum\_dobj*}* *}*
              [*\[*VALUE val*|**{*IS INITIAL*}**\]*](javascript:call_link\('abapdata_options.htm'\))
              [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

Declaration of an [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"). An enumerated variable is declared by:

-   TYPE reference to an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") [enum\_type](javascript:call_link\('abaptypes_enum.htm'\)).

-   LIKE reference to a data object with [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"). The following options are possible:

-   [Enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") of an enumerated type

-   Existing enumerated variables

The data type of an enumerated variable is its enumerated type. The enumerated type prescribes the [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") that an enumerated variable can contain. The [assignment rules for enumerated types](javascript:call_link\('abenconversion_enumerated.htm'\)) and the allowed operand positions for enumerated variables ensure that only allowed enumerated values can be assigned to an enumerated variable.

The technical type of the enumerated value in an enumerated variable is the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type. It is always a flat elementary type with a maximum length of 16 bytes.

Hint

For more information about using enumerated variables, see [enumerated objects](javascript:call_link\('abenenumerated_types_usage.htm'\)).

Example

In this example, three enumerated variables are declared:

-   color1 by a TYPE reference to the enumerated type colors

-   color2 by a LIKE reference to color1

-   color3 by an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) with reference to the enumerated type colors

Each enumerated variable is assigned a valid value. The output shows the name of the assigned enumerated constant and the actual value for each enumerated variable. A special rule for the conversion operator [CONV](javascript:call_link\('abenconv_constructor_enum.htm'\)) is used for the latter.

TYPES:
  BEGIN OF ENUM colors,
    red, blue, green,
  END OF ENUM colors.
DATA color1 TYPE colors VALUE red.
DATA color2 LIKE color1 .
color2 = blue.
DATA(color3) = VALUE colors( ).
color3 = green.
cl\_demo\_output=>display(
  |{ color1 }: { CONV i( color1 ) }\\n| &&
  |{ color2 }: { CONV i( color2 ) }\\n| &&
  |{ color3 }: { CONV i( color3 ) }| ).