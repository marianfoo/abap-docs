  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES - LOB HANDLE](javascript:call_link\('abaptypes_lob_handle.htm'\)) → 

TYPES - lob\_handle\_type

Syntax

  ... *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
    *|* *{* WRITER*|*LOCATOR *}* ...

Effect

These additions define the static type of the [LOB handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") when deriving a [LOB handle structure](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") using the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)).

-   The addition READER defines the following:
    

-   The static type CL\_ABAP\_DB\_X\_READER for [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")

-   The static type CL\_ABAP\_DB\_C\_READER for [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")

-   The addition WRITER defines the following:
    

-   The static type CL\_ABAP\_DB\_X\_WRITER for [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")

-   The static type CL\_ABAP\_DB\_C\_WRITER for [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")

-   The addition LOCATOR defines the following:
    

-   The static type CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")

-   The static type CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")

-   The addition LOB HANDLE defines the following:
    

-   The static type IF\_ABAP\_DB\_BLOB\_HANDLE for [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")

-   The static type IF\_ABAP\_DB\_CLOB\_HANDLE for [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry")

The additions READER and WRITER cannot be used together in the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)). Furthermore, WRITER cannot be used with LOB HANDLE.

The combination options with the columns [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)), when specified, are explained in the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))