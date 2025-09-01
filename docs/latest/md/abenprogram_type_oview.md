  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Program%20Types%2C%20ABENPROGRAM_TYPE_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Program Types

The type of an ABAP program determines, among other things, which declarations and processing blocks a program can contain and how it can be executed in the ABAP runtime framework.

The following table shows the program types for standalone programs ([compilation units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompilation_unit_glosry.htm "Glossary Entry")) and how they affect their properties:

Program Type

Program-Initiating Statement

Execution

Global Declarations

Processing Blocks

Dynpros

Text Pools

[Class pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_pool_glosry.htm "Glossary Entry")

[CLASS-POOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-pool.htm)

[Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm) of a visible method or using a [transaction code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_code_glosry.htm "Glossary Entry") for an [object transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_transaction_glosry.htm "Glossary Entry").

A global class of the class library, local interfaces and classes, statements [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) and [CONSTANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconstants.htm)

Methods only

No

Yes

[Interface pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_pool_glosry.htm "Glossary Entry")

[INTERFACE-POOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterface-pool.htm)

None

A global interface of the class library

None

No

No

[Function pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry") or [function group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_group_glosry.htm "Glossary Entry")

[FUNCTION-POOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction-pool.htm)

Call of a function module using [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) or of a dynpro using a [transaction code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except event blocks for [reporting events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_event_glosry.htm "Glossary Entry")

Yes

Yes

[Executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry")

[REPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreport.htm)

Statement [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) or call of a dynpro or selection screen using a [transaction code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except function modules

Yes

Yes

[Module pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodul_pool_glosry.htm "Glossary Entry")

[PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprogram.htm)

Call of a dynpro using a [transaction code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all declarative statements

All except function modules and event blocks for reporting events

Yes

Yes

[Subroutine pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_pool_glosry.htm "Glossary Entry")

[PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprogram.htm)

External call of local procedures (subroutines or methods)

Local interfaces and classes, all other declarative statements

Event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapload-of-program.htm), subroutines, methods

No

Yes

[Type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") or [type group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_group_glosry.htm "Glossary Entry")

[TYPE-POOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype-pool.htm)

None

Statements [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) and [CONSTANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconstants.htm)

None

No

No

The second column of the table shows the respective [program-initiating statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_statement.htm), the third column shows the type of execution for which the program type is mainly designated. The fourth column shows which declarations can be made in the [global declaration part](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program with the specified type. The fifth column indicates which [processing blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry") the program can contain. The sixth column indicates whether standalone [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") are supported. The final column indicates whether standalone [text pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_pool_glosry.htm "Glossary Entry") can be created.

Programming Guideline

[ABAP Program Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_type_guidl.htm "Guideline")