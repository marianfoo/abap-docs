  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) → 

rel\_exp - Comparing Internal Tables

It is possible to compare internal tables with other internal tables if their row types can be compared. Internal tables are compared based on the following hierarchy:

1.  The internal table that has more rows than the other internal table is the larger table.
    
2.  Internal tables with the same number of rows are compared row by row. If an internal table contains nested internal tables, these are compared recursively. Two internal tables are identical if the content of each corresponding row matches. If two internal tables are not identical, the first non-matching pair of rows determines the result of the comparison.

Note

If an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") is specified as an operand of an assignment, the header line is addressed in nearly all [operand positions](javascript:call_link\('abenoperands_data_objects.htm'\)) and not the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry"). To address the table body of a table with a header, \[\] must be appended to the name.

Example

itab2 is larger than itab1, despite having the same number of rows, because the content of its second row is larger than that of itab1.

DATA:
  itab1 TYPE TABLE OF i WITH EMPTY KEY,
  itab2 TYPE TABLE OF i WITH EMPTY KEY.
itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
itab2 = VALUE #( ( 1 ) ( 3 ) ( 3 ) ).
ASSERT itab2 > itab1.

Executable Example

[Comparing Internal Tables](javascript:call_link\('abencompare_table_abexa.htm'\)).

Continue
![Example](exa.gif "Example") [Comparing Internal Tables](javascript:call_link\('abencompare_table_abexa.htm'\))