---
title: "Syntax"
description: |
  ... ref IS NOT BOUND ... Effect This predicate expression checks whether a reference variable contains a valid reference. A reference variable(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_variable_glosry.htm 'Glossary Entry') must be specified for ref. This is a
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_bound.htm"
abapFile: "abenlogexp_bound.htm"
keywords: ["delete", "do", "if", "case", "try", "data", "internal-table", "abenlogexp", "bound"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_expressions.htm) → 

rel\_exp - IS BOUND

Syntax

... ref IS *\[*NOT*\]* BOUND ...

Effect

This predicate expression checks whether a reference variable contains a valid reference. A [reference variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_variable_glosry.htm "Glossary Entry") must be specified for ref. This is a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   A data reference is valid if it can be dereferenced.

-   An object reference is valid if it points to an object.

When using the addition NOT, the expression is true if the reference variable does not contain a valid reference. In this case the reference variable is either initial and contains the [null reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_reference_glosry.htm "Glossary Entry"), or it is not initial and contains an invalid reference that does not point to an object.

Note

A non-initial reference variable that contains a [heap reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheap_reference_glosry.htm "Glossary Entry") is generally always valid (since it keeps an object alive). Only [heap references](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheap_reference_glosry.htm "Glossary Entry") that point to rows from internal tables can become invalid when rows are deleted. A data reference variable that contains a [stack reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstack_reference_glosry.htm "Glossary Entry"), on the other hand, can become invalid if the referenced data object is removed from the stack.

Example

The logical expression in the IF statement is false. The data reference dref contains a reference to a deleted table row.

DATA: dref TYPE REF TO data,
      itab TYPE TABLE OF ...
FIELD-SYMBOLS <fs> TYPE ANY.
dref = REF #( itab\[ ... \] ).
...
CLEAR itab.
...
IF dref IS BOUND.
  ASSIGN dref->\* TO <fs>.
ENDIF.

Executable Example

[Predicate Expression IS NOT BOUND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbound_abexa.htm)

Continue
![Example](exa.gif "Example") [Predicate Expression IS NOT BOUND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbound_abexa.htm)