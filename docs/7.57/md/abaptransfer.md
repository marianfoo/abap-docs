---
title: "TRANSFER"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptransfer_shortref.htm) Syntax TRANSFER dobj TO dset LENGTH len NO END OF LINE. Additions: 1. ... LENGTH len(#!ABAP_ADDITION_1@1@) 2. ... NO END OF LINE(#!ABAP_ADDITION_2@2@) Effect This statement p
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptransfer.htm"
abapFile: "abaptransfer.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "data", "types", "field-symbol", "abaptransfer"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TRANSFER, ABAPTRANSFER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for i
mprovement:)

TRANSFER

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptransfer_shortref.htm)

Syntax

TRANSFER dobj TO dset *\[*LENGTH len*\]*
                      *\[*NO END OF LINE*\]*.

Additions:

[1\. ... LENGTH len](#!ABAP_ADDITION_1@1@)
[2\. ... NO END OF LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement passes the content of data object dobj to the file specified in dset. For dobj, data objects with elementary data types and [flat structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_structure_glosry.htm "Glossary Entry") can be specified. The file must be open for writing, appending, or changing. If a closed or invalid file is accessed, a catchable exception is raised. If the file was opened as a [text file](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_file_glosry.htm "Glossary Entry"), dobj must be character-like. This restriction does not apply to [legacy text files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry").

dset expects a character-like data object containing the [physical name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The content is written to the file from the current file pointer. After the data has been passed, the file pointer is positioned after the inserted data. The addition LENGTH can be used to restrict the number of characters or bytes passed.

Effect of the Access Type

The [access type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_access.htm) defined in the statement OPEN DATASET has the following effect on the data passed from:

-   A file opened to be read using [FOR INPUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_access.htm) cannot be written.
-   In a file opened for writing using [FOR OUTPUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_access.htm), the system writes to the file from the current file pointer. If the file pointer is positioned after the current start of the file, the file is padded with hexadecimal 0 from the start of the file to the file pointer.
-   In a file opened for appending using [FOR APPENDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_access.htm), the system writes to the file from the current file pointer, which is always at the end of the file.
-   In a file opened for changing using FOR UPDATE, the system writes to the file from the current file pointer. If the file pointer is positioned after the end of the file, the file is padded with hexadecimal 0 between the end of the file and the file pointer position.

Effect of the Storage Type

The data is passed regardless of the [storage type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_mode.htm) used to open the file with the statement OPEN DATASET. If the specified storage type requires conversion, it is carried out before writing.

-   If the file was opened as a [text file](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_file_glosry.htm "Glossary Entry") or a [legacy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file, the trailing blank characters are deleted for all data objects, except for those of data type string. The [end-of-line marker](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_linefeed.htm) defined when the file was opened is then added to the remaining content of the data object or to the result of the conversion, and the final result is written byte-by-byte to the file. The appending of the end-of-line marker can be prevented using NO END OF LINE.
-   If the file was opened as a [binary file](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbinary_file_glosry.htm "Glossary Entry") or a [legacy binary file](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry"), the content of the data object or the result of the conversion is written byte-by-byte to the file.

Return Code

The statement TRANSFER always sets sy-subrc to the value 0 or raises an exception.

Hints

-   Only character-like data objects can be written to text files. Only byte-like data objects should be written to binary files. To save numeric data objects or mixed structures, it is best to assign them to character-like or byte-like typed field symbols using the [CASTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_casting.htm) addition of the statement ASSIGN and save these field symbols.
-   If parts of a file are to be overwritten, it must be opened for changes.
-   [Enumerated objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") are written in accordance with their [basic type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbase_type_glosry.htm "Glossary Entry").

Example

The binary data from the database table SPFLI is passed to a binary file flights.dat. The structure of the table rows passed contains both character-like and numeric fields. Since the type-compliant storage of mixed structures in files is not possible, the binary content of the structure is directly accessed using a typed field symbol <hex\_container>. To achieve the same result, the structure wa could be passed directly. The recommended procedure however is to use the field symbol, because it explicitly passes a binary data type to a binary file. This type of storage is only recommended for short-term storage within the same system, because the byte-like content depends on the byte order and the current system code page. For long-term storage or for exchanging between systems, the data should be converted to character-like containers and stored as a text file.

FINAL(file) = \`flights.dat\`.
FIELD-SYMBOLS <hex\_container> TYPE x.
OPEN DATASET file FOR OUTPUT IN BINARY MODE.
SELECT \*
       FROM spfli
       INTO @FINAL(wa).
  ASSIGN wa TO <hex\_container> CASTING.
  TRANSFER <hex\_container> TO file.
ENDSELECT.
CLOSE DATASET file.

Addition 1   

... LENGTH len

Effect

This addition determines how many characters or bytes of the data object dobj are written to the file. len expects a data object of the type i. It contains the number of characters or bytes. In text files, the content of len specifies the number of characters that are written from the memory. For binary files, legacy text files, and legacy binary files, len specifies the number of bytes that are written to the file. The first len characters or bytes are passed and [alignment gaps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment_gap_glosry.htm "Glossary Entry") are included in the structures. If the addition LENGTH is not specified, all characters or bytes are passed.

If the value of len is less than or equal to 0, no characters or bytes are passed. If the file is opened as a (legacy) text file, however, an [end-of-line marker](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_linefeed.htm) is inserted into the file by default. If the value of len is greater than the number of characters or bytes in dobj, blank characters or hexadecimal 0 are passed to the file instead of the missing characters or bytes, depending on whether the file was opened as a (legacy) text file or a (legacy) binary file.

Example

The statement TRANSFER writes the first four characters of a string to a text file.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT.
TRANSFER 'Blahblahblah...' TO dset LENGTH 4.
CLOSE DATASET dset.
...
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT.
READ DATASET dset INTO text.
CLOSE DATASET dset.
cl\_demo\_output=>display( text ).
DELETE DATASET dset.

Addition 2   

... NO END OF LINE

Effect

This addition has the effect that, in text files or legacy text files, no end-of-line marker is appended to the data passed.

Example

Opens a text file for reads and writes. No end-of-line marker is appended if writes are performed using the TRANSFER statements. In the case of reads, the entire content of the file is placed in the text string. Compare the example with the addition [TEXT MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_mode.htm) of the statement OPEN DATASET.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT.
DO 5 TIMES.
  TRANSFER 'Blah' TO dset NO END OF LINE.
ENDDO.
CLOSE DATASET dset.
...
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT.
READ DATASET dset INTO text.
CLOSE DATASET dset.
cl\_demo\_output=>display( text ).
DELETE DATASET dset.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

-   Cause: The required conversion is not supported. (For example, because a language not supported by the conversion was specified using SET LOCALE LANGUAGE.)
    Runtime error: CONVT\_CODEPAGE\_INIT

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: Conversion is not possible.
    Runtime error: CONVT\_CODEPAGE

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization to access the file.
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY

CX\_SY\_FILE\_IO

-   Cause: Error when writing to the file.
    Runtime error: DATASET\_WRITE\_ERROR

CX\_SY\_FILE\_OPEN

-   Cause: File cannot be opened.
    Runtime error: DATASET\_CANT\_OPEN

CX\_SY\_FILE\_OPEN\_MODE

-   Cause: The file is not open.
    Runtime error: DATASET\_NOT\_OPEN
-   Cause: The file was opened using OPEN DATASET ... FOR INPUT. Therefore, it cannot be written.
    Runtime error: DATASET\_READ\_ONLY

CX\_SY\_PIPE\_REOPEN

-   Cause: The file was opened using the addition FILTER and since then a switch of the work process took place.
    Runtime error: DATASET\_PIPE\_CLOSED

CX\_SY\_TOO\_MANY\_FILES

-   Cause: Maximum number of open files exceeded.
    Runtime error: DATASET\_TOO\_MANY\_FILES