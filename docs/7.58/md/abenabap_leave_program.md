  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exiting%20Programs%2C%20ABENABAP_LEAVE_PROGRAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exiting Programs

This section describes the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_program.htm) used for exiting programs.

Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_to_transaction.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm) without AND RETURN

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

Hint

The statements for exiting programs are not possible in some contexts as for example during [unit tests](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunit_test_glosry.htm "Glossary Entry") or during [update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit_during_update.htm). Therefore they should not be used in [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry").

Continue
[LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_program.htm)