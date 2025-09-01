  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - IS ASSIGNED, ABENLOGEXP_ASSIGNED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

rel\_exp - IS ASSIGNED

Syntax

... <fs> IS *\[*NOT*\]* ASSIGNED ...

Effect

This predicate expression checks whether a memory area is assigned to a field symbol <fs>. The expression is true if the field symbol points to a memory area. <fs> expects a field symbol declared using [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\)) or declared inline using [FIELD-SYMBOL( )](javascript:call_link\('abenfield-symbol_inline.htm'\)).

With the addition NOT, the expression is true if no memory area is assigned to the field symbol.

Example

Assignment of a data object to a field symbol if no memory area has been assigned yet.

FIELD-SYMBOLS <fs> TYPE c.
...
IF <fs> IS NOT ASSIGNED.
  ASSIGN 'Standard Text' TO <fs>.
ENDIF.
...