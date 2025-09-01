  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Catchable Runtime Errors in Release 4.0

From Release 4.0, runtime errors can be caught using [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\)).

Previously, the occurrence of a runtime error always terminated the ABAP program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.
[CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\)) can now be used to wrap these critical program spots. After ENDCATCH, it is then possible to query whether the program block was ended correctly or whether a runtime error occurred that was caught.