  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset.htm) →  [OPEN DATASET, mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20DATASET%2C%20encoding%2C%20ABAPOPEN_DATASET_ENCODING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN DATASET, encoding

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_shortref.htm)

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

[Write text files in UTF-8 and with a byte order mark.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_file_guidl.htm "Guideline")

Hint

It is best to always write files in UTF-8 if all readers can process this format. Otherwise, the code page can depend on the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry") and it is difficult to identify the code page from the file content.

Alternative 1   

... DEFAULT

Effect

If specified, DEFAULT is the same as specifying UTF-8.

Alternative 2   

... UTF-8 *\[*SKIPPING*|*WITH BYTE-ORDER MARK*\]*

Addition:

[... SKIPPING*|*WITH BYTE-ORDER MARK](#!ABAP_ONE_ADD@1@)

Effect

The characters in the file are handled in accordance with the Unicode character representation [UTF-8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf8_glosry.htm "Glossary Entry").

Hints

-   The class CL\_ABAP\_FILE\_UTILITIES contains the method CHECK\_UTF8 for determining whether a file is a UTF-8 file.
-   A UTF-16 file can only be opened as a binary file.

Example

Opens a text file as a UTF-8 file and writes a string containing German umlaut characters to the file. The file is read to a byte string and this byte string is converted from UTF-8 to a character string. This is done using an object created by the class CL\_ABAP\_CONV\_CODEPAGE and the method CONVERT of the interface IF\_ABAP\_CONV\_IN.

FINAL(dset) = 'test.dat'.
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

This addition defines how the byte order mark (BOM), with which a file encoded in the UTF-8 format can begin, is handled. The BOM is a sequence of three bytes that indicates that a file is encoded in [UTF-8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf8_glosry.htm "Glossary Entry").

-   SKIPPING BYTE-ORDER MARK
    
    is only allowed if the file is opened for reads or writes using [FOR INPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm) or [FOR UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm). If there is a BOM at the start of the file, this is ignored, and the file pointer is set after it. Without the addition, the BOM is handled as regular file content.
    
-   WITH BYTE-ORDER MARK
    
    is only allowed if the file is opened for writing using [FOR OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm). When the file is opened, a BOM is inserted at the start of the file. Without the addition, no BOM is inserted.
    

The addition BYTE-ORDER MARK cannot be used together with the [AT POSITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_position.htm) addition.

Hints

-   When opening UTF-8 files for reading, it is best to always specify the addition SKIPPING BYTE-ORDER MARK to prevent a BOM from being handled as file content.
-   It is recommended that a file for reading is always opened as a UTF-8 file using the addition WITH BYTE-ORDER MARK (if all readers can process this format).
-   The method CREATE\_UTF8\_FILE\_WITH\_BOM in the system class CL\_ABAP\_FILE\_UTILITIES can be used to create a file with BOM.

Example

The binary content of the text file opened using WITH BYTE-ORDER MARK is EFBBBF616263. EFBBBF is specified as a BOM at the start of the file. This is followed by the UTF-8 representation 616263 of the actual characters abc.

FINAL(dset) = 'test.dat'.
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

The characters of the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system, as specified by the entry in the database table TCP0C in the current [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry").

Example

Writing of German umlaut characters to a non-Unicode code page. This code page is then extracted from the database table TCP0C and used to open the file as a a legacy text file.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING NON-UNICODE.
TRY.
    TRANSFER 'ÄäÖöÜü' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO FINAL(exc).
    cl\_demo\_output=>display( 'Error writing to non-unicode codepage' ).
    RETURN.
ENDTRY.
CLOSE DATASET dset.
SELECT SINGLE charco
       FROM tcp0c
       WHERE platform = @sy-opsys AND
             langu    = @sy-langu AND
             country  = ' '
       INTO @FINAL(cp).
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE CODE PAGE cp.
READ DATASET dset INTO text.
CLOSE DATASET dset.
cl\_demo\_output=>display( text ).
DELETE DATASET dset.