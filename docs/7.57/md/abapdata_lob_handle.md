  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, LOB HANDLE, ABAPDATA_LOB_HANDLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

DATA, LOB HANDLE

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA dtype TYPE dbtab*|*view *\[*[READ-ONLY](javascript:call_link\('abapdata_options.htm'\))*\]*
                [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
               *\[* [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) FOR [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\))
                ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](javascript:call_link\('abenstreams_locators.htm'\)). dbtab expects a transparent [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") or a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") defined for view in the ABAP Dictionary.

The column specification [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) is used to determine [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") from dbtab or view for which [LOB handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") are created in that structure whose static type is determined by the type specification [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)).

The syntax and meaning of the additions are identical to the definition of LOB handle structures using the corresponding variant of the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)).

Example

Declaration of work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and for locators for all LOBs of the DDIC database table DEMO\_BLOB\_TABLE.

DATA wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture.
DATA wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture.
DATA wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.