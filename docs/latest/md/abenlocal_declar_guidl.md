  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Program Structure and Procedure Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogr_proc_structure_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Local%20Declarations%2C%20ABENLOCAL_DECLAR_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Local Declarations

Background   

Local declarations can be made in a procedure ([method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")). These are data types, data objects, and field symbols that are valid in the context of the procedure only. Therefore, they can only be addressed in the code of the procedure and are only available during the execution of the procedure (the data objects declared with STATICS are an exception).

Procedure-local declarations can be specified in any position of a procedure. However, the position of the declaration does not affect the validity area of the declared object (which always comprises the entire procedure), but only the static visibility.

Rule   

Implement local declarations at the beginning of the procedure

Position the local declarations of a procedure ([method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) coherently and at the beginning of a procedure. The local declarations must not be distributed across the implementation of the procedure.

Details   

Local declarations within a procedure ([method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) are statically visible starting from the point of the program where they are positioned to the end of the procedure. However, because they are valid in the entire procedure, the declared entities can be accessed dynamically throughout the entire procedure. The following program example illustrates the different behavior:

METHOD demo\_method.
  FIELD-SYMBOLS <field\_symbol> TYPE any.
  ...
\* ASSIGN dobj TO <field\_symbol>. "Syntax error ...
  ASSIGN ('DOBJ') TO <field\_symbol>. "No error
  ASSERT <field\_symbol> IS ASSIGNED.
  ...
  DATA dobj TYPE i.
ENDMETHOD.

Because the different behavior of the [dynamic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_prog_technique_gdl.htm) and the static variant of the ASSIGN statement is rather unexpected, all declarations are supposed to be carried out at the beginning of the procedure, that is, between the initiating and the first executable statement. Then, the static and the dynamic visibility sections match.

This rule contradicts the common recommendations for other programming languages. They recommend declaring local variables as close to their use as possible to tightly restrict their validity area. In ABAP, however, there is no block-local validity of local variables. Positioning a declaration within the statement block of a loop, for example, does not make it possible to restrict the validity of this declaration to this statement block. Rather, the variable is valid within the entire procedure. So a declaration at the position where it is used can be misleading to developers or readers of a program who are not aware of this.

According to the rule, [the size of a procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenproc_volume_guidl.htm "Guideline") should be selected in such a way that the procedure remains clear for the reader, which means there is no good reason why all variables should not be declared as a whole at the beginning of a procedure.

Note

Within processing blocks that do not support any local data (dialog modules and event blocks), declarative statements must be [omitted completely](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_declar_guidl.htm "Guideline").

In [function modules and subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"), there should be no local data, only a method call.

Exception

[Inline declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_inline_guidl.htm "Guideline") in procedures generally represent an exception. If used correctly, they can make a program more robust or easier to understand.

Bad Example

The following source code shows a local data declaration in a loop. Readers who are familiar with another programming language or even developers of the program themselves would probably expect the number variable to be set to value 10 for each loop pass. Indeed, number is set to 10 exactly once when the method starts because the variable is created only once for the context of the method and provided with a start value.

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