  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expressions.htm) →  [rel\_exp - IS BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicate%20Expression%20IS%20NOT%20BOUND%2C%20ABENBOUND_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

rel\_exp - Predicate Expression IS NOT BOUND

This example demonstrates the predicate expression [IS NOT BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_is\_not\_bound DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA dref TYPE REF TO i.
    METHODS meth.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_is\_not\_bound IMPLEMENTATION.
  METHOD main.
    me->meth( ).
    IF me->dref IS NOT INITIAL AND
       me->dref IS NOT BOUND.
      out->write(
        'stack reference is not initial but not bound' ).
    ENDIF.
  ENDMETHOD.
  METHOD meth.
    DATA number TYPE i.
    dref = REF #( number ).
  ENDMETHOD.
ENDCLASS.

Description   

The static attribute dref of a class is assigned a reference to a local data object in a method. This [stack reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstack_reference_glosry.htm "Glossary Entry") is invalid once the method is exited. Therefore, both predicate expressions IS NOT INITIAL and IS NOT BOUND are true for dref.