---
title: "DELETE DATASET"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dataset_shortref.htm) Syntax DELETE DATASET dset. Effect The statement deletes the file specified in dset. dset expects a character-like data object that contains the physical name(https://help.sap.com/doc/abap
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dataset.htm"
abapFile: "abapdelete_dataset.htm"
keywords: ["delete", "do", "if", "try", "catch", "data", "abapdelete", "dataset"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_interface_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20DATASET%2C%20ABAPDELETE_DATASET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE DATASET

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dataset_shortref.htm)

Syntax

DELETE DATASET dset.

Effect

The statement deletes the file specified in dset. dset expects a character-like data object that contains the [physical name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The file can be opened or closed.

Hint

When a file is deleted, [automatic authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_interface_authority.htm) are performed, but [self-programmed checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendataset_auth_self.htm) may also be necessary.

Security Hint

Access to a file whose name dset is passed to a program from outside is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used. See [Directory Traversal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendyn_file_scrty.htm).

Return Code

sy-subrc

Meaning

0

File has been deleted.

4

File could not be deleted.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization for access to file
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY (can be handled)

CX\_SY\_FILE\_OPEN

-   Cause: File cannot be opened
    Runtime error: DATASET\_CANT\_OPEN (can be handled)

Example

Opening of a file for writing and reading and then deleting the file.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
  ...
CLOSE DATASET dset.
...
OPEN DATASET dset FOR INPUT IN BINARY MODE.
  ...
CLOSE DATASET dset.
DELETE DATASET dset.