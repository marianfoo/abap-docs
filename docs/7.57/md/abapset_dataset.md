  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET DATASET, ABAPSET_DATASET, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

SET DATASET

[Short Reference](javascript:call_link\('abapset_dataset_shortref.htm'\))

Syntax

SET DATASET dset *\[*POSITION *{*pos*|**{*END OF FILE*}**}**\]*
                 *\[*ATTRIBUTES attr*\]*.

Additions:

[1\. ... POSITION *{*pos*|**{*END OF FILE*}**}*](#!ABAP_ADDITION_1@1@)
[2\. ... ATTRIBUTES attr](#!ABAP_ADDITION_2@2@)

Effect

This statement uses the addition POSITION to determine the position of the file pointer in the file specified in dset. It uses the addition ATTRIBUTES to set additional attributes for the file. At least one of these two additions must be specified.

dset expects a character-like data object containing the [physical name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") of the file. The file must be open, otherwise a catchable exception is raised.

Return Code

The statement SET DATASET always sets sy-subrc to the value 0 or raises an exception.

Addition 1   

... POSITION *{*pos*|**{*END OF FILE*}**}*

Effect

This addition sets the file pointer in the file, either in the position specified in pos, or at the end of the file. pos expects a numeric data object.

The position is specified in bytes, where the start of the file corresponds to position 0. If the value of pos is -1, the file pointer is set at the end of the file. Other negative values are not allowed.

The following cases must be distinguished:

1.  If the file is open for reads and the value of pos is greater than the length of the file, the file pointer is positioned outside the file. Unless the position is changed, no data can be read.
2.  If the file is opened for writes and the value of pos is greater than the length of the file, it is filled with hexadecimal 0s from the end of the file to the specified position the next time a write is performed on it.
3.  If the file is opened for appending, the position specified is ignored and the file pointer remains positioned at the end of the file.
4.  If the file is opened for changes, and the value of pos is greater than the length of the file, it is filled with hexadecimal 0 from the end of the file to the specified position the next time a write is performed on it.

The addition POSITION cannot be specified for files that have been opened with the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) of the statement OPEN DATASET. This raises a catchable exception.

Hints

-   For file sizes greater than 2 GB, a data object pos of data type i is not sufficient for specifying all possible positions of the file pointer.
-   Free position specifications are more suitable for binary files than for text files. In text files, positions depend on the character representation, end-of-line markers, and in UTF-8 files, also on a Byte Order Mark (BOM). In text files, the file pointer should only be placed in positions known exactly, for example positions obtained using [GET DATASET](javascript:call_link\('abapget_dataset.htm'\)).

Example

When writing, the file is read from the start of the file until the first end-of-line marker, and then the new content is written starting from the end of the file. If the file pointer is not set explicitly after a read, the last [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) statements would overwrite the file after the first end-of-line marker.

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

This addition can be used to change some of the attributes that were determined when the file was opened with the statement [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)). attr expects a data object of type dset\_changeable\_attributes from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") DSET (see the table below). The structure dset\_changeable\_attributes corresponds to the substructure changeable of the structure dset\_attributes. Data objects of the structure dset\_attributes can be filled using the statement [GET DATASET](javascript:call_link\('abapget_dataset.htm'\)).

Component

Meaning

indicator

Structure with the components repl\_char, conv\_errors, code\_page, endian, and linefeed\_mode. If these components contain the value X in attr, the values are used in the components with the same names in the structure dset\_changeable\_attributes when changes are made.

repl\_char

In this component of attr, a single-character character-like replacement character can be specified to overwrite the replacement character specified when the file was opened using the addition [REPLACEMENT CHARACTER](javascript:call_link\('abapopen_dataset_error_handling.htm'\)) of the statement OPEN DATASET.

conv\_errors

In this component of attr, the value I or R can be specified to overwrite the setting made when the file was opened using the addition [IGNORING CONVERSION ERRORS](javascript:call_link\('abapopen_dataset_error_handling.htm'\)). The value I suppresses the exceptions, R raises the exceptions.

code\_page

In this component of attr, a [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") from the column CPCODEPAGE of the database table TCP00 can be specified to overwrite the code page specified when the file was opened using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)) of the statement OPEN DATASET.

endian

In this component of attr, the value B or L can be specified to overwrite the setting made when the file was opened using the additions [*{*BIG*|*LITTLE*}* ENDIAN](javascript:call_link\('abapopen_dataset_mode.htm'\)) of the statement OPEN DATASET. The value B sets the byte order to Big Endian; the value L sets it to Little Endian.

linefeed\_mode

In this component of attr, one of the values N, S, U or W can be entered to overwrite the setting made using the addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) of the statement OPEN DATASET as appropriate.

For some components, the possible input values are defined as constants in the type pool DSET.

The values specified in attr must comply with the syntax rules for the associated additions of the statement OPEN DATASET, otherwise a catchable exception is raised:

-   The components repl\_char and conv\_errors can only be used when making changes if the file is open as a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry"), [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file, or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") binary file, but not if it is opened as a [binary file](javascript:call_link\('abenbinary_file_glosry.htm'\) "Glossary Entry")
-   The components code\_page and endian can only be used when making changes if the file is open as a legacy text file or a legacy binary file.
-   The component linefeed\_mode can only be used when making changes if the file is open as a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or a [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file and if the end-of-line marker has been set explicitly using the addition [WITH LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)).

Hint

The modifiable attributes do not affect the attributes of the file in the operating system, but rather the attributes with which the file is opened in ABAP and according to which it is handled in ABAP.

Example

Depending on the non-modifiable attributes of the file test.dat, some of its modifiable attributes are reset.

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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

-   Cause: The specified code page is not available for the current AS instance.
    Runtime error: CONVT\_CODEPAGE\_INIT

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: The escape character cannot be represented in the target code page. Escape characters and handling of conversion errors can only be changed in TEXT MODE or in LEGACY ... MODE.
    Runtime error: CONVT\_CODEPAGE

CX\_SY\_FILE\_OPEN\_MODE

-   Error Type READ\_ONLY
    Cause: File is only open for reads.
    Runtime error: DATASET\_READ\_ONLY
-   Error Type NOT\_OPEN
    Cause: File is not open.
    Runtime error: DATASET\_NOT\_OPEN
-   Error Type INCOMPATIBLE\_MODE
    Cause: File opened in incompatible mode.
    Runtime error: DATASET\_INCOMPATIBLE\_MODE

CX\_SY\_FILE\_POSITION

-   Error Type SEEK\_ERROR
    Cause: Error when positioning in file.
    Runtime error: DATASET\_SEEK\_ERROR
-   Error Type TELL\_ERROR
    Cause: No access to current read/write position in the file.
    Runtime error: DATASET\_NO\_POSITION
-   Error Type OFFSET\_TOO\_LARGE
    Cause: The specified offset for the file exceeds the defined
    system limit for the platform.
    Runtime error: DATASET\_OFFSET\_TOO\_LARGE

Uncatchable Exceptions

-   Cause: An attempt was made to change the position in the case of a pipe. Pipes cannot, however, be positioned.
    Runtime error: DATASET\_PIPE\_POSITION