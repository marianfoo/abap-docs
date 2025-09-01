  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Handling%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Exception Handling in ABAP Release 6.10

Since ABAP release 6.10 it has been possible to catch class-based exceptions in [TRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm)...[CATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm)... [ENDTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendtry.htm) blocks. This replaces exception handling using either [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") or the EXCEPTIONS parameters of function modules and methods.

The new keyword [CLEANUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) has been introduced for a program area that helps to create a consistent state after an exception or runtime error occurs within the protected area. Across the call hierarchy, runtime errors are caught at a higher level, so that if a method terminates, for instance, a consistent object state remains and global resources are released in accordance with regulations.

For a detailed description of this topic, see [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm).