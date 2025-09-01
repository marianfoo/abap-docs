---
title: "Streaming for Internal Tables"
description: |
  The specific classes for streaming(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreaming_glosry.htm 'Glossary Entry') for internal tables are: -   CL_ABAP_ITAB_C_READER -   CL_ABAP_ITAB_C_WRITER -   CL_ABAP_ITAB_X_READER -   CL_ABAP_ITAB_X_WRITER These classes ar
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_streams.htm"
abapFile: "abenitab_streams.htm"
keywords: ["do", "while", "if", "try", "class", "data", "internal-table", "abenitab", "streams"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreaming.htm) →  [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects_streams.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Streaming%20for%20Internal%20Tables%2C%20ABENITAB_STREAMS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Streaming for Internal Tables

The specific classes for [streaming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreaming_glosry.htm "Glossary Entry") for internal tables are:

-   CL\_ABAP\_ITAB\_C\_READER
-   CL\_ABAP\_ITAB\_C\_WRITER
-   CL\_ABAP\_ITAB\_X\_READER
-   CL\_ABAP\_ITAB\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects_streams.htm).

Example

Reading of an internal table using a reader stream.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
itab = VALUE #( ( \`abc\` ) ( \`def\` ) ( \`ghi\` ) ).
FINAL(itab\_reader) = NEW cl\_abap\_itab\_c\_reader( itab ).
WHILE itab\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write\_text( itab\_reader->read( 3 ) ).
ENDWHILE.
itab\_reader->close( ).
cl\_demo\_output=>display( ).