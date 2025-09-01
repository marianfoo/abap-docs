---
title: "SET DATASET"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_dataset_shortref.htm) Syntax SET DATASET dset POSITION posEND OF FILE ATTRIBUTES attr. Extras: 1. ... POSITION posEND OF FILE(#!ABAP_ADDITION_1@1@) 2. ... ATTRIBUTE
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_dataset.htm"
abapFile: "abapset_dataset.htm"
keywords: ["do", "if", "case", "try", "data", "abapset", "dataset"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfile_interface_statements.htm) → 

SET DATASET

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_dataset_shortref.htm)

Syntax

SET DATASET dset *\[*POSITION *{*pos*|**{*END OF FILE*}**}**\]*
                 *\[*ATTRIBUTES attr*\]*.

Extras:

[1\. ... POSITION *{*pos*|**{*END OF FILE*}**}*](#!ABAP_ADDITION_1@1@)
[2\. ... ATTRIBUTES attr](#!ABAP_ADDITION_2@2@)

Effect

This statement uses the addition POSITION to determine the position of the file pointer in the file specified in dset. It uses the addition ATTRIBUTES to set additional attributes for the file. At least one of these two additions must be specified.

dset expects a character-like data object containing the [physical name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The file must already be open, otherwise a handleable exception is raised.

Return Value

The statement SET DATASET always sets sy-subrc to the value 0 or raises an exception.

Addition 1

... POSITION *{*pos*|**{*END OF FILE*}**}*

Effect

This addition sets the file pointer in the file, either in the position specified in pos, or at the end of the file. pos expects a numeric data object.

The position is specified in bytes; the start of the file corresponds to position 0. If the value of pos is -1, the file pointer is set at the end of the file. Other negative values are not permitted.

The following cases need to be distinguished:

1.  If the file is open for reads and the value of pos is greater than the length of the file, the file pointer is positioned outside the file. Unless the position is changed, no data can be read.
    
2.  If the file is opened for writes and the value of pos is greater than the length of the file, it is filled with hexadecimal 0s from the end of the file to the specified position the next time a write is performed on it.
    
3.  If the file is opened for appending, the position specified is ignored and the file pointer remains positioned at the end of the file.
    
4.  If the file is opened for changes, and the value of pos is greater than the length of the file, it is filled with hexadecimal 0s from the end of the file to the specified position the next time a write is performed on it.
    

The addition POSITION cannot be specified for files that have been opened with the addition [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_os_addition.htm) of the statement OPEN DATASET. This raises a handleable exception.

Notes

-   For file sizes greater than 2 GB, a data object pos of data type i is not sufficient for entering all the possible positions of the file pointer.
    
-   Free position specifications are more suitable for binary files than for text files. In text files, positions depend on the character format, line-end markers, and in UTF-8 files, also on a Byte Order Mark (BOM). In text files, only place the file pointer in positions known precisely, for example positions obtained using [GET DATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm).
    

Example

When writing, the file is read from the start of the file until the first end-of-line marker, and then the new content is written starting from the end of the file. If the file pointer is not set explicitly after a read, the last [TRANSFER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptransfer.htm) statements would overwrite the file after the first end-of-line marker.

DATA: file TYPE string VALUE 'test1.dat',
      pos  TYPE i,
      text TYPE string.
OPEN DATASET file FOR OUTPUT IN TEXT MODE
                             ENCODING DEFAULT
                             WITH SMART LINEFEED.
TRANSFER: 'Line1' TO file,
          'Line2' TO file,
          'Line3' TO file.
SET DATASET file POSITION 0.
READ DATASET file INTO text.
SET DATASET file POSITION END OF FILE.
TRANSFER: 'Line4' TO file,
          'Line5' TO file,
          'Line6' TO file.
CLOSE DATASET file.

Addition 2

... ATTRIBUTES attr

Effect

This addition can be used to change some of the attributes that were determined when the file was opened with the statement [OPENDATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset.htm). attr expects a data object of type dset\_changeable\_attributes from the [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") DSET (see the table below). The structure dset\_changeable\_attributes corresponds to the substructure changeable of the structure dset\_attributes. Data objects of the structure dset\_attributes can be filled using the statement [GET DATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm).

Component

Meaning

indicator

Structure with the components repl\_char, conv\_errors, code\_page, endian, and linefeed\_mode. If these components contain the value "X" in attr, the values are used in the components with the same names in the structure dset\_changeable\_attributes when changes are made.

repl\_char

In this component of attr, a single-character character-like replacement character can be specified to overwrite the replacement character specified when the file was opened using the addition [REPLACEMENT CHARACTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_error_handling.htm) of the statement OPEN DATASET.

conv\_errors

In this component of attr, the value "I" or "R" can be specified to overwrite the setting made when the file was opened using the addition [IGNORING CONVERSION ERRORS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_error_handling.htm). The value "I" suppresses the exceptions, "R" raises the exceptions.

code\_page

In this component of attr, a [code page](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencodepage_glosry.htm "Glossary Entry") from the column CPCODEPAGE of the database table TCP00 can be specified, to overwrite the code page specified when the file was opened using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_mode.htm) of the statement OPEN DATASET.

endian

In this component of attr, the value "B" or "L" can be specified to overwrite the setting made when the file was opened using the additions [*{*BIG*|*LITTLE*}* ENDIAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_mode.htm) of the statement OPEN DATASET. The value "B" sets the byte order to Big Endian, the value "L" sets it to Little Endian.

linefeed\_mode

In this component of attr, one of the values "N", "S", "U" or "W" can be entered to overwrite the setting made using the addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_linefeed.htm) of the statement OPEN DATASET as appropriate.

For some components, the possible input values are defined as constants in the type group DSET.

The values entered in attr must comply with the syntax rules for the relevant additions of the statement OPEN DATASET, otherwise this raises a handleable exception:

-   The components repl\_char and conv\_errors can only be used when making changes if the file is opened as a [text file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_file_glosry.htm "Glossary Entry"), [legacy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file, or [legacy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlegacy_file_glosry.htm "Glossary Entry") binary file, but not if it is opened as a [binary file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbinary_file_glosry.htm "Glossary Entry")
    
-   The components code\_page and endian can only be used when making changes if the file is opened as a legacy text file or a legacy binary file.
    
-   The component linefeed\_mode can only be used when making changes if the file is opened as a [text file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_file_glosry.htm "Glossary Entry") or a [legacy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file and if the line-end marker has been set explicitly using the addition [WITH LINEFEED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_linefeed.htm).
    

Note

The modifiable attributes do not affect the attributes of the file in the operating system, but rather the attributes with which the file is opened in ABAP, and which affect how it is handled in ABAP.

Example

Depending on the non-modifiable attributes of the file test.dat, some of its modifiable attributes are changed.

DATA: dset TYPE string VALUE 'test.dat',
      attr TYPE dset\_attributes.
OPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE
                            WITH NATIVE LINEFEED.
...
GET DATASET dset ATTRIBUTES attr.
IF attr-fixed-mode = 'T' OR
   attr-fixed-mode = 'LT'.
  attr-changeable = VALUE #(
    indicator-conv\_errors = 'X'
    conv\_errors = 'I'
    indicator-linefeed\_mode = 'X'
    linefeed\_mode = 'S' ).
  IF attr-fixed-mode = 'LT'.
    attr-changeable = VALUE #( BASE attr-changeable
      indicator-code\_page = 'X'
      code\_page = '1100' ).
  ENDIF.
  SET DATASET dset ATTRIBUTES attr-changeable.
ENDIF.
CLOSE DATASET dset.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

-   Cause: The specified code page is not available for the current AS Instance.
    Runtime error: CONVT\_CODEPAGE\_INIT
    

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: The escape character cannot be displayed in the target code page. Escape characters and handling of conversion errors can only be changed in TEXT MODE or in LEGACY ... MODE.
    Runtime error: CONVT\_CODEPAGE
    

CX\_SY\_FILE\_OPEN\_MODE

-   Error Type: READ\_ONLY
    Cause: File is only open for reads.
    Runtime error: DATASET\_READ\_ONLY
    
-   Error Type: NOT\_OPEN
    Cause: File is not open.
    Runtime error: DATASET\_NOT\_OPEN
    
-   Error Type: INCOMPATIBLE\_MODE
    Cause: File opened in incompatible mode.
    Runtime error: DATASET\_INCOMPATIBLE\_MODE
    

CX\_SY\_FILE\_POSITION

-   Error Type: SEEK\_ERROR
    Cause: Error when positioning in file.
    Runtime error: DATASET\_SEEK\_ERROR
    
-   Error Type: TELL\_ERROR
    Cause: No access to current writing/reading position in the file.
    Runtime error: DATASET\_NO\_POSITION
    
-   Error Type: OFFSET\_TOO\_LARGE
    Cause: The specified offset for the file exceeds the defined
    system limit for the platform.
    Runtime error: DATASET\_OFFSET\_TOO\_LARGE
    

Non-Handleable Exceptions

-   Cause: An attempt was made to change the position in the case of a pipe. Pipes cannot, however, be positioned.
    Runtime error: DATASET\_PIPE\_POSITION