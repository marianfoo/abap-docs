---
title: "Syntax"
description: |
  ...  COLUMNS blob1 blob2 ... clob1 clob2 ...    ALL OTHER BLOBCLOB COLUMNS  ... Effect These additions define which columns of the database table or the view dbtab are declared as LOB handle components(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abe
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle_columns.htm"
abapFile: "abaptypes_lob_handle_columns.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "columns"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) →  [TYPES - LOB HANDLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm) → 

TYPES - lob\_handle\_columns

Syntax

  ... *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
    *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}* ...

Effect

These additions define which columns of the database table or the view dbtab are declared as [LOB handle components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm).

-   COLUMNS blob1 blob2 ... clob1 clob2 ...
    specifies individual [BLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry") blob1, blob2, ... or [CLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclob_glosry.htm "Glossary Entry") clob1, clob2, ... These must exist in dbtab.
    
-   ALL OTHER BLOB*|*CLOB COLUMNS
    This specifies all [BLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm), at least one individual column blob or clob must be specified using COLUMNS ...
    
-   ALL BLOB*|*CLOB COLUMNS
    specifies all [BLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclob_glosry.htm "Glossary Entry") of dbtab.
    
-   ALL OTHER COLUMNS
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm), at least one individual column must be specified using COLUMNS ...
    
-   ALL COLUMNS
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab.
    

No other columns can be specified in the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm) after columns specified using ALL OTHER ...

The different ways in which columns can be combined with each other and with the types specified using [lob\_handle\_type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle_type.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm).

Note

Columns of the data type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry").

Example

Demonstration of various specified columns in the definition of LOB-Handle components.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS clob1 clob2
                 LOB HANDLE FOR ALL BLOB COLUMNS
                 LOCATOR FOR ALL OTHER CLOB COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_lob_handle_abexa.htm)