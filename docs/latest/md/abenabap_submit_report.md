  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calling%20Executable%20Programs%2C%20ABENABAP_SUBMIT_REPORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Calling Executable Programs

[Executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") can only be executed directly from the perspective of the end user. Whenever an executable program is started using System → Services → Reporting or a [report transaction](javascript:call_link\('abenreport_transaction_glosry.htm'\) "Glossary Entry"), the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is executed internally. Executable programs are the only programs that can be called using SUBMIT.

-   [Flow of an Executable Program After SUBMIT](javascript:call_link\('abenreporting_process.htm'\))
-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\))

Hint

When the statement SUBMIT is executed, an authorization check is performed using the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_PROGRAM for the [authorization group](javascript:call_link\('abenauthorization_group_glosry.htm'\) "Glossary Entry") specified in the [program properties](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry").

Continue
[Flow of an Executable Program After SUBMIT](javascript:call_link\('abenreporting_process.htm'\))
[SUBMIT](javascript:call_link\('abapsubmit.htm'\))