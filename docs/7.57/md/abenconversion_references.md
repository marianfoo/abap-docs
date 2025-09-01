---
title: "Assignment Rules for Reference Variables"
description: |
  The content of a reference variable can only be assigned to another reference variable. At the same time, -   data references can only be assigned to data reference variables(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references_data.htm) and -   object references c
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references.htm"
abapFile: "abenconversion_references.htm"
keywords: ["select", "insert", "do", "while", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abenconversion", "references"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_references.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignment Rules for Reference Variables, ABENCONVERSION_REFERENCES, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignment Rules for Reference Variables

The content of a reference variable can only be assigned to another reference variable. At the same time,

-   [data references can only be assigned to data reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references_data.htm) and
-   [object references can only be assigned to object reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references_objects.htm)

No conversion takes place when variables are assigned. For an assignment to take place, the [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the target reference variable must be more general than or the same as the [dynamic type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_type_glosry.htm "Glossary Entry") of the source reference variable. After a successful assignment, the target reference variable points to the same object as the source reference variable, that is, the target reference variable inherits the dynamic type of the source reference variable.

-   [Static Type and Dynamic Type](#abenconversion-references-1-------upcast-and-downcast---@ITOC@@ABENCONVERSION_REFERENCES_2)
    -   [Upcast](#abenconversion-references-3-----------downcast---@ITOC@@ABENCONVERSION_REFERENCES_4)

Hint

Reference variables can point to [objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_glosry.htm "Glossary Entry") in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") or in the [shared objects memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). While an [area handle](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_handle_glosry.htm "Glossary Entry") is used to bind an [area instance version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") to a program, however, references from the program can be made to [shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_glosry.htm "Glossary Entry") and vice versa (if it is a read or write access). In other cases, an area instance version is closed, which means that no references can point to the internal session from an area instance version. References that point from the internal session to shared objects can be saved, but not dereferenced. Object references and data references are possible within a completed area instance version, although data references are subject to restrictions with respect to the dynamic type.

Static Type and Dynamic Type   

Each reference variable has a dynamic type and a static type.

-   The dynamic type is defined at runtime of the program, and is the data type of the data object or the class of the object to which the reference variable points. It determines the components the object contains.
-   The static type is determined in the declaration of the reference variable. In data references, the static type is either a non-generic data type or the predefined generic type data. In object references, the static type is either a class or an interface, so an object reference can also be referred to as a class reference or an interface reference.

The static type of a reference variable is always less specific or the same as the dynamic type. This basic rule determines all assignments between reference variables.

Hint

An initial reference variable contains the [null reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_reference_glosry.htm "Glossary Entry"), which does not point to any objects. This means that it does not have a data type or a class as a dynamic type. The same applies to a non-initial reference variable that contains an invalid reference that no longer points to an object.

Example

The object reference variable oref has the static type super\_class. After the object is generated with NEW, its dynamic type is the special class sub\_class - as shown by [RTTI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").

CLASS super\_class DEFINITION.
ENDCLASS.
CLASS sub\_class DEFINITION INHERITING FROM super\_class.
ENDCLASS.
DATA oref TYPE REF TO super\_class.
START-OF-SELECTION.
  oref = NEW sub\_class( ).
  cl\_demo\_output=>display( CAST cl\_abap\_classdescr(
    cl\_abap\_refdescr=>describe\_by\_object\_ref( oref ) )->absolute\_name ).

Upcast and Downcast   

In an assignment between reference variables, the target variable inherits the dynamic type of the source variable. An assignment is possible if the static type of the target variable is less specific or the same as the dynamic type of the source variable.

Upcast   

If the static type of the target variables is less specific or the same as the static type of the source variable, an assignment is always possible. The name upcast comes from the fact that the movement within the inheritance tree is upwards. Since the target variable can have more dynamic types in comparison to the source variables, this assignment is also referred to as a widening cast. An upcast is possible in all ABAP statements in which the content of a data object is assigned to another data object. This includes, for example, assignments with the regular assignment operator ([\=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm)), the insertion of lines in internal tables, or passes from actual to formal parameters.

Explicit castings using the [casting operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_operator_glosry.htm "Glossary Entry") [?=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm) are also possible, but not usually necessary. Using the [casting operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm) for an upcast in combination with [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declarations.htm), however, can be a good way of providing a reference variable with a more general type.

Example

See the previous example. The statement iref = NEW class( ) is an upcast, because it is followed by an reference variable of the static type of a superclass that points to an object of a subclass.

Downcast   

If the static type of the target variable is more specific than the static type of the source variable, a check must be made at runtime, before the assignment is executed, whether it is less specific or the same as the dynamic type of the source variable. The name downcast comes from the fact that the movement in the inheritance space is downwards. Since the target variable can accept fewer dynamic types in comparison to the source variable, this assignment is also referred to as a narrowing cast. A downcast must always be performed explicitly. The following options are available:

-   Special assignment with the [casting operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_operator_glosry.htm "Glossary Entry") [?=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm).
-   Use of a [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the [casting operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm).
-   Use of the addition INTO of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhen_type.htm) in a case distinction with [CASE TYPE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type.htm) for object reference variables.

If this prerequisite is not met, a catchable exception is raised, and the reference variable keeps its original value during the assignment.

Hints

-   For non-initial source variables, the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) or the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type.htm) can be used to check whether a downcast is possible in specific classes or interfaces.
-   The dynamic type of an initial or invalid source variable is undefined. In a downcast, the [null reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_reference_glosry.htm "Glossary Entry") or an invalid reference that does not point to an object can be assigned to every target variable that can be specified here.
-   When a subclass is instantiated, an associated object reference variable cannot be cast to the subclass until the [instance constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of all superclasses have been executed. When an instance constructor is executed, the dynamic type of the object reference variable is the current superclass.

Example

The following example shows the three ways of performing a downcast for object reference variables.

-   If the casting operator [?=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm) is used, the exception CX\_SY\_MOVE\_CAST\_ERROR is caught if a downcast is not possible.
-   If the casting operator [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm) is used, the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) is used in advance to check whether the downcast is possible.
-   The use of the addition INTO of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhen_type.htm) in a case distinction with [CASE TYPE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type.htm) combines the check and the downcast.

In each of the three cases, oref is assigned to the class reference variable that is reached first. A check with IS INSTANCE OF would of course also be possible before the use of the casting operator ?=.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA a1 TYPE string VALUE \`C1\`.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    DATA a2 TYPE string VALUE \`C2\`.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
  PUBLIC SECTION.
    DATA a3 TYPE string VALUE \`C3\`.
ENDCLASS.
FINAL(o) = cl\_demo\_output=>new( ).
DATA oref TYPE REF TO object.
oref = NEW c1( ).
DATA:
  cref11 TYPE REF TO c1,
  cref12 TYPE REF TO c2,
  cref13 TYPE REF TO c3.
TRY.
    cref13 ?= oref.
    o->write( cref13->a3 ).
  CATCH cx\_sy\_move\_cast\_error.
    TRY.
        cref12 ?= oref.
        o->write( cref12->a2 ).
      CATCH cx\_sy\_move\_cast\_error.
        TRY.
            cref11 ?= oref.
            o->write( cref11->a1 ).
          CATCH cx\_sy\_move\_cast\_error.
        ENDTRY.
    ENDTRY.
ENDTRY.
oref = NEW c2( ).
IF oref IS INSTANCE OF c3.
  FINAL(cref23) = CAST c3( oref ).
  o->write( cref23->a3 ).
ELSEIF oref IS INSTANCE OF c2.
  FINAL(cref22) = CAST c2( oref ).
  o->write( cref22->a2 ).
ELSEIF oref IS INSTANCE OF c1.
  FINAL(cref21) = CAST c1( oref ).
  o->write( cref21->a1 ).
ENDIF.
oref = NEW c3( ).
CASE TYPE OF oref.
  WHEN TYPE c3 INTO FINAL(cref33).
    o->write( cref33->a3 ).
  WHEN TYPE c2 INTO FINAL(cref32).
    o->write( cref32->a2 ).
  WHEN TYPE c1 INTO FINAL(cref31).
    o->write( cref31->a1 ).
ENDCASE.
o->display( ).

Continue
[Assignments Between Data Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references_data.htm)
[Assignments Between Object Reference Variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_references_objects.htm)