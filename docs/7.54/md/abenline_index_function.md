---
title: "Syntax"
description: |
  ... line_index( table_exp(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm)  ) ... The table function line_index returns the number of the row found using the table expression(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_g
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_index_function.htm"
abapFile: "abenline_index_function.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abenline", "index", "function"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [Table Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_functions.htm) → 

line\_index - Index Function

Syntax

... line\_index( [table\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm)  ) ...

The table function line\_index returns the number of the row found using the [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) with respect to the [table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_index_glosry.htm "Glossary Entry") used. The return value has the type i.

The row [itab\_line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm) found using the table expression must be defined by specifying a key. An index cannot be specified. Alongside single table expressions, table\_exp can also handle [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm), whose result is a row of an internal table (i.e. they are closed using angle brackets). The result always refers to the row specified in the final angle bracket and the key read restrictions apply only to this angle bracket.

Within line\_index, an explicitly specified table key in the table row [table\_line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm) of the table expression is handled in the same way as a [free search key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_free.htm) specified for this table key.

The table index used makes reference to the specified key as follows:

-   If a search key is specified without a table key being specified explicitly, the number of a found row is returned with respect to the [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"); if a [hashed table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry") is specified, the value \-1 is returned.

-   If a [table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry") is specified explicitly after KEY, the number of a found row is returned with respect to the assigned [table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_index_glosry.htm "Glossary Entry"). If the key is a [hash key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry"), the value \-1 is returned.

If the row in question is not found, no exception is raised. The value 0 is returned instead. In the case of [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm), of table expressions, the first unsuccessful from the left produces this value.

Notes

-   An index specified in [itab\_line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm) of the table expression is not possible here, since it does not make sense.

-   The table expression is only used to check the existence of the row number specified row. No temporary [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_result.htm) is created.

-   The table function line\_index can be considered as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) with the addition [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm) following by sy-tabix being evaluated. If a row is not found, 0 is always returned. sy-tabix, on the other hand, has the value where the row would be found after a binary search using READ TABLE.

-   If a search key specified in [table\_line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm) in the table expression covers the initial part of a [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") without being specified explicitly after KEY, a syntax check warning is produced (which can be hidden by a pragma), since the function is generally quicker if the secondary key is specified explicitly.

-   As in other use cases for table expressions, line\_index must be used carefully and no duplicate selections made. Generally speaking, it is best not to first check the row number using line\_index and then read the row immediately using the index.

-   The [predicate function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_function_glosry.htm "Glossary Entry") [line\_exists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_exists_function.htm) can be used to check the existence of a row. The table function line\_index can also be used to check whether a row exists. If the row is found, the result for every table category is not equal to 0. A check performed on a value greater than 0, on the other hand, is only enough in the case of [index tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenindex_table_glosry.htm "Glossary Entry") or when [sorted keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") are used.

Example

The index function can be used on chain expressions as follows, where the nested internal table accessed is taken from the example for [Chainings with Table Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm). The first read returns the value 1 for the first row of the innermost table. The second read returns the value 0, since there is no row available for the index read on the outermost table.

DATA(idx1) = line\_index(
               itab\[ 2 \]\[ 2 \]\[ KEY primary\_key table\_line = 7 \] ).
DATA(idx2) = line\_index(
               itab\[ 9 \]\[ 2 \]\[ KEY primary\_key table\_line = 7 \] ).

Executable Example

[Internal Tables, Index Function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_index_abexa.htm)

Continue
![Example](exa.gif "Example") [Internal Tables, Index Function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_index_abexa.htm)