---
title: "Syntax"
description: |
  ...   operand  IS NOT INITIAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)  ref      IS NOT BOUND(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm)  oref     IS NOT INSTAN
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expressions.htm"
abapFile: "abenpredicate_expressions.htm"
keywords: ["do", "if", "try", "abenpredicate", "expressions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicate%20Expressions%2C%20ABENPREDICATE_EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - Predicate Expressions

Syntax

...   *{*operand  [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)*}*
    *|* *{*ref      [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm)*}*
    *|* *{*oref     [IS *\[*NOT*\]* INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm)*}*
    *|* *{*<fs>     [IS *\[*NOT*\]* ASSIGNED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_assigned.htm)*}*
    *|* *{*para     [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm)*}* ...

Effect

A predicate expression uses the [predicate operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") IS to determine a [truth value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm "Glossary Entry") from the state of an operand.

Hints

-   Apart from INSTANCE OF, no operands of the possible predicate expressions are [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). No predicate expression can be applied to a [calculation expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry").
-   The predicate expression [IS *\[*NOT*\]* REQUESTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_requested.htm) is obsolete and was replaced by [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm).

Continue
[rel\_exp - IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)
[rel\_exp - IS BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm)
[rel\_exp - IS INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm)
[rel\_exp - IS ASSIGNED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_assigned.htm)
[rel\_exp - IS SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm)