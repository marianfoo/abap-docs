---
title: "CAST - Casting Operator"
description: |
  Syntax ... CAST type( let_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) dobj ) ... Effect A constructor expression(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm) with the casting operator CAST performs a down ca
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm"
abapFile: "abenconstructor_expression_cast.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenconstructor", "expression", "cast"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Reference Variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_references.htm) → 

CAST - Casting Operator

Syntax

... CAST type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* dobj ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm) with the casting operator CAST performs a [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry") or an [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") for the argument dobj and creates a reference variable of the static type type as a result. type can be specified as:

-   any non-generic data type dtype or the fully generic data type data

-   any [object type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_type_glosry.htm "Glossary Entry") (class or interface) including the fully generic object type object.

-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperand_type_glosry.htm "Glossary Entry"). Can be specified only if the data type required in an operand position is unique and fully identifiable.

The parentheses must contain precisely one unnamed argument dobj. If a data type is specified, dobj must be a data reference variable. If an object type is used, dobj must be an object reference variable. dobj is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Casts of dobj to the specified type are performed in accordance with the same rules as apply to the [casting operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") for assignments, [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm). If the specified type type is more specific than the static type of dobj, it is a [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry"). If type is more general than the static type of dobj, it is an explicit [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry").

-   Like a data reference variable of type dtype, a constructor expression CAST dtype( ... ) can be continued using a [dereferencing operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") \->\*; if a structured type is used, it can be specified using an [object component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \->.

-   Like an object reference variable of the type class, a constructor expression CAST class( ... ) can be specified using an [object component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_component_select_glosry.htm "Glossary Entry") \-> and in [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expression_positions.htm) and [functional positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_positions.htm).Furthermore, it is possible to introduce [standalone method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm) including [chained method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_method_call_glosry.htm "Glossary Entry").

A single expression not followed by the object component selector \-> can be specified as a standalone statement. This makes it possible to test the feasibility of a down cast by catching the associated exception CX\_SY\_MOVE\_CAST\_ERROR.

If a single expression points to one data object or component of a data object using precisely one following object component selector, \->,

-   it can be specified as a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in a [result position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_position_glosry.htm "Glossary Entry"). The type of the result must be convertible to the data type type with the following restriction: If the result is the result of a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry"), type must be byte-like or character-like with the type c or string.

-   a [specified offset/length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") [+off(len)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) can be appended (if the data type is suitable), except if the chaining uses the statement ASSIGN as a [memory area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm).

An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) can be specified before the argument to define local helper fields.

Notes

-   The casting operator CAST is suitable for avoiding the declaration of helper variables needed only for down casts.

-   Explicit up casts with the casting operator CAST are suitable for declaring a more general type of a declared reference variable in [inline declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm).

-   No empty parentheses can be specified after CAST.

-   Unlike [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm), CAST works with an existing reference variable, which means that the result does not need to be saved to persist the referenced object.

-   The predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_instance_of.htm) or the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase_type.htm) can be used to check whether a down cast can be applied to specific classes or interfaces.

-   Down casts are also possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase_type.htm).

-   The constructor operator [CONV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm) is related to CAST, but performs a [conversion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_glosry.htm "Glossary Entry") instead of a [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry").

Example

The source code section below shows two equally valid down casts with the two possible [casting operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= and CAST. Before the actual cast, its feasibility is checked using the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_instance_of.htm).

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
DATA: oref1 TYPE REF TO c1,
      oref2 TYPE REF TO c2.
oref1 = new c2( ).
IF oref1 IS INSTANCE OF c2.
  oref2 ?= oref1.
  oref2 =  CAST #( oref1 ).
ENDIF.

Example

Uses dereferencing operator and component selector in CAST with data types. The constructor expressions can be used as [writable expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") on the right and left of assignments with the [assignment operator\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm).

TYPES: BEGIN OF t\_struc,
        col1 TYPE i,
        col2 TYPE i,
       END OF t\_struc.
DATA dref TYPE REF TO data.
DATA struc TYPE t\_struc.
dref = NEW t\_struc( ).
struc      = CAST t\_struc( dref )->\*.
struc-col1 = CAST t\_struc( dref )->col1.
struc-col2 = CAST t\_struc( dref )->col2.
CAST t\_struc( dref )->\*    = struc.
CAST t\_struc( dref )->col1 = struc-col1.
CAST t\_struc( dref )->col2 = struc-col2.

Example

[RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtts_glosry.htm "Glossary Entry") often requires a helper variable to perform a down cast of a type description object to a specialized class. These examples show how helper variables can be omitted by using the operator CAST.

DATA(attributes) =
  CAST cl\_abap\_classdescr(
       cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
       )->attributes.
DATA(components) =
  CAST cl\_abap\_structdescr(
       cl\_abap\_typedescr=>describe\_by\_name( 'T100' )
       )->components.
DATA(no\_of\_components) =
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
    CLASS-METHODS factory RETURNING value(ref) TYPE REF TO cl.
    ...
ENDCLASS.
CLASS cl IMPLEMENTATION.
  METHOD factory.
    ref = NEW #( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(iref) = CAST if( cl=>factory( ) ).