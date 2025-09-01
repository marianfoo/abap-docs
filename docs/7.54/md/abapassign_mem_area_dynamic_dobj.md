---
title: "Syntax"
description: |
  ...  (name)    dref->    dobj INCREMENT inc    COMPONENT comp OF STRUCTURE struc  ... Alternatives: 1. ... (name)(#!ABAP_ALTERNATIVE_1@1@) 2. ... dref->(#!ABAP_ALTERNATIVE_2@2@) 3. ... dobj INCREMENT inc(#!ABAP_ALTERNATIVE_3@3@) 4. ... COMPONENT comp O
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm"
abapFile: "abapassign_mem_area_dynamic_dobj.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abapassign", "mem", "area", "dynamic", "dobj"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm) →  [ASSIGN - mem\_area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area.htm) → 

ASSIGN - dynamic\_dobj

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_shortref.htm)

Syntax

... *{* (name) *}*
  *|* *{* dref->\* *}*
  *|* *{* dobj INCREMENT inc *}*
  *|* *{* COMPONENT comp OF STRUCTURE struc *}* ...

Alternatives:

[1\. ... (name)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... dref->\*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... dobj INCREMENT inc](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... COMPONENT comp OF STRUCTURE struc](#!ABAP_ALTERNATIVE_4@4@)

Effect

These alternatives to specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm) dynamically are used to dynamically access data objects.

In an inline declaration of the field symbol using [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm), its typing is performed with the generic type data.

In these variants, the statement ASSIGN sets the return code sy-subrc. If the assignment is successful, sy-subrc is set to 0; if not, it is set to 4. If the assignment is not successful, the field symbol keeps its previous state. It is therefore not enough just to evaluate the [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_assigned.htm) in a dynamic ASSIGN; sy-subrc needs to be checked as well.

Alternative 1

... (name)

Effect

In this dynamic variant of mem\_area, the memory area is not specified directly, but as content of a character-like data object (name) in parentheses. The following can be specified for name:

-   Literal or constants

If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified data object is identified as the used object.

-   Variable

If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases). The name in name is structured in the same way as if specified directly: When executing the statement, the content of name must be the name of a data object which may contain offsets and lengths, structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects. The content of name does not have to be in uppercase letters.

name can contain a chain of names consisting of component selectors. For an individual name or if the first name is followed by an object component selector (\->), the specified data object is searched for according to the following hierarchy:

1.  If the statement is located in a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"), the local data objects of the procedure are scanned.
    
2.  If the statement is located in a [method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry"), the attributes visible in the method within the class are scanned. In instance methods, the [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") of me (special case of cref->(attr\_name) in [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm)) is scanned.
    
3.  The global data of the current program is scanned.
    
4.  The interface work areas of the [main program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current program group declared using TABLES are scanned.
    
5.  If the statement is located in an [instance method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_method_glosry.htm "Glossary Entry"), the [dynamic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_type_glosry.htm "Glossary Entry") of me (special case of cref->(attr\_name) in [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm)) is scanned.
    

If the data object is found and the name is followed by an object component selector (\->), the search for the following names is continued from left to right, as described under [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm).

If the first name is followed by a class component selector (\=>), the specified class is searched for, as described under [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm), and the search is then continued accordingly from left to right.

Notes

-   Dynamically specifying a structure component using a structure component selector produces worse performance than using the addition COMPONENT OF STRUCTURE (see this [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassign_component_abexa.htm)).
    
-   If an attribute of a class in a different program is specified in name using an [absolute type name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") and followed by the class component selector (\=>), it is loaded into a new [additional program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") or into the current [program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_group_glosry.htm "Glossary Entry") (if not already loaded), depending on the program type. Any existing [program constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") are not executed, however, unlike in a genuine [dynamic\_access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_access.htm).
    
-   For internal use only, the name in name can also have the form "(PROG)DOBJ", where "PROG" is the name of an ABAP program and "DOBJ" the name of a global data object of this program (these names are not case-sensitive). If the program "PROG" is loaded into the same [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") as the current program when the statement ASSIGN is executed, the data object "DOBJ" is found in this program and the field symbol points to this data object if the assignment was successful.
    
-   In an obsolete variant, the addition [TABLE FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_table_field.htm) can be specified before name. This restricts the search to table work areas.
    

Example

Dynamic output of the content of any system field. The validity of the input is checked before it is dynamically assigned with (name) to field symbol syfield via an application of classes of [RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") on structure SYST

DATA(name) = \`sy-uzeit\`.
cl\_demo\_input=>request( EXPORTING text = \`System field\`
                        CHANGING field = name ).
name = to\_upper( name ).
DATA(components) = CAST cl\_abap\_structdescr(
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

Unlike all other operand positions for which the data reference dref must be fully typed for dereferencing, dref can be typed generically in the statement ASSIGN using TYPE REF TO data. Dereferencing of a data reference that does not point to a data object also raises an non-handleable exception in all cases except in the statement ASSIGN.

Example

Creates a local copy of a global data object g\_dat in a procedure using a data reference dref and a local field symbol <l\_dat>.

DATA g\_dat TYPE string VALUE '...'.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <l\_dat> TYPE any.
    CREATE DATA dref LIKE g\_dat.
    ASSIGN dref->\* TO <l\_dat>.
    <l\_dat> = g\_dat.
    cl\_demo\_output=>display\_data( <l\_dat> ).
  ENDMETHOD.
ENDCLASS.

Alternative 3

... dobj INCREMENT inc

Effect

This expression for mem\_area assigns a memory area to the field symbol that has the same length as the memory area of dobj and is incremented inc times this length in reference to the memory area of dobj. inc expects a numeric data object. A data object or a field symbol must be specified directly for dobj. Offset or length specifications or the dereferencing of a data reference are not possible. The field symbol cannot be declared via an inline declaration [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm).

Notes

The dynamic ASSIGN variant with INCREMENT is designed for sequential access to similar memory areas that are located at regular intervals after each other, such as consecutive structure components of the same data type. In all other cases, ASSIGN ... INCREMENT should be used carefully. Note the following in particular:

-   Usually the addition [RANGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_range.htm) must be used to defined the area, within which it is possible to work with INCREMENT.
    
-   The assigned memory area is handled using the data type dobj if the addition CASTING is not specified in [casting\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_casting.htm). This means that an implicit casting of the assigned memory areas to the data type of dobj is performed.
    
-   The [typing check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check_general.htm) also refers to dobj, but is performed only when the statement is executed.
    
-   Runtime errors always occur if the following general rule is violated: If [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") data objects that are in the assigned memory area do not match the typing as far as type and position are concerned.
    

Example

After the ASSIGN statement, the field symbol points to the fourth component col4. See the example for the addition [RANGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_range.htm).

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

[Field Symbols, ASSIGN INCREMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassign_increment_abexa.htm)

Alternative 4

... COMPONENT comp OF STRUCTURE struc

Effect

This expression for mem\_area assigns a memory area of a component comp of a structure struc to the field symbol.

struc is a [result position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry"). The structure can be specified as a data object or as a [writable expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry"). If struc is specified as an expression, its result must be structured. If struc is specified as a data object, the result does not need to be structured.

comp is a [character-like](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") or [numeric expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The evaluation depends on the data type of comp:

-   If the field comp has a text-like type (c or string) or the type of a [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry") structure, which exclusively contains character-like components, the field content is interpreted as the name of the component. The name must be in uppercase letters. It may contain offsets and lengths, structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects.
    
-   If the field comp has a non-text-like elementary type, the content is converted to the type i and interpreted as the position of the component in the structure. If the value of comp is 0, the memory area of the entire structure is assigned to the field symbol.
    
-   If comp has a different type, a syntax error or runtime error occurs.
    

If an operand struc specified as a data object is not a structure or the specified component is not found, the assignment is not made and sy-subrc is set to 4.

Notes

-   Identifying a component by its name is far more performance-intensive than using its position, since far more internal processes are involved. Using COMPONENTS OF, however, always produces better performance than specifying the name after the structure component selector within a fully dynamically specified component in a parenthesized data object name (see this [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassign_component_abexa.htm)).
    
-   If the structure struc is specified as a [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") and the corresponding row is not found, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised.
    
-   Writable expressions can be specified for struc but no other expressions, since these can have a non-temporary result. Assigning a component of a temporary structure to a field symbol would not make sense.
    
-   If struc is specified, it is advisable to specify only structures as a data object and to check this in advance. Just evaluating sy-subrc is not enough to determine why an assignment was not successful.
    

Example

Assignment of all components of a structure to a field symbol in a loop. In every loop pass, the component is assigned whose position is determined by the loop index.

SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO  @DATA(wa).
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE wa TO FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( <fs> ).
ENDDO.
cl\_demo\_output=>display( ).

Example

The following two methods show the dynamic assignment of the components of a structure (passed to the parameter para of the methods) to a field symbol <comp>.

-   The first implementation does not use [RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). The statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm) is used to check whether the passed data object is a structure. The components are then assigned one after the other to the field symbol in a DO loop.
    
-   The second implementation uses [RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). A [down cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry") of the type description object to the class CL\_ABAP\_STRUCTDESCR for the passed data object ensures that the object is a structure. A loop across the component table COMPONENTS assigns the components to the field symbol via their names.
    

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS: meth1 IMPORTING para TYPE data,
             meth2 IMPORTING para TYPE data.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth1.
    DESCRIBE FIELD para TYPE DATA(dtype).
    IF dtype <> 'u' AND dtype <> 'v'.
      RETURN.
    ENDIF.
    DO.
      ASSIGN COMPONENT sy-index
        OF STRUCTURE para TO FIELD-SYMBOL(<comp>).
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      ...
    ENDDO.
  ENDMETHOD.
  METHOD meth2.
    TRY.
        DATA(struct\_descr) = CAST cl\_abap\_structdescr(
          cl\_abap\_typedescr=>describe\_by\_data( para ) ).
      CATCH cx\_sy\_move\_cast\_error.
        RETURN.
    ENDTRY.
    LOOP AT struct\_descr->components
            ASSIGNING FIELD-SYMBOL(<comp\_descr>).
      ASSIGN COMPONENT <comp\_descr>-name
             OF STRUCTURE para TO FIELD-SYMBOL(<comp>).
      ...
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Example

Assigns a component of a row of an internal table to a field symbol.

TYPES:
  BEGIN OF struc,
    col1 TYPE i,
    col2 TYPE i,
  END OF struc.
DATA itab TYPE STANDARD TABLE OF struc WITH EMPTY KEY.
itab = VALUE #( ( col1 = 1  col2 = 2 )
                ( col1 = 3 col2 = 4 ) ).
ASSIGN COMPONENT 2 OF STRUCTURE itab\[ 2 \] TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>display( <fs> ).

Continue
![Example](exa.gif "Example") [Field Symbols, ASSIGN INCREMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassign_increment_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Dynamic Structure Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassign_component_abexa.htm)