  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Programs

This section describes the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)) used for exiting programs.

Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))
-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

Hint

The statements for exiting programs are not possible in some contexts as for example during [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") or during [update](javascript:call_link\('abendb_commit_during_update.htm'\)). Therefore they should not be used in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").

Continue
[LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))