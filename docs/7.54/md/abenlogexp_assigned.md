  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) → 

rel\_exp - IS ASSIGNED

Syntax

... <fs> IS *\[*NOT*\]* ASSIGNED ...

Effect

This predicate expression checks whether a memory area is assigned to a field symbol <fs>. The expression is true if the field symbol points to a memory area. <fs> expects a field symbol declared using [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\)) or declared inline using [FIELD-SYMBOL( )](javascript:call_link\('abenfield-symbol_inline.htm'\)).

If the addition NOT is used, the expression is true if no memory area is assigned to the field symbol.

Example

Assigns a data object to a field symbol if no memory area has been assigned yet.

FIELD-SYMBOLS <fs> TYPE c.
...
IF <fs> IS NOT ASSIGNED.
  ASSIGN 'Standard Text' TO <fs>.
ENDIF.
...