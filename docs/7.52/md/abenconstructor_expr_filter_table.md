  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) → 

FILTER - Filter Table

Syntax

... FILTER type( itab *{**\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]**}*
                    *|* *{**\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* *\[*EXCEPT*\]* IN ftab*}*
                       WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE c1 op v1 *\[*AND c2 op v2 *\[*...*\]**\]*](#!ABAP_ADDITION_2@2@)

Effect

This variant of the filter operator [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)) filters itab using values from an internal table ftab. In the WHERE condition, the columns of itab are compared with the values of the columns of the table key of the rows of the filter table ftab. Those rows in itab are used for which at least one row in ftab meets the WHERE condition or for which there is no row in ftab when EXCEPT is specified. ftab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Depending on its position, USING KEY can be used to specify either a key of the table ftab or the table itab, which is then used to access the table. If USING KEY is not used, the filter table ftab must have a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") as the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"), which is then used to access the filter table.

Note

The row types of itab and ftab do not need to be identical.

Example

Filtering three rows of the internal table carriers. The filter table has a sorted primary key. This is used implicitly and the addition USING KEY does not have to be specified.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(carriers).
DATA filter TYPE SORTED TABLE OF scarr-carrid
                 WITH UNIQUE KEY table\_line.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers IN filter WHERE carrid = table\_line ) ).

Addition 1

... USING KEY keyname

Effect

Table key [keyname](javascript:call_link\('abenkeyname.htm'\)) specified with which the WHERE condition is evaluated. A sorted key or a hash key of the filter table (after ftab) or of the source table (after itab) can be specified. This can be the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") or a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") that is specified using primary\_key or the corresponding name.

-   When USING KEY is specified for the filter table ftab, it must have a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"). There are no requirements on the table keys of itab. The specified key is used to access the filter table.

-   When USING KEY is specified for the source table itab, it must have a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"). There are no requirements on the table keys of ftab. The specified key is used to access the source table.

-   If USING KEY is not specified for ftab or itab, the filter table ftab must be a sorted table or a hash table and the primary table key is used implicitly when accessing the filter table. There are no requirements on the table keys of itab.
    

Note

Which tables a key is specified for depends on the optimization it is intended to bring about.

Example

Like the preceding example, but here the addition USING KEY must be used for one of the tables, since the internal table filter is a standard table without a primary key.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(carriers).
DATA filter TYPE STANDARD TABLE OF scarr-carrid
                 WITH EMPTY KEY
                 WITH UNIQUE SORTED KEY line COMPONENTS table\_line.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers IN filter USING KEY line
           WHERE carrid = table\_line ) ).

Example

Like the preceding example, but here the addition USING KEY is used for the other table.

DATA carriers TYPE SORTED TABLE OF scarr
              WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE carriers.
DATA filter TYPE STANDARD TABLE OF scarr-carrid
                 WITH EMPTY KEY.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers USING KEY primary\_key IN filter
           WHERE carrid = table\_line ) ).

Addition 2

... WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]*

Effect

A condition for the table key used in the FILTER expression must be specified after WHERE:

-   In the case of a hash key, precisely one [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") c op f for each key component. The only [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") allowed for op is [\=](javascript:call_link\('abenlogexp_any_operand.htm'\)).

-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") c op f. op can be any [binary relational operator](javascript:call_link\('abenlogexp_any_operand.htm'\)).

Multiple comparisons can be joined using [AND](javascript:call_link\('abenlogexp_and.htm'\)) only. There can be no further comparisons alongside those mentioned for key components. In the variant with the filter table, key components of the filter table ftab must be specified for the right operands f1, f2, and so on. On the left side, components of the internal table itab must be specified that are compatible with the right side.

Notes

-   The Boolean operators [NOT](javascript:call_link\('abenlogexp_not.htm'\)), [OR](javascript:call_link\('abenlogexp_or.htm'\)), and [EQUIV](javascript:call_link\('abenlogexp_equiv.htm'\)) cannot be used in the WHERE condition.

-   The [obsolete relational operators](javascript:call_link\('abenobsolete_logexp_op.htm'\)) cannot be used in the WHERE condition.

Executable Examples

-   [Table Filtering, Filter Table](javascript:call_link\('abenfilter_table_abexa.htm'\))

-   [Table Filtering, Filterings with Filter Table](javascript:call_link\('abenfilter_table_condition_abexa.htm'\))