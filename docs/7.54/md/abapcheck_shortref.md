  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  C

CHECK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcheck_loop.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlog_exp_shortref.htm)*|*SELECT-OPTIONS.

Effect

Exits a [loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcheck_loop.htm) or a [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcheck_processing_blocks.htm) if the logical expression log\_exp is incorrect. Within a loop, the current loop pass is exited and the next loop pass is executed. Outside of a loop, the current processing block is terminated.