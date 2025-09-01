---
title: "Syntax"
description: |
  ... <fs> IS NOT ASSIGNED ... Effect This predicate expression checks whether a memory area is assigned to a field symbol <fs>. The expression is true if the field symbol points to a memory area. <fs> expects a field symbol declared using FIELD-SYMBOLS(https://help.sap.com/doc/abapdocu_754_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_assigned.htm"
abapFile: "abenlogexp_assigned.htm"
keywords: ["do", "if", "data", "field-symbol", "abenlogexp", "assigned"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expressions.htm) → 

rel\_exp - IS ASSIGNED

Syntax

... <fs> IS *\[*NOT*\]* ASSIGNED ...

Effect

This predicate expression checks whether a memory area is assigned to a field symbol <fs>. The expression is true if the field symbol points to a memory area. <fs> expects a field symbol declared using [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfield-symbols.htm) or declared inline using [FIELD-SYMBOL( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm).

If the addition NOT is used, the expression is true if no memory area is assigned to the field symbol.

Example

Assigns a data object to a field symbol if no memory area has been assigned yet.

FIELD-SYMBOLS <fs> TYPE c.
...
IF <fs> IS NOT ASSIGNED.
  ASSIGN 'Standard Text' TO <fs>.
ENDIF.
...