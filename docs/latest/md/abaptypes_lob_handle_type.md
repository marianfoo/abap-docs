  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, LOB HANDLE](javascript:call_link\('abaptypes_lob_handle.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_type%2C%20ABAPTYPES_LOB_HANDLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_type

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

The additions READER and WRITER cannot be used together in the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)). Furthermore, WRITER cannot be used together with LOB HANDLE.

The combination options with the column specifications [lob\_handle\_columns](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) are explained in the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))