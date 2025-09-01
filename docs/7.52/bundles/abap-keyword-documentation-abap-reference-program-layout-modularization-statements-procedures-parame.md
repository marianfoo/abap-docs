# ABAP - Keyword Documentation / ABAP - Reference / Program Layout / Modularization Statements / Procedures / Parameter Interface of Procedures

Included pages: 2


### abenformal_parameters_oview.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) → 

Parameter Interface of Procedures

The parameter interface of a procedure consists of [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") and specifies the [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") possible in the procedure.

Formal Parameters

Formal parameters are [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry"), [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"), or [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry"). Several obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") also exist. Formal parameters are either generic or fully [typed](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry"). [Pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") or [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") can be specified for most formal parameters. Pass by value is mandatory for some formal parameters.

Programming Guideline

[Choose the appropriate formal parameter type](javascript:call_link\('abentype_formal_param_proc_guidl.htm'\) "Guideline")

Exceptions

[Class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") can be declared using RAISING for all procedures ([methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry"), [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"), and [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry")), and can then be [propagated from the procedure](javascript:call_link\('abenexceptions_procedures.htm'\)). EXCEPTIONS can also be used in methods and function modules to define non-class-based exceptions, which can then be raised in the procedure using [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\)).

Pass by Reference or Pass by Value

When deciding whether to use pass by reference or pass by value for a formal parameter, the performance and robustness of each pass-by type must be compared.

In ABAP, pass by reference always leads to better performance since no local data object has to be stored and no data transport is necessary when the procedure is called. Therefore, for performance reasons, pass by reference is usually preferable, unless explicit or implicit writes are made to an input parameter in the procedure or if it is necessary to ensure that an input/output parameter or an output parameter is returned only if the procedure ends without any errors. In such cases, pass by value is mandatory, to make sure that the assigned [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") is not modified simultaneously in the caller when writes are made to a formal parameter. For performance reasons, only parameters of 100 bytes or less should be passed in these cases, whenever possible.

Also note the following when using pass by reference:

-   In [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry"), writes can be made to an input parameter defined using USING without a syntax error being produced (as is the case with input parameters of methods or function modules defined using IMPORTING).

-   An output parameter that is passed by reference acts like an input/output parameter; in other words, if reads are performed to an output parameter in the procedure before the value of that parameter is changed, this value is not initial (unlike in pass by value), but is the same as the current value of the actual parameter in the caller.

-   If a procedure is stopped because of an error (that is, if it is stopped for a reason other than reaching its last statement or RETURN, EXIT, or CHECK), all actual parameters that are passed by reference retain the value of the assigned formal parameter that the parameter had when the program was stopped. In pass by value, no values are passed to actual parameters when a procedure terminates.

Procedures and their calls have to be programmed so that these kinds of errors do not occur.

To summarize, pass by reference is always preferable when performance is an issue, while pass by value is more suitable in situations where robustness and data consistency are more important. These factors must be taken into account in each individual case when deciding which pass-by type to use with which type of parameter.

Programming Guideline

[Choose a suitable pass-by type](javascript:call_link\('abentype_transf_formal_para_guidl.htm'\) "Guideline")

Notes

-   When strings or internal tables of the same type are passed by value, [table sharing](javascript:call_link\('abensharing_glosry.htm'\) "Glossary Entry") comes into force between the data object created locally and the data object passed, as in [assignments](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry"). However, [table sharing](javascript:call_link\('abentable_sharing_glosry.htm'\) "Glossary Entry") only happens if the row type of the internal table permits it. This means that, when passing strings and internal tables, the performance benefits of pass by reference over pass by value may be negated by sharing (in certain circumstances).

-   Only pass by reference can be specified for the obsolete [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry").

-   Pass by value is mandatory for the [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") of [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), the output parameters of [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in ABAP Objects, and all formal parameters of [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry")\-enabled function modules and [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") (pass by value is also used implicitly with table parameters).

-   A local data object is created for formal parameters passed by reference that are not bound to an actual parameter during the call (as for pass by value).

-   There are special rules for defining [literals](javascript:call_link\('abentyping_literals.htm'\)) and [functions and expressions as actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)).

-   The result of the [typing check](javascript:call_link\('abentyping_check.htm'\)) when passing actual parameters to formal parameters is independent of the pass type. In [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the check for [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is always carried out, even though this is stricter than necessary in individual cases. For example, a special reference variable cannot be passed to a general typed CHANGING parameter, even if pass by value is defined for this parameter.

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
![Example](exa.gif "Example") [Pass by Parameter](javascript:call_link\('abenprocedure_param_abexa.htm'\))


### abenprocedure_param_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Parameter Interface of Procedures](javascript:call_link\('abenformal_parameters_oview.htm'\)) → 

Pass by Parameter

This example demonstrates the difference between passing a parameter in a procedure by value or by reference.

Source Code

REPORT demo\_procedure\_param.
CLASS demo\_fibb DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF line,
               x TYPE i,
               y TYPE i,
               range TYPE i,
           END OF line.
    CLASS-DATA: param TYPE STANDARD TABLE OF line,
                res TYPE i.
    CLASS-METHODS: main,
                   fill\_table  CHANGING  g\_param LIKE param,
                   solve\_table IMPORTING g\_param LIKE param,
                   fibb IMPORTING VALUE(l\_line) TYPE line
                        EXPORTING VALUE(r) TYPE i.
ENDCLASS.
CLASS demo\_fibb IMPLEMENTATION.
  METHOD main.
    fill\_table(  CHANGING  g\_param = param ).
    solve\_table( EXPORTING g\_param = param ).
  ENDMETHOD.
  METHOD fill\_table.
    g\_param = VALUE #( FOR j = 1 UNTIL j > 3
                       ( x = j
                         y = j \*\* 2
                         range = 12 / j ) ).
  ENDMETHOD.
  METHOD solve\_table.
    DATA l\_line LIKE LINE OF g\_param.
    LOOP AT g\_param INTO l\_line.
      fibb( EXPORTING l\_line = l\_line IMPORTING r = res ).
      cl\_demo\_output=>write(
      |Fibb( { l\_line-x }, { l\_line-y }, { l\_line-range }) = { res }| ).
    ENDLOOP.
    cl\_demo\_output=>display( ).
  ENDMETHOD.
  METHOD fibb.
    IF l\_line-range = 1.
      IF l\_line-x < l\_line-y.
        r = l\_line-x.
      ELSE.
        r = l\_line-y.
      ENDIF.
    ELSEIF l\_line-range = 2.
      IF l\_line-x < l\_line-y.
        r = l\_line-y.
      ELSE.
        r = l\_line-x.
      ENDIF.
    ELSE.
      l\_line-range = l\_line-range - 2.
      DO l\_line-range TIMES.
        IF l\_line-x < l\_line-y.
          l\_line-x = l\_line-x + l\_line-y.
          r = l\_line-x.
        ELSE.
          l\_line-y = l\_line-x + l\_line-y.
          r = l\_line-y.
        ENDIF.
      ENDDO.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_fibb=>main( ).

Description

The method fibb calculates the sequence term with the number range in a Fibonacci sequence using the start values x and y. As a rule, the next sequence term is always the sum of two previous sequence terms (which is why there are two start values). The method inherits two parameters, a structured parameter l\_line used to pass the input values, and a parameter r of type i used to provide the result. The parameter l\_line is defined as an IMPORTING parameter but still has to be changed in the method, which means that the method definition must contain the keyword VALUE before the parameter. If not, a syntax error occurs. This ensures that a local copy of the parameter is used within the method. The addition VALUE of the output parameter r assigns the result to the static class attribute res only after the method has been processed completely. Otherwise res would be changed in every single step of the algorithm.

The internal table param contains the input values for calculating three different sequence terms of the Fibonacci sequence. The method fill\_table is used to fill param with values and the method solve\_table is used to calculate and display fibb for each line of param.
