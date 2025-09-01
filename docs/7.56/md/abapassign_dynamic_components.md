---
title: "Syntax"
description: |
  ...  dref->(comp_name)    COMPONENT comp OF STRUCTURE struc  ... Alternatives: 1. ... dref->(comp_name)(#!ABAP_ALTERNATIVE_1@1@) 2. ... COMPONENT comp OF STRUCTURE struc(#!ABAP_ALTERNATIVE_2@2@) Effect These alternatives for specifying the memory area mem_area(https://help.
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_dynamic_components.htm"
abapFile: "abapassign_dynamic_components.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abapassign", "dynamic", "components"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area.htm) → 

ASSIGN, dynamic\_components

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_shortref.htm)

Syntax

... *{* dref->(comp\_name) *}*
  *|* *{* COMPONENT comp OF STRUCTURE struc *}* ...

Alternatives:

[1\. ... dref->(comp\_name)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... COMPONENT comp OF STRUCTURE struc](#!ABAP_ALTERNATIVE_2@2@)

Effect

These alternatives for specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm) access components of structures dynamically.

Alternative 1   

... dref->(comp\_name)

Effect

This form access components of structures that are referenced by a [data reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref. dref can be any data reference variable that points to structure that contains the component specified in a character-like field comp\_name.

The component name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the component or referenced objects of the component.

Hint

This syntax form corresponds to [dynamic access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_access.htm) to object components..

Example

Dynamic assignment of a component of a structure to a field symbol. The default value of comp\_name denotes a substring of a component of a substructure.

DATA:
  BEGIN OF struc,
    BEGIN OF substruc,
      col TYPE c LENGTH 10 VALUE 'abcdefghij',
    END OF substruc,
  END OF struc.
DATA(dref) = REF #( struc ).
DATA(comp\_name) = \`substruc-col+2(5)\`.
cl\_demo\_input=>request( CHANGING field = comp\_name ).
ASSIGN dref->(comp\_name) TO FIELD-SYMBOL(<fs>).
IF sy-subrc = 0.
  cl\_demo\_output=>display( <fs> ).
ELSE.
  cl\_demo\_output=>display( 'Wrong specification' ).
ENDIF.

Alternative 2   

... COMPONENT comp OF STRUCTURE struc

Effect

This expression for mem\_area assigns a memory area of a component comp of a structure struc to the field symbol.

struc is a [result position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenresult_position_glosry.htm "Glossary Entry"). The structure can be specified as a data object or as a [writable expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwritable_expression_glosry.htm "Glossary Entry"). If struc is specified as an expression, its result must be structured. If struc is specified as a data object, it does not need to be structured.

comp is a [character-like](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") or [numeric expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). The evaluation depends on the data type of comp:

-   If the field comp has a text-like type (c or string) or the type of a [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_structure_glosry.htm "Glossary Entry") structure, which exclusively contains character-like components, its content is interpreted as the name of the component. The name must be in uppercase letters. It may contain offsets and lengths, structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects.
-   If the field comp has a non-text-like elementary type, the content is converted to the type i and interpreted as the position of the component in the structure. If the value of comp is 0, the memory area of the entire structure is assigned to the field symbol.
-   If comp has a different type, a syntax error or runtime error occurs.

If an operand struc specified as a data object is not a structure or the specified component is not found, the assignment is not made and sy-subrc is set to 4.

Hints

-   Identifying a component by its name is far less efficient than using its position, since far more internal processes are involved. Using COMPONENTS OF, however, is always more efficient than specifying the name after the structure component selector within a fully dynamically specified component in a parenthesized data object name (see this [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassign_component_abexa.htm)).
-   If the structure struc is specified as a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry") and the corresponding line is not found, the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised.
-   Writable expressions can be specified for struc but no other expressions, since only these can have a non-temporary result. Assigning a component of a temporary structure to a field symbol would not make sense.
-   If struc is specified, it is advisable to specify only structures as a data object and to check this in advance. Just evaluating sy-subrc is not enough to determine why an assignment was not successful.

Example

Assignment of all components of a structure to a field symbol in a loop. In every loop pass, the component is assigned whose position is determined by the loop index.

SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'UA'
       INTO  @DATA(wa).
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE wa TO
FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( <fs> ).
ENDDO.
cl\_demo\_output=>display( ).

Example

The following two methods show the dynamic assignment of the components of a structure that is passed to the parameter para of the methods to a field symbol <comp>.

-   The first implementation does not use [RTTI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). The statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_field.htm) is used to check whether the passed data object is a structure. The components are then assigned one after another to the field symbol in a DO loop.
-   The second implementation uses [RTTI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). A [down cast](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendown_cast_glosry.htm "Glossary Entry") of the type description object to the class CL\_ABAP\_STRUCTDESCR for the passed data object ensures that the object is a structure. A loop across the component table COMPONENTS assigns the components to the field symbol via their names.

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

Executable Example

[Field Symbols, Dynamic Structure Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassign_component_abexa.htm)

Continue
![Example](exa.gif "Example") [Field Symbols, Dynamic Structure Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassign_component_abexa.htm)