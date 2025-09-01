  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [System Fields](javascript:call_link\('abensystem_fields_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Return Code, ABENRETURN_CODE_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

Return Code

Background   

The most prominent system field is probably the [return code](javascript:call_link\('abenreturn_code_glosry.htm'\) "Glossary Entry") sy-subrc, which signals the successful execution of an ABAP statement or, if you are [using classic exceptions](javascript:call_link\('abenuse_exception_class_guidl.htm'\) "Guideline"), of a procedure. A return code of 0 generally indicates successful execution.

Rule   

Evaluate the return code sy-subrc

Evaluate the return code sy-subrc after every ABAP statement that sets the value according to the documentation. However, sy-subrc should never be set after statements are executed for which the setting of a return code is not documented.

Details   

The system field sy-subrc indicates whether a statement was successfully executed. If the execution was not successful, the program should usually react accordingly. If this does not happen, the program's response will probably be unexpected.

This rule is a specialization of the more general rule [evaluate system fields in the correct place](javascript:call_link\('abenevaluation_guidl.htm'\) "Guideline"). It is specified here again separately due to the prominent role of the return code sy-subrc. The system field sy-subrc must always be evaluated immediately and, if necessary, assigned to a help variable. An evaluation cannot occur after statements that set sy-subrc not defined, because otherwise wrong conclusions could easily be drawn.

Hint

Special care must be taken in [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)). If executed successfully, each method call sets the return code sy-subrc to 0, which means that functional method calls overwrite the return code when used in statements where the setting of the return code is not documented. The same applies to the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) when instances of classes are created.

Exception

If a handling action seems unnecessary because, in the developer's opinion, the statement is always executed successfully, the assumption should at least be saved and documented using an [assertion](javascript:call_link\('abenassertions_guidl.htm'\) "Guideline").

Bad Example

The following source code shows how further processing of data is performed using the work area of a SELECT statement, without a request from sy-subrc. However, the content of wa is usually undefined here, if a request from sy-subrc does not guarantee that database access will be successful.

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