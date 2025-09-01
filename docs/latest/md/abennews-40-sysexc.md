  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for ABAP Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Catchable%20Runtime%20Errors%20in%20ABAP%20Release%204.0%2C%20ABENNEWS-40-SYSEXC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Catchable Runtime Errors in ABAP Release 4.0

From ABAP release 4.0, runtime errors can be caught using [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\)).

Previously, the occurrence of a runtime error always terminated the ABAP program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.

[CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\)) can now be used to wrap these critical program spots. After ENDCATCH, it is then possible to query whether the program block was ended correctly or whether a runtime error occurred that was caught.