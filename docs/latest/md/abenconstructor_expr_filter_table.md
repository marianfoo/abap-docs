---
title: "FILTER, Filter Table"
description: |
  Syntax ... FILTER type( itab EXCEPT IN ftab USING KEY keyname(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)  USING KEY keyname(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) EXCEPT IN
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_filter_table.htm"
abapFile: "abenconstructor_expr_filter_table.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abenconstructor", "expr", "filter", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FILTER, Filter Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FILTER%2C%20Filter%20Table%2C%20ABENCONSTRUCTOR_EXPR_FILTER_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FILTER, Filter Table

Syntax

... FILTER type( itab *{**\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]**}*
                    *|* *{**\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]* *\[*EXCEPT*\]* IN ftab*}*
                       WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Additions:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE c1 op v1 *\[*AND c2 op v2 *\[*...*\]**\]*](#!ABAP_ADDITION_2@2@)

Effect

This variant of the filter operator [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) filters itab using values from an internal table ftab. In the WHERE condition, the columns of itab are compared with the values of the columns of the table key of the lines of the filter table ftab. Those lines in itab are used for which at least one line in ftab meets the WHERE condition or for which there is no line in ftab when EXCEPT is specified. ftab is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Depending on its position, USING KEY can be used to specify either a key of the table ftab or the table itab, which is then used to access the table. If USING KEY is not used, the filter table ftab must have a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry") as the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), which is then used to access the filter table.

Hint

The line types of itab and ftab do not need to be identical.

Example

Filtering of three lines of the internal table carriers. The filter table has a sorted primary key. This is used implicitly and the addition USING KEY does not have to be specified.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(carriers).
DATA filter TYPE SORTED TABLE OF scarr-carrid
                 WITH UNIQUE KEY table\_line.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers IN filter WHERE carrid = table\_line ) ).

Addition 1   

... USING KEY keyname

Effect

Specification of the table key [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) with which the WHERE condition is evaluated. A sorted key or a hash key of the filter table can be specified after ftab or of the source table after itab. This can be the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") that is specified using primary\_key or the corresponding name.

-   When USING KEY is specified for the filter table ftab, it must have a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry"). There are no requirements on the table keys of itab. The specified key is used to access the filter table.
-   When USING KEY is specified for the source table itab, it must have a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry"). There are no requirements on the table keys of ftab. The specified key is used to access the source table.
-   If USING KEY is not specified for ftab or itab, the filter table ftab must be a sorted table or a hashed table and the primary table key is used implicitly when accessing the filter table. There are no requirements on the table keys of itab.

Hint

The tables for which a key is specified depends on the optimization to be achieved.

Example

Like the previous example, but here the addition USING KEY must be used for one of the tables, since the internal table filter is a standard table without a primary key.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(carriers).
DATA filter TYPE STANDARD TABLE OF scarr-carrid
                 WITH EMPTY KEY
                 WITH UNIQUE SORTED KEY line COMPONENTS table\_line.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers IN filter USING KEY line
           WHERE carrid = table\_line ) ).

Example

Like the previous example, but here the addition USING KEY is used for the other table.

DATA carriers TYPE SORTED TABLE OF scarr
              WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @carriers.
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

-   In the case of a hash key, exactly one [comparison expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_expression_glosry.htm "Glossary Entry") c op f for each key component. The only [comparison operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomp_operator_glosry.htm "Glossary Entry") allowed for op is [\=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm).
-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_expression_glosry.htm "Glossary Entry") c op f. op can be any [binary comparison operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm).

Multiple comparisons can only be combined using [AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_and.htm) only. There can be no further comparisons apart from those mentioned for key components. In the variant with the filter table, key components of the filter table ftab must be specified for the right operands f1, f2, .... On the left side, components of the internal table itab must be specified that are compatible with the right side.

Hints

-   The Boolean operators [NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_not.htm), [OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_or.htm), and [EQUIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_equiv.htm) cannot be used in the WHERE condition.
-   The [obsolete comparison operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_logexp_op.htm) cannot be used in the WHERE condition.

Executable Examples

-   [Table Filtering, Filter Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfilter_table_abexa.htm)
-   [Table Filtering, Filterings with Filter Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfilter_table_condition_abexa.htm)