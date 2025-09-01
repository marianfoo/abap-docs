# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) → 

Logical Functions

Logical functions are a part of [built-in functions](javascript:call_link\('abenbuilt_in_functions.htm'\)). They are divided into:

-   [Boolean functions](javascript:call_link\('abenboole_functions.htm'\))
-   [Predicate functions](javascript:call_link\('abenpredicate_functions.htm'\))

Hint

The program DEMO\_EXPRESSIONS shows examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool, Boolean Functions](javascript:call_link\('abenboole_functions.htm'\))


### abenboole_functions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Functions](javascript:call_link\('abenlogic_functions.htm'\)) → 

boolc, boolx, xsdbool, Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) Boolean functions determine the [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry") of a logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type dependent on the function and expresses the truth value of the logical expression with a value of this type.

Hint

These functions can be considered a partial replacement for the Boolean data type for truth values that is not available in ABAP. In particular, xsdbool and, under certain circumstances, boolc can be used in many operand positions where values of the type abap\_bool of the type pool ABAP are expected.

Variant 1   

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](javascript:call_link\('abenprocess_functions.htm'\)) and can be specified in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and in [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Hints

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be processed directly using the function [translate](javascript:call_link\('abentranslate_functions.htm'\)) or another suitable [processing function](javascript:call_link\('abenprocess_functions.htm'\)).
-   The result of boolc should not be compared with the constants abap\_true and abap\_false in relational expressions, since the latter converts from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is to be executed anyway, the function xsdbool can be used instead of boolc whose result has the same ABAP type as abap\_bool.
-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since a blank and no empty string is returned. If this is desired, the function xsdbool can be used instead of boolc.
-   If boolc is used in inappropriate places as specified in the points above, this leads to a syntax warning, which can be hidden using a pragma.

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Call of a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2   

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](javascript:call_link\('abenbit_functions.htm'\)) were executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](javascript:call_link\('abenbit_functions.htm'\)) were executed. bit expects a data object of the type i. In principle, boolx belongs to the [bit functions](javascript:call_link\('abenbit_functions.htm'\)) and can be used in all positions where a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is also allowed.

Hint

The function boolx can be used for efficient storage of sequences of truth values.

Example

The result of the following [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is hexadecimal 55, which corresponds to the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

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

The return value references the type XSDBOOLEAN from the ABAP Dictionary. This type, which refers to the identically named domain of type CHAR and length 1, is handled like a real Boolean type in serializations and deserializations to or from [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) and [asJSON](javascript:call_link\('abenabap_asjson_schema.htm'\)) using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Hints

-   The result of xsdbool can be used like a value of the type abap\_bool and can be compared with the constants abap\_true and abap\_false without any problems.
-   If the logical expression is false, the result of boolc fulfills the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since the returned blank is the type-dependent initial value at the same time.
-   The result of xsdbool cannot usually be converted directly using a [processing function](javascript:call_link\('abenprocess_functions.htm'\)) such as [translate](javascript:call_link\('abentranslate_functions.htm'\)), since the trailing blanks here are ignored in text fields of type c. The result of a false logical expression would be ignored. The result of the function boolc of type string is better suited for conversions of this type.
-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/TR/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool for whose argument a [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry") is listed. The variable is then serialized to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") using the predefined [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") [ID](javascript:call_link\('abenabap_xslt_id.htm'\)). This produces the value true or false. After a comparison with the identically typed constant abap\_false, the formatted result of the serialization is either read or displayed.

The result would be quite different if boolc were used instead of xsdbool. First, the transformations would have a different result since the values "X" and " " are not transformed to true or false; second, the logical expression gui\_flag = abap\_false would always be false, since abap\_false loses its blank when converting to the type string.

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
