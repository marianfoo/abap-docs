  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-610.htm) → 

Exception Handling in Release 6.10

Since Release 6.10 it has beenpossible to catch class based exceptions in [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm)...[CATCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_try.htm)... [ENDTRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendtry.htm)blocks. This replaces exception handling using either [catchable runtime errors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") or EXCEPTIONS parameters of function modules and methods.

The keyword [CLEANUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm) has been newly introduced for a program area that helps to create a consistent state after an exception or runtime error has occured within the protected area. Across the call hierarchy, runtime errors are caught at a higher level, so that if a method terminates, for instance, a consistent object state remains and global resources are released in accordance with regulations.

For a detailed description of this topic refer to [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm).