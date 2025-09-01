  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Program-Initiating Statements, ABENABAP_PROGRAM_STATEMENT, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Program-Initiating Statements

The program-initiating statements are:

-   [REPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport.htm)
-   [PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm)
-   [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfunction-pool.htm)
-   [CLASS-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-pool.htm)
-   [INTERFACE-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface-pool.htm)
-   [TYPE-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype-pool.htm).

The initiating statement of each program depends on the [program type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_glosry.htm "Glossary Entry") specified in the [program properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm "Glossary Entry").

All statements that follow the program-initiating statements in the source code or that are included as [include programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") are handled as a single unit by ABAP Compiler.

The first statement of every standalone ABAP program must be a program-initiating statement, and each program can only contain one of these statements. The only other statement allowed at the first position instead of the initiating statement is the statement INCLUDE. In this case, a program-initiating statement must appear at the first position of the program after the include program is resolved when it is generated.

Executable programs, module pools, function pools, class pools, interface pools, subroutine pools, and type pools are independent [compilation units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). Include programs, on the other hand, are only used in the context of compilation units.

Type pools, also referred to as type groups, are logically independent programs in which no executable code can be stored, only type definitions and constant definitions. For this reason, type pools have their own program-initiating statement, TYPE-POOL.

Hint

The assignment of initiating statements to the program types defined in the [program properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm "Glossary Entry") is not mandatory. However, the assignment described in the following sections should always be used. When a program is created, the appropriate statement is created automatically by the ABAP Workbench or ADT and should only be changed in the additions during editing. In particular, the keywords FUNCTION-POOL, CLASS-POOL, INTERFACE-POOL, and TYPE-POOL should only be created by the corresponding tools of the [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry") and never be entered manually in the source code in order to avoid unexpected system behavior.

Continue
[REPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport.htm)
[PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm)
[FUNCTION-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfunction-pool.htm)
[CLASS-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-pool.htm)
[INTERFACE-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface-pool.htm)
[TYPE-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype-pool.htm)