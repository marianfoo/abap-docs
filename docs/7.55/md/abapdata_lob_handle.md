  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm) → 

DATA, LOB HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_shortref.htm)

Syntax

DATA dtype TYPE dbtab*|*view *\[*[READ-ONLY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_options.htm)*\]*
                [lob\_handle\_type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_columns.htm)
               *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_columns.htm)
                ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreams_locators.htm). dbtab expects a transparent [DDIC database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_db_table_glosry.htm "Glossary Entry") or a [DDIC database view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in the ABAP Dictionary.

The column specification [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_columns.htm) is used to determine [LOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab or view for which [LOB handle components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") are created in that structure whose static type is determined by the type specification [lob\_handle\_type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_type.htm).

The syntax and meaning of the additions are identical to the definition of LOB handle structures using the corresponding variant of the statement [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle.htm).

Example

Declaration of work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and for locators for all LOBs of the DDIC database table DEMO\_BLOB\_TABLE.

DATA wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture.
DATA wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture.
DATA wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.