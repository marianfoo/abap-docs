  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Modularization%20Statements%2C%20ABENABAP_LANGUAGE_MODULARIZATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Modularization Statements

Each ABAP program is modularized by [processing blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). Each accessible statement of an ABAP program that does not belong to the global declaration part of the program belongs to a [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry").

The possible processing blocks are:

-   [Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_procedures.htm)
    
    ABAP statements are used to process procedures. Possible [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") are: [Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry"), [function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry"), and [subroutines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry")
    
-   [Dialog modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm)
    
    [Dynpro flow logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") is used to process dialog modules.
    
-   [Event blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_blocks.htm)
    
    [Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_glosry.htm "Glossary Entry") in the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") are used to process event blocks.
    

Processing blocks are arranged in any order in the source code of an ABAP program. Non-declarative statements that are listed between or after completed processing blocks cannot be accessed and can never be executed. The syntax check reports such dead source code as errors. Declarative statements that are listed between or after completed processing blocks are part of the global data declarations of an ABAP program and are visible in all subsequent processing blocks.

[Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry") and [include programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") can be used to [modularize source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) that is not bound to processing blocks.

Programming Guideline

[ABAP Objects as a Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obj_progr_model_guidl.htm "Guideline")

Continue
[Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_procedures.htm)
[Dialog Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module.htm)
[Event Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_blocks.htm)
[Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm)