---
title: "CAST, Casting Operator"
description: |
  Syntax ... CAST type( let_exp(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) dobj ) ... Effect A constructor expression(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) with the casting operator CAST performs a downcas
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_cast.htm"
abapFile: "abenconstructor_expression_cast.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenconstructor", "expression", "cast"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CAST%2C%20Casting%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_CAST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CAST, Casting Operator

Syntax

... CAST type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)*\]* dobj ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) with the casting operator CAST performs a [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") or an [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") for the argument dobj and creates a reference variable of the static type type as a result. type can be specified as:

-   any non-generic data type dtype or the completely generic data type data
-   any [object type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_type_glosry.htm "Glossary Entry") (class or interface) including the completely generic object type object.
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_type_glosry.htm "Glossary Entry"). This specification is only possible if the data type required in an operand position is unique and completely identifiable at compile time.

The parentheses must contain exactly one argument dobj:

-   If a data type is specified, dobj must be a data reference variable dref.
-   If an object type is used, dobj must be an object reference variable oref.

dobj is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

The casting of dobj to the specified type takes place in accordance with the same rules as for the [casting operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_operator_glosry.htm "Glossary Entry") [?=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_cast.htm). If the specified type type is more specific than the static type of dobj, it is a [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry"). If type is more general than the static type of dobj, it is an explicit [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry").

In [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expression_positions.htm), [functional positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_positions.htm) and [result positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresult_position_glosry.htm "Glossary Entry"), a constructor expression CAST dtype( ... ) can be placed in front of \-> as follows:

-   Like a data reference variable of static type dtype, the constructor expression can be followed by the [dereferencing operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendereferencing_operat_glosry.htm "Glossary Entry"):
    
    ... CAST dtype( ... dref )->\*
    
    The result of this expression is the anonymous data object referenced by dref. If dref is initial, the uncatchable exception DATREF\_NOT\_ASSIGNED is raised.
    
-   Like a data reference variable of a structured static type dtype, the constructor expression can be followed by the [object component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \-> pointing to a component of the structure:
    
    ... CAST dtype( ... dref )->comp*|*('comp\_name') ...
    
    The component can be specified statically as comp or dynamically as content of a character-like data object comp\_name. If a dynamically specified component is not found, an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT is raised. If dref is initial, the uncatchable exception DATREF\_NOT\_ASSIGNED is raised for static component specification and an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT is raised for dynamic component specification.
    
-   Like an object reference variable of a static class type class or interface type intf, the constructor expression can be followed by the [object component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_component_select_glosry.htm "Glossary Entry"), pointing to:
    -   An attribute of the class or interface:
        
        ... CAST class*|*intf( ... oref )->attr*|*('attr\_name') ...
        
        The attribute can be specified statically as attr or dynamically as content of a character-like data object attr\_name. If a dynamically specified component is not found, an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT is raised. If oref is initial, the uncatchable exception OBJECTS\_OBJREF\_NOT\_ASSIGNED is raised for static component specification and an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT is raised for dynamic component specification.
        
    -   A method of the class or interface:
        
        ... CAST class*|*intf( ... oref )->meth( ... ) ...
        
        The method can be specified only statically. Both [standalone method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm) and [functional method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_functional.htm) are possible. Such a CAST expression can also introduce [chained method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchained_method_call_glosry.htm "Glossary Entry"). If oref is initial, the uncatchable exception OBJECTS\_OBJREF\_NOT\_ASSIGNED is raised.
        

A single CAST expression not followed by the object component selector \-> can be specified as a standalone statement. This makes it possible to test the feasibility of a downcast by catching the associated exception CX\_SY\_MOVE\_CAST\_ERROR.

If a single expression points to a data object or a component of a data object using exactly one following object component selector, \->:

-   It can be specified as a [writable expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in a [result position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresult_position_glosry.htm "Glossary Entry"). The type of the result must be convertible to the data type type with the restriction: If the result is the result of a [bit expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbit_expression_glosry.htm "Glossary Entry"), type must be byte-like or character-like with the type c or string.
-   An [offset/length specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") [+off(len)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length.htm) can be appended if the data type is suitable, unless the chaining is used as a [memory area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm) of the statement ASSIGN.

An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) can be specified in front of the argument to define local helper fields.

Hints

-   The casting operator CAST is suitable for avoiding the declaration of helper variables that are only necessary for downcasts.
-   Explicit upcasts with the casting operator CAST are suitable for determining a more general type of a declared reference variable in [inline declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declarations.htm).
-   No empty parentheses can be specified after CAST.
-   Unlike [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm), CAST works with an existing reference variable, which means that the result does not need to be saved to persist the referenced object.
-   The predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_instance_of.htm) or the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm) can be used to check whether a cast is possible to specific classes or interfaces.
-   Downcasts are also possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm).
-   The constructor operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) is related to CAST but performs a [conversion](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_glosry.htm "Glossary Entry") instead of a [casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry").

Example

The source code section below shows two equally valid downcasts with the two possible [casting operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= and CAST. Before the actual cast, its feasibility is checked using the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_instance_of.htm).

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: oref1 TYPE REF TO c1,
          oref2 TYPE REF TO c2.
    oref1 = NEW c2( ).
    IF oref1 IS INSTANCE OF c2.
      oref2 ?= oref1.
      oref2 =  CAST #( oref1 ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Example

Use of the dereferencing operator and component selector in CAST with data types. The constructor expressions can be used as [writable expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry") on the right and left side of assignments with the [assignment operator \=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm).

TYPES: BEGIN OF t\_struc,
        col1 TYPE i,
        col2 TYPE i,
       END OF t\_struc.
DATA dref  TYPE REF TO data.
DATA struc TYPE t\_struc.
dref = NEW t\_struc( ).
struc      = CAST t\_struc( dref )->\*.
struc-col1 = CAST t\_struc( dref )->col1.
struc-col2 = CAST t\_struc( dref )->col2.
CAST t\_struc( dref )->\*    = struc.
CAST t\_struc( dref )->col1 = struc-col1.
CAST t\_struc( dref )->col2 = struc-col2.

Example

Introducing a method chaining with a CAST operator.

INTERFACE intf.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
    METHODS:
      meth1 RETURNING VALUE(r) TYPE REF TO cls,
      meth2.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth1.
    r = me.
  ENDMETHOD.
  METHOD meth2.
    cl\_demo\_output=>display( 'meth2' ).
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA iref TYPE REF TO intf.
    iref = NEW cls( ).
    CAST cls( iref )->meth1( )->meth2( ).
  ENDMETHOD.
ENDCLASS.

Example

[RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") often requires a helper variable to perform a downcast of a type description object to a specialized class. These examples show how helper variables can be reduced by using the operator CAST.

FINAL(attributes) =
  CAST cl\_abap\_classdescr(
       cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
       )->attributes.
FINAL(components) =
  CAST cl\_abap\_structdescr(
       cl\_abap\_typedescr=>describe\_by\_name( 'T100' )
       )->components.
FINAL(no\_of\_components) =
  lines( CAST cl\_abap\_structdescr(
              cl\_abap\_typedescr=>describe\_by\_name( 'SYST' )
              )->get\_components( ) ).

Example

The factory method of the following class returns a reference variable of the type of the class itself. To use interface variables to access the components declared in the interface if, as recommended, the variable iref, declared inline, is cast to the type of the interface.

INTERFACE if.
  ...
ENDINTERFACE.
CLASS cl DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES if.
    CLASS-METHODS factory RETURNING VALUE(ref) TYPE REF TO cl.
    ...
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cl IMPLEMENTATION.
  METHOD factory.
    ref = NEW #( ).
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    FINAL(iref) = CAST if( cl=>factory( ) ).
  ENDMETHOD.
ENDCLASS.

Example

The following example shows static and dynamic specifications of components and how the system reacts to wrong specifications or to initial reference variables.

TYPES:
  BEGIN OF struc,
    col TYPE i,
  END OF struc.
INTERFACE intf.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
    DATA attr TYPE string VALUE 'foo'.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA iref TYPE REF TO intf.
    dref = NEW struc( col = 111 ).
    iref = NEW cls( ).
    DATA(num) = CAST struc( dref )->col.
    ASSERT num = 111.
    DATA(txt) = CAST cls( iref )->attr.
    ASSERT txt = 'foo'.
    CLEAR num.
    num = CAST struc( dref )->('col').
    ASSERT num = 111.
    CLEAR txt.
    txt = CAST cls( iref )->('attr').
    ASSERT txt = 'foo'.
    DATA(exc) = 0.
    TRY.
        num = CAST struc( dref )->('foo').
      CATCH cx\_sy\_assign\_illegal\_component.
        exc += 1.
    ENDTRY.
    TRY.
        txt = CAST cls( iref )->('foo').
      CATCH cx\_sy\_assign\_illegal\_component.
        exc += 1.
    ENDTRY.
    CLEAR dref.
    TRY.
        num = CAST struc( dref )->('col').
      CATCH cx\_sy\_assign\_illegal\_component.
        exc += 1.
    ENDTRY.
    CLEAR iref.
    TRY.
        txt = CAST cls( iref )->('attr').
      CATCH cx\_sy\_assign\_illegal\_component.
        exc += 1.
    ENDTRY.
    ASSERT exc = 4.
  ENDMETHOD.
ENDCLASS.
"Runtime error DATREF\_NOT\_ASSIGNED
"num = CAST struc( dref )->col.
"Runtime error OBJECTS\_OBJREF\_NOT\_ASSIGNED
"txt = CAST cls( iref )->attr.