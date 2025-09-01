  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Structures

Structures are data objects that consist of components of any data type that are stored consecutively in the memory. The data type of a structure is a [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry"):

-   In a program, a structured type or structure is created using the additions [BEGIN OF ... END OF](javascript:call_link\('abaptypes_struc.htm'\)) of the statements TYPES, DATA, and so on. Structured types can also be created dynamically using the [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") methods.

-   In ABAP Dictionary, structured types are [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) or types of [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) or of [DDIC views](javascript:call_link\('abenddic_views.htm'\)).

-   In [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), [CDS entities](javascript:call_link\('abencds_entities.htm'\)) represent structured types.

The following sections give an overview of structures in ABAP.

-   [Kinds of Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_1)

-   [Use of Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_2)

-   [Use of Deep Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_3)

-   [Use of Deep DDIC Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_4)

-   [Boxed Components](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_5)

Programming Guidelines

-   [Names of Structure Components](javascript:call_link\('abenstruc_comp_names_guidl.htm'\) "Guideline")

-   [Do not include components from structures](javascript:call_link\('abenincluding_structures_guidl.htm'\) "Guideline")

Kinds of Structures

Depending on the type of component, structures are named as follows:

-   Flat structures do not contain any [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") components. They only contain components with flat data types, such as elementary types c, n, d, t, decfloat16, decfloat34, f, b, s, i, int8, p, x, utclong, or structures with these types.

-   Flat character-like structures are flat structures with exclusively [character-like](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") components.

-   Nested structures contain at least one [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"). Whether a nested structure is flat or character-like depends on the attributes of all components.

-   Deep structures contain at least one [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component in any nesting level. Possible deep components include strings, internal tables, boxed components, data or object references.

A structure that contains static or dynamic components is formally also a [static](javascript:call_link\('abenstatic_data_object_glosry.htm'\) "Glossary Entry") or [dynamic data object](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"), respectively.

The following figure illustrates a deep structure.

![Figure](abdoc_deep_structure.gif)

Hint

The term "nested structure" must not be confused with the term "deep structure". A nested structure is flat if it contains exclusively flat components and subcomponents. A nested structure is deep when it has at least one deep component or subcomponent.

Example

Nested structure. The substructure is created using a reference to the DDIC structure SCARR for the second component. The components are accessed using the structure component selector (\-).

DATA:
  BEGIN OF struct,
    name  TYPE c LENGTH 10 VALUE 'SCARR',
    scarr TYPE scarr,
  END OF struct.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO CORRESPONDING FIELDS OF @struct-scarr.
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