  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle.htm) → 

TYPES, lob\_handle\_type

Syntax

  ... *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
    *|* *{* WRITER*|*LOCATOR *}* ...

Effect

These additions define the static type of the [LOB handle components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle.htm).

-   The addition READER defines the following:

-   The static type CL\_ABAP\_DB\_X\_READER for [BLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenblob_glosry.htm "Glossary Entry")

-   The static type CL\_ABAP\_DB\_C\_READER for [CLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclob_glosry.htm "Glossary Entry")

-   The addition WRITER defines the following:

-   The static type CL\_ABAP\_DB\_X\_WRITER for [BLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenblob_glosry.htm "Glossary Entry")

-   The static type CL\_ABAP\_DB\_C\_WRITER for [CLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclob_glosry.htm "Glossary Entry")

-   The addition LOCATOR defines the following:

-   The static type CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenblob_glosry.htm "Glossary Entry")

-   The static type CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclob_glosry.htm "Glossary Entry")

-   The addition LOB HANDLE defines the following:

-   The static type IF\_ABAP\_DB\_BLOB\_HANDLE for [BLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenblob_glosry.htm "Glossary Entry")

-   The static type IF\_ABAP\_DB\_CLOB\_HANDLE for [CLOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclob_glosry.htm "Glossary Entry")

The additions READER and WRITER cannot be used together in the statement [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle.htm). Furthermore, WRITER cannot be used together with LOB HANDLE.

The combination options with the column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle_columns.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_lob_handle.htm).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_lob_handle_abexa.htm)