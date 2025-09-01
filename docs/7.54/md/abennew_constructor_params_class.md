---
title: "NEW - Classes"
description: |
  Syntax ... NEW class#( let_exp(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm) p1 = a1 p2 = a2 .. ) ... Effect If a class class is specified or # stands for a class like this, the non-optional input parameters p1 p2 ... of the instance constructor of the instant
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennew_constructor_params_class.htm"
abapFile: "abennew_constructor_params_class.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "class", "data", "abennew", "constructor", "params"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [NEW - Instance Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) → 

NEW - Classes

Syntax

... NEW class*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)*\]* p1 = a1 p2 = a2 .. ) ...

Effect

If a class class is specified or # stands for a class like this, the non-optional input parameters p1 p2 ... of the instance constructor of the instantiated class must be filled using the type-friendly actual parameters a1 a2 ... The optional input parameters do not need to be filled. The description of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object_parameters.htm) specifies how values are passed by parameter and which classes can be used. [No parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennew_constructor_params_initial.htm) are passed for a class without an explicit instance constructor. An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm) can be specified in front of the parameter to define local helper fields.

Like an object reference variable of the type class,a constructor expression NEW class( ... ) can be specified in front of the [object component selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \-> and in [chained attribute accesses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry") and [chained method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchained_method_call_glosry.htm "Glossary Entry"). A chained method call of this type can be specified as a [standalone statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_chain.htm). This persists the result for the duration of the statement. Even a single expression without a following object component selector can be specified as a standalone statement. In this case, the only constructor executed is the constructor that needs to save a reference to the new object elsewhere (if it needs to be persisted).

In the special case of an attribute access NEW class( ... )->attr, the following applies:

-   It can be specified as a [writable expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in a [result position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry").

-   A [specified offset/length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") [+off(len)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) can be appended (if the data type is suitable), except when the chaining uses the statement ASSIGN as a [memory area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm).

[Method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") cannot be specified between the constructor expression and the attribute here.

Notes

-   This can be seen as a functional call of the instance constructor. As in [function calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) of [functional methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_functional.htm), no [non-class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) can be handled.

-   When the instance constructor is called, the return code sy-subrc is set to 0. Values other than 0 are not possible, since non-class-based exceptions cannot be handled.

Example

Constructs an instance of the class c1 when the method m2 of the class c2 is called. Here, an input parameter of the type in question is expected.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS constructor IMPORTING p1 TYPE i p2 TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD constructor.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m2 IMPORTING oref TYPE REF TO c1.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c2=>m2( NEW #( p1 = 1 p2 = 2 ) ).

Example

Uses a constructor expression with NEW in various positions. The temporary reference variable created using NEW is persisted during each statement.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA     a1 TYPE i.
    METHODS: m1 RETURNING value(p) TYPE i,
             m2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ...
  ENDMETHOD.
  METHOD m2.
    ...
  ENDMETHOD.
ENDCLASS.
DATA num TYPE i.
START-OF-SELECTION.
  num = NEW c1( )->a1.
  NEW c1( )->a1 = num.
  num = NEW c1( )->m1( ).
  NEW c1( )->m2( ).
  NEW c1( ).

Example

Displays a time stamp created in a constructor that only exists while the statement is being executed.

CLASS utc DEFINITION.
  PUBLIC SECTION.
    DATA ts TYPE utclong.
    METHODS constructor.
ENDCLASS.
CLASS utc IMPLEMENTATION.
  METHOD constructor.
    ts = utclong\_current( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display\_text(
    |{ NEW utc( )->ts TIMESTAMP = ISO }| ).

Example

Constructor expression with NEW on the left side of an expression. The temporary reference variable created using NEW exists only while the statement is being executed, however the reference to the object is assigned to the reference variable oref of the class class. This persists the object.

CLASS class DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string.
    METHODS constructor.
ENDCLASS.
DATA oref TYPE REF TO class.
CLASS class IMPLEMENTATION.
  METHOD constructor.
    oref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW class( )->attr = 'foo'.
  cl\_demo\_output=>display( oref->attr ).