# ABAP - Keyword Documentation / ABAP - Reference / Processing External Data / ABAP File Interface / Statements for the ABAP File Interface / OPEN DATASET / OPEN DATASET - mode

Included pages: 5


### abapopen_dataset_mode.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) → 

OPEN DATASET - mode

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm)

Syntax

... *{*BINARY MODE*}*
  *|* *{*TEXT MODE [encoding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_encoding.htm) *\[*[linefeed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm)*\]**}*
  *|* *{*LEGACY BINARY MODE *\[* [endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_endian.htm)*\]**\[* [CODE PAGE cp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_code_page.htm)*\]**}*
  *|* *{*LEGACY TEXT MODE *\[* [endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_endian.htm)*\]* *\[* [CODE PAGE cp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_code_page.htm)*\]* *\[* [linefeed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm)*\]**}* ...

Alternatives:

[1\. ... BINARY MODE](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TEXT MODE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LEGACY BINARY MODE](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... LEGACY TEXT MODE](#!ABAP_ALTERNATIVE_4@4@)

Effect

These mandatory additions define whether the file is handled as a binary file or as a text file. By specifying LEGACY, files can be written in the format that is expected by a non- [Unicode system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry"), and files that have been created by a non-Unicode-system can be read. The [byte order](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_order_glosry.htm "Glossary Entry") or the [code page](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencodepage_glosry.htm "Glossary Entry") must be specified explicitly.

Alternative 1

... BINARY MODE

Effect

The addition IN BINARY MODE opens the file as a binary file. When writing to a binary file, the binary content of a data object is passed in unchanged form to the file. When reading from a binary file, the binary content of the file is passed in unchanged form to a data object.

Example

Opens a binary file for reads and writes. The binary data is created by converting a string to [UTF-8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutf8_glosry.htm "Glossary Entry").

DATA(utf8) = cl\_abap\_codepage=>convert\_to( 'Blahblahblah ...' ).
DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
TRANSFER utf8 TO dset.
CLOSE DATASET dset.
...
CLEAR utf8.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO utf8.
CLOSE DATASET dset.
cl\_demo\_output=>display( cl\_abap\_codepage=>convert\_from( utf8 ) ).
DELETE DATASET dset.

Alternative 2

... TEXT MODE

Effect

The addition IN TEXT MODE opens the file as a text file. Only the content of character-like data objects can be passed to text files and read from text files.

The addition [ENCODING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_encoding.htm) defines how the characters are represented in the text file. When writing to a text file, the content of a data object is converted to the representation entered after ENCODING, and passed to the file. If the data type is character-like and [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry"), any trailing blanks are cut off. In the data type string, trailing blanks are not cut off.

The end-of-line selection of the relevant platform is applied to the passed data by default. When reading from a text file, the content of the file is read until the next end-of-line selection, converted from the format specified after ENCODING into the current character format, and passed to a data object. The end-of-line selection used is controlled using the addition [linefeed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm).

Example

Opens a text file for reads and writes. A line end marking is appended in every write in every TRANSFER statement. Any reads are performed row by row. Compare the example for the addition NO END OF LINE of the statement [TRANSFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptransfer.htm).

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

Opening a [legacy file](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlegacy_file_glosry.htm "Glossary Entry"). The addition IN LEGACY BINARY MODE opens the file as a legacy binary file, where [endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_endian.htm) can be used to specify the [byte order](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_order_glosry.htm "Glossary Entry") and [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_code_page.htm) can be used to specify the [code page](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencodepage_glosry.htm "Glossary Entry") that handle the content of the file.

Note

When a flat character-like field is written to the legacy binary files, the number of bytes written to the file is the same as the number of characters in the source field. The field content can be influenced by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition LEGACY to text files.

Example

See the example for the addition [endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_endian.htm).

Alternative 4

... LEGACY TEXT MODE

Effect

Opening a [legacy file](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlegacy_file_glosry.htm "Glossary Entry"). The addition IN LEGACY TEXT MODE opens the file as a legacy text file, where (in legacy binary files) [endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_endian.htm) can be used to specify the byte order and [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_code_page.htm) can be used to specify the code page that handle the content of the file. The syntax and semantics of *{*BIG*|*LITTLE*}* ENDIAN and CODE PAGE cp are the same as in legacy binary files. The syntax and meaning of [linefeed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm) are the same as for regular text files.

In contrast to legacy binary files, the trailing blanks are cut off when writing character-like [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") data objects to a legacy text file. Also, as in the case of a text file, an [end-of-line selection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm) is appended to the passed data by default. Unlike the text files opened by the addition IN TEXT MODE, there is no check on whether the data objects used in writing or reading are character-like. Also, the LENGTH additions of the statements READ DATASET and TRANSFER are used for counting. In legacy text files these additions count in bytes, and an text files they count in the units of a character represented in the memory.

Notes

-   As is the case with legacy binary files, it is possible to access text files written in non-Unicode systems as legacy text files. In this case, the content is converted accordingly.
    
-   When writing to a flat character-like field in legacy text files, the maximum number of bytes that can be written to the file is the maximum number of characters in the source field. The field content can be influenced by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition LEGACY to text files.
    

Example

See the example for the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_code_page.htm).

Continue
[OPEN DATASET - encoding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_encoding.htm)
[OPEN DATASET - WITH LINEFEED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm)
[OPEN DATASET - endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_endian.htm)
[OPEN DATASET - CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_code_page.htm)


### abapopen_dataset_encoding.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) →  [OPEN DATASET - mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm) → 

OPEN DATASET - encoding

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm)

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

[Write text files in UTF-8 and with a byte order mark.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencodepage_file_guidl.htm "Guideline")

Note

It is best to always write files in UTF-8 (if all readers can process this format). Otherwise, the code page can depend on the [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry") and it is difficult to identify the code page from the file content.

Alternative 1

... DEFAULT

Effect

If specified, DEFAULT is the same as specifying UTF-8.

Alternative 2

... UTF-8 *\[*SKIPPING*|*WITH BYTE-ORDER MARK*\]*

Addition:

[... SKIPPING*|*WITH BYTE-ORDER MARK](#!ABAP_ONE_ADD@1@)

Effect

The characters in the file are handled in accordance with the Unicode character representation [UTF-8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutf8_glosry.htm "Glossary Entry").

Notes

-   The class CL\_ABAP\_FILE\_UTILITIES contains the method CHECK\_UTF8 for determining whether a file is a UTF-8 file.
    
-   A UTF-16 file can only be opened as a binary file.
    

Example

Opens a text file as a UTF-8 file and writes a string containing German umlaut characters to the file. Once the file is read to a byte string, it can be converted from UTF-8 to a character string using [CL\_ABAP\_CODEPAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm).

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING UTF-8.
TRANSFER 'ÄäÖöÜü' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>display( cl\_abap\_codepage=>convert\_from( xstr ) ).
DELETE DATASET dset.

Addition

... SKIPPING*|*WITH BYTE-ORDER MARK

Effect

This addition defines how the byte order mark (BOM), with which a file encoded in the UTF-8 format can begin, is handled. The BOM is a sequence of three bytes that indicates that a file is encoded in [UTF-8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutf8_glosry.htm "Glossary Entry").

-   SKIPPING BYTE-ORDER MARK
    is only permitted if the file is opened for reading or changing using [FOR INPUT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm) or [FOR UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm). If there is a BOM at the start of the file, this is ignored and the file pointer is set after it. Without the addition, the BOM is handled as normal file content.
    
-   WITH BYTE-ORDER MARK
    is only permitted if the file is opened for writing using [FOR OUTPUT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm). When the file is opened, a BOM is inserted at the start of the file. Without the addition, no BOM is inserted.
    

The addition BYTE-ORDER MARK cannot be used together with the [AT POSITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_position.htm) addition.

Notes

-   When opening UTF-8 files for reading, it is best to always enter the addition SKIPPING BYTE-ORDER MARK to prevent a BOM from being handled as file content.
    
-   It is recommended that a file for reading is always opened as a UTF-8 file using the addition WITH BYTE-ORDER MARK (as long as all readers can process this format).
    
-   The method CREATE\_UTF8\_FILE\_WITH\_BOM in the system class CL\_ABAP\_FILE\_UTILITIES can be used to create a file with BOM.
    

Example

The binary content of the text file opened using WITH BYTE-ORDER MARK is EFBBBF616263. EFBBBF is specified as a BOM at the start of the file. This is followed by the UTF-8 representation 616263 of the actual characters abc.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE
                  ENCODING UTF-8 WITH BYTE-ORDER MARK.
TRANSFER 'aaa' TO dset NO END OF LINE.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.

Alternative 3

... NON-UNICODE

Effect

The characters of the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system (as specified by the entry in the database table TCP0C in the current [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry")).

Example

Writes German umlaut characters to a non-Unicode code page. This code page is then extracted from the database table TCP0C and used to open the file as a a legacy text file.

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
             langu   = @sy-langu AND
             country  = ' '
       INTO @DATA(cp).
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE CODE PAGE cp.
READ DATASET dset INTO text.
CLOSE DATASET dset.
cl\_demo\_output=>display( text ).
DELETE DATASET dset.


### abapopen_dataset_linefeed.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) →  [OPEN DATASET - mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm) → 

OPEN DATASET - WITH LINEFEED

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm)

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

These additions determine which line end marker is used for [text files](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_file_glosry.htm "Glossary Entry") or [legacy](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text files. If these additions are used, the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/NTfmode is ignored. The two values "UNIX" or "NT" cannot both be specified in the addition [TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_os_addition.htm) at the same time.

If these additions are not used, the line end marker is determined as follows, depending on the operating system of the current [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"):

-   The line end marker for Unix is "LF". On Unix, OS/390, and IBM i5/OS (previously known as OS/400), only "LF" is used for reading and writing.
    
-   The line end marker for MS Windows is "CRLF". On MS Windows, however, the values of the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/NTfmode can also be used to specify whether new files are handled according to Unix conventions or Windows conventions. If the profile parameter has the value "b", the Unix line end marker "LF" is used. If the profile parameter has the value "t" or is initial, the Windows line end marker "CRLF" is used. The setting in the profile parameter can be overridden with the addition [TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_os_addition.htm) and the value "UNIX" or "NT". If an existing file is opened without the addition TYPE, this file is searched for the first line end marker ("LF" or "CRLF"), and this is used for the whole file. If no line end marker is found, the profile parameter is used. This applies particularly if an existing file is completely overwritten with [FOR OUTPUT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm).
    

If an addition WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED is used, this setting can be changed for the open file using the statement [SET DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_dataset.htm). If neither of the additions is used, the line end marker cannot be changed using SET DATASET either.

Notes

-   Without the use of an addition WITH LINEFEED, the line end marker is dependent on various implicit factors such as the operating system of the application server, a profile parameter, and line end markings that are already used. For this reason, the explicit use of WITH LINEFEED is recommended, which renders the use of the addition [TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_os_addition.htm) for setting the line end marker obsolete.
    
-   The line end marker that is currently used can be determined for every open file using [GET DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_dataset.htm).
    

Alternative 1

... WITH NATIVE LINEFEED

Effect

This addition defines the line end marker independently of the [access type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm) in accordance with the operating system of the application server, in other words "LF" for Unix, OS/390, and IBM i5/OS (previously known as OS/400), and "CRLF" for MS Windows.

The line end marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm), the control characters of the line end marker must be available or be written according to this code page.

Note

The addition WITH NATIVE LINEFEED is intended for editing files on an application server that can also be accessed by other means. The addition receives the appropriate line end marker without the program needing to know the operating system.

Example

The following example shows the UTF 8 representation of the current line end marking. Comparisons with the corresponding control characters in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_glosry.htm "Glossary Entry") ensure that it is either "LF" or "CRLF".

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

This addition depends on the [access type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm):

-   In files that are opened for reading using FOR INPUT, both "LF" and "CRLF" are interpreted as a line end marker. When opening an EBCDIC file with the addition [CODEPAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm), the corresponding ASCII control characters are recognized alongside the "LF", "CRLF", and EBCDIC control characters. In addition, the EBCDIC control characters "NL" (line separator) is also interpreted as a line end marker.
    
-   In files opened for appending or changing with FOR APPENDING or FOR UPDATE, the program searches for a line end marker that is already used in the file. The end of the file is identified first. If no line end marker is found here, a number of characters at the beginning is analyzed. If a line end marker is found, this is used when writing to the file. This is also affected by the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm). For example, ASCII line end markers are recognized and used in a file opened with EBCDIC, but not the other way round. If no line end marker is found or no search is possible (for example, if the file is opened with the addition [FILTER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_os_addition.htm)), the line end marker is defined in accordance with the operating system of the application server, as with the addition WITH NATIVE LINEFEED.
    
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

The line end marker is set to "LF" regardless of the [access type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm) and operating system of the application server.

The line end marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm), the control character for the line end marker must be available or be written according to this code page.

Note

The addition WITH UNIX LINEFEED is intended for editing Unix files in which the specific line end markers are to be retained, even if the operating system of the current application server is MS Windows.

Example

The following example sets the line end marking to "LF". This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_glosry.htm "Glossary Entry").

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

The line end marker is set to "CRLF" regardless of the [access type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_access.htm) and operating system of the application server.

The line end marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm), the control character for the line end marker must be available or be written according to this code page.

Note

The addition WITH WINDOWS LINEFEED is intended for use with MS Windows files in which the specific line end marker is to be retained, even if the operating system of the current application server is Unix, OS/390, or IBM i5/OS (previously known as OS/400).

Example

The following example sets the line end marking to "CRLF". This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_glosry.htm "Glossary Entry").

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


### abapopen_dataset_endian.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) →  [OPEN DATASET - mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm) → 

OPEN DATASET - endian

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm)

Syntax

... *{*BIG*|*LITTLE*}* ENDIAN ...

Effect

This addition specifies that, when a [legacy file](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlegacy_file_glosry.htm "Glossary Entry") is opened, numeric data objects of the type i, int8, decfloat16, decfloat34, f, or s are stored in the file in the [byte order](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_order_glosry.htm "Glossary Entry") Big Endian or Little Endian. When a data object of these types is written or read, a conversion between these orders and the byte order of the current platform is performed, if necessary. If the addition is not specified, the byte order of the current [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry") is used.

Notes

-   The statement [SET DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_dataset.htm) can be used to specify a different byte order for an opened legacy file.
    
-   The addition *{*BIG*|*LITTLE*}* ENDIAN replaces the use of the obsolete statement [TRANSLATE NUMBER FORMAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptranslate.htm) in the case of file accesses.
    

Example

Opens a legacy binary file with different byte orders for writing. In each case, the integer 111 is written to the file and the content is read in binary format to a byte string. The results are 0000006F and 6F000000, that is, 111 in binary format in Big Endian and Little Endian.

DATA(dset) = 'test.dat'.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR OUTPUT IN LEGACY BINARY MODE BIG ENDIAN.
TRANSFER 111 TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>write( xstr ).
OPEN DATASET dset FOR OUTPUT IN LEGACY BINARY MODE LITTLE ENDIAN.
TRANSFER 111 TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT IN BINARY MODE
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>write( xstr ).
cl\_demo\_output=>display( ).
DELETE DATASET dset.


### abapopen_dataset_code_page.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) →  [OPEN DATASET - mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_mode.htm) → 

OPEN DATASET - CODE PAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm)

Syntax

...  CODE PAGE cp ...

Effect

This addition specifies that, when a [legacy file](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlegacy_file_glosry.htm "Glossary Entry") is opened, the representation of character-like data objects in the file is based on the code page specified in cp. When a character-like data object is written or read, a conversion between this code page and the current character representation is performed, if necessary. If this addition is not specified, the characters in the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system (as specified by the entry in the database table TCP0C in the current [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry")).

If specified, the code page cp expects a character-like data object that must contain, when the statement is executed, the name of a non-Unicode page from the column CPCODEPAGE in the database table TCP00. Unicode code pages cannot be specified.

Notes

-   This addition enables the automatic conversion of file content to the current Unicode character representation [UCS-2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenucs2_glosry.htm "Glossary Entry") when reading and writing files. In this way, files saved in any non-Unicode systems can be imported.
    
-   The statement [SET DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_dataset.htm) can be used to specify a different code page for an opened legacy file.
    
-   The addition CODE PAGE replaces the use of the obsolete statement [TRANSLATE CODE PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptranslate.htm) in when accessing files.
    

Example

Opens legacy text files with the IDs 1101 for 7-Bit USA ASCII and 1102 for 7-Bit German ASCII from the table TCP00. When a German umlaut character is written to the open file with the ID 1101, an exception of the class CX\_SY\_CONVERSION\_CODEPAGE is raised. When the character is written to the open file with the ID 1102, this exception is not raised. See also the example for the addition [REPLACEMENT CHARACTER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_error_handling.htm).

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
