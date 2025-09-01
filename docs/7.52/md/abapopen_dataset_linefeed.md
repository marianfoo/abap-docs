  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET - mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET - WITH LINEFEED

[Quick Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... WITH *{* NATIVE
         *|* SMART
         *|* UNIX
         *|* WINDOWS *}* LINEFEED ...

Alternatives:

[1\. ... WITH NATIVE LINEFEED](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... WITH SMART LINEFEED](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... WITH UNIX LINEFEED](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... WITH WINDOWS LINEFEED](#!ABAP_ALTERNATIVE_4@4@)

Effect

These additions determine which line end marker is used for [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text files. If these additions are used, the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/NTfmode is ignored. The two values "UNIX" or "NT" cannot both be specified in the addition [TYPE](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) at the same time.

If these additions are not used, the line end marker is determined as follows, depending on the operating system of the current [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"):

-   The line end marker for Unix is "LF". On Unix, OS/390, and IBM i5/OS (previously known as OS/400), only "LF" is used for reading and writing.
    
-   The line end marker for MS Windows is "CRLF". On MS Windows, however, the values of the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/NTfmode can also be used to specify whether new files are handled according to Unix conventions or Windows conventions. If the profile parameter has the value "b", the Unix line end marker "LF" is used. If the profile parameter has the value "t" or is initial, the Windows line end marker "CRLF" is used. The setting in the profile parameter can be overridden with the addition [TYPE](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) and the value "UNIX" or "NT". If an existing file is opened without the addition TYPE, this file is searched for the first line end marker ("LF" or "CRLF"), and this is used for the whole file. If no line end marker is found, the profile parameter is used. This applies particularly if an existing file is completely overwritten with [FOR OUTPUT](javascript:call_link\('abapopen_dataset_access.htm'\)).
    

If an addition WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED is used, this setting can be changed for the open file using the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)). If neither of the additions is used, the line end marker cannot be changed using SET DATASET either.

Notes

-   Without the use of an addition WITH LINEFEED, the line end marker is dependent on various implicit factors such as the operating system of the application server, a profile parameter, and line end markings that are already used. For this reason, the explicit use of WITH LINEFEED is recommended, which renders the use of the addition [TYPE](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) for setting the line end marker obsolete.
    
-   The line end marker that is currently used can be determined for every open file using [GET DATASET](javascript:call_link\('abapget_dataset.htm'\)).
    

Alternative 1

... WITH NATIVE LINEFEED

Effect

This addition defines the line end marker independently of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)) in accordance with the operating system of the application server, in other words "LF" for Unix, OS/390, and IBM i5/OS (previously known as OS/400), and "CRLF" for MS Windows.

The line end marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the control characters of the line end marker must be available or be written according to this code page.

Note

The addition WITH NATIVE LINEFEED is intended for editing files on an application server that can also be accessed by other means. The addition receives the appropriate line end marker without the program needing to know the operating system.

Example

The following example shows the UTF 8 representation of the current line end marking. Comparisons with the corresponding control characters in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") ensure that it is either "LF" or "CRLF".

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH NATIVE LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_codepage=>convert\_to( |\\n| ) OR
       xstr = cl\_abap\_codepage=>convert\_to( |\\r\\n| ).

Alternative 2

... WITH SMART LINEFEED

Effect

This addition depends on the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)):

-   In files that are opened for reading using FOR INPUT, both "LF" and "CRLF" are interpreted as a line end marker. When opening an EBCDIC file with the addition [CODEPAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the corresponding ASCII control characters are recognized alongside the "LF", "CRLF", and EBCDIC control characters. In addition, the EBCDIC control characters "NL" (line separator) is also interpreted as a line end marker.
    
-   In files opened for appending or changing with FOR APPENDING or FOR UPDATE, the program searches for a line end marker that is already used in the file. The end of the file is identified first. If no line end marker is found here, a number of characters at the beginning is analyzed. If a line end marker is found, this is used when writing to the file. This is also affected by the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)). For example, ASCII line end markers are recognized and used in a file opened with EBCDIC, but not the other way round. If no line end marker is found or no search is possible (for example, if the file is opened with the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\))), the line end marker is defined in accordance with the operating system of the application server, as with the addition WITH NATIVE LINEFEED.
    
-   In files opened for writing using FOR OUTPUT, the line end marker is determined in accordance with the operating system of the application server, as with the addition WITH NATIVE LINEFEED.
    

Note

The addition WITH SMART LINEFEED is intended for the generic editing of files in heterogeneous environments. The line end marker is recognized and set for different formats. Using this addition is the best solution for most application cases.

Example

Writes a text file with the line end marking "CRLF". Using the addition WITH SMART LINEFEED (open to read), this marking is also detected on platforms that expect "LF".

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH WINDOWS LINEFEED.
TRANSFER 'abc' TO dset.
TRANSFER 'def' TO dset.
CLOSE DATASET dset.
DATA str TYPE string.
OPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT
                  WITH SMART LINEFEED.
DATA out TYPE string.
WHILE sy-subrc = 0.
  READ DATASET dset INTO str.
  out = out && str.
ENDWHILE.
CLOSE DATASET dset.
cl\_demo\_output=>display( out ).
DELETE DATASET dset.

Alternative 3

... WITH UNIX LINEFEED

Effect

The line end marker is set to "LF" regardless of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)) and operating system of the application server.

The line end marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the control character for the line end marker must be available or be written according to this code page.

Note

The addition WITH UNIX LINEFEED is intended for editing Unix files in which the specific line end markers are to be retained, even if the operating system of the current application server is MS Windows.

Example

The following example sets the line end marking to "LF". This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH UNIX LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_codepage=>convert\_to( |\\n| ).

Alternative 4

... WITH WINDOWS LINEFEED

Effect

The line end marker is set to "CRLF" regardless of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)) and operating system of the application server.

The line end marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the control character for the line end marker must be available or be written according to this code page.

Note

The addition WITH WINDOWS LINEFEED is intended for use with MS Windows files in which the specific line end marker is to be retained, even if the operating system of the current application server is Unix, OS/390, or IBM i5/OS (previously known as OS/400).

Example

The following example sets the line end marking to "CRLF". This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH WINDOWS LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_codepage=>convert\_to( |\\r\\n| ).