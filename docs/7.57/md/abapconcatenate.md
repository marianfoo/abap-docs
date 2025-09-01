  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONCATENATE, ABAPCONCATENATE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CONCATENATE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate_shortref.htm)

Syntax

CONCATENATE *{*dobj1 dobj2 ...*}**|**{*LINES OF itab*}*
            INTO result
            *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
            *\[*SEPARATED BY sep*\]*
            *\[*RESPECTING BLANKS*\]*.

Additions:

[1\. ... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ADDITION_1@1@)
[2\. ... SEPARATED BY sep](#!ABAP_ADDITION_2@2@)
[3\. ... RESPECTING BLANKS](#!ABAP_ADDITION_3@3@)

Effect

Concatenates either the content of the data objects dobj1, dobj2, ... of the lines of the internal table itab in accordance with their order and assigns them to the target field result. itab is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The following can be specified for the target field result:

-   An existing character-like or byte-like variable to which the result of the concatenation can be converted.
-   An inline declaration with [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm). If IN CHARACTER MODE is used, the declared variable is of the type string; if IN BYTE MODE is used, it is of the type xstring.

If the target field result has a fixed length and this is greater than the required length, it is padded on the right with blanks or hexadecimal 0. If the target field is too short, the concatenation is truncated on the right. If the target field is a string, its length is adjusted accordingly.

In character string processing, trailing blanks are usually ignored by default for data objects dobj1, dobj2 ... or lines in the internal table itab of fixed length.

System Fields

sy-subrc

Meaning

0

The content of all data objects dobj1, dobj2 ... or itab lines was passed to the target field result.

4

The content of the data objects dobj1, dobj2 ... or itab lines could not be passed completely, since result is too short.

Hints

-   Instead of CONCATENATE, [string expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) can usually also be used for elementary fields, where concatenations are possible using either [concatenation operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && or [embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm). The built-in function [concat\_lines\_of](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconcatenation_functions.htm) can be used to concatenate lines of an internal table.
-   The ABAP runtime framework performs an internal optimization to reduce the number of reassignments if new fragments are appended to an existing [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_glosry.htm "Glossary Entry") on the right within a loop. If the string or parts of the string itself are appended, no optimization takes place, which causes a squared increase in runtime in loops. This can be prevented by using helper variables. See also the [Performance Note](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_expr_perfo.htm) for string expressions.

Example

The example shows that a concatenation with CONCATENATE has the same result as a concatenation with the [concatenation operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") [&&](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_operators.htm) or via [embedded expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates_expressions.htm).

CONCATENATE 'a' 'b' 'c' INTO FINAL(str).
ASSERT str = 'a' && 'b' && 'c'.
ASSERT str = |{ 'a' }{ 'b' }{ 'c' }|.

Addition 1   

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, the data objects dobj1, dobj2 ..., the lines of the internal table itab, and the separator sep must be [character-like](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") or [byte-like](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry").

Example

Concatenation of individual bytes from an internal table in a byte string.

TYPES hex TYPE x LENGTH 1.
DATA itab TYPE TABLE OF hex WITH EMPTY KEY.
itab = VALUE #(
  ( CONV hex( '48' ) )
  ( CONV hex( '65' ) )
  ( CONV hex( '6C' ) )
  ( CONV hex( '6C' ) )
  ( CONV hex( '6F' ) ) ).
CONCATENATE LINES OF itab INTO FINAL(xstr) IN BYTE MODE.
cl\_demo\_output=>display(
  cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ).

Addition 2   

... SEPARATED BY sep

Effect

The addition SEPARATED BY is used to insert the content of data object sep between the content of the consecutive data objects dobj1, dobj2 .... In character string processing, trailing blanks are respected for separators sep of fixed length.

Example

After the first CONCATENATE statement, result contains Wehaveallthetimeintheworld, and after the second it contains We have all the time in the world.

DATA: t1 TYPE c LENGTH 10 VALUE 'We',
      t2 TYPE c LENGTH 10 VALUE 'have',
      t3 TYPE c LENGTH 10 VALUE 'all',
      t4 TYPE c LENGTH 10 VALUE 'the',
      t5 TYPE c LENGTH 10 VALUE 'time',
      t6 TYPE c LENGTH 10 VALUE 'in',
      t7 TYPE c LENGTH 10 VALUE 'the',
      t8 TYPE c LENGTH 10 VALUE 'world'.
CONCATENATE t1 t2 t3 t4 t5 t6 t7 t8
            INTO DATA(result).
...
CONCATENATE t1 t2 t3 t4 t5 t6 t7 t8
            INTO result SEPARATED BY space.

Addition 3   

... RESPECTING BLANKS

Effect

The addition RESPECTING BLANKS is only allowed in character string processing and respects the trailing blanks for data objects dobj1, dobj2 ... or lines of the internal table itab. If this addition is not used, the blanks are respected for data type string only.

Hint

The addition RESPECTING BLANKS of the statement CONCATENATE can be used to assign any character strings text to target fields str of type string while respecting trailing blanks: CLEAR str. CONCATENATE str text INTO str RESPECTING BLANKS.

Example

After the first CONCATENATE statement, result contains When\_the\_music\_is\_over, and after the second it contains When\_\_\_\_\_\_the\_\_\_\_\_\_\_music\_\_\_\_\_is\_\_\_\_\_\_\_\_ over\_\_\_\_\_\_. The underscores here represent blanks.

TYPES text   TYPE c LENGTH 10.
DATA  itab   TYPE TABLE OF text.
APPEND 'When'  TO itab.
APPEND 'the'   TO itab.
APPEND 'music' TO itab.
APPEND 'is'    TO itab.
APPEND 'over'  TO itab.
CONCATENATE LINES OF itab INTO DATA(result) SEPARATED BY space.
...
CONCATENATE LINES OF itab INTO result RESPECTING BLANKS.