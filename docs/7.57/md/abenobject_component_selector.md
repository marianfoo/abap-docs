  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_names.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Object Component Selector, ABENOBJECT_COMPONENT_SELECTOR, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Object Component Selector

-   [Static Target](#@@ITOC@@ABENOBJECT_COMPONENT_SELECTOR_1)
-   [Dynamic Target](#@@ITOC@@ABENOBJECT_COMPONENT_SELECTOR_2)

Static Target   

A statically specified component comp of an object is accessed using the following name:

ref->comp

In this case, the character \-> is the object component selector. A reference variable ref must be specified as follows to the left of the object component selector:

-   Name of a reference variable that can itself be a composite.
-   [Functional method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a reference variable as a result.
-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") whose result is a reference variable.
-   [Constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the [instance operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) or the [casting operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm).

The name comp of the component must be to the right of the object component selector. The object component selector dereferences the reference variable ref and makes the components of the referenced object accessible.

-   If ref is an object reference variable, the components comp of the object - attributes and methods - to which the object reference variable points are addressed using the object component selector.
-   If ref is a data reference variable that is typed as a structure, the components comp of the structure to which the data reference variable points are addressed using the object component selector.

If an attempt is made to access a data object (access to an [instance attribute](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_attribute_glosry.htm "Glossary Entry") by an [object reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") or access to a structure component by a [data reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_reference_variable_glosry.htm "Glossary Entry")) using a reference variable that contains the [null reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_reference_glosry.htm "Glossary Entry"), an uncatchable exception OBJECTS\_OBJREF\_NOT\_ASSIGNED or DATREF\_NOT\_ASSIGNED is raised. If an attempt is made to call an [instance method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_method_glosry.htm "Glossary Entry") with a reference variable that contains the null reference, a catchable exception of the class CX\_SY\_REF\_IS\_INITIAL is raised.

Hint

If ref is a data reference variable, the character \* can be specified after the object component selector \->, which creates the general [dereferencing operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendereferencing_operator.htm) \->\*. The expression ref->\* labels the entire data object to which the data reference variable points. The dereferencing operator is the only way to dereference data references. The dereferencing operator cannot be specified after object reference variables. The instance components of classes can only be accessed using the expression ref->comp.

Example

Accesses the public attribute a1 of a class c1 using an object reference variable oref.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA a1 TYPE string READ-ONLY.
ENDCLASS.
...
DATA oref TYPE REF TO c1.
... oref->a1 ...

Example

The data reference variable dref is typed as a structure and the component carrid of the referenced structure is accessed using the object component selector. The expression dref->carrid has the same meaning as the chaining dref->\*-carrid.

DATA dref TYPE REF TO sflight.
...
... dref->carrid ...

Dynamic Target   

A component of an object can be specified dynamically with the following syntax:

... *{* dref->(comp\_name) *}*
  *|* *{* cref->(attr\_name) *}*
  *|* *{* iref->(attr\_name) *}* ...

The syntax and meaning is the same as for [dynamic components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm) and [dynamic access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_access.htm) in the statement ASSIGN and the result of the expressions behave like an accordingly assigned field symbol of type ANY.

If the component is not found, an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT occurs. This exception is also raised, if the reference variable is initial.

Example

Dynamic specification of a structure component and an interface attribute of an object.

INTERFACE intf.
  CONSTANTS attr TYPE string VALUE \`YYY\`.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
FINAL(dref) = NEW scarr( carrid = 'XXX' ).
DATA(comp\_name) = \`carrid\`.
cl\_demo\_output=>write( dref->(comp\_name) ).
DATA iref TYPE REF TO intf.
FINAL(cref) = NEW cls( ).
iref = cref.
comp\_name = \`attr\`.
cl\_demo\_output=>write( iref->(comp\_name) ).
comp\_name = \`intf~\` && comp\_name.
cl\_demo\_output=>write( cref->(comp\_name) ).
cl\_demo\_output=>display( ).

Example

Behavior for initial reference. The example shows that an initial reference leads to a catchable exception CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT for a dynamic target but to an uncatchable exception DATREF\_NOT\_ASSIGNED for a static target.

DATA dref TYPE REF TO scarr.
DATA target TYPE string.
TRY.
    target = dref->('CARRID').
  CATCH cx\_sy\_assign\_illegal\_component.
    DATA(exc) = 'X'.
ENDTRY.
ASSERT exc = 'X'.
"Runtime error DATREF\_NOT\_ASSIGNED
"target = dref->carrid.