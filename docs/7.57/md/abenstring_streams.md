  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstreaming.htm) →  [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects_streams.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Streaming for Strings, ABENSTRING_STREAMS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Streaming for Strings

The specific classes for [streaming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstreaming_glosry.htm "Glossary Entry") for strings are:

-   CL\_ABAP\_STRING\_C\_READER
-   CL\_ABAP\_STRING\_C\_WRITER
-   CL\_ABAP\_STRING\_X\_READER
-   CL\_ABAP\_STRING\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects_streams.htm).

Example

A writer stream is used to fill a string and then pass it to a reader stream. The reader stream skips three characters and then reads the remaining characters.

FINAL(string\_writer) = NEW cl\_abap\_string\_c\_writer( ).
DO 10 TIMES.
  string\_writer->write( |{ sy-index - 1 }| ).
ENDDO.
string\_writer->close( ).
FINAL(string\_reader) =
  NEW cl\_abap\_string\_c\_reader( string\_writer->get\_result\_string( ) ).
string\_reader->skip( 3 ).
WHILE string\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write( string\_reader->read( 1 ) ).
ENDWHILE.
string\_reader->close( ).
cl\_demo\_output=>display( ).