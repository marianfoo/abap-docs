  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) →  [rel\_exp - IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) → 

Predicate Expression IS NOT BOUND

This example demonstrates the predicate expression [IS NOT BOUND](javascript:call_link\('abenlogexp_bound.htm'\)).

Source Code

REPORT demo\_is\_not\_bound.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA dref TYPE REF TO i.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD main.
    DATA number TYPE i.
    dref = REF #( number ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cls=>main( ).
  IF cls=>dref IS NOT INITIAL AND
     cls=>dref IS NOT BOUND.
    cl\_demo\_output=>display(
      'stack reference is not initial but not bound' ).
  ENDIF.

Description

The static attribute dref of a class is assigned a reference to a local data object in a method. This [stack reference](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry") is invalid once the method is exited. Therefore, both predicate expressions IS NOT INITIAL and IS NOT BOUND are true for dref.