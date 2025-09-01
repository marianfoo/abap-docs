  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CHECK, ABAPCHECK_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

CHECK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlog_exp_shortref.htm)*|*SELECT-OPTIONS.

Effect

Exits a [loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm) or a [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm) if the logical expression log\_exp is false. Within a loop, the current loop pass is exited and the next loop pass is executed. Outside of a loop, the current processing block is terminated.