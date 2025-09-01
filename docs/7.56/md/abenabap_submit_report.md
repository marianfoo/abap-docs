  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) → 

Calling Executable Programs

[Executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") can only be executed directly from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a [report transaction](javascript:call_link\('abenreport_transaction_glosry.htm'\) "Glossary Entry"), the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is executed internally. Executable programs are the only programs that can be called using SUBMIT.

-   [Flow of an Executable Program after SUBMIT](javascript:call_link\('abenreporting_process.htm'\))
-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\))

Hint

When the statement SUBMIT is executed, an authorization check is performed using the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_PROGRAM for the [authorization group](javascript:call_link\('abenauthorization_group_glosry.htm'\) "Glossary Entry") specified in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry").

Continue
[Flow of an Executable Program after SUBMIT](javascript:call_link\('abenreporting_process.htm'\))
[SUBMIT](javascript:call_link\('abapsubmit.htm'\))