---
title: "CONV, Conversion of Enumerated Types"
description: |
  If the constructor expression CONV(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_conv.htm) is used on enumerated types(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_type_glosry.htm 'Glossary Entry'), the following rules apply: -
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_constructor_enum.htm"
abapFile: "abenconv_constructor_enum.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenconv", "constructor", "enum"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [CONV, Conversion Operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_conv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONV, Conversion of Enumerated Types, ABENCONV_CONSTRUCTOR_ENUM, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CONV, Conversion of Enumerated Types

If the constructor expression [CONV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_conv.htm) is used on [enumerated types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), the following rules apply:

-   If the argument dobj is an [enumerated object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") enum\_dobj and type corresponds exactly to the [base type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbase_type_glosry.htm "Glossary Entry") base\_type of the enumerated type, the result is the actual [enumerated value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the argument.
    
    ... CONV base\_type( enum\_dobj ) ...
    
-   If type is an enumerated type enum\_type, the following can be specified for the argument dobj:
    
    -   A data object of the same elementary type as the [base type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type, with any length and number of decimal places
    -   An expression allowed at this position whose result can be converted to the [base type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type
    
    If the argument represents a valid [enumerated value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_value_glosry.htm "Glossary Entry"), the result is a temporary [enumerated variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") with this value. If the value is not valid, an exception CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE occurs.
    
    ... CONV enum\_type( dobj ) ...
    

In all other cases, the normal [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_enumerated.htm) apply to CONV, where enumerated types can only be converted to the character-like types c and string and no types can be converted to enumerated types.

Short form:

If the enumerated type of an enumerated object enum\_dobj has the same base type base\_type as any other enumerated type enum\_type and the enumerated value in the enumerated variable is also defined in enum\_type, it is possible, according to the above rules, to nest constructor expressions CONV as follows:

CONV enum\_type( CONV base\_type( enum\_dobj ) )

The following short form can also be used for the nesting:

CONV enum\_type( enum\_dobj )

The result is the enumerated value from enum\_dobj with the data type enum\_type.

Hints

-   Using CONV for enumerated types deviates from the rule that CONV always behaves according to the regular conversion rules in assignments.
-   If the argument is an enumerated type with a character-like [base type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbase_type_glosry.htm "Glossary Entry"), and this base type is specified as type, the special rule above applies instead of the general conversion rule. That is, the enumerated value is returned, not the name.
-   Corresponding [rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexact_constructor_enum.htm) apply to the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_exact.htm).

Example

The first three assignments to the fields text1, text2, and text3 follow the regular [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_enumerated.htm) for enumerated type to character-like. The result in each case is the name BLUE.

A direct assignment of the enumerated constant blue to a field value1 of type i is not possible. The conversion operator CONV returns the actual enumerated value 1 for the base type i.

It is also not possible to assign the value 1 of type i to an enumerated variable color1 with enumerated type color. However, the conversion operator CONV returns an enumerated value for the type color if the argument has the base type i and a allowed value.

TYPES:
  BEGIN OF ENUM color,
    red, blue, green,
  END OF ENUM color.
DATA: text1 TYPE string,
      text2 TYPE string.
text1 = blue.
text2 = CONV #( blue ).
FINAL(text3) = CONV string( blue ).
ASSERT text1 = text2.
ASSERT text1 = text3.
DATA: value1 TYPE i,
      value2 TYPE i.
"value1 = blue.
value2 = CONV #( blue ).
FINAL(value3) = CONV i( blue ).
ASSERT value2 = value3.
DATA: color1 TYPE color,
      color2 TYPE color.
"color1 = 1.
color2 = CONV #( 1 ).
FINAL(color3) = CONV color( 1 ).
ASSERT color2 = color3.
cl\_demo\_output=>display( |Name:  { color3
                       }\\nValue: { value3 }| ).

Example

The short form

CONV animal( peach )

of the conversion operator CONV acts like

CONV animal( CONV i( peach ) )

It creates the value 2 from the enumerated constant peach of the enumerated type fruit, which can be assigned to the enumerated variable animal with enumerated type animal. The output shows the associated name DOG.

TYPES:
  BEGIN OF ENUM fruit,
    apple, peach, orange,
  END OF ENUM fruit.
TYPES:
  BEGIN OF ENUM animal,
    cat, dog, cow,
  END OF ENUM animal.
cl\_demo\_output=>display( CONV animal( peach ) ).

Example

The example shows the difference between the regular [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_enumerated.htm) and using the conversion operator CONV for a character-like base type:

-   In assignments to result1, the regular conversion rules apply and the name SECOND is assigned.
-   In assignments to result2, the special rule for CONV with the specification of the base type applies and the enumerated value aaaaaaaa is assigned.

TYPES:
  char8 TYPE c LENGTH 8,
  BEGIN OF ENUM text BASE TYPE char8,
    first  VALUE IS INITIAL,
    second VALUE 'aaaaaaaa',
    third  VALUE 'bbbbbbbb',
  END OF ENUM text.
DATA: result1 TYPE char8,
      result2 TYPE char8.
result1 = second.
result2 = CONV #( second ).
cl\_demo\_output=>display(
  |result1: { result1 }\\nresult2: { result2 }| ).

Executable Example

[Conversion Operator, Enumerated Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_enum_abexa.htm)

Continue
![Example](exa.gif "Example") [Conversion Operator, Enumerated Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_enum_abexa.htm)