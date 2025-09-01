  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_blocks.htm) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload-of-program.htm)

The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Note

[Class pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload-of-program.htm)