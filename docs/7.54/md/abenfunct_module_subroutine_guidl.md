  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_unit_guidl.htm) → 

Function Modules and Subroutines

Background

Function modules and subroutines are the [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodularization_guidl.htm "Guideline") of the structured programming model that already existed before the introduction of ABAP Objects.

-   Function modules in function groups are independent repository objects that the structured model provides for [external calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenintern_extern_proc_call_guidl.htm "Guideline") or for the provision of reusable functions.

-   Before the introduction of ABAP Objects, subroutines could be created in any programs and were intended for internal calls or for the internal modularization of programs in the structured model.

The introduction of ABAP Objects means that methods now have both roles.

Rule

No implementations in function modules and subroutines

Only use function modules and subroutines if they are necessary from a technical viewpoint. In these cases, do not implement the required function. Instead, call the relevant (local) methods.

Details

This rule is directly derived from rule [Use ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). This rule states that only methods should be created. You are only [allowed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") to create other types of procedures if is technically not possible to use a method:

-   Function modules for RFC, updates, and access to classical dynpros or selection screens

-   Subroutines for PERFORM ON COMMIT/ROLLBACK and GENERATE SUBROUTINE POOL

These subroutines should only be used for wrapping method calls to ensure that ABAP Objects is also used in these cases.

All the rules in these programming guidelines that relate to procedures actually refer to methods because, strictly speaking, no other procedures with nontrivial code are supposed to occur. If you strictly adhere to the above rule, is almost impossible for any of the rules that refer to implementations of procedures to be applied to function modules and subroutines, because they only serve to wrap calls. For example, function modules and subroutines should no longer contain any of the local declarations that are described in ["Defining Local Declarations at the Start of a Procedure"](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_declar_guidl.htm "Guideline").

If you cannot adhere to the rule ["Use ABAP Objects"](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") and the above rule because, for example, existing legacy function modules and subroutines need to be maintained or enhanced and you cannot switch to methods, the rules in these programming guidelines that refer to procedures also apply to function modules and subroutines.