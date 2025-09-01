  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ DATASET, ABAPREAD_DATASET, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

READ DATASET

[Short Reference](javascript:call_link\('abapread_dataset_shortref.htm'\))

Syntax

READ DATASET dset INTO dobj *\[*MAXIMUM LENGTH mlen*\]*
                            *\[**\[*ACTUAL*\]* LENGTH alen*\]*.

Additions:

[1\. ... MAXIMUM LENGTH mlen](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*ACTUAL*\]* LENGTH alen](#!ABAP_ADDITION_2@2@)

Effect

This statement transfers data from the file specified in dset to the data object dobj. dobj expects variables with elementary data types and [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"). The file must be opened using any access type. If a closed or nonexistent file is accessed, a catchable exception is raised. If the file was opened as a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry"), dobj must be character-like.

dset expects a character-like data object that contains the [physical name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") of the file. The content is read from the file starting from the current file pointer. After the data is passed, the file pointer is positioned after the section that was read. Using the MAXIMUM LENGTH addition, the number of characters or bytes to be read from the file can be limited. Using ACTUAL LENGTH, the number of characters or bytes actually read can be determined.

Effect of the Access Type

Files can be read regardless of the [access type](javascript:call_link\('abapopen_dataset_access.htm'\)). Whether data can be read or not depends solely on the position of the file pointer. If the latter is at the end of the file or after the file, no data can be read and sy-subrc will be set to 4.

Effect of the Storage Type

The import depends on the [storage type](javascript:call_link\('abapopen_dataset_mode.htm'\)) used to open the file with the statement OPEN DATASET.

-   If the file was opened as a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or as a [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file, the data is read from the current position of the file pointer to the next [end-of-line marker](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) by default, and the file pointer is positioned after the end-of-line marker. If the last character of a text file is not an explicit end-of-line marker, the end of the text file is interpreted as the end of the line. If the data object dobj is too short for the number of read characters, the superfluous characters and bytes are cut off. If it is longer, it is padded with blanks on the right. If dobj is a string, it only contains the read characters.
-   If the file was opened as a [binary file](javascript:call_link\('abenbinary_file_glosry.htm'\) "Glossary Entry") or as a [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") binary file, the system reads as much data that can fit into the data object dobj by default. The file pointer is positioned after the read data. If the data object dobj is longer than the number of read characters, it is padded with hexadecimal 0 on the right. If dobj is a string, the system tries to read the data all at once.

If the specified storage type requires conversion, this is performed before the assignment to the data object dobj. Afterwards, the read data is placed, byte by byte, in the data object.

System Fields

Read Text Files

sy-subrc

Meaning

0

Data was read up to an explicit end-of-line marker or up to an implicit end-of-line marker at the end of the file.

4

An attempt was made to read data after the end of the file.

Read Binary Files

sy-subrc

Meaning

0

Data was read either without reaching the end of the of file or the end of the file was reached exactly.

4

Data was read up to the end of the file and the target field was longer than necessary, or an attempt was made to read data after the end of the file.

Hints

-   The data from the text files can only be imported into character-like data objects and data from binary files should be imported only ‎into byte-like data objects. To evaluate imported data as numeric data objects or mixed structures, it is recommended that these are exported into binary containers and then assigned using the [CASTING](javascript:call_link\('abapassign_casting.htm'\)) addition of the ASSIGN statement in accordance with the typed field symbols. If the file is opened as a legacy text file when data like this is being imported, there is the danger that an end-of-line marker is contained in the binary representation of a number and that the number can therefore not be read.
-   However, a text file without an explicit end-of-line marker still has an implicit end-of-line marker at the end of the file.
-   In an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"), the data objects stored in the file of the [basic type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated object, whose value is a valid [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") of its [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), can be imported. This includes any stored enumerated objects and regular elementary data objects of the basic type. Invalid values raise an exception from the class CX\_SY\_FILE\_IO.

Example

Import of the binary file flights.dat written in the example by the statement [TRANSFER](javascript:call_link\('abaptransfer.htm'\)). The data is written in binary form to a byte-like typed field symbol <hex\_container>. The assignment of the structured [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") wa to the field symbol applies the length of the data area and imports a corresponding number of bytes for the loop process. It would be possible to import directly into the structure wa with the same result, but using the field symbol is the recommended procedure because in this way data is passed explicitly from a binary file to a binary data type.

DATA: wa   TYPE spfli,
      itab LIKE TABLE OF wa WITH EMPTY KEY.
FIELD-SYMBOLS <hex\_container> TYPE x.
FINAL(file) = \`flights.dat\`.
OPEN DATASET file FOR INPUT IN BINARY MODE.
ASSIGN wa TO <hex\_container> CASTING.
DO.
  READ DATASET file INTO <hex\_container>.
  IF sy-subrc = 0.
    APPEND wa TO itab.
  ELSE.
    EXIT.
  ENDIF.
ENDDO.
CLOSE DATASET file.
cl\_demo\_output=>display\_data( itab ).

Addition 1   

... MAXIMUM LENGTH mlen

Effect

This addition determines the maximum number of characters or bytes read from the file. mlen expects a data object of the type i that contains the number of characters or bytes. In the case of text files, the content of mlen determines how many characters are read from the file. In the case of binary files, legacy text files, and legacy binary files, mlen determines how many bytes are read from the file.

The first mlen characters or bytes are read from the current position of the file pointer and the file pointer is positioned after the read data. If the file is opened as a (legacy) text file and there is an end-of-line marker within the specified length, data is read only up to this position and the file pointer is positioned after the [end-of-line marker](javascript:call_link\('abapopen_dataset_linefeed.htm'\)).

If the value of mlen is 0, no data is read. If the value of mlen is negative, the addition is ignored, and the import takes place in the same way as described for Effect of the Storage Type.

Hint

In case of text files, the number of bytes read depends on the character format specified using [ENCODING](javascript:call_link\('abapopen_dataset_encoding.htm'\)) when opening the file.

Example

This program section has the same functions as the previous example. Here data is imported not into a byte-like field symbol, but into a byte-like data object hex\_container. The number of bytes to be imported is determined by the typed field symbol <spfli>.

DATA: hex\_container TYPE x LENGTH 1000,
      len           TYPE i,
      itab          TYPE TABLE OF spfli WITH EMPTY KEY.
FIELD-SYMBOLS <spfli> TYPE spfli.
DESCRIBE FIELD <spfli> LENGTH len IN BYTE MODE.
FINAL(file) = \`flights.dat\`.
OPEN DATASET file FOR INPUT IN BINARY MODE.
ASSIGN hex\_container TO <spfli> CASTING.
DO.
  READ DATASET file INTO hex\_container MAXIMUM LENGTH len.
  IF sy-subrc = 0.
    APPEND <spfli> TO itab.
  ELSE.
    EXIT.
  ENDIF.
ENDDO.
CLOSE DATASET file.
cl\_demo\_output=>display\_data( itab ).

Addition 2   

... *\[*ACTUAL*\]* LENGTH alen

Effect

This addition assigns the number of characters or bytes to be read from the file to the data object alen. The following can be specified for alen:

-   An existing variable of the data type i or a variable to which the type i can be converted.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)), where a variable of type i is declared.

For text files, the system determines how many characters were written to the memory. For binary files, legacy text files, and legacy binary files, the system determines how many bytes were read from the file.

Example

The system field sy-abcde contains 26 characters. A conversion to UTF-16 representation creates a byte string with 52 bytes. This number is determined using the addition LENGTH and displayed after a file containing the byte chain is read.

DATA(xstr) =
cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\`
  )->convert( conv #( sy-abcde ) ).
FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
TRANSFER xstr TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT in BINARY MODE.
READ DATASET dset INTO xstr ACTUAL LENGTH FINAL(bytes).
CLOSE DATASET dset.
cl\_demo\_output=>display( bytes ).
DELETE DATASET dset.

Hints

-   Regardless of the length of the target field, the number of characters or bytes actually read from the file is always returned.
-   The optional addition ACTUAL was introduced to distinguish the addition LENGTH more effectively from the addition MAXIMUM LENGTH. For this reason, the addition ACTUAL should always be used.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

-   Cause: The required conversion is not supported. (For example, because a language not supported by the conversion was specified using SET LOCALE LANGUAGE.)
    Runtime error: CONVT\_CODEPAGE\_INIT

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: Conversion is not possible. The data is read as far as possible. Text data where the conversion has failed is undefined (see also note below).
    Runtime error: CONVT\_CODEPAGE

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization for access to file
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY

CX\_SY\_FILE\_IO

-   Cause: An error occurred when the file was read.
    Runtime error: DATASET\_READ\_ERROR

CX\_SY\_FILE\_OPEN

-   Cause: File cannot be opened.
    Runtime error: DATASET\_CANT\_OPEN

CX\_SY\_FILE\_OPEN\_MODE

-   Cause: The file is not open.
    Runtime error: DATASET\_NOT\_OPEN

CX\_SY\_PIPE\_REOPEN

-   Cause: The file was opened using the addition FILTER and since then a switch of the work process took place.
    Runtime error: DATASET\_PIPE\_CLOSED