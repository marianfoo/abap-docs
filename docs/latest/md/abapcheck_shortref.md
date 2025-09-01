  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CHECK%2C%20ABAPCHECK_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CHECK - Short Reference

[Reference](javascript:call_link\('abapcheck_loop.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\))*|*SELECT-OPTIONS.

Effect

Exits a [loop](javascript:call_link\('abapcheck_loop.htm'\)) or a [processing block](javascript:call_link\('abapcheck_processing_blocks.htm'\)) if the logical expression log\_exp is false. Within a loop, the current loop pass is exited and the next loop pass is executed. Outside of a loop, the current processing block is terminated.