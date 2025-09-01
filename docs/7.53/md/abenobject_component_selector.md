  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm) → 

Object Component Selector

A component comp of an object is accessed using the following name:

ref->comp

In this case, the character \-> is the object component selector. A reference variable ref must be specified on the left of the object component selector as follows:

-   Name of a reference variable (can itself be a composite).

-   [Functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with reference variable as a result.

-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry") whose result is a reference variable.

-   [Constructor expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the [instance operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) or the [casting operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm).

The name comp of the component must be on the right of the object component selector. The object component selector dereferences the reference variable ref and makes the components of the referenced object accessible.

-   If ref is an object reference variable, the components comp of the object (attributes and methods) to which the object reference variable points are addressed using the object component selector.

-   If ref is a data reference variable that is typed as a structure, the components comp of the structure to which the data reference variable points are addressed using the object component selector.

If an attempt is made to access a data object (an [instance attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_attribute_glosry.htm "Glossary Entry") or structure component) using a reference variable that contains the [null reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_reference_glosry.htm "Glossary Entry"), a non-handleable exception is raised. Dereferencing of a data reference in the statement ASSIGN is an exception to this. If an attempt is made to access an [instance method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry") using a reference variable that contains the null reference, a handleable exception of the class CX\_SY\_REF\_IS\_INITIAL is raised.

Note

If ref is a data reference variable, the character \* can be specified after the object component selector \->. This creates the general dereferencing operator \->\*. The expression ref->\* names the entire data object to which the data reference variable points. The dereferencing operator is the only way to dereference data references. In the case of untyped data reference variables, this is only possible in the statement ASSIGN. The dereferencing operator cannot be specified after object reference variables. The instance components of classes can only be accessed using the expression ref->comp.

Example

Accesses the public attribute a1 of a class c1 by using the object reference variable oref.

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