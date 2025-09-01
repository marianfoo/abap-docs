  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET - mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET - encoding

[Quick Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

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

Note

It is best to always write files in UTF-8 (if all readers can process this format). Otherwise, the code page can depend on the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") and it is difficult to identify the code page from the file content.

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

Notes

-   The class CL\_ABAP\_FILE\_UTILITIES contains the method CHECK\_UTF8 for determining whether a file is a UTF-8 file.
    
-   A UTF-16 file can only be opened as a binary file.
    

Example

Opens a text file as a UTF-8 file and writes a string containing German umlaut characters to the file. Once the file is read to a byte string, it can be converted from UTF-8 to a character string using [CL\_ABAP\_CODEPAGE](javascript:call_link\('abencl_abap_codepage.htm'\)).

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

This addition defines how the byte order mark (BOM), with which a file encoded in the UTF-8 format can begin, is handled. The BOM is a sequence of three bytes that indicates that a file is encoded in [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry").

-   SKIPPING BYTE-ORDER MARK
    is only permitted if the file is opened for reading or changing using [FOR INPUT](javascript:call_link\('abapopen_dataset_access.htm'\)) or [FOR UPDATE](javascript:call_link\('abapopen_dataset_access.htm'\)). If there is a BOM at the start of the file, this is ignored and the file pointer is set after it. Without the addition, the BOM is handled as normal file content.
    
-   WITH BYTE-ORDER MARK
    is only permitted if the file is opened for writing using [FOR OUTPUT](javascript:call_link\('abapopen_dataset_access.htm'\)). When the file is opened, a BOM is inserted at the start of the file. Without the addition, no BOM is inserted.
    

The addition BYTE-ORDER MARK cannot be used together with the [AT POSITION](javascript:call_link\('abapopen_dataset_position.htm'\)) addition.

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

The characters of the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system (as specified by the entry in the database table TCP0C in the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry")).

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