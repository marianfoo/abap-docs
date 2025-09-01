# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP File Interface / Statements for the ABAP File Interface / OPEN DATASET / OPEN DATASET, mode

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapopen_dataset_mode.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm)
- [abapopen_dataset_encoding.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm)
- [abapopen_dataset_linefeed.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm)
- [abapopen_dataset_endian.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm)
- [abapopen_dataset_code_page.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.486Z

---

### abapopen_dataset_mode.htm

> **📖 Official SAP Documentation**: [abapopen_dataset_mode.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) → 

OPEN DATASET, mode

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... *{*BINARY MODE*}*
  *|* *{*TEXT MODE [encoding](javascript:call_link\('abapopen_dataset_encoding.htm'\)) *\[*[linefeed](javascript:call_link\('abapopen_dataset_linefeed.htm'\))*\]**}*
  *|* *{*LEGACY BINARY MODE *\[* [endian](javascript:call_link\('abapopen_dataset_endian.htm'\))*\]**\[* [CODE PAGE cp](javascript:call_link\('abapopen_dataset_code_page.htm'\))*\]**}*
  *|* *{*LEGACY TEXT MODE *\[* [endian](javascript:call_link\('abapopen_dataset_endian.htm'\))*\]* *\[* [CODE PAGE cp](javascript:call_link\('abapopen_dataset_code_page.htm'\))*\]* *\[* [linefeed](javascript:call_link\('abapopen_dataset_linefeed.htm'\))*\]**}* ...

Alternatives:

[1\. ... BINARY MODE](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TEXT MODE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LEGACY BINARY MODE](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... LEGACY TEXT MODE](#!ABAP_ALTERNATIVE_4@4@)

Effect

These mandatory additions define whether the file is handled as a binary file or as a text file. By specifying LEGACY, files can be written in the format that is expected by a non- [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"), and files that have been created by a non-Unicode-system can be read. The [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") or the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") must be specified explicitly.

Alternative 1   

... BINARY MODE

Effect

The addition IN BINARY MODE opens the file as a binary file. When writing to a binary file, the binary content of a data object is passed in unchanged form to the file. When reading from a binary file, the binary content of the file is passed in unchanged form to a data object.

Example

Opens a binary file for reads and writes. The binary data is created by converting a string to [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry").

DATA(utf8) =
  cl\_abap\_conv\_codepage=>create\_out( )->convert( 'Blahblahblah ...' ).
DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
TRANSFER utf8 TO dset.
CLOSE DATASET dset.
...
CLEAR utf8.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO utf8.
CLOSE DATASET dset.
cl\_demo\_output=>display(
  cl\_abap\_conv\_codepage=>create\_in( )->convert( utf8 ) ).
DELETE DATASET dset.

Alternative 2   

... TEXT MODE

Effect

The addition IN TEXT MODE opens the file as a text file. Only the content of character-like data objects can be passed to text files and read from text files.

The addition [encoding](javascript:call_link\('abapopen_dataset_encoding.htm'\)) defines how the characters are represented in the text file. When writing to a text file, the content of a data object is converted to the representation entered after encoding and passed to the file. If the data type is character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"), any trailing blanks are cut off. In the data type string, trailing blanks are not cut off.

The end-of-line marker of the relevant platform is applied to the passed data by default. When reading from a text file, the content of the file is read until the next end-of-line marker, converted from the format specified after ENCODING into the current character format, and passed to a data object. The end-of-line marker used is controlled using the addition [linefeed](javascript:call_link\('abapopen_dataset_linefeed.htm'\)).

Example

Opens a text file for reads and writes. An end-of-line marker is appended in every write in every TRANSFER statement. Any reads are performed line by line. Compare the example for the addition NO END OF LINE of the statement [TRANSFER](javascript:call_link\('abaptransfer.htm'\)).

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT.
DO 5 TIMES.
  TRANSFER 'Blah' TO dset.
ENDDO.
CLOSE DATASET dset.
...
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING UTF-8
                               SKIPPING BYTE-ORDER MARK.
DO.
  READ DATASET dset INTO text.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( text ).
ENDDO.
CLOSE DATASET dset.
cl\_demo\_output=>display( ).
DELETE DATASET dset.

Alternative 3   

... LEGACY BINARY MODE

Effect

Opening a [legacy file](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry"). The addition IN LEGACY BINARY MODE opens the file as a legacy binary file, where [endian](javascript:call_link\('abapopen_dataset_endian.htm'\)) can be used to specify the [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") and [CODE PAGE](javascript:call_link\('abapopen_dataset_code_page.htm'\)) can be used to specify the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") that handle the content of the file.

Hint

When a flat character-like field is written to the legacy binary files, the number of bytes written to the file is the same as the number of characters in the source field. The field content can be affected by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition LEGACY to text files.

Example

See the example for the addition [endian](javascript:call_link\('abapopen_dataset_endian.htm'\)).

Alternative 4   

... LEGACY TEXT MODE

Effect

Opening a [legacy file](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry"). The addition IN LEGACY TEXT MODE opens the file as a legacy text file, where, in legacy binary files, [endian](javascript:call_link\('abapopen_dataset_endian.htm'\)) can be used to specify the byte order and [CODE PAGE](javascript:call_link\('abapopen_dataset_code_page.htm'\)) can be used to specify the code page that handle the content of the file. The syntax and semantics of *{*BIG*|*LITTLE*}* ENDIAN and CODE PAGE cp are the same as in legacy binary files. The syntax and meaning of [linefeed](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) are the same as for regular text files.

Unlike legacy binary files, the trailing blanks are cut off when writing character-like [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data objects to a legacy text file. Also, as in the case of a text file, an [end-of-line marker](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) is appended to the passed data by default. Unlike the text files opened by the addition IN TEXT MODE, there is no check on whether the data objects used in writing or reading are character-like. Also, the LENGTH additions of the statements READ DATASET and TRANSFER are used for counting in bytes for legacy text files, and in the units of a character represented in the memory for text files.

Hints

-   As is the case with legacy binary files, it is possible to access text files written in non-Unicode systems as legacy text files. In this case, the content is converted accordingly.
-   When writing to a flat character-like field in legacy text files, the maximum number of bytes that can be written to the file is the maximum number of characters in the source field. The field content can be affected by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition LEGACY to text files.

Example

See the example for the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_code_page.htm'\)).

Continue
[OPEN DATASET, encoding](javascript:call_link\('abapopen_dataset_encoding.htm'\))
[OPEN DATASET, WITH LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\))
[OPEN DATASET, endian](javascript:call_link\('abapopen_dataset_endian.htm'\))
[OPEN DATASET, CODE PAGE](javascript:call_link\('abapopen_dataset_code_page.htm'\))



**📖 Source**: [abapopen_dataset_mode.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm)

### abapopen_dataset_encoding.htm

> **📖 Official SAP Documentation**: [abapopen_dataset_encoding.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET, mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET, encoding

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... ENCODING *{* DEFAULT
             *|* *{*UTF-8 *\[*SKIPPING*|*WITH BYTE-ORDER MARK*\]**}*
             *|* NON-UNICODE *}* ...

Alternatives:

[1\. ... DEFAULT](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... UTF-8 *\[*SKIPPING*|*WITH BYTE-ORDER MARK*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... NON-UNICODE](#!ABAP_ALTERNATIVE_3@3@)

Effect

The additions after the mandatory addition ENCODING define the character representation in which the content of a text file is handled.

Programming Guideline

[Write text files in UTF-8 and with a byte order mark.](javascript:call_link\('abencodepage_file_guidl.htm'\) "Guideline")

Hint

It is best to always write files in UTF-8 if all readers can process this format. Otherwise, the code page can depend on the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") and it is difficult to identify the code page from the file content.

Alternative 1   

... DEFAULT

Effect

If specified, DEFAULT is the same as specifying UTF-8.

Alternative 2   

... UTF-8 *\[*SKIPPING*|*WITH BYTE-ORDER MARK*\]*

Addition:

[... SKIPPING*|*WITH BYTE-ORDER MARK](#!ABAP_ONE_ADD@1@)

Effect

The characters in the file are handled in accordance with the Unicode character representation [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry").

Hints

-   The class CL\_ABAP\_FILE\_UTILITIES contains the method CHECK\_UTF8 for determining whether a file is a UTF-8 file.
-   A UTF-16 file can only be opened as a binary file.

Example

Opens a text file as a UTF-8 file and writes a string containing German umlaut characters to the file. The file is read to a byte string and this byte string is converted from UTF-8 to a character string. This is done using an object created by the class CL\_ABAP\_CONV\_CODEPAGE and the method CONVERT of the interface IF\_ABAP\_CONV\_IN.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING UTF-8.
TRANSFER 'ÄäÖöÜü' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>display(
  cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ).
DELETE DATASET dset.

Addition   

... SKIPPING*|*WITH BYTE-ORDER MARK

Effect

This addition defines how the byte order mark (BOM), with which a file encoded in the UTF-8 format can begin, is handled. The BOM is a sequence of three bytes that indicates that a file is encoded in [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry").

-   SKIPPING BYTE-ORDER MARK
    
    is only allowed if the file is opened for reads or writes using [FOR INPUT](javascript:call_link\('abapopen_dataset_access.htm'\)) or [FOR UPDATE](javascript:call_link\('abapopen_dataset_access.htm'\)). If there is a BOM at the start of the file, this is ignored, and the file pointer is set after it. Without the addition, the BOM is handled as regular file content.
    
-   WITH BYTE-ORDER MARK
    
    is only allowed if the file is opened for writing using [FOR OUTPUT](javascript:call_link\('abapopen_dataset_access.htm'\)). When the file is opened, a BOM is inserted at the start of the file. Without the addition, no BOM is inserted.
    

The addition BYTE-ORDER MARK cannot be used together with the [AT POSITION](javascript:call_link\('abapopen_dataset_position.htm'\)) addition.

Hints

-   When opening UTF-8 files for reading, it is best to always specify the addition SKIPPING BYTE-ORDER MARK to prevent a BOM from being handled as file content.
-   It is recommended that a file for reading is always opened as a UTF-8 file using the addition WITH BYTE-ORDER MARK (if all readers can process this format).
-   The method CREATE\_UTF8\_FILE\_WITH\_BOM in the system class CL\_ABAP\_FILE\_UTILITIES can be used to create a file with BOM.

Example

The binary content of the text file opened using WITH BYTE-ORDER MARK is EFBBBF616263. EFBBBF is specified as a BOM at the start of the file. This is followed by the UTF-8 representation 616263 of the actual characters abc.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE
                  ENCODING UTF-8 WITH BYTE-ORDER MARK.
TRANSFER 'aaa' TO dset NO END OF LINE.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.

Alternative 3   

... NON-UNICODE

Effect

The characters of the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system, as specified by the entry in the database table TCP0C in the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry").

Example

Writing of German umlaut characters to a non-Unicode code page. This code page is then extracted from the database table TCP0C and used to open the file as a a legacy text file.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING NON-UNICODE.
TRY.
    TRANSFER 'ÄäÖöÜü' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO DATA(exc).
    cl\_demo\_output=>display( 'Error writing to non-unicode codepage' ).
    RETURN.
ENDTRY.
CLOSE DATASET dset.
SELECT SINGLE charco
       FROM tcp0c
       WHERE platform = @sy-opsys AND
             langu    = @sy-langu AND
             country  = ' '
       INTO @DATA(cp).
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE CODE PAGE cp.
READ DATASET dset INTO text.
CLOSE DATASET dset.
cl\_demo\_output=>display( text ).
DELETE DATASET dset.



**📖 Source**: [abapopen_dataset_encoding.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm)

### abapopen_dataset_linefeed.htm

> **📖 Official SAP Documentation**: [abapopen_dataset_linefeed.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET, mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET, WITH LINEFEED

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

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

These additions determine which end-of-line marker is used for [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text files. If these additions are used, the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/NTfmode is ignored. The two values "UNIX" or "NT" cannot both be specified in the addition [TYPE](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) at the same time.

If neither of these additions is used, the end-of-line marker is determined as follows, depending on the operating system of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"):

-   The end-of-line marker for Unix is "LF". On Unix, OS/390, and IBM i5/OS (previously known as OS/400), only "LF" is used for reading and writing.
-   The end-of-line marker for MS Windows is "CRLF". On MS Windows, however, the values of the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/NTfmode can also be used to specify whether new files are to be handled according to Unix conventions or Windows conventions. If the profile parameter has the value "b", the Unix end-of-line marker "LF" is used. If the profile parameter has the value "t" or is initial, the Windows end-of-line marker "CRLF" is used. The setting in the profile parameter can be overridden with the addition [TYPE](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) and the value "UNIX" or "NT". If an existing file is opened without the addition TYPE, this file is searched for the first end-of-line marker ("LF" or "CRLF"), and this is used for the entire file. If no end-of-line marker is found, the profile parameter is used. This applies particularly if an existing file is completely overwritten with [FOR OUTPUT](javascript:call_link\('abapopen_dataset_access.htm'\)).

If an addition WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED is used, this setting can be changed for the open file using the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)). If neither of the additions is used, the end-of-line marker cannot be changed using SET DATASET either.

Hints

-   Without the use of an addition WITH LINEFEED, the end-of-line marker is dependent on various implicit factors such as the operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), a profile parameter, and line end markings that are already used. For this reason, the explicit use of WITH LINEFEED is recommended, which makes the use of the addition [TYPE](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) for setting the end-of-line marker obsolete.
-   The end-of-line marker that is currently used can be determined for every open file using [GET DATASET](javascript:call_link\('abapget_dataset.htm'\)).

Alternative 1   

... WITH NATIVE LINEFEED

Effect

This addition defines the end-of-line marker independently of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)) in accordance with the operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), in other words "LF" for Unix, OS/390, and IBM i5/OS (previously known as OS/400), and "CRLF" for MS Windows.

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the control characters of the end-of-line marker must be available or be written according to this code page.

Hint

The addition WITH NATIVE LINEFEED is intended for processing files on a host computer that can also be accessed by other means. The addition receives the appropriate end-of-line marker without the program needing to know the operating system.

Example

The following example shows the UTF 8 representation of the current line end marking. Comparisons with the corresponding control characters in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") ensure that it is either "LF" or "CRLF".

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH NATIVE LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\n| ) OR
       xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\r\\n| ).

Alternative 2   

... WITH SMART LINEFEED

Effect

This addition depends on the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)):

-   In files that are opened for reading using FOR INPUT, both "LF" and "CRLF" are interpreted as an end-of-line marker. When opening an EBCDIC file with the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the corresponding ASCII control characters are recognized alongside the "LF", "CRLF", and EBCDIC control characters. In addition, the EBCDIC control characters "NL" (line separator) is also interpreted as an end-of-line marker.
-   In files opened for appending or changing with FOR APPENDING or FOR UPDATE, the program searches for an end-of-line marker that is already used in the file. The end of the file is identified first. If no end-of-line marker is found here, a certain number of characters at the beginning is analyzed. If an end-of-line marker is found, this is used when writing to the file. This is also affected by the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)). For example, ASCII end-of-line markers are recognized and used in a file opened with EBCDIC, but not the other way round. If no end-of-line marker is found or no search is possible, for example, if the file is opened with the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)), the end-of-line marker is defined in accordance with the operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), as with the addition WITH NATIVE LINEFEED.
-   In files opened for writing using FOR OUTPUT, the end-of-line marker is determined in accordance with the operating system the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), as with the addition WITH NATIVE LINEFEED.

Hint

The addition WITH SMART LINEFEED is intended for the generic processing of files in heterogeneous environments. The end-of-line marker is recognized and set for different formats. Using this addition is the best solution for most use cases.

Example

Writing of a text file with the end-of-line marker "CRLF". Using the addition WITH SMART LINEFEED when opening to read, this marking is also detected on platforms that expect "LF".

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
  out &&= str.
ENDWHILE.
CLOSE DATASET dset.
cl\_demo\_output=>display( out ).
DELETE DATASET dset.

Alternative 3   

... WITH UNIX LINEFEED

Effect

The end-of-line marker is set to "LF" regardless of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)) and operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance .

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the control characters for the end-of-line marker must exist or be written according to this code page.

Hint

The addition WITH UNIX LINEFEED is intended for processing Unix files in which the specific end-of-line markers are to be retained, even if the operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") is [MS](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") Windows.

Example

The following example sets the end-of-line marker to "LF". This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH UNIX LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\n| ).

Alternative 4   

... WITH WINDOWS LINEFEED

Effect

The end-of-line marker is set to "CRLF" regardless of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)) and operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry").

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the control characters for the end-of-line marker must exist or be written according to this code page.

Hint

The addition WITH WINDOWS LINEFEED is intended for use with MS Windows files in which the specific end-of-line marker is to be retained, even if the operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") is Unix, OS/390, or IBM i5/OS (previously known as OS/400).

Example

The following example sets the line end marking to "CRLF". This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH WINDOWS LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\r\\n| ).



**📖 Source**: [abapopen_dataset_linefeed.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm)

### abapopen_dataset_endian.htm

> **📖 Official SAP Documentation**: [abapopen_dataset_endian.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET, mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET, endian

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... *{*BIG*|*LITTLE*}* ENDIAN ...

Effect

This addition specifies that, when a [legacy file](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") is opened, numeric data objects of the type i, int8, decfloat16, decfloat34, f, or s are stored in the file in the [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") Big Endian or Little Endian. When a data object of these types is written or read, a conversion between these orders and the byte order of the current platform is performed, if necessary. If the addition is not specified, the byte order of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") is used.

Hints

-   The statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)) can be used to specify a different byte order for an opened legacy file.
-   The addition *{*BIG*|*LITTLE*}* ENDIAN replaces the use of the obsolete statement [TRANSLATE NUMBER FORMAT](javascript:call_link\('abaptranslate.htm'\)) in the case of file accesses.

Example

Opens a legacy binary file with different byte orders for writing. In each case, the integer 111 is written to the file and the content is read in binary format to a byte string. The results are 0000006F and 6F000000, that is, 111 in binary format in Big Endian and Little Endian.

DATA(dset) = 'test.dat'.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR OUTPUT IN LEGACY BINARY MODE BIG ENDIAN.
TRANSFER 111 TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>write( xstr ).
OPEN DATASET dset FOR OUTPUT IN LEGACY BINARY MODE LITTLE ENDIAN.
TRANSFER 111 TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>write( xstr ).
cl\_demo\_output=>display( ).
DELETE DATASET dset.



**📖 Source**: [abapopen_dataset_endian.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm)

### abapopen_dataset_code_page.htm

> **📖 Official SAP Documentation**: [abapopen_dataset_code_page.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapopen_dataset_code_page.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET, mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET, CODE PAGE

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

...  CODE PAGE cp ...

Effect

This addition specifies that, when a [legacy file](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") is opened, the representation of character-like data objects in the file is based on the code page specified in cp. When a character-like data object is written or read, a conversion between this code page and the current character representation is performed, if necessary. If this addition is not specified, the characters in the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system (as specified by the entry in the database table TCP0C in the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry")).

To specify the code page cp a character-like data object is expected that must contain, when the statement is executed, the name of a non-Unicode page from the column CPCODEPAGE in the database table TCP00. Unicode code pages cannot be specified.

Hints

-   This addition enables the automatic conversion of file content to the current Unicode character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") when reading and writing files. In this way, files that were stored in any non-Unicode systems can be imported.
-   The statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)) can be used to specify a different code page for an opened legacy file.
-   The addition CODE PAGE replaces the use of the obsolete statement [TRANSLATE CODE PAGE](javascript:call_link\('abaptranslate.htm'\)) in when accessing files.

Example

Opens legacy text files with the IDs 1101 for 7-Bit USA ASCII and 1102 for 7-Bit German ASCII from the table TCP00. When an attempt is made to write a German umlaut character to the open file with the ID 1101, an exception of the class CX\_SY\_CONVERSION\_CODEPAGE is raised. When the character is written to the open file with the ID 1102, this exception is not raised. See also the example for the addition [REPLACEMENT CHARACTER](javascript:call_link\('abapopen_dataset_error_handling.htm'\)).

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN LEGACY TEXT MODE CODE PAGE '1101'.
TRY.
    TRANSFER 'ÄaÖöÜü' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO DATA(exc).
    cl\_demo\_output=>write( 'Error writing to 7-Bit USA ASCII' ).
ENDTRY.
CLOSE DATASET dset.
OPEN DATASET dset FOR OUTPUT IN LEGACY TEXT MODE CODE PAGE '1102'.
TRY.
    TRANSFER 'ÄaÖöÜü' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO exc.
    cl\_demo\_output=>write( 'Error writing to 7-Bit German ASCII' ).
ENDTRY.
CLOSE DATASET dset.
cl\_demo\_output=>display( ).
DELETE DATASET dset.
