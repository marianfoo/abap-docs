  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_statements.htm) → 

DELETE DATASET

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_dataset_shortref.htm)

Syntax

DELETE DATASET dset.

Effect

The statement deletes the file specified in dset. dset expects a character-like data object containing the [physical name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The file can be opened or closed.

Hint

When a file is deleted, [automatic authorization checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_authority.htm) are performed; [self-programmed checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendataset_auth_self.htm) may also be necessary.

Security Hint

Access to a file whose name dset is injected into a program from outside is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used. See [Directory Traversal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendyn_file_scrty.htm).

Return Code

sy-subrc

Meaning

0

File has been deleted.

4

File could not be deleted.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization for access to file
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY (can be handled)

CX\_SY\_FILE\_OPEN

-   Cause: File cannot be opened
    Runtime error: DATASET\_CANT\_OPEN (can be handled)
    

Example

Opens a file for writing and reading and then deletes the file.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
  ...
CLOSE DATASET dset.
...
OPEN DATASET dset FOR INPUT IN BINARY MODE.
  ...
CLOSE DATASET dset.
DELETE DATASET dset.