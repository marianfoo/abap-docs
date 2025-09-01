  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate.htm) → 

rel\_exp - Predicate Expressions

Syntax

...   *{*operand  [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_initial.htm)*}*
    *|* *{*ref      [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bound.htm)*}*
    *|* *{*oref     [IS *\[*NOT*\]* INSTANCE OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_instance_of.htm)*}*
    *|* *{*<fs>     [IS *\[*NOT*\]* ASSIGNED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_assigned.htm)*}*
    *|* *{*para     [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_supplied.htm)*}* ...

Effect

A predicate expression uses the [predicate operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") IS to determine a [truth value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentruth_value_glosry.htm "Glossary Entry") from the state of an operand.

Hints

-   Apart from INSTANCE OF, no operands of the possible predicate expressions are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). No predicate expression can be applied to a [calculation expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry").

-   The predicate expression [IS *\[*NOT*\]* REQUESTED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_requested.htm) is obsolete and was replaced by [IS *\[*NOT*\]* SUPPLIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_supplied.htm).

Continue
[rel\_exp - IS INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_initial.htm)
[rel\_exp - IS BOUND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bound.htm)
[rel\_exp - IS INSTANCE OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_instance_of.htm)
[rel\_exp - IS ASSIGNED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_assigned.htm)
[rel\_exp - IS SUPPLIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_supplied.htm)