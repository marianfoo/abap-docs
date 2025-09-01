  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) → 

ABAP Program Types

The type of an ABAP program determines (among other things) which declarations and processing blocks a program can contain and how the program can be executed in the ABAP runtime environment.

The following table shows all program types for standalone programs ([compilation units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompilation_unit_glosry.htm "Glossary Entry")) and how the attributes of the programs are affected by the type.

Program Type

Execution

Global Declarations

Processing Blocks

Dynpros

Text Pools

[Executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry")

Statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) or a dynpro or selection screen called using a [transaction code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all other declarative statements

All (except function modules)

Yes

Yes

[Class pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_pool_glosry.htm "Glossary Entry")

[Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls.htm) using a visible method or using a [transaction code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry")

A global class from the class library, local interfaces and classes, statements [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) and [CONSTANTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconstants.htm)

Methods only

No

Yes

[Function group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_group_glosry.htm "Glossary Entry") or [function pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_pool_glosry.htm "Glossary Entry")

A function module is called using [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm) or a dynpro is called using a [transaction code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all other declarative statements

All (except event blocks for [reporting events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry"))

Yes

Yes

[Interface pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_pool_glosry.htm "Glossary Entry")

None

A global interface from the class library

None

No

No

[Module pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodul_pool_glosry.htm "Glossary Entry")

A dynpro is called using a [transaction code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all declarative statements

All (except function modules and event blocks for reporting events)

Yes

Yes

[Subroutine pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_pool_glosry.htm "Glossary Entry")

External call of local procedures (subroutines or methods)

Local interfaces and classes, all other declarative statements

Event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm), subroutines, methods

No

Yes

[Type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") or [type pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_2_glosry.htm "Glossary Entry")

None

Statements [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) and [CONSTANTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconstants.htm)

None

No

No

The second column of the table shows which category of execution the program type is designed for. The third column shows which declarations can be made in the [global declaration part](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program with the specified type. The fourth column shows which [processing blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") the program can contain. The fifth indicates whether the program can support its own [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"). The final column indicates whether the program can create its own [text pools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_pool_glosry.htm "Glossary Entry").

Programming Guideline

[ABAP Program Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_type_guidl.htm "Guideline")