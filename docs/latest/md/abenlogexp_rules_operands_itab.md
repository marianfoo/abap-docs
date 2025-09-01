---
title: "Hint"
description: |
  If an internal table with a header line(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm 'Glossary Entry') is specified as the operand of an assignment, the header line is addressed in nearly all operand positions(https://help.sap.com/doc/abapdocu_latest
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands_itab.htm"
abapFile: "abenlogexp_rules_operands_itab.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "abenlogexp", "rules", "operands", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparing%20Internal%20Tables%2C%20ABENLOGEXP_RULES_OPERANDS_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

rel\_exp - Comparing Internal Tables

Internal tables can be compared with other internal tables if their line types are comparable. Internal tables are compared based on the following hierarchy:

1.  The internal table that has more lines than the other internal table is the larger table.
2.  Internal tables with the same number of lines are compared line by line. If an internal table contains nested internal tables, these are compared recursively. Two internal tables are identical if the content of each corresponding line matches. If two internal tables are not identical, the first non-matching pair of lines determines the result of the comparison.

Hint

If an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry") is specified as the operand of an assignment, the header line is addressed in nearly all [operand positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperands_data_objects.htm) and not the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry"). To address the table body of a table with a header, \[\] must be appended to the name.

Example

itab2 is greater than itab1, despite having the same number of lines, because the content of its second line is greater than that of itab1.

DATA:
  itab1 TYPE TABLE OF i WITH EMPTY KEY,
  itab2 TYPE TABLE OF i WITH EMPTY KEY.
itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
itab2 = VALUE #( ( 1 ) ( 3 ) ( 3 ) ).
ASSERT itab2 > itab1.

Executable Example

[Comparing Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompare_table_abexa.htm).

Continue
![Example](exa.gif "Example") [Comparing Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompare_table_abexa.htm)