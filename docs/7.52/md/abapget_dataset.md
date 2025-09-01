  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) → 

GET DATASET

[Quick Reference](javascript:call_link\('abapget_dataset_shortref.htm'\))

Syntax

GET DATASET dset *\[*POSITION pos*\]* *\[*ATTRIBUTES attr*\]*.

Extras:

[1\. ... POSITION pos](#!ABAP_ADDITION_1@1@)
[2\. ... ATTRIBUTES attr](#!ABAP_ADDITION_2@2@)

Effect

The addition POSITION is used by this statement to determine the current position of the file pointer in the file specified in dset and the addition ATTRIBUTES is used to get additional file attributes.

dset expects a character-like data object containing the [physical name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") of the file. The file must already be open, otherwise a handleable exception of the class CX\_SY\_FILE\_OPEN\_MODE is raised.

Return Value

The statement GET DATASET always sets sy-subrc to the value 0 or raises an exception.

Note

If no additions are specified, the statement can be used to determine whether or not the file is open with the aid of a [TRY](javascript:call_link\('abaptry.htm'\)) control structure.

Example

The statement GET DATASET raises an exception if the file is not yet open.

DATA(dset) = 'test.dat'.
TRY.
    GET DATASET dset.
  CATCH cx\_sy\_file\_open\_mode.
    ...
ENDTRY.

Addition 1

... POSITION pos

Effect

This addition assigns the current position of the file pointer to the data object pos. The following can be specified for pos:

-   An existing variable of the data type i or a variable to which the type i can be converted.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type i is declared.
    

The position is specified in bytes; the start of the file corresponds to position 0.

The addition POSITION cannot be specified for files that have been opened with the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) of the statement OPEN DATASET. This raises a handleable exception.

Note

For file sizes greater than 2 GB, a data object pos of data type i is not sufficient for recording all the possible positions of the file pointer.

Example

After the first literal is saved, the position of the file pointer is assigned to the variable pos, which is then used to position the file pointer before the read.

DATA: file TYPE string VALUE 'test.dat',
      text TYPE string.
OPEN DATASET file FOR OUTPUT IN TEXT MODE
                             ENCODING DEFAULT
                             WITH SMART LINEFEED.
TRANSFER '1234567890' TO file.
GET DATASET file POSITION DATA(pos).
TRANSFER 'ABCDEFGHIJ' TO file.
CLOSE DATASET file.
OPEN DATASET file FOR INPUT IN TEXT MODE
                            ENCODING DEFAULT
                            WITH SMART LINEFEED
                            AT POSITION pos.
READ DATASET file INTO text.
CLOSE DATASET file.

Addition 2

... ATTRIBUTES attr

Effect

This addition passes the attributes used to open the file (using the statement OPEN DATASET) to the data object attr. The following can be specified for attr:

-   An existing variable of the data type dset\_attributes from the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") DSET.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type dset\_attributes is declared.
    

The data type is defined in the type group as follows:

dset\_attributes is a structured type with two substructures: fixed and changeable. The components of the substructure fixed record attributes of the file that cannot be changed using the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)) (see Table 1). The components of the substructure changeable record attributes of the file that can be changed using the statement SET DATASET (see Table 2).

Table 1

Component

Meaning

indicator

Structure whose components mode, access\_type, encoding, filter, and linefeed in attr contain the value "X" if the identically named components of the structure fixed are significant for the current file.

mode

Storage mode. Possible values in attr are "T", "LT", "B", and "LB" for [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry"), [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text files, [binary files](javascript:call_link\('abenbinary_file_glosry.htm'\) "Glossary Entry"), and [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") binary files. The associated addition of the statement OPEN DATASET is [IN mode](javascript:call_link\('abapopen_dataset_mode.htm'\)).

access\_type

Access type. Possible values in attr are "I", "O", "A", and "U" for files that were opened for reading, writing, appending, and editing. The associated addition of the statement OPEN DATASET is [FOR access](javascript:call_link\('abapopen_dataset_access.htm'\)).

encoding

Character format. Possible values in attr are "NON-UNICODE" and "UTF-8". The associated addition of the statement OPEN DATASET is [ENCODING *{* DEFAULT *|* UTF-8 *|* NON-UNICODE *}*](javascript:call_link\('abapopen_dataset_mode.htm'\)).

filter

In attr, contains the filter command if the file was opened with the [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) addition of the statement OPEN DATASET.

linefeed

Contains the [end-of-line marking](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) used when accessing a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file.

Table 2

Component

Meaning

indicator

Structure whose components repl\_char, conv\_errors, code\_page, endian, and linefeed\_mode contain the value "X" in attr if the identically named components of the structure changeable are significant for the current file.

repl\_char

After opening the file, this component contains the replacement character in attr that was specified using the addition [REPLACEMENT CHARACTER](javascript:call_link\('abapopen_dataset_error_handling.htm'\)) of the statement OPEN DATASET.

conv\_errors

After opening the file, this component contains the value "I" in attr if it was opened using the addition [IGNORING CONVERSION ERRORS](javascript:call_link\('abapopen_dataset_error_handling.htm'\)) of the statement OPEN DATASET, otherwise it contains the value "R".

code\_page

After opening the file, this component contains the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") in attr that was specified using the addition [CODE PAGE](javascript:call_link\('abapopen_dataset_mode.htm'\)) of the statement OPEN DATASET. If no addition is used, the content of attr is initial.

endian

After opening the file, this component contains the value "B" in attr if the addition [BIG ENDIAN](javascript:call_link\('abapopen_dataset_mode.htm'\)) of the statement OPEN DATASET was used or "L" if the addition [LITTLE ENDIAN](javascript:call_link\('abapopen_dataset_mode.htm'\)) was used. If no addition is used, the content of attr is initial.

linefeed\_mode

After opening the file, this component contains one of the values "N", "S", "U", or "W" in attr if the corresponding addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) of the statement OPEN DATASET was used. If none of the additions is used, the content in attr is initial.

For some of the components, constants are defined in the type group DSET as comparison values.

Note

The determinable attributes do not represent the attributes of the file in the operating system, but the attributes with and by which the file is opened and handled in ABAP.

Example

In this example, the system first checks whether the file test.dat was opened using the addition FILTER. If not (and only if not), the current file position is determined using GET DATASET.

DATA: dset TYPE string VALUE 'test.dat',
      pos TYPE i.
OPEN DATASET dset FOR INPUT IN BINARY MODE
                  FILTER 'uncompress'.
...
GET DATASET dset ATTRIBUTES DATA(attr).
IF attr-fixed-indicator-filter <> 'X'.
  GET DATASET dset POSITION pos.
ELSE.
  ...
ENDIF.
CLOSE DATASET dset.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

-   CX\_SY\_FILE\_OPEN\_MODE The file is not open.
    
-   CX\_SY\_FILE\_POSITION The file could not be read because an invalid status exists or the type of file does not permit position specification.
    
-   CX\_SY\_CONVERSION\_OVERFLOW The variable pos was assigned a type that is too small to include the current position.