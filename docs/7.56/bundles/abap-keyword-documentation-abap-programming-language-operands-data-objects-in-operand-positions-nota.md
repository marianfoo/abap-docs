# ABAP - Keyword Documentation / ABAP - Programming Language / Operands / Data Objects in Operand Positions / Notations for Single Operands

Included pages: 10


### abenoperands_names.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Notations for Single Operands

A single operand, that is, an operand that is not an expression, can either be elementary or be a combination of components. Composite operands are:

-   Structured data types or data objects (structure)
-   Instances of classes (objects)
-   Classes
-   Interfaces

As a consequence, names for operands are either elementary names or names constructed from multiple names separated by component selectors. An elementary name is used for addressing the following:

-   Elementary operands
-   Components that are unique in the current context
-   Superunits made up of components

[Naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the elementary names. Composite names with component selectors are used for addressing individual components. A component can itself be a superunit of further components. Subcomponents can be addressed by [chaining](javascript:call_link\('abenchaining_glosry.htm'\) "Glossary Entry") multiple names.

-   [Structure Component Selector](javascript:call_link\('abenstructure_component_selector.htm'\))
-   [Object Component Selector](javascript:call_link\('abenobject_component_selector.htm'\))
-   [Class Component Selector](javascript:call_link\('abenclass_component_selector.htm'\))
-   [Interface Component Selector](javascript:call_link\('abeninterface_component_selector.htm'\))
-   [Dereferencing Operator](javascript:call_link\('abendereferencing_operator.htm'\))
-   [Chainings](javascript:call_link\('abencomponent_chaining_selector.htm'\))
-   [Offset/Length Specifications for Substring Access](javascript:call_link\('abenoffset_length.htm'\))

Hint

In addition to the component selectors listed here, [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") also has a [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") (~).

Continue
[Structure Component Selector](javascript:call_link\('abenstructure_component_selector.htm'\))
[Object Component Selector](javascript:call_link\('abenobject_component_selector.htm'\))
[Class Component Selector](javascript:call_link\('abenclass_component_selector.htm'\))
[Interface Component Selector](javascript:call_link\('abeninterface_component_selector.htm'\))
[Dereferencing Operator](javascript:call_link\('abendereferencing_operator.htm'\))
[Chainings](javascript:call_link\('abencomponent_chaining_selector.htm'\))
[Offset/Length Specifications for Substring Access](javascript:call_link\('abenoffset_length.htm'\))


### abenstructure_component_selector.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows to the left of the structure component selector:

-   Name of a structure or a structured type that can itself be linked.
-   [Functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") or [method chaining](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") with a structured result.
-   Single or chained [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") that returns a structured table line.

The name comp of the component must be to the right of the structure component selector.

Example

Declaration of a structure struc with the structured data type spfli from the ABAP Dictionary and access to its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...


### abenobject_component_selector.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Object Component Selector

-   [Static Target](#@@ITOC@@ABENOBJECT_COMPONENT_SELECTOR_1)
-   [Dynamic Target](#@@ITOC@@ABENOBJECT_COMPONENT_SELECTOR_2)

Static Target

A statically specified component comp of an object is accessed using the following name:

ref->comp

In this case, the character \-> is the object component selector. A reference variable ref must be specified as follows to the left of the object component selector:

-   Name of a reference variable that can itself be a composite.
-   [Functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") or [method chaining](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") with a reference variable as a result.
-   Single or chained [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") whose result is a reference variable.
-   [Constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the [casting operator](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)).

The name comp of the component must be to the right of the object component selector. The object component selector dereferences the reference variable ref and makes the components of the referenced object accessible.

-   If ref is an object reference variable, the components comp of the object - attributes and methods - to which the object reference variable points are addressed using the object component selector.
-   If ref is a data reference variable that is typed as a structure, the components comp of the structure to which the data reference variable points are addressed using the object component selector.

If an attempt is made to access a data object (access to an [instance attribute](javascript:call_link\('abeninstance_attribute_glosry.htm'\) "Glossary Entry") by an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") or access to a structure component by a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry")) using a reference variable that contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), an uncatchable exception OBJECTS\_OBJREF\_NOT\_ASSIGNED or DATREF\_NOT\_ASSIGNED is raised. If an attempt is made to call an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") with a reference variable that contains the null reference, a catchable exception of the class CX\_SY\_REF\_IS\_INITIAL is raised.

Hint

If ref is a data reference variable, the character \* can be specified after the object component selector \->, which creates the general [dereferencing operator](javascript:call_link\('abendereferencing_operator.htm'\)) \->\*. The expression ref->\* labels the entire data object to which the data reference variable points. The dereferencing operator is the only way to dereference data references. The dereferencing operator cannot be specified after object reference variables. The instance components of classes can only be accessed using the expression ref->comp.

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

The syntax and meaning is the same as for [dynamic components](javascript:call_link\('abapassign_dynamic_components.htm'\)) and [dynamic access](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)) in the statement ASSIGN and the result of the expressions behave like an accordingly assigned field symbol of type ANY.

If the component is not found, an exception occurs.

Example

Dynamic specification of a structure component and an interface attribute of an object.

INTERFACE intf.
  CONSTANTS attr TYPE string VALUE \`YYY\`.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
DATA(dref) = NEW scarr( carrid = 'XXX' ).
DATA(comp\_name) = \`carrid\`.
cl\_demo\_output=>write( dref->(comp\_name) ).
DATA iref TYPE REF TO intf.
DATA(cref) = NEW cls( ).
iref = cref.
comp\_name = \`attr\`.
cl\_demo\_output=>write( iref->(comp\_name) ).
comp\_name = \`intf~\` && comp\_name.
cl\_demo\_output=>write( cref->(comp\_name) ).
cl\_demo\_output=>display( ).


### abenclass_component_selector.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Class Component Selector

A [static component](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") comp of a class is accessed using the following name:

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

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Interface Component Selector

A component comp of an interface is accessed using the following name:

intf~comp

In this case, the character ~ is the interface component selector. The name intf of an interface must be to the left of the interface component selector. The name comp of the component must be to the right of the interface component selector.

The name intf~comp identifies the components of interfaces in classes, or component interfaces in linked interfaces.

Programming Guideline

[Address interface components using interface reference variables](javascript:call_link\('abenclass_ref_interf_ref_guidl.htm'\) "Guideline")

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

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Dereferencing Operator

The content of a data object pointed to by a [data reference](javascript:call_link\('abendata_reference_type.htm'\)) is accessed using the dereferencing operator:

dref->\*

The dereferencing operator \->\* can be specified after a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") dref.

-   If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position.
-   For data reference variables with the generic static type data, it can be specified at any operand position except for:
    -   Replacement parameters behind DEFAULT for methods, functions or events.
    -   [Components](javascript:call_link\('abenitab_components.htm'\)) of internal tables.
    -   Operand positions where a certain operand type, e.g. an internal table, is expected.

If the data reference variable contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), the uncatchable exception DATREF\_NOT\_ASSIGNED is raised when the dereferencing operator is used. The exception to this is the dereferencing in the statement ASSIGN.

Hint

The dereferencing operator uses the [object component selector](javascript:call_link\('abenobject_component_selector.htm'\)).

Example

Uses the dereferencing operator in a general operand position and in the statement ASSIGN. Only in ASSIGN can dref be initial without raising an uncatchable exception.

DATA dref TYPE REF TO data.
dref = NEW i( 111 ).
cl\_demo\_output=>write( |dref->\* { dref->\* }| ).
CLEAR dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>write( |sy-subrc { sy-subrc }| ).
cl\_demo\_output=>display( ).


### abencomponent_chaining_selector.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Chainings

If a deeply nested subcomponent is used at an operand position, the operand must be denoted as a chaining of all components leading to this subcomponent. This chaining contains a suitable component selector between each component. The following rules apply to such [chained names](javascript:call_link\('abenchained_name_glosry.htm'\) "Glossary Entry"):

-   Taken together, the names to the left of each structure component selector must address a structured data type or a structure.
-   Taken together, the names to the left of each object component selector must address a reference variable.
-   The class component selector can occur in a name exactly once as the first selector.
-   The interface component selector can only occur more than once in a name if other component selectors are listed between the individual interface component selectors.

Hint

In addition to the chaining of names, the following chainings are possible:

-   [Method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") with the object component selector
-   [Chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) of [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

Chainings can be combined in any way as long as the corresponding rules are respected.

Example

Declaration of a nested structured data type struc2 in struc1 and a structure struc3 in an interface i1.

The component comp of struc3 is a data reference variable of the static type struc1. The i1 interface is the component interface of i2 and the latter is implemented in c1. In c2, a [static attribute](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") is declared as the object reference of the static type c1. The expression in the last line can be at an operand position that expects a data object, and identifies the component comp of the structure struc2 in a chaining that starts at class c2. A prerequisite for use of the expression is that both reference variables, oref and dref, point to the respective instances.

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


### abenoffset_length.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Offset/Length Specifications for Substring Access

In operand positions, it is possible to access subareas of certain data objects by specifying an offset and a length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

An offset off can be appended directly with the character + to the identifier dobj of a data object, <fs> of a field symbol, or to a dereferenced data reference variable dref->\*. A length len can be appended to the offset specification directly in parentheses ( ) or directly to the identifier. Offsets or lengths can be specified for:

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")
-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")
-   [Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") where one of the following prerequisites must be met:
    -   The structure only contains flat character-like components.
    -   The first fragment of the [structural fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The segment of the data object is used that has the offset specified in off and the length specified in len in characters or bytes. No memory area outside the field boundaries can be addressed, except for in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). In the case of an offset specification without a length, the entire substring is addressed from off characters; in the case of a length specification without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))).

The operands off and len expect data objects of the type i, which must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").
-   A negative offset, but never length 0, can be specified if an <fs> field symbol is specified in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) for dobj.
-   If off is smaller than the length of dobj, an asterisk (\*) can be entered for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met, or if the substring defined by off and len is not fully included in the data object, except in the case of [ASSIGN](javascript:call_link\('abapassign.htm'\)), a syntax error occurs if statically identifiable. Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, it cannot be preceded by a plus/minus sign.

The offset and length specifications are counted in characters for character-like data objects and otherwise in bytes.

A substring specified by an offset or length specification is treated like a data object of the specified length. The data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

Original Data Type

Data Type of Substring

c

c

n

n

d

n

t

n

string

string

x

x

xstring

xstring

Structure type

c

In a substring access, if the length of the substring matches the length of the structure to a structure exactly, the substring does not have data type c but is handled like the structure itself.

The following restrictions apply:

-   At [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"), only flat data objects are allowed, that is, write access to substrings of strings is not possible.
-   Access to substrings of strings is also not possible in the following [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry"):
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as a memory area [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an argument of the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)).
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an actual parameter for input parameters when calling [methods](javascript:call_link\('abenmethod_calls.htm'\)), [function modules](javascript:call_link\('abapcall_function.htm'\)) , and [subroutines](javascript:call_link\('abapperform.htm'\)) .
-   Offsets and lengths cannot be specified for literals or text symbols.
-   An offset/length specification cannot be attached directly to a table expression [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)), but to a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose last position is a suitable structure component after a structure component selector.
-   No offset or length can be specified for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), regardless of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").
-   In case of dynamically [specified operands](javascript:call_link\('abenoperands_specifying.htm'\)) in parentheses, no length specification can be made.
-   A dereferenced data reference variable dref->\* must be typed completely.
-   For a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry"), no offsets or lengths can be specified as [memory areas](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) of the statement ASSIGN or as arguments of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) (table expressions only).
-   The following applies when [assigning](javascript:call_link\('abenequals_operator.htm'\)) data objects of fixed length with offset/length specifications to an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") with the declaration operator [DATA](javascript:call_link\('abendata_inline.htm'\)):
    -   If the offset/length specification is applied to a data object that is directly assigned to the inline declaration, off and len must be literals or constants. Variables are not allowed.
    -   If the offset/length specification is applied to a data object that is the result of chaining that involves a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the data type of the declared data object is the data type of the assigned data object in its full length and the substring is assigned according to the respective [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

Hints

-   For reads on substrings of character-like data objects, built-in [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) that allow searches for substrings and offsets/lengths are also available. The substring functions can also be used to process arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") because there is an implicit conversion to string.
-   It is recommended to always explicitly specify offsets with the value 0,that is, dobj+0(len) instead of dobj(len) to differentiates substring access in the source code clearly from other language constructs that also contain parentheses, such as dynamic specifications, method calls, or inline declarations.
-   A specification of dobj+0(\*), dobj+0, or dobj(\*) is always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.
-   The above restriction regarding offset/length specifications for results of chainings involving table or constructor expressions is not valid for types that are inferred at runtime, e.g. when passing to generic parameters of procedures. Then the data type of the substring is used.
-   No substring access cnt(len), sum(len) can be performed on data objects named cnt and sum unless an offset is specified explicitly. The compiler always interprets such an entry as a [number](javascript:call_link\('abapcnt.htm'\)) or [sum](javascript:call_link\('abapsum.htm'\)) of a field len in the group level processing of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry").
-   [Obsolete syntax forms](javascript:call_link\('abentokenization_obsolete.htm'\)) can still occur outside of classes in connection with substring accesses.
-   The statement [MOVE PERCENTAGE](javascript:call_link\('abapmove_percentage.htm'\)) represents an obsolete form of substring access.

Example

The following structure has character-like and non-character-like components:

DATA:
  BEGIN OF struc,
    a TYPE c LENGTH 3,    "Length 3 characters
    b TYPE n LENGTH 4,    "Length 4 characters
    c TYPE d,             "Length 8 characters
    d TYPE t,             "Length 6 characters
    e TYPE decfloat16,    "Length 8 bytes
    f TYPE c LENGTH 28,   "Length 28 characters
    g TYPE x LENGTH 2,    "Length 2 bytes
  END OF struc.

The [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset and length accesses are only possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2) is not allowed.

Executable Example

[Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))


### abendata_process_fields_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) →  [Offset/Length Specifications for Substring Access](javascript:call_link\('abenoffset_length.htm'\)) → 

Substrings

This example demonstrates how substrings can be accessed.

Source Code

REPORT demo\_data\_process\_fields.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA time TYPE t VALUE '172545'.
    DATA: f1(8)  TYPE c VALUE 'ABCDEFGH',
          f2(20) TYPE c VALUE '12345678901234567890'.
    DATA: f3(8) TYPE c VALUE 'ABCDEFGH',
          f4(8) TYPE c.
    DATA: o     TYPE i VALUE 2,
          l     TYPE i VALUE 4.
    DATA: string(20) TYPE c,
          number(8)  TYPE c VALUE '123456',
          offset     TYPE i VALUE 8,
          length     TYPE i VALUE 12.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Example 1\`
      )->write( time
      )->write( time+2(2)
      )->write( time+2(4) ).
    CLEAR time+2(4).
    out->write( time ).
    out->next\_section( \`Example 2\` ).
    f2+6(5) = f1+3(5).
    out->write( f1
      )->write( f2 ).
    out->next\_section( \`Example 3\` ).
    f4 = f3.
    out->write( f4 ).
    f4 = f3+o(l).
    out->write( f4 ).
    f4+o(l) = f3.
    out->write( f4 ).
    CLEAR f4.
    f4+o(l) = f3.
    out->write( f4 ).
    f4+o(l) = f3+o(l).
    out->write( f4 ).
    out->next\_section( \`Example 4\` ).
    WRITE number(6) TO string+offset(length) LEFT-JUSTIFIED.
    out->write( string ).
    CLEAR string.
    WRITE number(6) TO string+offset(length) CENTERED.
    out->write( string ).
    CLEAR string.
    WRITE number TO string+offset(length) RIGHT-JUSTIFIED.
    out->display( string ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part, the minutes of a time field are selected by specifying an offset. Then the minutes and seconds are set to their initial values by specifying an offset in the CLEAR statement.

In the second part, the five digit sequence 78901 from the field f2 is replaced with DEFGH from f1 by specifying offsets and lengths.

In the third part, assignments are used. First, the content of f1 is assigned to f2 without offset specifications. The same is then done with offsets and lengths for f1. The next three assignments overwrite the content of f2 with an offset of 2. Note that f2 is padded on the right with blanks, in accordance with the conversion rule for source type c.

In the fourth part, the WRITE TO statement is used. The first six places of the field number are written to the last 12 places of the string field as left-aligned, centered, and right-aligned places.


### abenoffset_length.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Notations for Single Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Offset/Length Specifications for Substring Access

In operand positions, it is possible to access subareas of certain data objects by specifying an offset and a length:

Syntax

dobj*\[*+off*\]**\[*(len)*\]*

<fs>*\[*+off*\]**\[*(len)*\]*

dref->\**\[*+off*\]**\[*(len)*\]*

Effect

An offset off can be appended directly with the character + to the identifier dobj of a data object, <fs> of a field symbol, or to a dereferenced data reference variable dref->\*. A length len can be appended to the offset specification directly in parentheses ( ) or directly to the identifier. Offsets or lengths can be specified for:

-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")
-   [Elementary](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry") [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")
-   [Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") where one of the following prerequisites must be met:
    -   The structure only contains flat character-like components.
    -   The first fragment of the [structural fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

The segment of the data object is used that has the offset specified in off and the length specified in len in characters or bytes. No memory area outside the field boundaries can be addressed, except for in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). In the case of an offset specification without a length, the entire substring is addressed from off characters; in the case of a length specification without an offset, the first len characters are addressed (different rules apply to the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))).

The operands off and len expect data objects of the type i, which must contain positive integers, with the following exceptions.

-   The length 0 can be specified for [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").
-   A negative offset, but never length 0, can be specified if an <fs> field symbol is specified in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) for dobj.
-   If off is smaller than the length of dobj, an asterisk (\*) can be entered for len. The upper limit of dobj then determines the upper limit of the memory area.

If the prerequisites are not met, or if the substring defined by off and len is not fully included in the data object, except in the case of [ASSIGN](javascript:call_link\('abapassign.htm'\)), a syntax error occurs if statically identifiable. Otherwise, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised. If off is specified as a numeric literal, it cannot be preceded by a plus/minus sign.

The offset and length specifications are counted in characters for character-like data objects and otherwise in bytes.

A substring specified by an offset or length specification is treated like a data object of the specified length. The data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

Original Data Type

Data Type of Substring

c

c

n

n

d

n

t

n

string

string

x

x

xstring

xstring

Structure type

c

In a substring access, if the length of the substring matches the length of the structure to a structure exactly, the substring does not have data type c but is handled like the structure itself.

The following restrictions apply:

-   At [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"), only flat data objects are allowed, that is, write access to substrings of strings is not possible.
-   Access to substrings of strings is also not possible in the following [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry"):
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as a memory area [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an argument of the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)).
    -   Specification of dobj*\[*+off*\]**\[*(len)*\]* as an actual parameter for input parameters when calling [methods](javascript:call_link\('abenmethod_calls.htm'\)), [function modules](javascript:call_link\('abapcall_function.htm'\)) , and [subroutines](javascript:call_link\('abapperform.htm'\)) .
-   Offsets and lengths cannot be specified for literals or text symbols.
-   An offset/length specification cannot be attached directly to a table expression [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)), but to a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose last position is a suitable structure component after a structure component selector.
-   No offset or length can be specified for an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), regardless of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").
-   In case of dynamically [specified operands](javascript:call_link\('abenoperands_specifying.htm'\)) in parentheses, no length specification can be made.
-   A dereferenced data reference variable dref->\* must be typed completely.
-   For a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry"), no offsets or lengths can be specified as [memory areas](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) of the statement ASSIGN or as arguments of the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) (table expressions only).
-   The following applies when [assigning](javascript:call_link\('abenequals_operator.htm'\)) data objects of fixed length with offset/length specifications to an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") with the declaration operator [DATA](javascript:call_link\('abendata_inline.htm'\)):
    -   If the offset/length specification is applied to a data object that is directly assigned to the inline declaration, off and len must be literals or constants. Variables are not allowed.
    -   If the offset/length specification is applied to a data object that is the result of chaining that involves a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the data type of the declared data object is the data type of the assigned data object in its full length and the substring is assigned according to the respective [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

Hints

-   For reads on substrings of character-like data objects, built-in [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) that allow searches for substrings and offsets/lengths are also available. The substring functions can also be used to process arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") because there is an implicit conversion to string.
-   It is recommended to always explicitly specify offsets with the value 0,that is, dobj+0(len) instead of dobj(len) to differentiates substring access in the source code clearly from other language constructs that also contain parentheses, such as dynamic specifications, method calls, or inline declarations.
-   A specification of dobj+0(\*), dobj+0, or dobj(\*) is always interpreted as dobj. In this case, dobj can also be a data object where substring access according to the rules above is not possible.
-   The above restriction regarding offset/length specifications for results of chainings involving table or constructor expressions is not valid for types that are inferred at runtime, e.g. when passing to generic parameters of procedures. Then the data type of the substring is used.
-   No substring access cnt(len), sum(len) can be performed on data objects named cnt and sum unless an offset is specified explicitly. The compiler always interprets such an entry as a [number](javascript:call_link\('abapcnt.htm'\)) or [sum](javascript:call_link\('abapsum.htm'\)) of a field len in the group level processing of an [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry").
-   [Obsolete syntax forms](javascript:call_link\('abentokenization_obsolete.htm'\)) can still occur outside of classes in connection with substring accesses.
-   The statement [MOVE PERCENTAGE](javascript:call_link\('abapmove_percentage.htm'\)) represents an obsolete form of substring access.

Example

The following structure has character-like and non-character-like components:

DATA:
  BEGIN OF struc,
    a TYPE c LENGTH 3,    "Length 3 characters
    b TYPE n LENGTH 4,    "Length 4 characters
    c TYPE d,             "Length 8 characters
    d TYPE t,             "Length 6 characters
    e TYPE decfloat16,    "Length 8 bytes
    f TYPE c LENGTH 28,   "Length 28 characters
    g TYPE x LENGTH 2,    "Length 2 bytes
  END OF struc.

The [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") splits the structure into five areas, F1 - F5.

\[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \]
\[            F1               |  F2 |  F3  |       F4      | F5 \]

Offset and length accesses are only possible on the character-like initial fragment F1 only, for example struc(21) or struc+7(14). An access such as struc+57(2) is not allowed.

Executable Example

[Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Substrings](javascript:call_link\('abendata_process_fields_abexa.htm'\))
