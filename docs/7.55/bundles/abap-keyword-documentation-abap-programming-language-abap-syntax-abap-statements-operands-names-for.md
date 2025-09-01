# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Syntax / ABAP Statements / Operands / Names for Single Operands

Included pages: 7


### abenoperands_names.htm

---
title: "Names for Single Operands"
description: |
  A single operand, that is, an operand that is not an expression, can either be elementary or be a combination of components. Linked operands are: -   Structured data types or data objects (structure) -   Instances of classes (objects) -   Classes -   Interfaces As a consequence, names for operands a
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm"
abapFile: "abenoperands_names.htm"
keywords: ["select", "do", "try", "class", "data", "types", "abenoperands", "names"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) → 

Names for Single Operands

A single operand, that is, an operand that is not an expression, can either be elementary or be a combination of components. Linked operands are:

-   Structured data types or data objects (structure)

-   Instances of classes (objects)

-   Classes

-   Interfaces

As a consequence, names for operands are either elementary names or names constructed from multiple names separated by component selectors. An elementary name is used for addressing:

-   Elementary operands

-   Components that are unique in the current context

-   Super-units made up of components

[Naming conventions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennaming_conventions.htm) apply for the elementary names. Linked names with component selectors are used for addressing individual components. A component can itself be a super-unit of further components. Subcomponents can be addressed by [chaining](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchaining_glosry.htm "Glossary Entry") multiple names.

-   [Structure Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_component_selector.htm)

-   [Object Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_component_selector.htm)

-   [Class Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_component_selector.htm)

-   [Interface Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_component_selector.htm)

-   [Dereferencing Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendereferencing_operator.htm)

-   [Chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_chaining_selector.htm)

Hint

In addition to the component selectors listed here, [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") also has a [column selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") (~).

Continue
[Structure Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_component_selector.htm)
[Object Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_component_selector.htm)
[Class Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_component_selector.htm)
[Interface Component Selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_component_selector.htm)
[Dereferencing Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendereferencing_operator.htm)
[Chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_chaining_selector.htm)


### abenstructure_component_selector.htm

---
title: "Structure Component Selector"
description: |
  A component comp of a structured data type or a structure struct is accessed using the name struct-comp In this case, the character - is the structure component selector. A structured data type or a structure struct must be specified as follows to the left of the structure component selector: -   N
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_component_selector.htm"
abapFile: "abenstructure_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abenstructure", "component", "selector"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows to the left of the structure component selector:

-   Name of a structure or a structured type that can itself be linked.

-   [Functional method call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a structured result.

-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry") that returns a structured table line.

The name comp of the component must be to the right of the structure component selector.

Example

Declaration of a structure struc with the structured data type spfli from the ABAP Dictionary and access to its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...


### abenobject_component_selector.htm

---
title: "Object Component Selector"
description: |
  A component comp of an object is accessed using the following name: ref->comp In this case, the character -> is the object component selector. A reference variable ref must be specified as follows to the left of the object component selector: -   Name of a reference variable that can itself be link
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_component_selector.htm"
abapFile: "abenobject_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "abenobject", "component", "selector"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Object Component Selector

A component comp of an object is accessed using the following name:

ref->comp

In this case, the character \-> is the object component selector. A reference variable ref must be specified as follows to the left of the object component selector:

-   Name of a reference variable that can itself be linked.

-   [Functional method call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a reference variable as a result.

-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry") whose result is a reference variable.

-   [Constructor expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the [instance operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) or the [casting operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencasting_operator_glosry.htm "Glossary Entry") [CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_cast.htm).

The name comp of the component must be to the right of the object component selector. The object component selector dereferences the reference variable ref and makes the components of the referenced object accessible.

-   If ref is an object reference variable, the components comp of the object -attributes and methods- to which the object reference variable points are addressed using the object component selector.

-   If ref is a data reference variable that is typed as a structure, the components comp of the structure to which the data reference variable points are addressed using the object component selector.

If an attempt is made to access a data object (access to an [instance attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninstance_attribute_glosry.htm "Glossary Entry") via an [object reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") or access to a structure component via a [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry")) using a reference variable that contains the [null reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_reference_glosry.htm "Glossary Entry"), an uncatchable exception OBJECTS\_OBJREF\_NOT\_ASSIGNED or DATREF\_NOT\_ASSIGNED is raised. If an attempt is made to call an [instance method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninstance_method_glosry.htm "Glossary Entry") with a reference variable that contains the null reference, a catchable exception of the class CX\_SY\_REF\_IS\_INITIAL is raised.

Hint

If ref is a data reference variable, the character \* can be specified after the object component selector \->. Thereby the general [dereferencing operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendereferencing_operator.htm) \->\* is created. The expression ref->\* labels the entire data object to which the data reference variable points. The dereferencing operator is the only way to dereference data references. The dereferencing operator cannot be specified after object reference variables. The instance components of classes can only be accessed using the expression ref->comp.

Example

Accesses to the public attribute a1 of a class c1 via an object reference variable oref.

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

---
title: "Class Component Selector"
description: |
  A static component(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_component_glosry.htm 'Glossary Entry') comp of a class is accessed using the following name: class=>comp In this case, no instance of the class has to be created. The symbol => is the class component selector
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_component_selector.htm"
abapFile: "abenclass_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abenclass", "component", "selector"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Class Component Selector

A [static component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_component_glosry.htm "Glossary Entry") comp of a class is accessed using the following name:

class=>comp

In this case, no instance of the class has to be created. The symbol \=> is the class component selector. The name class of a class must be to the left of the class component selector. The name comp of the component must be to the right of the class component selector.

The class component selector can also be used to access the data types and constants of an interface:

intf=>type, intf=>const

The name intf of an interface must be to the left of the class component sector. The name type of a data type defined using TYPES or a constant const defined using CONSTANTS must be to the right of the object component selector.

Hint

It is also possible to access the static components of a class using the object component selector if an instance of the class was created.

Example

Declaration of a class factory and access to its static attributeoref.

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

---
title: "Interface Component Selector"
description: |
  A component comp of an interface is accessed using the following name: intf~comp In this case, the character ~ is the interface component selector. The name intf of an interface must be to the left of the interface component selector. The name comp of the component must be to the right of the interf
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_component_selector.htm"
abapFile: "abeninterface_component_selector.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "abeninterface", "component", "selector"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Interface Component Selector

A component comp of an interface is accessed using the following name:

intf~comp

In this case, the character ~ is the interface component selector. The name intf of an interface must be to the left of the interface component selector. The name comp of the component must be to the right of the interface component selector.

The name intf~comp identifies the components of interfaces in classes, or component interfaces in linked interfaces.

Programming Guideline

[Address interface components using interface reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_ref_interf_ref_guidl.htm "Guideline")

Hint

An interface contains each component exactly once, regardless of its combination of component interfaces. All the interface components are at the same hierarchical level. The name of an interface component is uniquely defined by intf~comp, where intf is always the interface in which the component is declared. A direct chaining of interface names intf1~...~intfn~comp is not possible.

Example

Declaration of interfaces and access to their components.

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


### abendereferencing_operator.htm

---
title: "Dereferencing Operator"
description: |
  The content of a data object pointed to by a data reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_type.htm) is accessed using the dereferencing operator: dref-> The dereferencing operator -> can be specified after a data reference variable(https://hel
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendereferencing_operator.htm"
abapFile: "abendereferencing_operator.htm"
keywords: ["select", "do", "if", "try", "catch", "data", "field-symbol", "abendereferencing", "operator"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Dereferencing Operator

The content of a data object pointed to by a [data reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_type.htm) is accessed using the dereferencing operator:

dref->\*

The dereferencing operator \->\* can be specified after a [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref.

-   If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position.

-   For data reference variables with the generic static type data, only the statement [ASSIGN dref ->\* TO <fs>](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_dynamic_dobj.htm) can be used to assign the data object to which the data reference points to a field symbol.

If the data reference variable contains the [null reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_reference_glosry.htm "Glossary Entry"), the uncatchable exception DATREF\_NOT\_ASSIGNED is raised when the dereferencing operator is used. The exception to this is the dereferencing in the statement ASSIGN.

Hint

The dereferencing operator uses the [object component selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_component_selector.htm).

Example

Uses the dereferencing operator in a general operand position and in the statement ASSIGN. Only in ASSIGN can dref be initial without raising an uncatchable exception.

DATA(dref) = NEW i( 111 ).
cl\_demo\_output=>write( |dref->\* { dref->\* }| ).
CLEAR dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>write( |sy-subrc { sy-subrc }| ).
cl\_demo\_output=>display( ).


### abencomponent_chaining_selector.htm

---
title: "Chainings"
description: |
  Whenever operands are composed of components, which in turn contain components, the names of these components are composed of chainings with multiple component selectors. The following rules apply for such chained names(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_name_gl
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_chaining_selector.htm"
abapFile: "abencomponent_chaining_selector.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abencomponent", "chaining", "selector"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Chainings

Whenever operands are composed of components, which in turn contain components, the names of these components are composed of chainings with multiple component selectors. The following rules apply for such [chained names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_name_glosry.htm "Glossary Entry"):

-   Taken together, the names to the left of each structure component selector must address a structured data type or a structure.

-   Taken together, the names to the left of each object component selector must address a reference variable.

-   The class component selector can occur in a name exactly once as the first selector.

-   The interface component selector can only occur more than once in a name if other component selectors are listed between the individual interface component selectors.

Hint

In addition to the chaining of names, the following chainings are possible:

-   [Method chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with the object component selector

-   [Chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_chaining.htm) of [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry")

Chainings can be combined in any way as long as the corresponding rules are respected.

Example

Declaration of a nested structured data type struc2 in struc1 and a structure struc3 in an interface i1.

The component comp of struc3 is a data reference variable of the static type struc1. The i1 interface is the component interface of i2 and the latter is implemented in c1. In c2, a [static attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") is declared as the object reference of the static type c1. The expression in the last line can be at an operand position that expects a data object, and identifies the component comp of the structure struc2 in a chaining that starts at class c2. A prerequisite for use of the expression is that both reference variables, oref and dref, point to the respective instances.

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
