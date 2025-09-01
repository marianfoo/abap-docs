  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%3D%2C%20%3F%3D%2C%20Upcast%20and%20Downcast%2C%20ABAPMOVE_CAST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

\=, ?=, Upcast and Downcast

Syntax

destination\_ref =*|*?= source\_ref.

Effect

Assignment between two reference variables. The reference in source\_ref is assigned destination\_ref. After a successful assignment, destination\_ref points to the same object as source\_ref ([reference semantics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_semantics_glosry.htm "Glossary Entry")). The assignment of reference variables is a special form of [assignments of data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove.htm), whereby two assignment operators are available for assignments between reference variables and are used in accordance with the [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm):

-   In assignments between reference variables, the general [assignment operator \=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm) can only be used for [upcasts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenup_cast_glosry.htm "Glossary Entry") in which the static type of source\_ref is more specific than or the same as the static type of destination\_ref.
-   The special [casting operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= can only be used for assignments between reference variables. If the static type of source\_ref is more general than the static type of destination\_ref, ?= must be used to produce a [downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm "Glossary Entry"). If this is known statically, it is checked by the syntax check, otherwise it is checked at runtime. The actual downcast, that is, the check to see whether assignments are possible in accordance with the [assignment rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm) for reference variables, only takes place at runtime. Then, if the static type of destination\_ref is not more general or is the same as the dynamic type of source\_ref, a catchable exception is raised and the target variable keeps its original value.

The same applies to the right side and left side as when [assigning data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove.htm), with the following restrictions:

-   The data types of the source and target are [reference types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_type_glosry.htm "Glossary Entry"), which means that [functional method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry"), and [constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") and [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry") can be specified on the right side whose return value has a reference type. [Built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") and [calculation expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry") do not return any reference variables and are not possible here.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm) is possible only on the left side of \=, and not on the left side of ?=. The static types of the reference variable source\_ref is used, which must be known statically.

Hints

-   The casting operator ?= can always be specified, even for upcasts. This is, however, not usually necessary.
-   If it is possible to know statically that an assignment is not possible, neither \= nor ?= can be used. This is the case, for example, when the static types of source variables and target variables are classes from different paths of the inheritance tree.
-   The [null reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_reference_glosry.htm "Glossary Entry") of an initial reference variable can be assigned to every target variable in a downcast that can be specified here. The same applies to a non-initial invalid reference that no longer points to an object.
-   For non-initial reference variables, the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm) or the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm) can be used to check whether a downcast is possible on specific classes or interfaces.
-   In addition to ?=, the [casting operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm) also enables downcasts in operand positions, which helps to reduce helper variables.
-   Downcasts are also possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm).
-   The casting operator ?= cannot be used in [multiple assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_multiples.htm).
-   An obsolete form of downcast is the statement [MOVE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_obs.htm) with the addition [?TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_obs.htm).

Example

The first two assignments in the following source code section are upcasts:

-   The instance operator NEW creates a result with the static and dynamic type c2, which can be assigned to the more general reference variable oref1.
-   Any reference variable can be assigned to the reference variable oref with the most general static type object.

The next two assignments are downcasts:

-   It is only possible to check at runtime whether the general reference variable oref points to an object that can also point to oref2. This is the case in the example.
-   The downcast of oref2 to oref3, however, fails at runtime and raises the caught exception.

CLASS c1 DEFINITION INHERITING FROM object.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA oref  TYPE REF TO object.
    DATA oref1 TYPE REF TO c1.
    DATA oref2 TYPE REF TO c2.
    DATA oref3 TYPE REF TO c3.
    oref1 = NEW c2( ).
    oref = oref1.
    IF oref IS INSTANCE OF c2.
      oref2 ?= oref.
    ENDIF.
    TRY.
        oref3 ?= oref2.
      CATCH cx\_sy\_move\_cast\_error.
        ...
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_MOVE\_CAST\_ERROR

-   Cause: Type conflict in downcast
    Runtime error: MOVE\_CAST\_ERROR
-   Cause: Source variable or target variable is not a reference variable
    Runtime error: MOVE\_CAST\_REF\_ONLY
-   Cause: Dynamic type conflict in assignment of references
    Runtime error: MOVE\_CAST\_ERROR\_DYN