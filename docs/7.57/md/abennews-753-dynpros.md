  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Dynpros in Release 7.53, ABENNEWS-753-DYNPROS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

Dynpros in Release 7.53

Modification

Reference Value for Conversion Routines

An optional input parameter with the predefined name REFVAL can be created for the function modules for [conversion routines](javascript:call_link\('abenconversion_exits.htm'\)). When a dynpro field of the type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is converted, this parameter is given the value of a an associated reference field of the type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) automatically If [WRITE USING EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)) is used, the input parameter REFVAL is not filled.