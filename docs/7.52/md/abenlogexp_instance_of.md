  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) → 

rel\_exp - IS INSTANCE OF

Syntax

... oref IS *\[*NOT*\]* INSTANCE OF class*|*intf

Effect

The predicate expression IS INSTANCE OF checks the following:

-   Is [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") more specific or equal to a comparison type for a non-initial [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") oref?

-   Is the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") more specific or equal to a comparison type for an initial [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") oref?

The comparison type must be an [object type](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry"), meaning a class specified using class or an interface specified using intf that can be used in this place. oref expects an object reference variable with the static type of a class or of an interface. oref is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

The expression is true in the following cases or false if NOT is used:

-   The object reference variable oref is not initial and points to an object whose class is one of the following:

-   The class specified using class or one of its subclasses

-   A class that implements the interfaces specified using intf

-   The object reference variable oref is initial and the static type of oref is one of the following:

-   The same class or subclass of class

-   Contains the interface intf as a component

If a field symbol or a formal parameter is specified for oref, its type can be fully generic, which means it can be typed with [any](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) and it must be an object reference variable at runtime. If a generically typed field symbol or a generically typed formal parameter is specified for oref, the static type of the object reference variable is used that is represented by the field symbol or formal parameter at runtime.

A syntax error occurs if it is known statically that the result of the expression is false.

Notes

-   The predicate expression IS INSTANCE OF checks whether a cast from oref to an object reference variable with the static type class or intf is possible.

-   If IS INSTANCE OF is true for a non-initial object reference variable oref, a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") is possible. This means that the predicate expression IS INSTANCE OF can be used as condition for a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") instead of the associated exception handler.

-   If a predicate expression IS INSTANCE OF is true for an initial object reference variable oref, an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") is possible. Checks of this type are generally suitable for generically typed field symbols or formal parameters. In this way, it is possible to detect at runtime whether the field symbol or the formal parameter represents an object reference variable of a specific static type.

-   If the static type of oref is an interface and a class class is specified as the comparison type, the result of the expression is always false if the reference variable is initial.

-   When a subclass is instantiated, the predicate expression IS INSTANCE OF is false when the associated object reference to the subclass is checked until the [instance constructors](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of all superclasses have been executed. When an instance constructor of a superclass is executed, IS INSTANCE OF is true for the current superclass.

-   The special case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) makes it possible to abbreviate consecutive predicate expressions IS INSTANCE OF.

Example

All the following predicate expressions are true, since the dynamic type of the object reference variable oref is more specific or equal to the specified object type.

INTERFACE intf.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
DATA oref TYPE REF TO object.
oref = NEW c1( ).
ASSERT oref IS INSTANCE OF c1.
ASSERT oref IS INSTANCE OF intf.
oref = NEW c2( ).
ASSERT oref IS INSTANCE OF c2.
ASSERT oref IS INSTANCE OF c1.
ASSERT oref IS INSTANCE OF intf.

Example

The following example shows how the predicate expression IS INSTANCE OF can be used to check the feasibility of a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry"). This makes the exception handler (also shown) superfluous.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2.
ref1 = NEW c2( ).
IF ref1 IS INSTANCE OF c2.
  ref2 ?= ref1.
ENDIF.
TRY.
    ref2 ?= ref1.
  CATCH cx\_sy\_move\_cast\_error.
ENDTRY.

Executable Example

[Predicate Expression IS INSTANCE OF](javascript:call_link\('abeninstance_of_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Predicate Expression IS INSTANCE OF](javascript:call_link\('abeninstance_of_abexa.htm'\))