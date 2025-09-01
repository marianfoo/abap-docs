  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Program Constructor, ABENPROGRAM_CONSTRUCTOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm)

The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Hints

-   [Class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.
-   The program constructor should only be used according to its purpose to initialize global program data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions. Especially for [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), the event block [INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm), that is executed as part of processing such a program, is preferable for use cases that involve user interactions.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm)