  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) → 

ABAP Program Types

The type of an ABAP program determines, among other things, which declarations and processing blocks a program can contain and it can be executed in the ABAP runtime environment.

The following table shows all program types for standalone programs ([compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry")) and how they affect their properties:

Program Type

Execution

Global Declarations

Processing Blocks

Dynpros

Text Pools

[Executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry")

Statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) or call of a dynpro or selection screen using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except function modules

Yes

Yes

[Class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry")

[Call](javascript:call_link\('abenmethod_calls.htm'\)) using a visible method or using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

A global class of the class library, local interfaces and classes, statements [TYPES](javascript:call_link\('abaptypes.htm'\)) and [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

Methods only

No

Yes

[Function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") or [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry")

Call of a function module using [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) or of a dynpro is called using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except event blocks for [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry")

Yes

Yes

[Interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry")

None

A global interface of the class library

None

No

No

[Module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry")

Call of a dynpro using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all declarative statements

All except function modules and event blocks for reporting events

Yes

Yes

[Subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry")

External call of local procedures (subroutines or methods)

Local interfaces and classes, all other declarative statements

Event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)), subroutines, methods

No

Yes

[Type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") (also [type group](javascript:call_link\('abentype_group_glosry.htm'\) "Glossary Entry"))

None

Statements [TYPES](javascript:call_link\('abaptypes.htm'\)) and [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

None

No

No

The second column of the table shows the type of execution for which the program type is mainly designated. The third column shows which declarations can be made in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program with the specified type. The fourth column indicates which [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") the program can contain. The fifth indicates whether independent [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are supported. The final column indicates whether independent [text pools](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") can be created.

Programming Guideline

[ABAP Program Types](javascript:call_link\('abenprogram_type_guidl.htm'\) "Guideline")