---
title: "Source Code"
description: |
  CCDEF INTERFACE intf. ENDINTERFACE. CLASS c1 DEFINITION. PUBLIC SECTION. INTERFACES intf. ENDCLASS. CLASS c2 DEFINITION INHERITING FROM c1. ENDCLASS.  Public class definition CLASS cl_demo_is_instance_of DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. MET
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_of_abexa.htm"
abapFile: "abeninstance_of_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "field-symbol", "abeninstance", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expressions.htm) →  [rel\_exp - IS INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicate%20Expression%20IS%20INSTANCE%20OF%2C%20ABENINSTANCE_OF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

rel\_exp - Predicate Expression IS INSTANCE OF

This example demonstrates the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm).

Source Code   

\* CCDEF
INTERFACE intf.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_is\_instance\_of DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_is\_instance\_of IMPLEMENTATION.
  METHOD main.
    DATA:
      oref  TYPE REF TO object,
      iref  TYPE REF TO intf,
      c1ref TYPE REF TO c1,
      c2ref TYPE REF TO c2.
    FIELD-SYMBOLS <fs> TYPE any.
    out->next\_section( \`Reference Variable Not Initial\` ).
    out->begin\_section( \`TYPE REF TO object\` ).
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
    out->begin\_section( \`TYPE REF TO intf\` ).
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
    out->begin\_section( \`TYPE REF TO c1\` ).
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
    out->begin\_section( \`TYPE REF TO c2\` ).
    c2ref = NEW c2( ).
    ASSERT c2ref IS INSTANCE OF c2.
    out->write( \`c2ref pointing to c2 is instance of c2\` ).
    ASSERT c2ref IS INSTANCE OF c1.
    out->write( \`c2ref pointing to c2 is instance of c1\` ).
    ASSERT c2ref IS INSTANCE OF intf.
    out->write( \`c2ref pointing to c2 is instance of intf\` ).
    out->end\_section( ).
    out->next\_section( \`Reference Variable Initial\` ).
    out->begin\_section( \`TYPE REF TO object\` ).
    ASSIGN oref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS NOT INSTANCE OF c1.
    out->write( \`oref pointing to nothing is not instance of c1\` ).
    ASSERT <fs> IS NOT INSTANCE OF c2.
    out->write( \`oref pointing to nothing is not instance of c2\` ).
    ASSERT <fs> IS NOT INSTANCE OF intf.
    out->write( \`oref pointing to nothing is not instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO intf\` ).
    ASSIGN iref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS NOT INSTANCE OF c1.
    out->write( \`iref pointing to nothing is not instance of c1\` ).
    ASSERT <fs> IS NOT INSTANCE OF c2.
    out->write( \`iref pointing to nothing is not instance of c2\` ).
    ASSERT <fs> IS INSTANCE OF intf.
    out->write( \`iref pointing to nothing is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO c1\` ).
    ASSIGN c1ref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS INSTANCE OF c1.
    out->write( \`c1ref pointing to nothing is instance of c1\` ).
    ASSERT <fs> IS NOT INSTANCE OF c2.
    out->write( \`c1ref pointing to nothing is not instance of c2\` ).
    ASSERT <fs> IS INSTANCE OF intf.
    out->write( \`c1ref pointing to nothing is instance of intf\` ).
    out->end\_section( ).
    out->begin\_section( \`TYPE REF TO c2\` ).
    ASSIGN c2ref TO <fs>.
    CLEAR <fs>.
    ASSERT <fs> IS INSTANCE OF c1.
    out->write( \`c2ref pointing to nothing is instance of c1\` ).
    ASSERT <fs> IS INSTANCE OF c2.
    out->write( \`c2ref pointing to nothing is instance of c2\` ).
    ASSERT <fs> IS INSTANCE OF intf.
    out->write( \`c2ref pointing to nothing is instance of intf\` ).
    out->end\_section( ).
  ENDMETHOD.
ENDCLASS.

Description   

A class c1 contains the interface intf and is the superclass of a class c2. For reference variables of the static types object, intf, c1, and c2, this example demonstrates the behavior of the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm) if these variables point to instances of c1 or c2 or are initial.

If the object reference variable is non-initial, the predicate expression is always true if a [downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm "Glossary Entry") to the comparison type is possible. If the object reference variable is initial, the predicate expression is true only if an [upcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenup_cast_glosry.htm "Glossary Entry") is possible. This example checks a generically typed field symbol for which this can only be determined at runtime.

For an initial reference variable with the static type object, the result of the expression for all comparison types except for object is false. For an initial reference variable with the static type intf, the result of the expression for all comparison types except for the interface intf is itself false.