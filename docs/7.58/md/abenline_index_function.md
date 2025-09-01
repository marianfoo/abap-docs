---
title: "Syntax"
description: |
  ... line_index( table_exp(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm)  ) ... The built-in(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) table function line_index returns the number of the line found using the
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_index_function.htm"
abapFile: "abenline_index_function.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abenline", "index", "function"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [itab - Table Functions (table\_func)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_func%20-%20line_index%2C%20ABENLINE_INDEX_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_func - line\_index

Syntax

... line\_index( [table\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm)  ) ...

The [built-in](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) table function line\_index returns the number of the line found using the [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm) with respect to the [table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_index_glosry.htm "Glossary Entry") used. The return value has the type i.

The line [itab\_line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_itab_line.htm) to be searched for using the table expression must be determined by a key specification. An index cannot be specified. For table\_exp, in addition to individual table expressions, all [chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_chaining.htm) whose result is a line of an internal table, that is, they are closed using angle brackets, can also be specified. The result always refers to the line specified in the final angle bracket and the key access restrictions apply only to this angle bracket.

Within line\_index, an explicitly specified table key in the table line [table\_line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_itab_line.htm) of the table expression is handled in the same way as a [free search key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_free.htm) specified for this table key.

The table index used depends on the specified key as follows:

-   If a search key is specified without a table key being specified explicitly, the number of a found line is returned with respect to the [primary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") and, in the case of a [hashed table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry"), the value \-1.
-   If a [table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_key_glosry.htm "Glossary Entry") is specified explicitly after KEY, the number of a found line is returned with respect to the assigned [table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_index_glosry.htm "Glossary Entry"). If the key is a [hash key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm "Glossary Entry"), the value \-1 is returned.

If the line searched for is not found, no exception is raised. The value 0 is returned instead. In the case of [chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_chaining.htm), of table expressions, the first unsuccessful from the left produces this value.

Hints

-   An index specified in [itab\_line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_itab_line.htm) of the table expression is not possible here, since it does not make sense.
-   The table expression is only used to check the existence of the line number specified line. No temporary [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_result.htm) is created.
-   The table function line\_index can be understood as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) with the addition [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm) followed by the evaluation of sy-tabix. If a line is not found, 0 is always returned. sy-tabix, on the other hand, has the value where the line would be found after a binary search using READ TABLE.
-   If a search key specified in [table\_line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_itab_line.htm) in the table expression covers the initial part of a [secondary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") without being specified explicitly after KEY, a syntax check warning is produced that can be hidden by a pragma, since the function is generally quicker if the secondary key is specified explicitly.
-   As in other use cases for table expressions, it is important that no duplicate selections are made, especially in the case of line\_index. Generally speaking, it is best not to first check the line number using line\_index and then read the line immediately using the index.
-   The [predicate function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_function_glosry.htm "Glossary Entry") [line\_exists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_exists_function.htm) can be used to check the existence of a line. The table function line\_index can also be used to check whether a line exists. If the line is found, the result is not equal to 0 for every table category. A check on a value greater than 0, on the other hand, is sufficient only for [index tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry") or when using [sorted keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_key_glosry.htm "Glossary Entry").

Example

The index function can be used on chained table expressions as follows, where the nested internal table accessed is taken from the example for [Chainings with Table Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_chaining.htm). The first read returns the value 1 for the first line of the innermost table. The second read returns the value 0, since there is no line available for the index read on the outermost table.

DATA(idx1) = line\_index(
               itab\[ 2 \]\[ 2 \]\[ KEY primary\_key table\_line = 7 \] ).
DATA(idx2) = line\_index(
               itab\[ 9 \]\[ 2 \]\[ KEY primary\_key table\_line = 7 \] ).

Executable Example

[Internal Tables, Index Function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_index_abexa.htm)

Continue
![Example](exa.gif "Example") [table\_func - Index Function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_index_abexa.htm)