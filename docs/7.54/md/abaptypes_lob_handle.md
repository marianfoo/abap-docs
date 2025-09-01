  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES - LOB HANDLE

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                *\[* [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                 ...                                   *\]*.

Effect

Derives a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](javascript:call_link\('abenstreams_locators.htm'\)). dbtab expects a [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary or a [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") defined for view in ABAP Dictionary.

The columns [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)), when specified, are used to determine [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns not among the specified columns exactly as it is for a regular [TYPE reference](javascript:call_link\('abaptypes_referring.htm'\)) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as a [LOB handle component](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry"). The [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of the LOB handle components is a class or an interface determined by the specified type [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), and is assigned to the respective specified column.

The combinations of the additions specified under [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) and [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) are determined using the following rules:

-   A LOB handle structure can be derived for either [reading](javascript:call_link\('abenopen_sql_reading.htm'\)) or [writing](javascript:call_link\('abenopen_sql_writing.htm'\)) ABAP SQL statements only.
    

-   A structure for reads can only contain the specified types [READER](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), [LOCATOR](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), and [LOB HANDLE](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).

-   A structure for writes can only contain the specified types [WRITER](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) and [LOCATOR](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).

-   The definition of the LOB handle components must not contain contradictions, which means that columns must not be assigned to unsuitable types or a column cannot be assigned to multiple types.
    
-   The definition of LOB handle components must not contain redundancies. If specified, the following must create a set of LOB handle components:
    ... [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ...
    This set of LOB handle components must not overlap with another specified set of LOB handle components.
    
-   The definition of the LOB handle components must be specified with as few components as possible. If the same set of LOB handle components can be specified once rather than multiple times, the more comprehensive option must be used.
    

Apart from the rules specified under [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) and [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)), there are also the following general restrictions:

-   At least one column must be specified.
    
-   The [types specified](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) for the first three specified columns for LOB handle components for reads and the first two columns for LOB handle components for writes cannot be the same.
    
-   In each case, there can only be one [column specified](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) as ALL ... COLUMNS in which BLOB or CLOB is specified.
    
-   If specified, the [columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL BLOB*|*CLOB COLUMNS cover all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in [specified columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) COLUMNS ... for the same [static type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).
    
-   The [specified columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL OTHER COLUMNS include all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
    
-   The [specified columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL COLUMNS include all LOBs and can therefore only be specified on their own.
    

Notes

-   LOB handle structures can also be defined using the corresponding typing of components between [BEGIN OF and END OF](javascript:call_link\('abaptypes_struc.htm'\)).
    
-   LOB handle structures can also be derived in ABAP Dictionary. The display of database tables or views containing LOBs includes a function for this.
    
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created and the statement creates a normal work area.
    
-   If LOBs are added to dbtab that match the [specified columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.
    

Example

Declares types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))

Continue
[TYPES - lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\))
[TYPES - lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
![Example](exa.gif "Example") [Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))