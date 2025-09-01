  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  P

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PUT%2C%20ABAPPUT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PUT - Short Reference

[Reference](javascript:call_link\('abapput.htm'\))

Syntax

PUT *{* node *|* <node> *}*.

Effect

Obsolete: Raises the event GET node in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), if data is available in the [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") of the node node. For node type A, a field symbol <node> is specified which is assigned a data object of the data type that is required in the statement NODES in the linked [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry").