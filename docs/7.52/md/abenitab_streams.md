  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming.htm) →  [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm) → 

Streaming for internal tables

The specific classes for [streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming_glosry.htm "Glossary Entry") for internal tables are: CL\_ABAP\_ITAB\_C\_READER

-   CL\_ABAP\_ITAB\_C\_READER

-   CL\_ABAP\_ITAB\_C\_WRITER

-   CL\_ABAP\_ITAB\_X\_READER

-   CL\_ABAP\_ITAB\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm).

Example

Uses a reader stream to read an internal table.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
itab = VALUE #( ( \`abc\` ) ( \`def\` ) ( \`ghi\` ) ).
DATA(itab\_reader) = NEW cl\_abap\_itab\_c\_reader( itab ).
WHILE itab\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write\_text( itab\_reader->read( 3 ) ).
ENDWHILE.
itab\_reader->close( ).
cl\_demo\_output=>display( ).