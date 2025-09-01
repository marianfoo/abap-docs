  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CHECK - Quick reference

[Reference](javascript:call_link\('abapcheck_loop.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\))*|*SELECT-OPTIONS.

Effect

Exits a [loop](javascript:call_link\('abapcheck_loop.htm'\)) or a [processing block](javascript:call_link\('abapcheck_processing_blocks.htm'\)) if the logical expression log\_exp is incorrect. Within a loop, the current loop pass is exited and the next loop pass is executed. Outside of a loop, the current processing block is terminated.