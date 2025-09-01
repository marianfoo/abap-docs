---
title: "Streaming for Strings"
description: |
  The specific classes for streaming(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming_glosry.htm 'Glossary Entry') for strings are: -   CL_ABAP_STRING_C_READER -   CL_ABAP_STRING_C_WRITER -   CL_ABAP_STRING_X_READER -   CL_ABAP_STRING_X_WRITER These classes ar
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_streams.htm"
abapFile: "abenstring_streams.htm"
keywords: ["do", "while", "if", "try", "class", "data", "abenstring", "streams"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming.htm) →  [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm) → 

Streaming for Strings

The specific classes for [streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming_glosry.htm "Glossary Entry") for strings are:

-   CL\_ABAP\_STRING\_C\_READER

-   CL\_ABAP\_STRING\_C\_WRITER

-   CL\_ABAP\_STRING\_X\_READER

-   CL\_ABAP\_STRING\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm).

Example

A writer stream is used to fill a string and then pass it to a reader stream. The reader stream skips three characters and then reads the remaining characters.

DATA(string\_writer) = NEW cl\_abap\_string\_c\_writer( ).
DO 10 TIMES.
  string\_writer->write( |{ sy-index - 1 }| ).
ENDDO.
string\_writer->close( ).
DATA(string\_reader) =
  NEW cl\_abap\_string\_c\_reader( string\_writer->get\_result\_string( ) ).
string\_reader->skip( 3 ).
WHILE string\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write( string\_reader->read( 1 ) ).
ENDWHILE.
string\_reader->close( ).
cl\_demo\_output=>display( ).