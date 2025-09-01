---
title: "Structures"
description: |
  Structures are data objects that consist of components of any data type that are stored consecutively in the memory. The data type of a structure is a structured type(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm 'Glossary Entry'): -   In a program, a st
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects_structure.htm"
abapFile: "abendata_objects_structure.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abendata", "objects", "structure"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Structures, ABENDATA_OBJECTS_STRUCTURE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Structures

Structures are data objects that consist of components of any data type that are stored consecutively in the memory. The data type of a structure is a [structured type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm "Glossary Entry"):

-   In a program, a structured type or structure is created using the additions [BEGIN OF ... END OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_struc.htm) of the statements TYPES, DATA, and so on. Structured types can also be created dynamically using the [RTTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") methods.
-   In ABAP Dictionary, structured types are [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm) or types of [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) or of [DDIC views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm).
-   In [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry"), [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) represent structured types.

The following sections give an overview of structures in ABAP.

-   [Kinds of Structures](#abendata-objects-structure-1-------use-of-structures---@ITOC@@ABENDATA_OBJECTS_STRUCTURE_2)
    -   [Use of Deep Structures](#abendata-objects-structure-3-----------use-of-deep-ddic-structures---@ITOC@@ABENDATA_OBJECTS_STRUCTURE_4)
-   [Boxed Components](#abendata-objects-structure-5---programming-guidelines-------names-of-structure-components--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenstruc-comp-names-guidl-htm--guideline--------do-not-include-components-from-structures--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenincluding-structures-guidl-htm--guideline----kinds-of-structures-----depending-on-the-type-of-component--structures-are-named-as-follows-------flat-structures-do-not-contain-any--deep--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abendeep-glosry-htm--glossary-entry---components--they-only-contain-components-with-flat-data-types--such-as-elementary-types-c--n--d--t--decfloat16--decfloat34--f--b--s--i--int8--p--x--utclong--or-structures-with-these-types------flat-character-like-structures-are-flat-structures-with-exclusively--character-like--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abencharlike-data-object-glosry-htm--glossary-entry---components------nested-structures-contain-at-least-one--substructure--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abensubstructure-glosry-htm--glossary-entry----whether-a-nested-structure-is-flat-or-character-like-depends-on-the-properties-of-all-components------deep-structures-contain-at-least-one--deep--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abendeep-glosry-htm--glossary-entry---component-in-any-nesting-level--possible-deep-components-include-strings--internal-tables--boxed-components--data-or-object-references---a-structure-that-contains-static-or-dynamic-components-is-formally-also-a--static--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenstatic-data-object-glosry-htm--glossary-entry---or--dynamic-data-object--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abendynamic-data-object-glosry-htm--glossary-entry----respectively---the-following-figure-illustrates-a-deep-structure-----figure--abdoc-deep-structure-gif---hints------the-term--nested-structure--must-not-be-confused-with-the-term--deep-structure---a-nested-structure-is-flat-if-it-contains-exclusively-flat-components-and-subcomponents--a-nested-structure-is-deep-when-it-has-at-least-one-deep-component-or-subcomponent------generally--the-components-of-a-structure-are-not-stored-directly-one-after-the-other-in-memory-and--alignment-gaps--https---help-sap-com-doc-abapdocu-757-index-htm-7-57-en-us-abenalignment-gap-glosry-htm--glossary-entry---may-occur------the-maximum-number-of-bytes-a-structure-can-contain-including-alignment-gaps-is-the-maximum-length-of-a-field-of-type-x--which-is-stored-in-the-constant-type--x--max--length-of-the-class-cl--abap--elemdescr--components-that-are-reference-variables--strings-or-internal-tables-each-use-8-bytes---example--nested-structure--the-substructure-is-created-using-a-reference-to-the-ddic-structure-scarr-for-the-second-component--the-components-are-accessed-using-the-structure-component-selector--------data----begin-of-struct------name--type-c-length-10-value--scarr-------scarr-type-scarr----end-of-struct--select-single-----------from-scarr--------where-carrid----lh---------into-corresponding-fields-of-struct-scarr.
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

Structures are addressed either completely or by component in appropriate operand positions. The [structure component selector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") (\-) is used for the latter. In the case of data reference variables that are typed as a structure, the components of the structure to which the data reference variable points can also be addressed using the object component selector (\->).

Special [conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_struc.htm) and [comparison rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_struc.htm) apply to assignments that involve structures. Flat character-like structures have the special feature that they can be used like [character-like data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") in many operand positions and included in the generic ABAP type [clike](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm). They can be specified in almost all operand positions where elementary character-like data objects are possible. The ABAP runtime framework then interprets the structure as an elementary field of the type c in the length of the structure. An exception to this are operand positions of [string expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) and [string functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) with named arguments.

For the assignment of structure components, there is a special statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm), a constructor operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expr_corresponding.htm), and a system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding.htm). The [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause of ABAP SQL also has an addition CORRESPONDING. The statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) has a special variant [COMPONENT OF STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm) for dynamic access to structure components.

Example

Inline declaration of a structure wa in a SELECT statement with reference to the DDIC database table SCARR. The components of the structure are accessed using the structure component selector (\-).

SELECT carrid, carrname
       FROM scarr
       INTO @FINAL(wa).
  cl\_demo\_output=>write( |{ wa-carrid WIDTH = 5
                         }{ wa-carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Creation of a structure as an [anonymous data object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") with the type of the DDIC database table SCARR in the ABAP Dictionary to which the data reference variable dref points. Used as the target area of a SELECT statement using the [dereferencing operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") (\->\*). The components of the structure are accessed using the object component selector (\->).

FINAL(dref) = NEW scarr( ).
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

-   Deep structures must be [compatible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompatibility.htm) in [assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) and [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm).
-   [Substring access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length.htm) using offset/lengths is not possible for deep structures.
-   Deep structures cannot be used as character-like data objects in operand positions and are not included in the generic ABAP type [clike](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm). This applies in particular to structures that contain [strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_glosry.htm "Glossary Entry").
-   When data objects are cast with [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_casting.htm), the deep components of deep structures must match in type and position in the type of the data object, and in the type of the field symbol.
-   The [work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_wa.htm) of ABAP SQL statements cannot contain any deep components other than strings or [LOB handles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_handle_glosry.htm "Glossary Entry").
-   The target or source field of the statements [OPEN DATASET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset.htm) and [TRANSFER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptransfer.htm) cannot be a deep structure.
-   No internal tables with a deep line type can be passed to a TABLES parameter in a [remote function call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_function_call_glosry.htm "Glossary Entry"). Deep structures can be passed to the other parameters, as long as they do not contain any reference variables.

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

-   Statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) for table work areas.
-   Obsolete use of LIKE instead of TYPE as a reference to data types in the ABAP Dictionary in [type declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) and [typings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_complete.htm)
-   Obsolete use of [INCLUDE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type.htm)
-   Obsolete use of STRUCTURE to force a structure to [field symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfield-symbols.htm) or interface parameters of [function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_parameters.htm) or [subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm).

These language elements are forbidden in classes.

Boxed Components   

The substructures of nested structures and structured components of classes or interfaces can be declared as [boxed components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_components.htm).

Continue
[Boxed Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_components.htm)
[Examples of Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_abexas.htm)