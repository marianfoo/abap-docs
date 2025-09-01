# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / NEW, Instance Operator / NEW, Classes

Included pages: 2


### abennew_constructor_params_class.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20NEW%2C%20Classes%2C%20ABENNEW_CONSTRUCTOR_PARAMS_CLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

NEW, Classes

Syntax

... NEW class*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm)*\]* p1 = a1 p2 = a2 ... ) ...

Effect

If a class class is specified or # stands for a class like this, the non-optional input parameters p1 p2 ... of the instance constructor of the instantiated class must be filled with the type-compliant actual parameters a1 a2 ... The optional input parameters do not need to but can be filled. The description of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_parameters.htm) specifies how parameters are passed and which classes can be used. [No parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_initial.htm) are passed for a class without an explicit instance constructor. An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm) can be specified in front of the parameter to define local helper fields.

Like an object reference variable of the type class, a constructor expression NEW class( ... ) can be specified in front of the [object component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \-> and in [chained attribute accesses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry") and [chained method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchained_method_call_glosry.htm "Glossary Entry").

... NEW class( ... )->attr*|*('attr\_name') ...

... NEW class( ... )->meth( ... ) ...

An attribute can be specified [statically](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_component_selector.htm) as attr or [dynamically](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_component_selector.htm) as content of a character-like data object attr\_name in parentheses. If a dynamically specified attribute is not found, an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT is raised. A method meth can be specified statically only.

A chained method call of this type can be specified as a [standalone statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_chain.htm) or a [functional method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm). The result is then preserved for the duration of the statement. Even a single expression without a subsequent object component selector can be executed as a standalone statement. In this case, only the constructor that has a reference to the created object elsewhere is executed if this object needs to be preserved.

In the case of an attribute access NEW class( ... )->attr, the following applies specifically:

-   It can be specified as a [writable expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in a [result position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry").
-   If the data type is suitable, an [offset/length specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") [+off(len)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) can be appended unless the chaining is used as [memory area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_writable_exp.htm) in the statement ASSIGN.

[Method chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") cannot be specified between the constructor expression and the attribute here.

Hints

-   This is a functional call of the instance constructor. As in [functional calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm) of [functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm), no [non-class-based exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm) can be handled.
-   When the instance constructor is called, the return code sy-subrc is set to 0. Values other than 0 are not possible, since non-class-based exceptions cannot be handled.

Example

Construction of an instance of the class c1 when the method m2 of the class c2 is called, which requires an input parameter of this type.

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    c2=>m2( NEW #( p1 = 1 p2 = 2 ) ).
  ENDMETHOD.
ENDCLASS.

Example

Use of a constructor expression with NEW in various positions. The temporary reference variable created using NEW is persisted during each statement. The example also shows dynamic specifications and the exception that is raised in case of an invalid attribute.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA     a1 TYPE i.
    METHODS: m1 RETURNING VALUE(p) TYPE i,
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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA num TYPE i.
    num = NEW c1( )->a1.
    NEW c1( )->a1 = num.
    num = NEW c1( )->m1( ).
    NEW c1( )->m2( ).
    NEW c1( ).
    TRY.
        num = NEW c1( )->('a1').
      CATCH cx\_sy\_assign\_illegal\_component.
        DATA(exc) = 'X'.
    ENDTRY.
    ASSERT exc IS INITIAL.
    TRY.
        num = NEW c1( )->('x1').
      CATCH cx\_sy\_assign\_illegal\_component.
        exc = 'X'.
    ENDTRY.
    ASSERT exc IS NOT INITIAL.
  ENDMETHOD.
ENDCLASS.

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display\_text(
      |{ NEW utc( )->ts TIMESTAMP = ISO }| ).
  ENDMETHOD.
ENDCLASS.

Executable Example

[Instance Operator NEW on the Left](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_on_the_left_abexa.htm)

Continue
![Example](exa.gif "Example") [Instance Operator NEW on the Left](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_on_the_left_abexa.htm)


### abennew_on_the_left_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) →  [NEW, Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_class.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Instance%20Operator%20NEW%20on%20the%20Left%2C%20ABENNEW_ON_THE_LEFT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Instance Operator NEW on the Left

Constructor expression with NEW on the left side of an expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_new\_on\_the\_left DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS class DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string.
    METHODS constructor.
ENDCLASS.
CLASS frame DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO class.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD constructor.
    frame=>oref = me.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_new\_on\_the\_left IMPLEMENTATION.
  METHOD main.
    NEW class( )->attr = 'foo'.
    out->write( frame=>oref->attr ).
    TRY.
        NEW class( )->('attr') = 'foo'.
        out->write( frame=>oref->attr ).
        NEW class( )->('foo') = 'foo'.
        out->write( frame=>oref->attr ).
      CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Although the reference variable only exists during the statement, the reference to the object is assigned to the reference variable user=>oref in the constructor of the class class, thus preserving the object. The example also shows dynamic specifications and the exception that is raised in case of an invalid attribute.
