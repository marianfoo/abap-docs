  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_obj_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Inline%20Declarations%2C%20ABENDECLARATION_INLINE_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Inline Declarations

Background   

The declaration operators

-   [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) for variables
-   [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm) for immutable variables
-   [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm) for field symbols

can be used to make inline declarations in [write positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_position_glosry.htm "Glossary Entry"). In this way, declarations are made in operational statements rather than in [declaration statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_statement_glosry.htm "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

Rule   

Only use inline declarations locally

Only make inline declarations in processing blocks that support [local data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_data_glosry.htm "Glossary Entry"). Use them as if they were local declarations in the current statement block. For inline declared variables that are written only once in the current context, [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm) is preferred over [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm).

Details   

If used correctly, inline declarations are an excellent way of making programs leaner and easier to understand. An inline declaration in a statement works like a short form of a declaration statement directly in front of the statement, which is why the guidelines for declaration statements must be followed:

-   The rule dictating that [no global program variables and field symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_variables_guidl.htm "Guideline") are to be declared also applies to inline declarations, without restrictions. For this reason, statements with inline declarations should only be specified in processing blocks with local data, namely procedures and preferably methods. If not, the variables and field symbols declared inline would be global in the program, with all the drawbacks listed in the description of the rule.
-   Inline declarations are an exception to the rule that [local declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_declar_guidl.htm "Guideline") should only be made at the start of a procedure. They are specified in operational statements, which means that, unlike declaration statements, they cannot be specified at the start of the procedure. Despite this, the restrictions stated in the rule for local declarations are still valid for inline declarations. In particular, the validity of inline declarations is not limited to their current statement block. Inline declarations should, therefore, only be specified in less complex procedures, so making them easier to understand. The variables and field symbols declared inline should only be used in the direct vicinity of their declaration. Under no circumstances should a variable declared inline be accessed dynamically before the declaration. When an inline declaration is specified in a (conditional) control structure, it should usually only be accessed within this statement block.
-   Using [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm) instead of [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) whenever possible can improve the robustness of a program.

Bad Example

Inline declaration of a field symbol <pattern> and two variables moff and mlen in a LOOP and their later reuse in a different loop. At first glance, it appears that the declarations are only valid in the first loop and only conditionally, but they are valid for the whole method and unconditionally.

METHOD demo\_method.
  "IMPORTING i\_tab1 TYPE TANDARD TABLE OF string
  "IMPORTING i\_tab2 TYPE TANDARD TABLE OF string
  "IMPORTING i\_text TYPE string
  IF i\_tab1 IS NOT INITIAL.
    LOOP AT i\_tab1 ASSIGNING FIELD-SYMBOL(<pattern>).
      FIND <pattern> IN i\_text MATCH OFFSET DATA(moff)
                               MATCH LENGTH DATA(mlen).
      ...
    ENDLOOP.
  ENDIF.
  IF i\_tab2 IS NOT INITIAL.
    LOOP AT i\_tab2 ASSIGNING <pattern>.
      FIND <pattern> IN i\_text MATCH OFFSET moff
                               MATCH LENGTH mlen.
      ...
    ENDLOOP.
  ENDIF.
ENDMETHOD.

Good Example

The field symbols and variables declared inline are only used locally in the respective loops. The fact that they are valid in the whole method is ignored, for the sake of simplicity. If the field symbol and the variables are only to be declared once for both loops, they should be declared at the start of the method using declaration statements.

METHOD demo\_method.
  "IMPORTING i\_tab1 TYPE TANDARD TABLE OF string
  "IMPORTING i\_tab2 TYPE TANDARD TABLE OF string
  "IMPORTING i\_text TYPE string
  IF i\_tab1 IS NOT INITIAL.
    LOOP AT i\_tab1 ASSIGNING FIELD-SYMBOL(<pattern1>).
      FIND <pattern1> IN i\_text MATCH OFFSET DATA(moff1)
                                MATCH LENGTH DATA(mlen1).
      ...
    ENDLOOP.
  ENDIF.
  IF i\_tab2 IS NOT INITIAL.
    LOOP AT i\_tab2 ASSIGNING FIELD-SYMBOL(<pattern2>.
      FIND <pattern2> IN i\_text MATCH OFFSET DATA(moff2)
                                MATCH LENGTH DATA(mlen2).
      ...
    ENDLOOP.
  ENDIF.
ENDMETHOD.