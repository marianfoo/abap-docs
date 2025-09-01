  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Classes

Syntax

... NEW class*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* p1 = a1 p2 = a2 .. ) ...

Effect

If a class class is specified or # stands for a class like this, the non-optional input parameters p1 p2 ... of the instance constructor of the instantiated class must be filled with the type-compliant actual parameters a1 a2 ... The optional input parameters do not need to but can be filled. The description of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_parameters.htm'\)) specifies how parameters are passed and which classes can be used. [No parameters](javascript:call_link\('abennew_constructor_params_initial.htm'\)) are passed for a class without an explicit instance constructor. An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the parameter to define local helper fields.

Like an object reference variable of the type class, a constructor expression NEW class( ... ) can be specified in front of the [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") \-> and in [chained attribute accesses](javascript:call_link\('abenchained_attribute_acc_glosry.htm'\) "Glossary Entry") and [chained method calls](javascript:call_link\('abenchained_method_call_glosry.htm'\) "Glossary Entry"). A chained method call of this type can be specified as a [standalone statement](javascript:call_link\('abapcall_method_static_chain.htm'\)). The result is then retained for the duration of the statement. Even a single expression without a subsequent object component selector can be executed as a standalone statement. In this case, only the constructor that has a reference to the created object elsewhere is executed if this object needs to be retained.

In the special case of an attribute access NEW class( ... )->attr, the following applies:

-   It can be listed as a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

-   If the data is suitable, a [specified offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") [+off(len)](javascript:call_link\('abenoffset_length.htm'\)) can be appended unless the chaining uses the statement ASSIGN as a [memory area](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).

[Method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") cannot be specified between the constructor expression and the attribute here.

Hints

-   This is a functional call of the instance constructor. As in [function calls](javascript:call_link\('abapcall_method_functional.htm'\)) of [functional methods](javascript:call_link\('abapmethods_functional.htm'\)), no [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) can be handled.

-   When the instance constructor is called, the return code sy-subrc is set to 0. Values other than 0 are not possible, since non-class-based exceptions cannot be handled.

Example

Construction of an instance of the class c1 when the method m2 of the class c2 is called. which requires an input parameter of this type.

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

Use of a constructor expression with NEW in various positions. The temporary reference variable created using NEW is persisted during each statement.

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

Display of a time stamp created in a constructor that only exists while the statement is being executed.

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

Constructor expression with NEW on the left side of an expression. Although the reference variable only exists during the statement, the reference to the object is assigned to the reference variable oref in the constructor of the class class, thus preserving the object.

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