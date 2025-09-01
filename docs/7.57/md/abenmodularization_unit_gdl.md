  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Modularization Units, ABENMODULARIZATION_UNIT_GDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Modularization Units

The key modularization units or callable units within an ABAP program are referred to as processing blocks. In this context, procedures on one side are distinguished from dialog modules and event blocks on the other side. While dialog modules and event blocks are called from the dynpro flow logic or from the event processing of the ABAP runtime framework, procedures are designed for direct calls from an ABAP program. In addition to processing blocks, macros can also be created as callable units.

Procedures can be:

-   Methods
-   Function modules
-   Subroutines

Only procedures support parameter interfaces and have a local data context.

Dialog modules and event blocks do not have parameter interfaces and generally do not have a local data context.

Macros are a kind of halfway house between callable units and source code modularization.

-   [Function Modules and Subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")
-   [Type of Formal Parameters in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_formal_param_proc_guidl.htm "Guideline")
-   [How Formal Parameters Are Passed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_transf_formal_para_guidl.htm "Guideline")
-   [Pass By Reference for Output Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenref_transf_output_param_guidl.htm "Guideline")
-   [Typing of Formal Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_formal_param_guidl.htm "Guideline")
-   [Internal and External Procedure Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintern_extern_proc_call_guidl.htm "Guideline")
-   [Exiting Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")
-   [Dialog Modules and Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendial_mod_event_block_guidl.htm "Guideline")
-   [Macros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmacros_guidl.htm "Guideline")

Continue
[Function Modules and Subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunct_module_subroutine_guidl.htm)
[Type of Formal Parameters in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_formal_param_proc_guidl.htm)
[How Formal Parameters Are Passed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_transf_formal_para_guidl.htm)
[Pass by Reference for Output Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenref_transf_output_param_guidl.htm)
[Typing of Formal Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_formal_param_guidl.htm)
[Internal and External Procedure Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintern_extern_proc_call_guidl.htm)
[Exiting Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm)
[Dialog Modules and Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendial_mod_event_block_guidl.htm)
[Macros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmacros_guidl.htm)