  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [Modularization Units](javascript:call_link\('abenmodularization_unit_gdl.htm'\)) → 

Type of Formal Parameters in Procedures

Background

The parameter interface of a procedure consists of formal parameters and specifies the [exceptions](javascript:call_link\('abenclass_exception_guidl.htm'\) "Guideline") possible in the procedure. The possible types of formal parameters are:

-   Input parameters
    
    Defined using IMPORTING in methods and function modules and using USING in subroutines.
    
-   Output parameters
    
    Defined using EXPORTING in methods and function modules.
    
-   Input/output parameters
    
    Defined using CHANGING in methods, function modules, and subroutines.
    
-   Return values
    
    Defined using RETURNING in methods.
    

The actual behavior of a formal parameter, however, is in part determined by the combination of the parameter type and the [pass by type](javascript:call_link\('abentype_transf_formal_para_guidl.htm'\) "Guideline").

Rule

Choose the appropriate formal parameter type

Select a formal parameter type that corresponds to the parameter semantics:

-   Input parameters for parameters that are evaluated but not changed in the procedure.
-   Output parameters or return values for parameters that are not evaluated but changed in the procedure.
-   Input/output parameters for parameters that are evaluated and changed in the procedure.

Details

For the consumer of a procedure, the parameter types provide important information about how they are used in the procedure and leads the user to expect the procedure to behave in a certain way. If an unsuitable parameter type is selected, the risk of inappropriate use increases.

-   Input-only parameters should always have the IMPORTING type (or USING for subroutines). Be aware that, when using pass by reference, writes performed on an input parameter defined using USING are possible without a syntax error being produced (as is the case with input parameters of methods or function modules defined using IMPORTING). Yet another reason to not use subroutines.
-   Output-only parameters should always be EXPORTING or RETURNING.
-   Parameters that are received and changed should always be of the CHANGING type. In particular, in a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) the fact that an EXPORTING parameter (or a USING parameter in the case of subroutines) passed by reference [behaves](javascript:call_link\('abenref_transf_output_param_guidl.htm'\) "Guideline") (from a technical perspective) like a CHANGING parameter should not be exploited.

Input parameters or input/output parameters that are not necessarily required for the execution of a procedure should be defined as optional by using OPTIONAL or by specifying a DEFAULT value. Otherwise, calling programs are forced to pass unnecessary parameters and create helper variables especially for this purpose.

A narrow parameter interface in line with a [procedure with an appropriate number of statements](javascript:call_link\('abenproc_volume_guidl.htm'\) "Guideline") only requires a few input parameters and one return value. However, this cannot really be applied consistently in practice and is therefore not set out as a rule here.

Hint

Another parameter type are table parameters that can be declared for function modules and subroutines using TABLES. Basically, they have the same effects as input/output parameters for internal tables. This parameter type is obsolete and should no longer be used.

Bad Example

The following source code shows a formal parameter that is declared as an output parameter using EXPORTING, but is used in the method like an input/output parameter declared with CHANGING. This does not correspond to the semantics that a calling program expects.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      EXPORTING e\_parameter TYPE ...
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD do\_something.
    "evaluate e\_parameter
    ...
    "set e\_parameter
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code corrects the above example by declaring the parameter as an input/output parameter with CHANGING according to its use.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      CHANGING c\_parameter TYPE ...
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD do\_something.
    "evaluate c\_parameter
    ...
    "set c\_parameter
    ...
  ENDMETHOD.
ENDCLASS.