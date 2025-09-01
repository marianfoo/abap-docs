  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES - LOB HANDLE](javascript:call_link\('abaptypes_lob_handle.htm'\)) → 

Deriving LOB Handle Structures

The example demonstrates the derivation of [LOB handle structures](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") using the [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)) statement.

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

The package-visible area of the demo\_lob\_handles class contains various derivations of LOB handle structures from the DEMO\_LOB\_TABLE database table. The methods of the class are used for the output of the static type of the derived [LOB handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here function as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components using direct column specification after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are displayed according to the [normal rules](javascript:call_link\('abenddic_builtin_types.htm'\)) for their predefined types.

-   In the structured type lob\_handle\_structure\_2, all components are turned into LOB components by specifying FOR ALL COLUMNS for LOB handle components. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.

-   In the structured type lob\_handle\_structure\_3, all components are converted into LOB components for LOB handle components. The static type of the component of type STRING is converted into CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is converted into CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.

-   In the structured type lob\_handle\_structure\_4, all components are converted into LOB components for LOB handle components. The static type of the components clob1 and clob2 is converted into CL\_ABAP\_DB\_C\_READER by directly specifying READER. All components of the type RAWSTRING are converted into reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The other components of the type STRING are converted into reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.

-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly and thereby converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. Specifying LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but instead works on possible enhancements to the database table of further LOBs, which then preserve their appropriate interface reference type.

-   In the structured type lob\_handle\_structure\_6, all components are converted into LOB components for LOB handle components, whereby here the maximum number of column specifications is demonstrated. The specification of FOR ALL CLOB COLUMNS is only possible since no components of type STRING were recorded by the previous specifications.