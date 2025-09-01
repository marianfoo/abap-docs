  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Program%20Constructor%2C%20ABENPROGRAM_CONSTRUCTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))

The associated event occurs when a program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Hints

-   [Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") from the global class defined in the class pool can be used instead.
-   The program constructor should only be used according to its purpose to initialize global program data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions. Especially for [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), the event block [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)), that is executed as part of processing such a program, is preferable for use cases that involve user interactions.

Continue
[LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))