---
title: "Numeric Literals"
description: |
  Syntax ... +-nnn... ... Effect A numeric literal consists of a continuous sequence of up to 31 digits n (0 to 9), which can be directly preceded by a plus (+) or minus (-) sign. -   Numeric literals between -2147483648 and 2147483647 are integer literals(https:
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuntyped_number_literals.htm"
abapFile: "abenuntyped_number_literals.htm"
keywords: ["do", "if", "case", "try", "data", "types", "field-symbol", "abenuntyped", "number", "literals"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Numeric%20Literals%2C%20ABENUNTYPED_NUMBER_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Numeric Literals

Syntax

... *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]* ...

Effect

A numeric literal consists of a continuous sequence of up to 31 digits n (0 to 9), which can be directly preceded by a plus (+) or minus (\-) sign.

-   Numeric literals between -2147483648 and 2147483647 are [integer literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninteger_literal_glosry.htm "Glossary Entry") and have the built-in ABAP type [i](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm).
-   Numeric literals outside of this interval are [packed number literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpacked_number_literal_glosry.htm "Glossary Entry") and have the built-in ABAP type [p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm), with a length of 8 bytes if they are not longer than 15 digits and with a length of 16 bytes if they have between 16 and 31 digits.

Hints

-   There are no numeric literals of type [int8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm). The [conversion operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) can be used to convert a numeric literal to the type int8.
-   [Packed number literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpacked_number_literal_glosry.htm "Glossary Entry") have a different internal representation from [integer literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninteger_literal_glosry.htm "Glossary Entry"). They cannot be [cast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencast_casting_glosry.htm "Glossary Entry") directly on field symbols with the data type integer.
-   In numeric literals, no decimal separators or [scientific notation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscientific_notation_glosry.htm "Glossary Entry") with mantissa and exponent are possible.
-   Numbers that cannot be represented as numeric literals can only be specified in character literals. If they are used in operand positions in which a numeric value is expected, they are converted into these. The [conversion operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) is recommended for targeted conversions.
-   Numeric literals that span multiple lines are not allowed. Furthermore, the [literal operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral_operator.htm) & cannot be used to create a composite literal from multiple numeric literals.
-   A numeric literal +*|*\-literal directly prefixed with a plus or minus sign must not be confused with a [simple arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm) +*|*\- literal for which there is a space between the operator +*|*\- and an unsigned literal. Unlike the numeric literal, the expression is not evaluated until runtime. Therefore, in such cases, the numeric literal should always be used for performance reasons.

Example

The first literal is of the type i. The following literals are of the type p with lengths 8 and 16.

DATA: t TYPE c LENGTH 1,
      l TYPE i.
DATA(datadescr) = CAST cl\_abap\_datadescr(
    cl\_abap\_typedescr=>describe\_by\_data(
     123456 ) ).
cl\_demo\_output=>write( datadescr->type\_kind ).
datadescr = CAST cl\_abap\_datadescr(
    cl\_abap\_typedescr=>describe\_by\_data( 123456790123 ) ).
cl\_demo\_output=>write( |{ datadescr->type\_kind } {
                          datadescr->length  }| ).
datadescr = CAST cl\_abap\_datadescr(
    cl\_abap\_typedescr=>describe\_by\_data( 12345679012345678 ) ).
cl\_demo\_output=>write( |{ datadescr->type\_kind } {
                          datadescr->length  }| ).
cl\_demo\_output=>display( ).

Example

Targeted conversion of a character literal into type int8.

FINAL(num) = CONV int8( '123456790123' ).

Example

The example shows that a casting of a [packed number literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpacked_number_literal_glosry.htm "Glossary Entry") to the type int8 has a different result than when using a field of the type int8, due to the different internal representation. If the field symbol <fs2> were typed with the [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm), an exception would even be raised for the use in the [embedded expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenembedded_expression_glosry.htm "Glossary Entry") of the output.

FIELD-SYMBOLS <fs1> TYPE int8.
FIELD-SYMBOLS <fs2> TYPE int8.
DATA num TYPE int8.
num = 3155380704000000000.
ASSIGN num                 TO <fs1> CASTING.
ASSIGN 3155380704000000000 TO <fs2> CASTING.
cl\_demo\_output=>display( |{ <fs1> } \\n| &&
                         |{ <fs2> }| ).