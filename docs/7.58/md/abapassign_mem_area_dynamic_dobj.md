---
title: "Syntax"
description: |
  ...  (dobj_name)    dref->    dobj INCREMENT inc  ... Alternatives: 1. ... (dobj_name)(#!ABAP_ALTERNATIVE_1@1@) 2. ... dref->(#!ABAP_ALTERNATIVE_2@2@) 3. ... dobj INCREMENT inc(#!ABAP_ALTERNATIVE_3@3@) Effect These variants for specifying the memory area mem_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_dobj.htm"
abapFile: "abapassign_mem_area_dynamic_dobj.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "field-symbol", "abapassign", "mem", "area", "dynamic", "dobj"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20dynamic_dobj%2C%20ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN, dynamic\_dobj

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_shortref.htm)

Syntax

... *{* (dobj\_name) *}*
  *|* *{* dref->\* *}*
  *|* *{* dobj INCREMENT inc *}* ...

Alternatives:

[1\. ... (dobj\_name)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... dref->\*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... dobj INCREMENT inc](#!ABAP_ALTERNATIVE_3@3@)

Effect

These variants for specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) dynamically are used to dynamically access data objects.

In an inline declaration of the field symbol using [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm), its typing is performed with the generic type data.

In these variants, the statement ASSIGN sets the return code sy-subrc. If the assignment is successful, sy-subrc is set to 0, otherwise to 4. In these variants, no exception occurs in case of an unsuccessful assignment. If the assignment is not successful, the state of the field symbol depends on the addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_else_unassign.htm):

-   If ELSE UNASSIGN is not specified, the field symbol keeps its previous state.
-   If ELSE UNASSIGN is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the ASSIGN statement.

Hint

If ELSE UNASSIGN is not specified, it is not sufficient to evaluate the [predicate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_assigned.htm) but sy-subrc must be checked. If ELSE UNASSIGN is specified, the predicate expression as well as sy-subrc can be evaluated.

Alternative 1   

... (dobj\_name)

Effect

In this dynamic variant of mem\_area, the memory area is not specified [directly](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_static_dobj.htm), but as content of a character-like data object (dobj\_name) in parentheses. The following can be specified for dobj\_name:

-   Literal or constants
    
    If the data object dobj\_name is specified as a character literal or as a constant, it can be evaluated statically, and the specified data object is recognized as the used object.
    
-   Variable
    
    If the data object dobj\_name is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, dobj\_name is not evaluated until runtime in both cases. The name in dobj\_name is structured in exactly the same way as if specified directly: When executing the statement, the content of dobj\_name must be the name of a data object which may contain offsets and lengths, structure component selectors, and other [component selectors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_selector_glosry.htm "Glossary Entry") for assigning structure components, attributes in classes or attributes in objects. The content of dobj\_name does not have to be in uppercase letters.

dobj\_name can contain a chain of names consisting of component selectors. For an individual name or if the first name is followed by an object component selector (\->), the specified data object is searched for according to the following hierarchy:

1.  If the statement is located in a [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry"), the system searches for the local data objects of the procedure.
2.  If the statement is located in a [method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry"), the system searches in the visible attributes of a class in the method. In instance methods, this means a search of the [static type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_type_glosry.htm "Glossary Entry") of me (special case of cref->(attr\_name) in [dynamic\_access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm)).
3.  The system searches in the global data of the current program.
4.  The system searches in the interface work areas of the [main program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current program group declared using TABLES.
5.  If the statement is in an [instance method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_method_glosry.htm "Glossary Entry"), the system searches in the [dynamic type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_type_glosry.htm "Glossary Entry") of me (special case of cref->(attr\_name) in [dynamic\_access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm)).

If the data object is found and the name is followed by an object component selector (\->), the search for the following names is continued from left to right, as described under [dynamic\_access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm).

If the first name is followed by a class component selector (\=>), the specified class is searched for, as described under [dynamic\_access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm), and the search is then continued accordingly from left to right.

Hints

-   This variant should not be used any more. Especially for accessing structure components, [other variants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_dynamic_components.htm) are preferable.
-   Writable expressions [writable\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm) cannot be specified dynamically in dobj\_name.
-   For internal use only, the name in dobj\_name can also have the form (PROG)DOBJ, where PROG is the name of an ABAP program and DOBJ the name of a global data object of this program, whereby the name is not case-sensitive. If the program PROG is loaded into the same [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") as the current program when the statement ASSIGN is executed, the data object DOBJ is searched for in this program and the field symbol points to this data object if the assignment was successful.
-   Dynamically specifying a structure component using a structure component selector is less effective than using the addition COMPONENT OF STRUCTURE.
-   For the latter see the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_component_abexa.htm).
-   In an obsolete variant, the addition [TABLE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_table_field.htm) can be specified before dobj\_name to restrict the search to table work areas.
-   If an attribute of a class of a different program is specified in dobj\_name using an [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") and followed by the class component selector (\=>), it is loaded into a new [additional program group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") or into the current [program group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_group_glosry.htm "Glossary Entry"), depending on the program type, if it has not yet been loaded. Any existing [program constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") are not executed, however, unlike in a real [dynamic\_access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm).

Example

Dynamic output of the content of any system field. The validity of the input is checked before it is dynamically assigned with (name) to field symbol syfield using classes of [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") for structure SYST

DATA(name) = \`sy-uzeit\`.
cl\_demo\_input=>request( EXPORTING text = \`System field\`
                        CHANGING field = name ).
name = to\_upper( name ).
FINAL(components) = CAST cl\_abap\_structdescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'SYST' ) )->components.
IF NOT line\_exists( components\[ name = replace( val = name
                                sub  = \`SY-\`
                                with = \`\` ) \] ).
  cl\_demo\_output=>display( \`Unknown system field\` ).
  RETURN.
ENDIF.
ASSIGN (name) TO FIELD-SYMBOL(<syfield>).
IF sy-subrc = 0.
  cl\_demo\_output=>display( |{ name }: { <syfield> }| ).
ENDIF.

Alternative 2   

... dref->\*

Effect

When specifying a dereferenced data reference dref for mem\_area using the dereferencing operator \->\*, the memory area of the data object is assigned to the field symbol to which dref points. If the reference variable dref does not reference a data object, the assignment is not performed and sy-subrc is set to 4.

Unlike all other operand positions, where a data reference that does not point to a data object raises an exception, no exception occurs in the statement ASSIGN and sy-subrc is set to 4.

Example

Assigning a dereferenced data reference that is initial. Here, no exception occurs.

DATA dref TYPE REF TO data.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>) ELSE UNASSIGN.
IF sy-subrc <> 0.
  ...
ENDIF.

Alternative 3   

... dobj INCREMENT inc

Effect

This expression for mem\_area assigns a memory area to the field symbol that has exactly the same length as the memory area of dobj and is incremented inc times this length in reference to the memory area of dobj. inc expects a numeric data object. A data object or a field symbol must be specified directly for dobj. Offset or length specifications or the dereferencing of a data reference are not possible. The field symbol cannot be declared via an inline declaration [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm).

Hint

The dynamic ASSIGN variant with INCREMENT is designed for sequential access to similar memory areas that are located at regular intervals after each other, such as consecutive structure components of the same data type. In all other cases, ASSIGN ... INCREMENT should be used carefully. Note in particular:

-   Usually the addition [RANGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_range.htm) must be used to defined the area, within which it is possible to work with INCREMENT.
-   The assigned memory area is handled using the data type dobj if the addition CASTING is not specified in [casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm). This means that an implicit casting of the assigned memory areas to the data type of dobj is performed.
-   The [typing check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm) also refers to dobj, but is performed only when the statement is executed.
-   Runtime errors always occur if the following general rule is violated: If [deep](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeep_glosry.htm "Glossary Entry") data objects that are in the assigned memory area do not match the typing in their type and position.

Example

After the ASSIGN statement, the field symbol points to the fourth component col4. See the example for the addition [RANGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_range.htm).

DATA:
  BEGIN OF struct,
    col1 TYPE string VALUE \`COL1\`,
    col2 TYPE string VALUE \`COL2\`,
    col3 TYPE string VALUE \`COL3\`,
    col4 TYPE string VALUE \`COL4\`,
    col5 TYPE string VALUE \`COL5\`,
  END OF struct.
FIELD-SYMBOLS <fs> TYPE string.
ASSIGN struct-col1 INCREMENT 3 TO <fs> RANGE struct.
cl\_demo\_output=>display( <fs> ).

Executable Example

[Field Symbols, ASSIGN INCREMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_increment_abexa.htm)

Continue
![Example](exa.gif "Example") [Field Symbols, ASSIGN INCREMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_increment_abexa.htm)