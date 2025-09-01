# ABAP Keyword Documentation / ABAP − Reference / ABAP Syntax / ABAP Statements / Operands / Names for Individual Operands

Included pages: 6


### abenoperands_names.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) → 

Names for Individual Operands

An individual operand, meaning an operand that is not an expression, can be elementary or made up of components. Composite operands are:

-   Structured data types or data objects (structure)

-   Instances of classes (objects)

-   Classes

-   Interfaces

Accordingly, names for operands are either elementary names or names constructed from multiple names separated by component selectors. An elementary name is used for addressing:

-   elementary operands

-   components that are unique in the current context

-   superunits made up of components

[Naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) apply to the elementary names. Composite names with component selectors are used for addressing individual components. A component can itself be a superunit of further components. Subcomponents can be addressed by [chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchaining_glosry.htm "Glossary Entry") multiple names.

-   [Structure Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_component_selector.htm)

-   [Object Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_component_selector.htm)

-   [Class Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_component_selector.htm)

-   [Interface Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_component_selector.htm)

-   [Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomponent_chaining_selector.htm)

Note

As well as the component selectors specified here, [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") has a [column selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") (~).

Continue
[Structure Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_component_selector.htm)
[Object Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_component_selector.htm)
[Class Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_component_selector.htm)
[Interface Component Selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_component_selector.htm)
[Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomponent_chaining_selector.htm)


### abenstructure_component_selector.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows on the left of the structure component selector:

-   Name of a structure or a structured type (which can itself be composite).

-   [Functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a structured result.

-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry") that returns a structured table row.

The name comp of the component must be on the right of the structure component selector.

Example

Declares a structure struc with the structured data type spfli from ABAP Dictionary and accesses its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...


### abenobject_component_selector.htm

  

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


### abenclass_component_selector.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm) → 

Class Component Selector

A [static component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_component_glosry.htm "Glossary Entry") comp of a class can be accessed using the following name:

class=>comp

In this case, no instance of the class needs to be created. The characters \=> are the class component selector. The name class of a class must be on the left of the class component selector. The name comp of the component must be on the right of the class component selector.

The class component selector can also be used to access the data types and constants of an interface:

intf=>type, intf=>const

The name intf of an interface must be on the left of the class component sector. The name type of a data type defined using TYPES or the name const of a constant defined using CONSTANTS must be on the right of the object component selector.

Note

It is also possible to access the static components of a class using the object component selector if an instance of the class was created.

Example

Declares a class factory and accesses its static attribute oref.

CLASS factory DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO factory.
    CLASS-METHODS class\_constructor.
    METHODS do\_something.
ENDCLASS.
...
factory=>oref->do\_something( ).
...
CLASS factory IMPLEMENTATION.
  METHOD class\_constructor.
    CREATE OBJECT oref.
  ENDMETHOD.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.


### abeninterface_component_selector.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm) → 

Interface Component Selector

A component comp of an interface is accessed using the following name:

intf~comp

In this case, the character ~ is the interface component selector. The name intf of an interface must be on the left of the interface component selector. The name comp of the component must be on the right of the interface component selector.

The name intf~comp identifies the components of interfaces in classes or component interfaces in composite interfaces.

Programming Guideline

[Address interface components using interface reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ref_interf_ref_guidl.htm "Guideline")

Note

An interface contains each component exactly once, regardless of how it is composed of component interfaces. All the interface components are at the same hierarchical level. The name of an interface component is uniquely defined using intf~comp. intf is always the interface in which the component is declared. A direct chaining of interface names intf1~...~intfn~comp is not possible.

Example

Declares interfaces and accesses their components.

INTERFACE i1.
  TYPES t1 TYPE string.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  METHODS m2 IMPORTING p1 TYPE i1~t1.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i2.
ENDCLASS.
...
DATA oref TYPE REF TO c1.
oref->i2~m2( ... ).
...
CLASS c1 IMPLEMENTATION.
  METHOD i2~m2.
    ...
  ENDMETHOD.
ENDCLASS.


### abencomponent_chaining_selector.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_names.htm) → 

Chainings

In cases where operands are composed of components that themselves contain components, the names of these components are composed of chainings with multiple component selectors. The following rules apply to these [chained names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_name_glosry.htm "Glossary Entry"):

-   The names on the left of each structure component selector must, as a composite group, address a structured data type or a structure.

-   The names on the left of each object component selector must, as a composite group, address a reference variable.

-   The class component selector can occur in a name exactly once as the first selector.

-   The interface component selector can only occur more than once in a name if other component selectors are specified between the individual interface component selectors.

Note

As well as the chaining of names, the following chainings are possible:

-   [Method chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with the object component selector

-   [Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) of [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry")

Chainings can be combined in any way as long as their rules are respected.

Example

Declares a nested structured data type struc2 in struc1 and a structure struc3 in an interface i1.

The component comp of struc3 is a data reference variable of the static type struc1. The i1 interface is the component interface of i2 and the latter is implemented in c1. In c2, a [static attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") is declared as the object reference of the static type c1. The expression in the last line can be in an operand position that expects a data object, and names the component comp of the structure struc2 in a chaining that starts at class c2. A prerequisite for use of the expression is that both reference variables, oref and dref, point to the respective instances.

INTERFACE i1.
  TYPES: BEGIN OF struc1,
           ...
           BEGIN OF struc2,
             ...,
             comp TYPE ...,
             ...,
           END OF struc2,
           ...
         END OF struc1.
  DATA: BEGIN OF struc3,
          ...
          dref TYPE REF TO struc1,
          ...
        END OF struc3.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i2.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO c1.
ENDCLASS.
...
... c2=>oref->i1~struc3-dref->struc2-comp ...
