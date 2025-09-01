  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Catchable Runtime Errors in Release 4.0

With Release 4.0 runtime errors can be caught with [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\)).

In the past the occurrence of a runtime error always resulted in termination of the ABAP program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.
With [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\)) such critical program locations can now be caught. After ENDCATCH you can query if the program block was ended correctly or if a runtime error occurred that was detected.