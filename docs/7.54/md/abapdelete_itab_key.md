  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) →  [DELETE itab - itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\)) → 

DELETE itab - table\_key

[Quick Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

... TABLE itab *{* FROM wa *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* *}*
             *|* *{* WITH TABLE KEY *\[* [keyname](javascript:call_link\('abenkeyname.htm'\)) COMPONENTS*\]*
                                *{*comp\_name1*|*(name1)*}* = operand1
                                *{*comp\_name2*|*(name2)*}* = operand2
                                 ...                           *}* ...

Alternatives:

[1\. ... TABLE itab FROM wa *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE itab WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifying a Table Key as a Search Key Either the primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area wa behind FROM or by listing the components of the table key explicitly behind TABLE KEY.

When the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is used, the table categories are accessed as follows:

-   [Standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") are searched in a linear fashion.
    
-   Binary scans are used for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry").
    
-   The hash algorithm is used for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry").
    

When the [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is used, a binary scan is used in the [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") case and a [hash algorithm](javascript:call_link\('abenhash_algorithm_glosry.htm'\) "Glossary Entry") is used in the [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") case.

Note

When deleting a row from a standard table using a secondary key, the entire runtime depends linearly on the number of table rows. Although the rows to be deleted are found quickly, when updating the primary index a linear search for the entry to be deleted must be carried out.

Alternative 1

... TABLE itab FROM wa *\[*USING KEY keyname*\]*

Effect

For wa, a work area compatible to the row type of the internal table must be specified. This concerns [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The first row of the internal table found, whose values in the columns of the table key used match those of the corresponding components of wa, is processed. If the key fields in wa are empty, no entries are processed.

If the USING KEY addition is not specified, the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is used. If the USING KEY addition is specified, the table key specified in [keyname](javascript:call_link\('abenkeyname.htm'\)) is used.

If the [primary table key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") is used to access a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and the key is [empty](javascript:call_link\('abenitab_empty_key.htm'\)), the first row of the internal table is deleted. If this is known statically, the syntax check produces a warning.

Notes

-   When using the primary table key, note that this key can be the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), which can also have unexpected consequences:
    

-   For structured row types, the standard key covers all character-like and byte-like components.

-   The standard key of a standard table can be [empty](javascript:call_link\('abenitab_empty_key.htm'\)).

-   Outside of classes, an [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) is also possible where FROM wa can be omitted if the internal table has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab with the same name. The statement then uses the header line as the work area implicitly. Furthermore, USING KEY cannot be specified without FROM wa.
    

Example

Uses a work area constructed using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) to delete the table row that has the same value as the definable field carrid in the key field carrid of the primary key.

DATA carrid TYPE scarr-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA scarr\_tab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
DELETE TABLE scarr\_tab FROM VALUE #( carrid = to\_upper( carrid ) ).

Example

This example demonstrates an inconvenient way of deleting all flight connections between two specified cities using a secondary table key. In these cases, it is usually best to use a [WHERE condition](javascript:call_link\('abapdelete_itab_lines.htm'\)).

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

Each component of the table key used must be listed either directly as comp\_name1 comp\_name2 ... or as a parenthesized character-like data object name1 name2 ..., which contains the name of the component when the statement is executed. name is not case-sensitive. If name only contains blanks, this specified component is ignored when the statement is executed. An operand operand1 operand2 ... [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the data type of the component or convertible to it must be assigned to every component. The first row of the internal table found, whose values in the column of the table key used correspond with the values in the operands operand1 operand2 ... assigned, is processed. Duplicate or overlapping keys cannot be specified, nor can columns be specified that are not components of the table key.

operand1 operand2 ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified, the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined from its operands and the data type of the component and the result, if necessary, is converted to the data type of the component.

If the addition COMPONENTS is not specified, the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is used. If the addition COMPONENTS is specified, the table key specified in [keyname](javascript:call_link\('abenkeyname.htm'\)) is used.

Notes

-   The [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line can be specified as a component for tables with an unstructured row type, if their whole table entry is defined as a table key.
    
-   If WITH TABLE KEY is used, note that the values of incompatible operands operand1 operand2 ... are converted to the data type of the columns before the comparison. This means that the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) do not apply to incompatible data types. If a WHERE condition is used in the statements [LOOP](javascript:call_link\('abaploop_at_itab_cond.htm'\)), [MODIFY](javascript:call_link\('abapmodify_itab_multiple.htm'\)), and [DELETE](javascript:call_link\('abapdelete_itab_lines.htm'\)), however, the comparison rules do apply, which can produce differing results.
    
-   To avoid unexpected results after a conversion, operand1 operand2 ... must be compatible with the data type of the component.
    
-   If the row type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
    
-   A [customizing include](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") must not be specified as a component if it is empty.
    

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

Uses a secondary table key to delete all flight connections between two specified cities. In these cases, it is usually best to use a [WHERE condition](javascript:call_link\('abapdelete_itab_lines.htm'\)).

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