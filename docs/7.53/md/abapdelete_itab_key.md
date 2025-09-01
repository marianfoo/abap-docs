---
title: "Syntax"
description: |
  ... TABLE itab  FROM wa USING KEY keyname(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm)    WITH TABLE KEY  keyname(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) COMPONENTS comp_name1(name1) = operan
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm"
abapFile: "abapdelete_itab_key.htm"
keywords: ["select", "delete", "loop", "do", "while", "if", "case", "try", "class", "data", "types", "internal-table", "abapdelete", "itab", "key"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) →  [DELETE itab - itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm) → 

DELETE itab - table\_key

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_shortref.htm)

Syntax

... TABLE itab *{* FROM wa *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm)*\]* *}*
             *|* *{* WITH TABLE KEY *\[* [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) COMPONENTS*\]*
                                *{*comp\_name1*|*(name1)*}* = operand1
                                *{*comp\_name2*|*(name2)*}* = operand2
                                 ...                           *}* ...

Alternatives:

[1\. ... TABLE itab FROM wa *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE itab WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifying a Table Key as a Search Key Either the primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area wa behind FROM or by listing the components of the table key explicitly behind TABLE KEY.

When the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used, the table categories are accessed as follows:

-   [Standard tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") are searched in a linear fashion.
    
-   Binary scans are used for [sorted tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry").
    
-   The hash algorithm is used for [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry").
    

When the [secondary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is used, a binary scan is used in the [sorted key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_key_glosry.htm "Glossary Entry") case and a [hash algorithm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhash_algorithm_glosry.htm "Glossary Entry") is used in the [hash key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhash_key_glosry.htm "Glossary Entry") case.

Note

When deleting a row from a standard table using a secondary key, the entire runtime depends linearly on the number of table rows. Although the rows to be deleted are found quickly, when updating the primary index a linear search for the entry to be deleted must be carried out.

Alternative 1

... TABLE itab FROM wa *\[*USING KEY keyname*\]*

Effect

For wa, a work area compatible to the row type of the internal table must be specified. This concerns [functional operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The first row of the internal table found, whose values in the columns of the table key used match those of the corresponding components of wa, is processed. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) is used.

If the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_key_glosry.htm "Glossary Entry") is used to access a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") and the key is [empty](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_empty_key.htm), the first row of the internal table is deleted. If this is known statically, the syntax check produces a warning.

Notes

-   When using the primary table key, note that this key can be the [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry"), which can also have unexpected consequences:
    

-   For structured row types, the standard key covers all character-like and byte-like components.

-   The standard key of a standard table can be [empty](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_empty_key.htm).

-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_short_forms.htm) is also possible where FROM wa can be omitted if the internal table has a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") itab with the same name. The statement then uses the header line as the work area implicitly. Furthermore, USING KEY cannot be specified without FROM wa.
    

Example

Uses a work area constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) to delete the table row that has the same value as the definable field carrid in the key field carrid of the primary key.

DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DELETE TABLE scarr\_tab FROM VALUE #( carrid = to\_upper( carrid ) ).

Example

This example demonstrates an inconvenient way of deleting all flight connections between two specified cities using a secondary table key. In these cases, it is usually best to use a [WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_lines.htm).

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

Each component of the table key used must be listed either directly as comp\_name1 comp\_name2 ... or as a parenthesized character-like data object name1 name2 ..., which contains the name of the component when the statement is executed. name is not case-sensitive. If name only contains blanks, this specified component is ignored when the statement is executed. An operand operand1 operand2 ... [compatible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of the component or convertible to it must be assigned to every component. The first row of the internal table found, whose values in the column of the table key used correspond with the values in the operands operand1 operand2 ... assigned, is processed. Duplicate or overlapping keys cannot be specified, nor can columns be specified that are not components of the table key.

operand1 operand2 ... are [general expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified, the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined from its operands and the data type of the component and the result, if necessary, is converted to the data type of the component.

If the addition COMPONENTS is not specified, the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is used. If the addition COMPONENTS is specified, the table key specified in [keyname](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkeyname.htm) is used.

Notes

-   The [pseudo component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be specified as a component for tables with an unstructured row type, if their whole table entry is defined as a table key.
    
-   If WITH TABLE KEY is used, note that the values of incompatible operands operand1 operand2 ... are converted to the data type of the columns before the comparison. This means that the [comparison rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules.htm) do not apply to incompatible data types. If a WHERE condition is used in the statements [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm), [MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_multiple.htm), and [DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_lines.htm), however, the comparison rules do apply, which can produce differing results.
    
-   To avoid unexpected results after a conversion, operand1 operand2 ... must be compatible with the data type of the component.
    
-   If the row type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
    
-   A [customizing include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencustomizing_include_glosry.htm "Glossary Entry") must not be specified as a component if it is empty.
    

Example

Specifies the primary table key to delete the table row that has the same value as the definable field carrid in the key field carrid.

DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DELETE TABLE scarr\_tab WITH TABLE KEY carrid = carrid.

Example

Uses a secondary table key to delete all flight connections between two specified cities. In these cases, it is usually best to use a [WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_lines.htm).

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