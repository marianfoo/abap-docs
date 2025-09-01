---
title: "TYPES, LOB HANDLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_shortref.htm) Syntax TYPES dtype TYPE dbtabview lob_handle_type(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) FOR lob_handle_columns(https://help.sap.com/doc/
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle.htm"
abapFile: "abaptypes_lob_handle.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abaptypes", "lob", "handle"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TYPES, LOB HANDLE, ABAPTYPES_LOB_HANDLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

TYPES, LOB HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm)
                *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm)
                 ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstreams_locators.htm). dbtab expects a [DDIC database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry") defined in the ABAP Dictionary or a [DDIC database view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in ABAP Dictionary.

The column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) are used to determine [LOBs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [TYPE reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_referring.htm) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_handle_component_glosry.htm "Glossary Entry"). The [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the LOB handle components is a class or an interface that is determined by the type specification [lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm), to which the respective specified column is assigned.

The combination options of the additions specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) are determined by the following rules:

-   A LOB handle structure can be derived for either [reading](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) or [writing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm) ABAP SQL statements only.
    -   A structure for reads can only contain the type specifications [READER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm), [LOCATOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm), and [LOB HANDLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm).
    -   A structure for writes can only contain the type specifications [WRITER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) and [LOCATOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm).
-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
    
    ... [lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) ...
    
    This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
    
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

Apart from the rules specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm), the following general restrictions also apply:

-   At least one column must be specified.
-   The [type specifications](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) ALL ... COLUMNS can be made, in which BLOB or CLOB are specified.
-   The [column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) specification ALL BLOB*|*CLOB COLUMNS includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) COLUMNS ... for the same [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm).
-   The [column specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) ALL OTHER COLUMNS includes all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
-   The [column specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) ALL COLUMNS includes all LOBs and can therefore only be specified on its own.

Hints

-   LOB handle structures can also be defined using appropriate typing of components between [BEGIN OF and END OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_struc.htm).
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction SE11 offers such a function for DDIC database tables or views containing LOBs.
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to dbtab that match the [specified columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.

Example

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the DDIC database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_lob_handle_abexa.htm)

Continue
[TYPES, lob\_handle\_type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_type.htm)
[TYPES, lob\_handle\_columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle_columns.htm)
![Example](exa.gif "Example") [Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_lob_handle_abexa.htm)