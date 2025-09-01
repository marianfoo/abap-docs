# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Structures

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abendata_objects_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_structure.htm)
- [abenboxed_components.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_components.htm)
- [abenstatic_boxes.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_boxes.htm)
- [abenstructure_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_abexas.htm)
- [abenstructure_filling_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_filling_abexa.htm)
- [abendictionary_structure_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_structure_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.757Z

---

### abendata_objects_structure.htm

> **📖 Official SAP Documentation**: [abendata_objects_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Structures

Structures are data objects that consist of components of any data type that are stored consecutively in the memory. The data type of a structure is a [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry"):

-   In a program, a structured type or structure is created using the additions [BEGIN OF ... END OF](javascript:call_link\('abaptypes_struc.htm'\)) of the statements TYPES, DATA, and so on. Structured types can also be created dynamically using the [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") methods.

-   In ABAP Dictionary, structured types are [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) or types of [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) or of [DDIC views](javascript:call_link\('abenddic_views.htm'\)).

-   In [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), [CDS entities](javascript:call_link\('abencds_entities.htm'\)) represent structured types.

The following sections give an overview of structures in ABAP.

-   [Kinds of Structures](#abendata-objects-structure-1--------use-of-structures---@ITOC@@ABENDATA_OBJECTS_STRUCTURE_2)

-   [Use of Deep Structures](#abendata-objects-structure-3--------use-of-deep-ddic-structures---@ITOC@@ABENDATA_OBJECTS_STRUCTURE_4)

-   [Boxed Components](#abendata-objects-structure-5---programming-guidelines-------names-of-structure-components--javascript-call-link---abenstruc-comp-names-guidl-htm-----guideline---------do-not-include-components-from-structures--javascript-call-link---abenincluding-structures-guidl-htm-----guideline----kinds-of-structures--depending-on-the-type-of-component--structures-are-named-as-follows-------flat-structures-do-not-contain-any--deep--javascript-call-link---abendeep-glosry-htm-----glossary-entry---components--they-only-contain-components-with-flat-data-types--such-as-elementary-types-c--n--d--t--decfloat16--decfloat34--f--b--s--i--int8--p--x--utclong--or-structures-with-these-types-------flat-character-like-structures-are-flat-structures-with-exclusively--character-like--javascript-call-link---abencharlike-data-object-glosry-htm-----glossary-entry---components-------nested-structures-contain-at-least-one--substructure--javascript-call-link---abensubstructure-glosry-htm-----glossary-entry----whether-a-nested-structure-is-flat-or-character-like-depends-on-the-attributes-of-all-components-------deep-structures-contain-at-least-one--deep--javascript-call-link---abendeep-glosry-htm-----glossary-entry---component-in-any-nesting-level--possible-deep-components-include-strings--internal-tables--boxed-components--data-or-object-references---a-structure-that-contains-static-or-dynamic-components-is-formally-also-a--static--javascript-call-link---abenstatic-data-object-glosry-htm-----glossary-entry---or--dynamic-data-object--javascript-call-link---abendynamic-data-object-glosry-htm-----glossary-entry----respectively---the-following-figure-illustrates-a-deep-structure-----figure--abdoc-deep-structure-gif---hint--the-term--nested-structure--must-not-be-confused-with-the-term--deep-structure---a-nested-structure-is-flat-if-it-contains-exclusively-flat-components-and-subcomponents--a-nested-structure-is-deep-when-it-has-at-least-one-deep-component-or-subcomponent---example--nested-structure--the-substructure-is-created-using-a-reference-to-the-ddic-structure-scarr-for-the-second-component--the-components-are-accessed-using-the-structure-component-selector--------data----begin-of-struct------name--type-c-length-10-value--scarr-------scarr-type-scarr----end-of-struct--select-single-----------from-scarr--------where-carrid----lh---------into-corresponding-fields-of-struct-scarr.
cl\_demo\_output=>new(
)->write\_data( struct-name
)->write\_data( struct-scarr-carrid
)->write\_data( struct-scarr-carrname
)->display( ).

Example

Deep structure. The following structure contains exclusively deep components.

DATA:
  BEGIN OF struct,
    text TYPE string,
    hex  TYPE xstring,
    tab  TYPE STANDARD TABLE OF i WITH EMPTY KEY,
    dref TYPE REF TO i,
    iref TYPE REF TO if\_demo\_output,
  END OF struct.

Use of Structures

Structures are addressed either completely or by component in appropriate operand positions. The [structure component selector](javascript:call_link\('abenstructure_component_sel_glosry.htm'\) "Glossary Entry") (\-) is used for the latter. In the case of data reference variables that are typed as a structure, the components of the structure to which the data reference variable points can also be addressed using the object component selector (\->).

Special [conversion](javascript:call_link\('abenconversion_struc.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)) apply to assignments that involve structures. Flat character-like structures have the special feature that they can be used like [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") in many operand positions and included in the generic ABAP type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). They can be specified in almost all operand positions where elementary character-like data objects are possible. The ABAP runtime environment then interprets the structure as an elementary field of the type c in the length of the structure. An exception to this are operand positions of [string expressions](javascript:call_link\('abapcompute_string.htm'\)) and [string functions](javascript:call_link\('abenstring_functions.htm'\)) with named arguments.

For the assignment of structure components, there is a special statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)), a constructor operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)), and a system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)). The [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause of ABAP SQL also has an addition CORRESPONDING. The statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) has a special variant [COMPONENT OF STRUCTURE](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) for dynamic access to structure components.

Example

Inline declaration of a structure wa in a SELECT statement with reference to the DDIC database table SCARR. The components of the structure are accessed using the structure component selector (\-). .

SELECT carrid, carrname
       FROM scarr
       INTO @DATA(wa).
  cl\_demo\_output=>write( |{ wa-carrid WIDTH = 5
                         }{ wa-carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Creation of a structure as an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") with the type of the DDIC database table SCARR in the ABAP Dictionary to which the data reference variable dref points. Used as the target area of a SELECT statement using the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") (\->\*). The components of the structure are accessed using the object component selector (\->).

DATA(dref) = NEW scarr( ).
SELECT \*
       FROM scarr
       INTO @dref->\*.
  cl\_demo\_output=>write( |{ dref->carrid WIDTH = 5
                         }{ dref->carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

The following example demonstrates that a flat structure with exclusively character-like components can behave like a structure and like a character-like data object.

DATA:
  BEGIN OF struct,
    col1 TYPE c LENGTH 5 VALUE '12345',
    col2 TYPE c LENGTH 5 VALUE 'abcde',
  END OF struct.
cl\_demo\_output=>new(
  )->write\_data( struct
  )->write\_data( struct-col1
  )->write\_data( struct-col2
  )->write\_data( CONV string( struct )
  )->display( ).

Use of Deep Structures

Since the data content of deep structures is not stored completely within the memory bounds of the structure itself and the deep components are just references to the actual data instead, there are some general restrictions apply when using deep structures, as opposed to flat structures:

-   Deep structures must be [compatible](javascript:call_link\('abencompatibility.htm'\)) in [assignments](javascript:call_link\('abenvalue_assignments.htm'\)) and [comparisons](javascript:call_link\('abenlogexp_comp.htm'\)).

-   [Substring access](javascript:call_link\('abenoffset_length.htm'\)) using offset/lengths is not possible for deep structures.

-   Deep structures cannot be used as character-like data objects in operand positions and are not included in the generic ABAP type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). This applies in particular to structures that contain [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").

-   When data objects are cast with [ASSIGN](javascript:call_link\('abapassign_casting.htm'\)), the deep components of deep structures must match in type and position in the type of the data object, and in the type of the field symbol.

-   The [work area](javascript:call_link\('abenopen_sql_wa.htm'\)) of ABAP SQL statements cannot contain any deep components other than strings or [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry").

-   The target or source field of the statements [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) and [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) cannot be a deep structure.

-   No internal tables with a deep line type can be passed to a TABLES parameter in a [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"). Deep structures can be passed to the other parameters, as long as they do not contain any reference variables.

Hint

These restrictions are particularly important if single components in existing flat character-like structures are converted to strings, which makes the entire structure deep.

Example

The following two deep structures are not compatible and cannot be converted to each other.

DATA:
  BEGIN OF struct1,
    col1 TYPE c LENGTH 4,
    col2 TYPE REF TO data,
  END OF struct1,
  BEGIN OF struct2,
    col1a TYPE c LENGTH 2,
    col1b TYPE c LENGTH 2,
    col2 TYPE REF TO data,
  END OF struct2.
struct1 = struct2. "Syntax error

Use of Deep DDIC Structures

The same restrictions apply to deep DDIC structures defined in the ABAP Dictionary as to deep structures declared in ABAP programs. Further restrictions apply only when the following language elements that are forbidden in classes in which only flat ABAP Dictionary structures can be specified are used:

-   Statement [TABLES](javascript:call_link\('abaptables.htm'\)) for table work areas.

-   Obsolete use of LIKE instead of TYPE as a reference to data types in the ABAP Dictionary in [type declarations](javascript:call_link\('abaptypes.htm'\)) and [typings](javascript:call_link\('abentyping_complete.htm'\))

-   Obsolete use of [INCLUDE STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))

-   Obsolete use of STRUCTURE to force a structure to [field symbols](javascript:call_link\('abapfield-symbols.htm'\)) or interface parameters of [function modules](javascript:call_link\('abenfunction_parameters.htm'\)) or [subroutines](javascript:call_link\('abapform_parameters.htm'\)).

These language elements are forbidden in classes.

Boxed Components

The substructures of nested structures and structured components of classes or interfaces can be declared as [boxed components](javascript:call_link\('abenboxed_components.htm'\)).

Continue
[Boxed Components](javascript:call_link\('abenboxed_components.htm'\))
[Examples of structures](javascript:call_link\('abenstructure_abexas.htm'\))



**📖 Source**: [abendata_objects_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_structure.htm)

### abenboxed_components.htm

> **📖 Official SAP Documentation**: [abenboxed_components.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_components.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) → 

Boxed Components

Boxed components are structures that are not stored in their superordinate context. Instead, an internal reference that points to the actual structure is stored instead of the structure. A boxed component is therefore always a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component of its context.

It is currently to possible to declare substructures of data types and structured attributes of classes as

-   [static boxes](javascript:call_link\('abenstatic_boxes.htm'\))

These boxes support [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

Hints

-   Boxed components are a middle ground between [static](javascript:call_link\('abenstatic_data_object_glosry.htm'\) "Glossary Entry") and [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"). Their memory requirements are not fixed when the program is started in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), but they can be handled like static data objects with a fixed length.

-   A nested structure that contains a boxed component as a component is always a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry").

-   Structures of the ABAP Dictionary can also contain boxed components. ABAP Dictionary database tables cannot contain any boxed components since their structures must be flat.

-   In [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") classes and objects, boxed components are handled as follows:

-   The class CL\_ABAP\_TYPEDESCR contains the constant TYPEKIND\_BREF for static boxes. The value of these constants is specified as the type of a static box in the component table COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or the attribute table ATTRIBUTES of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR.

-   In the return value of the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or GET\_ATTRIBUTE\_TYPE of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR, boxed components are listed as type description objects of the class CL\_ABAP\_REFDESCR, like reference variables. The method GET\_REFERENCED\_TYPE of this class returns a type description object for the substructure. A type description object of the class CL\_ABAP\_REFDESCR, which describes a boxed component, cannot be used in the statements [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or [ASSIGN CASTING](javascript:call_link\('abapassign_casting.htm'\)).

Continue
[Static Boxes](javascript:call_link\('abenstatic_boxes.htm'\))



**📖 Source**: [abenboxed_components.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_components.htm)

### abenstatic_boxes.htm

> **📖 Official SAP Documentation**: [abenstatic_boxes.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_boxes.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) →  [Boxed Components](javascript:call_link\('abenboxed_components.htm'\)) → 

Static Boxes

Static boxes are [boxed components](javascript:call_link\('abenboxed_components.htm'\)) whose components are known statically, and which are subject to [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry"). Declarations of static boxes generally require less memory for structures that occur multiple times but are rarely used.

The following can currently be declared as static boxes:

-   Substructures of structured data with the addition [BOXED](javascript:call_link\('abaptypes_boxed.htm'\)) of the statement [TYPES](javascript:call_link\('abaptypes.htm'\))

-   Structured attributes of classes or interfaces with the addition [BOXED](javascript:call_link\('abapdata_boxed.htm'\)) of the statement [*\[*CLASS-*\]*DATA](javascript:call_link\('abapdata.htm'\)).

A static box can have one of two states:

-   Initial value sharing
    As long as none of the actions named in the following point have been executed, initial value sharing applies to a static box. The internal reference refers to a type-dependent initial value of the structure, which is stored exactly once for each [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") in its [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry"). The memory requirement in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is determined only by the internal reference and its [administration](javascript:call_link\('abenmemory_consumption.htm'\)).

-   Revoked initial value sharing
    The following actions revoke initial value sharing for a static box:

-   Writes to the static box or one of its components

-   Assigning the static box or one of its components to a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") using [ASSIGN](javascript:call_link\('abapassign.htm'\))

-   Addressing the static box or one of its components using a [data reference](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry")

-   Using a static box or one of its components as an [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") for procedure calls

The internal reference then refers to an instance of the structure in the current internal session. The memory requirement is the same as for a regular structure plus the administration costs for the internal reference.

In initial value sharing, the memory required for the internal session of a static box is not defined at the start of program execution. However, unlike in real [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"), the length of a static box is always known statically. Static boxes can be used in the same way as a regular component of the same type. When a structure that contains a static box is accessed, however, it should be ensured that it is a deep component.

Hints

-   Static boxes can be used to optimize the memory requirement of structures that are used more than once. If, for example, the line structure of an internal table contains substructures, the memory requirement of the substructure accumulates without the use of static boxes for each line, even if the substructure is initial. If static boxes are used, initial substructures do not require multiple memories as long as only reads are performed.

-   In addition to the optimized memory requirements, static boxes generally have a positive impact on runtime performance, since assignments between components for which initial value sharing is active only require the internal reference (and no additional data) to be copied.

-   The statements CLEAR and FREE do not affect a static box that has the initial value sharing state like a write statement and the state is retained. On the other hand, once the initial value sharing state is revoked, these statements do not currently free up any memory and provide the local instance of the static box with type-specific initial values instead.

Example

Declaration of a substructure scarr as a static box.

TYPES:
  BEGIN OF struct,
    comp  TYPE c LENGTH 10,
    scarr TYPE scarr BOXED,
  END OF struct.



**📖 Source**: [abenstatic_boxes.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_boxes.htm)

### abenboxed_components.htm

> **📖 Official SAP Documentation**: [abenboxed_components.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_components.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) → 

Boxed Components

Boxed components are structures that are not stored in their superordinate context. Instead, an internal reference that points to the actual structure is stored instead of the structure. A boxed component is therefore always a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component of its context.

It is currently to possible to declare substructures of data types and structured attributes of classes as

-   [static boxes](javascript:call_link\('abenstatic_boxes.htm'\))

These boxes support [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

Hints

-   Boxed components are a middle ground between [static](javascript:call_link\('abenstatic_data_object_glosry.htm'\) "Glossary Entry") and [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"). Their memory requirements are not fixed when the program is started in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), but they can be handled like static data objects with a fixed length.

-   A nested structure that contains a boxed component as a component is always a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry").

-   Structures of the ABAP Dictionary can also contain boxed components. ABAP Dictionary database tables cannot contain any boxed components since their structures must be flat.

-   In [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") classes and objects, boxed components are handled as follows:

-   The class CL\_ABAP\_TYPEDESCR contains the constant TYPEKIND\_BREF for static boxes. The value of these constants is specified as the type of a static box in the component table COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or the attribute table ATTRIBUTES of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR.

-   In the return value of the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or GET\_ATTRIBUTE\_TYPE of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR, boxed components are listed as type description objects of the class CL\_ABAP\_REFDESCR, like reference variables. The method GET\_REFERENCED\_TYPE of this class returns a type description object for the substructure. A type description object of the class CL\_ABAP\_REFDESCR, which describes a boxed component, cannot be used in the statements [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or [ASSIGN CASTING](javascript:call_link\('abapassign_casting.htm'\)).

Continue
[Static Boxes](javascript:call_link\('abenstatic_boxes.htm'\))



**📖 Source**: [abenboxed_components.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_components.htm)

### abenstructure_abexas.htm

> **📖 Official SAP Documentation**: [abenstructure_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) → 

Examples of structures

Continue
![Example](exa.gif "Example") [Filling a Structure](javascript:call_link\('abenstructure_filling_abexa.htm'\))
![Example](exa.gif "Example") [Structure from ABAP Dictionary](javascript:call_link\('abendictionary_structure_abexa.htm'\))



**📖 Source**: [abenstructure_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_abexas.htm)

### abenstructure_filling_abexa.htm

> **📖 Official SAP Documentation**: [abenstructure_filling_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_filling_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) →  [Examples of structures](javascript:call_link\('abenstructure_abexas.htm'\)) → 

Filling a Structure

The example demonstrates the filling of a nested structure.

Source Code

REPORT demo\_structure\_filling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF name\_type,
        title   TYPE string,
        prename TYPE string,
        surname TYPE string,
      END OF name\_type,
      BEGIN OF street\_type,
        name   TYPE string,
        number TYPE string,
      END OF street\_type,
      BEGIN OF city\_type,
        zipcode TYPE string,
        name    TYPE string,
      END OF city\_type,
      BEGIN OF address\_type,
        name   TYPE name\_type,
        street TYPE street\_type,
        city   TYPE city\_type,
      END OF address\_type.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: name TYPE name\_type,
          addr TYPE address\_type.
    name-title   = \`Mr.\`.
    name-prename = \`Duncan\`.
    name-surname = \`Pea\`.
    addr-name = name.
    addr-street-name   = \`Vegetable Lane\`.
    addr-street-number = \`11\`.
    addr-city-zipcode = \`349875\`.
    addr-city-name    = \`Botanica\`.
    DATA(address) =
      VALUE address\_type(
        name-title   = \`Mr.\`
        name-prename = \`Duncan\`
        name-surname = \`Pea\`
        street = VALUE #( name   = \`Vegetable Lane\`
                          number = \`11\` )
        city   = VALUE #( zipcode = \`349875\`
                          name    = \`Botanica\` ) ).
    ASSERT address = addr.
    cl\_demo\_output=>new(
      )->write( address-name
      )->write( address-street
      )->write( address-city
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the structure from the executable example [Declaring a Nested Structure](javascript:call_link\('abennested_structure_abexa.htm'\)) is defined with [TYPES](javascript:call_link\('abaptypes_struc.htm'\)) as the data type address\_type and used for the data objects addr and address. A separate structure type is also defined for each of the substructures.

If a structure is declared by reference to a structure type as shown here, the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)) cannot be used. Instead, the structure must be filled by accessing the components. In particular, this also applies to the frequently occurring reference to structures of the ABAP Dictionary.

-   In the first part of the method main, the structure addr is filled using the structure component selector. The component name is assigned a prefilled structure. In the components street and city, the components that are nested there are accessed.

-   In the second part of the method main, the structure address is filled with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)), but the structure itself is created using an inline declaration. The parentheses after VALUE show different options for accessing the components of substructures. Either the structure component selector is used again in the same way as for the substructure name, or additional VALUE operators are nested, such as for street and city.

The content of both structures is the same. The value operator VALUE can be used to replace many completely spelled names with parentheses.



**📖 Source**: [abenstructure_filling_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_filling_abexa.htm)

### abendictionary_structure_abexa.htm

> **📖 Official SAP Documentation**: [abendictionary_structure_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_structure_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) →  [Examples of structures](javascript:call_link\('abenstructure_abexas.htm'\)) → 

Structure from ABAP Dictionary

This example demonstrates a structure from the ABAP Dictionary and its use.

Source Code

REPORT demo\_dictionary\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr.
    carrier-carrid = 'UA'.
    cl\_demo\_input=>request( CHANGING field = carrier-carrid ).
    SELECT SINGLE \*
           FROM scarr
           INTO carrier
           WHERE carrid = carrier-carrid.
    cl\_demo\_output=>display( carrier ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Structure types of the ABAP Dictionary are typically used in ABAP programs to define structures or internal tables with a structured line type to process data that is imported from the database. The example shows how a structure carrier local to the program is declared by reference to a database table SCARR defined in the ABAP Dictionary, and used as the target area of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.



**📖 Source**: [abendictionary_structure_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_structure_abexa.htm)

### abenstructure_abexas.htm

> **📖 Official SAP Documentation**: [abenstructure_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenstructure_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_abexas.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) → 

Examples of structures

Continue
![Example](exa.gif "Example") [Filling a Structure](javascript:call_link\('abenstructure_filling_abexa.htm'\))
![Example](exa.gif "Example") [Structure from ABAP Dictionary](javascript:call_link\('abendictionary_structure_abexa.htm'\))
