# ABAP - Keyword Documentation / ABAP Programming Guidelines / Robust ABAP / System Fields

Included pages: 8


### abensystem_fields_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) → 

System Fields

An ABAP program can request the status of the ABAP runtime environment using the [system fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm). From a technical viewpoint, these system fields are a set of predefined variables - the components of the predefined sy structure of data type SYST from the ABAP Dictionary - that are always available while the program is running.

The system field sy-repid is an exception. This field indicates the name of the program currently running. In this case, we are dealing with a predefined constant and not a component of the predefined sy structure.

-   [Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyst_field_access_guidl.htm "Guideline")

-   [Obsolete and internal system fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobs_intern_system_field_guidl.htm "Guideline")

-   [Evaluation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevaluation_guidl.htm "Guideline")

-   [Return value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreturn_value_guidl.htm "Guideline")

-   [Use as current parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_actual_parameters_guidl.htm "Guideline")

-   [Using system fields on the user interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_ui_guidl.htm "Guideline")

-   [Use in operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_operand_position_guidl.htm "Guideline")

Continue
[Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyst_field_access_guidl.htm)
[Obsolete and Internal System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobs_intern_system_field_guidl.htm)
[Evaluation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevaluation_guidl.htm)
[Return Code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreturn_value_guidl.htm)
[Using System Fields as Actual Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_actual_parameters_guidl.htm)
[Using System Fields on the User Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_ui_guidl.htm)
[Using Elements in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_operand_position_guidl.htm)


### abensyst_field_access_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Access

Background

The system fields are supplied with values by the ABAP runtime environment. In a program, however, they behave like normal variables. You can assign values to these fields using the ABAP program. This is because both the ABAP kernel and the ABAP components of the ABAP runtime environment have can perform writes on system fields.

Rule

Do not write to system fields

In application progrsms, only perform reads on system fields and never perform writes.

Details

The values of system fields are usually vital for correct program execution. This means performing writes on system fields carries a lot of risk. Write operations in system fields can lead to a loss of important information, which can prevent programs from running correctly. Therefore, you cannot overwrite system fields to change the execution of the program or use the fields to replace explicitly defined variables.

In addition, you cannot misuse system fields as implicit output parameters of procedures, irrespective of whether the fields have been explicitly set within the procedure (due to an illegal write or as the result of an executed statement).

Exception

The only system fields where it was permitted to change the field content (in an application program) are part of classic list processing. This should [no longer be used](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_guidl.htm "Guideline").

Bad Example

The following source code shows a write performed on the system field sy-subrc, which occurs frequently. This write is not harmful but it also is not beneficial: sy-subrc is always set to zero when a function module is called and only adopts a different value by handling a classic exception. Therefore, the statement is redundant.

sy-subrc = 4.
CALL FUNCTION ...
   ...
   EXCEPTIONS ...
CASE sy-subrc.
   ...

Good Example

The source code below omits the write shown above.

CALL FUNCTION...
   ...
   EXCEPTIONS ...
CASE sy-subrc.
   ...


### abenobs_intern_system_field_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Obsolete and Internal System Fields

Background

Not all system fields are designed to be used in application programs. All available system fields can be displayed as components of the structure SYST in ABAP Dictionary (or as components of the structure sy in the debugger). The meaning of the components is included in the accompanying description. Any system fields that are [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_obsolete.htm) or only to be [used internally](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_internal.htm) are clearly marked.

Rule

Do not use obsolete or internal system fields

In application programs, do not use system fields flagged as obsolete or for internal use only in ABAP Dictionary or in the ABAP documentation.

Details

The behavior of obsolete and internal system fields is undefined. This means that ABAP application programs must not make any assumptions about the content of these system fields.

Bad Example

The following source code shows how the system field sy-fodec, flagged for internal use, is used illegally in the structure SYST after the statement DESCRIBE FIELD to count the number of decimal places in a data object.

DATA dobj TYPE p LENGTH 8 DECIMALS 2.
DATA type TYPE c LENGTH 1.
DATA decimal TYPE i.
DESCRIBE FIELD dobj TYPE type.
decimals = sy-fodec.

Good Example

The following source code demonstrates how decimal places can be counted correctly using the appropriate addition of the statement DESCRIBE FIELD.

DATA dobj TYPE p LENGTH 8 DECIMALS 2.
DATA type TYPE c LENGTH 1.
DATA decimals TYPE i.
DESCRIBE FIELD dobj TYPE type DECIMALS decimals.


### abenevaluation_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Evaluation

Background

System fields describe general system states or are set specifically by individual statements. The content of system fields is only defined as described in the documentation of the system fields or in the documentation of ABAP statements that set system fields. In contexts other than those described there, the content of system fields is not defined. Particularly statements whose effects on system fields are undocumented can modify the content of specific system fields, such as the [return value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreturn_value_guidl.htm "Guideline") sy-subrc, in an undefined way. This applies especially to statements that call ABAP code implicitly or explicitly when executed.

Rule

Evaluate system fields in the right position

Evaluate system fields only in contexts for which they are defined. If an ABAP statement sets a system field in accordance with its documentation, the field should be evaluated directly after the statement. You must not evaluate system fields after statements, however, whose effects are undocumented.

Details

If possible, a system field should be evaluated directly after the statement that set it, to prevent it from being overwritten by other statements. The bigger the gap between the ABAP statement in question and the evaluation of a system field, the higher the risk that this system field will be influenced by a different statement in the meantime.

If necessary, the values of system fields should be saved in auxiliary variables. This applies in particular to the general [return value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreturn_value_guidl.htm "Guideline"), sy-subrc, which is set by very many different statements. Other common examples include the syindex loop counter or the sy-tabix table index.

You should never evaluate statement-related system fields after statements that do not set these fields according to their documentation. As before, a common example is the evaluation of sy-subrc. If it is not documented for a statement that it sets sy-subrc in a defined way, an evaluation after this statement is very risky. Either sy-subrc still has the previous value, or it is set in an undefined way by the statement. Both outcomes can lead to incorrect program behavior. The bad example in the [extended program check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_guidl.htm "Guideline") section shows an example of this.

Note

The static methods of the class CL\_ABAP\_SYST also provide important system states. There is no possibility of a previous overwriting in the program.

Bad Example

The following source code shows an example where sy-subrc is evaluated too late. Even if it is not documented for the statements between FIND and IF that they set sy-subrc, the value can be overwritten due to possible side effects.

FIND REGEX ... IN ...
...
... "other statements
...
IF sy-subrc = 0.
   ...
ENDIF.

Good Example

The following source code corrects the above example by assigning sy-subrc to a helper variable directly after FIND. This variable is then evaluated in IF. It can also be necessary to assign sy-index or sy-tabix to a helper variable directly after DO or LOOP loop is entered.

FIND REGEX ... IN ...
find\_subrc = sy-subrc.
...
... "other statements
...
IF find\_subrc = 0.
   ...
ENDIF.


### abenreturn_value_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Return Code

Background

The most prominent system field should be the return code sy-subrc. This indicates the successful execution of an ABAP statement or, if you are [using classic exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_exception_class_guidl.htm "Guideline"), a procedure. A return code of 0 usually means that the execution was successful.

Rule

Evaluate the return code sy-subrc

Evaluate the return code sy-subrc after every ABAP statement that sets the value according to the documentation. However, sy-subrc should never be set after statements are executed for which the setting of a return code is not documented.

Details

The system field sy-subrc indicates whether a statement was successfully executed. If the execution was not successful, the program should usually react accordingly. If this does not happen, the program's response will probably be unexpected.

This rule is a specialization of the more general rule [evaluate system fields in the correct place](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevaluation_guidl.htm "Guideline"). It is specified here again separately due to the prominent role of the return code sy-subrc. The system field sy-subrc must always be evaluated immediately and, if necessary, assigned to a help variable. An evaluation cannot occur after statements that set sy-subrc not defined, because otherwise wrong conclusions could easily be drawn.

Note

Special care must be taken in [functional method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm). If executed successfully, each method call sets the return code sy-subrc to 0, which means that functional method calls overwrite the return code when used in statements where the setting of the return code is not documented. The same applies to the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) when instances of classes are created.

Exception

If a handling action seems unnecessary because, in the developer's opinion, the statement is always executed successfully, the assumption should at least be saved and documented using an [assertion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertions_guidl.htm "Guideline").

Bad Example

The following source code shows how further processing of data is performed using the work area of a SELECT command, without a request from sy-subrc. However, the content of wa is usually undefined here, if a request from sy-subrc does not guarantee that database access will be successful.

SELECT ...
       INTO wa
       ...
... "work with wa

Good Example

The following source code corrects the above example. This means the successful execution of the SELECT statement is checked.

SELECT ...
       INTO wa
       ...
IF sy-subrc <> 0.
  ...
ENDIF
... "work with wa


### abenuse_actual_parameters_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Using System Fields as Actual Parameters

Background

The structure sy exists once in an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") and is shared by all programs in this internal session. The components of sy represent the system fields. System fields are global for all programs of an internal session and their procedures.

Rule

Do not use system fields as actual parameters

Never use system fields as actual parameters - especially not for passing by reference.

Details

This rule reinforces the rule [do not pass global data to local contexts by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenref_transf_global_data_guidl.htm "Guideline"). Since system fields are set implicitly, it is important to be even more careful. If the value of a system field changes implicitly within a procedure, the value of the parameter passed by reference, which refers to this system field, also changes. Procedures are never prepared for this behavior.

Even pass by value should be avoided for system fields. This is because a procedure might be switched to pass by reference in an enhancement process, without the consumer of the procedure being notified. The only secure method is to assign the value of a system field to a normal variable and then use this variable as the actual parameter when calling the program.

Bad Example

Looking at the method do\_something in the following source code, it could be expected that the parameter index in the loop to contain the unchanged value that was passed to the procedure. In fact, index references sy-index, which is set to the current loop counter in the DO loop.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS main.
  PRIVATE SECTION.
    METHODS do\_something IMPORTING index TYPE i.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD main.
    DO 2 TIMES.
      do\_something( sy-index ).
    ENDDO.
  ENDMETHOD.
  METHOD do\_something.
    DO 3 TIMES.
      ... index ... .
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code corrects the call of the do\_something method. A helper variable is passed with the corresponding value instead of sy-index.

...
CLASS class IMPLEMENTATION.
  METHOD main.
    DATA index TYPE sy-index.
    DO 2 TIMES.
      index = sy-index.
      do\_something( index ).
    ENDDO.
  ENDMETHOD.
  ...
ENDCLASS.
...


### abenuse_ui_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Using System Fields on the User Interface

Background

As system fields are defined using the syst structure in ABAP Dictionary, you can technically use them to define input fields in dynpros/in Web Dynpro.

Rule

Do not use system fields on the user interface

Never use system field types to define input or output fields for dynpros or selection screens in application programs.

Details

This rule is derived from the [SoC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm "Guideline") rule and the [use of data types rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenusing_types_guidl.htm "Guideline"). System fields are purely technical. Their semantic attributes, are defined in ABAP Dictionary (documentation and other texts), do not allow meaningful use in the user dialogs of application programs.

Note

Similarly, you can apply the rule [only use semantically appropriate data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenusing_types_guidl.htm "Guideline") to the use of SYST structure components (for typing interface parameters of procedures). The semantic meaning of a system field (expressed in the short text) does not generally match the meaning of the parameter.

Example

When the program PGL\_SYSTEM\_FIELD\_ON\_UI is executed, input fields for document output language are displayed on a classic dynpro. The first input field is declared with reference to data type syst-langu of system field sy-langu. The second input field is declared with reference to a semantically suitable ABAP Dictionary data type. The displayed F1 help clearly indicates that syst-langu is not suited for language fields in a user dialog. This is because the help only describes the behavior of the sy-langu field in a program. It does not describe the meaning of the language field in the relevant application.


### abenuse_operand_position_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [System Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields_guidl.htm) → 

Using Elements in Operand Positions

Background

Statements that modify the content of system fields generally evaulate the operands first and then set the system fields. In some complex statements, however, a system field could be set first, before all operand positions are evaluated.

Rule

Do not use system fields in statements that set the fields

For reasons of robustness, do not use system fields as operands of statements that themselves set these system fields.

Details

A program does not always define whether a particular system field is set in a statement before or after an operand is evaluated. This means that, to reduce risks and to make the program easier to read, the content of a system field should always be copied to an auxiliary variable and only this copy should be used within the statement in question.

Note

Also take note of how functional methods are used in operand positions. These methods also modify important system fields. Also be careful here when using system fields in operand positions of the same statement.

Bad Example

The following source code shows how the system field sy-tabix is used in a READ statement that sets the system field itself. The case shown here does not itself present any difficulties, however we still recommend you follow the rule above, not least to make the code more readable.

LOOP AT itab1 ... WHERE ...
   ...
   READ TABLE itab2 ... INDEX sy-tabix.
   ...
ENDLOOP.

Good Example

The following source code makes the example above more robust by assigning the value of the system field sy-tabix to an auxiliary variable before it is used.

LOOP AT itab1 ... WHERE ...
   index = sy-tabix.
   ...
   .... itab2\[ index \] ...
   ...
ENDLOOP.
