---
title: "Syntax"
description: |
  ...   operand  IS NOT INITIAL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_initial.htm)  ref      IS NOT BOUND(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm)  oref     IS NOT INSTANCE OF(htt
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expressions.htm"
abapFile: "abenpredicate_expressions.htm"
keywords: ["do", "if", "try", "abenpredicate", "expressions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Predicate Expressions, ABENPREDICATE_EXPRESSIONS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Predicate Expressions

Syntax

...   *{*operand  [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_initial.htm)*}*
    *|* *{*ref      [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm)*}*
    *|* *{*oref     [IS *\[*NOT*\]* INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm)*}*
    *|* *{*<fs>     [IS *\[*NOT*\]* ASSIGNED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_assigned.htm)*}*
    *|* *{*para     [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm)*}* ...

Effect

A predicate expression uses the [predicate operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") IS to determine a [truth value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentruth_value_glosry.htm "Glossary Entry") from the state of an operand.

Hints

-   Apart from INSTANCE OF, no operands of the possible predicate expressions are [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). No predicate expression can be applied to a [calculation expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_expression_glosry.htm "Glossary Entry").
-   The predicate expression [IS *\[*NOT*\]* REQUESTED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_requested.htm) is obsolete and was replaced by [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm).

Continue
[rel\_exp - IS INITIAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_initial.htm)
[rel\_exp - IS BOUND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm)
[rel\_exp - IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm)
[rel\_exp - IS ASSIGNED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_assigned.htm)
[rel\_exp - IS SUPPLIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm)