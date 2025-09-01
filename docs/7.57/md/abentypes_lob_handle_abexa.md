  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Deriving LOB Handle Structures, ABENTYPES_LOB_HANDLE_ABEXA, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Deriving LOB Handle Structures

This example demonstrates how [LOB handle structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are derived using the statement [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle.htm).

Source Code   

REPORT kellerh\_test.
CLASS demo\_lob\_handles DEFINITION.
  PUBLIC SECTION.
    TYPES:
      lob\_handle\_structure\_1 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 blob1,
      lob\_handle\_structure\_2 TYPE demo\_lob\_table
                             LOB HANDLE FOR ALL COLUMNS,
      lob\_handle\_structure\_3 TYPE demo\_lob\_table
                             LOCATOR FOR ALL BLOB COLUMNS
                             WRITER FOR ALL CLOB COLUMNS,
      lob\_handle\_structure\_4 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 clob2
                             LOB HANDLE FOR ALL BLOB COLUMNS
                             LOCATOR FOR ALL OTHER CLOB COLUMNS,
      lob\_handle\_structure\_5 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1 blob2 blob3
                             LOCATOR FOR COLUMNS clob1 clob2 clob3
                             LOB HANDLE FOR ALL OTHER COLUMNS,
      lob\_handle\_structure\_6 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1
                             LOCATOR FOR COLUMNS blob2
                             LOB HANDLE FOR COLUMNS blob3
                             LOB HANDLE FOR ALL CLOB COLUMNS.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS output\_type IMPORTING struct TYPE string.
ENDCLASS.
CLASS demo\_lob\_handles IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    DO 6 TIMES.
      output\_type( |LOB\_HANDLE\_STRUCTURE\_{ sy-index }| ).
    ENDDO.
    out->display( ).
  ENDMETHOD.
  METHOD output\_type.
    TYPES: BEGIN OF result,
             component\_name TYPE string,
             absolute\_name  TYPE string,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    out->next\_section( struct
      )->write\_data(
           VALUE results(
             FOR component IN CAST cl\_abap\_structdescr(
               cl\_abap\_structdescr=>describe\_by\_name( struct )
                 )->components
             WHERE ( type\_kind = cl\_abap\_typedescr=>typekind\_oref )
             ( VALUE #(
                 component\_name = component-name
                 absolute\_name  = CAST cl\_abap\_refdescr(
                   cl\_abap\_typedescr=>describe\_by\_name(
                     struct && \`-\` && component-name )
                       )->get\_referenced\_type(
                       )->absolute\_name ) ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_lob\_handles=>main( ).

Description   

The package-visible area of the class demo\_lob\_handles contains different derivations of LOB handle structures from the database table DEMO\_LOB\_TABLE. The methods of this class are used to output of the static type of the derived [LOB handle components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_handle_component_glosry.htm "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here work as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components by column specifications directly after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are represented in accordance with the [regular rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for their built-in types.
-   In the structured type lob\_handle\_structure\_2, all LOB components are converted into LOB handle components by specifying FOR ALL COLUMNS. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.
-   In the structured type lob\_handle\_structure\_3, all LOB components are converted into LOB handle components. The static type of the components of type STRING is converted into CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is converted into CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_4, all LOB components are converted into LOB handle components. The static type of the components clob1 and clob2 is converted into CL\_ABAP\_DB\_C\_READER by specifying READER directly. All components of the type RAWSTRING are converted into reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The remaining components of the type STRING are converted into reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly, and thus converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. The specification LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but only affects any enhancements to the database table with further LOBs, which then preserve their type-compliant interface reference type.
-   In the structured type lob\_handle\_structure\_6, all LOB components are converted into handle LOB components, whereby here the maximum number of column specifications is demonstrated. FOR ALL CLOB COLUMNS can only be specified since no components of type STRING were covered by previous statements.