  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expressions.htm) →  [rel\_exp - IS BOUND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Predicate Expression IS NOT BOUND, ABENBOUND_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Predicate Expression IS NOT BOUND

This example demonstrates the predicate expression [IS NOT BOUND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm).

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

The static attribute dref of a class is assigned a reference to a local data object in a method. This [stack reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstack_reference_glosry.htm "Glossary Entry") is invalid once the method is exited. Therefore, both predicate expressions IS NOT INITIAL and IS NOT BOUND are true for dref.