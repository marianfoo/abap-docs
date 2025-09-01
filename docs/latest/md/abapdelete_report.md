  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_program.htm) →  [Internal Statements for Source Code Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20REPORT%2C%20ABAPDELETE_REPORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE REPORT

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE REPORT prog.

Addition:

[... STATE state](#!ABAP_ONE_ADD@1@)

Effect

Deletes the source code, properties, text elements, and generated form of the program, whose name is contained in the data object prog. An entry for prog in the database table TADIR remains unchanged.

System Fields

sy-subrc

Meaning

0

The program was deleted.

4

The program did not exist.

Hint

This statement does not delete the package assignment, the documentation, or the variants of the program in prog on the database. For this reason, the function module RS\_DELETE\_PROGRAM should be used to delete a program completely.

Addition   

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values A (for active) and I (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    
    -   the active version of the repository object or
    -   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.
    
    Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.
    
-   If the addition state is specified, the statement accesses
    -   the active version of the repository object if A is specified,
    -   the inactive version of the repository object if I is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: state has a value other than A or I.
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE