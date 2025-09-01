  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Modularization Units](javascript:call_link\('abenmodularization_unit_guidl.htm'\)) → 

How Formal Parameters Are Passed

Background

Parameters can be passed to procedures either by reference or by value.

-   Pass by reference
    In the case of pass by reference, a reference to the actual parameter is passed to the procedure when it is called. The procedure then works with the actual parameter. No local data object is created for the actual parameter. Input parameters that are passed by reference cannot be changed in the procedure (exception: USING parameters of subroutines).

-   Pass by value
    In the case of pass by value, a type-friendly local data object is created as a copy of the actual parameter for the formal parameter. The system initializes output parameters and return values when the procedure is started. Input parameters as well as input/output parameters receive the value of the actual parameter. A changed formal parameter is only passed to the actual parameter if the procedure is completed without errors.

IMPORTING parameters that are passed by reference are protected from explicit changes within the procedure. This is not the case for the pass by value method. RETURNING parameters always require the pass by value method.

Rule

Choose a suitable pass-by type

When selecting the pass-by type, consider both speed and security:

-   Pass by value for small data sets for security reasons

-   Pass by reference for large data sets for performance reasons

Details

The pass by reference method generally has a higher performance than pass by value because no values need to be copied. This speed advantage can be noticed especially in the case of large parameters, such as internal tables or strings, or in mass data processing. In the case of small, flat parameters, the pass by value method usually does not lead to problems because the copy costs incurred are not high here. Furthermore, for strings and internal tables, sharing takes effect in the case of pass by value. Consequently, only references are passed here. The time-intensive copy process is skipped if the data objects involved are only to be read-accessed, such as in the case of EXPORTING parameters that are filled within a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")), and are not modified by the calling program after the pass.

Despite the speed advantage, the pass by reference method can lead to problems due to the following aspects:

-   EXPORTING parameters that are passed by reference are not initialized automatically. Therefore, such parameters are [not supposed to be read](javascript:call_link\('abenref_transf_output_param_guidl.htm'\) "Guideline") until the first value has been assigned to them.

-   Writes performed on EXPORTING and CHANGING parameters with the pass by reference method work directly on the actual parameters. Their values are also modified if the procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) is left early due to an exception.

-   IMPORTING parameters that are passed by reference change if the actual parameter changes. The actual parameter can change, for example, if it is a [global variable](javascript:call_link\('abenref_transf_global_data_guidl.htm'\) "Guideline") or a [system field](javascript:call_link\('abenuse_actual_parameters_guidl.htm'\) "Guideline").

If passing by value does not cause performance problems, that is, if small data sets are passed or sharing can be used, this method should be used for security reasons. If speed is an issue, pass by reference should be chosen. In this case, the potential risks of implementing the procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) must be [considered](javascript:call_link\('abenref_transf_output_param_guidl.htm'\) "Guideline").

Example

See the example in the section about [Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline"). In this example, an internal table is passed by reference due to performance reasons, while an elementary parameter is passed by value due to robustness reasons.