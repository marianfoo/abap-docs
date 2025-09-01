  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_string_utilities.htm) → 

Class for Compressing Character Strings and Byte Strings

These classes offer a range of methods that enable text in text fields or text strings, or binary data in byte fields or byte strings to be compressed or decompressed using GZIP.

-   CL\_ABAP\_GZIP
-   CL\_ABAP\_GZIP\_BINARY\_STREAM
-   CL\_ABAP\_GZIP\_TEXT\_STREAM
-   CL\_ABAP\_UNGZIP\_BINARY\_STREAM
-   CL\_ABAP\_UNGZIP\_TEXT\_STREAM

For more information, see the individual classes and methods.

Example

Compression and decompression of text.

DATA zip TYPE xstring.
cl\_abap\_gzip=>compress\_text(
  EXPORTING text\_in  = \`Hello!\`
  IMPORTING gzip\_out = zip ).
DATA txt TYPE string.
cl\_abap\_gzip=>decompress\_text(
  EXPORTING gzip\_in  = zip
  IMPORTING text\_out = txt ).
ASSERT txt = \`Hello!\`.