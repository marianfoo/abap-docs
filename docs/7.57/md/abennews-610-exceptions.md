  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.10](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exception Handling in Release 6.10, ABENNEWS-610-EXCEPTIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exception Handling in Release 6.10

Since Release 6.10 it has been possible to catch class-based exceptions in [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm)...[CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm)... [ENDTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendtry.htm) blocks. This replaces exception handling using either [catchable runtime errors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") or the EXCEPTIONS parameters of function modules and methods.

The new keyword [CLEANUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) has been introduced for a program area that helps to create a consistent state after an exception or runtime error occurs within the protected area. Across the call hierarchy, runtime errors are caught at a higher level, so that if a method terminates, for instance, a consistent object state remains and global resources are released in accordance with regulations.

For a detailed description of this topic, see [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm).