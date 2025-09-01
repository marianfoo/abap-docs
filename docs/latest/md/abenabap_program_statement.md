  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Program-Initiating%20Statements%2C%20ABENABAP_PROGRAM_STATEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Program-Initiating Statements

The program-initiating statements are:

-   [REPORT](javascript:call_link\('abapreport.htm'\))
-   [PROGRAM](javascript:call_link\('abapprogram.htm'\))
-   [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\))
-   [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\))
-   [INTERFACE-POOL](javascript:call_link\('abapinterface-pool.htm'\))
-   [TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\)).

The initiating statement of each program depends on the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") specified in the [program properties](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry").

All statements that follow the program-initiating statements in the source code or that are included as [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are handled as a single unit by ABAP Compiler.

The first statement of every standalone ABAP program must be a program-initiating statement, and each program can only contain one of these statements. The only other statement allowed at the first position instead of the initiating statement is the statement INCLUDE. In this case, a program-initiating statement must appear at the first position of the program after the include program is resolved when it is generated.

Class pools, interface pools, function pools, executable programs, module pools, subroutine pools, and type pools are independent [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"). Include programs, on the other hand, are only used in the context of compilation units.

Type pools, also referred to as type groups, are logically independent programs in which no executable code can be stored, only type definitions and constant definitions. For this reason, type pools have their own program-initiating statement, TYPE-POOL.

Hint

The assignment of initiating statements to the program types defined in the [program properties](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry") is not mandatory. However, the assignment described in the following sections should always be used. When a program is created, the appropriate statement is created automatically by the ABAP Workbench or ADT and should only be changed in the additions during editing. In particular, the keywords FUNCTION-POOL, CLASS-POOL, INTERFACE-POOL, and TYPE-POOL should only be created by the corresponding tools of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") and never be entered manually in the source code in order to avoid unexpected system behavior.

Continue
[REPORT](javascript:call_link\('abapreport.htm'\))
[PROGRAM](javascript:call_link\('abapprogram.htm'\))
[FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\))
[CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\))
[INTERFACE-POOL](javascript:call_link\('abapinterface-pool.htm'\))
[TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\))