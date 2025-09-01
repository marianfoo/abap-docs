  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Reference Variables](javascript:call_link\('abenset_references.htm'\)) → 

Assignment Rules for Reference Variables

The content of a reference variable can only be assigned to another reference variable. At the same time,

-   [data references can only be assigned to data reference variables](javascript:call_link\('abenconversion_references_data.htm'\)) and

-   [object references can only be assigned to object reference variables](javascript:call_link\('abenconversion_references_objects.htm'\))

. No conversion takes place when variables are assigned. For an assignment to take place, the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of the target reference variable must be more general than or match the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of the source reference variable. If the assignment is successful, the target reference variable points to the same object as the source reference variable, meaning that the target reference variable inherits the dynamic type of the source reference variable.

-   [Static Type and Dynamic Type](#abenconversion-references-1--------up-cast-and-down-cast---@ITOC@@ABENCONVERSION_REFERENCES_2)

-   [Up Cast](#abenconversion-references-3--------down-cast---@ITOC@@ABENCONVERSION_REFERENCES_4)

Note

Reference variables can point to [objects](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry") in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") or in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry"). An [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") is used to bind an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") to a program, however references from the program can be made to [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") and vice versa (if these are read or write references). In other cases, an area instance version is closed, which means that no references can point to the internal session from an area instance version. References that point from the internal session to shared objects can be saved, but not dereferenced. Object references and data references are possible within a completed area instance version, although data references are subject to restrictions with respect to the dynamic type.

Static Type and Dynamic Type

Each reference variable has a dynamic type and a static type.

-   The dynamic type is defined at runtime of the program, and is the data type of the data object or the class of the object to which the reference variable points. It determines the components contained in the object.

-   The static type is set with the declaration of the reference variable. In data references, the static type is either a non-generic data type or the predefined generic type data. In object references, the static type is either a class or an interface, so an object reference can also be referred to as a class reference or an interface reference.

The static type of a reference variable is always less specific or the same as the dynamic type.

Note

An initial reference variable contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), which does not point to any objects. This means that it does not have a data type or a class as a dynamic type. The same applies to a non-initial reference variable containing an invalid reference that no longer points to an object.

Example

The object reference variable oref has the static type super\_class. After the object is generated with NEW, its dynamic type is the special class sub\_class - as shown by [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry").

CLASS super\_class DEFINITION.
ENDCLASS.
CLASS sub\_class DEFINITION INHERITING FROM super\_class.
ENDCLASS.
DATA oref TYPE REF TO super\_class.
START-OF-SELECTION.
  oref = NEW sub\_class( ).
  cl\_demo\_output=>display( CAST cl\_abap\_classdescr(
    cl\_abap\_refdescr=>describe\_by\_object\_ref( oref ) )->absolute\_name ).

Up Cast and Down Cast

In an assignment between reference variables, the target variable applies the dynamic type of the source variable. An assignment is possible if the static type of the target variable is less specific or the same as the dynamic type of the source variables.

Up Cast

If the static type of the target variables is less specific or the same as the static type of the source variable, assignment is always possible. The name up cast arises from the fact that the movement within the inheritance space is upwards. Since the target variable can accept more dynamic types in comparison to the source variables, this assignment is also known as a widening cast. An up cast is possible in all ABAP statements in which the content of a data object is assigned to another data object. This includes, for example, assignments with the normal assignment operator ([\=](javascript:call_link\('abapmove_cast.htm'\))), the insertion of rows in internal tables, or passes from actual to formal parameters.

Explicit castings using the [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") [?=](javascript:call_link\('abapmove_cast.htm'\)) are also possible, but not usually necessary. Using the [casting operators](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) for an up cast in combination with [inline declarations](javascript:call_link\('abendata_inline.htm'\)), however, can be a good way of providing a reference variable with a more general type.

Example

See the previous example. The statement iref = NEW class( ) is an up cast, because it is followed by an reference variable of the static type of a superclass that references an object of a subclass.

Down Cast

If the static type of the target variable is more specific than the static type of the source variable, a check must be made at runtime (before the assignment is executed) to see whether it is less specific or the same as the dynamic type of the source variable. The name down cast arises from the fact that the movement in the inheritance space is downwards. Since the target variable can accept fewer dynamic types in comparison to the source variable, this assignment is also known as a narrowing cast. A down cast must always be performed explicitly. The following options are available:

-   Special assignment with the [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") [?=](javascript:call_link\('abapmove_cast.htm'\)).

-   Using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)).

-   Using the addition INTO of the statement [WHEN TYPE](javascript:call_link\('abapwhen_type.htm'\)) in a case distinction with [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) for object reference variables.

If this prerequisite is not met, a handleable exception is raised and the reference variable keeps its original value after the assignment.

Notes

-   For non-initial source variables, the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) or the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) can be used to check whether a down cast can be applied to specific classes or interfaces.

-   The dynamic type of an initial or invalid source variable is undefined. In a down cast, the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry") or an invalid reference that does not point to an object can be assigned to every target variable that can be specified here.

-   When a subclass is instantiated, an associated object reference variable cannot be cast to the subclass until the [instance constructors](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of all superclasses have been executed. When an instance constructor is executed, the dynamic type of the object reference variable is the current superclass.

Example

The following example shows the three ways of performing a down cast for object reference variables.

-   If the casting operator [?=](javascript:call_link\('abapmove_cast.htm'\)) is used, the exception CX\_SY\_MOVE\_CAST\_ERROR is caught if a down cast is not possible.

-   If the casting operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) is used, the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) is used in advance to check whether the down cast is possible.

-   The use of the addition INTO of the statement [WHEN TYPE](javascript:call_link\('abapwhen_type.htm'\)) in a case distinction with [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) combines the check and the down cast.

In each case, oref is assigned to the class reference variable that is reached first. Of course, a IS INSTANCE OF check would also be possible before the use of the casting operator ?=.

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
DATA(o) = cl\_demo\_output=>new( ).
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
  DATA(cref23) = CAST c3( oref ).
  o->write( cref23->a3 ).
ELSEIF oref IS INSTANCE OF c2.
  DATA(cref22) = CAST c2( oref ).
  o->write( cref22->a2 ).
ELSEIF oref IS INSTANCE OF c1.
  DATA(cref21) = CAST c1( oref ).
  o->write( cref21->a1 ).
ENDIF.
oref = NEW c3( ).
CASE TYPE OF oref.
  WHEN TYPE c3 INTO DATA(cref33).
    o->write( cref33->a3 ).
  WHEN TYPE c2 INTO DATA(cref32).
    o->write( cref32->a2 ).
  WHEN TYPE c1 INTO DATA(cref31).
    o->write( cref31->a1 ).
ENDCASE.
o->display( ).

Continue
[Assignments Between Data Reference Variables](javascript:call_link\('abenconversion_references_data.htm'\))
[Assignments Between Object Reference Variables](javascript:call_link\('abenconversion_references_objects.htm'\))