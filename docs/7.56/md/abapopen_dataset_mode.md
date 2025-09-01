---
title: "OPEN DATASET, mode"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_shortref.htm) Syntax ... BINARY MODE  TEXT MODE encoding(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm) linefeed(https://help.sap.com/doc/abapd
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm"
abapFile: "abapopen_dataset_mode.htm"
keywords: ["delete", "do", "if", "case", "try", "data", "abapopen", "dataset", "mode"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset.htm) → 

OPEN DATASET, mode

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_shortref.htm)

Syntax

... *{*BINARY MODE*}*
  *|* *{*TEXT MODE [encoding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm) *\[*[linefeed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm)*\]**}*
  *|* *{*LEGACY BINARY MODE *\[* [endian](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm)*\]**\[* [CODE PAGE cp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm)*\]**}*
  *|* *{*LEGACY TEXT MODE *\[* [endian](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm)*\]* *\[* [CODE PAGE cp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm)*\]* *\[* [linefeed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm)*\]**}* ...

Alternatives:

[1\. ... BINARY MODE](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TEXT MODE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LEGACY BINARY MODE](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... LEGACY TEXT MODE](#!ABAP_ALTERNATIVE_4@4@)

Effect

These mandatory additions define whether the file is handled as a binary file or as a text file. By specifying LEGACY, files can be written in the format that is expected by a non- [Unicode system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunicode_system_glosry.htm "Glossary Entry"), and files that have been created by a non-Unicode-system can be read. The [byte order](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_order_glosry.htm "Glossary Entry") or the [code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencodepage_glosry.htm "Glossary Entry") must be specified explicitly.

Alternative 1   

... BINARY MODE

Effect

The addition IN BINARY MODE opens the file as a binary file. When writing to a binary file, the binary content of a data object is passed in unchanged form to the file. When reading from a binary file, the binary content of the file is passed in unchanged form to a data object.

Example

Opens a binary file for reads and writes. The binary data is created by converting a string to [UTF-8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutf8_glosry.htm "Glossary Entry").

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

The addition [encoding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm) defines how the characters are represented in the text file. When writing to a text file, the content of a data object is converted to the representation entered after encoding and passed to the file. If the data type is character-like and [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry"), any trailing blanks are cut off. In the data type string, trailing blanks are not cut off.

The end-of-line marker of the relevant platform is applied to the passed data by default. When reading from a text file, the content of the file is read until the next end-of-line marker, converted from the format specified after ENCODING into the current character format, and passed to a data object. The end-of-line marker used is controlled using the addition [linefeed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm).

Example

Opens a text file for reads and writes. An end-of-line marker is appended in every write in every TRANSFER statement. Any reads are performed line by line. Compare the example for the addition NO END OF LINE of the statement [TRANSFER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptransfer.htm).

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

Opening a [legacy file](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlegacy_file_glosry.htm "Glossary Entry"). The addition IN LEGACY BINARY MODE opens the file as a legacy binary file, where [endian](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm) can be used to specify the [byte order](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_order_glosry.htm "Glossary Entry") and [CODE PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm) can be used to specify the [code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencodepage_glosry.htm "Glossary Entry") that handle the content of the file.

Hint

When a flat character-like field is written to the legacy binary files, the number of bytes written to the file is the same as the number of characters in the source field. The field content can be affected by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition LEGACY to text files.

Example

See the example for the addition [endian](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm).

Alternative 4   

... LEGACY TEXT MODE

Effect

Opening a [legacy file](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlegacy_file_glosry.htm "Glossary Entry"). The addition IN LEGACY TEXT MODE opens the file as a legacy text file, where, in legacy binary files, [endian](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm) can be used to specify the byte order and [CODE PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm) can be used to specify the code page that handle the content of the file. The syntax and semantics of *{*BIG*|*LITTLE*}* ENDIAN and CODE PAGE cp are the same as in legacy binary files. The syntax and meaning of [linefeed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm) are the same as for regular text files.

Unlike legacy binary files, the trailing blanks are cut off when writing character-like [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") data objects to a legacy text file. Also, as in the case of a text file, an [end-of-line marker](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm) is appended to the passed data by default. Unlike the text files opened by the addition IN TEXT MODE, there is no check on whether the data objects used in writing or reading are character-like. Also, the LENGTH additions of the statements READ DATASET and TRANSFER are used for counting in bytes for legacy text files, and in the units of a character represented in the memory for text files.

Hints

-   As is the case with legacy binary files, it is possible to access text files written in non-Unicode systems as legacy text files. In this case, the content is converted accordingly.
-   When writing to a flat character-like field in legacy text files, the maximum number of bytes that can be written to the file is the maximum number of characters in the source field. The field content can be affected by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition LEGACY to text files.

Example

See the example for the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm).

Continue
[OPEN DATASET, encoding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_encoding.htm)
[OPEN DATASET, WITH LINEFEED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm)
[OPEN DATASET, endian](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_endian.htm)
[OPEN DATASET, CODE PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_code_page.htm)