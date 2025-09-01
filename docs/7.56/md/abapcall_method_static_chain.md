---
title: "Syntax"
description: |
  ...  meth(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm)( ... )-> meth1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm)( ... )->meth2( ... )->...->methn(https://help.sap.com/doc/abapdocu_756_ind
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_chain.htm"
abapFile: "abapcall_method_static_chain.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapcall", "static", "chain"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls_static.htm) → 

... meth1( ... )->meth2( ... )->..., Method Chaining

Syntax

... *{* [meth](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm)( ... )-> [meth1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm)( ... )->meth2( ... )->...->[methn](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm)( ... ) *}*
  *|* *{* [meth](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm)( ... )->meth1( ... )->meth2( ... )->...->attr        *}* ...

Alternatives:

[1\. meth( ... )->meth1( ... )->meth2( ... )->...->methn( ... )](#!ABAP_ALTERNATIVE_1@1@)
[2\. meth( ... )->meth1( ... )->meth2( ... )->...->attr](#!ABAP_ALTERNATIVE_2@2@)

Effect

Chaining of static method calls to a chained method call or a chained attribute access. [meth](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm), [meth1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm), [meth2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_ident_stat.htm), ... , expect [functional methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_functional.htm) whose return values are reference variables that point to objects with the next method in question. All methods that follow meth must be called using the object component selector.

The parameters are passed to the functional methods meth, meth1, meth2, ... using the syntax valid for [functional method calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_functional.htm).

Alternative 1   

meth( ... )->meth1( ... )->meth2( ... )->...->methn( ... )

Effect

Chained method call. Call of the instance method methn in an object. The reference variable for the object is the return value of the preceding method chaining.

A chained method call can be specified as a [standalone statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_short.htm) or as a [functional method call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_functional.htm) in a suitable [operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions.htm). The relevant rules apply in parameter passing to meth.

If the return value of the last method has a structured data type, the chained method call can, like a structure, be listed in front of the [structure component selector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") \- and be used to access a component of the structure.

Hint

In methn, a [constructor expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can be specified with a [constructor operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm) or [CAST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_cast.htm) for oref not only in a functional call, but also in standalone statements.

Example

Call of the method m3 in an object of the class c3 that is addressed using method chaining.

CLASS c3 DEFINITION.
  PUBLIC SECTION.
    METHODS m3 CHANGING c3 TYPE string.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    METHODS m2  IMPORTING i2 TYPE string
                RETURNING value(r2) TYPE REF TO c3.
ENDCLASS.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING i1 TYPE string
                     RETURNING value(r1) TYPE REF TO c2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    CREATE OBJECT r1.
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    CREATE OBJECT r2.
  ENDMETHOD.
ENDCLASS.
CLASS c3 IMPLEMENTATION.
  METHOD m3.
    c3 = 'New text'.
    MESSAGE c3 TYPE 'I'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA txt TYPE string VALUE \`test\`.
  c1=>m1(
    i1 = \`p1\` )->m2(
    i2 = \`p2\` )->m3(
    CHANGING c3 = txt ).

Alternative 2   

meth( ... )->meth1( ... )->meth2( ... )->...->attr

Effect

Chained attribute access. Access to the instance attribute attr in an object. The reference variable for the object is the return value of the preceding method chaining.

If the attribute has a structured data type, the chained attribute access can, like a structure, be listed in front of the [structure component selector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") \- and be used to access a component of the structure.

Chained attribute access can currently only be specified in suitable [read positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions.htm). Writes to an attribute addressed using method chaining are not yet possible.

Example

Chained attribute access in executable example program DEMO\_METHOD\_CHAINING.

cl\_demo\_output=>display(
  oref->meth( \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).

Executable Example

[Method Chaining](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_chaining_abexa.htm)

Continue
![Example](exa.gif "Example") [Method Chaining](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_chaining_abexa.htm)