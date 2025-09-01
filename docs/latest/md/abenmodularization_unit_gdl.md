  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Modularization%20Units%2C%20ABENMODULARIZATION_UNIT_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Modularization Units

The key modularization units or callable units within an ABAP program are referred to as processing blocks. In this context, procedures on one side are distinguished from dialog modules and event blocks on the other side. While dialog modules and event blocks are called from the dynpro flow logic or from the event processing of the ABAP runtime framework, procedures are designed for direct calls from an ABAP program. In addition to processing blocks, macros can also be created as callable units.

Procedures can be:

-   Methods
-   Function modules
-   Subroutines

Only procedures support parameter interfaces and have a local data context.

Dialog modules and event blocks do not have parameter interfaces and generally do not have a local data context.

Macros are a kind of halfway house between callable units and source code modularization.

-   [Function Modules and Subroutines](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")
-   [Type of Formal Parameters in Procedures](javascript:call_link\('abentype_formal_param_proc_guidl.htm'\) "Guideline")
-   [Passing of Formal Parameters](javascript:call_link\('abentype_transf_formal_para_guidl.htm'\) "Guideline")
-   [Pass By Reference for Output Parameters](javascript:call_link\('abenref_transf_output_param_guidl.htm'\) "Guideline")
-   [Typing of Formal Parameters](javascript:call_link\('abentype_formal_param_guidl.htm'\) "Guideline")
-   [Internal and External Procedure Calls](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\) "Guideline")
-   [Exiting Procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")
-   [Dialog Modules and Event Blocks](javascript:call_link\('abendial_mod_event_block_guidl.htm'\) "Guideline")
-   [Macros](javascript:call_link\('abenmacros_guidl.htm'\) "Guideline")

Continue
[Function Modules and Subroutines](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\))
[Type of Formal Parameters in Procedures](javascript:call_link\('abentype_formal_param_proc_guidl.htm'\))
[Passing of Formal Parameters](javascript:call_link\('abentype_transf_formal_para_guidl.htm'\))
[Pass by Reference for Output Parameters](javascript:call_link\('abenref_transf_output_param_guidl.htm'\))
[Typing of Formal Parameters](javascript:call_link\('abentype_formal_param_guidl.htm'\))
[Internal and External Procedure Calls](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\))
[Exiting Procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\))
[Dialog Modules and Event Blocks](javascript:call_link\('abendial_mod_event_block_guidl.htm'\))
[Macros](javascript:call_link\('abenmacros_guidl.htm'\))