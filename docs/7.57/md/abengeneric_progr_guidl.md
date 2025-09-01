  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Dynamic Programming Techniques](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_prog_technique_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Dynamic Programming, ABENGENERIC_PROGR_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Dynamic Programming

Background   

Dynamic programming (dynamic creation of source code) makes programs as dynamic as possible. The following methods can be used to achieve this:

-   Dynamic token specification
    
    Dynamic token specification involves specifying individual operands or whole parts of statements (clauses) in the form of character-like data objects. These are usually enclosed in parentheses and must contain source code with correct syntax at runtime. Important examples:
    
    -   Dynamic access to attributes of classes
    -   Dynamic calls of procedures, particularly methods (known as dynamic invokes)
    -   Dynamic type specifications when anonymous data objects are created. In this case, types can be used that are only created at runtime using Run Time Type Services ([RTTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrtti.htm)).
    -   Dynamic specifications of clauses when internal tables are accessed or in ABAP SQL.
        
        Dynamic token specifications are often used in combination with [dynamic access to data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_access_data_obj_guidl.htm "Guideline").
        
-   Program generation
    
    Program generation involves preparing complete programs as content for internal tables and then creating the programs. A distinction is made between the following cases:
    
    -   Transient program generation using GENERATE SUBROUTINE POOL, where the generated programs only exist in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current program.
    -   Persistent program generation with INSERT REPORT. The generated programs are saved as repository objects.

Rule   

Avoiding Program Generation

Program generation should only be used as a last resort for dynamic programming. Other dynamic methods (especially in application programs) should be tried first, such as dynamic token specification, runtime type services (RTTS) and dynamic access to data objects.

Details   

Program generation has a lot of conceptual problems such as checking, testing, and editing the new programs. In addition, programs generated hastily can be a security risk because they cannot be statically checked. Creating programs is usually very intensive in terms of runtime and resources. Due to the above reasons, program generation should be avoided wherever possible and other dynamic methods used instead:

-   The dynamic token specification has the advantage that only parts of the statements are dynamic. The rest can be checked statically.
-   Runtime type services (RTTS) can be used as follows:
    -   RTTS define the type properties of data objects at runtime (Runtime Type Information, RTTI). The capabilities of RTTI extend far beyond the statement DESCRIBE FIELD.
    -   It creates types at runtime (Runtime Type Creation, RTTC). RTTC should be used if the CREATE DATA statement does not offer sufficient options for the planned implementation (for example, building new structures).

These methods, combined with [field symbols and data references](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_access_data_obj_guidl.htm "Guideline"), are now usually sufficient for most tasks that could only be solved using program generation in older releases.

Exception

Program generation should only be used as a last resort if the other methods are not sufficient to achieve dynamic program control. Another reason is the processing speed. When program generation is used, the costs incurred due to checking and generation occur less frequently than with the other dynamic methods. However, program generation usually has worse system performance than dynamic token specification. The conceptual problems explained at the start are still applicable here and therefore careful consideration is needed.

Unlike application programs, system programs usually frequently rely on program generation and the associated language constructs. Examples include the generation of proxy classes for Web Dynpro or Web Services. ABAP Editor itself also uses statements such as READ REPORT and INSERT REPORT.

Hints

-   Even generated programs should always adhere to the predefined guidelines. For example, in a generated subroutine pool the program logic should be implemented/generated in the form of [local classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). The generated functions are usually called by means of a single [subroutine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunct_module_subroutine_guidl.htm "Guideline") that is used as an entry point into the generated local classes (see the following example).
-   To minimize the risks involved, it can be useful to save templates with correct syntax that adhere to the guidelines in the repository. READ REPORT can then be used to load the templates as templates for dynamically generated programs, in which only small parts are changed or added at runtime.
-   Subroutines in generated subroutine pools are an exception to the [rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"), which states that subroutines should no longer be created, and an exception to the [rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintern_extern_proc_call_guidl.htm "Guideline"), which states that subroutines should no longer be called. In addition, absolute type names can be used to access the local classes of a generated subroutine pool. However, this violates the rule [Only call suitable procedures externally](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintern_extern_proc_call_guidl.htm "Guideline").

Bad Example

The following source code demonstrates unnecessary program generation. The only reason for generating the program are dynamic reads on a database table. The name of the database table and the row type of the internal table into which data is read are replaced by a parameter value in the source code of the program to be generated. The value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) is used to create the internal table. As recommended, the subroutine of the generated subroutine pool only contains the call for a method of a local class where the actual implementation is located. Instead of filling the program table row by row, it would have also been possible in this case to create a corresponding program in the repository and load this program using READ REPORT.

PARAMETERS dbtab TYPE c LENGTH 16.

DATA table TYPE REF TO data.
FIELD-SYMBOLS <table> TYPE STANDARD TABLE.

DATA: source TYPE TABLE OF string,
      program TYPE string,
      mess TYPE string.

source = VALUE #(
  ( \`program.\` )
  ( \`class main definition.\` )
  ( \`   public section.\` )
  ( \`     class-data\` )
  ( \`       dyn\_table type standard table of dyn\_name.\` )
  ( \`     class-methods meth\` )
  ( \`       exporting table type ref to data.\` )
  ( \`endclass.\` )
  ( \`class main implementation.\` )
  ( \`   method meth.\` )
  ( \`     select \*\` )
  ( \`            from dyn\_name\` )
  ( \`            into table @dyn\_table.\` )
  ( \`     get reference of dyn\_table into table.\` )
  ( \`   endmethod.\` )
  ( \`endclass.\` )
  ( \`form subr changing table type ref to data.\` )
  ( \`   main=>meth(\` )
  ( \` importing table = table ).\` )
  ( \`endform.\` ) ).

REPLACE ALL OCCURRENCES OF 'dyn\_name'
        IN TABLE source WITH dbtab.
GENERATE SUBROUTINE POOL source NAME program MESSAGE mess.
IF sy-subrc = 0.
   PERFORM subr IN PROGRAM (program) CHANGING table.
   IF table IS BOUND.
     ASSIGN table->\* TO <table>.
   ENDIF.
ELSE.
   ...

ENDIF.

Good Example

The following source code produces the same result as the example above, when executed successfully. In other words, the field symbol <table> points to an internal table that is filled with data from the dynamically specified database table. However, this task is performed much more efficiently in the example below due to the creation of an anonymous data object and a dynamically specified token. If the target table cannot be structured in exactly the same way as the database table, Runtime Type Creation (RTTC) must also be used.

PARAMETERS dbtab TYPE c LENGTH 20.
DATA table TYPE REF TO data.
FIELD-SYMBOLS <table> TYPE STANDARD TABLE.

TRY.
   CREATE DATA table TYPE TABLE OF (dbtab).
   ASSIGN table->\* TO <table>.
   SELECT \*
         FROM (dbtab)
         INTO TABLE @<table>.
  CATCH cx\_sy\_create\_data\_error cx\_sy\_dynamic\_osql\_error.
  ...
ENDTRY.