  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Type%20Checks%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-TYPE_CHECKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Type Checks in ABAP Release 7.53

[1\. Checks on Common Data Areas](#!ABAP_MODIFICATION_1@1@)
[2\. Checks on STRUCTURE Typing](#!ABAP_MODIFICATION_2@2@)
[3\. Checks on Literals as Actual Parameters](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Checks on Common Data Areas

Obsolete common data areas with the same name and defined using [COMMON PART](javascript:call_link\('abapdata_common.htm'\)) must have identical layouts.

-   Common data areas are now viewed as structures whose [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must be identical and whose deep components must be compatible (pairwise). If not, the runtime error LOAD\_COMMON\_PART\_STRUCT occurs.
-   In common data areas it is now no longer possible to declare [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") with the static type of program-local classes and interfaces, nor is it possible to declare [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") with the static type of program-local structured types.

Modification 2   

Checks on STRUCTURE Typing

In obsolete STRUCTURE typing of formal parameters and field symbols, one assigned data object must be at least as long as the structure in question. Typing checks now respect the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") at the end of the data object and the structure.

Modification 3   

Checks on Literals as Actual Parameters

The value of a literal passed to a procedure must not be modified in the procedure. In certain cases this was, however, possible, namely when [literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\)) were passed to differently typed CHANGING parameters of subroutines. This is now prevented by stricter checks and always produces a runtime error.