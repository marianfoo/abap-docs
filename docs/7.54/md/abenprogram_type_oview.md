  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) → 

ABAP Program Types

The type of an ABAP program determines (among other things) which declarations and processing blocks a program can contain and how the program can be executed in the ABAP runtime environment.

The following table shows all program types for standalone programs ([compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry")) and how the attributes of the programs are affected by the type.

Program Type

Execution

Global Declarations

Processing Blocks

Dynpros

Text Pools

[Executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry")

Statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) or a dynpro or selection screen called using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all other declarative statements

All (except function modules)

Yes

Yes

[Class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry")

[Call](javascript:call_link\('abenmethod_calls.htm'\)) using a visible method or using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

A global class from the class library, local interfaces and classes, statements [TYPES](javascript:call_link\('abaptypes.htm'\)) and [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

Methods only

No

Yes

[Function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry") or [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry")

A function module is called using [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) or a dynpro is called using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all other declarative statements

All (except event blocks for [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry"))

Yes

Yes

[Interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry")

None

A global interface from the class library

None

No

No

[Module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry")

A dynpro is called using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

Local interfaces and classes, all declarative statements

All (except function modules and event blocks for reporting events)

Yes

Yes

[Subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry")

External call of local procedures (subroutines or methods)

Local interfaces and classes, all other declarative statements

Event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)), subroutines, methods

No

Yes

[Type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") or [type pool](javascript:call_link\('abentype_group_2_glosry.htm'\) "Glossary Entry")

None

Statements [TYPES](javascript:call_link\('abaptypes.htm'\)) and [CONSTANTS](javascript:call_link\('abapconstants.htm'\))

None

No

No

The second column of the table shows which category of execution the program type is designed for. The third column shows which declarations can be made in the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program with the specified type. The fourth column shows which [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") the program can contain. The fifth indicates whether the program can support its own [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). The final column indicates whether the program can create its own [text pools](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry").

Programming Guideline

[ABAP Program Types](javascript:call_link\('abenprogram_type_guidl.htm'\) "Guideline")