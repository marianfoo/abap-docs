---
title: "FOR - Iteration Expressions"
description: |
  Syntax ... REDUCE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm) NEW(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm) VALUE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenval
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm"
abapFile: "abenfor.htm"
keywords: ["loop", "do", "while", "try", "data", "types", "internal-table", "abenfor"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expressions.htm) → 

FOR - Iteration Expressions

Syntax

... [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm)*|* [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm)*|* [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) type( ... FOR [... UNTIL*|*WHILE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm)*|* [... IN ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) ... ) ...

Effect

The language element FOR introduces an [iteration expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expression_glosry.htm "Glossary Entry") as a subexpression in [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm) and in the variants of the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm) and the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) for creating internal tables.

There are two main variants of iteration expressions:

-   Iteration expressions with [UNTIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) or [WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) for conditional iterations. These expressions are used to create (iteratively) the results of any data types using REDUCE or to create rows of internal tables using NEW or VALUE. The iteration steps can be defined as required.

-   Iteration expressions with [IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) for [table iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_iteration_glosry.htm "Glossary Entry"). These expressions are used for [table reductions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry") using REDUCE or [table comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry") using NEW or VALUE. The iteration steps here evaluate an existing internal table.

Notes

-   Any FOR variants can be combined in a single constructor expression, where they produce nested iterations.

-   The reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm) must contain at least one iteration expression. The variants of the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm) and the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) for creating internal tables can contain iteration expressions.

-   The conditional iterations using [UNTIL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) or [WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) provide an expression-oriented alternative to the loop statements [DO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm) and [WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile.htm). The same applies to the table iterations using [IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) and the statement [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm). The direct use of operand positions by the expression-oriented variants helps to avoid using helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

Continue
[FOR - Conditional Iteration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm)
[Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expressions_abexas.htm)