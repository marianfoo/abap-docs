---
title: "Parameter Interface of Procedures"
description: |
  The parameter interface of a procedure consists of formal parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm 'Glossary Entry') and specifies the exceptions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_glosry.htm 'Glos
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameters_oview.htm"
abapFile: "abenformal_parameters_oview.htm"
keywords: ["select", "update", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abenformal", "parameters", "oview"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_procedures.htm) → 

Parameter Interface of Procedures

The parameter interface of a procedure consists of [formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm "Glossary Entry") and specifies the [exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_glosry.htm "Glossary Entry") possible in the procedure.

Formal Parameters

Formal parameters are [input parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), [output parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoutput_parameter_glosry.htm "Glossary Entry"), [input/output parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), or [return values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreturn_value_glosry.htm "Glossary Entry"). Several obsolete [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") also exist. Formal parameters are either generic or fully [typed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry"). [Pass by reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") or [pass by value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_value_glosry.htm "Glossary Entry") can be specified for most formal parameters. Pass by value is mandatory for some formal parameters.

Programming Guideline

[Choose the appropriate formal parameter type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_formal_param_proc_guidl.htm "Guideline")

Exceptions

In all procedures ([methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_glosry.htm "Glossary Entry"), [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_module_glosry.htm "Glossary Entry")
, and [subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_glosry.htm "Glossary Entry") ) [class-based exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") can be declared using RAISING, which and can then be [propagated from the procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_procedures.htm). EXCEPTIONS can also be used in methods and function modules to define non-class-based exceptions, which can then be triggered in the procedure using [RAISE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception.htm) or [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_raising.htm).

Pass by Reference or Pass by Value

When deciding whether to use pass by reference or pass by value for a formal parameter, you must compare the performance and robustness of each transfer type.

In ABAP, pass by reference always leads to better performance since no local data object has to be stored and no data transport is necessary when the procedure is called. Therefore, for performance reasons, pass by reference is usually preferable, unless explicit or implicit write access exists to an input parameter in the procedure or you want to ensure that an input/output parameter or an output parameter is returned only if the procedure ends without any errors. In such cases, pass by value is mandatory, to make sure that the assigned [actual parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenactual_parameter_glosry.htm "Glossary Entry") is not modified simultaneously in the caller when writes are made to a formal parameter. For performance reasons, only parameters of 100 bytes or less should be passed in these cases, whenever possible.

Also note the following when using pass by reference:

-   In [subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_glosry.htm "Glossary Entry"), writes can be made to an input parameter defined using USING without a syntax error being produced (as is the case with input parameters of methods or function modules defined using IMPORTING).

-   An output parameter that is passed by reference acts like an input/ output parameter; in other words, if read access to an output parameter exists in the procedure before the value of that parameter is changed, this value is not initial, unlike with pass by value, but is the same as the current value of the actual parameter in the caller.

-   If a procedure is stopped because of an error (that is, if it is stopped for a reason other than reaching its last statement or RETURN, EXIT, or CHECK), all actual parameters that are passed by reference retain the value of the assigned formal parameter that the parameter had when the program was stopped. In pass by value, no values are passed to actual parameters when a procedure terminates.

Procedures and their calls have to be programmed so that these kinds of errors do not occur.

To summarize, pass by reference is always preferable when performance is an issue, while pass by value is more suitable in situations where robustness and data consistency are more important. These factors must be taken into account in each individual case when you decide which pass type to use with which type of parameter.

Programming Guideline

[Choose a suitable pass-by type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_transf_formal_para_guidl.htm "Guideline")

Notes

-   When strings or internal tables of the same type are passed by value, [table sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensharing_glosry.htm "Glossary Entry") comes into force between the data object created locally and the data object passed, as in [assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenassignment_glosry.htm "Glossary Entry"). However, [table sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_sharing_glosry.htm "Glossary Entry") only happens if the row type of the internal table permits it. This means that, when you pass strings and internal tables, the performance benefits of pass by reference over pass by value may be negated by sharing (in certain circumstances).

-   Only pass by reference can be specified for the obsolete [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry").

-   Pass by value is mandatory for the [return value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreturn_value_glosry.htm "Glossary Entry") of [functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), the output parameters of [events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_glosry.htm "Glossary Entry") in ABAP Objects, and all formal parameters of [RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_glosry.htm "Glossary Entry")\-enabled function modules and [update function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") (pass by value is also used implicitly with table parameters).

-   A local data object is generated for formal parameters passed by reference that are not bound to an actual parameter during the call (as for pass by value).

-   There are special rules for defining [literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_literals.htm) and [functions and expressions as actual parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_arith_expr.htm).

-   The result of the [typing check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_check.htm) when passing actual parameters to formal parameters is independent of the pass type. In a [pass by value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the check for [pass by reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is always carried out, even though this is stricter than necessary in individual cases. For example, a special reference variable cannot be passed to a general typed CHANGING parameter, even if pass by value is defined for this parameter.

Example

For a method meth, CHANGING parameter p1 is defined for pass by reference and p2 for pass by value. The values of both parameters are modified before an exception is raised. The actual parameter a1 bound to the parameter using pass by reference contains the modified value when the exception is handled. The actual parameter a2 bound to the parameter using pass by value, on the other hand, keeps its value.

CLASS cx\_exception DEFINITION
                   INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth CHANGING p1        TYPE i
                                VALUE(p2) TYPE i
                       RAISING  cx\_exception.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    p1 = 333.
    p2 = 444.
    RAISE EXCEPTION TYPE cx\_exception.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(a1) = 111.
  DATA(a2) = 222.
  TRY.
      cls=>meth( CHANGING p1 = a1
                          p2 = a2 ).
    CATCH cx\_exception.
      cl\_demo\_output=>display( |{ a1 }, { a2 }| ).
  ENDTRY.

Continue
![Example](exa.gif "Example") [Pass by Parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_param_abexa.htm)