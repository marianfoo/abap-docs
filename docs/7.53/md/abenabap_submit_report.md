  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) → 

Calling Executable Programs

[Executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") are only directly executable from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a [report transaction](javascript:call_link\('abenreport_transaction_glosry.htm'\) "Glossary Entry"), the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is executed internally. Executable programs are the only programs that can be called using SUBMIT.

-   [Flow of an Executable Program](javascript:call_link\('abenreporting_process.htm'\))

-   The statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\))

Note

When the statement SUBMIT is executed, it is followed by an authorization check (using the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_PROGRAM) for the [authorization group](javascript:call_link\('abenauthorization_group_glosry.htm'\) "Glossary Entry") specified in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry").

Continue
[Flow of an Executable Program](javascript:call_link\('abenreporting_process.htm'\))
[SUBMIT](javascript:call_link\('abapsubmit.htm'\))