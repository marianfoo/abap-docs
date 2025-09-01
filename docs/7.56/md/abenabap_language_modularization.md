  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) → 

Modularization Statements

Each ABAP program is modularized by [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"). Each accessible statement of an ABAP program that does not belong to the global declaration part of the program belongs to a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry").

The possible processing blocks are:

-   [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\))
    
    ABAP statements are used to process procedures. Possible [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") are: [Methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") , [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"), and [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry")
    
-   [Dialog modules](javascript:call_link\('abapmodule.htm'\))
    
    [Dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") is used to process dialog modules.
    
-   [Event blocks](javascript:call_link\('abenevent_blocks.htm'\))
    
    [Events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") are used to process event blocks.
    

Processing blocks are arranged in any order in the source code of an ABAP program. Non-declarative statements that are listed between or after completed processing blocks cannot be accessed and can never be executed. The syntax check reports such dead source code as errors. Declarative statements that are listed between or after completed processing blocks are part of the global data declarations of an ABAP program and are visible in all subsequent processing blocks.

[Macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") and [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") can be used to [modularize source code](javascript:call_link\('abenabap_language_includes.htm'\)) that is not bound to processing blocks.

Programming Guideline

[ABAP Objects as a Programming Model](javascript:call_link\('abenabap_obj_progr_model_guidl.htm'\) "Guideline")

Continue
[Procedures](javascript:call_link\('abenabap_language_procedures.htm'\))
[Dialog Modules](javascript:call_link\('abendialog_module.htm'\))
[Event Blocks](javascript:call_link\('abenevent_blocks.htm'\))
[Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\))