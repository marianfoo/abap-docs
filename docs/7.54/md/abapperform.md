  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) → 

PERFORM

[Quick Reference](javascript:call_link\('abapperform_shortref.htm'\))

Syntax Forms

[General Subroutine Call](javascript:call_link\('abapperform_general.htm'\))
1\. PERFORM [subr\_identifier](javascript:call_link\('abapperform_form.htm'\)) *\[*[parameter\_list](javascript:call_link\('abapperform_parameters.htm'\))*\]*.
[Registration of Subroutines](javascript:call_link\('abapperform_subr.htm'\))
2\. PERFORM subr ON *{* *{*COMMIT *\[*LEVEL idx*\]**}* *|* *{*ROLLBACK*}* *}*.

Effect

Calls or registers [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry").

Subroutines can be called statically and dynamically, internally and externally. Parameters can only be passed if they are called statically. Furthermore, subroutines can be registered for execution at the end of an [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").

Programming Guideline

[Do not implement in function modules and subroutines](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")

Note

Subroutines are obsolete. Do not create new subroutines in new programs. Methods should be used instead. Subroutines created in existing programs for internal modularization can continue to be called. Whenever possible, however, external subroutine calls from other programs should be avoided.

Continue
[PERFORM - general](javascript:call_link\('abapperform_general.htm'\))
[PERFORM - parameter\_list](javascript:call_link\('abapperform_parameters.htm'\))