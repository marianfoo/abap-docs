  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogic_functions.htm) → 

boolc, boolx, xsdbool - Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type determined by the function and expresses the truth value of the logical expression using a value of this type.

Note

These functions can be viewed as a partial replacement for the Boolean data type for truth values not available in ABAP. In particular, xsdbool and (with restrictions) boolc can be used in many operand positions where input parameters of the type abap\_bool of the type group ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be edited directly using the function [translate](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm).

-   The result of boolc must not be compared with the constants abap\_true and abap\_false in relational expressions, since the comparison converts the latter from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is required anyway, the function xsdbool can be used instead of boolc. The result of this function has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_initial.htm), since a blank is returned (not an empty string). If this is the required behavior, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places (as specified in the points above), a syntax warning is produced (which can be hidden using a pragma).

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Calls a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_functions.htm) were being executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_functions.htm) were being executed. bit expects a data object of the type i. In principle, boolx is one of the [bit functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Note

The function boolx can be used for efficient saving of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, the same as the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from ABAP Dictionary. This type (which references the identically named domain with the type CHAR and length 1) is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   The result of xsdbool can be used like a value of the type abap\_bool and compared with the constants abap\_true and abap\_false.

-   If the logical expression is false, the result of boolc meets the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value too.

-   The result of xsdbool cannot usually be implemented directly using a [processing function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields with the type c. The result of a false logical expression would be ignored. The result of the function boolc with the type string is better suited to transformations of this type.

-   The abbreviation xsd stands for [XML schema data](http://www.w3.org/tr/xmlschema-2/) types.

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool. A [predicative method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is specified as the argument of this function. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_id.htm). This produces the value true or false. After being compared with the identically typed constant abap\_false, the result of the serializations is either read or displayed.

The result would be very different if boolc were used instead of xsdbool. Firstly, the transformations would have a different result (since the values "X" and " " are not transformed to true or false); secondly, the logical expression gui\_flag = abap\_false would always be false (since abap\_false loses its blank when converted to the type string).

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.