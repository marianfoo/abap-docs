  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) → 

OPEN DATASET

[Quick Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

OPEN DATASET dset FOR [access](javascript:call_link\('abapopen_dataset_access.htm'\)) IN [mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) *\[*[position](javascript:call_link\('abapopen_dataset_position.htm'\))*\]*
                                     *\[*[os\_additions](javascript:call_link\('abapopen_dataset_os_addition.htm'\))*\]*
                                     *\[*[error\_handling](javascript:call_link\('abapopen_dataset_error_handling.htm'\))*\]*.

Effect

This statement opens the file specified in dset on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS Instance for the access specified in [access](javascript:call_link\('abapopen_dataset_access.htm'\)) in a storage mode specified in [mode](javascript:call_link\('abapopen_dataset_mode.htm'\)). dset expects a character-like data object containing the [physical name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") of the file. The file must not yet be open in the current program; otherwise a handleable exception is raised.

Use the additions [positions](javascript:call_link\('abapopen_dataset_position.htm'\)), [os\_addition](javascript:call_link\('abapopen_dataset_os_addition.htm'\)), and [error\_handling](javascript:call_link\('abapopen_dataset_error_handling.htm'\)) to determine the position at which file is opened, specify platform-specific additions, and influence error handling.

Notes

-   Up to 100 files can be opened per [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The actual maximum number of simultaneously open files may be less, depending on the platform.
    
-   When a file is opened, [automatic authorization checks](javascript:call_link\('abenfile_interface_authority.htm'\)) are performed; [self-programmed checks](javascript:call_link\('abendataset_auth_self.htm'\)) may also be necessary.
    

Security Note

Access to a file whose name dset is injected into a program from outside is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used. See [Directory Traversal](javascript:call_link\('abendyn_file_scrty.htm'\)).

Return Value

sy-subrc

Meaning

0

The file was opened.

8

The operating system could not open the file.

Example

The example demonstrates the following:

-   Opening a file for writes

-   Writing binary XML data to the file

-   Closing the open file

-   Opening the file for reads

-   Reading the binary XML data from the file

-   Closing the open file

-   Deleting the file

The XML data is created by transforming an internal table to the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") format.

SELECT \*
     FROM scarr
     INTO TABLE @DATA(itab).
CALL TRANSFORMATION id SOURCE scarr = itab
                       RESULT XML DATA(xml).
DATA(dset) = 'scarr.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
TRANSFER xml TO dset.
CLOSE DATASET dset.
...
CLEAR xml.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xml.
CLOSE DATASET dset.
CALL TRANSFORMATION id SOURCE XML xml
                       RESULT scarr = itab.
cl\_demo\_output=>display( itab ).
DELETE DATASET dset.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_FILE\_OPEN

-   Cause: The file is already open.
    Runtime error: DATASET\_REOPEN
    

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

-   Cause: The required conversion is not supported. (Due to specification of invalid code page or of language not supported in the conversion, with SET LOCALE LANGUAGE.)
    Runtime error: CONVT\_CODEPAGE\_INIT
    

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: Internal error in the conversion.
    Runtime error: CONVT\_CODEPAGE
    

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization for access to file
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY
    
-   Cause: Authorization for access to this file is missing in OPEN DATASET with the addition FILTER.
    Runtime error: OPEN\_PIPE\_NO\_AUTHORITY
    

CX\_SY\_PIPES\_NOT\_SUPPORTED

-   Cause: The operating system does not support pipes.
    Runtime error: DATASET\_NO\_PIPE
    

CX\_SY\_TOO\_MANY\_FILES

-   Cause: Maximum number of open files exceeded.
    Runtime error: DATASET\_TOO\_MANY\_FILES
    

Non-Handleable Exceptions

-   Cause: An attempt was made to open a pipe that is already open.
    Runtime error: DATASET\_PIPE\_POSITION
    

Continue
[OPEN DATASET - access](javascript:call_link\('abapopen_dataset_access.htm'\))
[OPEN DATASET - mode](javascript:call_link\('abapopen_dataset_mode.htm'\))
[OPEN DATASET - position](javascript:call_link\('abapopen_dataset_position.htm'\))
[OPEN DATASET - os\_additions](javascript:call_link\('abapopen_dataset_os_addition.htm'\))
[OPEN DATASET - error\_handling](javascript:call_link\('abapopen_dataset_error_handling.htm'\))