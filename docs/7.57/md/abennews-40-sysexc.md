  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-4.htm) →  [News for Release 4.0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Catchable Runtime Errors in Release 4.0, ABENNEWS-40-SYSEXC, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Catchable Runtime Errors in Release 4.0

From Release 4.0, runtime errors can be caught using [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_sys.htm).

Previously, the occurrence of a runtime error always terminated the ABAP program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.
[CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_sys.htm) can now be used to wrap these critical program spots. After ENDCATCH, it is then possible to query whether the program block was ended correctly or whether a runtime error occurred that was caught.