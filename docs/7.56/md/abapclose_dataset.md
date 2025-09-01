  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) → 

CLOSE DATASET

[Short Reference](javascript:call_link\('abapclose_dataset_shortref.htm'\))

Syntax

CLOSE DATASET dset.

Effect

This statement closes the file specified in dset. dset expects a character-like data object that contains the [physical name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") of the file. If the file is already closed or does not exist, the statement is ignored and the return code sy-subrc is set to 0.

If the operating system buffers data before it is written to a file and there is still data in the buffer, this data is written to the file before closing.

Hint

An opened file that was not explicitly closed using CLOSE DATASET is automatically closed when the program is exited.

Return Code

-   If a file was opened without the [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) addition, sy-subrc always contains the value 0 if no exception is raised.
-   If a file was opened using the FILTER addition, sy-subrc contains the return code of the filter program, which is returned by the operating system. This value is generally 0 if the statement was executed successfully.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_FILE\_CLOSE

-   Cause: The file could not be closed. Insufficient memory space is a possible reason for this.
    Runtime error: DATASET\_CANT\_CLOSE

Example

Closing of a file open for writing.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
  ...
CLOSE DATASET dset.