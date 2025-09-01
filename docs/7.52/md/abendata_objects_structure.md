  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) → 

Structures

Structures are data objects (comprised of components of any data type) that are saved in sequence in the memory. The data type of a structure is a [structured](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructured_type_glosry.htm "Glossary Entry") type or a structure defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").

In a program, a structured type or structure is created using the additions [BEGIN OF ... END OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_struc.htm) additions of the statements TYPES, DATA etc. They can also be created dynamically using [RTTC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrttc_glosry.htm "Glossary Entry") methods. Im ABAP Dictionary, structures appear as [standalone data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures.htm), as types of [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm), of [classic views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_views.htm) or of [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm).

-   [Types of Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_1)

-   [Using Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_2)

-   [Using Deep Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_3)

-   [Using Deep ABAP Dictionary Structures](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_4)

-   [Boxed Components](#@@ITOC@@ABENDATA_OBJECTS_STRUCTURE_5)

Programming Guidelines

-   [Names of structure components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstruc_comp_names_guidl.htm "Guideline")
    
-   [Do not include components from structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenincluding_structures_guidl.htm "Guideline")
    

Types of Structures

Structures are named as follows (depending on the type of the component):

-   Flat structures do not contain any [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") components. They only contain components with flat data types, such as elementary types c, n, d, t, decfloat16, decfloat34, f, i, int8, p, x, plus b, s (or structures with these types).

-   Flat character-like structures are flat structures that contain only [character-like](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") components.

-   Nested structures contain at least one [substructure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstructure_glosry.htm "Glossary Entry"). A nested structure is flat or character-like, depending on the attributes of all of the components.

-   Deep structures contain at least one [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") component, at any nesting level. Possible deep components include strings, internal tables, boxed components, data references, or object references.

A structure that contains static or dynamic components is (formally) a [static](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_data_object_glosry.htm "Glossary Entry") or [dynamic data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), respectively.

The following figure illustrates a deep structure.

![Figure](abdoc_deep_structure.gif)

Note

The term "nested structure" must not be confused with the term "deep structure". A nested structure is flat if it only contains flat components and subcomponents. A nested structure is deep when it has at least one deep component or subcomponent.

Example

Nested structure. The substructure is created using a reference to the dictionary structure SCARR for the second component. Access to the components using the structure component selector (\-).

DATA:
  BEGIN OF struct,
    name  TYPE c LENGTH 10 VALUE 'SCARR',
    scarr TYPE scarr,
  END OF struct.
SELECT SINGLE \*
       FROM scarr
       WHERE  carrid = 'LH'
       INTO CORRESPONDING FIELDS OF @struct-scarr.
cl\_demo\_output=>new(
)->write\_data( struct-name
)->write\_data( struct-scarr-carrid
)->write\_data( struct-scarr-carrname
)->display( ).

Example

Deep structure The following structure contains deep components only.

DATA:
  BEGIN OF struct,
    text TYPE string,
    hex  TYPE xstring,
    tab  TYPE STANDARD TABLE OF i WITH EMPTY KEY,
    dref TYPE REF TO i,
    iref TYPE REF TO if\_demo\_output,
  END OF struct.

Using Structures

Structures are addressed either fully or by component, at appropriate operand positions. The [structure component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") (\-) is used for the latter case. In the case of data reference variables that are typed as a structure, the components of the structure to which the data reference variable points are addressed using the object component selector (\->).

Special [conversion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_struc.htm) and [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands_struc.htm) apply to assignments that involve structures. Flat character-like structures differ in that they can be used like [character-like data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") in many operand positions and included in the generic ABAP type [clike](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm). They can be specified in almost all operand positions where elementary character-like data objects are possible. The ABAP runtime environment then interprets the structure as an elementary field of the type c in the length of the structure. An exception to this are operand positions of [string expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm) and [string functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions.htm).

For the assignement of structure components, there is a special statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding.htm), a constructor operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_corresponding.htm), and a system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_corresponding.htm). The [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause of Open SQL also has an addition CORRESPONDING. The [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) statement has a special variant [COMPONENT OF STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm) for dynamic access to stucture components.

Example

Inline-Deklaration einer Struktur wa in einer SELECT\-Anweisung mit Bezug auf die Datenbanktabelle SCARR im ABAP Dictionary. Zugriff auf die Komponenten der Struktur über den Strukturkomponenten-Selektor (\-). .

SELECT carrid, carrname
       FROM scarr
       INTO @DATA(wa).
  cl\_demo\_output=>write( |{ wa-carrid WIDTH = 5
                         }{ wa-carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Erzeugung einer Struktur als [anonymes Datenobjekt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") mit dem Typ der Datenbanktabelle SCARR im ABAP Dictionary, auf das die Datenreferenzvariable dref zeigt. Verwendung über den [Dereferenzierungsoperator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") (\->\*) als Zielbereich einer SELECT\-Anweisung. Zugriff auf die Komponenten der Struktur über den Objektkomponenten-Selektor (\->).

DATA(dref) = NEW scarr( ).
SELECT \*
       FROM scarr
       INTO @dref->\*.
  cl\_demo\_output=>write( |{ dref->carrid WIDTH = 5
                         }{ dref->carrname }| ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Das folgende Beispiel zeigt, dass sich eine flache Struktur mit rein zeichenartigen Komponenten sowohl wie eine Struktur als auch wie ein zeichenartiges Datenobjekt verhalten kann.

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

The data content of deep structures is not saved in full within the memory bounds of the structure and the deep components are instead just references to the actual data. This means that some general restrictions apply when using deep structures (unlike flat structures):

-   Deep structures must be [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatibility.htm) in [assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) and [comparisons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm).

-   [Substring access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) using offset/lengths is not possible for deep structures.

-   Deep structures cannot be used as character-like data objects in operand positions and are not included in the generic ABAP type [clike](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm). This applies in particular to structures that contain [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_glosry.htm "Glossary Entry").

-   When data objects are cast with [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm), the type, position in the type of the data object, and the position in the type of the field symbol must match for deep components in deep structures.

-   The [work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_wa.htm) of Open SQL statements cannot contain any deep components other than strings or [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry")

-   The target or source field of the statements [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) and [TRANSFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptransfer.htm) cannot be a deep structure.

-   Internal tables with a deep row type cannot be passed to a TABLES parameter in a [remote function call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_function_call_glosry.htm "Glossary Entry"). Deep structures can be passed to the other parameters, as long as they do not contain any reference variables.

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
struct1 = struct2. "syntax error

Using Deep ABAP Dictionary Structures

The same restrictions apply to deep structures defined in ABAP Dictionary as to deep structures defined in ABAP programs. Further restrictions apply only when the following language elements forbidden in classes are used (only flat ABAP Dictionary structures can be specified in classes):

-   Statement [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) for table work areas

-   Obsolete use of LIKE instead of TYPE as a reference to data types in ABAP Dictionary with [type declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm) and [typings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm)

-   Obsolete use of [INCLUDE STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm)

-   Obsolete forcing of a structure STRUCTURE to [field symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfield-symbols.htm) or interface parameters of [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm) or [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform_parameters.htm)

Boxed Components

The substructures of nested structures and structured components of classes or interfaces can be declared as [boxed components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_components.htm).

This translation does not reflect the current version of the documentation.
Continue
[Boxed Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_components.htm)
[Examples of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_abexas.htm)