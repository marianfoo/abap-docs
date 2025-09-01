  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Reference Variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_references.htm) → 

\=, ?= - Up Cast and Down Cast

Syntax

destination\_ref =*|*?= source\_ref.

Effect

Assignment between two reference variables. The reference in source\_ref is assigned destination\_ref. If the assignment is successful, destination\_ref points to the same object as source\_ref ([reference semantics](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_semantics_glosry.htm "Glossary Entry")). The assignment of reference variables is a special form of [assignments of data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm); two assignment operators are available for assignments between reference variables and these operators are used in accordance with the [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_references.htm):

-   In assignments between reference variables, the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) can only be used for [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry")s in which the static type of source\_ref is more specific than or the same as the static type of destination\_ref.
    
-   The special [casting operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= can only be used for assignments between reference variables. If the static type of source\_ref is more general than the static type of destination\_ref, ?= must be used to produce a [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry"). If this is known statically, it is checked by the syntax check; if not, it is checked at runtime. The actual down cast (that is, the check to see whether assignments are possible in accordance with the [assignment rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_references.htm) for reference variables) never takes place until runtime. If, then, the static type of destination\_ref is not more general or is the same as the dynamic type of source\_ref, a handleable exception is raised and the target variable keeps its original value.
    

The same applies to the right side and left side as when [assigning data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm), with the following restrictions:

-   The data types of the source and target are [reference types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_type_glosry.htm "Glossary Entry"), which means that [functional method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") and [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") can be specified on the right side whose return value has a reference type. [Built-in functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry") and [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") do not return any reference variables and are not possible here.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) is possible only on the left side of \=, and not on the left side of ?=. The static types of the reference variable source\_ref is used, which must be known statically.
    

Notes

-   The casting operator ?= can always be specified, even for up casts. This is, however, not usually necessary.
    
-   If it is possible to know statically that assignments are not possible, neither \= nor ?= can be used. This is the case, for example, when the static types of source variables and target variables come from different paths of the inheritance tree.
    
-   The [null reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_reference_glosry.htm "Glossary Entry") of an initial reference variable can be assigned to every target variable in a down cast that can be specified here. The same applies to a non-initial invalid reference that no longer points to an object.
    
-   For non-initial reference variables, the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_instance_of.htm) or the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase_type.htm) can be used to check whether a down cast can be applied to specific classes or interfaces.
    
-   Alongside ?=, the [casting operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm) also enables down casts to operand positions, which saves on helper variables.
    
-   Down casts are also possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase_type.htm).
    
-   The casting operator ?= cannot be used in [multiple assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_multiples.htm).
    
-   One obsolete form of down cast is the statement [MOVE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_obs.htm) with the addition [?TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_obs.htm).
    

Example

The first two assignments in the following source code section are up casts:

-   The instance operator NEW creates a result with the static and dynamic type c2, which can be assigned to the more general reference variable oref1.
    
-   Any reference variable can be assigned to the reference variable oref with the most general static type object.
    

The next two assignments are down casts:

-   It is not possible to test whether the general reference variable oref points to an object that can also point to oref2 until runtime. This is the case in the example.
    
-   The down cast of oref2 to oref3, however, fails at runtime and raises the caught exception.
    

CLASS c1 DEFINITION INHERITING FROM object.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
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

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_MOVE\_CAST\_ERROR

-   Cause: Type conflict in down cast
    Runtime error: MOVE\_CAST\_ERROR
    
-   Cause: Source variable or target variable is not a reference variable
    Runtime error: MOVE\_CAST\_REF\_ONLY
    
-   Cause: Dynamic type conflict in assignment of references
    Runtime error: MOVE\_CAST\_ERROR\_DYN