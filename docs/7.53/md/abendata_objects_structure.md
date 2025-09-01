  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Structures

Structures are data objects (comprised of components of any data type) that are saved one after the other in the memory. The data type of a structure is a [structured](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") type or a structure defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

In a program, a structured type or structure is created using the additions [BEGIN OF ... END OF](javascript:call_link\('abaptypes_struc.htm'\)) of the statements TYPES, DATA and so on. Types can be created dynamically using the [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") methods. In ABAP Dictionary, structures appear as [standalone data types](javascript:call_link\('abenddic_structures.htm'\)), as types of [database tables](javascript:call_link\('abenddic_database_tables.htm'\)), of [classic views](javascript:call_link\('abenddic_classical_views.htm'\)) or of [CDS entities](javascript:call_link\('abenddic_cds_entities.htm'\)).

-   [Types of Structures](#abendata-objects-structure-1--------using-structures---@ITOC@@ABENDATA_OBJECTS_STRUCTURE_2)

-   [Using Deep Structures](#abendata-objects-structure-3--------using-deep-abap-dictionary-structures---@ITOC@@ABENDATA_OBJECTS_STRUCTURE_4)

-   [Boxed Components](#abendata-objects-structure-5---programming-guidelines-------names-of-structure-components--javascript-call-link---abenstruc-comp-names-guidl-htm-----guideline-------------do-not-include-components-from-structures--javascript-call-link---abenincluding-structures-guidl-htm-----guideline---------types-of-structures--structures-are-named-as-follows--depending-on-the-type-of-the-component--------flat-structures-do-not-contain-any--deep--javascript-call-link---abendeep-glosry-htm-----glossary-entry---components--they-only-contain-components-with-flat-data-types--such-as-elementary-types-c--n--d--t--decfloat16--decfloat34--f--i--int8--p--x--plus-b--s--or-structures-with-these-types--------flat-character-like-structures-are-flat-structures-that-contain-only--character-like--javascript-call-link---abencharlike-data-object-glosry-htm-----glossary-entry---components-------nested-structures-contain-at-least-one--substructure--javascript-call-link---abensubstructure-glosry-htm-----glossary-entry----a-nested-structure-is-flat-or-character-like--depending-on-the-attributes-of-all-components-------deep-structures-contain-at-least-one--deep--javascript-call-link---abendeep-glosry-htm-----glossary-entry---component--at-any-nesting-level--possible-deep-components-include-strings--internal-tables--boxed-components--data-or-object-references---a-structure-that-contains-static-or-dynamic-components-is--formally--a--static--javascript-call-link---abenstatic-data-object-glosry-htm-----glossary-entry---or--dynamic-data-object--javascript-call-link---abendynamic-data-object-glosry-htm-----glossary-entry----respectively---the-following-figure-illustrates-a-deep-structure-----figure--abdoc-deep-structure-gif---note--the-term--nested-structure--must-not-be-confused-with-the-term--deep-structure---a-nested-structure-is-flat-if-it-only-contains-flat-components-and-subcomponents--a-nested-structure-is-deep-when-it-has-at-least-one-deep-component-or-subcomponent---example--nested-structure--the-substructure-is-created-using-a-reference-to-the-dictionary-structure-scarr-for-the-second-component--the-components-are-accessed-using-the-structure-component-selector--------data----begin-of-struct------name--type-c-length-10-value--scarr-------scarr-type-scarr----end-of-struct--select-single-----------from-scarr--------where-carrid----lh---------into-corresponding-fields-of-struct-scarr.
cl\_demo\_output=>new(
)->write\_data( struct-name
)->write\_data( struct-scarr-carrid
)->write\_data( struct-scarr-carrname
)->display( ).

Example

Deep structure. The following structure contains deep components only.

DATA:
  BEGIN OF struct,
    text TYPE string,
    hex  TYPE xstring,
    tab  TYPE STANDARD TABLE OF i WITH EMPTY KEY,
    dref TYPE REF TO i,
    iref TYPE REF TO if\_demo\_output,
  END OF struct.

Using Structures

Structures are addressed either fully or by component, at appropriate operand positions. The [structure component selector](javascript:call_link\('abenstructure_component_sel_glosry.htm'\) "Glossary Entry") (\-) is used for the latter case. In the case of data reference variables that are typed as a structure, the components of the structure to which the data reference variable points are addressed using the object component selector (\->).

Special [conversion](javascript:call_link\('abenconversion_struc.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)) apply to assignments that involve structures. Flat character-like structures differ in that they can be used like [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") in many operand positions and included in the generic ABAP type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). They can be specified in almost all operand positions where elementary character-like data objects are possible. The ABAP runtime environment then interprets the structure as an elementary field of the type c in the length of the structure. An exception to this are operand positions of [string expressions](javascript:call_link\('abapcompute_string.htm'\)) and [string functions](javascript:call_link\('abenstring_functions.htm'\)).

For the assignment of structure components, there is a special statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)), a constructor operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)), and a system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)). The [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause of ABAP SQL also has an addition CORRESPONDING. The statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) has a special variant [COMPONENT OF STRUCTURE](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) for dynamic access to structure components.

Example

Inline declaration of a structure wa in a SELECT statement with reference to the database table SCARR in ABAP Dictionary. The components of the structure are accessed using the structure component selector (\-). .

SELECT carrid, carrname
       FROM scarr
       INTO @DATA(wa).
  cl\_demo\_output=>write( |{ wa-carrid WIDTH = 5
                         }{ wa-carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Creates a structure as an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") with the type of the database table SCARR in ABAP Dictionary pointed to by the data reference variable dref. Used as the target area of a SELECT statement by applying the [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") (\->\*). The components of the structure are accessed using the object component selector (\->).

DATA(dref) = NEW scarr( ).
SELECT \*
       FROM scarr
       INTO @dref->\*.
  cl\_demo\_output=>write( |{ dref->carrid WIDTH = 5
                         }{ dref->carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

The following example demonstrates that a flat structure with character-like-only components can behave like a structure and like a character-like data object.

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

Using Deep Structures

The data content of deep structures is not saved completely within the memory bounds of the structure and the deep components are just references to the actual data instead. This means that some general restrictions apply when using deep structures (unlike flat structures):

-   Deep structures must be [compatible](javascript:call_link\('abencompatibility.htm'\)) in [assignments](javascript:call_link\('abenvalue_assignments.htm'\)) and [comparisons](javascript:call_link\('abenlogexp_comp.htm'\)).

-   [Substring access](javascript:call_link\('abenoffset_length.htm'\)) using offset/lengths is not possible for deep structures.

-   Deep structures cannot be used as character-like data objects in operand positions and are not included in the generic ABAP type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). This applies in particular to structures that contain [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry").

-   When data objects are cast with [ASSIGN](javascript:call_link\('abapassign_casting.htm'\)), the type, position in the type of the data object, and the position in the type of the field symbol must match for deep components in deep structures.

-   The [work area](javascript:call_link\('abenopen_sql_wa.htm'\)) of ABAP SQL statements cannot contain any deep components other than strings or [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry").

-   The target or source field of the statements [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) and [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) cannot be a deep structure.

-   Internal tables with a deep row type cannot be passed to a TABLES parameter in a [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"). Deep structures can be passed to the other parameters, as long as they do not contain any reference variables.

Note

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

Using Deep ABAP Dictionary Structures

The same restrictions apply to deep structures defined in ABAP Dictionary as to deep structures defined in ABAP programs. Further restrictions apply only when the following language elements forbidden in classes (in which only flat ABAP Dictionary structures can be specified) are used:

-   Statement [TABLES](javascript:call_link\('abaptables.htm'\)) for table work areas.

-   Obsolete use of LIKE instead of TYPE as a reference to data types in ABAP Dictionary with [type declarations](javascript:call_link\('abaptypes.htm'\)) and [typings](javascript:call_link\('abentyping_complete.htm'\))

-   Obsolete use of [INCLUDE STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))

-   Obsolete use of STRUCTURE to force a structure to [field symbols](javascript:call_link\('abapfield-symbols.htm'\)) or interface parameters of [function modules](javascript:call_link\('abenfunction_parameters.htm'\)) or [subroutines](javascript:call_link\('abapform_parameters.htm'\)).

Boxed Components

The substructures of nested structures and structured components of classes or interfaces can be declared as [boxed components](javascript:call_link\('abenboxed_components.htm'\)).

Continue
[Boxed Components](javascript:call_link\('abenboxed_components.htm'\))
[Examples of structures](javascript:call_link\('abenstructure_abexas.htm'\))