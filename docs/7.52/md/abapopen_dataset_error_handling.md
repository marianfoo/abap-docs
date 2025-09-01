  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) → 

OPEN DATASET - error\_handling

[Quick Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... *\[*MESSAGE msg*\]*
    *\[*IGNORING CONVERSION ERRORS*\]*
    *\[*REPLACEMENT CHARACTER rc*\]* ...

Extras:

[1\. ... MESSAGE msg](#!ABAP_ADDITION_1@1@)
[2\. ... IGNORING CONVERSION ERRORS](#!ABAP_ADDITION_2@2@)
[3\. ... REPLACEMENT CHARACTER rc](#!ABAP_ADDITION_3@3@)

Effect

In the case of errors, these additions enable operating system messages to be received, exceptions to be suppressed, and a replacement character to be defined for unknown characters.

Addition 1

... MESSAGE msg

Effect

If an error occurs when a file is opened, the associated operating system message is assigned to the data object msg. A character-like variable can be specified for msg.

Example

Produces the operating system message after an attempt to open a file with an empty name.

DATA mess TYPE string.
OPEN DATASET \`\` FOR INPUT IN BINARY MODE MESSAGE mess.
IF sy-subrc = 8.
  MESSAGE mess TYPE 'I'.
ENDIF.

Addition 2

... IGNORING CONVERSION ERRORS

Effect

This addition can be used to suppress a handleable exception defined by the class CX\_SY\_CONVERSION\_CODEPAGE. This exception can be raised by reads or writes if a conversion between [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") takes place and a character cannot be converted to the target code page.

This addition is possible when opening [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry"), [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text files, or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") binary files, but not when opening [binary files](javascript:call_link\('abenbinary_file_glosry.htm'\) "Glossary Entry").

Notes

-   Each non-convertible character is replaced in the conversion either by the character "#" or by the character defined by the addition REPLACEMENT CHARACTER. The addition IGNORING CONVERSION ERRORS defines whether or not the user is notified of this by an exception.
    
-   This setting can be changed in an opened file using the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)).
    

Example

See the addition REPLACEMENT CHARACTER.

Addition 3

... REPLACEMENT CHARACTER rc

Effect

If a conversion between [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") takes place while data is being read or written, every character that cannot be converted to the target code page is replaced by the character specified in rc. rc expects a character-like data object containing a single character. If the addition is not specified, the character "#" is used as a replacement character.

This addition is possible when opening [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry"), [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text files, or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") binary files, but not when opening [binary files](javascript:call_link\('abenbinary_file_glosry.htm'\) "Glossary Entry").

Notes

-   If at least one character is replaced by a replacement character in a read or write, the exception defined in the class CX\_SY\_CONVERSION\_CODEPAGE is raised after the conversion, if this is not suppressed by the addition IGNORING CONVERSION ERRORS.
    
-   The replacement character of an opened file can be changed using the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)).
    

Example

When a legacy text file is opened with ID 1101 for codepage 7-Bit USA ASCII, the exception of class CX\_SY\_CONVERSION\_CODEPAGE is suppressed and a replacement character is specified. When data is being written to a file, the character ü is replaced by u without an exception being raised. Compare the example to addition [CODE PAGE](javascript:call_link\('abapopen_dataset_code_page.htm'\)).

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN LEGACY TEXT MODE CODE PAGE '1101'
                                REPLACEMENT CHARACTER 'u'
                                IGNORING CONVERSION ERRORS.
TRY.
    TRANSFER 'Blahblahblah...' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO DATA(exc).
    cl\_demo\_output=>write( 'Error writing to 7-Bit USA ASCII' ).
ENDTRY.
CLOSE DATASET dset.
DATA text TYPE string.
OPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE CODE PAGE '1101'.
READ DATASET dset INTO text.
CLOSE DATASET dset.
cl\_demo\_output=>display( text ).
DELETE DATASET dset.