  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Program%20Types%2C%20ABENPROGRAM_TYPE_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Program Types

The type of an ABAP program determines, among other things, which declarations and processing blocks a program can contain and how it can be executed in the ABAP runtime framework.

The following table shows the program types for standalone programs ([compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry")) and how they affect their properties:

Program Type

Program-Initiating Statement

Execution

Global Declarations

Processing Blocks

Dynpros

Text Pools

[Class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry")

[CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\))

[Call](javascript:call_link\('abenmethod_calls.htm'\)) of a visible method or using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") for an [object transaction](javascript:call_link\('abenoo_transaction_glosry.htm'\) "Glossary Entry").

A global class of the class library, local interfaces and classes, statements [TYPES](javascript:call_link\('abaptypes.htm'\)) and [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

Methods only

No

Yes

[Interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry")

[INTERFACE-POOL](javascript:call_link\('abapinterface-pool.htm'\))

None

A global interface of the class library

None

No

No

[Function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") or [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry")

[FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\))

Call of a function module using [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) or of a dynpro using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except event blocks for [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry")

Yes

Yes

[Executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry")

[REPORT](javascript:call_link\('abapreport.htm'\))

Statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) or call of a dynpro or selection screen using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except function modules

Yes

Yes

[Module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry")

[PROGRAM](javascript:call_link\('abapprogram.htm'\))

Call of a dynpro using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all declarative statements

All except function modules and event blocks for reporting events

Yes

Yes

[Subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry")

[PROGRAM](javascript:call_link\('abapprogram.htm'\))

External call of local procedures (subroutines or methods)

Local interfaces and classes, all other declarative statements

Event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)), subroutines, methods

No

Yes

[Type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") or [type group](javascript:call_link\('abentype_group_glosry.htm'\) "Glossary Entry")

[TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\))

None

Statements [TYPES](javascript:call_link\('abaptypes.htm'\)) and [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

None

No

No

The second column of the table shows the respective [program-initiating statement](javascript:call_link\('abenabap_program_statement.htm'\)), the third column shows the type of execution for which the program type is mainly designated. The fourth column shows which declarations can be made in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program with the specified type. The fifth column indicates which [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") the program can contain. The sixth column indicates whether standalone [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are supported. The final column indicates whether standalone [text pools](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") can be created.

Programming Guideline

[ABAP Program Types](javascript:call_link\('abenprogram_type_guidl.htm'\) "Guideline")