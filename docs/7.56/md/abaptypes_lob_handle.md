  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES, LOB HANDLE

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                *\[* [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                 ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](javascript:call_link\('abenstreams_locators.htm'\)). dbtab expects a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary or a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") defined for view in ABAP Dictionary.

The column specifications [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) are used to determine [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [TYPE reference](javascript:call_link\('abaptypes_referring.htm'\)) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry"). The [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of the LOB handle components is a class or an interface that is determined by the type specification [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), to which the respective specified column is assigned.

The combination options of the additions specified under [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) and [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) are determined by the following rules:

-   A LOB handle structure can be derived for either [reading](javascript:call_link\('abenabap_sql_reading.htm'\)) or [writing](javascript:call_link\('abenabap_sql_writing.htm'\)) ABAP SQL statements only.
    -   A structure for reads can only contain the type specifications [READER](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), [LOCATOR](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), and [LOB HANDLE](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).
    -   A structure for writes can only contain the type specifications [WRITER](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) and [LOCATOR](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).
-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
    
    ... [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ...
    
    This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
    
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

Apart from the rules specified under [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) and [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), the following general restrictions also apply:

-   At least one column must be specified.
-   The [type specifications](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL ... COLUMNS can be made, in which BLOB or CLOB are specified.
-   The [column](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) specification ALL BLOB*|*CLOB COLUMNS includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) COLUMNS ... for the same [static type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).
-   The [column specification](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL OTHER COLUMNS includes all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
-   The [column specification](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL COLUMNS includes all LOBs and can therefore only be specified on its own.

Hints

-   LOB handle structures can also be defined using appropriate typing of components between [BEGIN OF and END OF](javascript:call_link\('abaptypes_struc.htm'\)).
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction SE11 offers such a function for DDIC database tables or views containing LOBs.
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to dbtab that match the [specified columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.

Example

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the DDIC database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))

Continue
[TYPES, lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\))
[TYPES, lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
![Example](exa.gif "Example") [Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))