---
title: "Syntax"
description: |
  ...  struc-(comp)    dref->(comp_name)    COMPONENT comp OF STRUCTURE struc  ... Alternatives: 1. ... struc-(comp)(#!ABAP_ALTERNATIVE_1@1@) 2. ... dref->(comp_name)(#!ABAP_ALTERNATIVE_2@2@) 3. ... COMPONENT comp OF STRUCTURE struc(#!ABAP_ALTERNATIVE_3@3@) Effect Th
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_dynamic_components.htm"
abapFile: "abapassign_dynamic_components.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abapassign", "dynamic", "components"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20dynamic_components%2C%20ABAPASSIGN_DYNAMIC_COMPONENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN, dynamic\_components

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_shortref.htm)

Syntax

... *{* struc-(comp) *}*
  *|* *{* dref->(comp\_name) *}*
  *|* *{* COMPONENT comp OF STRUCTURE struc *}* ...

Alternatives:

[1\. ... struc-(comp)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... dref->(comp\_name)](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... COMPONENT comp OF STRUCTURE struc](#!ABAP_ALTERNATIVE_3@3@)

Effect

These variants for specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) access components of structures dynamically.

In these variants, the statement ASSIGN sets the return code sy-subrc. If the assignment is successful, sy-subrc is set to 0. In these variants, also exceptions can occur in case of some invalid dynamic specifications. If the assignment is not successful and no exception occurs, sy-subrc is set to 4. If sy-subrc is set to 4, the state of the field symbol depends on the addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_else_unassign.htm):

-   If ELSE UNASSIGN is not specified, the field symbol keeps its previous state.
-   If ELSE UNASSIGN is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the ASSIGN statement.

Hint

If ELSE UNASSIGN is not specified, it is not sufficient to evaluate the [predicate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_assigned.htm) but sy-subrc must be checked. If ELSE UNASSIGN is specified, the predicate expression as well as sy-subrc can be evaluated.

Alternative 1   

... struc-(comp)

Effect

This variant of mem\_area assigns the memory area of a component specified in comp of a structure struc to the field symbol. struc is a [result position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresult_position_glosry.htm "Glossary Entry"). The structure can be specified as a data object or as a [writable expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry"). If it is detected at compile time that struc is not a structure, a syntax error occurs. If that is detected at runtime, the runtime error STRUCTURE\_ILLEGAL occurs.

For comp, either a character-like data object or a numeric data object of type i can be specified:

-   If comp is character-like, its content is interpreted as the name of the component. The name is not case-sensitive. It may contain offsets and lengths, structure component selectors, and component selectors.
-   If comp is of type i, its value is interpreted as the position of the component in the structure. If the value of comp is 0, the memory area of the entire structure is assigned to the field symbol.
-   If comp has a different type, a syntax error or runtime error occurs.

Example

Two dynamic assignments with dynamic specification of components:

-   in the first, the structure is specified directly and the component is specified by its position.
-   in the second, the structure is specified by a writable expression with constructor operator NEW and the component is specified by its name, which can have an offset/length specification.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF struct,
        col TYPE scarr,
      END OF struct.
    DATA attr TYPE struct.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    DATA struct TYPE scarr.
    METHODS meth.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    DATA(comp1) = 1.
    cl\_demo\_input=>add\_field( CHANGING field = comp1 ).
    DATA(comp2) = \`col-carrid(2)\`.
    cl\_demo\_input=>request( CHANGING field = comp2 ).
    ASSIGN struct-(comp1) TO FIELD-SYMBOL(<fs1>).
    cl\_demo\_output=>write( sy-subrc ).
    ASSIGN NEW cls( )->attr-(comp2) TO FIELD-SYMBOL(<fs2>).
    cl\_demo\_output=>write( sy-subrc ).
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.

Executable Example

[Field Symbols, Dynamic Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_component_abexa.htm)

Alternative 2   

... dref->(comp\_name)

Effect

This variant accesses components of structures that are referenced by a [data reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref. dref can be any data reference variable that points to structure that contains the component specified in a character-like field comp\_name.

The component name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the component or referenced objects of the component.

Unlike all other operand positions, where a data reference that does not point to a data object raises an exception, no exception occurs in the statement ASSIGN and sy-subrc is set to 4.

Hint

This syntax form corresponds to [dynamic access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_dynamic_access.htm) to object components.

Example

Dynamic assignment of a component of a structure to a field symbol. The default value of comp\_name denotes a substring of a component of a substructure.

DATA:
  BEGIN OF struc,
    BEGIN OF substruc,
      col TYPE c LENGTH 10 VALUE 'abcdefghij',
    END OF substruc,
  END OF struc.
FINAL(dref) = REF #( struc ).
DATA(comp\_name) = \`substruc-col+2(5)\`.
cl\_demo\_input=>request( CHANGING field = comp\_name ).
ASSIGN dref->(comp\_name) TO FIELD-SYMBOL(<fs>).
IF sy-subrc = 0.
  cl\_demo\_output=>display( <fs> ).
ELSE.
  cl\_demo\_output=>display( 'Wrong specification' ).
ENDIF.

Example

Dynamic assignment of a component of a structure with an initial reference variable. No exception occurs but sy-subrc is set to 0 in this case.

DATA dref TYPE REF TO scarr.
ASSIGN dref->('carrid') TO FIELD-SYMBOL(<carrid1>).
ASSERT sy-subrc = 4.
dref = NEW #( ).
ASSIGN dref->('carrid') TO FIELD-SYMBOL(<carrid2>).
ASSERT sy-subrc = 0.

Alternative 3   

... COMPONENT comp OF STRUCTURE struc

Effect

This variant of mem\_area assigns the memory area of a component comp of a structure struc to the field symbol.

struc is a [result position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresult_position_glosry.htm "Glossary Entry"). The structure can be specified as a data object or as a [writable expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry"). If it is detected at compile time, that struc is not a structure:

-   A syntax error occurs if it is specified as an expression.
-   No syntax error occurs, if it is specified directly as a data object.

If it is detected at runtime that struc is not a structure, in both cases, sy-subrc is set to 4 and the state of the field symbol depends on addition ELSE UNASSIGN.

comp is a [character-like](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") or [numeric expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The evaluation depends on the data type of comp:

-   If the field comp has a text-like type (c or string) or the type of a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_structure_glosry.htm "Glossary Entry") structure, which exclusively contains character-like components, its content is interpreted as the name of the component. The component name does not have to be in uppercase letters. It may contain offsets and lengths, structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects.
-   If the field comp has a non-text-like elementary type, the content is converted to the type i and interpreted as the position of the component in the structure. If the value of comp is 0, the memory area of the entire structure is assigned to the field symbol.
-   If comp has a different type, a syntax error or runtime error occurs.

Hints

-   If the structure struc is specified as a [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") and the corresponding line is not found, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised.
-   Writable expressions can be specified for struc but no other expressions, since only these can have a non-temporary result. Assigning a component of a temporary structure to a field symbol would not make sense.
-   If struc is specified directly as a data object, it is advisable to specify only structures and to check this in advance if necessary. Just evaluating sy-subrc is not enough to determine why an assignment was not successful.
-   Identifying a component by its name is far less efficient than using its position, since far more internal processes are involved. Using COMPONENTS OF, however, is always more efficient than specifying the name after the structure component selector within a fully dynamically specified component in a parenthesized data object name.
-   For the latter see this [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_component_abexa.htm).

Example

Assignment of all components of a structure to a field symbol in a loop. In every loop pass, the component is assigned whose position is determined by the loop index.

SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO @FINAL(wa).
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE wa TO FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( <fs> ).
ENDDO.
cl\_demo\_output=>display( ).

Example

The following two methods show the dynamic assignment of the components of a structure that is passed to the parameter para of the methods to a field symbol <comp>.

-   The first implementation does not use [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). The statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm) is used to check whether the passed data object is a structure. The components are then assigned one after another to the field symbol in a DO loop.
-   The second implementation uses [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). A [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") of the type description object to the class CL\_ABAP\_STRUCTDESCR for the passed data object ensures that the object is a structure. A loop across the component table COMPONENTS assigns the components to the field symbol via their names.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS: meth1 IMPORTING para TYPE data,
             meth2 IMPORTING para TYPE data.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth1.
    DESCRIBE FIELD para TYPE FINAL(dtype).
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
        FINAL(struct\_descr) = CAST cl\_abap\_structdescr(
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

Assignment of a component of a line of an internal table to a field symbol.

TYPES:
  BEGIN OF struc,
    col1 TYPE i,
    col2 TYPE i,
  END OF struc.
DATA itab TYPE STANDARD TABLE OF struc WITH EMPTY KEY.
itab = VALUE #( ( col1 = 1 col2 = 2 )
                ( col1 = 3 col2 = 4 ) ).
ASSIGN COMPONENT 2 OF STRUCTURE itab\[ 2 \] TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>display( <fs> ).

Example

Trying to assign a component of data object that is not a structure to a field symbol. This is detected only at runtime in this variant. sy-subrc is set to 4 and using ELSE UNASSIGN the field symbol that was assigned before is unassigned.

FINAL(field) = 111.
ASSIGN field TO  FIELD-SYMBOL(<fs>).
ASSERT <fs> IS ASSIGNED.
ASSIGN COMPONENT 1 OF STRUCTURE field TO <fs> ELSE UNASSIGN.
IF sy-subrc <> 0.
  ASSERT <fs> IS NOT ASSIGNED.
ENDIF.

Continue
![Example](exa.gif "Example") [Field Symbols, Dynamic Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassign_component_abexa.htm)