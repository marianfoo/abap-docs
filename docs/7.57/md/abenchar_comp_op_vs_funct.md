---
title: "Comparison Operator"
description: |
  Predicate Function o1 CO o2 NOT contains_any_not_of( val = o1 sub = o2 ) o1 CN o2 contains_any_not_of( val = o1 sub = o2 ) o1 CA o2 contains_any_of( val = o1 sub = o2 ) o1 NA o2 NOT contains_any_of( val = o1 sub = o2 ) o1 CS o2 contains( val = to_upper( o1 ) sub = to_upper( o2 ) ) o1 NS
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchar_comp_op_vs_funct.htm"
abapFile: "abenchar_comp_op_vs_funct.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenchar", "comp", "funct"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_op.htm) →  [rel\_exp - Comparison Operators for Character-Like Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_strings.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparison Operators vs. Predicate Functions, ABENCHAR_COMP_OP_VS_FUNCT, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Comparison Operators vs. Predicate Functions

Instead of the [comparison operators for character-like data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_strings.htm), [predicate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_functions_strgs.htm) can be used as shown in the following table:

Comparison Operator

Predicate Function

o1 CO o2

NOT contains\_any\_not\_of( val = o1 sub = o2 )

o1 CN o2

contains\_any\_not\_of( val = o1 sub = o2 )

o1 CA o2

contains\_any\_of( val = o1 sub = o2 )

o1 NA o2

NOT contains\_any\_of( val = o1 sub = o2 )

o1 CS o2

contains( val = to\_upper( o1 ) sub = to\_upper( o2 ) )

o1 NS o2

NOT contains( val = to\_upper( o1 ) sub = to\_upper( o2 ) )

Since the comparison operators CS and NS are not case-sensitive, the arguments must be processed by the functions [to\_upper](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_functions.htm) (or to\_lower). It should also be noted that the trailing blanks of character-like arguments of fixed length are always ignored in the predicate functions, whereas there are exceptions to this rule for operands of comparison operators.

The operators CP and NP can also be replaced by the predicate function contains or matches and a suitable [regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expression_glosry.htm "Glossary Entry"). The differences in case handling must also be respected, whereby a simple mapping like in CS and NS is not possible, but usually not required.

Example

The following two relational expressions yield the same result.

FINAL(text) = \`xxxxaaayyyy\`.
ASSERT text CP \`\*aaa\*\` AND
       matches( val = text pcre = \`.\*aaa.\*\` case = ' ' ).