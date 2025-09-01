  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm) → 

DATA - LOB HANDLE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_shortref.htm)

Syntax

DATA dtype TYPE dbtab*|*view *\[*[READ-ONLY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_options.htm)*\]*
                [lob\_handle\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle_columns.htm)
               *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle_columns.htm)
                ...                                   *\]*.

Effect

Derives a [LOB handle structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm). dbtab expects a [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry") defined in ABAP Dictionary or a [database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in ABAP Dictionary.

The specified columns [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle_columns.htm) are used to determine [LOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab or view for which [LOB handle components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") are created in the structure. Their static type is determined using the specified type [lob\_handle\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle_type.htm).

The syntax and meaning of the additions are exactly the same as the definition of LOB handle structures using the corresponding variant of the statement [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle.htm).

Example

Declares work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and for locators for all LOBs in database table DEMO\_BLOB\_TABLE.

DATA wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture.
DATA wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture.
DATA wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.