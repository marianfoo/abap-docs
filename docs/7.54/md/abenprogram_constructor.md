  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement

-   [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))

by ':'. The associated event occurs when a program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Note

[Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))