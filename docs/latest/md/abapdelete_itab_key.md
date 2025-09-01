  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) →  [DELETE itab, itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_line.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20itab%2C%20table_key%2C%20ABAPDELETE_ITAB_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE itab, table\_key

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_shortref.htm)

Syntax

... TABLE itab *{* FROM wa *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]* *}*
             *|* *{* WITH TABLE KEY *\[* [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) COMPONENTS*\]*
                                *{*comp\_name1*|*(name1)*}* = operand1
                                *{*comp\_name2*|*(name2)*}* = operand2
                                 ...                           *}* ...

Alternatives:

[1\. ... TABLE itab FROM wa *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE itab WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifies a table key as a search key. The primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area wa behind FROM or explicitly by listing the components of the table key behind TABLE KEY.

When the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used, the table categories are accessed as follows:

-   [Standard tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") are searched linearly.
-   [Sorted tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry") are searched binarily.
-   [Hashed tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry") are searched using the hash algorithm.

When the [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is used, a binary search is used for a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") and a [hash algorithm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_algorithm_glosry.htm "Glossary Entry") for a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry").

Hint

When deleting a line from a standard table using a secondary key, the entire runtime depends linearly on the number of table lines. Although the lines to be deleted are found quickly, when updating the primary index, the entry to be deleted must be searched linearly.

Alternative 1   

... TABLE itab FROM wa *\[*USING KEY keyname*\]*

Effect

For wa, a work area compatible to the line type of the internal table must be specified. It is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of wa. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) is used.

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm), the first line of the internal table is deleted. If this is known statically, the syntax check produces a warning.

Hints

-   When using the primary table key, it should be noted that this key can be the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can also have unexpected consequences:
    -   For structured line types, the standard key covers all character-like and byte-like components.
    -   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm).
-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_short_forms.htm) is also possible where FROM wa can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. The statement then uses the header line as the work area implicitly. Furthermore, USING KEY cannot be specified without FROM wa.

Example

Deletion of the table line that has the same value as the input key field carrid in the key field carrid using a work area constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm).

DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DELETE TABLE scarr\_tab FROM VALUE #( carrid = to\_upper( carrid ) ).

Example

This example demonstrates an inconvenient way of deleting all flight connections between two specified cities using a secondary table key. In these cases, it is usually best to use a [WHERE condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_lines.htm).

DATA spfli\_tab TYPE SORTED TABLE OF spfli
               WITH UNIQUE KEY carrid connid
               WITH NON-UNIQUE SORTED KEY skey COMPONENTS cityfrom
                                                          cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
DATA subrc TYPE sy-subrc.
WHILE subrc = 0.
  DELETE TABLE spfli\_tab FROM VALUE #( cityfrom = 'FRANKFURT'
                                       cityto   = 'NEW YORK' )
                         USING KEY skey.
  subrc = sy-subrc.
ENDWHILE.

Alternative 2   

... TABLE itab WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...

Effect

Each component of the table key used must be listed either directly as comp\_name1 comp\_name2 ... or as a parenthesized character-like data object name1 name2 ..., which contains the name of the component when the statement is executed. name is not case-sensitive. If name only contains blanks, this component specification is ignored when the statement is executed. An operand operand1 operand2 ... [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of the component or convertible to it must be assigned to every component. The first line found in the internal table, whose values in the column of the table key used correspond with the values in the operands operand1 operand2 ... assigned, is processed. No duplicate or overlapping keys, nor columns that are not components of the table key can be specified.

operand1 operand2 ... are [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified, the [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined from its operands and the data type of the component. If necessary, the result is converted to the data type of the component.

If the addition COMPONENTS is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the addition COMPONENTS is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) is used.

Hints

-   The [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be specified as a component for tables with an unstructured line type and for which the entire table line is defined as a table key.
-   If WITH TABLE KEY is used, it should be noted that the values of incompatible operands operand1, operand2, ... are converted to the data type of the columns before the comparison, and therefore the [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) do not apply to incompatible data types. If a WHERE condition is used in the statements [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm), [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_multiple.htm), and [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_lines.htm), however, the comparison rules do apply, which can produce different results.
-   Due to the conversion before the comparison, [enumerated objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified as operands for character-like types of type c or string and the corresponding special [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_enumerated.htm) apply, which is not possible in a WHERE condition. Conversions of this type produce a message from the extended syntax check.
-   To avoid unexpected results after a conversion, operand1, operand2, ... must be compatible with the data type of the component.
-   If the line type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
-   A [customizing include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry") must not be specified as a component if it is empty.

Example

Deletion of the table line that has the same value as the input field carrid in the key field carrid by specifying the primary table key.

DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DELETE TABLE scarr\_tab WITH TABLE KEY carrid = carrid.

Example

Deletion of all flight connections between two specified cities using a secondary table key. In these cases, it is usually best to use a [WHERE condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_lines.htm).

DATA spfli\_tab TYPE SORTED TABLE OF spfli
     WITH UNIQUE KEY carrid connid
     WITH NON-UNIQUE SORTED KEY skey COMPONENTS cityfrom cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
DATA subrc TYPE sy-subrc.
WHILE subrc = 0.
  DELETE TABLE spfli\_tab WITH TABLE KEY skey
                         COMPONENTS cityfrom = 'FRANKFURT'
                                    cityto   = 'NEW YORK'.
  subrc = sy-subrc.
ENDWHILE.