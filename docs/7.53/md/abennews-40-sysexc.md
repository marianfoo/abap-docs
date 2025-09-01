  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40.htm) → 

Catchable Runtime Errors in Release 4.0

From Release 4.0, runtime errors can be caught using [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcatch_sys.htm).

Previously, the occurrence of a runtime error always terminated the ABAP program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.
[CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcatch_sys.htm) can now be used to wrap these critical program spots. After ENDCATCH, it is then possible to query whether the program block was ended correctly or whether a runtime error occurred that was caught.