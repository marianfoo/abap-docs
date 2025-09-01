  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

File Interface in Release 7.0

[1\. Handling of the byte order mark](#!ABAP_MODIFICATION_1@1@)
[
2\. Definition of the line end marker](#!ABAP_MODIFICATION_2@2@)
[
3\. Help class for the file interface](#!ABAP_MODIFICATION_3@3@)
[
4\. Trailing blanks in legacy EBCDIC files](#!ABAP_MODIFICATION_4@4@)

Modification 1

Handling of the Byte Order Mark

When a [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry") [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") is opened, the handling of the byte order mark (BOM) at the start of the file can be controlled using the new addition [SKIPPING*|*WITH BYTE-ORDER MARK](javascript:call_link\('abapopen_dataset_encoding.htm'\)).

Modification 2

Definition of the Line End Marker

When any [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") is opened, the line end marker can be defined using the new addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)).

The structure of file properties used in the statements [GET DATASET](javascript:call_link\('abapget_dataset.htm'\)) and [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)) has been enhanced by the addition of the components linefeed and linefeed\_mode for the line end marker, so that these can be selected and set for an open file.

Modification 3

Help Class for the File Interface

The static methods of the new class CL\_ABAP\_FILE\_UTILITIES provide information about files on the application server.

Modification 4

Trailing Blanks in EBCDIC Files

For [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") handled as [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") [EBCDIC](javascript:call_link\('abenebcdic_glosry.htm'\) "Glossary Entry") files using the addition [LEGACY TEXT MODE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the following criteria have been defined:

-   As is also the case with other code pages, trailing blanks are now cut off when writing a legacy EBCDIC text file using [TRANSFER](javascript:call_link\('abaptransfer.htm'\)). Before Release 7.0, the hexadecimal EBCDIC code "40" was written to the file.
    
-   When writing to a legacy EBCDIC text file using [TRANSFER](javascript:call_link\('abaptransfer.htm'\)), it is now padded with the hexadecimal EBCDIC code "40" for blanks if the specified length is greater than that of the data object. Before Release 7.0, it was padded with the ASCII code for blanks.
    
-   If, when reading a legacy EBCDIC text file using [READ DATASET](javascript:call_link\('abapread_dataset.htm'\)), the target object must be padded with blank characters, it is now padded with the blanks of the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry"). Before Release 7.0, it was padded with hexadecimal "80".