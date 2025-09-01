  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Releases 4.0 and 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40.htm) → 

Catchable Runtime Errors in Release 4.0

With Release 4.0 runtime errors can be caught with [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm).

In the past the occurrence of a runtime error always resulted in termination of the ABAP program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.
With [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm) such critical program locations can now be caught. After ENDCATCH you can query if the program block was ended correctly or if a runtime error occurred that was detected.