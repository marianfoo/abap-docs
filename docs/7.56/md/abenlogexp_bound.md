  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) → 

rel\_exp - IS BOUND

Syntax

... ref IS *\[*NOT*\]* BOUND ...

Effect

This predicate expression checks whether a reference variable contains a valid reference. A [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") must be specified for ref. This is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

-   A data reference is valid if it can be dereferenced.
-   An object reference is valid if it points to an object.

With the addition NOT, the expression is true if the reference variable does not contain a valid reference. In this case, the reference variable is either initial and contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), or it is not initial and contains an invalid reference that does not point to an object.

Hint

A non-initial reference variable that contains a [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") is generally always valid since it keeps an object alive. Only [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") that point to lines of internal tables can become invalid when lines are deleted. A data reference variable that contains a [stack reference](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry"), on the other hand, can also become invalid if the referenced data object is removed from the stack.

Example

The logical expression in the IF statement is false. The data reference dref contains a reference to an already deleted table line.

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

[Predicate Expression IS NOT BOUND](javascript:call_link\('abenbound_abexa.htm'\))

Continue
![Example](exa.gif "Example") [rel\_exp - Predicate Expression IS NOT BOUND](javascript:call_link\('abenbound_abexa.htm'\))