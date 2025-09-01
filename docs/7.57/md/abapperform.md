  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PERFORM, ABAPPERFORM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

PERFORM

[Short Reference](javascript:call_link\('abapperform_shortref.htm'\))

Syntax Forms

[General Subroutine Call](javascript:call_link\('abapperform_general.htm'\))
1\. PERFORM [subr\_identifier](javascript:call_link\('abapperform_form.htm'\)) *\[*[parameter\_list](javascript:call_link\('abapperform_parameters.htm'\))*\]*.
[Registration of Subroutines](javascript:call_link\('abapperform_on_commit.htm'\))
2\. PERFORM subr ON *{* *{*COMMIT *\[*LEVEL idx*\]**}* *|* *{*ROLLBACK*}* *}*.

Effect

Calls or registers [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry").

Subroutines can be called statically and dynamically, internally and externally. Parameters can only be passed if they are called statically. Furthermore, subroutines can be registered for execution at the end of an [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").

Programming Guideline

[Do not implement in function modules and subroutines](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")

Hint

Subroutines are obsolete. No new subroutines should be created in new programs. Methods should be used instead. Subroutines that have been created in existing programs for internal modularization can continue to be called. Whenever possible, however, external subroutine calls from other programs should be avoided.

Continue
[PERFORM, general](javascript:call_link\('abapperform_general.htm'\))
[PERFORM, parameter\_list](javascript:call_link\('abapperform_parameters.htm'\))