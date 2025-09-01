# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, LOB HANDLE

Included pages: 4


### abaptypes_lob_handle.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20LOB%20HANDLE%2C%20ABAPTYPES_LOB_HANDLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, LOB HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                 ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm). dbtab expects a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") defined in the ABAP Dictionary or a [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in ABAP Dictionary.

The column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are used to determine [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [TYPE reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry"). The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the LOB handle components is a class or an interface that is determined by the type specification [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), to which the respective specified column is assigned.

The combination options of the additions specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are determined by the following rules:

-   A LOB handle structure can be derived for either [reading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) or [writing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) ABAP SQL statements only.
    -   A structure for reads can only contain the type specifications [READER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), and [LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
    -   A structure for writes can only contain the type specifications [WRITER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) and [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
    
    ... [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ...
    
    This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
    
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

Apart from the rules specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), the following general restrictions also apply:

-   At least one column must be specified.
-   The [type specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL ... COLUMNS can be made, in which BLOB or CLOB are specified.
-   The [column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) specification ALL BLOB*|*CLOB COLUMNS includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) COLUMNS ... for the same [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL OTHER COLUMNS includes all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL COLUMNS includes all LOBs and can therefore only be specified on its own.

Hints

-   LOB handle structures can also be defined using appropriate typing of components between [BEGIN OF and END OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_struc.htm).
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to dbtab that match the [specified columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction SE11 offers such a function for DDIC database tables or views containing LOBs.

Example

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the DDIC database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)

Continue
[TYPES, lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm)
[TYPES, lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
![Example](exa.gif "Example") [Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_type%2C%20ABAPTYPES_LOB_HANDLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_type

Syntax

  ... *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
    *|* *{* WRITER*|*LOCATOR *}* ...

Effect

These additions define the static type of the [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   The addition READER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_READER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_READER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition WRITER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_WRITER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_WRITER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOCATOR defines the following:
    -   The static type CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOB HANDLE defines the following:
    -   The static type IF\_ABAP\_DB\_BLOB\_HANDLE for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type IF\_ABAP\_DB\_CLOB\_HANDLE for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")

The additions READER and WRITER cannot be used together in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm). Furthermore, WRITER cannot be used together with LOB HANDLE.

The combination options with the column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_columns.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_columns%2C%20ABAPTYPES_LOB_HANDLE_COLUMNS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_columns

Syntax

  ... *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
    *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}* ...

Effect

These additions define which columns of the database table or the view dbtab are declared as [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   COLUMNS blob1 blob2 ... clob1 clob2 ...
    
    specifies individual [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") blob1, blob2, ... or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") clob1, clob2, ... These must exist in dbtab.
    
-   ALL OTHER BLOB*|*CLOB COLUMNS
    
    This specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column blob or clob must be specified using COLUMNS ...
    
-   ALL BLOB*|*CLOB COLUMNS
    
    specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of dbtab.
    
-   ALL OTHER COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column must be specified using COLUMNS ...
    
-   ALL COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab.
    

No other columns can be specified in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) after the column specification ALL OTHER ...

The combination options of the column specifications with each other below and with the types specified using [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Hint

Columns of the data type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry").

Example

Demonstration of various column specifications in the definition of LOB-Handle components.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS clob1 clob2
                 LOB HANDLE FOR ALL BLOB COLUMNS
                 LOCATOR FOR ALL OTHER CLOB COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abentypes_lob_handle_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Deriving%20LOB%20Handle%20Structures%2C%20ABENTYPES_LOB_HANDLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Deriving LOB Handle Structures

This example demonstrates how [LOB handle structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are derived using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_types\_lob\_handle DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
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
  PRIVATE SECTION.
    METHODS output\_type IMPORTING struct TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_types\_lob\_handle IMPLEMENTATION.
  METHOD main.
    DO 6 TIMES.
      output\_type( |LOB\_HANDLE\_STRUCTURE\_{ sy-index }| ).
    ENDDO.
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

Description   

The package-visible area of the class demo\_lob\_handles contains different derivations of LOB handle structures from the database table DEMO\_LOB\_TABLE. The methods of this class are used to output of the static type of the derived [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here work as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components by column specifications directly after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are represented in accordance with the [regular rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for their built-in types.
-   In the structured type lob\_handle\_structure\_2, all LOB components are converted into LOB handle components by specifying FOR ALL COLUMNS. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.
-   In the structured type lob\_handle\_structure\_3, all LOB components are converted into LOB handle components. The static type of the components of type STRING is converted into CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is converted into CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_4, all LOB components are converted into LOB handle components. The static type of the components clob1 and clob2 is converted into CL\_ABAP\_DB\_C\_READER by specifying READER directly. All components of the type RAWSTRING are converted into reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The remaining components of the type STRING are converted into reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly, and thus converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. The specification LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but only affects any enhancements to the database table with further LOBs, which then preserve their type-compliant interface reference type.
-   In the structured type lob\_handle\_structure\_6, all LOB components are converted into handle LOB components, whereby here the maximum number of column specifications is demonstrated. FOR ALL CLOB COLUMNS can only be specified since no components of type STRING were covered by previous statements.
