  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) →  [rel\_exp - IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) → 

Predicate Expression IS INSTANCE OF

This example demonstrates the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)).

Source Code

REPORT demo\_is\_instance\_of.
INTERFACE intf.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      oref  TYPE REF TO object,
      iref  TYPE REF TO intf,
      c1ref TYPE REF TO c1,
      c2ref TYPE REF TO c2.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( \`Reference Variable Not Initial\`).
    out->begin\_section( \`TYPE REF TO object\`).
    oref = NEW c1( ).
    ASSERT oref IS NOT INSTANCE OF c2.
    out->write( \`oref pointing to c1 is not instance of c2\` ).
    ASSERT oref IS INSTANCE OF c1.
    out->write( \`oref pointing to c1 is instance of c1\` ).
    ASSERT oref IS INSTANCE OF intf.
    out->write( \`oref pointing to c1 is instance of intf\` ).
    oref = NEW c2( ).
    ASSERT oref IS INSTANCE OF c2.
    out->write( \`oref pointing to c2 is instance of c2\` ).
    ASSERT oref IS INSTANCE OF c1.
    out->write( \`oref pointing to c2 is instance of c1\` ).
    ASSERT oref IS INSTANCE OF intf.
    out->write( \`oref pointing to c2 is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO intf\`).
    iref = NEW c1( ).
    ASSERT iref IS NOT INSTANCE OF c2.
    out->write( \`iref pointing to c1 is not instance of c2\` ).
    ASSERT iref IS INSTANCE OF c1.
    out->write( \`iref pointing to c1 is instance of c1\` ).
    ASSERT iref IS INSTANCE OF intf.
    out->write( \`iref pointing to c1 is instance of intf\` ).
    iref = NEW c2( ).
    ASSERT iref IS INSTANCE OF c2.
    out->write( \`iref pointing to c2 is instance of c2\` ).
    ASSERT iref IS INSTANCE OF c1.
    out->write( \`iref pointing to c2 is instance of c1\` ).
    ASSERT iref IS INSTANCE OF intf.
    out->write( \`iref pointing to c2 is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO c1\`).
    c1ref = NEW c1( ).
    ASSERT c1ref IS NOT INSTANCE OF c2.
    out->write( \`c1ref pointing to c1 is not instance of c2\` ).
    ASSERT c1ref IS INSTANCE OF c1.
    out->write( \`c1ref pointing to c1 is instance of c1\` ).
    ASSERT c1ref IS INSTANCE OF intf.
    out->write( \`c1ref pointing to c1 is instance of intf\` ).
    c1ref = NEW c2( ).
    ASSERT c1ref IS INSTANCE OF c2.
    out->write( \`c1ref pointing to c2 is instance of c2\` ).
    ASSERT c1ref IS INSTANCE OF c1.
    out->write( \`c1ref pointing to c2 is instance of c1\` ).
    ASSERT c1ref IS INSTANCE OF intf.
    out->write( \`c1ref pointing to c2 is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO c2\`).
    c2ref = NEW c2( ).
    ASSERT c2ref IS INSTANCE OF c2.
    out->write( \`c2ref pointing to c2 is instance of c2\` ).
    ASSERT c2ref IS INSTANCE OF c1.
    out->write( \`c2ref pointing to c2 is instance of c1\` ).
    ASSERT c2ref IS INSTANCE OF intf.
    out->write( \`c2ref pointing to c2 is instance of intf\` ).
    out->end\_section( ).
    out->next\_section( \`Reference Variable Initial\`).
    out->begin\_section( \`TYPE REF TO object\`).
    ASSIGN oref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS NOT INSTANCE OF c1.
    out->write( \`oref pointing to nothing is not instance of c1\` ).
    ASSERT <fs> IS NOT INSTANCE OF c2.
    out->write( \`oref pointing to nothing is not instance of c2\` ).
    ASSERT <fs> IS NOT INSTANCE OF intf.
    out->write( \`oref pointing to nothing is not instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO intf\`).
    ASSIGN iref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS NOT INSTANCE OF c1.
    out->write( \`iref pointing to nothing is not instance of c1\` ).
    ASSERT <fs> IS NOT INSTANCE OF c2.
    out->write( \`iref pointing to nothing is not instance of c2\` ).
    ASSERT <fs> IS INSTANCE OF intf.
    out->write( \`iref pointing to nothing is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO c1\`).
    ASSIGN c1ref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS INSTANCE OF c1.
    out->write( \`c1ref pointing to nothing is instance of c1\` ).
    ASSERT <fs> IS NOT INSTANCE OF c2.
    out->write( \`c1ref pointing to nothing is not instance of c2\` ).
    ASSERT <fs> IS INSTANCE OF intf.
    out->write( \`c1ref pointing to nothing is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO c2\`).
    ASSIGN c2ref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS INSTANCE OF c1.
    out->write( \`c2ref pointing to nothing is instance of c1\` ).
    ASSERT <fs> IS INSTANCE OF c2.
    out->write( \`c2ref pointing to nothing is instance of c2\` ).
    ASSERT <fs> IS INSTANCE OF intf.
    out->write( \`c2ref pointing to nothing is instance of intf\` ).
    out->end\_section( ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A class c1 contains the interface intf and is the superclass of a class c2. For reference variables of the static types object, intf, c1, and c2, this example demonstrates the behavior of the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) if these variables point to instances of c1 or c2 or are initial.

If the object reference variable is non-initial, the predicate expression is always true if a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") to the comparison type is possible. If the object reference variable is initial, the predicate expression is true only if an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is possible. This example checks a generically typed field symbol for which this can only be determined at runtime.

For an initial reference variable with the static type object, the result of the expression for all comparison types except for object is false. For an initial reference variable with the static type intf, the result of the expression for all comparison types except for the interface intf is itself false.