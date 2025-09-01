  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) →  [Streaming for Data Objects](javascript:call_link\('abendata_objects_streams.htm'\)) → 

Streaming for Internal Tables

The specific classes for [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") for internal tables are:

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](javascript:call_link\('abendata_objects_streams.htm'\)).

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