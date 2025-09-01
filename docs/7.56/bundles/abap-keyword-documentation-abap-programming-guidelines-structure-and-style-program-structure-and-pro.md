# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Structure and Style / Program Structure and Procedure Structure

Included pages: 3


### abenprogr_proc_structure_gdl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) → 

Program Structure and Procedure Structure

ABAP offers you a great deal of freedom when structuring your programs and procedures. Remember, however, that the finished product needs to be easy to maintain.

-   [Global Declarations of a Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_declar_guidl.htm "Guideline")
-   [Local Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_declar_guidl.htm "Guideline")

Continue
[Global Declarations of a Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_declar_guidl.htm)
[Local Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_declar_guidl.htm)


### abenglobal_declar_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Program Structure and Procedure Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogr_proc_structure_gdl.htm) → 

Global Declarations of a Program

Background

Each ABAP program has a global declaration part where data types, interfaces, classes, and data objects that are visible throughout the program can be declared.

From a technical viewpoint, the global declaration part consists of all declarations that cannot be assigned to a more local context (class, procedure). All declarations implemented in processing blocks without their own contexts (in event blocks and dialog modules) and declarations declared between completed processing blocks are assigned to the global context. Event blocks of GET and AT SELECTION-SCREEN events are exceptions. Variables declared here are only valid in the event block.

In an ABAP statement, it is only ever possible to refer to the previous declarations of the currently visible contexts.

Rule

Implement global declarations centrally

Place the global declaration part of a program at a central, context-related point at the beginning of the program.

Details

The global declaration part should only ever be the area between the program-initiating statement and the first implementation. This the only place where global declarations should be made in a meaningful order. This ensures that the declarations intended for global use can really be used in all subsequent implementations.

There should not be any declarative statements in contexts that do not support local data (provided that they are [still used](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline")). Otherwise, a false impression of local validity is created when the program is read, which may lead to the program not being correctly understood.

This rule is only of explicit relevance when working with program types other than class or interface pools. Class Builder implicitly specifies which declarations occur and where. These are the declarations of the global class or global interface itself as well as optional local data types, classes, and interfaces in [class pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_type_glob_class_guidl.htm "Guideline"). The developer cannot directly access the master program of a class pool or interface pool. This is still the case even if the source code-based Class Builder is introduced, because it only shows the declaration and implementation of the global class.

For other [program types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_type_guidl.htm "Guideline") (subroutine pools, function pools, and executable programs), the developer can access the entire master program. If these program types are used, adherence to the rule is the developer's responsibility. The top include is helpful here. It is especially suited to all programs that are [organized](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_orga_gdl.htm) using include programs. The [top include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentop_include_glosry.htm "Glossary Entry") is specially designed for the global declaration part and is therefore supported by ABAP Workbench and ABAP Compiler. ABAP Workbench creates and includes the top include automatically. The compiler incorporates the relevant top include into the syntax check for an individual include program. This enables meaningful syntax checks to be made on individual include programs.

If the top include is available, it should always be the first include program that a master program includes. The top include can also contain additional INCLUDE statements. The top include, and any include programs included in the top include, can only contain declarations and not implementations.

If [ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") are the main focus, the global declaration part or the top include should only contain declarations of local classes and interfaces, if the above rule is strictly adhered to. Data types should only be [declared](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclaration_dtypes_const_guidl.htm "Guideline") for classes and interfaces or in ABAP Dictionary. Global data objects are only required for communication with classical dynpros. Therefore they should only be used in the top include for function pools that encapsulate classic [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenencap_class_interf_guidl.htm "Guideline").

Exception

The above rule can be mainly justified due to the visibility within the program and the validity of declarations. Strictly speaking therefore, it only applies to program types other than class pools. In class pools, the visibility outside of the class pool and the resulting [dependencies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_type_glob_class_guidl.htm "Guideline") are also important.

A further exception applies in the following situation: the local classes of a program are relatively independent units and their implementations do not refer to the declarations of other local classes. In this case, their declaration and implementation parts can be specified one after the other to improve readability.

Bad Example

The following source code shows a function pool for encapsulating a classic dynpro, after the include programs have been resolved. The two dialog modules contain data declarations that look like local declarations but have global validity. Static access to this type of data object is only possible below the declaration, which means the function module has no access to g\_input\_field, and the PBO module has no access to g\_ok\_code.

FUNCTION-POOL z\_screen.

DATA g\_start\_value TYPE c LENGTH 20.

FUNCTION z\_handle\_screen.
\*"------------------------------------------------------
\*"\*"Local Interface:
\*" IMPORTING
\*" REFERENCE(i\_start\_value) TYPE csequence OPTIONAL
\*"------------------------------------------------------
  g\_start\_value = i\_start\_value.
  CALL SCREEN 100.
ENDFUNCTION.

MODULE status\_0100 OUTPUT.
  DATA g\_input\_field TYPE c LENGTH 20.
  g\_input\_field = g\_start\_value.
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  DATA g\_ok\_code TYPE sy-ucomm.
  CASE g\_ok\_code.
    WHEN '...'.
       ...
  ENDCASE.
ENDMODULE.

Good Example

The following source code shows the function pool from the above example, after the global declarations have been moved to a coherent global declaration part that follows the program-initiating statement. The additional global data object g\_start\_value is no longer required, and g\_ok\_code can be accessed in the PBO module.

FUNCTION-POOL z\_screen.

DATA: g\_input\_field TYPE c LENGTH 20,
      g\_ok\_code TYPE sy-ucomm.

FUNCTION z\_handle\_screen.
\*"------------------------------------------------------
\*"\*"Local Interface:
\*" IMPORTING
\*" REFERENCE(i\_start\_value) TYPE csequence OPTIONAL
\*"------------------------------------------------------
  g\_input\_field = i\_start\_value.
  CALL SCREEN 100.
ENDFUNCTION.

MODULE status\_0100 OUTPUT.
  CLEAR g\_ok\_code.
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  CASE g\_ok\_code.
    WHEN '...'.
      ...
  ENDCASE.
ENDMODULE.


### abenlocal_declar_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Program Structure and Procedure Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogr_proc_structure_gdl.htm) → 

Local Declarations

Background

Local declarations can be made in a procedure ( [method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")). These are data types, data objects, and field symbols that are valid in the context of the procedure only. Therefore, they can only be addressed in the code of the procedure and are only available during the execution of the procedure (the data objects declared with STATICS are an exception).

Procedure-local declarations can be specified in any position of a procedure. However, the position of the declaration does not affect the validity area of the declared object (which always comprises the entire procedure), but only the static visibility.

Rule

Implement local declarations at the beginning of the procedure

Position the local declarations of a procedure ( [method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline") coherently and at the beginning of a procedure. The local declarations must not be distributed across the implementation of the procedure.

Details

Local declarations within a procedure ( [method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) are statically visible starting from the point of the program where they are positioned to the end of the procedure. However, because they are valid in the entire procedure, the declared entities can be accessed dynamically throughout the entire procedure. The following program example illustrates the different behavior:

METHOD demo\_method.
  FIELD-SYMBOLS <field\_symbol> TYPE any.
  ...
\* ASSIGN dobj TO <field\_symbol>. "Syntax error ...
  ASSIGN ('DOBJ') TO <field\_symbol>. "No error
  ASSERT <field\_symbol> IS ASSIGNED.
  ...
  DATA dobj TYPE i.
ENDMETHOD.

Because the different behavior of the [dynamic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_prog_technique_gdl.htm) and the static variant of the ASSIGN statement is rather unexpected, all declarations are supposed to be carried out at the beginning of the procedure, that is, between the initiating and the first executable statement. Then, the static and the dynamic visibility sections match.

This rule contradicts the common recommendations for other programming languages. They recommend declaring local variables as close to their use as possible to tightly restrict their validity area. In ABAP, however, there is no block-local validity of local variables. Positioning a declaration within the statement block of a loop, for example, does not make it possible to restrict the validity of this declaration to this statement block. Rather, the variable is valid within the entire procedure. So a declaration at the position where it is used can be misleading to developers or readers of a program who are not aware of this.

According to the rule, [the size of a procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenproc_volume_guidl.htm "Guideline") should be selected in such a way that the procedure remains clear for the reader, which means there is no good reason why all variables should not be declared as a whole at the beginning of a procedure.

Note

Within processing blocks that do not support any local data (dialog modules and event blocks), declarative statements must be [omitted completely](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_declar_guidl.htm "Guideline").

In [function modules and subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"), there should be no local data, only a method call.

Exception

[Inline declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclaration_inline_guidl.htm "Guideline") in procedures generally represent an exception. If used correctly, they can make a program easier to understand.

Bad Example

The following source code shows a local data declaration in a loop. Readers who are familiar with another programming language or even the developer of the program himself would probably expect the number variable to be set to value 10 for each loop pass. Indeed, number is set to 10 exactly once when the method starts because the variable is created only once for the context of the method and provided with a start value.

METHOD main.
  ...
  DO 10 TIMES.
    DATA number TYPE i VALUE 10.
    ...
    "number = 11, 13, 16, 20, ...
    number = number + sy-index.
    ...
  ENDDO.
  ...
ENDMETHOD.

Good Example

The following source code shows the corrected version of the above example, which behaves as the above example is expected to behave (if deeper ABAP knowledge is not involved). There is no block-local validity of data in ABAP, so proceed as shown below.

METHOD main.
  DATA number TYPE i.
  ...
  DO 10 TIMES.
    number = 10.
    ...
    "number = 11, 12, 13, 14, ...
    number = number + sy-index.
    ...
  ENDDO.
  ...
ENDMETHOD.
